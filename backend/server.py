"""
BenchPro Backend — Flask API Server
Serves the API endpoints and the frontend static files.
"""
import os
import uuid
import threading
import secrets
from flask import Flask, request, jsonify, send_from_directory, Response  # type: ignore
from flask_cors import CORS  # type: ignore
from flask_limiter import Limiter  # type: ignore
from flask_limiter.util import get_remote_address  # type: ignore
from werkzeug.utils import secure_filename  # type: ignore
from werkzeug.security import generate_password_hash, check_password_hash  # type: ignore

from .config import (  # type: ignore
    HOST, PORT, DEBUG, SECRET_KEY, UPLOAD_DIR, FRONTEND_DIR,
    MAX_CONTENT_LENGTH, ALLOWED_EXTENSIONS, TEAM_CODE, TEAM_NAME,
    CORS_ORIGINS, RATE_LIMIT, RATE_LIMIT_AUTH, RATE_LIMIT_UPLOAD,
    APP_URL, GOOGLE_CLIENT_ID, APPLE_CLIENT_ID
)
from . import models  # type: ignore
from . import challenges_service  # type: ignore
from .analyzer import get_analyzer  # type: ignore
from .ai_coach import generate_coach_feedback, analyze_stat_sheet  # type: ignore
from .swish_analyzer import analyze_basketball_shot  # type: ignore
from .email_service import send_password_reset_email  # type: ignore
from . import oauth_service  # type: ignore

# ===== APP SETUP =====

app = Flask(__name__, static_folder=FRONTEND_DIR, static_url_path='')
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH
app.config['SECRET_KEY'] = SECRET_KEY or 'dev-secret-change-in-production'

# CORS — restrict origins in production (set CORS_ORIGINS env var)
cors_kw = {'origins': CORS_ORIGINS.split(',')} if CORS_ORIGINS != '*' else {}
CORS(app, **cors_kw)

# Rate limiting (in-memory; use Redis for multi-worker production)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=[RATE_LIMIT],
    storage_uri='memory://'
)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# ===== AUTH =====

def get_current_user():
    """Get current user from Authorization: Bearer <token> header. Returns user dict or None."""
    auth = request.headers.get('Authorization')
    if not auth or not auth.startswith('Bearer '):
        return None
    token = auth[7:].strip()
    return models.get_user_by_token(token)


def require_auth(f):
    """Decorator: require authenticated user. Injects user as kwarg."""
    from functools import wraps
    @wraps(f)
    def wrapped(*args, **kwargs):
        user = get_current_user()
        if not user:
            return jsonify({'error': 'Authentication required'}), 401
        kwargs['current_user'] = user
        return f(*args, **kwargs)
    return wrapped


def require_coach(f):
    """Decorator: require coach. Use after require_auth."""
    from functools import wraps
    @wraps(f)
    def wrapped(*args, **kwargs):
        user = kwargs.get('current_user')
        if not user or user.get('user_type') != 'coach':
            return jsonify({'error': 'Coach access required'}), 403
        return f(*args, **kwargs)
    return wrapped


# ===== FRONTEND SERVING =====

@app.route('/')
def serve_index():
    """Serve the coach dashboard."""
    return send_from_directory(FRONTEND_DIR, 'fullwebsite.html')
@app.route('/analyze/basketball', methods=['POST'])
def analyze_basketball():
    if 'video' not in request.files:
        return jsonify({"error": "No video uploaded"}), 400
        
    video = request.files['video']
    
    # Save temp file
    temp_path = f"uploads/temp_{video.filename}"
    video.save(temp_path)
    
    # Run the AI
    results = analyze_basketball_shot(temp_path)
    
    # Clean up (optional: remove file after)
    # os.remove(temp_path)
    
    return jsonify(results)

@app.route('/student')
@app.route('/student.html')
def serve_student():
    """Serve the student/player view."""
    return send_from_directory(FRONTEND_DIR, 'student.html')


@app.route('/forgot-password')
def serve_forgot_password():
    """Serve the forgot password page."""
    return send_from_directory(FRONTEND_DIR, 'forgot-password.html')


@app.route('/reset-password')
def serve_reset_password():
    """Serve the password reset page (token in query string)."""
    return send_from_directory(FRONTEND_DIR, 'reset-password.html')


