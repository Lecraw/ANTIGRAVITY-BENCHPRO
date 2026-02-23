"""
BenchPro Backend — Flask API Server
Serves the API endpoints and the frontend static files.
"""


import os
import uuid
import threading
from flask import Flask, request, jsonify, send_from_directory, Response  # type: ignore
from flask_cors import CORS  # type: ignore
from werkzeug.utils import secure_filename  # type: ignore

from config import (  # type: ignore
    HOST, PORT, DEBUG, UPLOAD_DIR, FRONTEND_DIR,
    MAX_CONTENT_LENGTH, ALLOWED_EXTENSIONS, TEAM_CODE, TEAM_NAME
)
import models  # type: ignore
from analyzer import get_analyzer  # type: ignore
from ai_coach import generate_coach_feedback, analyze_stat_sheet  # type: ignore

from swish_analyzer import analyze_basketball_shot  # type: ignore

# ===== APP SETUP =====

app = Flask(__name__, static_folder=FRONTEND_DIR, static_url_path='')
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH
CORS(app)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


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


# ===== API: VIDEO UPLOAD =====

@app.route('/api/upload', methods=['POST'])
def upload_video():
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
        file_name=original_name
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
def upload_stats():
    """
    Upload a game stat sheet (image or CSV) for analysis directly via AI Coach (bypassing video tracking).
    """
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Save file with unique name
    original_name = secure_filename(file.filename)
    unique_name = f"{uuid.uuid4().hex}_stats_{original_name}"
    file_path = os.path.join(UPLOAD_DIR, unique_name)
    file.save(file_path)

    try:
        # Pass straight to Claude Vision / Text analyzer
        analysis_html = analyze_stat_sheet(file_path)
        return jsonify({'status': 'success', 'analysis': analysis_html}), 200
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

@app.route('/api/analysis/<int:game_id>')
def get_analysis(game_id):
    """Get full analysis results for a game."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    analysis = models.get_analysis(game_id)
    events = models.get_events(game_id)

    return jsonify({
        'game': game,
        'analysis': analysis,
        'events': events[:100],  # Limit events to avoid huge responses
        'events_total': len(events)
    })


@app.route('/api/analysis/<int:game_id>/status')
def get_analysis_status(game_id):
    """Check processing status for a game."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    return jsonify({
        'id': game_id,
        'status': game['status'],
        'progress': game['progress'],
        'error_message': game.get('error_message', '')
    })


# ===== API: CLIPS (GAMES) =====

@app.route('/api/clips')
def list_clips():
    """List all uploaded/analyzed games."""
    games = models.get_all_games()
    result = []
    for game in games:
        analysis = models.get_analysis(game['id'])
        result.append({
            'id': game['id'],
            'title': game['title'],
            'opponent': game['opponent'],
            'date': game['date'],
            'status': game['status'],
            'progress': game['progress'],
            'duration': game.get('duration_seconds', 0),
            'file_name': game.get('file_name', ''),
            'created_at': game.get('created_at', ''),
            'has_analysis': analysis is not None,
            'player_count': analysis['total_players_detected'] if analysis else 0,
            'event_count': analysis['total_events'] if analysis else 0
        })
    return jsonify(result)


@app.route('/api/clips/<int:game_id>', methods=['DELETE'])
def delete_clip(game_id):
    """Delete a game and its analysis data."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    models.delete_game(game_id)
    return jsonify({'message': f'Game #{game_id} deleted'})


# ===== API: PLAYERS =====

@app.route('/api/players')
def list_players():
    """List all detected players across all games."""
    games = models.get_all_games()
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
def team_stats():
    """Get aggregated team stats across all games."""
    games = models.get_all_games()
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
def get_game_events(game_id):
    """Get all events for a specific game."""
    game = models.get_game(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    event_type = request.args.get('type')
    events = models.get_events(game_id, event_type)

    return jsonify({
        'game_id': game_id,
        'events': events,
        'total': len(events)
    })


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
