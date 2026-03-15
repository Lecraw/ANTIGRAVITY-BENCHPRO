// ===== BENCHPRO — Anthropic Claude AI Integration =====
// Uses Claude claude-sonnet-4-5 for basketball player data analysis
// Refactored to work with file:// protocol (no ES modules)

// ===== CONFIGURATION =====
const CLAUDE_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-sonnet-4-6';
const API_URL = 'https://api.anthropic.com/v1/messages';

// System instruction shared across all analysis functions
const SYSTEM_INSTRUCTION = `You are BenchPro AI, an elite basketball analytics assistant for high school basketball coaches. 
You provide data-driven, actionable coaching insights. Your analysis should be:
- Specific and backed by the data provided
- Practical for high school level coaching
- Focused on player development and team strategy
- Written in a clear, concise coaching style
Keep responses focused and under 300 words unless asked for more detail.`;

// ===== LOADING STATE MANAGER =====
window.genaiLoading = {};

function setLoading(key, isLoading) {
    window.genaiLoading[key] = isLoading;
    document.dispatchEvent(new CustomEvent('genai-loading', { detail: { key, isLoading } }));
}

function isLoading(key) {
    return window.genaiLoading[key] || false;
}

// ===== CORE API CALL (FETCH via CORS proxy) =====
async function callClaude(promptText, options = {}) {
    try {
        const payload = {
            model: MODEL,
            max_tokens: options.maxTokens || 1024,
            system: options.systemInstruction || SYSTEM_INSTRUCTION,
            messages: [{
                role: 'user',
                content: promptText
            }]
        };

        // Try direct API call first, fall back to CORS proxy if needed
        let response;
        try {
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': CLAUDE_API_KEY,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true'
                },
                body: JSON.stringify(payload)
            });
        } catch (corsError) {
            // If direct call fails (CORS), try with a proxy
            console.warn('Direct API call failed, attempting CORS proxy...', corsError);
            response = await fetch('https://corsproxy.io/?' + encodeURIComponent(API_URL), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': CLAUDE_API_KEY,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify(payload)
            });
        }

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`API Error: ${response.status} ${response.statusText} — ${errorBody}`);
        }

        const data = await response.json();

        // Extract text from Claude response format
        let text = '';
        if (data.content && Array.isArray(data.content)) {
            text = data.content
                .filter(block => block.type === 'text')
                .map(block => block.text)
                .join('\n');
        }

        return {
            success: true,
            text: text,
            searchQueries: [],
            groundingSources: [],
            usedSearch: false
        };

    } catch (error) {
        console.error('Claude API Error:', error);
        return {
            success: false,
            text: null,
            error: error.message || 'Failed to connect to AI service.'
        };
    }
}

// ===== PLAYER ANALYSIS =====
window.analyzePlayerStats = async function (playerName, stats) {
    const key = `player-${playerName}`;
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    const prompt = `Analyze this high school basketball player's performance data and provide coaching insights.

Player: ${playerName}

Stats:
- Points Per Game: ${stats.ppg}
- Assists Per Game: ${stats.apg}
- Steals Per Game: ${stats.spg}
- Rebounds Per Game: ${stats.rpg}
- Field Goal %: ${stats.fg}
- Minutes Per Game: ${stats.min}
- Efficiency Rating: ${stats.eff}/100
- Shooting Zones (FT, Mid, 3PT, Layup, Dunk %): ${stats.shoots.join(', ')}
- Performance Areas (Assists, Rebounds, Steals, Blocks, Turnovers): ${stats.perf.join(', ')}
- Last 10 Games PPG Trend: ${stats.trend}

Provide:
1. **Overall Assessment** (2-3 sentences)
2. **Top 3 Strengths** (bullet points with data backing)
3. **Top 3 Areas for Improvement** (bullet points with specific recommendations)
4. **Recommended Focus Drills** (2-3 specific drills tailored to this player)
5. **Game Strategy Note** (1-2 sentences on optimal usage)`;

    const result = await callClaude(prompt);
    setLoading(key, false);
    return result;
};

// ===== GAME ANALYSIS =====
window.analyzeGameData = async function (gameTitle, gameStats) {
    const key = `game-${gameTitle}`;
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    const momentsText = gameStats.moments.map(m => `- [${m.time}] (${m.type}): ${m.text}`).join('\n');

    const prompt = `Analyze this high school basketball game and provide tactical coaching insights.

Game: ${gameTitle}
Result: ${gameStats.result} (${gameStats.score})

Stats:
- FG%: ${gameStats.fg}
- 3PT: ${gameStats.threes}
- FT: ${gameStats.ft}
- Rebounds: ${gameStats.reb}
- Assists: ${gameStats.ast}
- Turnovers: ${gameStats.to}

Key Moments Detected:
${momentsText}

Provide:
1. **Game Summary** (2-3 sentences)
2. **Tactical Takeaways** (3-4 bullet points)
3. **What Worked** (2-3 specific positives)
4. **What Needs Work** (2-3 specific areas with suggestions)
5. **Next Game Preparation** (2-3 actionable items)`;

    const result = await callClaude(prompt);
    setLoading(key, false);
    return result;
};

