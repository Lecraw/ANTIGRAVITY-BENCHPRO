#!/bin/bash
# BenchPro Backend — Startup Script
# Usage: From project root: ./backend/run.sh
#        Or: cd backend && ./run.sh

set -e

# Get project root (parent of backend/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

echo "🏀 BenchPro Backend Setup"
echo "========================="

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    exit 1
fi

echo "✅ Python: $(python3 --version)"
echo "📁 Project: $PROJECT_ROOT"

# Create virtual environment if it doesn't exist (in backend/)
if [ ! -d "backend/venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv backend/venv
fi

# Activate venv
source backend/venv/bin/activate

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r backend/requirements.txt --quiet

# Create uploads directory
mkdir -p backend/uploads

echo ""
echo "🚀 Starting BenchPro server..."
echo "   Coach:  http://localhost:5050/"
echo "   Student: http://localhost:5050/student"
echo ""

# Run from project root as module
python3 -m backend.server
