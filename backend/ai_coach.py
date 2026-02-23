import os
import base64
from anthropic import Anthropic  # type: ignore
from .config import ANTHROPIC_API_KEY  # type: ignore

client = Anthropic(api_key=ANTHROPIC_API_KEY) if ANTHROPIC_API_KEY else None

def generate_coach_feedback(stats, events):
    if not client:
        return "Coach is out to lunch. (No valid Anthropic API key provided in environment variables)."

    system_prompt = """
    You are 'Coach Carter AI', an AI basketball analyst.
    Analyze the game stats provided below.
    - Start by explicitly clarifying that you are an AI coach.
    - Summarize the key stats (ball movement, player activity, possession changes) in a brief overview.
    - Based on the specific numbers, identify 1-2 areas the team needs to improve.
    - For each area, provide a specific, actionable practice drill or tip to help them improve.
    - End with one thing the team did well based on the data.
    - Format your response using basic, clean HTML (e.g., <p>, <ul>, <li>, <strong>, <h4>) so it renders nicely on a web page. Do NOT wrap your response in markdown code blocks.
    - Do NOT use any emojis in your response. Use clean, professional language only.
    - Be tough but fair, specific, and actionable.
    """

    user_message = f"""
    Here is the game data:
    - Ball Detections: {stats.get('ball_detections', 0)}
    - Player Detections: {stats.get('player_detections', 0)}
    - Home Team Detections (Our Team): {stats.get('teams', {}).get('home_detections', 0)}
    - Away Team Detections (Opponent): {stats.get('teams', {}).get('away_detections', 0)}
    - Events Log: {", ".join(events)}
    - Average Confidence: {stats.get('avg_confidence', 0)}%
    """

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=system_prompt,
            messages=[{"role": "user", "content": user_message}]
        )
        return response.content[0].text
    except Exception as e:
        return f"Coach is out to lunch. (Error connecting to AI: {str(e)})"


def analyze_stat_sheet(file_path):
    if not client:
        return "Coach is out to lunch. (No valid Anthropic API key provided in environment variables)."

    system_prompt = """
    You are 'Coach Carter AI', an elite AI basketball coach.
    Analyze the provided game stat sheet.
    - Start with a brief greeting as an AI coach.
    - Quickly summarize the key player stats you see (keep this short — a compact HTML table or brief list is fine).
    - Then spend the MAJORITY of your response on coaching advice:
      * Identify 2-3 specific weaknesses you see in the stats.
      * For EACH weakness, give a specific, named practice drill the players should run to fix it.
      * End with one thing the team is doing well that they should keep up.
    - At the END of your response, include a hidden data block for charting:
      <div id="chart-data" style="display:none">{"labels":["Stat1","Stat2","Stat3","Stat4"],"values":[75,42,88,60],"title":"Key Performance Metrics"}</div>
    - Format your entire response using basic, clean HTML.
    - Do NOT wrap your response in markdown code blocks.
    - Do NOT use any emojis. Use clean, professional language only.
    """

    try:
        file_path_str = str(file_path)
        ext = str(os.path.splitext(file_path_str)[1]).lower()
        if ext in ['.csv', '.txt']:
            with open(file_path, 'r') as f:
                content = f.read()
            messages = [{"role": "user", "content": f"Here is the game stat sheet:\n{content}"}]
        else:
            with open(file_path, 'rb') as img_file:
                b64_img = base64.b64encode(img_file.read()).decode('utf-8')
            media_type = f"image/{ext.lstrip('.')}"
            if ext == '.jpg':
                media_type = 'image/jpeg'

            messages = [{
                "role": "user",
                "content": [
                    {
                        "type": "image",
                        "source": {"type": "base64", "media_type": media_type, "data": b64_img}
                    },
                    {"type": "text", "text": "Here is the game stat sheet."}
                ]
            }]

        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=system_prompt,
            messages=messages
        )
        return response.content[0].text
    except Exception as e:
        return f"Coach is out to lunch. (Error processing stat sheet: {str(e)})"