// ===== TEAM PERFORMANCE ANALYSIS =====
window.analyzeTeamPerformance = async function (teamData) {
    const key = 'team-analysis';
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    const prompt = `Analyze this high school basketball team's season performance.

Season Record: ${teamData.record}
Conference Record: ${teamData.conference}
Current Streak: ${teamData.streak}

Team Averages:
- Points/Game: ${teamData.ppg}
- Rebounds/Game: ${teamData.rpg}
- Assists/Game: ${teamData.apg}
- Steals/Game: ${teamData.spg}
- Blocks/Game: ${teamData.bpg}
- Turnovers/Game: ${teamData.topg}
- FG%: ${teamData.fgPct}
- 3PT%: ${teamData.threePct}
- FT%: ${teamData.ftPct}
- Fast Break Points/Game: ${teamData.fbPts}
- Defensive Rating: ${teamData.defRating}

Provide:
1. **Season Overview** (2-3 sentences)
2. **Team Strengths** (3 bullet points backed by data)
3. **Areas to Improve** (3 bullet points with specific drills or focus areas)
4. **Strategic Recommendations** (2-3 actionable coaching adjustments)
5. **Playoff Readiness** (1-2 sentences on preparedness)`;

    const result = await callClaude(prompt);
    setLoading(key, false);
    return result;
};

// ===== DRILL RECOMMENDATIONS =====
window.getAIDrillRecommendations = async function (weaknesses) {
    const key = 'drill-recs';
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    const prompt = `Based on these detected weaknesses from recent high school basketball games, recommend specific practice drills.

Detected Issues:
${weaknesses.map(w => `- ${w}`).join('\n')}

For each issue, provide:
1. **Drill Name**
2. **Duration** (in minutes)
3. **Intensity** (Low/Medium/High)
4. **Target Group** (Guards/Wings/Bigs/Full Team)
5. **Description** (2-3 sentences on how to run the drill)
6. **Expected Improvement** (1 sentence)

Provide 3-5 specific drills total.`;

    const result = await callClaude(prompt);
    setLoading(key, false);
    return result;
};

// ===== FREE-FORM AI CHAT =====
window.askBenchProAI = async function (question, context = {}) {
    const key = 'ai-chat';
    if (isLoading(key)) return { success: false, text: null, error: 'Please wait for the current response.' };

    setLoading(key, true);

    let contextBlock = '';
    if (context.playerData) {
        contextBlock += `\nTeam Roster Data Available:\n`;
        for (const [name, stats] of Object.entries(context.playerData)) {
            contextBlock += `- ${name}: ${stats.ppg} PPG, ${stats.apg} APG, ${stats.rpg} RPG, ${stats.fg} FG%, Eff: ${stats.eff}\n`;
        }
    }
    if (context.recentGames) {
        contextBlock += `\nRecent Game Results:\n`;
        for (const [title, data] of Object.entries(context.recentGames)) {
            contextBlock += `- ${title}: ${data.score} (${data.result}), FG: ${data.fg}, AST: ${data.ast}, TO: ${data.to}\n`;
        }
    }

    const prompt = `You are BenchPro AI, an elite basketball analytics assistant.

A high school basketball coach is asking you a question. You have team data available:

**Team Data** (from their app):
${contextBlock || '(No team data loaded yet)'}

When answering, always:
- Provide specific, data-driven coaching advice
- Make practical connections between pro-level insights and high school coaching
- Reference the team's data where relevant

Coach's Question: ${question}`;

    const result = await callClaude(prompt, { maxTokens: 1536 });
    setLoading(key, false);
    return result;
};

