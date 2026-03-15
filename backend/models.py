"""
BenchPro Backend — Database Models (SQLite)
"""
import secrets
import sqlite3
import json
import os
import uuid
import random
import string
from datetime import datetime
from werkzeug.security import generate_password_hash
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
            user_type TEXT NOT NULL DEFAULT 'coach',
            team_code TEXT DEFAULT '',
            plan TEXT DEFAULT 'standard',
            auth_token TEXT DEFAULT NULL,
            email_verified INTEGER DEFAULT 0,
            email_verified_at TEXT DEFAULT NULL,
            stripe_customer_id TEXT DEFAULT NULL,
            stripe_subscription_id TEXT DEFAULT NULL,
            subscription_status TEXT DEFAULT NULL,
            oauth_provider TEXT DEFAULT NULL,
            oauth_subject_id TEXT DEFAULT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS auth_tokens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            token TEXT NOT NULL UNIQUE,
            user_id INTEGER NOT NULL,
            token_type TEXT NOT NULL,
            expires_at TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
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

        CREATE TABLE IF NOT EXISTS stat_sheet_analyses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            file_name TEXT DEFAULT '',
            file_path TEXT DEFAULT '',
            analysis_html TEXT DEFAULT '',
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
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

    # Migrations for existing DBs
    for col, sql in [
        ('user_id', "ALTER TABLE games ADD COLUMN user_id INTEGER DEFAULT NULL"),
        ('email_verified', "ALTER TABLE users ADD COLUMN email_verified INTEGER DEFAULT 1"),
        ('email_verified_at', "ALTER TABLE users ADD COLUMN email_verified_at TEXT DEFAULT NULL"),
        ('stripe_customer_id', "ALTER TABLE users ADD COLUMN stripe_customer_id TEXT DEFAULT NULL"),
        ('stripe_subscription_id', "ALTER TABLE users ADD COLUMN stripe_subscription_id TEXT DEFAULT NULL"),
        ('subscription_status', "ALTER TABLE users ADD COLUMN subscription_status TEXT DEFAULT NULL"),
        ('oauth_provider', "ALTER TABLE users ADD COLUMN oauth_provider TEXT DEFAULT NULL"),
        ('oauth_subject_id', "ALTER TABLE users ADD COLUMN oauth_subject_id TEXT DEFAULT NULL"),
    ]:
        try:
            conn.execute(sql)
            conn.commit()
        except sqlite3.OperationalError:
            pass

    # Stat sheet analyses table (migration: create if not exists)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS stat_sheet_analyses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            file_name TEXT DEFAULT '',
            file_path TEXT DEFAULT '',
            analysis_html TEXT DEFAULT '',
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    """)
    conn.commit()

    # ===== WEEKLY CHALLENGES SYSTEM =====
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS challenges (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_code TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT DEFAULT '',
            challenge_type TEXT NOT NULL DEFAULT 'custom',
            xp_reward INTEGER NOT NULL DEFAULT 50,
            goal_value REAL DEFAULT 1,
            start_date TEXT NOT NULL,
            end_date TEXT NOT NULL,
            created_by_coach_id INTEGER NOT NULL,
            verification_type TEXT NOT NULL DEFAULT 'manual',
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (created_by_coach_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS challenge_participation (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            challenge_id INTEGER NOT NULL,
            player_id INTEGER NOT NULL,
            progress_value REAL DEFAULT 0,
            completed INTEGER DEFAULT 0,
            xp_awarded INTEGER DEFAULT 0,
            completed_at TEXT DEFAULT NULL,
            proof_url TEXT DEFAULT NULL,
            proof_note TEXT DEFAULT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            updated_at TEXT DEFAULT (datetime('now')),
            UNIQUE(challenge_id, player_id),
            FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS player_xp (
            player_id INTEGER PRIMARY KEY,
            total_xp INTEGER DEFAULT 0,
            level INTEGER DEFAULT 1,
            challenges_completed INTEGER DEFAULT 0,
            last_daily_login_date TEXT DEFAULT NULL,
            updated_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS flairs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            icon TEXT NOT NULL,
            unlock_criteria_type TEXT NOT NULL DEFAULT 'level',
            unlock_criteria_value INTEGER NOT NULL DEFAULT 1,
            sort_order INTEGER DEFAULT 0,
            created_at TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS player_flair (
            player_id INTEGER PRIMARY KEY,
            flair_id INTEGER NOT NULL,
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (flair_id) REFERENCES flairs(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS badges (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT DEFAULT '',
            icon TEXT DEFAULT '🏆',
            xp_bonus INTEGER DEFAULT 0,
            criteria_type TEXT NOT NULL,
            criteria_value INTEGER DEFAULT 1,
            created_at TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS player_badge (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            player_id INTEGER NOT NULL,
            badge_id INTEGER NOT NULL,
            awarded_at TEXT DEFAULT (datetime('now')),
            UNIQUE(player_id, badge_id),
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (badge_id) REFERENCES badges(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS notifications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            type TEXT NOT NULL,
            title TEXT NOT NULL,
            body TEXT DEFAULT '',
            data_json TEXT DEFAULT '{}',
            read_at TEXT DEFAULT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );

        -- Skill Trees: categories and level definitions
        CREATE TABLE IF NOT EXISTS skill_tree_categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            icon TEXT DEFAULT '🏀',
            sort_order INTEGER DEFAULT 0,
            challenge_type_map TEXT DEFAULT '{}'
        );

        CREATE TABLE IF NOT EXISTS skill_tree_levels (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category_id INTEGER NOT NULL,
            level INTEGER NOT NULL,
            xp_required INTEGER NOT NULL,
            badge_name TEXT DEFAULT '',
            badge_icon TEXT DEFAULT '⭐',
            UNIQUE(category_id, level),
            FOREIGN KEY (category_id) REFERENCES skill_tree_categories(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS player_skill_progress (
            player_id INTEGER NOT NULL,
            category_id INTEGER NOT NULL,
            level INTEGER DEFAULT 1,
            xp_in_category INTEGER DEFAULT 0,
            updated_at TEXT DEFAULT (datetime('now')),
            PRIMARY KEY (player_id, category_id),
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES skill_tree_categories(id) ON DELETE CASCADE
        );

        -- Streak System: practice, film_study, workout
        CREATE TABLE IF NOT EXISTS player_streaks (
            player_id INTEGER NOT NULL,
            streak_type TEXT NOT NULL,
            current_days INTEGER DEFAULT 0,
            last_activity_date TEXT NOT NULL,
            xp_bonus_claimed INTEGER DEFAULT 0,
            updated_at TEXT DEFAULT (datetime('now')),
            PRIMARY KEY (player_id, streak_type),
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE
        );

        -- Hustle Leaderboard: effort stats
        CREATE TABLE IF NOT EXISTS player_hustle_stats (
            player_id INTEGER PRIMARY KEY,
            deflections INTEGER DEFAULT 0,
            charges INTEGER DEFAULT 0,
            rebounds INTEGER DEFAULT 0,
            loose_balls INTEGER DEFAULT 0,
            screen_assists INTEGER DEFAULT 0,
            updated_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (player_id) REFERENCES users(id) ON DELETE CASCADE
        );
    """)
    conn.commit()

    # Migration: add last_daily_login_date to player_xp if missing
    try:
        conn.execute("ALTER TABLE player_xp ADD COLUMN last_daily_login_date TEXT DEFAULT NULL")
        conn.commit()
    except sqlite3.OperationalError:
        pass

    # Seed default flairs if empty
    row = conn.execute("SELECT COUNT(*) as n FROM flairs").fetchone()
    if row and row['n'] == 0:
        conn.executemany(
            """INSERT INTO flairs (name, icon, unlock_criteria_type, unlock_criteria_value, sort_order)
               VALUES (?, ?, ?, ?, ?)""",
            [
                ('Rookie', '🌱', 'level', 1, 0),
                ('Rising Star', '⭐', 'level', 2, 1),
                ('Baller', '🏀', 'level', 3, 2),
                ('Clutch', '⚡', 'level', 4, 3),
                ('All-Star', '🌟', 'level', 5, 4),
                ('MVP', '👑', 'level', 7, 5),
                ('Legend', '🏆', 'level', 10, 6),
            ]
        )
        conn.commit()

    # Seed default badges if empty
    row = conn.execute("SELECT COUNT(*) as n FROM badges").fetchone()
    if row and row['n'] == 0:
        conn.executemany(
            """INSERT INTO badges (name, description, icon, xp_bonus, criteria_type, criteria_value)
               VALUES (?, ?, ?, ?, ?, ?)""",
            [
                ('Grinder', 'Complete 5 challenges', '🔥', 50, 'challenge_wins', 5),
                ('Consistency King', 'Complete 3 challenges in a row', '👑', 75, 'streak', 3),
                ('Sharpshooter', 'Win a shooting challenge', '🎯', 100, 'shooting', 1),
                ('Hustle Hero', 'Complete 3 defensive challenges', '🛡️', 75, 'defense', 3),
                ('Film Student', 'Complete 3 film challenges', '📽️', 50, 'film', 3),
                ('Workout Warrior', 'Complete 3 workout challenges', '💪', 75, 'workout', 3),
                ('Weekly Champion', 'Top player on weekly leaderboard', '⭐', 100, 'weekly_winner', 1),
            ]
        )
        conn.commit()

    # Seed skill tree categories and levels
    row = conn.execute("SELECT COUNT(*) as n FROM skill_tree_categories").fetchone()
    if row and row['n'] == 0:
        conn.executemany(
            """INSERT INTO skill_tree_categories (name, icon, sort_order) VALUES (?, ?, ?)""",
            [
                ('Shooting', '🎯', 0),
                ('Defense', '🛡️', 1),
                ('Playmaking', '🎮', 2),
                ('Athleticism', '⚡', 3),
                ('Basketball IQ', '🧠', 4),
            ]
        )
        conn.commit()
        # Level definitions: level N requires (N-1)*50 XP in category
        # Level 3 Shooting: Catch & Shoot badge, Range Boost
        # Level 5 Defense: Lockdown badge
        cats = {r['name']: r['id'] for r in conn.execute("SELECT id, name FROM skill_tree_categories").fetchall()}
        levels_data = [
            (cats['Shooting'], 1, 0, '', ''),
            (cats['Shooting'], 2, 25, 'Range', '📏'),
            (cats['Shooting'], 3, 50, 'Catch & Shoot', '🎯'),
            (cats['Shooting'], 4, 100, 'Range Boost', '📈'),
            (cats['Shooting'], 5, 150, 'Elite Shooter', '🏆'),
            (cats['Defense'], 1, 0, '', ''),
            (cats['Defense'], 2, 25, 'Active Hands', '✋'),
            (cats['Defense'], 3, 50, 'Defender', '🛡️'),
            (cats['Defense'], 4, 100, 'Lockdown', '🔒'),
            (cats['Defense'], 5, 150, 'Elite Defender', '🏆'),
            (cats['Playmaking'], 1, 0, '', ''),
            (cats['Playmaking'], 2, 25, 'Vision', '👁️'),
            (cats['Playmaking'], 3, 50, 'Playmaker', '🎮'),
            (cats['Playmaking'], 4, 100, 'Floor General', '⭐'),
            (cats['Playmaking'], 5, 150, 'Elite Playmaker', '🏆'),
            (cats['Athleticism'], 1, 0, '', ''),
            (cats['Athleticism'], 2, 25, 'Quick', '⚡'),
            (cats['Athleticism'], 3, 50, 'Athlete', '💪'),
            (cats['Athleticism'], 4, 100, 'Explosive', '🔥'),
            (cats['Athleticism'], 5, 150, 'Elite Athlete', '🏆'),
            (cats['Basketball IQ'], 1, 0, '', ''),
            (cats['Basketball IQ'], 2, 25, 'Student', '📚'),
            (cats['Basketball IQ'], 3, 50, 'Film Student', '📽️'),
            (cats['Basketball IQ'], 4, 100, 'Tactician', '🧠'),
            (cats['Basketball IQ'], 5, 150, 'Elite IQ', '🏆'),
        ]
        for cat_id, lvl, xp, badge_name, badge_icon in levels_data:
            conn.execute(
                "INSERT INTO skill_tree_levels (category_id, level, xp_required, badge_name, badge_icon) VALUES (?, ?, ?, ?, ?)",
                (cat_id, lvl, xp, badge_name, badge_icon)
            )
        conn.commit()

    # Ensure demo coach (coachw@gmail.com / 12345) always works: elite plan, team_code for challenges
    conn.execute(
        "UPDATE users SET email_verified = 1, plan = 'elite' WHERE email = 'coachw@gmail.com'"
    )
    coach = conn.execute("SELECT id, team_code FROM users WHERE email = 'coachw@gmail.com'").fetchone()
    coach_team = (coach['team_code'] or '').strip() if coach else ''
    if coach and (not coach_team):
        conn.execute("UPDATE users SET team_code = 'HARKER' WHERE email = 'coachw@gmail.com'")
        coach_team = 'HARKER'
    # Marcus must have same team_code as coachw to see challenges and receive tips
    if coach_team:
        conn.execute("UPDATE users SET team_code = ? WHERE email = 'marcus@school.edu'", (coach_team,))
    # Ensure demo student (marcus@school.edu / 12345) always works
    conn.execute(
        "UPDATE users SET password_hash = ? WHERE email = 'marcus@school.edu'",
        (generate_password_hash('12345'),)
    )
    # Seed 11 more players on coachw's team (same as Marcus)
    _seed_team_players(conn, coach_team, generate_password_hash('12345'))
    conn.commit()

    conn.close()
    _init_users()