@app.route('/<path:path>')
def serve_static(path):
    """Serve any static file (CSS, JS, images)."""
    if os.path.exists(os.path.join(FRONTEND_DIR, path)):
        return send_from_directory(FRONTEND_DIR, path)
    return jsonify({'error': 'Not found'}), 404


# ===== API: HEALTH CHECK =====

@app.route('/api/health')
def health():
    """Server health check."""
    return jsonify({
        'status': 'ok',
        'team': TEAM_NAME,
        'team_code': TEAM_CODE,
        'version': '1.0.0'
    })


# ===== API: AUTH =====

@app.route('/api/auth/signup', methods=['POST'])
@limiter.limit(RATE_LIMIT_AUTH)
def auth_signup():
    """
    Create a new account. User is logged in immediately.
    Body: { email, password, name, user_type?, team_code?, plan? }
    """
    data = request.get_json() or {}
    email = (data.get('email') or '').strip()
    password = data.get('password') or ''
    name = (data.get('name') or '').strip()
    user_type = (data.get('user_type') or 'coach').lower()
    if user_type not in ('coach', 'player'):
        user_type = 'coach'
    team_code = (data.get('team_code') or '').strip()
    plan = (data.get('plan') or 'standard').lower()

    if not email or not password or not name:
        return jsonify({'error': 'Email, password, and name are required'}), 400
    if len(password) < 4:
        return jsonify({'error': 'Password must be at least 4 characters'}), 400

    password_hash = generate_password_hash(password)
    user = models.create_user(
        email=email,
        password_hash=password_hash,
        name=name,
        user_type=user_type,
        team_code=team_code,
        plan=plan
    )
    if not user:
        return jsonify({'error': 'An account with this email already exists'}), 409

    token = secrets.token_urlsafe(32)
    models.set_user_token(user['id'], token)
    return jsonify({
        'message': 'Account created',
        'token': token,
        'user': {
            'id': user['id'],
            'email': user['email'],
            'name': user['name'],
            'user_type': user['user_type'],
            'team_code': user.get('team_code', ''),
            'plan': user.get('plan', 'standard')
        }
    }), 201


@app.route('/api/auth/login', methods=['POST'])
@limiter.limit(RATE_LIMIT_AUTH)
def auth_login():
    """
    Log in with email and password. Requires verified email.
    Body: { email, password }
    """
    data = request.get_json() or {}
    email = (data.get('email') or '').strip()
    password = data.get('password') or ''

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = models.get_user_by_email(email)
    if not user or not check_password_hash(user['password_hash'], password):
        return jsonify({'error': 'Invalid email or password'}), 401

    token = secrets.token_urlsafe(32)
    models.set_user_token(user['id'], token)
    return jsonify({
        'token': token,
        'user': {
            'id': user['id'],
            'email': user['email'],
            'name': user['name'],
            'user_type': user['user_type'],
            'team_code': user.get('team_code', ''),
            'plan': user.get('plan', 'standard')
        }
    }), 200


@app.route('/api/auth/me')
@require_auth
def auth_me(current_user):
    """Return current user info (validates token)."""
    return jsonify({
        'user': {
            'id': current_user['id'],
            'email': current_user['email'],
            'name': current_user['name'],
            'user_type': current_user['user_type'],
            'team_code': current_user.get('team_code', ''),
            'plan': current_user.get('plan', 'standard')
        }
    })


@app.route('/api/auth/logout', methods=['POST'])
@require_auth
def auth_logout(current_user):
    """Clear auth token (log out)."""
    models.clear_user_token(current_user['id'])
    return jsonify({'message': 'Logged out'}), 200


@app.route('/api/auth/forgot-password', methods=['POST'])
@limiter.limit(RATE_LIMIT_AUTH)
def auth_forgot_password():
    """Request password reset. Sends email with reset link."""
    data = request.get_json() or {}
    email = (data.get('email') or '').strip()
    if not email:
        return jsonify({'error': 'Email is required'}), 400

    user = models.get_user_by_email(email)
    if user:
        token = models.create_auth_token(user['id'], 'password_reset', expires_hours=1)
        send_password_reset_email(email, user['name'], token)

    return jsonify({'message': 'If that email exists, we sent a password reset link'}), 200