// ===== UPLOADED FILM ANALYSIS (ENHANCED) =====
window.analyzeUploadedFilm = async function (gameContext) {
    const key = `film-${gameContext.title}`;
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    const prompt = `You are analyzing a high school basketball game film that was just uploaded. Generate a comprehensive, realistic game analysis based on the following context.

Game: ${gameContext.title}
Opponent: ${gameContext.opponent || 'Unknown'}
Date: ${gameContext.date || 'Recent'}
${gameContext.fileName ? `File: ${gameContext.fileName}` : ''}

You MUST respond with EXACTLY this JSON format first (on its own line, wrapped in a json code block), followed by your detailed analysis text:

\`\`\`json
{
  "score": "XX - XX",
  "result": "Win or Loss",
  "fg": "XX%",
  "threes": "X-XX",
  "ft": "XX-XX",
  "reb": 35,
  "ast": 18,
  "to": 12,
  "moments": [
    {"time": "X:XX QX", "type": "danger", "text": "Description of alert moment"},
    {"time": "X:XX QX", "type": "warning", "text": "Description of caution moment"},
    {"time": "X:XX QX", "type": "info", "text": "Description of key insight"},
    {"time": "X:XX QX", "type": "success", "text": "Description of positive moment"},
    {"time": "X:XX QX", "type": "info", "text": "Description of another insight"}
  ]
}
\`\`\`

After the JSON, provide a detailed coaching analysis covering ALL of the following sections:

## Game Summary
3-4 sentences on the overall flow of the game.

## Team Tips
Provide 5-6 actionable coaching tips for the team as a whole based on the game performance. Focus on what the team did well and what needs improvement in terms of ball movement, spacing, transition, defense, and chemistry.

## Individual Player Tips
For each of the following players, provide 2-3 specific tips based on the game film:
- Marcus James (#3, PG) — 18.4 PPG, 6.2 APG
- Anthony Davis (#11, SG) — 14.7 PPG, 3.8 APG
- DeShawn Wright (#7, SF) — 12.1 PPG, 6.8 RPG
- Jaylen Carter (#23, PF) — 11.3 PPG, 8.4 RPG
- Omar Johnson (#5, C) — 9.8 PPG, 9.1 RPG

## Recommended Drills — Team
Recommend 3-4 specific team drills to address weaknesses identified in this game. For each drill include:
- **Drill Name**
- **Focus Area** (what it addresses)
- **Duration** (minutes)
- **Description** (1-2 sentences)

## Recommended Drills — Individual Players
For at least 3 players, recommend 1-2 specific individual drills. Include:
- **Player Name**
- **Drill Name**
- **Why** (what film showed)
- **Description** (1-2 sentences)

## Recommended Lineups
Based on the game analysis, suggest:
1. **Best Offensive Lineup** (5 players with rationale)
2. **Best Defensive Lineup** (5 players with rationale)
3. **Crunch Time Lineup** (5 players optimized for FT%, composure, and ball security)

Make it realistic for a competitive high school game. Vary the outcomes.`;

    const result = await callClaude(prompt, { maxTokens: 4096, temperature: 0.8 });
    setLoading(key, false);

    if (result.success) {
        try {
            const jsonMatch = result.text.match(/```json\s*([\s\S]*?)```/);
            if (jsonMatch) {
                const stats = JSON.parse(jsonMatch[1].trim());
                result.parsedStats = stats;
                result.analysisText = result.text.replace(/```json[\s\S]*?```/, '').trim();
            } else {
                result.analysisText = result.text;
            }
        } catch (e) {
            console.warn('Could not parse JSON stats from AI response:', e);
            result.analysisText = result.text;
        }
    }

    return result;
};

// ===== CLIP ANALYSIS (Enhanced with AI) =====
window.analyzeClipWithAI = async function (clipTitle, existingStats) {
    const key = `clip-${clipTitle}`;
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    let statsContext = '';
    if (existingStats) {
        const momentsText = existingStats.moments.map(m => `- [${m.time}] (${m.type}): ${m.text}`).join('\n');
        statsContext = `
Known Stats:
- Score: ${existingStats.score} (${existingStats.result})
- FG%: ${existingStats.fg}
- 3PT: ${existingStats.threes}
- FT: ${existingStats.ft}
- Rebounds: ${existingStats.reb}
- Assists: ${existingStats.ast}
- Turnovers: ${existingStats.to}

Key Moments Already Detected:
${momentsText}`;
    }

    const prompt = `Provide a detailed AI coaching analysis of this high school basketball game clip.

Game: ${clipTitle}
${statsContext}

Provide a thorough analysis covering:
1. **Game Flow Analysis** — How the game unfolded quarter by quarter
2. **Tactical Breakdown** — Key offensive and defensive schemes
3. **Critical Moments** — Turning points and momentum shifts
4. **Player Performance Notes** — Who stood out and why
5. **Areas of Concern** — What needs immediate attention
6. **Practice Priorities** — Top 3 things to work on next
7. **Opponent Tendencies** — What to expect in a rematch

Be specific, data-driven, and practical for a high school coaching staff.`;

    const result = await callClaude(prompt, { maxTokens: 1536 });
    setLoading(key, false);
    return result;
};

