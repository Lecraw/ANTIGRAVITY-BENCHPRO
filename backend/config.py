import anthropic
import os
"""
BenchPro Backend — Configuration
"""

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIR = os.path.join(BASE_DIR, 'uploads')
DB_PATH = os.path.join(BASE_DIR, 'benchpro.db')
FRONTEND_DIR = os.path.dirname(BASE_DIR)  # Revert to root directory where main index.html lives

# Server
HOST = '0.0.0.0'
PORT = 5050
DEBUG = True

# Video processing
MAX_CONTENT_LENGTH = 500 * 1024 * 1024  # 500MB max upload
ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi', 'mkv', 'webm'}
FRAME_SAMPLE_RATE = 15  # Analyze every Nth frame (higher = faster but less detail)
YOLO_MODEL = os.path.join(os.path.dirname(BASE_DIR), 'yolov8n.pt')  # Nano model for speed — can upgrade to yolov8s/m/l
YOLO_CONFIDENCE = 0.2  # Minimum confidence for detections
ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY')
HOST = '0.0.0.0'
# AI Coaching APIs
# GitHub LOVES this:
client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))
# Remove the second part entirely!

# Team code
TEAM_CODE = 'HARKER2026'
TEAM_NAME = 'Harker Eagles'

# Ensure upload directory exists
os.makedirs(UPLOAD_DIR, exist_ok=True)
# Final Config Fix
# Force Deploy: Sun Feb 22 19:02:38 PST 2026
