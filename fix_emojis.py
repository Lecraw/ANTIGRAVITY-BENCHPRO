#!/usr/bin/env python3
"""Replace all emojis in app.js with IC.xxx icon references."""

with open('app.js', 'r') as f:
    content = f.read()

# Restore from backup first (in case partial replacement happened)
with open('app.js.bak', 'r') as f:
    backup = f.read()

# Check if the IC constants block is already present in app.js
if 'const IC = {' in content:
    # Keep the IC block from current, use the rest from backup
    current_parts = content.split('// ===== STATE =====', 1)
    backup_parts = backup.split('// ===== STATE =====', 1)
    
    if len(current_parts) == 2 and len(backup_parts) == 2:
        # Take the header and IC definitions from the current file
        ic_block = current_parts[0]
        # Take the rest of the app logic from the backup file
        # Re-add the separator since split removes it
        backup_rest = '// ===== STATE =====' + backup_parts[1]
        content = ic_block + backup_rest
    else:
        # Fallback to full backup if marker is missing
        content = backup
else:
    content = backup

replacements = [
    # === showToast icon arguments ===
    ("', '📤')", "', IC.upload)"),
    ("', '✅')", "', IC.check)"),
    ("', '🗑️')", "', IC.trash)"),
    ("', '⚠️')", "', IC.warn)"),
    ("', '💡')", "', IC.bulb)"),
    ("', '⚡')", "', IC.bolt)"),
    ("', '🤖')", "', IC.ai)"),
    ("', '👤')", "', IC.user)"),
    ("', '📧')", "', IC.mail)"),
    ("', '⏳')", "', IC.clock)"),
    ("', '👋')", "', IC.login)"),
    ("', '🎉')", "', IC.star)"),

    # === addNotification icon arguments ===
    ("addNotification('🤖'", "addNotification(IC.ai"),
    ("addNotification('📤'", "addNotification(IC.upload"),
    ("addNotification('💡'", "addNotification(IC.bulb"),
    ("addNotification('✅'", "addNotification(IC.check"),
    ("addNotification('🎉'", "addNotification(IC.star"),

    # === Button text with emojis ===
    ("'🤖 Run AI Analysis'", "'${IC.ai} Run AI Analysis'"),
    ("'⏳ Analyzing with Gemini AI...'", "'${IC.clock} Analyzing with Gemini AI...'"),
    ("'⏳ Analyzing...'", "'${IC.clock} Analyzing...'"),
    ("'✅ Analysis Complete'", "'${IC.check} Analysis Complete'"),
    ("'✅ Completed'", "'${IC.check} Completed'"),
    ("'🤖 Analyze Player'", "'${IC.ai} Analyze Player'"),

    # === h3 headings ===
    ("<h3>🧠 Deep AI Coaching", "<h3>${IC.brain} Deep AI Coaching"),
    ("<h3>🤖 AI Analysis Report", "<h3>${IC.ai} AI Analysis Report"),
    ("<h3>⚡ Key Moments Detected", "<h3>${IC.bolt} Key Moments Detected"),

    # === Buttons in HTML ===
    (">📊 View Full Report<", ">${IC.chart} View Full Report<"),
    (">⚡ See Recommended Drills<", ">${IC.bolt} See Recommended Drills<"),

    # === Auth error popup ===
    ('<span style="font-size:20px">⚠️</span>', '${IC.warn}'),

    # === Dashboard greeting - remove wave emoji ===
    ("! 👋`", "!`"),

    # === Loading animations - use icons instead of big emojis ===
    ('font-size:32px;animation:pulse 1.5s infinite">🤖</div>', 'font-size:16px;animation:pulse 1.5s infinite">${IC.ai}</div>'),
    ('font-size:24px;animation:pulse 1.5s infinite">🔍</div>', 'font-size:16px;animation:pulse 1.5s infinite">${IC.search}</div>'),

    # === Gemini label ===
    ("🤖 Gemini AI Analysis", "${IC.ai} Gemini AI Analysis"),
    ("🤖 BenchPro AI (Gemini 2.0 Flash)", "${IC.ai} BenchPro AI (Gemini 2.0 Flash)"),

    # === Warning messages ===
    ("⚠️ AI deep analysis unavailable", "${IC.warn} AI deep analysis unavailable"),

    # === Search result badges ===
    ("🔍 Google Search", "${IC.search} Google Search"),
    ("📎 Sources", "${IC.clip} Sources"),

    # === Source links ===
    ("🔗 ${s.title", "${IC.link} ${s.title"),

    # === Search items icons ===
    ("icon: '📊'", "icon: IC.chart"),
    ("icon: '📤'", "icon: IC.upload"),
    ("icon: '✏️'", "icon: IC.pencil"),
    ("icon: '🤖'", "icon: IC.ai"),
    ("icon: '⚡'", "icon: IC.bolt"),
    ("icon: '⚙️'", "icon: IC.gear"),

    # === Drill completion ===
    ("completed! Great work! 💪", "completed! Great work!"),
]

for old, new in replacements:
    content = content.replace(old, new)

with open('app.js', 'w') as f:
    f.write(content)

print("Done - all emojis replaced in app.js")