def _seed_team_players(conn, team_code, password_hash):
    """Seed 11 additional players on the coach's team. Idempotent - skips if email exists."""
    if not team_code:
        return
    players = [
        ('jayden@school.edu', 'Jayden Williams'),
        ('leo@school.edu', 'Leo Martinez'),
        ('tyler@school.edu', 'Tyler Johnson'),
        ('jordan@school.edu', 'Jordan Davis'),
        ('cameron@school.edu', 'Cameron Brown'),
        ('alex@school.edu', 'Alex Thompson'),
        ('ryan@school.edu', 'Ryan Wilson'),
        ('blake@school.edu', 'Blake Anderson'),
        ('drew@school.edu', 'Drew Jackson'),
        ('kai@school.edu', 'Kai Rodriguez'),
        ('miles@school.edu', 'Miles Taylor'),
    ]
    for email, name in players:
        try:
            conn.execute(
                """INSERT INTO users (email, password_hash, name, user_type, team_code, email_verified)
                   VALUES (?, ?, ?, 'player', ?, 1)""",
                (email.lower(), password_hash, name, team_code)
            )
        except sqlite3.IntegrityError:
            pass  # already exists
        conn.commit()


def _init_users():
    """Create default coach and student accounts if no users exist. Ensure coachw@gmail.com always works."""
    from werkzeug.security import generate_password_hash
    conn = get_db()
    row = conn.execute("SELECT COUNT(*) as n FROM users").fetchone()
    if row and row['n'] == 0:
        conn.execute(
            "INSERT INTO users (email, password_hash, name, user_type, plan, email_verified) VALUES (?, ?, ?, 'coach', 'elite', 1)",
            ('coachw@gmail.com', generate_password_hash('12345'), 'Coach Wilson')
        )
        conn.execute(
            "INSERT INTO users (email, password_hash, name, user_type, team_code) VALUES (?, ?, ?, 'player', ?)",
            ('marcus@school.edu', generate_password_hash('12345'), 'Marcus James', 'HARKER')
        )
        conn.commit()
    else:
        # Ensure demo coach (coachw@gmail.com / 12345) always exists and is verified
        coach = conn.execute("SELECT id FROM users WHERE email = 'coachw@gmail.com'").fetchone()
        if not coach:
            conn.execute(
                "INSERT INTO users (email, password_hash, name, user_type, plan, email_verified) VALUES (?, ?, ?, 'coach', 'elite', 1)",
                ('coachw@gmail.com', generate_password_hash('12345'), 'Coach Wilson')
            )
            conn.commit()
        else:
            conn.execute("UPDATE users SET email_verified = 1, plan = 'elite' WHERE email = 'coachw@gmail.com'")
            conn.commit()
    conn.close()