@app.route('/api/auth/reset-password', methods=['POST'])
@limiter.limit(RATE_LIMIT_AUTH)
def auth_reset_password():
    """Reset password using token from email."""
    data = request.get_json() or {}
    token = (data.get('token') or '').strip()
    new_password = data.get('new_password') or ''

    if not token or not new_password:
        return jsonify({'error': 'Token and new password are required'}), 400
    if len(new_password) < 4:
        return jsonify({'error': 'Password must be at least 4 characters'}), 400

    user_id = models.consume_auth_token(token, 'password_reset')
    if not user_id:
        return jsonify({'error': 'Invalid or expired reset link. Request a new one.'}), 400

    password_hash = generate_password_hash(new_password)
    conn = models.get_db()
    conn.execute("UPDATE users SET password_hash = ? WHERE id = ?", (password_hash, user_id))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Password updated. You can now log in.'}), 200


# ===== API: OAUTH (Google, Apple) =====

def _oauth_success_redirect(token):
    """Redirect to frontend with token in URL."""
    from flask import redirect
    from urllib.parse import urlencode
    base = (APP_URL or request.url_root).rstrip('/')
    if not base.startswith('http'):
        base = request.url_root.rstrip('/')
    # Serve our app at root
    qs = urlencode({'token': token})
    return redirect(f'{base}/?{qs}', code=302)


def _oauth_error_redirect(message='Sign in failed'):
    """Redirect to frontend with error."""
    from flask import redirect
    from urllib.parse import urlencode
    base = (APP_URL or request.url_root).rstrip('/')
    if not base.startswith('http'):
        base = request.url_root.rstrip('/')
    qs = urlencode({'oauth_error': message})
    return redirect(f'{base}/?{qs}', code=302)


@app.route('/api/auth/google/authorize')
def oauth_google_authorize():
    """Redirect to Google OAuth consent screen."""
    url = oauth_service.get_google_authorize_url()
    if not url:
        return jsonify({'error': 'Google sign-in is not configured'}), 503
    from flask import redirect
    return redirect(url, code=302)


@app.route('/api/auth/google/callback')
@limiter.limit(RATE_LIMIT_AUTH)
def oauth_google_callback():
    """Handle Google OAuth callback, create/update user, redirect with token."""
    code = request.args.get('code')
    if not code:
        return _oauth_error_redirect('Missing authorization code')

    info = oauth_service.exchange_google_code(code)
    if not info or not info.get('sub') or not info.get('email'):
        return _oauth_error_redirect('Could not get your Google account info')

    user, _ = models.get_or_create_oauth_user(
        provider='google',
        subject_id=info['sub'],
        email=info['email'],
        name=info['name'],
        user_type='coach'
    )
    if not user:
        return _oauth_error_redirect('Could not create account')

    token = secrets.token_urlsafe(32)
    models.set_user_token(user['id'], token)
    return _oauth_success_redirect(token)


@app.route('/api/auth/apple/authorize')
def oauth_apple_authorize():
    """Redirect to Apple Sign In."""
    url = oauth_service.get_apple_authorize_url()
    if not url:
        return jsonify({'error': 'Apple sign-in is not configured'}), 503
    from flask import redirect
    return redirect(url, code=302)


@app.route('/api/auth/apple/callback', methods=['GET', 'POST'])
@limiter.limit(RATE_LIMIT_AUTH)
def oauth_apple_callback():
    """Handle Apple OAuth callback (POST from Apple). Create/update user, redirect with token."""
    # Apple sends POST with code, id_token, user (optional), state
    code = request.form.get('code') or request.args.get('code')
    id_token = request.form.get('id_token') or request.args.get('id_token')
    user_json = request.form.get('user')

    if not code and not id_token:
        return _oauth_error_redirect('Missing authorization from Apple')

    info = oauth_service.exchange_apple_code(code=code, id_token=id_token, user_json=user_json)
    if not info or not info.get('sub'):
        return _oauth_error_redirect('Could not get your Apple account info')

    user, _ = models.get_or_create_oauth_user(
        provider='apple',
        subject_id=info['sub'],
        email=info['email'],
        name=info['name'],
        user_type='coach'
    )
    if not user:
        return _oauth_error_redirect('Could not create account')

    token = secrets.token_urlsafe(32)
    models.set_user_token(user['id'], token)
    return _oauth_success_redirect(token)


