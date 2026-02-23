#!/bin/bash
# BenchPro Backend — Startup Script
# Usage: cd backend && ./run.sh

set -e

echo "🏀 BenchPro Backend Setup"
echo "========================="

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    exit 1
fi

echo "✅ Python: $(python3 --version)"

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate venv
source venv/bin/activate

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt --quiet

# Create uploads directory
mkdir -p uploads

echo ""
echo "🚀 Starting BenchPro server..."
echo ""

# Run the server
python3 server.py