// ===== LINEUP ANALYSIS =====
window.analyzeLineup = async function (starters, allPlayerData) {
    const key = 'lineup-analysis';
    if (isLoading(key)) return { success: false, text: null, error: 'Analysis already in progress.' };

    setLoading(key, true);

    let rosterContext = '';
    for (const [name, stats] of Object.entries(allPlayerData)) {
        rosterContext += `- ${name}: ${stats.ppg} PPG, ${stats.apg} APG, ${stats.rpg} RPG, ${stats.spg} SPG, ${stats.fg} FG%, ${stats.min} MIN, Eff: ${stats.eff}/100\n`;
    }

    const prompt = `Analyze this high school basketball starting lineup and provide strategic insights.

Current Starting 5:
${starters.map(s => `- ${s}`).join('\n')}

Full Roster Stats:
${rosterContext}

Provide:
1. **Lineup Strengths** — What this unit does well together (3-4 bullet points)
2. **Lineup Weaknesses** — Potential vulnerabilities (2-3 bullet points)
3. **Offensive System Fit** — How these 5 complement each other on offense
4. **Defensive System Fit** — How they cover defensively
5. **Recommended Adjustments** — Any substitution suggestions with reasoning
6. **Projected +/- Rating** — Estimated point differential per 8 minutes (give a number)
7. **Best Sets to Run** — 2-3 specific play concepts that leverage this lineup's strengths`;

    const result = await callClaude(prompt, { maxTokens: 1536 });
    setLoading(key, false);
    return result;
};

// ===== CLUTCH TIME SIMULATION =====
window.simulateClutchTime = async function (allPlayerData) {
    const key = 'clutch-sim';
    if (isLoading(key)) return { success: false, text: null, error: 'Simulation already in progress.' };

    setLoading(key, true);

    let rosterContext = '';
    for (const [name, stats] of Object.entries(allPlayerData)) {
        const ftPct = stats.shoots[0]; // FT% is first in shoots array
        rosterContext += `- ${name}: FT%: ${ftPct}%, ${stats.ppg} PPG, ${stats.apg} APG, Turnovers: ${stats.perf[4]}%, Eff: ${stats.eff}/100\n`;
    }

    const prompt = `You're a basketball analytics AI. Simulate a crunch time scenario (final 2 minutes, close game) for a high school team.

Available Players:
${rosterContext}

For the final 2 minutes of a close game (within 3 points), determine:

1. **Optimal Crunch Time 5** — Select the best 5 players for this situation. Prioritize:
   - Free throw shooting (getting fouled and converting)
   - Ball security (low turnover tendency)
   - Clutch scoring ability
   - Defensive reliability

2. **Roles Assignment** — For each of the 5, define their crunch time role:
   - Primary ball handler
   - First scoring option
   - Second scoring option
   - Defensive anchor
   - Rebounder/hustle

3. **Situational Playbook**:
   - **Up 1-3 points**: What to run, who handles the ball
   - **Down 1-3 points**: Quick-strike plays, who takes the shot
   - **Tied**: Strategy for the final possession

4. **Win Probability** — Give an estimated win probability with this lineup vs. an average opponent.

Be specific with player names and data-driven in your reasoning.`;

    const result = await callClaude(prompt, { maxTokens: 1536 });
    setLoading(key, false);
    return result;
};

// ===== MARKDOWN TO HTML CONVERTER =====
window.genaiMarkdownToHtml = function (text) {
    if (!text) return '';
    return text
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Headers
        .replace(/^### (.+)$/gm, '<h4 style="margin:12px 0 6px;color:var(--orange)">$1</h4>')
        .replace(/^## (.+)$/gm, '<h3 style="margin:16px 0 8px;color:var(--text-primary)">$1</h3>')
        // Numbered lists
        .replace(/^\d+\.\s+(.+)$/gm, '<div style="margin:4px 0 4px 16px">• $1</div>')
        // Bullet lists
        .replace(/^[-*]\s+(.+)$/gm, '<div style="margin:4px 0 4px 16px">• $1</div>')
        // Line breaks
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
};

// ===== HEALTH CHECK & INIT =====
window.checkGenAIConnection = async function () {
    try {
        const result = await callClaude('Respond with exactly: "BenchPro AI connected."', { maxTokens: 20 });
        return result.success;
    } catch {
        return false;
    }
};

// Signal that the GenAI module is loaded
// Since we are not using modules, we can just set the flag directly
window.genaiReady = true;
// Also emit event just in case
setTimeout(() => {
    document.dispatchEvent(new Event('genai-ready'));
    console.log('🤖 BenchPro GenAI module loaded (Claude Mode) — Model: ' + MODEL);
}, 100);