@app.route('/api/auth/oauth/status')
def oauth_status():
    """Return which OAuth providers are configured (for frontend to show/hide buttons)."""
    return jsonify({
        'google': bool(GOOGLE_CLIENT_ID),
        'apple': bool(APPLE_CLIENT_ID),
    })


@app.route('/api/team/create-code', methods=['POST'])
@require_auth
def create_team_code(current_user):
    """Generate a new team code for the coach. Coach only."""
    if current_user.get('user_type') != 'coach':
        return jsonify({'error': 'Only coaches can create team codes'}), 403
    code = models.create_team_code_for_user(current_user['id'])
    return jsonify({'team_code': code}), 200


# ===== API: VIDEO UPLOAD =====

@app.route('/api/upload', methods=['POST'])
@limiter.limit(RATE_LIMIT_UPLOAD)
@require_auth
def upload_video(current_user):
    """
    Upload a game film for analysis.
    Expects multipart form with:
    - file: video file (mp4, mov, avi, etc.)
    - title: game title (optional)
    - opponent: opponent team name (optional)
    - date: game date (optional)
    """
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    if not allowed_file(file.filename):
        return jsonify({
            'error': f'Invalid file type. Allowed: {", ".join(ALLOWED_EXTENSIONS)}'
        }), 400

    # Save file with unique name
    original_name = secure_filename(file.filename)
    unique_name = f"{uuid.uuid4().hex}_{original_name}"
    file_path = os.path.join(UPLOAD_DIR, unique_name)
    file.save(file_path)

    # Get metadata from form
    title = request.form.get('title', original_name)
    opponent = request.form.get('opponent', '')
    date = request.form.get('date', '')

    # Create game record
    game_id = models.create_game(
        title=title,
        opponent=opponent,
        date=date,
        file_path=file_path,
        file_name=original_name,
        user_id=current_user['id']
    )


    # Start analysis in background thread
    thread = threading.Thread(
        target=_run_analysis,
        args=(game_id, file_path),
        daemon=True
    )
    thread.start()

    return jsonify({
        'id': game_id,
        'status': 'uploaded',
        'message': f'Video uploaded. Analysis started for: {title}'
    }), 201


