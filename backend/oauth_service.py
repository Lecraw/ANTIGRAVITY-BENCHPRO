"""
BenchPro — OAuth (Google, Apple) helpers
"""
import json
import time
from urllib.parse import urlencode
from .config import (
    APP_URL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    APPLE_CLIENT_ID,
    APPLE_TEAM_ID,
    APPLE_KEY_ID,
    APPLE_PRIVATE_KEY,
)


def get_google_authorize_url(redirect_path='/api/auth/google/callback'):
    """Build Google OAuth authorize URL."""
    if not GOOGLE_CLIENT_ID:
        return None
    base = APP_URL.rstrip('/')
    if not base.startswith('http'):
        base = 'https://' + base
    redirect_uri = base + redirect_path
    params = {
        'client_id': GOOGLE_CLIENT_ID,
        'redirect_uri': redirect_uri,
        'response_type': 'code',
        'scope': 'openid email profile',
        'access_type': 'offline',
        'prompt': 'select_account',
    }
    return 'https://accounts.google.com/o/oauth2/v2/auth?' + urlencode(params)


def exchange_google_code(code, redirect_path='/api/auth/google/callback'):
    """
    Exchange Google auth code for tokens and fetch user info.
    Returns dict with email, name, sub (subject id) or None on error.
    """
    if not GOOGLE_CLIENT_ID or not GOOGLE_CLIENT_SECRET:
        return None
    try:
        import requests
    except ImportError:
        return None

    base = APP_URL.rstrip('/')
    if not base.startswith('http'):
        base = 'https://' + base
    redirect_uri = base + redirect_path

    token_resp = requests.post(
        'https://oauth2.googleapis.com/token',
        data={
            'code': code,
            'client_id': GOOGLE_CLIENT_ID,
            'client_secret': GOOGLE_CLIENT_SECRET,
            'redirect_uri': redirect_uri,
            'grant_type': 'authorization_code',
        },
        headers={'Content-Type': 'application/x-www-form-urlencoded'},
        timeout=10,
    )
    if token_resp.status_code != 200:
        return None

    token_data = token_resp.json()
    access_token = token_data.get('access_token')
    if not access_token:
        return None

    user_resp = requests.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        headers={'Authorization': f'Bearer {access_token}'},
        timeout=10,
    )
    if user_resp.status_code != 200:
        return None

    user_data = user_resp.json()
    return {
        'email': user_data.get('email') or '',
        'name': user_data.get('name') or user_data.get('email', '').split('@')[0] or 'User',
        'sub': user_data.get('id', ''),
    }


def get_apple_authorize_url(redirect_path='/api/auth/apple/callback', state=None):
    """Build Apple Sign In authorize URL."""
    if not APPLE_CLIENT_ID:
        return None
    base = APP_URL.rstrip('/')
    if not base.startswith('http'):
        base = 'https://' + base
    redirect_uri = base + redirect_path
    params = {
        'client_id': APPLE_CLIENT_ID,
        'redirect_uri': redirect_uri,
        'response_type': 'code id_token',
        'response_mode': 'form_post',
        'scope': 'name email',
    }
    if state:
        params['state'] = state
    return 'https://appleid.apple.com/auth/authorize?' + urlencode(params)


def _make_apple_client_secret():
    """Create Apple client secret JWT (valid 6 months)."""
    if not all([APPLE_CLIENT_ID, APPLE_TEAM_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY]):
        return None
    try:
        import jwt
    except ImportError:
        return None

    now = int(time.time())
    payload = {
        'iss': APPLE_TEAM_ID,
        'iat': now,
        'exp': now + 86400 * 180,  # 6 months
        'aud': 'https://appleid.apple.com',
        'sub': APPLE_CLIENT_ID,
    }
    return jwt.encode(
        payload,
        APPLE_PRIVATE_KEY,
        algorithm='ES256',
        headers={'kid': APPLE_KEY_ID},
    )


def exchange_apple_code(code=None, redirect_path='/api/auth/apple/callback', id_token=None, user_json=None):
    """
    Exchange Apple auth code for tokens, or decode id_token directly.
    Apple may send user info only on first sign-in (in user_json).
    Returns dict with email, name, sub or None.
    """
    if not APPLE_CLIENT_ID or not APPLE_TEAM_ID or not APPLE_KEY_ID or not APPLE_PRIVATE_KEY:
        return None
    try:
        import jwt
        import requests
    except ImportError:
        return None

    # Prefer id_token from request (Apple sends it with form_post); else exchange code
    if not id_token and code:
        client_secret = _make_apple_client_secret()
        if not client_secret:
            return None
        base = APP_URL.rstrip('/')
        if not base.startswith('http'):
            base = 'https://' + base
        redirect_uri = base + redirect_path
        token_resp = requests.post(
            'https://appleid.apple.com/auth/token',
            data={
                'code': code,
                'client_id': APPLE_CLIENT_ID,
                'client_secret': client_secret,
                'redirect_uri': redirect_uri,
                'grant_type': 'authorization_code',
            },
            headers={'Content-Type': 'application/x-www-form-urlencoded'},
            timeout=10,
        )
        if token_resp.status_code != 200:
            return None
        token_data = token_resp.json()
        id_token = token_data.get('id_token')

    if not id_token:
        return None

    try:
        decoded = jwt.decode(id_token, options={'verify_signature': False})
    except Exception:
        return None

    sub = decoded.get('sub', '')
    email = decoded.get('email', '')

    # Apple sends user (name) only on first authorization
    name = 'User'
    if user_json:
        try:
            ud = json.loads(user_json) if isinstance(user_json, str) else user_json
            name = (ud.get('name', {}) or {}).get('firstName', '') + ' ' + (ud.get('name', {}) or {}).get('lastName', '')
            name = name.strip() or 'User'
        except Exception:
            pass
    if not email:
        email = f'{sub}@apple.placeholder'

    return {
        'email': email or f'{sub}@apple.placeholder',
        'name': name,
        'sub': sub,
    }