# ===== USER CRUD =====

def create_user(email, password_hash, name, user_type='coach', team_code='', plan='free'):
    """Create a new user. Returns user dict or None if email exists. New users start unverified."""
    conn = get_db()
    try:
        cur = conn.execute(
            "INSERT INTO users (email, password_hash, name, user_type, team_code, plan, email_verified) VALUES (?, ?, ?, ?, ?, ?, 1)",
            (email.lower(), password_hash, name, user_type, team_code, plan)
        )
        user_id = cur.lastrowid
        conn.commit()
        return get_user_by_id(user_id)
    except sqlite3.IntegrityError:
        return None
    finally:
        conn.close()


def get_user_by_oauth(provider, subject_id):
    """Get user by OAuth provider and subject ID."""
    conn = get_db()
    row = conn.execute(
        "SELECT id, email, name, user_type, team_code, plan, email_verified, stripe_customer_id, subscription_status FROM users WHERE oauth_provider = ? AND oauth_subject_id = ?",
        (provider, subject_id)
    ).fetchone()
    conn.close()
    return dict(row) if row else None


def get_or_create_oauth_user(provider, subject_id, email, name, user_type='coach'):
    """
    Find or create user for OAuth login. OAuth users are email_verified by default.
    Returns (user_dict, created: bool).
    """
    user = get_user_by_oauth(provider, subject_id)
    if user:
        return user, False

    # Check if email already exists (e.g. from email signup)
    existing = get_user_by_email(email)
    if existing:
        # Link OAuth to existing account
        conn = get_db()
        placeholder = generate_password_hash(secrets.token_urlsafe(32))  # unguessable
        conn.execute(
            "UPDATE users SET oauth_provider = ?, oauth_subject_id = ?, email_verified = 1 WHERE id = ?",
            (provider, subject_id, existing['id'])
        )
        conn.commit()
        conn.close()
        return get_user_by_id(existing['id']), False

    # Create new OAuth user
    placeholder = generate_password_hash(secrets.token_urlsafe(32))
    conn = get_db()
    try:
        cur = conn.execute(
            """INSERT INTO users (email, password_hash, name, user_type, oauth_provider, oauth_subject_id, plan, email_verified)
               VALUES (?, ?, ?, ?, ?, ?, 'free', 1)""",
            (email.lower(), placeholder, name, user_type, provider, subject_id)
        )
        user_id = cur.lastrowid
        conn.commit()
        return get_user_by_id(user_id), True
    except sqlite3.IntegrityError:
        conn.close()
        return get_user_by_oauth(provider, subject_id), False
    finally:
        conn.close()