@app.route('/api/upload_stats', methods=['POST'])
@limiter.limit(RATE_LIMIT_UPLOAD)
@require_auth
def upload_stats(current_user):
    """
    Upload a game stat sheet (image or CSV) for analysis. Saves to DB and returns analysis.
    """
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    title = (request.form.get('title') or '').strip() or secure_filename(file.filename)

    # Save file with unique name
    original_name = secure_filename(file.filename)
    unique_name = f"{uuid.uuid4().hex}_stats_{original_name}"
    file_path = os.path.join(UPLOAD_DIR, unique_name)
    file.save(file_path)

    try:
        analysis_html = analyze_stat_sheet(file_path)
        sid = models.create_stat_sheet(
            user_id=current_user['id'],
            title=title,
            file_name=original_name,
            file_path=file_path,
            analysis_html=analysis_html or ''
        )
        return jsonify({
            'status': 'success',
            'analysis': analysis_html,
            'id': sid,
            'title': title,
            'created_at': __import__('datetime').datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


def _run_analysis(game_id, file_path):
    """Run video analysis in a background thread."""
    try:
        analyzer = get_analyzer()
        analyzer.analyze_video(game_id, file_path)
    except Exception as e:
        print(f"[ERROR] Background analysis failed for game #{game_id}: {e}")
        models.update_game_status(game_id, 'error', error_message=str(e))


# ===== API: ANALYSIS STATUS & RESULTS =====

def _can_access_game(game, user_id):
    """Check if user can access game (owns it or legacy with no owner)."""
    if game.get('user_id') is None:
        return True  # Legacy game, allow access
    return game.get('user_id') == user_id


@app.route('/api/analysis/<int:game_id>')
@require_auth
def get_analysis(game_id, current_user):
    """Get full analysis results for a game."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404
    if not _can_access_game(game, current_user['id']):
        return jsonify({'error': 'Access denied'}), 403

    analysis = models.get_analysis(game_id)
    events = models.get_events(game_id)

    return jsonify({
        'game': game,
        'analysis': analysis,
        'events': events[:100],  # Limit events to avoid huge responses
        'events_total': len(events)
    })


@app.route('/api/analysis/<int:game_id>/status')
@require_auth
def get_analysis_status(game_id, current_user):
    """Check processing status for a game."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404
    if not _can_access_game(game, current_user['id']):
        return jsonify({'error': 'Access denied'}), 403

    return jsonify({
        'id': game_id,
        'status': game['status'],
        'progress': game['progress'],
        'error_message': game.get('error_message', '')
    })


# ===== API: CLIPS (GAMES) =====

@app.route('/api/clips')
@require_auth
def list_clips(current_user):
    """List all clips: video games + stat sheet analyses, merged and sorted by created_at."""
    games = models.get_all_games(user_id=current_user['id'])
    stat_sheets = models.get_all_stat_sheets(current_user['id'])

    result = []
    for game in games:
        analysis = models.get_analysis(game['id'])
        result.append({
            'id': game['id'],
            'type': 'video',
            'title': game['title'],
            'opponent': game.get('opponent', ''),
            'date': game.get('date', ''),
            'status': game['status'],
            'progress': game.get('progress', 0),
            'duration': game.get('duration_seconds', 0),
            'file_name': game.get('file_name', ''),
            'created_at': game.get('created_at', ''),
            'has_analysis': analysis is not None,
            'player_count': analysis['total_players_detected'] if analysis else 0,
            'event_count': analysis['total_events'] if analysis else 0
        })
    for s in stat_sheets:
        result.append({
            'id': s['id'],
            'type': 'stat_sheet',
            'title': s['title'],
            'opponent': '',
            'date': '',
            'status': 'complete',
            'progress': 100,
            'file_name': s.get('file_name', ''),
            'created_at': s.get('created_at', ''),
            'analysis_html': s.get('analysis_html', ''),
            'player_count': 0,
            'event_count': 0
        })

    # Sort by created_at descending
    result.sort(key=lambda x: x.get('created_at', '') or '', reverse=True)
    return jsonify(result)


@app.route('/api/clips/<int:game_id>', methods=['DELETE'])
@require_auth
def delete_clip(game_id, current_user):
    """Delete a video game and its analysis data."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404
    if not _can_access_game(game, current_user['id']):
        return jsonify({'error': 'Access denied'}), 403

    models.delete_game(game_id)
    return jsonify({'message': f'Game #{game_id} deleted'})


@app.route('/api/stat-sheets/<int:stat_id>')
@require_auth
def get_stat_sheet(stat_id, current_user):
    """Get a single stat sheet analysis."""
    stat = models.get_stat_sheet(stat_id, current_user['id'])
    if not stat:
        return jsonify({'error': 'Stat sheet not found'}), 404
    return jsonify({
        'id': stat['id'],
        'title': stat['title'],
        'file_name': stat.get('file_name', ''),
        'analysis_html': stat.get('analysis_html', ''),
        'created_at': stat.get('created_at', '')
    })


@app.route('/api/stat-sheets/<int:stat_id>', methods=['DELETE'])
@require_auth
def delete_stat_sheet(stat_id, current_user):
    """Delete a stat sheet analysis."""
    if not models.delete_stat_sheet(stat_id, current_user['id']):
        return jsonify({'error': 'Stat sheet not found'}), 404
    return jsonify({'message': f'Stat sheet #{stat_id} deleted'})


# ===== API: PLAYERS =====

@app.route('/api/players')
@require_auth
def list_players(current_user):
    """List all detected players across user's games."""
    games = models.get_all_games(user_id=current_user['id'])
    all_stats = []
    for game in games:
        analysis = models.get_analysis(game['id'])
        if analysis and analysis.get('stats'):
            stats = analysis['stats']
            all_stats.append({
                'game_id': game['id'],
                'game_title': game['title'],
                'players': stats.get('players', {}),
                'teams': stats.get('teams', {})
            })
    return jsonify(all_stats)


# ===== API: TEAM =====

@app.route('/api/team')
@require_auth
def team_stats(current_user):
    """Get aggregated team stats across user's games."""
    games = models.get_all_games(user_id=current_user['id'])
    total_games = len([g for g in games if g['status'] == 'complete'])
    total_events: int = 0
    total_player_detections: int = 0
    total_duration: float = 0.0

    for game in games:
        analysis = models.get_analysis(game['id'])
        if analysis:
            total_events += int(analysis.get('total_events', 0))  # type: ignore
            total_player_detections += int(analysis.get('total_players_detected', 0))  # type: ignore
            stats = analysis.get('stats', {})
            total_duration += float(stats.get('video', {}).get('duration_seconds', 0))  # type: ignore

    return jsonify({
        'team_name': TEAM_NAME,
        'team_code': TEAM_CODE,
        'total_games_analyzed': total_games,
        'total_events_detected': total_events,
        'total_player_detections': total_player_detections,
        'total_film_seconds': round(total_duration, 1),  # type: ignore
        'total_film_formatted': f"{int(total_duration // 60)}:{int(total_duration % 60):02d}"  # type: ignore
    })


# ===== API: EVENTS =====

@app.route('/api/events/<int:game_id>')
@require_auth
def get_game_events(game_id, current_user):
    """Get all events for a specific game."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404
    if not _can_access_game(game, current_user['id']):
        return jsonify({'error': 'Access denied'}), 403

    event_type = request.args.get('type')
    events = models.get_events(game_id, event_type)

    return jsonify({
        'game_id': game_id,
        'events': events,
        'total': len(events)
    })


# ===== API: CHALLENGES =====

def _get_team_code(user):
    """Get team_code for coach (their code) or player (their joined code)."""
    return (user.get('team_code') or '').strip()


@app.route('/api/challenges', methods=['GET'])
@require_auth
def list_challenges(current_user):
    """List challenges for the user's team. Coach sees all; player sees active."""
    team_code = _get_team_code(current_user)
    if not team_code:
        return jsonify({'challenges': [], 'message': 'No team assigned'}), 200
    include_expired = current_user.get('user_type') == 'coach'
    challenges = models.get_challenges_for_team(team_code, include_expired=include_expired)
    return jsonify({'challenges': challenges}), 200


@app.route('/api/challenges', methods=['POST'])
@require_auth
@require_coach
def create_challenge(current_user):
    """Create a new challenge. Coach only."""
    team_code = _get_team_code(current_user)
    if not team_code:
        return jsonify({'error': 'Create a team code first in Settings'}), 400
    data = request.get_json() or {}
    title = (data.get('title') or '').strip()
    description = (data.get('description') or '').strip()
    challenge_type = (data.get('challenge_type') or 'custom').lower()
    xp_reward = int(data.get('xp_reward', 50))
    goal_value = float(data.get('goal_value', 1))
    start_date = (data.get('start_date') or '').strip()
    end_date = (data.get('end_date') or '').strip()
    verification_type = (data.get('verification_type') or 'manual').lower()
    if not title or not start_date or not end_date:
        return jsonify({'error': 'Title, start date, and end date are required'}), 400
    valid_types = ('shooting', 'defense', 'workout', 'film', 'custom')
    if challenge_type not in valid_types:
        challenge_type = 'custom'
    valid_ver = ('manual', 'stat_based', 'submission')
    if verification_type not in valid_ver:
        verification_type = 'manual'
    xp_reward = max(1, min(500, xp_reward))
    cid = models.create_challenge(
        team_code=team_code,
        title=title,
        description=description,
        challenge_type=challenge_type,
        xp_reward=xp_reward,
        goal_value=goal_value,
        start_date=start_date,
        end_date=end_date,
        created_by_coach_id=current_user['id'],
        verification_type=verification_type
    )
    challenge = models.get_challenge(cid)
    # Notify team players
    players = models.get_players_with_team_code(team_code)
    for p in players:
        models.create_notification(
            p['id'], 'challenge_created',
            'New Challenge: ' + title,
            description or 'Your coach created a new challenge.',
            '{"challenge_id": %d}' % cid
        )
    return jsonify({'challenge': challenge}), 201


@app.route('/api/challenges/<int:challenge_id>')
@require_auth
def get_challenge_detail(challenge_id, current_user):
    """Get challenge with participation data. Coach sees all participations; player sees own."""
    challenge = models.get_challenge(challenge_id)
    if not challenge:
        return jsonify({'error': 'Challenge not found'}), 404
    team_code = _get_team_code(current_user)
    if challenge['team_code'] != team_code:
        return jsonify({'error': 'Access denied'}), 403
    if current_user.get('user_type') == 'coach':
        participations = models.get_participations_for_challenge(challenge_id)
        return jsonify({'challenge': challenge, 'participations': participations}), 200
    part = models.get_or_create_participation(challenge_id, current_user['id'])
    return jsonify({'challenge': challenge, 'participation': part}), 200


@app.route('/api/challenges/<int:challenge_id>/progress', methods=['POST'])
@require_auth
def submit_progress(challenge_id, current_user):
    """Player submits progress. Only for own participation."""
    if current_user.get('user_type') != 'player':
        return jsonify({'error': 'Only players can submit progress'}), 403
    challenge = models.get_challenge(challenge_id)
    if not challenge:
        return jsonify({'error': 'Challenge not found'}), 404
    team_code = _get_team_code(current_user)
    if challenge['team_code'] != team_code:
        return jsonify({'error': 'Access denied'}), 403
    part = models.get_or_create_participation(challenge_id, current_user['id'])
    if part.get('completed'):
        return jsonify({'error': 'Challenge already completed'}), 400
    data = request.get_json() or {}
    progress_value = float(data.get('progress_value', 0))
    proof_note = (data.get('proof_note') or '').strip()
    goal_value = float(challenge.get('goal_value', 1))
    models.update_participation_progress(part['id'], progress_value, proof_note=proof_note)
    part = models.get_or_create_participation(challenge_id, current_user['id'])
    completed = progress_value >= goal_value
    result = {'participation': part, 'completed': completed}
        if completed:
            outcome = challenges_service.complete_challenge(part['id'], current_user['id'])
            if outcome:
                result['completion'] = outcome
                models.create_notification(
                    current_user['id'], 'challenge_complete',
                    'Challenge Complete! +%d XP' % outcome.get('xp_awarded', 0),
                    'You earned %d XP. Level %d!' % (outcome.get('xp_awarded', 0), outcome.get('level', 1)),
                    '{"challenge_id": %d}' % challenge_id
                )
                prev_r, new_r = outcome.get('prev_rank'), outcome.get('new_rank')
                if prev_r and new_r and new_r < prev_r:
                    models.create_notification(
                        current_user['id'], 'rank_change',
                        'Leaderboard: You moved up to #%d!' % new_r,
                        'You climbed %d spots on the team leaderboard.' % (prev_r - new_r),
                        '{}'
                    )
                for b in outcome.get('badges_unlocked', []):
                models.create_notification(
                    current_user['id'], 'badge_unlock',
                    'Badge Unlocked: %s' % b.get('name', ''),
                    b.get('description', '') + ' +%d XP bonus!' % (b.get('xp_bonus', 0)),
                    '{"badge_id": %d}' % b.get('id', 0)
                )
    return jsonify(result), 200


@app.route('/api/challenges/<int:challenge_id>/complete', methods=['POST'])
@require_auth
def complete_challenge_manual(challenge_id, current_user):
    """Player marks challenge complete (manual verification). Only for own participation."""
    if current_user.get('user_type') != 'player':
        return jsonify({'error': 'Only players can complete challenges'}), 403
    challenge = models.get_challenge(challenge_id)
    if not challenge:
        return jsonify({'error': 'Challenge not found'}), 404
    team_code = _get_team_code(current_user)
    if challenge['team_code'] != team_code:
        return jsonify({'error': 'Access denied'}), 403
    part = models.get_or_create_participation(challenge_id, current_user['id'])
    if part.get('completed'):
        return jsonify({'error': 'Challenge already completed'}), 400
    goal_value = float(challenge.get('goal_value', 1))
    progress_value = float(part.get('progress_value', 0))
    data = request.get_json() or {}
    if data.get('progress_value') is not None:
        progress_value = float(data['progress_value'])
        models.update_participation_progress(part['id'], progress_value)
        part = models.get_or_create_participation(challenge_id, current_user['id'])
    if progress_value < goal_value:
        return jsonify({'error': 'Progress must meet goal to complete', 'participation': part}), 400
    outcome = challenges_service.complete_challenge(part['id'], current_user['id'])
    if not outcome:
        return jsonify({'error': 'Could not complete challenge'}), 500
    models.create_notification(
        current_user['id'], 'challenge_complete',
        'Challenge Complete! +%d XP' % outcome.get('xp_awarded', 0),
        'You earned %d XP. Level %d!' % (outcome.get('xp_awarded', 0), outcome.get('level', 1)),
        '{"challenge_id": %d}' % challenge_id
    )
    prev_r, new_r = outcome.get('prev_rank'), outcome.get('new_rank')
    if prev_r and new_r and new_r < prev_r:
        models.create_notification(
            current_user['id'], 'rank_change',
            'Leaderboard: You moved up to #%d!' % new_r,
            'You climbed %d spots on the team leaderboard.' % (prev_r - new_r),
            '{}'
        )
    for b in outcome.get('badges_unlocked', []):
        models.create_notification(
            current_user['id'], 'badge_unlock',
            'Badge Unlocked: %s' % b.get('name', ''),
            b.get('description', '') + ' +%d XP bonus!' % (b.get('xp_bonus', 0)),
            '{"badge_id": %d}' % b.get('id', 0)
        )
    return jsonify({'completion': outcome}), 200


@app.route('/api/leaderboard')
@require_auth
def get_leaderboard(current_user):
    """Get team leaderboard with XP, level, badges."""
    team_code = _get_team_code(current_user)
    if not team_code:
        return jsonify({'leaderboard': []}), 200
    leaderboard = models.get_leaderboard(team_code)
    for row in leaderboard:
        row['badges'] = [{'name': b['name'], 'icon': b['icon'], 'xp_bonus': b['xp_bonus']}
                        for b in models.get_player_badges(row['player_id'])]
    return jsonify({'leaderboard': leaderboard}), 200


@app.route('/api/me/xp')
@require_auth
def get_my_xp(current_user):
    """Get current user's XP and badges (players only)."""
    if current_user.get('user_type') != 'player':
        return jsonify({'total_xp': 0, 'level': 1, 'badges': []}), 200
    pxp = models.get_or_create_player_xp(current_user['id'])
    badges = models.get_player_badges(current_user['id'])
    return jsonify({
        'total_xp': pxp.get('total_xp', 0),
        'level': pxp.get('level', 1),
        'challenges_completed': pxp.get('challenges_completed', 0),
        'badges': badges
    }), 200


@app.route('/api/notifications')
@require_auth
def list_notifications(current_user):
    """Get user notifications."""
    unread_only = request.args.get('unread') == '1'
    notifications = models.get_notifications(current_user['id'], unread_only=unread_only)
    unread_count = models.get_unread_notification_count(current_user['id'])
    return jsonify({'notifications': notifications, 'unread_count': unread_count}), 200


@app.route('/api/notifications/<int:nid>/read', methods=['POST'])
@require_auth
def mark_notification_read(nid, current_user):
    """Mark notification as read."""
    models.mark_notification_read(nid, current_user['id'])
    return jsonify({'ok': True}), 200


# ===== MAIN =====

if __name__ == '__main__':
    print(f"""
╔══════════════════════════════════════════════╗
║       BenchPro Backend Server                ║
╠══════════════════════════════════════════════╣
║  Team:     {TEAM_NAME:<33}║
║  Code:     {TEAM_CODE:<33}║
║  Server:   http://localhost:{PORT:<27}║
║  Student:  http://localhost:{PORT}/student{' '*14}║
╚══════════════════════════════════════════════╝
    """)

    # Pre-load the YOLO model so first upload isn't slow
    print("[INIT] Pre-loading YOLO model...")
    get_analyzer()
    print("Ready to analyze game film!\n")

    app.run(host=HOST, port=PORT, debug=DEBUG, use_reloader=False)
