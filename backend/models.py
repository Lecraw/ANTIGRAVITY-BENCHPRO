"""
BenchPro Backend — Database Models (SQLite)
"""
import sqlite3
import json
import os
import uuid
from datetime import datetime
from .config import DB_PATH


def get_db():
    """Get a database connection with row factory."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def init_db():
    """Create all tables if they don't exist."""
    conn = get_db()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            name TEXT NOT NULL,
            user_type TEXT NOT NULL DEFAULT 'coach',  -- 'coach' or 'player'
            team_code TEXT DEFAULT '',
            plan TEXT DEFAULT 'standard',
            auth_token TEXT DEFAULT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS games (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT NULL,
            title TEXT NOT NULL,
            opponent TEXT DEFAULT '',
            date TEXT DEFAULT '',
            file_path TEXT,
            file_name TEXT,
            duration_seconds REAL DEFAULT 0,
            fps REAL DEFAULT 0,
            total_frames INTEGER DEFAULT 0,
            status TEXT DEFAULT 'uploaded',
            progress REAL DEFAULT 0,
            error_message TEXT DEFAULT '',
            created_at TEXT DEFAULT (datetime('now')),
            updated_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
        );

        CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            game_id INTEGER NOT NULL,
            jersey_number TEXT DEFAULT '',
            team TEXT DEFAULT 'home',  -- home or away
            color_rgb TEXT DEFAULT '',  -- dominant jersey color
            detections INTEGER DEFAULT 0,  -- number of frames detected in
            FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS game_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            game_id INTEGER NOT NULL,
            event_type TEXT NOT NULL,  -- player_detected, ball_detected, shot_attempt, movement, possession_change
            timestamp_seconds REAL DEFAULT 0,
            frame_number INTEGER DEFAULT 0,
            data TEXT DEFAULT '{}',  -- JSON blob with event details
            FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS analysis_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            game_id INTEGER NOT NULL UNIQUE,
            total_players_detected INTEGER DEFAULT 0,
            home_players INTEGER DEFAULT 0,
            away_players INTEGER DEFAULT 0,
            ball_detections INTEGER DEFAULT 0,
            total_events INTEGER DEFAULT 0,
            possession_changes INTEGER DEFAULT 0,
            stats_json TEXT DEFAULT '{}',     -- Aggregated stats as JSON
            ai_insights TEXT DEFAULT '',      -- Claude AI coaching analysis
            activity_trend_json TEXT DEFAULT '[]',   -- Player positional timeline data
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
        );
    """)
    conn.commit()

    # Migration: add user_id to games if missing (for existing DBs)
    try:
        conn.execute("ALTER TABLE games ADD COLUMN user_id INTEGER DEFAULT NULL")
        conn.commit()
    except sqlite3.OperationalError:
        pass  # Column already exists

    conn.close()
    _init_users()


def _init_users():
    """Create default coach and student accounts if no users exist."""
    conn = get_db()
    row = conn.execute("SELECT COUNT(*) as n FROM users").fetchone()
    if row and row['n'] == 0:
        from werkzeug.security import generate_password_hash
        conn.execute(
            "INSERT INTO users (email, password_hash, name, user_type) VALUES (?, ?, ?, 'coach')",
            ('coachw@gmail.com', generate_password_hash('12345'), 'Coach Wilson')
        )
        conn.execute(
            "INSERT INTO users (email, password_hash, name, user_type, team_code) VALUES (?, ?, ?, 'player', ?)",
            ('marcus@school.edu', generate_password_hash('HARKER2026'), 'Marcus James', 'HARKER')
        )
        conn.commit()
    conn.close()


# ===== USER CRUD =====

def create_user(email, password_hash, name, user_type='coach', team_code='', plan='standard'):
    """Create a new user. Returns user dict or None if email exists."""
    conn = get_db()
    try:
        cur = conn.execute(
            "INSERT INTO users (email, password_hash, name, user_type, team_code, plan) VALUES (?, ?, ?, ?, ?, ?)",
            (email.lower(), password_hash, name, user_type, team_code, plan)
        )
        user_id = cur.lastrowid
        conn.commit()
        return get_user_by_id(user_id)
    except sqlite3.IntegrityError:
        return None
    finally:
        conn.close()


def get_user_by_id(user_id):
    """Get user by ID."""
    conn = get_db()
    row = conn.execute("SELECT id, email, name, user_type, team_code, plan, created_at FROM users WHERE id = ?", (user_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def get_user_by_email(email):
    """Get user by email."""
    conn = get_db()
    row = conn.execute("SELECT * FROM users WHERE email = ?", (email.lower(),)).fetchone()
    conn.close()
    return dict(row) if row else None


def get_user_by_token(token):
    """Get user by auth token."""
    if not token:
        return None
    conn = get_db()
    row = conn.execute("SELECT id, email, name, user_type, team_code, plan, created_at FROM users WHERE auth_token = ?", (token,)).fetchone()
    conn.close()
    return dict(row) if row else None


def set_user_token(user_id, token):
    """Set auth token for user."""
    conn = get_db()
    conn.execute("UPDATE users SET auth_token = ? WHERE id = ?", (token, user_id))
    conn.commit()
    conn.close()


def clear_user_token(user_id):
    """Clear auth token for user."""
    conn = get_db()
    conn.execute("UPDATE users SET auth_token = NULL WHERE id = ?", (user_id,))
    conn.commit()
    conn.close()


# ===== GAME CRUD =====

def create_game(title, opponent='', date='', file_path='', file_name='', user_id=None):
    """Insert a new game record. Returns the game ID."""
    conn = get_db()
    cur = conn.execute(
        "INSERT INTO games (title, opponent, date, file_path, file_name, user_id) VALUES (?, ?, ?, ?, ?, ?)",
        (title, opponent, date, file_path, file_name, user_id)
    )
    game_id = cur.lastrowid
    conn.commit()
    conn.close()
    return game_id


def get_game(game_id):
    """Get a single game by ID."""
    conn = get_db()
    row = conn.execute("SELECT * FROM games WHERE id = ?", (game_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def get_all_games(user_id=None):
    """Get all games ordered by creation date. If user_id given, filter by that user."""
    conn = get_db()
    if user_id is not None:
        rows = conn.execute("SELECT * FROM games WHERE user_id = ? ORDER BY created_at DESC", (user_id,)).fetchall()
    else:
        rows = conn.execute("SELECT * FROM games ORDER BY created_at DESC").fetchall()
    conn.close()
    return [dict(r) for r in rows]


def update_game_status(game_id, status, progress=None, error_message=None):
    """Update game processing status."""
    conn = get_db()
    updates = ["status = ?", "updated_at = datetime('now')"]
    params = [status]
    if progress is not None:
        updates.append("progress = ?")
        params.append(progress)
    if error_message is not None:
        updates.append("error_message = ?")
        params.append(error_message)
    params.append(game_id)
    conn.execute(f"UPDATE games SET {', '.join(updates)} WHERE id = ?", params)
    conn.commit()
    conn.close()


def update_game_video_info(game_id, duration, fps, total_frames):
    """Update video metadata after processing."""
    conn = get_db()
    conn.execute(
        "UPDATE games SET duration_seconds = ?, fps = ?, total_frames = ? WHERE id = ?",
        (duration, fps, total_frames, game_id)
    )
    conn.commit()
    conn.close()


def delete_game(game_id):
    """Delete a game and all related data."""
    conn = get_db()
    # Get file path to delete the actual file
    row = conn.execute("SELECT file_path FROM games WHERE id = ?", (game_id,)).fetchone()
    if row and row['file_path'] and os.path.exists(row['file_path']):
        os.remove(row['file_path'])
    conn.execute("DELETE FROM games WHERE id = ?", (game_id,))
    conn.commit()
    conn.close()


# ===== ANALYSIS RESULTS =====

def save_analysis(game_id, results):
    """Save or update analysis results for a game."""
    conn = get_db()
    conn.execute("""
        INSERT INTO analysis_results (
            game_id, total_players_detected, home_players, away_players,
            ball_detections, total_events, possession_changes,
            stats_json, ai_insights, activity_trend_json
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(game_id) DO UPDATE SET
            total_players_detected = excluded.total_players_detected,
            home_players = excluded.home_players,
            away_players = excluded.away_players,
            ball_detections = excluded.ball_detections,
            total_events = excluded.total_events,
            possession_changes = excluded.possession_changes,
            stats_json = excluded.stats_json,
            ai_insights = excluded.ai_insights,
            activity_trend_json = excluded.activity_trend_json
    """, (
        game_id,
        results.get('total_players_detected', 0),
        results.get('home_players', 0),
        results.get('away_players', 0),
        results.get('ball_detections', 0),
        results.get('total_events', 0),
        results.get('possession_changes', 0),
        json.dumps(results.get('stats', {})),
        results.get('ai_insights', ''),
        json.dumps(results.get('activity_trend', []))
    ))
    conn.commit()
    conn.close()


def get_analysis(game_id):
    """Get analysis results for a game."""
    conn = get_db()
    row = conn.execute("SELECT * FROM analysis_results WHERE game_id = ?", (game_id,)).fetchone()
    conn.close()
    if not row:
        return None
    result = dict(row)
    result['stats'] = json.loads(result.get('stats_json', '{}'))
    result['activity_trend'] = json.loads(result.get('activity_trend_json', '[]') or '[]')
    return result


# ===== EVENTS =====

def add_event(game_id, event_type, timestamp_seconds, frame_number, data=None):
    """Add a game event."""
    conn = get_db()
    conn.execute(
        "INSERT INTO game_events (game_id, event_type, timestamp_seconds, frame_number, data) VALUES (?, ?, ?, ?, ?)",
        (game_id, event_type, timestamp_seconds, frame_number, json.dumps(data or {}))
    )
    conn.commit()
    conn.close()


def get_events(game_id, event_type=None):
    """Get events for a game, optionally filtered by type."""
    conn = get_db()
    if event_type:
        rows = conn.execute(
            "SELECT * FROM game_events WHERE game_id = ? AND event_type = ? ORDER BY timestamp_seconds",
            (game_id, event_type)
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT * FROM game_events WHERE game_id = ? ORDER BY timestamp_seconds",
            (game_id,)
        ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


# Initialize on import
init_db()