def get_user_by_id(user_id):
    """Get user by ID."""
    conn = get_db()
    row = conn.execute(
        "SELECT id, email, name, user_type, team_code, plan, email_verified, created_at FROM users WHERE id = ?",
        (user_id,)
    ).fetchone()
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
    row = conn.execute(
        "SELECT id, email, name, user_type, team_code, plan, email_verified, stripe_customer_id, subscription_status, created_at FROM users WHERE auth_token = ?",
        (token,)
    ).fetchone()
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


def set_email_verified(user_id):
    """Mark user's email as verified."""
    conn = get_db()
    conn.execute(
        "UPDATE users SET email_verified = 1, email_verified_at = datetime('now') WHERE id = ?",
        (user_id,)
    )
    conn.commit()
    conn.close()


def update_user_stripe(user_id, stripe_customer_id=None, stripe_subscription_id=None, subscription_status=None, plan=None):
    """Update Stripe-related fields for a user."""
    conn = get_db()
    updates, params = [], []
    if stripe_customer_id is not None:
        updates.append('stripe_customer_id = ?')
        params.append(stripe_customer_id)
    if stripe_subscription_id is not None:
        updates.append('stripe_subscription_id = ?')
        params.append(stripe_subscription_id)
    if subscription_status is not None:
        updates.append('subscription_status = ?')
        params.append(subscription_status)
    if plan is not None:
        updates.append('plan = ?')
        params.append(plan)
    if updates:
        params.append(user_id)
        conn.execute(f"UPDATE users SET {', '.join(updates)} WHERE id = ?", params)
        conn.commit()
    conn.close()


# ===== AUTH TOKENS (email confirm, password reset) =====

def create_auth_token(user_id, token_type, expires_hours=24):
    """Create a token. token_type: 'email_confirm' | 'password_reset'. Returns token string."""
    import secrets
    from datetime import datetime, timedelta
    token = secrets.token_urlsafe(32)
    expires = (datetime.utcnow() + timedelta(hours=expires_hours)).strftime('%Y-%m-%d %H:%M:%S')
    conn = get_db()
    conn.execute(
        "INSERT INTO auth_tokens (token, user_id, token_type, expires_at) VALUES (?, ?, ?, ?)",
        (token, user_id, token_type, expires)
    )
    conn.commit()
    conn.close()
    return token


def get_auth_token(token, token_type):
    """Get token record if valid and not expired. Returns (user_id, ) or None."""
    conn = get_db()
    row = conn.execute(
        "SELECT user_id FROM auth_tokens WHERE token = ? AND token_type = ? AND expires_at > datetime('now')",
        (token, token_type)
    ).fetchone()
    conn.close()
    return row['user_id'] if row else None


def consume_auth_token(token, token_type):
    """Validate and delete token. Returns user_id or None."""
    user_id = get_auth_token(token, token_type)
    if not user_id:
        return None
    conn = get_db()
    conn.execute("DELETE FROM auth_tokens WHERE token = ?", (token,))
    conn.commit()
    conn.close()
    return user_id


def set_user_team_code(user_id, team_code):
    """Update user's team_code."""
    conn = get_db()
    conn.execute("UPDATE users SET team_code = ? WHERE id = ?", (team_code, user_id))
    conn.commit()
    conn.close()


def team_code_exists(team_code):
    """Check if a team code is already used by any user."""
    conn = get_db()
    row = conn.execute("SELECT id FROM users WHERE team_code = ?", (team_code,)).fetchone()
    conn.close()
    return row is not None


def create_team_code_for_user(user_id):
    """Generate a unique 8-char alphanumeric team code and set it for the user. Returns the new code."""
    chars = string.ascii_uppercase + string.digits
    for _ in range(20):
        code = ''.join(random.choices(chars, k=8))
        if not team_code_exists(code):
            set_user_team_code(user_id, code)
            return code
    code = ''.join(random.choices(chars, k=8))
    set_user_team_code(user_id, code)
    return code


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


# ===== STAT SHEET ANALYSES =====

def create_stat_sheet(user_id, title, file_name, file_path, analysis_html):
    """Create a stat sheet analysis record. Returns the new id."""
    conn = get_db()
    cur = conn.execute(
        """INSERT INTO stat_sheet_analyses (user_id, title, file_name, file_path, analysis_html)
           VALUES (?, ?, ?, ?, ?)""",
        (user_id, title, file_name, file_path, analysis_html)
    )
    sid = cur.lastrowid
    conn.commit()
    conn.close()
    return sid


def get_stat_sheet(stat_id, user_id=None):
    """Get a stat sheet by id. If user_id given, verify ownership."""
    conn = get_db()
    row = conn.execute("SELECT * FROM stat_sheet_analyses WHERE id = ?", (stat_id,)).fetchone()
    conn.close()
    if not row:
        return None
    d = dict(row)
    if user_id is not None and d.get('user_id') != user_id:
        return None
    return d


