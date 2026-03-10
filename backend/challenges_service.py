"""
BenchPro — Weekly Challenges Service
Handles challenge completion, XP awarding, and badge unlocks.
"""
from . import models


XP_PER_LEVEL = 100


def complete_challenge(participation_id, player_id):
    """
    Complete a challenge: award XP, update PlayerXP, check badge unlocks.
    Returns dict: { xp_awarded, level, badges_unlocked: [...], prev_rank, new_rank }
    """
    part = None
    for row in models.get_participations_for_player(player_id):
        if row['id'] == participation_id:
            part = row
            break
    if not part or part.get('completed'):
        return None

    challenge = models.get_challenge(part['challenge_id'])
    if not challenge:
        return None

    xp_reward = challenge.get('xp_reward', 50)
    team_code = challenge.get('team_code', '')

    # Get rank before completion
    leaderboard = models.get_leaderboard(team_code, limit=100)
    prev_rank = next((r['rank'] for r in leaderboard if r['player_id'] == player_id), None)

    # Award XP and mark complete
    models.complete_participation(participation_id, xp_reward)
    pxp = models.add_player_xp(player_id, xp_reward)

    # Check badge unlocks
    badges_unlocked = _check_badge_unlocks(player_id, challenge, part)

    # Add badge XP bonuses
    for b in badges_unlocked:
        bonus = b.get('xp_bonus', 0)
        if bonus:
            models.add_player_xp(player_id, bonus)
            pxp = models.get_or_create_player_xp(player_id)

    # Get new rank
    leaderboard = models.get_leaderboard(team_code, limit=100)
    new_rank = next((r['rank'] for r in leaderboard if r['player_id'] == player_id), None)

    return {
        'xp_awarded': xp_reward,
        'total_xp': pxp['total_xp'],
        'level': pxp['level'],
        'badges_unlocked': badges_unlocked,
        'prev_rank': prev_rank,
        'new_rank': new_rank,
    }


def _check_badge_unlocks(player_id, challenge, participation):
    """Check which badges the player just unlocked. Returns list of badge dicts."""
    unlocked = []
    badges = models.get_all_badges()
    player_badges = {b['badge_id'] for b in models.get_player_badges(player_id)}
    pxp = models.get_or_create_player_xp(player_id)
    team_code = challenge.get('team_code', '')
    challenge_type = (challenge.get('challenge_type') or 'custom').lower()

    for b in badges:
        if b['id'] in player_badges:
            continue
        criteria = (b.get('criteria_type') or '').lower()
        value = b.get('criteria_value', 1)

        if criteria == 'challenge_wins':
            if (pxp.get('challenges_completed') or 0) >= value:
                if models.award_badge(player_id, b['id']):
                    unlocked.append(b)

        elif criteria == 'streak':
            streak = _get_current_streak(player_id, team_code)
            if streak >= value:
                if models.award_badge(player_id, b['id']):
                    unlocked.append(b)

        elif criteria == 'shooting':
            if challenge_type == 'shooting':
                if models.award_badge(player_id, b['id']):
                    unlocked.append(b)

        elif criteria == 'defense':
            defense_count = _count_completed_by_type(player_id, team_code, 'defense')
            if defense_count >= value:
                if models.award_badge(player_id, b['id']):
                    unlocked.append(b)

        elif criteria == 'film':
            film_count = _count_completed_by_type(player_id, team_code, 'film')
            if film_count >= value:
                if models.award_badge(player_id, b['id']):
                    unlocked.append(b)

        elif criteria == 'workout':
            workout_count = _count_completed_by_type(player_id, team_code, 'workout')
            if workout_count >= value:
                if models.award_badge(player_id, b['id']):
                    unlocked.append(b)

        elif criteria == 'weekly_winner':
            # Weekly winner is awarded manually or by cron - skip auto
            pass

    return unlocked


def _get_current_streak(player_id, team_code):
    """Get current completion streak: consecutive completed challenges by end_date (most recent first)."""
    challenges = models.get_challenges_for_team(team_code, include_expired=True)
    parts_by_cid = {p['challenge_id']: p for p in models.get_participations_for_player(player_id, team_code)}
    streak = 0
    for c in sorted(challenges, key=lambda x: x.get('end_date') or '', reverse=True):
        part = parts_by_cid.get(c['id'])
        if part and part.get('completed'):
            streak += 1
        else:
            break
    return streak


def _count_completed_by_type(player_id, team_code, challenge_type):
    """Count completed challenges of a given type."""
    parts = models.get_participations_for_player(player_id, team_code)
    return sum(1 for p in parts if p.get('completed') and (p.get('challenge_type') or '').lower() == challenge_type)
