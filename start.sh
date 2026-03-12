#!/bin/bash
# BenchPro — Quick Start
# Run from project root: ./start.sh

cd "$(dirname "$0")"
chmod +x backend/run.sh 2>/dev/null || true
./backend/run.sh