def get_all_stat_sheets(user_id):
    """Get all stat sheet analyses for a user, newest first."""
    conn = get_db()
    rows = conn.execute(
        "SELECT * FROM stat_sheet_analyses WHERE user_id = ? ORDER BY created_at DESC",
        (user_id,)
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def delete_stat_sheet(stat_id, user_id=None):
    """Delete a stat sheet. If user_id given, verify ownership."""
    stat = get_stat_sheet(stat_id, user_id)
    if not stat:
        return False
    conn = get_db()
    if stat.get('file_path') and os.path.exists(stat['file_path']):
        os.remove(stat['file_path'])
    conn.execute("DELETE FROM stat_sheet_analyses WHERE id = ?", (stat_id,))
    conn.commit()
    conn.close()
    return True


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


# ===== CHALLENGES =====

def create_challenge(team_code, title, description, challenge_type, xp_reward, start_date, end_date,
                    created_by_coach_id, verification_type='manual', goal_value=1):
    """Create a new challenge. Returns challenge id."""
    conn = get_db()
    cur = conn.execute(
        """INSERT INTO challenges (team_code, title, description, challenge_type, xp_reward, goal_value,
           start_date, end_date, created_by_coach_id, verification_type)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (team_code, title, description, challenge_type, xp_reward, goal_value,
         start_date, end_date, created_by_coach_id, verification_type)
    )
    cid = cur.lastrowid
    conn.commit()
    conn.close()
    return cid


def get_challenge(challenge_id):
    """Get a challenge by id."""
    conn = get_db()
    row = conn.execute("SELECT * FROM challenges WHERE id = ?", (challenge_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def get_challenges_for_team(team_code, include_expired=False):
    """Get all challenges for a team. Optionally include expired."""
    conn = get_db()
    if include_expired:
        rows = conn.execute(
            "SELECT * FROM challenges WHERE team_code = ? ORDER BY start_date DESC, created_at DESC",
            (team_code,)
        ).fetchall()
    else:
        rows = conn.execute(
            """SELECT * FROM challenges WHERE team_code = ? AND end_date >= date('now')
               ORDER BY start_date ASC, created_at ASC""",
            (team_code,)
        ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


FREE_UPLOADS_PER_WEEK = 2  # Video uploads per 7 days for free plan


def count_uploads_this_week(user_id):
    """Count video uploads (games) by user in the last 7 days."""
    conn = get_db()
    row = conn.execute("""
        SELECT COUNT(*) as n FROM games
        WHERE user_id = ? AND created_at >= datetime('now', '-7 days')
    """, (user_id,)).fetchone()
    conn.close()
    return row['n'] if row else 0


def can_upload_video(user_id, plan):
    """Check if user can upload a video (free plan has weekly limit)."""
    if plan not in ('free',):
        return True, None
    count = count_uploads_this_week(user_id)
    if count >= FREE_UPLOADS_PER_WEEK:
        return False, f'Free plan limit: {FREE_UPLOADS_PER_WEEK} uploads per week. Upgrade for unlimited.'
    return True, None


def get_players_with_team_code(team_code):
    """Get all players (users with user_type=player) who have this team_code."""
    conn = get_db()
    rows = conn.execute(
        "SELECT id, name, email FROM users WHERE user_type = 'player' AND team_code = ?",
        (team_code,)
    ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


# ===== CHALLENGE PARTICIPATION =====

def get_or_create_participation(challenge_id, player_id):
    """Get participation record, or create one if it doesn't exist. Returns participation dict."""
    conn = get_db()
    row = conn.execute(
        "SELECT * FROM challenge_participation WHERE challenge_id = ? AND player_id = ?",
        (challenge_id, player_id)
    ).fetchone()
    if row:
        conn.close()
        return dict(row)
    conn.execute(
        """INSERT INTO challenge_participation (challenge_id, player_id, progress_value, completed, xp_awarded)
           VALUES (?, ?, 0, 0, 0)""",
        (challenge_id, player_id)
    )
    conn.commit()
    row = conn.execute(
        "SELECT * FROM challenge_participation WHERE challenge_id = ? AND player_id = ?",
        (challenge_id, player_id)
    ).fetchone()
    conn.close()
    return dict(row) if row else None


def update_participation_progress(participation_id, progress_value, proof_url=None, proof_note=None):
    """Update a participation's progress. Returns updated participation or None."""
    conn = get_db()
    conn.execute(
        """UPDATE challenge_participation SET progress_value = ?, proof_url = ?, proof_note = ?,
           updated_at = datetime('now') WHERE id = ?""",
        (progress_value, proof_url or '', proof_note or '', participation_id)
    )
    conn.commit()
    row = conn.execute("SELECT * FROM challenge_participation WHERE id = ?", (participation_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def complete_participation(participation_id, xp_awarded):
    """Mark participation as completed and award XP."""
    conn = get_db()
    conn.execute(
        """UPDATE challenge_participation SET completed = 1, xp_awarded = ?, completed_at = datetime('now'),
           updated_at = datetime('now') WHERE id = ?""",
        (xp_awarded, participation_id)
    )
    conn.commit()
    row = conn.execute("SELECT * FROM challenge_participation WHERE id = ?", (participation_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def get_participations_for_challenge(challenge_id):
    """Get all participation records for a challenge with player names."""
    conn = get_db()
    rows = conn.execute("""
        SELECT cp.*, u.name as player_name
        FROM challenge_participation cp
        JOIN users u ON u.id = cp.player_id
        WHERE cp.challenge_id = ?
        ORDER BY cp.completed DESC, cp.progress_value DESC
    """, (challenge_id,)).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def get_participations_for_player(player_id, team_code=None):
    """Get all participation records for a player, optionally filtered by team challenges."""
    conn = get_db()
    if team_code:
        rows = conn.execute("""
            SELECT cp.*, c.title, c.description, c.challenge_type, c.xp_reward, c.goal_value,
                   c.start_date, c.end_date, c.verification_type
            FROM challenge_participation cp
            JOIN challenges c ON c.id = cp.challenge_id
            WHERE cp.player_id = ? AND c.team_code = ?
            ORDER BY c.end_date ASC
        """, (player_id, team_code)).fetchall()
    else:
        rows = conn.execute("""
            SELECT cp.*, c.title, c.description, c.challenge_type, c.xp_reward, c.goal_value,
                   c.start_date, c.end_date, c.verification_type
            FROM challenge_participation cp
            JOIN challenges c ON c.id = cp.challenge_id
            WHERE cp.player_id = ?
            ORDER BY c.end_date ASC
        """, (player_id,)).fetchall()
    conn.close()
    return [dict(r) for r in rows]


# ===== PLAYER XP =====

def get_or_create_player_xp(player_id):
    """Get or create PlayerXP record. Returns dict."""
    conn = get_db()
    row = conn.execute("SELECT * FROM player_xp WHERE player_id = ?", (player_id,)).fetchone()
    if row:
        conn.close()
        return dict(row)
    conn.execute(
        "INSERT INTO player_xp (player_id, total_xp, level, challenges_completed) VALUES (?, 0, 1, 0)",
        (player_id,)
    )
    conn.execute("INSERT OR IGNORE INTO player_flair (player_id, flair_id) VALUES (?, 1)", (player_id,))
    conn.commit()
    row = conn.execute("SELECT * FROM player_xp WHERE player_id = ?", (player_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def add_player_xp(player_id, xp_amount):
    """Add XP to player and recalc level. Level = floor(total_xp / 100) + 1. Returns updated PlayerXP."""
    conn = get_db()
    pxp = get_or_create_player_xp(player_id)
    new_total = (pxp['total_xp'] or 0) + xp_amount
    new_level = max(1, (new_total // 100) + 1)
    new_completed = (pxp['challenges_completed'] or 0) + 1
    conn.execute(
        """UPDATE player_xp SET total_xp = ?, level = ?, challenges_completed = ?, updated_at = datetime('now')
           WHERE player_id = ?""",
        (new_total, new_level, new_completed, player_id)
    )
    conn.commit()
    row = conn.execute("SELECT * FROM player_xp WHERE player_id = ?", (player_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def get_leaderboard(team_code, limit=50):
    """Get team leaderboard: players sorted by total_xp, with badges. Returns list of dicts."""
    conn = get_db()
    rows = conn.execute("""
        SELECT u.id as player_id, u.name, px.total_xp, px.level, px.challenges_completed,
               (SELECT COUNT(*) FROM player_badge pb WHERE pb.player_id = u.id) as badge_count
        FROM users u
        LEFT JOIN player_xp px ON px.player_id = u.id
        WHERE u.user_type = 'player' AND u.team_code = ?
        ORDER BY COALESCE(px.total_xp, 0) DESC, u.name ASC
        LIMIT ?
    """, (team_code, limit)).fetchall()
    conn.close()
    result = []
    for i, r in enumerate(rows):
        d = dict(r)
        d['rank'] = i + 1
        d['total_xp'] = d.get('total_xp') or 0
        d['level'] = d.get('level') or 1
        d['challenges_completed'] = d.get('challenges_completed') or 0
        d['badge_count'] = d.get('badge_count') or 0
        result.append(d)
    return result


# ===== BADGES =====

def get_all_badges():
    """Get all badge definitions."""
    conn = get_db()
    rows = conn.execute("SELECT * FROM badges ORDER BY id").fetchall()
    conn.close()
    return [dict(r) for r in rows]


def get_player_badges(player_id):
    """Get all badges earned by a player with badge details."""
    conn = get_db()
    rows = conn.execute("""
        SELECT pb.*, b.name, b.description, b.icon, b.xp_bonus, b.criteria_type
        FROM player_badge pb
        JOIN badges b ON b.id = pb.badge_id
        WHERE pb.player_id = ?
        ORDER BY pb.awarded_at DESC
    """, (player_id,)).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def award_badge(player_id, badge_id):
    """Award a badge to a player. Returns True if awarded, False if already had it."""
    conn = get_db()
    try:
        conn.execute(
            "INSERT INTO player_badge (player_id, badge_id) VALUES (?, ?)",
            (player_id, badge_id)
        )
        conn.commit()
        conn.close()
        return True
    except sqlite3.IntegrityError:
        conn.close()
        return False


def has_badge(player_id, badge_id):
    """Check if player has a badge."""
    conn = get_db()
    row = conn.execute(
        "SELECT 1 FROM player_badge WHERE player_id = ? AND badge_id = ?",
        (player_id, badge_id)
    ).fetchone()
    conn.close()
    return row is not None


# ===== NOTIFICATIONS =====

def create_notification(user_id, ntype, title, body='', data_json='{}'):
    """Create a notification."""
    conn = get_db()
    conn.execute(
        "INSERT INTO notifications (user_id, type, title, body, data_json) VALUES (?, ?, ?, ?, ?)",
        (user_id, ntype, title, body, data_json)
    )
    conn.commit()
    conn.close()


def get_notifications(user_id, unread_only=False, limit=50):
    """Get notifications for a user."""
    conn = get_db()
    if unread_only:
        rows = conn.execute(
            "SELECT * FROM notifications WHERE user_id = ? AND read_at IS NULL ORDER BY created_at DESC LIMIT ?",
            (user_id, limit)
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT ?",
            (user_id, limit)
        ).fetchall()
    conn.close()
    return [dict(r) for r in rows]


def mark_notification_read(notification_id, user_id):
    """Mark a notification as read."""
    conn = get_db()
    conn.execute(
        "UPDATE notifications SET read_at = datetime('now') WHERE id = ? AND user_id = ?",
        (notification_id, user_id)
    )
    conn.commit()
    conn.close()


def get_unread_notification_count(user_id):
    """Get count of unread notifications."""
    conn = get_db()
    row = conn.execute(
        "SELECT COUNT(*) as n FROM notifications WHERE user_id = ? AND read_at IS NULL",
        (user_id,)
    ).fetchone()
    conn.close()
    return row['n'] if row else 0


# ===== FLAIRS =====

def get_all_flairs():
    """Get all flair definitions ordered by sort_order."""
    conn = get_db()
    rows = conn.execute("SELECT * FROM flairs ORDER BY sort_order, id").fetchall()
    conn.close()
    return [dict(r) for r in rows]


def get_unlocked_flair_ids(player_id):
    """Get flair IDs the player has unlocked (by level)."""
    pxp = get_or_create_player_xp(player_id)
    level = pxp.get('level') or 1
    conn = get_db()
    rows = conn.execute(
        "SELECT id FROM flairs WHERE unlock_criteria_type = 'level' AND unlock_criteria_value <= ? ORDER BY unlock_criteria_value DESC",
        (level,)
    ).fetchall()
    conn.close()
    return [r['id'] for r in rows]


def get_equipped_flair(player_id):
    """Get the flair the player has equipped. Returns flair dict or None."""
    conn = get_db()
    row = conn.execute("""
        SELECT f.* FROM flairs f
        JOIN player_flair pf ON pf.flair_id = f.id
        WHERE pf.player_id = ?
    """, (player_id,)).fetchone()
    conn.close()
    return dict(row) if row else None


def set_equipped_flair(player_id, flair_id):
    """Set player's equipped flair. Flair must be unlocked. Returns True if set."""
    unlocked = get_unlocked_flair_ids(player_id)
    if flair_id not in unlocked:
        return False
    conn = get_db()
    conn.execute(
        "INSERT OR REPLACE INTO player_flair (player_id, flair_id) VALUES (?, ?)",
        (player_id, flair_id)
    )
    conn.commit()
    conn.close()
    return True


# ===== DAILY LOGIN BONUS =====

DAILY_BONUS_XP = 5

def claim_daily_login_bonus(player_id):
    """Claim daily login bonus if not yet claimed today. Returns (awarded: bool, xp: int)."""
    from datetime import date
    today = date.today().isoformat()
    conn = get_db()
    pxp = get_or_create_player_xp(player_id)
    last = pxp.get('last_daily_login_date')
    if last == today:
        conn.close()
        return False, 0
    conn.execute(
        "UPDATE player_xp SET last_daily_login_date = ?, total_xp = total_xp + ?, updated_at = datetime('now') WHERE player_id = ?",
        (today, DAILY_BONUS_XP, player_id)
    )
    conn.commit()
    # Recalc level
    row = conn.execute("SELECT total_xp FROM player_xp WHERE player_id = ?", (player_id,)).fetchone()
    new_total = row['total_xp'] if row else 0
    new_level = max(1, (new_total // 100) + 1)
    conn.execute("UPDATE player_xp SET level = ? WHERE player_id = ?", (new_level, player_id))
    conn.commit()
    conn.close()
    return True, DAILY_BONUS_XP


# ===== WEEKLY WINNER =====

def get_weekly_winner(team_code):
    """Get the player with most XP earned in the last 7 days. Returns dict or None."""
    conn = get_db()
    row = conn.execute("""
        SELECT u.id as player_id, u.name, COALESCE(SUM(cp.xp_awarded), 0) as weekly_xp
        FROM users u
        LEFT JOIN challenge_participation cp ON cp.player_id = u.id AND cp.completed = 1
            AND cp.completed_at >= datetime('now', '-7 days')
        LEFT JOIN challenges c ON c.id = cp.challenge_id AND c.team_code = ?
        WHERE u.user_type = 'player' AND u.team_code = ?
        GROUP BY u.id
        HAVING weekly_xp > 0
        ORDER BY weekly_xp DESC
        LIMIT 1
    """, (team_code, team_code)).fetchone()
    conn.close()
    if not row or (row.get('weekly_xp') or 0) == 0:
        return None
    return dict(row)


# ===== RIVALRY HINTS =====

def get_rivalry_hints(player_id, team_code):
    """Get rivalry hints: player ahead (to catch) and behind (chasing you). Returns dict."""
    lb = get_leaderboard(team_code, limit=50)
    my_rank = next((r['rank'] for r in lb if r['player_id'] == player_id), None)
    if not my_rank:
        return {}
    ahead = next((r for r in lb if r['rank'] == my_rank - 1), None)
    behind = next((r for r in lb if r['rank'] == my_rank + 1), None)
    my_xp = next((r['total_xp'] for r in lb if r['player_id'] == player_id), 0)
    result = {}
    if ahead:
        xp_gap = ahead['total_xp'] - my_xp
        result['ahead'] = {'name': ahead['name'], 'xp_gap': xp_gap, 'rank': ahead['rank']}
    if behind:
        xp_gap = my_xp - behind['total_xp']
        result['behind'] = {'name': behind['name'], 'xp_gap': xp_gap, 'rank': behind['rank']}
    return result


# ===== SKILL TREES =====

CHALLENGE_TO_CATEGORY = {
    'shooting': 'Shooting',
    'defense': 'Defense',
    'playmaking': 'Playmaking',
    'workout': 'Athleticism',
    'film': 'Basketball IQ',
    'custom': 'Playmaking',
}

def get_skill_tree_categories():
    """Get all skill tree categories with levels."""
    conn = get_db()
    rows = conn.execute(
        "SELECT * FROM skill_tree_categories ORDER BY sort_order, id"
    ).fetchall()
    categories = [dict(r) for r in rows]
    for c in categories:
        levels = conn.execute(
            "SELECT * FROM skill_tree_levels WHERE category_id = ? ORDER BY level",
            (c['id'],)
        ).fetchall()
        c['levels'] = [dict(l) for l in levels]
    conn.close()
    return categories


def get_player_skill_progress(player_id):
    """Get player's skill progress for all categories."""
    conn = get_db()
    rows = conn.execute(
        "SELECT * FROM player_skill_progress WHERE player_id = ?",
        (player_id,)
    ).fetchall()
    conn.close()
    return {(r['category_id']): dict(r) for r in rows}


def add_skill_xp(player_id, category_id, xp_amount):
    """Add XP to a skill category and recalc level. Returns updated progress dict."""
    conn = get_db()
    row = conn.execute(
        "SELECT * FROM player_skill_progress WHERE player_id = ? AND category_id = ?",
        (player_id, category_id)
    ).fetchone()
    if not row:
        conn.execute(
            "INSERT INTO player_skill_progress (player_id, category_id, level, xp_in_category) VALUES (?, ?, 1, 0)",
            (player_id, category_id)
        )
        conn.commit()
        row = conn.execute(
            "SELECT * FROM player_skill_progress WHERE player_id = ? AND category_id = ?",
            (player_id, category_id)
        ).fetchone()
    d = dict(row)
    new_xp = (d.get('xp_in_category') or 0) + xp_amount
    levels = conn.execute(
        "SELECT level, xp_required FROM skill_tree_levels WHERE category_id = ? ORDER BY level DESC",
        (category_id,)
    ).fetchall()
    new_level = 1
    for l in levels:
        if new_xp >= l['xp_required']:
            new_level = l['level']
            break
    conn.execute(
        """UPDATE player_skill_progress SET xp_in_category = ?, level = ?, updated_at = datetime('now')
           WHERE player_id = ? AND category_id = ?""",
        (new_xp, new_level, player_id, category_id)
    )
    conn.commit()
    row = conn.execute(
        "SELECT * FROM player_skill_progress WHERE player_id = ? AND category_id = ?",
        (player_id, category_id)
    ).fetchone()
    conn.close()
    return dict(row) if row else None


# ===== STREAKS =====

STREAK_TYPES = ['practice', 'film_study', 'workout']
CHALLENGE_TO_STREAK = {
    'shooting': 'practice',
    'defense': 'practice',
    'playmaking': 'practice',
    'workout': 'workout',
    'film': 'film_study',
    'custom': 'practice',
}

def update_streak(player_id, streak_type):
    """Record activity for today. Increment if yesterday, reset if gap, set 1 if first. Returns (current_days, xp_bonus)."""
    from datetime import date, timedelta
    today = date.today().isoformat()
    conn = get_db()
    row = conn.execute(
        "SELECT * FROM player_streaks WHERE player_id = ? AND streak_type = ?",
        (player_id, streak_type)
    ).fetchone()
    current = row['current_days'] if row else 0
    last = row['last_activity_date'] if row else None
    xp_bonus = 0
    if not last:
        new_days = 1
    else:
        last_d = date.fromisoformat(last)
        if last_d == date.today():
            conn.close()
            return current, 0  # Already counted today
        if last_d == date.today() - timedelta(days=1):
            new_days = current + 1
            if new_days >= 6:
                xp_bonus = 30  # +30 XP bonus for 6+ day streak
        else:
            new_days = 1
    if row:
        conn.execute(
            "UPDATE player_streaks SET current_days = ?, last_activity_date = ?, updated_at = datetime('now') WHERE player_id = ? AND streak_type = ?",
            (new_days, today, player_id, streak_type)
        )
    else:
        conn.execute(
            "INSERT INTO player_streaks (player_id, streak_type, current_days, last_activity_date) VALUES (?, ?, ?, ?)",
            (player_id, streak_type, new_days, today)
        )
    conn.commit()
    conn.close()
    return new_days, xp_bonus


def get_player_streaks(player_id):
    """Get all streaks for a player. Returns list of dicts."""
    from datetime import date, timedelta
    conn = get_db()
    rows = conn.execute(
        "SELECT * FROM player_streaks WHERE player_id = ?",
        (player_id,)
    ).fetchall()
    conn.close()
    today = date.today().isoformat()
    result = []
    for r in rows:
        d = dict(r)
        last = d.get('last_activity_date')
        if last:
            last_d = date.fromisoformat(last)
            if last_d < date.today() - timedelta(days=1):
                d['active_today'] = False
                d['will_reset'] = True
            else:
                d['active_today'] = last_d == date.today()
                d['will_reset'] = False
        else:
            d['active_today'] = False
            d['will_reset'] = True
        result.append(d)
    # Ensure all streak types exist with 0
    for st in STREAK_TYPES:
        if not any(x['streak_type'] == st for x in result):
            result.append({
                'streak_type': st,
                'current_days': 0,
                'last_activity_date': None,
                'active_today': False,
                'will_reset': True,
            })
    return result


# ===== HUSTLE STATS =====

def get_hustle_leaderboard(team_code, limit=50):
    """Get hustle leaderboard: players sorted by total hustle (deflections + charges + rebounds + loose_balls + screen_assists)."""
    conn = get_db()
    rows = conn.execute("""
        SELECT u.id as player_id, u.name,
               COALESCE(h.deflections, 0) as deflections,
               COALESCE(h.charges, 0) as charges,
               COALESCE(h.rebounds, 0) as rebounds,
               COALESCE(h.loose_balls, 0) as loose_balls,
               COALESCE(h.screen_assists, 0) as screen_assists,
               (COALESCE(h.deflections, 0) + COALESCE(h.charges, 0) + COALESCE(h.rebounds, 0)
                + COALESCE(h.loose_balls, 0) + COALESCE(h.screen_assists, 0)) as total_hustle
        FROM users u
        LEFT JOIN player_hustle_stats h ON h.player_id = u.id
        WHERE u.user_type = 'player' AND u.team_code = ?
        ORDER BY total_hustle DESC, u.name ASC
        LIMIT ?
    """, (team_code, limit)).fetchall()
    conn.close()
    result = []
    for i, r in enumerate(rows):
        d = dict(r)
        d['rank'] = i + 1
        d['total_hustle'] = d.get('total_hustle') or 0
        result.append(d)
    return result


def get_player_hustle_stats(player_id):
    """Get hustle stats for a single player."""
    conn = get_db()
    row = conn.execute("SELECT * FROM player_hustle_stats WHERE player_id = ?", (player_id,)).fetchone()
    conn.close()
    if not row:
        return {'deflections': 0, 'charges': 0, 'rebounds': 0, 'loose_balls': 0, 'screen_assists': 0, 'total_hustle': 0}
    d = dict(row)
    d['total_hustle'] = (d.get('deflections') or 0) + (d.get('charges') or 0) + (d.get('rebounds') or 0) + (d.get('loose_balls') or 0) + (d.get('screen_assists') or 0)
    return d


def update_player_hustle_stats(player_id, deflections=None, charges=None, rebounds=None, loose_balls=None, screen_assists=None, add=False):
    """Update hustle stats for a player. If add=True, values are added to existing; else they replace."""
    conn = get_db()
    row = conn.execute("SELECT * FROM player_hustle_stats WHERE player_id = ?", (player_id,)).fetchone()
    if not row:
        conn.execute(
            "INSERT INTO player_hustle_stats (player_id, deflections, charges, rebounds, loose_balls, screen_assists) VALUES (?, 0, 0, 0, 0, 0)",
            (player_id,)
        )
        conn.commit()
        row = conn.execute("SELECT * FROM player_hustle_stats WHERE player_id = ?", (player_id,)).fetchone()
    d = dict(row)
    if deflections is not None:
        d['deflections'] = (d.get('deflections') or 0) + deflections if add else deflections
    if charges is not None:
        d['charges'] = (d.get('charges') or 0) + charges if add else charges
    if rebounds is not None:
        d['rebounds'] = (d.get('rebounds') or 0) + rebounds if add else rebounds
    if loose_balls is not None:
        d['loose_balls'] = (d.get('loose_balls') or 0) + loose_balls if add else loose_balls
    if screen_assists is not None:
        d['screen_assists'] = (d.get('screen_assists') or 0) + screen_assists if add else screen_assists
    conn.execute(
        """UPDATE player_hustle_stats SET deflections = ?, charges = ?, rebounds = ?, loose_balls = ?, screen_assists = ?, updated_at = datetime('now') WHERE player_id = ?""",
        (d['deflections'], d['charges'], d['rebounds'], d['loose_balls'], d['screen_assists'], player_id)
    )
    conn.commit()
    conn.close()
    return get_player_hustle_stats(player_id)


# Initialize on import
init_db()
