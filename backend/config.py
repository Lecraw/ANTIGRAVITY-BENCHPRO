"""
BenchPro Backend — Configuration
Load from environment. Use .env for local development.
"""
import os
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIR = os.path.join(BASE_DIR, 'uploads')
DB_PATH = os.path.join(BASE_DIR, 'benchpro.db')
FRONTEND_DIR = os.path.dirname(BASE_DIR)

# Server
HOST = os.environ.get('HOST', '0.0.0.0')
PORT = int(os.environ.get('PORT', 5050))
DEBUG = os.environ.get('FLASK_DEBUG', 'false').lower() in ('true', '1', 'yes')
SECRET_KEY = os.environ.get('SECRET_KEY') or (os.urandom(24).hex() if DEBUG else '')
if not DEBUG and not SECRET_KEY:
    import warnings
    warnings.warn('SECRET_KEY not set in production. Set SECRET_KEY in environment.')

# CORS — restrict in production. Comma-separated origins, or '*' for dev.
CORS_ORIGINS = os.environ.get('CORS_ORIGINS', '*')

# Rate limiting (requests per minute per IP)
RATE_LIMIT = os.environ.get('RATE_LIMIT', '200 per minute')
RATE_LIMIT_AUTH = os.environ.get('RATE_LIMIT_AUTH', '10 per minute')
RATE_LIMIT_UPLOAD = os.environ.get('RATE_LIMIT_UPLOAD', '20 per hour')

# Video processing
MAX_CONTENT_LENGTH = 5 * 1024 * 1024 * 1024  # 5GB max upload
ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi', 'mkv', 'webm'}
FRAME_SAMPLE_RATE = 15
YOLO_MODEL = os.path.join(os.path.dirname(BASE_DIR), 'yolov8n.pt')
YOLO_CONFIDENCE = 0.2

# AI
ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')

# Team (defaults — can be overridden per user)
TEAM_CODE = os.environ.get('TEAM_CODE', 'HARKER2026')
TEAM_NAME = os.environ.get('TEAM_NAME', 'Harker Eagles')

# Email (for password reset and confirmation)
APP_URL = os.environ.get('APP_URL', 'http://localhost:5050')  # Base URL for links in emails
MAIL_FROM = os.environ.get('MAIL_FROM', 'noreply@benchpro.app')
EMAIL_ENABLED = os.environ.get('EMAIL_ENABLED', 'false').lower() in ('true', '1', 'yes')
# SMTP (when EMAIL_ENABLED=true)
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
# Or Resend (set RESEND_API_KEY to use instead of SMTP)
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')

# Stripe (subscriptions)
STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY', '')
STRIPE_WEBHOOK_SECRET = os.environ.get('STRIPE_WEBHOOK_SECRET', '')
STRIPE_PRICE_STANDARD = os.environ.get('STRIPE_PRICE_STANDARD', '')
STRIPE_PRICE_ELITE = os.environ.get('STRIPE_PRICE_ELITE', '')
STRIPE_TRIAL_DAYS = int(os.environ.get('STRIPE_TRIAL_DAYS', 14))

# OAuth (Google, Apple)
GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID', '')
GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET', '')
APPLE_CLIENT_ID = os.environ.get('APPLE_CLIENT_ID', '')  # Services ID (e.g. org.benchpro.app)
APPLE_TEAM_ID = os.environ.get('APPLE_TEAM_ID', '')
APPLE_KEY_ID = os.environ.get('APPLE_KEY_ID', '')
APPLE_PRIVATE_KEY = os.environ.get('APPLE_PRIVATE_KEY', '')  # .p8 key contents

os.makedirs(UPLOAD_DIR, exist_ok=True)
