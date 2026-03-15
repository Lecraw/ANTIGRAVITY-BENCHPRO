// ===== BENCHPRO — AI Integration via Backend Proxy =====
// All AI calls go through the backend to keep API keys server-side.

// ===== CONFIGURATION =====
const GENAI_BACKEND_URL = (typeof window !== 'undefined' && window.location.origin && window.location.origin !== 'null' && !String(window.location.protocol).startsWith('file'))
  ? window.location.origin
  : 'http://localhost:5050';

// ===== LOADING STATE MANAGER =====
window.genaiLoading = {};

function setLoading(key, isLoading) {
    window.genaiLoading[key] = isLoading;
    document.dispatchEvent(new CustomEvent('genai-loading', { detail: { key, isLoading } }));
}

function isLoading(key) {
    return window.genaiLoading[key] || false;
}

// ===== CORE API CALL (via backend proxy) =====
async function callClaude(promptText, options = {}) {
    try {
        // Get auth token
        let token = null;
        try {
            token = localStorage.getItem('benchpro_coach_token') || sessionStorage.getItem('benchpro_coach_token_session') || null;
        } catch {}

        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = 'Bearer ' + token;

        const response = await fetch(`${GENAI_BACKEND_URL}/api/ai/chat`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                question: promptText,
                context: options.context || {}
            })
        });

        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({}));
            throw new Error(errorBody.error || `API Error: ${response.status}`);
        }

        const data = await response.json();

        return {
            success: data.success !== false,
            text: data.text || '',
            searchQueries: [],
            groundingSources: [],
            usedSearch: false
        };

    } catch (error) {
        console.error('BenchPro AI Error:', error);
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

    const prompt = `A high school basketball coach is asking you a question. You have team data available:

**Team Data** (from their app):
${contextBlock || '(No team data loaded yet)'}

When answering, always:
- Provide specific, data-driven coaching advice
- Make practical connections between pro-level insights and high school coaching
- Reference the team's data where relevant

Coach's Question: ${question}`;

    const result = await callClaude(prompt, { context: contextBlock });
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
    {"time": "X:XX QX", "type": "danger", "text": "Description"},
    {"time": "X:XX QX", "type": "warning", "text": "Description"},
    {"time": "X:XX QX", "type": "info", "text": "Description"},
    {"time": "X:XX QX", "type": "success", "text": "Description"}
  ]
}
\`\`\`

After the JSON, provide a detailed coaching analysis.`;

    const result = await callClaude(prompt);
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

// ===== CLIP ANALYSIS =====
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

Key Moments:
${momentsText}`;
    }

    const prompt = `Provide a detailed AI coaching analysis of this high school basketball game clip.

Game: ${clipTitle}
${statsContext}

Provide a thorough analysis covering:
1. **Game Flow Analysis**
2. **Tactical Breakdown**
3. **Critical Moments**
4. **Player Performance Notes**
5. **Areas of Concern**
6. **Practice Priorities**

Be specific, data-driven, and practical for a high school coaching staff.`;

    const result = await callClaude(prompt);
    setLoading(key, false);
    return result;
};

// ===== MARKDOWN TO HTML CONVERTER =====
window.genaiMarkdownToHtml = function (text) {
    if (!text) return '';
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/^### (.+)$/gm, '<h4 style="margin:12px 0 6px;color:var(--orange)">$1</h4>')
        .replace(/^## (.+)$/gm, '<h3 style="margin:16px 0 8px;color:var(--text-primary)">$1</h3>')
        .replace(/^\d+\.\s+(.+)$/gm, '<div style="margin:4px 0 4px 16px">• $1</div>')
        .replace(/^[-*]\s+(.+)$/gm, '<div style="margin:4px 0 4px 16px">• $1</div>')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
};

// ===== INIT =====
window.genaiReady = true;
setTimeout(() => {
    document.dispatchEvent(new Event('genai-ready'));
    console.log('[OK] BenchPro AI module loaded (backend proxy mode)');
}, 100);
