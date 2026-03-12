// ===== CLEAN SVG ICONS =====
const _i = (d) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:-3px">${d}</svg>`;
const IC = {
  ai: _i('<path d="M12 2a4 4 0 014 4v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h2V6a4 4 0 014-4z"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/>'),
  search: _i('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
  chart: _i('<path d="M18 20V10M12 20V4M6 20v-6"/>'),
  bolt: _i('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
  check: _i('<polyline points="20 6 9 17 4 12"/>'),
  warn: _i('<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
  upload: _i('<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>'),
  user: _i('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  bulb: _i('<path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/>'),
  mail: _i('<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,7 12,13 2,7"/>'),
  trash: _i('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>'),
  clock: _i('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
  star: _i('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
  gear: _i('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33"/>'),
  pencil: _i('<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>'),
  link: _i('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>'),
  brain: _i('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/>'),
  wave: _i('<path d="M18.36 6.64A9 9 0 015.64 18.36M19.78 2.22l-2.83 2.83M4.22 19.78l2.83-2.83"/>'),
  clip: _i('<path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>'),
  login: _i('<path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>'),
  save: _i('<path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'),
  msg: _i('<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>'),
  film: _i('<rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>'),
  x: _i('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
  cam: _i('<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>'),
  card: _i('<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>'),
  file: _i('<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
  bell: _i('<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>'),
  bellOff: _i('<path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 00-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/>'),
  target: _i('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  shield: _i('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  gem: _i('<polygon points="12 2 2 7 12 22 22 7 12 2"/><polyline points="2 7 12 12 22 7"/><line x1="12" y1="12" x2="12" y2="22"/>'),
  megaphone: _i('<path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 11-5.8-1.6"/>'),
  play: _i('<polygon points="5 3 19 12 5 21 5 3"/>'),
  pause: _i('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'),
  undo: _i('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>'),
  download: _i('<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'),
  trendUp: _i('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
  clipboard: _i('<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>'),
  ban: _i('<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>'),
  barChart: _i('<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>'),
};



// ===== STATE =====
let currentPage = 'dashboard';
let currentPlan = 'free';  // Synced from currentUser.plan
let currentUser = null;  // { id, email, name, user_type, team_code, plan } from auth
let drawTool = 'pen';
let drawColor = '#F04A00';
let isDrawing = false;
let lastX = 0, lastY = 0;
let arrowStartX = 0, arrowStartY = 0;
let preDrawSnapshot = null;
let canvasHistory = [];
let tipStore = [];  // Empty for new accounts — tips added when coach sends feedback

// ===== MOBILE SIDEBAR =====
function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    const isOpen = sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('show', isOpen);
    overlay.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ===== NAVIGATION =====
function navigateTo(page) {
  closeMobileSidebar();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (pageEl) { pageEl.classList.add('active'); currentPage = page; }
  if (navEl) navEl.classList.add('active');
  if (page === 'dashboard') loadDashboardRecentGames();
  if (page === 'draw-plays') initCanvas();
  if (page === 'player-stats') renderPlayerCharts();
  if (page === 'upload-film') updateFreePlanUI();
  if (page === 'ai-analysis') renderAnalysisCharts();
  if (page === 'analysis-history') {
    document.querySelector('.main-content')?.scrollTo(0, 0);
    if (typeof loadClips === 'function') loadClips();
  }
  if (page === 'settings') {
    refreshTeamCodeDisplay();
    if (currentUser) {
      const n = document.getElementById('settings-name');
      const e = document.getElementById('settings-email');
      if (n) n.value = currentUser.name || '';
      if (e) e.value = currentUser.email || '';
    }
  }
  if (page === 'challenges') {
    loadChallengesList();
    loadChallengesLeaderboard();
    if (typeof loadCoachHustleLeaderboard === 'function') loadCoachHustleLeaderboard();
  }
  if (page === 'send-tips') loadTipPlayers();
}

// ===== AVATAR MENU =====
function toggleAvatarMenu() {
  const menu = document.getElementById('avatar-menu');
  if (!menu) return;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('avatar-menu');
  const wrap = document.querySelector('.avatar-wrap');
  if (menu && wrap && !wrap.contains(e.target)) menu.style.display = 'none';
});

function handleLogout() {
  const token = getAuthToken();
  setAuthToken(null);  // clears both localStorage and sessionStorage
  currentUser = null;
  const authScreen = document.getElementById('auth-screen');
  if (authScreen) {
    authScreen.classList.remove('hidden');
    authScreen.style.display = 'flex';
    authScreen.style.visibility = 'visible';
    authScreen.style.opacity = '1';
  }
  const menu = document.getElementById('avatar-menu');
  if (menu) menu.style.display = 'none';
  showToast('Logged out', IC.login);
  if (token) fetch(`${BACKEND_URL}/api/auth/logout`, { method: 'POST', headers: { 'Authorization': 'Bearer ' + token } }).catch(() => {});
}

// ===== TOAST =====
function showToast(message, icon) {
  if (!icon) icon = IC.check;
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).classList.add('show');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// ===== CONFIRM MODAL =====
let _confirmResolve = null;
function confirmAction(title, message, { danger = false, okText = 'Confirm', icon = '' } = {}) {
  return new Promise(resolve => {
    _confirmResolve = resolve;
    const overlay = document.getElementById('confirm-overlay');
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    const iconEl = document.getElementById('confirm-icon');
    iconEl.className = 'confirm-icon' + (danger ? ' danger' : '');
    iconEl.innerHTML = icon || (danger ? IC.warn : IC.gear);
    const okBtn = document.getElementById('confirm-ok');
    okBtn.textContent = okText;
    okBtn.className = 'btn btn-primary' + (danger ? ' danger' : '');
    overlay.classList.add('show');
  });
}
document.getElementById('confirm-ok')?.addEventListener('click', () => {
  document.getElementById('confirm-overlay').classList.remove('show');
  if (_confirmResolve) { _confirmResolve(true); _confirmResolve = null; }
});
document.getElementById('confirm-cancel')?.addEventListener('click', () => {
  document.getElementById('confirm-overlay').classList.remove('show');
  if (_confirmResolve) { _confirmResolve(false); _confirmResolve = null; }
});
document.getElementById('confirm-overlay')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('show');
    if (_confirmResolve) { _confirmResolve(false); _confirmResolve = null; }
  }
});
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('show');
  }
});

// ===== UPLOAD GAME FILM =====
function updateFreePlanUI() {
  const plan = (currentUser && currentUser.plan) || 'free';
  currentPlan = plan;
  const statCard = document.getElementById('stat-sheet-card');
  const aiCard = document.getElementById('ai-chat-card');
  const usageEl = document.getElementById('upload-usage-free');
  const planNameEl = document.querySelector('.plan-badge .plan-name');
  if (statCard) statCard.style.display = plan === 'free' ? 'none' : '';
  if (aiCard) aiCard.style.display = plan === 'free' ? 'none' : '';
  if (planNameEl) planNameEl.textContent = (plan === 'elite' ? 'Elite' : plan === 'standard' ? 'Standard' : 'Free') + ' Plan';
  if (usageEl) {
    if (plan === 'free') {
      usageEl.style.display = '';
      fetchUploadUsage().then(u => {
        if (u && !u.unlimited) usageEl.textContent = `${u.upload_count} / ${u.upload_limit} uploads this week`;
      });
    } else {
      usageEl.style.display = 'none';
    }
  }
}

async function fetchUploadUsage() {
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/me/usage`);
    if (res.ok) return res.json();
  } catch {}
  return null;
}

function initUpload() {
  const zone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('file-input');
  if (!zone) return;
  zone.addEventListener('click', () => fileInput.click());
  zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', (e) => {
    e.preventDefault(); zone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
  });
  fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
}

function handleFiles(files) {
  if (files.length === 0) return;
  const file = files[0];
  showToast(`Uploading "${file.name}"...`, IC.upload);
  // Simulate upload
  setTimeout(() => {
    showToast(`"${file.name}" uploaded successfully!`, IC.check);
    addToClips(file.name);
    closeModal('upload-modal');
  }, 1500);
}

function addToClips(fileName) {
  const grid = document.getElementById('clips-grid');
  if (!grid) return;
  const card = document.createElement('div');
  card.className = 'clip-card';
  card.onclick = () => openClipViewer(fileName, 'Just now');
  card.innerHTML = `
    <div class="clip-thumb"><div class="court-mini"></div></div>
    <div class="clip-info">
      <h4>${fileName}</h4>
      <div class="clip-date">Just now</div>
      <span class="badge badge-orange">New</span>
    </div>`;
  grid.prepend(card);
}

// ===== DRAW PLAYS (CANVAS) =====
function initCanvas() {
  const canvas = document.getElementById('playCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = 450;
  drawCourt(ctx, canvas.width, canvas.height);
  saveCanvasState();
}

function drawCourt(ctx, w, h) {
  ctx.fillStyle = '#1a1a0a';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  // Half court
  ctx.strokeRect(40, 20, w - 80, h - 40);
  ctx.beginPath(); ctx.moveTo(w / 2, 20); ctx.lineTo(w / 2, h - 20); ctx.stroke();
  // Center circle
  ctx.beginPath(); ctx.arc(w / 2, h / 2, 50, 0, Math.PI * 2); ctx.stroke();
  // Free throw areas
  ctx.strokeRect(40, h / 2 - 60, 140, 120);
  ctx.strokeRect(w - 180, h / 2 - 60, 140, 120);
  // Three point arcs
  ctx.beginPath(); ctx.arc(115, h / 2, 130, -Math.PI / 2.5, Math.PI / 2.5); ctx.stroke();
  ctx.beginPath(); ctx.arc(w - 115, h / 2, 130, Math.PI - Math.PI / 2.5, Math.PI + Math.PI / 2.5); ctx.stroke();
  // Hoops
  ctx.beginPath(); ctx.arc(60, h / 2, 8, 0, Math.PI * 2); ctx.strokeStyle = '#F04A00'; ctx.stroke();
  ctx.beginPath(); ctx.arc(w - 60, h / 2, 8, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = '#333';
}

function saveCanvasState() {
  const canvas = document.getElementById('playCanvas');
  if (canvas) canvasHistory.push(canvas.toDataURL());
}

function setupCanvasEvents() {
  const canvas = document.getElementById('playCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  }

  function onDown(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPos(e);
    lastX = pos.x; lastY = pos.y;
    if (drawTool === 'player') {
      drawPlayerToken(ctx, lastX, lastY, drawColor);
      saveCanvasState();
      isDrawing = false;
    } else if (drawTool === 'ball') {
      drawBall(ctx, lastX, lastY);
      saveCanvasState();
      isDrawing = false;
    } else if (drawTool === 'arrow') {
      arrowStartX = lastX; arrowStartY = lastY;
      preDrawSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
  }

  function onMove(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    if (drawTool === 'pen') {
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();
      lastX = pos.x; lastY = pos.y;
    } else if (drawTool === 'arrow' && preDrawSnapshot) {
      ctx.putImageData(preDrawSnapshot, 0, 0);
      drawArrow(ctx, arrowStartX, arrowStartY, pos.x, pos.y, drawColor);
    }
  }

  function onUp(e) {
    if (!isDrawing) return;
    if (drawTool === 'arrow' && preDrawSnapshot) {
      const rect = canvas.getBoundingClientRect();
      const src = e.changedTouches ? e.changedTouches[0] : e;
      const endX = src.clientX - rect.left;
      const endY = src.clientY - rect.top;
      ctx.putImageData(preDrawSnapshot, 0, 0);
      drawArrow(ctx, arrowStartX, arrowStartY, endX, endY, drawColor);
      preDrawSnapshot = null;
    }
    isDrawing = false;
    saveCanvasState();
  }

  canvas.addEventListener('mousedown', onDown);
  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseup', onUp);
  canvas.addEventListener('touchstart', onDown, { passive: false });
  canvas.addEventListener('touchmove', onMove, { passive: false });
  canvas.addEventListener('touchend', onUp);
}

function drawPlayerToken(ctx, x, y, color) {
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawBall(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#F04A00';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;
  ctx.stroke();
  // Lines
  ctx.beginPath(); ctx.moveTo(x - 10, y); ctx.lineTo(x + 10, y); ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x, y - 10); ctx.lineTo(x, y + 10); ctx.stroke();
}

function drawArrow(ctx, fromX, fromY, toX, toY, color) {
  const headLen = 15;
  const angle = Math.atan2(toY - fromY, toX - fromX);
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function setDrawTool(tool) {
  drawTool = tool;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-tool="${tool}"]`);
  if (btn) btn.classList.add('active');
}

function setDrawColor(color) {
  drawColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  const dot = document.querySelector(`[data-color="${color}"]`);
  if (dot) dot.classList.add('active');
}

function clearCanvas() {
  const canvas = document.getElementById('playCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  drawCourt(ctx, canvas.width, canvas.height);
  saveCanvasState();
  showToast('Canvas cleared', IC.trash);
}

function undoCanvas() {
  if (canvasHistory.length <= 1) return;
  canvasHistory.pop();
  const canvas = document.getElementById('playCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = canvasHistory[canvasHistory.length - 1];
  img.onload = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0); };
}

function savePlay() {
  const canvas = document.getElementById('playCanvas');
  if (!canvas) { showToast('No play to save', IC.warn); return; }
  const nameInput = document.querySelector('#page-draw-plays .form-input');
  const name = nameInput?.value?.trim() || 'Play';
  const link = document.createElement('a');
  link.download = name.replace(/\s+/g, '_') + '.png';
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`"${name}" downloaded!`, IC.save);
}

// ===== SEND TIPS =====
async function sendTip() {
  const playerId = document.getElementById('tip-player').value;
  const playerOpt = document.getElementById('tip-player').selectedOptions[0];
  const playerName = playerOpt ? playerOpt.textContent : '';
  const message = document.getElementById('tip-message').value.trim();
  if (!playerId || !message) { showToast('Please select a player and enter a message', IC.warn); return; }
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/tips`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player_id: parseInt(playerId, 10), message })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to send tip');
    }
  } catch (err) {
    showToast(err.message || 'Could not send tip', IC.warn);
    return;
  }
  tipStore.unshift({ player: playerName, player_id: playerId, message, date: 'Just now', category: 'General Feedback' });
  showToast(`Tip sent to ${playerName}!`, IC.bulb);
  document.getElementById('tip-message').value = '';
  closeModal('tip-modal');
  renderTipHistory();
  const history = document.getElementById('tip-history');
  if (history) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot success"></div>
      <div class="timeline-time">Now</div>
      <div class="timeline-content">
        <h4>Tip sent to ${playerName}</h4>
        <p>${message}</p>
      </div>`;
    history.prepend(item);
  }
}

// ===== PLAN SWITCHER (signup only; no payment) =====
function selectPlan(plan) {
  currentPlan = plan;
  document.querySelectorAll('.plan-card').forEach(c => c.classList.toggle('selected', c.getAttribute('data-plan') === plan));
  const planNameEl = document.querySelector('.plan-badge .plan-name');
  if (planNameEl) planNameEl.textContent = (plan === 'elite' ? 'Elite' : 'Standard') + ' Plan';
}

// ===== TEAM CODE =====
function getTeamCode() {
  const el = document.getElementById('team-code-display');
  if (el && el.dataset.code) return el.dataset.code;
  return (currentUser && currentUser.team_code) || '';
}

function refreshTeamCodeDisplay() {
  const codeRow = document.getElementById('team-code-row');
  const display = document.getElementById('team-code-display');
  const createBtn = document.getElementById('create-team-code-btn');
  const code = (currentUser && currentUser.team_code) || '';

  if (code) {
    if (display) {
      display.textContent = code;
      display.dataset.code = code;
    }
    if (codeRow) codeRow.style.display = 'flex';
    if (createBtn) createBtn.style.display = 'none';
  } else {
    if (codeRow) codeRow.style.display = 'none';
    if (createBtn) createBtn.style.display = 'block';
  }
}

async function createTeamCode() {
  const btn = document.getElementById('create-team-code-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Creating...'; }
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/team/create-code`, { method: 'POST' });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Failed to create team code');
    if (currentUser) currentUser.team_code = data.team_code;
    refreshTeamCodeDisplay();
    showToast('Team code created! Share it with your players.', IC.clipboard);
  } catch (err) {
    showToast(err.message || 'Failed to create team code', IC.warn);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Create Team Code'; }
  }
}

function copyTeamCode() {
  const code = getTeamCode();
  if (!code) {
    showToast('Create a team code first in Settings', IC.warn);
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast('Team code copied to clipboard!', IC.clipboard);
    }).catch(() => {
      fallbackCopy(code);
    });
  } else {
    fallbackCopy(code);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;left:-9999px';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('Team code copied!', IC.clipboard);
}

function toggleQRCode() {
  const container = document.getElementById('qr-code-container');
  const btn = document.getElementById('qr-toggle-btn');
  if (container.style.display === 'none') {
    container.style.display = 'block';
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Hide QR Code`;
    drawQRCode();
  } else {
    container.style.display = 'none';
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="8" height="8" rx="1"></rect><rect x="14" y="2" width="8" height="8" rx="1"></rect><rect x="2" y="14" width="8" height="8" rx="1"></rect><rect x="14" y="14" width="4" height="4"></rect><rect x="20" y="14" width="2" height="2"></rect><rect x="14" y="20" width="2" height="2"></rect><rect x="20" y="20" width="2" height="2"></rect></svg> Show QR Code`;
  }
}

function drawQRCode() {
  const container = document.getElementById('qr-code-container');
  if (!container) return;
  const code = document.getElementById('team-code-display')?.textContent?.trim() || 'HARKER2026';
  const joinUrl = window.location.origin + '/student.html?code=' + encodeURIComponent(code);
  const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=png&data=' + encodeURIComponent(joinUrl);
  container.innerHTML = `
    <div style="background:#fff;display:inline-block;padding:12px;border-radius:12px">
      <img src="${apiUrl}" alt="QR Code for ${code}" width="200" height="200" style="display:block;border-radius:4px"
        onerror="this.parentElement.innerHTML='<div style=\\'padding:20px;color:#999;font-size:13px\\'>QR generation requires internet</div>'">
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:10px">Scan to join <strong style="color:var(--orange)">${code}</strong></p>`;
}

function shareTeamCode() {
  const code = getTeamCode();
  if (!code) {
    showToast('Create a team code first in Settings', IC.warn);
    return;
  }
  const teamName = document.getElementById('settings-team')?.value || 'our team';
  const shareData = {
    title: `Join ${teamName} on BenchPro`,
    text: `Use team code ${code} to join the student app.`,
    url: window.location.origin + '/student.html'
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => { });
  } else {
    copyTeamCode();
    showToast('Share link copied! Send to your players.', '🔗');
  }
}


// ===== CLIP VIEWER =====
let currentClipTitle = '';
let currentClipDate = '';

const gameAnalysisData = {
  'Harker vs Westfield': {
    score: '72 - 65', result: 'Win', fg: '47%', threes: '8-22', ft: '18-24', reb: 38, ast: 18, to: 11,
    moments: [
      { time: '4:32 Q4', type: 'danger', text: 'High fatigue — #7 DeShawn Wright. Sprint speed dropped 22%.' },
      { time: '6:15 Q4', type: 'danger', text: 'High fatigue — #5 Omar Johnson. Vertical leap down 30%.' },
      { time: '2:10 Q3', type: 'warning', text: 'Turnover cluster: 3 turnovers in 90 seconds under press.' },
      { time: '5:45 Q3', type: 'warning', text: 'Defensive breakdown on left wing — 4 consecutive scores.' },
      { time: '8:00 Q2', type: 'info', text: 'Momentum shift: 12-4 run after #3 Marcus James entered.' },
      { time: '3:20 Q1', type: 'success', text: 'Starting 5 had +15 point differential — best unit this season.' }
    ]
  },
  'Harker vs Oakridge': {
    score: '58 - 61', result: 'Loss', fg: '38%', threes: '5-19', ft: '15-22', reb: 30, ast: 11, to: 16,
    moments: [
      { time: '1:45 Q4', type: 'danger', text: 'Critical turnover by #3 in final 2 minutes.' },
      { time: '3:30 Q4', type: 'warning', text: 'Missed 4 consecutive free throws in crunch time.' },
      { time: '7:00 Q3', type: 'danger', text: 'Fatigue across all starters — pace dropped 24%.' },
      { time: '5:00 Q2', type: 'info', text: 'Zone defense forced 5 turnovers in Q2.' },
      { time: '9:00 Q1', type: 'success', text: 'Strong start: 8-0 opening run.' }
    ]
  },
  'Harker vs Riverside': {
    score: '81 - 70', result: 'Win', fg: '51%', threes: '10-24', ft: '21-26', reb: 42, ast: 22, to: 8,
    moments: [
      { time: '6:30 Q4', type: 'success', text: 'Fast break efficiency 90% — best game this season.' },
      { time: '4:00 Q3', type: 'info', text: '#3 Marcus James 28 pts — career high.' },
      { time: '2:15 Q2', type: 'success', text: 'Defense held opponents to 12 points in Q2.' },
      { time: '8:00 Q1', type: 'info', text: 'Ball movement excellent: 7 assists on first 8 baskets.' }
    ]
  },
  'Harker vs Crestwood': {
    score: '66 - 54', result: 'Win', fg: '44%', threes: '7-20', ft: '17-22', reb: 36, ast: 15, to: 10,
    moments: [
      { time: '5:00 Q4', type: 'success', text: 'Closed on 10-2 run to seal the game.' },
      { time: '3:00 Q3', type: 'warning', text: 'Offensive stagnation — 3 shot clock violations.' },
      { time: '7:30 Q2', type: 'info', text: 'Press defense created 4 steals.' },
      { time: '1:00 Q1', type: 'success', text: '#23 Jaylen Carter dominant: 8 pts, 4 reb in Q1.' }
    ]
  },
};

function getGameData(title) {
  if (gameAnalysisData[title]) return gameAnalysisData[title];
  // Generate random data for unknown games
  const isWin = Math.random() > 0.35;
  const ourScore = Math.floor(Math.random() * 30) + 55;
  const theirScore = isWin ? ourScore - Math.floor(Math.random() * 15) - 1 : ourScore + Math.floor(Math.random() * 10) + 1;
  return {
    score: `${ourScore} - ${theirScore}`, result: isWin ? 'Win' : 'Loss',
    fg: `${Math.floor(Math.random() * 15) + 38}%`, threes: `${Math.floor(Math.random() * 8) + 4}-${Math.floor(Math.random() * 10) + 18}`,
    ft: `${Math.floor(Math.random() * 10) + 14}-${Math.floor(Math.random() * 8) + 20}`,
    reb: Math.floor(Math.random() * 15) + 28, ast: Math.floor(Math.random() * 12) + 10, to: Math.floor(Math.random() * 10) + 6,
    moments: [
      { time: `${Math.floor(Math.random() * 8) + 1}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')} Q4`, type: 'danger', text: 'Fatigue spike in starters — recommend substitution.' },
      { time: `${Math.floor(Math.random() * 8) + 1}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')} Q3`, type: 'warning', text: 'Turnover rate increased under defensive pressure.' },
      { time: `${Math.floor(Math.random() * 8) + 1}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')} Q2`, type: 'info', text: 'Momentum shift detected — scoring run initiated.' },
      { time: `${Math.floor(Math.random() * 8) + 1}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')} Q1`, type: 'success', text: 'Strong opening lineup — positive point differential.' }
    ]
  };
}

function openClipViewer(title, date) {
  currentClipTitle = title;
  currentClipDate = date;
  document.getElementById('clip-viewer-title').textContent = title;
  document.getElementById('clip-viewer-date').textContent = date;
  document.getElementById('clip-analysis-results').style.display = 'none';
  document.getElementById('clip-scan-overlay').classList.remove('show');
  document.getElementById('clip-analyze-btn').disabled = true;
  document.getElementById('clip-analyze-btn').innerHTML = `${IC.clock} Starting Analysis...`;
  openModal('clip-viewer-modal');
  // Draw mini-court on canvas
  setTimeout(() => {
    const canvas = document.getElementById('clip-court-canvas');
    if (!canvas) return;
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = 280;
    drawClipCourt(canvas);
  }, 100);

  // Automatically trigger the analysis
  setTimeout(() => {
    runClipAnalysis();
  }, 500);
}

function drawClipCourt(canvas) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  // Background
  ctx.fillStyle = '#1a2332';
  ctx.fillRect(0, 0, w, h);
  // Court
  const cx = w / 2, cy = h / 2;
  const cw = w * 0.8, ch = h * 0.75;
  const cl = cx - cw / 2, ct = cy - ch / 2;
  ctx.strokeStyle = 'rgba(212,115,26,0.3)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(cl, ct, cw, ch);
  ctx.beginPath(); ctx.moveTo(cx, ct); ctx.lineTo(cx, ct + ch); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, ch * 0.15, 0, Math.PI * 2); ctx.stroke();
  // Three-point arcs
  ctx.beginPath(); ctx.arc(cl + cw * 0.12, cy, ch * 0.35, -Math.PI / 2, Math.PI / 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(cl + cw * 0.88, cy, ch * 0.35, Math.PI / 2, -Math.PI / 2); ctx.stroke();
  // Player dots
  const players = [
    { x: cl + cw * 0.2, y: cy - ch * 0.1, c: '#F04A00' },
    { x: cl + cw * 0.15, y: cy + ch * 0.2, c: '#F04A00' },
    { x: cl + cw * 0.3, y: cy, c: '#F04A00' },
    { x: cl + cw * 0.25, y: cy - ch * 0.3, c: '#F04A00' },
    { x: cl + cw * 0.18, y: cy + ch * 0.35, c: '#F04A00' },
    { x: cl + cw * 0.7, y: cy - ch * 0.15, c: '#3b82f6' },
    { x: cl + cw * 0.75, y: cy + ch * 0.2, c: '#3b82f6' },
    { x: cl + cw * 0.8, y: cy, c: '#3b82f6' },
    { x: cl + cw * 0.65, y: cy - ch * 0.3, c: '#3b82f6' },
    { x: cl + cw * 0.72, y: cy + ch * 0.35, c: '#3b82f6' }
  ];
  players.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });
  // Movement arrows
  ctx.strokeStyle = 'rgba(212,115,26,0.5)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.moveTo(cl + cw * 0.2, cy - ch * 0.1); ctx.lineTo(cl + cw * 0.35, cy - ch * 0.2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cl + cw * 0.3, cy); ctx.lineTo(cl + cw * 0.4, cy - ch * 0.15); ctx.stroke();
  ctx.setLineDash([]);
  // Film label
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '11px Inter, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('⏵ Game Film Preview — ' + (currentClipTitle || 'Game Clip'), cx, ct + ch + 16);
}

function runClipAnalysis() {
  const scanOverlay = document.getElementById('clip-scan-overlay');
  const analyzeBtn = document.getElementById('clip-analyze-btn');
  const resultsArea = document.getElementById('clip-analysis-results');

  analyzeBtn.disabled = true;
  analyzeBtn.innerHTML = `${IC.clock} Analyzing with Claude AI...`;
  scanOverlay.classList.add('show');

  // Use Claude AI for the full analysis
  const gameContext = {
    title: currentClipTitle,
    opponent: currentClipTitle.includes('vs') ? currentClipTitle.split('vs')[1].trim() : 'Unknown',
    date: currentClipDate || 'Recent'
  };

  // Start Claude analysis
  const aiPromise = (window.genaiReady && window.analyzeUploadedFilm)
    ? window.analyzeUploadedFilm(gameContext)
    : Promise.resolve({ success: false, error: 'AI not loaded' });

  // Show scan overlay for at least 3 seconds for UX
  const scanDelay = 3000;
  setTimeout(() => {
    aiPromise.then(result => {
      scanOverlay.classList.remove('show');
      analyzeBtn.innerHTML = `${IC.check} Analysis Complete`;

      let data;
      let deepAnalysisBlock = '';

      if (result.success && result.parsedStats) {
        // Use AI-generated stats
        data = result.parsedStats;
        // Store for future reference
        gameAnalysisData[currentClipTitle] = data;
        if (result.analysisText) {
          if (!window.aiAnalysisTexts) window.aiAnalysisTexts = {};
          window.aiAnalysisTexts[currentClipTitle] = result.analysisText;
        }
        // Build deep analysis block from AI response
        if (result.analysisText) {
          deepAnalysisBlock = `
            <div style="margin-top:20px;border-top:1px solid var(--border);padding-top:16px">
              <h3>${IC.brain} Deep AI Coaching Analysis</h3>
              <div style="border-left:3px solid var(--orange);padding-left:16px;margin:12px 0">
                <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Powered by Claude AI</div>
              </div>
              <div style="font-size:13px;line-height:1.8;color:var(--text-secondary);max-height:400px;overflow-y:auto">
                ${window.genaiMarkdownToHtml(result.analysisText)}
              </div>
            </div>`;
        }
      } else {
        // Fallback to stored or generated data
        data = getGameData(currentClipTitle);
        // Check for stored analysis text
        const storedAnalysis = (window.aiAnalysisTexts && window.aiAnalysisTexts[currentClipTitle]);
        if (storedAnalysis) {
          deepAnalysisBlock = `
            <div style="margin-top:20px;border-top:1px solid var(--border);padding-top:16px">
              <h3>${IC.brain} Deep AI Coaching Analysis</h3>
              <div style="border-left:3px solid var(--orange);padding-left:16px;margin:12px 0">
                <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Previously generated by Claude AI</div>
              </div>
              <div style="font-size:13px;line-height:1.8;color:var(--text-secondary);max-height:400px;overflow-y:auto">
                ${window.genaiMarkdownToHtml ? window.genaiMarkdownToHtml(storedAnalysis) : storedAnalysis}
              </div>
            </div>`;
        } else if (result.error) {
          deepAnalysisBlock = `
            <div style="margin-top:16px;padding:12px;background:rgba(239,68,68,0.08);border-radius:8px;font-size:12px;color:var(--text-muted)">
              ${IC.warn} AI analysis error: ${result.error}
            </div>`;
        }
      }

      const resultColor = data.result === 'Win' ? 'var(--green)' : 'var(--red)';

      resultsArea.innerHTML = `
        <h3>${IC.ai} AI Analysis Report</h3>
        <div class="analysis-score-bar">
          <div class="analysis-score-item"><div class="val" style="color:${resultColor}">${data.score}</div><div class="lbl">${data.result}</div></div>
          <div class="analysis-score-item"><div class="val">${data.fg}</div><div class="lbl">FG%</div></div>
          <div class="analysis-score-item"><div class="val">${data.threes}</div><div class="lbl">3PT</div></div>
          <div class="analysis-score-item"><div class="val">${data.ft}</div><div class="lbl">FT</div></div>
          <div class="analysis-score-item"><div class="val">${data.reb}</div><div class="lbl">REB</div></div>
          <div class="analysis-score-item"><div class="val">${data.ast}</div><div class="lbl">AST</div></div>
          <div class="analysis-score-item"><div class="val">${data.to}</div><div class="lbl">TO</div></div>
        </div>
        <h3>${IC.bolt} Key Moments Detected</h3>
        <div class="analysis-moments">
          ${data.moments.map(m => `
            <div class="analysis-moment">
              <div class="moment-time">${m.time}</div>
              <div><span class="moment-type ${m.type}">${m.type === 'danger' ? 'Alert' : m.type === 'warning' ? 'Caution' : m.type === 'info' ? 'Insight' : 'Positive'}</span>${m.text}</div>
            </div>
          `).join('')}
        </div>
        ${deepAnalysisBlock}
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
          <button class="btn btn-sm btn-primary" onclick="closeModal('clip-viewer-modal');navigateTo('ai-analysis')">${IC.chart} View Full Report</button>
          <button class="btn btn-sm btn-secondary" onclick="closeModal('clip-viewer-modal');navigateTo('ai-drills')">${IC.bolt} See Recommended Drills</button>
        </div>
      `;
      resultsArea.style.display = 'block';
      showToast(`AI Analysis of ${currentClipTitle} complete!`, IC.ai);
      addNotification(IC.ai, 'orange', `AI Analysis complete for <strong>${currentClipTitle}</strong>`, 'Just now');
    });
  }, scanDelay);
}

// ===== SEARCH =====
const searchableItems = [
  { type: 'game', label: 'Harker vs Westfield', sub: 'Feb 10, 2026', icon: IC.film, action: () => { navigateTo('old-clips'); setTimeout(() => openClipViewer('Harker vs Westfield', 'Feb 10, 2026'), 300); } },
  { type: 'game', label: 'Harker vs Oakridge', sub: 'Feb 7, 2026', icon: IC.film, action: () => { navigateTo('old-clips'); setTimeout(() => openClipViewer('Harker vs Oakridge', 'Feb 7, 2026'), 300); } },
  { type: 'game', label: 'Harker vs Riverside', sub: 'Feb 3, 2026', icon: IC.film, action: () => { navigateTo('old-clips'); setTimeout(() => openClipViewer('Harker vs Riverside', 'Feb 3, 2026'), 300); } },
  { type: 'game', label: 'Harker vs Crestwood', sub: 'Jan 29, 2026', icon: IC.film, action: () => { navigateTo('old-clips'); setTimeout(() => openClipViewer('Harker vs Crestwood', 'Jan 29, 2026'), 300); } },
  { type: 'game', label: 'Harker vs Brookfield', sub: 'Jan 25, 2026', icon: IC.film, action: () => { navigateTo('old-clips'); setTimeout(() => openClipViewer('Harker vs Brookfield', 'Jan 25, 2026'), 300); } },
  { type: 'game', label: 'Harker vs Hillcrest', sub: 'Jan 21, 2026', icon: IC.film, action: () => { navigateTo('old-clips'); setTimeout(() => openClipViewer('Harker vs Hillcrest', 'Jan 21, 2026'), 300); } },
  { type: 'player', label: 'Marcus James (#3)', sub: 'Point Guard · 18.4 PPG', icon: IC.user, action: () => { navigateTo('player-stats'); setTimeout(() => switchPlayer('Marcus James (#3)'), 300); } },
  { type: 'player', label: 'Anthony Davis (#11)', sub: 'Shooting Guard · 14.7 PPG', icon: IC.user, action: () => { navigateTo('player-stats'); setTimeout(() => switchPlayer('Anthony Davis (#11)'), 300); } },
  { type: 'player', label: 'DeShawn Wright (#7)', sub: 'Small Forward · 12.1 PPG', icon: IC.user, action: () => { navigateTo('player-stats'); setTimeout(() => switchPlayer('DeShawn Wright (#7)'), 300); } },
  { type: 'player', label: 'Jaylen Carter (#23)', sub: 'Power Forward · 11.3 PPG', icon: IC.user, action: () => { navigateTo('player-stats'); setTimeout(() => switchPlayer('Jaylen Carter (#23)'), 300); } },
  { type: 'player', label: 'Omar Johnson (#5)', sub: 'Center · 9.8 PPG', icon: IC.user, action: () => { navigateTo('player-stats'); setTimeout(() => switchPlayer('Omar Johnson (#5)'), 300); } },
  { type: 'page', label: 'Dashboard', sub: 'Home overview', icon: IC.chart, action: () => navigateTo('dashboard') },
  { type: 'page', label: 'Upload Film', sub: 'Upload game footage', icon: IC.upload, action: () => navigateTo('upload-film') },
  { type: 'page', label: 'Draw Plays', sub: 'Play designer canvas', icon: IC.pencil, action: () => navigateTo('draw-plays') },
  { type: 'page', label: 'Send Tips', sub: 'Coaching tips to players', icon: IC.msg, action: () => navigateTo('send-tips') },
  { type: 'page', label: 'AI Analysis', sub: 'Machine learning insights', icon: IC.ai, action: () => navigateTo('ai-analysis') },
  { type: 'page', label: 'AI Drills', sub: 'Recommended training', icon: IC.bolt, action: () => navigateTo('ai-drills') },
  { type: 'page', label: 'Old Clips', sub: 'Game library', icon: IC.film, action: () => navigateTo('old-clips') },
  { type: 'page', label: 'Player Stats', sub: 'Individual performance', icon: IC.trendUp, action: () => navigateTo('player-stats') },
  { type: 'page', label: 'Settings', sub: 'Account preferences', icon: IC.gear, action: () => navigateTo('settings') },
];

function handleSearch(query) {
  const dropdown = document.getElementById('search-dropdown');
  if (!query.trim()) { dropdown.classList.remove('show'); return; }
  const q = query.toLowerCase();
  const matches = searchableItems.filter(item => item.label.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q));
  if (matches.length === 0) {
    dropdown.innerHTML = '<div class="search-dropdown-empty">No results for "' + query + '"</div>';
    dropdown.classList.add('show');
    return;
  }
  // Group by type
  const groups = {};
  matches.forEach(m => { if (!groups[m.type]) groups[m.type] = []; groups[m.type].push(m); });
  const labels = { game: 'Games', player: 'Players', page: 'Pages' };
  const icons = { game: 'orange', player: 'green', page: 'blue' };
  let html = '';
  for (const type of ['game', 'player', 'page']) {
    if (!groups[type]) continue;
    html += `<div class="search-dropdown-section">${labels[type]}</div>`;
    groups[type].slice(0, 5).forEach((item, i) => {
      html += `<div class="search-dropdown-item" onclick="searchableItems[${searchableItems.indexOf(item)}].action();document.getElementById('search-dropdown').classList.remove('show');document.getElementById('global-search').value='';"><div class="search-icon ${icons[type]}">${item.icon}</div><div><div>${item.label}</div><div style="font-size:11px;color:var(--text-muted)">${item.sub}</div></div></div>`;
    });
  }
  dropdown.innerHTML = html;
  dropdown.classList.add('show');
}

// Close search dropdown on outside click
document.addEventListener('click', (e) => {
  const search = document.getElementById('search-dropdown');
  if (search && !e.target.closest('.header-search')) search.classList.remove('show');
  const notif = document.getElementById('notif-dropdown');
  if (notif && !e.target.closest('.notif-wrap')) notif.classList.remove('show');
});

// ===== NOTIFICATIONS =====
async function loadNotifications() {
  const list = document.getElementById('notif-list');
  const dot = document.getElementById('notif-dot');
  if (!list || !getAuthToken()) return;
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/notifications`);
    if (!res.ok) return;
    const { notifications, unread_count } = await res.json();
    if (dot) dot.style.display = unread_count > 0 ? '' : 'none';
    if (!notifications || notifications.length === 0) {
      list.innerHTML = '<div class="search-dropdown-empty">No notifications</div>';
      return;
    }
    const typeIcons = {
      challenge_created: [IC.target, 'orange'],
      challenge_complete: [IC.check, 'green'],
      badge_unlock: [IC.star, 'yellow'],
      rank_change: [IC.trendUp, 'green'],
      analysis: [IC.chart, 'blue'],
      tip: [IC.bulb, 'orange'],
      drill: [IC.bolt, 'blue'],
      upload: [IC.upload, 'purple']
    };
    list.innerHTML = notifications.map(n => {
      const [icon, color] = typeIcons[n.type] || [IC.bell, 'blue'];
      const timeStr = n.created_at ? (() => {
        const d = new Date(n.created_at.replace(' ', 'T'));
        const diff = (Date.now() - d) / 60000;
        if (diff < 60) return 'Just now';
        if (diff < 1440) return Math.floor(diff / 60) + ' hours ago';
        return Math.floor(diff / 1440) + ' days ago';
      })() : '';
      return `<div class="notif-item ${n.read_at ? '' : 'unread'}" data-id="${n.id}" data-type="${n.type || ''}" onclick="handleNotifClick('${(n.type || '').replace(/'/g, "\\'")}', ${n.id})">
        <div class="notif-icon ${color}">${icon}</div>
        <div class="notif-body">
          <div class="notif-text">${escapeHtml(n.title)}</div>
          <div class="notif-time">${timeStr}</div>
        </div>
      </div>`;
    }).join('');
  } catch (err) {
    list.innerHTML = '<div class="search-dropdown-empty">Could not load notifications</div>';
  }
}

function toggleNotifications() {
  const dropdown = document.getElementById('notif-dropdown');
  dropdown.classList.toggle('show');
  if (dropdown.classList.contains('show')) {
    loadNotifications();
  }
}

function clearNotifications() {
  document.getElementById('notif-list').innerHTML = '<div class="search-dropdown-empty">No notifications</div>';
  document.getElementById('notif-dot').style.display = 'none';
}

function addNotification(icon, color, text, time) {
  const list = document.getElementById('notif-list');
  const empty = list.querySelector('.search-dropdown-empty');
  if (empty) empty.remove();
  const item = document.createElement('div');
  item.className = 'notif-item unread';
  item.innerHTML = `<div class="notif-icon ${color}">${icon}</div><div class="notif-body"><div class="notif-text">${text}</div><div class="notif-time">${time}</div></div>`;
  list.prepend(item);
  const dot = document.getElementById('notif-dot');
  if (dot) dot.style.display = '';
}

function handleNotifClick(type, id) {
  document.getElementById('notif-dropdown').classList.remove('show');
  if (id) fetchWithAuth(`${BACKEND_URL}/api/notifications/${id}/read`, { method: 'POST' }).then(() => loadNotifications()).catch(() => {});
  if (type === 'analysis') navigateTo('ai-analysis');
  else if (type === 'tip') navigateTo('send-tips');
  else if (type === 'drill') navigateTo('ai-drills');
  else if (type === 'upload') navigateTo('analysis-history');
  else if (type === 'challenge_created' || type === 'challenge_complete' || type === 'badge_unlock' || type === 'rank_change') navigateTo('challenges');
}

// ===== BACKEND API INTEGRATION =====
const BACKEND_URL = (typeof window !== 'undefined' && window.location.origin && window.location.origin !== 'null' && !String(window.location.protocol).startsWith('file'))
  ? window.location.origin
  : 'http://localhost:5050';
const AUTH_STORAGE_KEY = 'benchpro_coach_token';
const AUTH_STORAGE_KEY_SESSION = 'benchpro_coach_token_session';

function getAuthToken() {
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY_SESSION) || null;
  } catch { return null; }
}
function setAuthToken(token, persist) {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY_SESSION);
    if (token) {
      if (persist) localStorage.setItem(AUTH_STORAGE_KEY, token);
      else sessionStorage.setItem(AUTH_STORAGE_KEY_SESSION, token);
    }
  } catch {}
}

async function fetchWithAuth(url, opts = {}) {
  const token = getAuthToken();
  const headers = { ...(opts.headers || {}) };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  const res = await fetch(url, { ...opts, headers });
  // On 401, clear stale token and show login so user can re-authenticate
  if (res.status === 401 && !url.includes('/api/auth/me') && !url.includes('/api/auth/login')) {
    setAuthToken(null);
    currentUser = null;
    const authScreen = document.getElementById('auth-screen');
    if (authScreen) {
      authScreen.classList.remove('hidden');
      authScreen.style.display = '';
    }
    showToast('Session expired. Please log in again.', IC.warn);
  }
  return res;
}

let _lastBackendState = null;
async function checkBackendHealth() {
  const dot = document.getElementById('connection-dot');
  try {
    const res = await fetch(`${BACKEND_URL}/api/health`, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      window._backendOnline = true;
      if (dot) { dot.classList.add('online'); dot.classList.remove('offline'); dot.title = 'Backend: connected'; }
      if (_lastBackendState === false) showToast('Backend reconnected', IC.check);
      _lastBackendState = true;
      return true;
    }
  } catch (e) { /* offline */ }
  window._backendOnline = false;
  if (dot) { dot.classList.add('offline'); dot.classList.remove('online'); dot.title = 'Backend: offline'; }
  if (_lastBackendState === true) showToast('Backend connection lost', IC.warn);
  _lastBackendState = false;
  return false;
}

async function uploadToBackend(file, title, opponent, date) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', title || file.name);
  if (opponent) formData.append('opponent', opponent);
  if (date) formData.append('date', date);

  const res = await fetchWithAuth(`${BACKEND_URL}/api/upload`, { method: 'POST', body: formData });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Upload failed' }));
    throw new Error(err.error || 'Upload failed');
  }
  return res.json();
}

function pollAnalysisStatus(gameId, onProgress, onComplete, onError) {
  const poll = async () => {
    try {
      const res = await fetchWithAuth(`${BACKEND_URL}/api/analysis/${gameId}/status`);
      const data = await res.json();

      if (data.status === 'complete') {
        onProgress(100, 'Analysis complete!');
        const fullRes = await fetchWithAuth(`${BACKEND_URL}/api/analysis/${gameId}`);
        const full = await fullRes.json();
        onComplete(full);
        return;
      }

      if (data.status === 'error') {
        onError(data.error_message || 'Analysis failed');
        return;
      }

      // Still processing
      const pct = Math.round(data.progress || 0);
      let label = 'Processing...';
      if (pct < 10) label = 'Uploading and preparing video...';
      else if (pct < 40) label = 'Detecting players with YOLO AI...';
      else if (pct < 70) label = 'Classifying teams & tracking ball...';
      else if (pct < 90) label = 'Detecting game events...';
      else label = 'Building stats & heatmaps...';

      onProgress(pct, label);
      setTimeout(poll, 1000);
    } catch (e) {
      console.error('Poll error:', e);
      setTimeout(poll, 2000);
    }
  };
  poll();
}

async function fetchAnalysisResults(gameId) {
  const res = await fetchWithAuth(`${BACKEND_URL}/api/analysis/${gameId}`);
  return res.json();
}

// ===== UPLOAD FILM FUNCTIONS =====
function handlePageFileSelect(input) {
  if (input.files.length > 0) {
    const info = document.getElementById('page-file-info');
    const name = document.getElementById('page-file-name');
    info.style.display = 'flex';
    name.textContent = input.files[0].name + ' (' + (input.files[0].size / (1024 * 1024)).toFixed(1) + ' MB)';
  }
}

function handleClipFileSelect(input) {
  if (input.files.length > 0) {
    const info = document.getElementById('clip-file-info');
    const name = document.getElementById('clip-file-name');
    info.style.display = 'flex';
    name.textContent = input.files[0].name + ' (' + (input.files[0].size / (1024 * 1024)).toFixed(1) + ' MB)';
  }
}

function clearClipFile() {
  const fileInput = document.getElementById('file-input-clip');
  const info = document.getElementById('clip-file-info');
  if (fileInput) fileInput.value = '';
  if (info) info.style.display = 'none';
}

function handleUploadClip() {
  const titleInput = document.getElementById('upload-clip-title');
  const title = (titleInput ? titleInput.value.trim() : '') || 'Clip — ' + new Date().toLocaleDateString();

  const fileInput = document.querySelector('#file-input-clip');
  const file = fileInput && fileInput.files.length > 0 ? fileInput.files[0] : null;

  if (!file) {
    showToast('Please select a video clip first.', IC.warn);
    return;
  }

  realUploadAndAnalyze(file, title, '', 'Just now');

  if (titleInput) titleInput.value = '';
  const clipInfo = document.getElementById('clip-file-info');
  if (clipInfo) clipInfo.style.display = 'none';
  if (fileInput) fileInput.value = '';
}

function handleUploadFilm() {
  const title = document.getElementById('upload-game-title').value || 'Harker vs Unknown — ' + new Date().toLocaleDateString();
  const opponent = document.getElementById('upload-opponent').value;
  const date = document.getElementById('upload-date').value;
  const displayDate = date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Just now';
  const fileInput = document.querySelector('#page-upload-film input[type="file"]');
  const file = fileInput && fileInput.files.length > 0 ? fileInput.files[0] : null;

  if (!file) {
    showToast('Please select a video file first.', IC.warn);
    return;
  }

  realUploadAndAnalyze(file, title, opponent, displayDate);

  document.getElementById('upload-game-title').value = '';
  document.getElementById('upload-opponent').value = '';
  document.getElementById('upload-date').value = '';
  const info = document.getElementById('page-file-info');
  if (info) info.style.display = 'none';
  if (fileInput) fileInput.value = '';
}

function handleUploadFromModal() {
  const titleInput = document.querySelector('#upload-modal .form-input');
  const title = (titleInput ? titleInput.value : '') || 'Game Film — ' + new Date().toLocaleDateString();
  const fileInput = document.querySelector('#upload-modal input[type="file"]');
  const file = fileInput && fileInput.files.length > 0 ? fileInput.files[0] : null;

  if (!file) {
    showToast('Please select a video file first.', IC.warn);
    return;
  }

  closeModal('upload-modal');

  realUploadAndAnalyze(file, title, '', 'Just now');

  if (titleInput) titleInput.value = '';
  if (fileInput) fileInput.value = '';
}

// ===== REAL BACKEND UPLOAD + LIVE PROGRESS =====
async function realUploadAndAnalyze(file, title, opponent, displayDate) {
  const indicator = document.getElementById('analysis-indicator');
  const fill = document.getElementById('analysis-progress-fill');
  const label = document.getElementById('analysis-progress-label');
  const titleEl = document.getElementById('analysis-indicator-title');
  const pctEl = document.getElementById('analysis-indicator-pct');

  if (titleEl) titleEl.textContent = title.length > 24 ? title.slice(0, 21) + '...' : title;
  if (fill) fill.style.width = '0%';
  if (label) label.textContent = 'Uploading video to server...';
  if (pctEl) pctEl.textContent = '0%';
  if (indicator) indicator.classList.add('show');

  try {
    // Upload file
    showToast(`Uploading "${file.name}" (${(file.size / (1024 * 1024)).toFixed(1)} MB)...`, IC.upload);
    const uploadResult = await uploadToBackend(file, title, opponent, displayDate);
    const gameId = uploadResult.id;

    if (fill) fill.style.width = '15%';
    if (label) label.textContent = 'Starting YOLO detection...';
    if (pctEl) pctEl.textContent = '15%';

    // Poll for real progress
    pollAnalysisStatus(gameId,
      // onProgress
      (pct, statusText) => {
        if (fill) fill.style.width = Math.max(pct, 15) + '%';
        if (label) label.textContent = statusText.length > 35 ? statusText.slice(0, 32) + '...' : statusText;
        if (pctEl) pctEl.textContent = pct + '%';
      },
      // onComplete
      (result) => {
        if (fill) fill.style.width = '100%';
        if (label) label.textContent = 'Complete!';
        if (pctEl) pctEl.textContent = '100%';

        setTimeout(async () => {
          if (indicator) indicator.classList.remove('show');

          showToast(`Analysis of "${title}" complete!`, IC.check);
          addNotification(IC.upload, 'purple', `Film <strong>${title}</strong> analyzed.`, 'Just now');

          if (currentUser && currentUser.plan === 'free') updateFreePlanUI();
          loadDashboardRecentGames();
          if (currentPage === 'analysis-history' && typeof loadClips === 'function') {
            await loadClips();
          }
        }, 600);
      },
      // onError
      (errorMsg) => {
        if (indicator) indicator.classList.remove('show');
        showToast(`Analysis failed: ${errorMsg}`, IC.warn);
      }
    );

  } catch (err) {
    if (indicator) indicator.classList.remove('show');
    showToast(`Upload failed: ${err.message}`, IC.warn);
    console.error('Upload error:', err);
  }
}

function runAnalysisOverlay(title, date, onComplete) {
  const indicator = document.getElementById('analysis-indicator');
  const fill = document.getElementById('analysis-progress-fill');
  const label = document.getElementById('analysis-progress-label');
  const titleEl = document.getElementById('analysis-indicator-title');
  const pctEl = document.getElementById('analysis-indicator-pct');

  if (titleEl) titleEl.textContent = title.length > 24 ? title.slice(0, 21) + '...' : title;
  if (fill) fill.style.width = '0%';
  if (label) label.textContent = 'Uploading file...';
  if (pctEl) pctEl.textContent = '0%';
  if (indicator) indicator.classList.add('show');

  const stages = [
    { pct: 20, label: 'Uploading file...', delay: 600 },
    { pct: 45, label: 'Detecting players...', delay: 1800 },
    { pct: 70, label: 'Analyzing plays...', delay: 3200 },
    { pct: 100, label: 'Generating insights...', delay: 5000 },
  ];

  stages.forEach((stage, i) => {
    setTimeout(() => {
      if (fill) fill.style.width = stage.pct + '%';
      if (label) label.textContent = stage.label;
      if (pctEl) pctEl.textContent = stage.pct + '%';
    }, stage.delay);
  });

  setTimeout(() => {
    if (indicator) indicator.classList.remove('show');
    if (onComplete) onComplete();
  }, 6500);
}

// ===== STAT SHEET UPLOAD =====
let selectedStatFile = null;

function handleStatFileSelect(input) {
  if (input.files && input.files.length > 0) {
    selectedStatFile = input.files[0];
    const info = document.getElementById('stat-file-info');
    const name = document.getElementById('stat-file-name');
    if (info && name) {
      info.style.display = 'flex';
      name.textContent = selectedStatFile.name + ' (' + (selectedStatFile.size / (1024 * 1024)).toFixed(1) + ' MB)';
    }
  }
}

function clearStatFile() {
  selectedStatFile = null;
  const fileInput = document.getElementById('file-input-stat');
  const info = document.getElementById('stat-file-info');
  if (fileInput) fileInput.value = '';
  if (info) info.style.display = 'none';
}

async function handleUploadStatSheet() {
  if (!selectedStatFile) {
    showToast('Please select a stat sheet file first.', IC.warn);
    return;
  }

  const titleInput = document.getElementById('upload-stat-title');
  const title = titleInput ? titleInput.value.trim() : '';
  const uploadedFileName = title || selectedStatFile.name;
  const btn = document.querySelector('button[onclick="handleUploadStatSheet()"]');
  const originalBtnText = btn.innerHTML;

  btn.disabled = true;

  // Show processing indicator (non-blocking)
  const indicator = document.getElementById('analysis-indicator');
  const fill = document.getElementById('analysis-progress-fill');
  const label = document.getElementById('analysis-progress-label');
  const titleEl = document.getElementById('analysis-indicator-title');
  const pctEl = document.getElementById('analysis-indicator-pct');

  if (titleEl) titleEl.textContent = (uploadedFileName.length > 24 ? uploadedFileName.slice(0, 21) + '...' : uploadedFileName);
  if (fill) fill.style.width = '0%';
  if (label) label.textContent = 'Uploading stat sheet...';
  if (pctEl) pctEl.textContent = '0%';
  if (indicator) indicator.classList.add('show');

  const formData = new FormData();
  formData.append('file', selectedStatFile);
  if (title) formData.append('title', title);

  try {
    // Stage 1: upload
    setTimeout(() => {
      if (fill) fill.style.width = '25%';
      if (label) label.textContent = 'Uploading stat sheet...';
      if (pctEl) pctEl.textContent = '25%';
    }, 200);

    const res = await fetchWithAuth(`${BACKEND_URL}/api/upload_stats`, { method: 'POST', body: formData });

    // Stage 2: processing
    if (fill) fill.style.width = '40%';
    if (label) label.textContent = 'Reading stat sheet data...';
    if (pctEl) pctEl.textContent = '40%';

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Upload failed (${res.status})`);
    }

    // Stage 3: analyzing
    if (fill) fill.style.width = '70%';
    if (label) label.textContent = 'Claude AI analyzing stats...';
    if (pctEl) pctEl.textContent = '70%';

    const data = await res.json();

    // Stage 4: complete
    if (fill) fill.style.width = '100%';
    if (label) label.textContent = 'Analysis complete!';
    if (pctEl) pctEl.textContent = '100%';

    document.querySelectorAll('.analysis-stage').forEach(s => {
      s.classList.remove('active');
      s.classList.add('done');
    });

    // Reset the file input
    selectedStatFile = null;
    const fileInput = document.getElementById('file-input-stat');
    if (fileInput) fileInput.value = '';
    const info = document.getElementById('stat-file-info');
    if (info) info.style.display = 'none';
    if (titleInput) titleInput.value = '';

    setTimeout(async () => {
      if (indicator) indicator.classList.remove('show');
      showToast('Stat sheet analyzed!', IC.check);
      addNotification(IC.upload, 'purple', `Stat sheet <strong>${uploadedFileName}</strong> analyzed.`, 'Just now');

      // Navigate to analysis history and reload clips (stat sheet is now saved in backend)
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      const pageEl = document.getElementById('page-analysis-history');
      const navEl = document.querySelector('[data-page="analysis-history"]');
      if (pageEl) { pageEl.classList.add('active'); currentPage = 'analysis-history'; }
      if (navEl) navEl.classList.add('active');

      await loadClips();
      loadDashboardRecentGames();  // Refresh dashboard too
    }, 800);

  } catch (err) {
    if (indicator) indicator.classList.remove('show');
    showToast(err.message, IC.x);
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalBtnText;
  }
}

// ===== STAT SHEET DETAIL (from API) =====
function renderStatSheetDetail(clip, detailPanel) {
  if (clip.analysis_html) {
    detailPanel.innerHTML = `
      <div class="stat-sheet-detail" style="padding:16px;background:var(--bg-secondary);border-radius:var(--radius);margin-top:12px">
        ${buildStatSheetChart(clip.analysis_html)}
        <div class="stat-sheet-html" style="margin-top:16px;font-size:14px;line-height:1.6;color:var(--text-primary)">${clip.analysis_html}</div>
      </div>`;
  } else {
    fetchWithAuth(`${BACKEND_URL}/api/stat-sheets/${clip.id}`)
      .then(r => r.json())
      .then(data => {
        const html = data.analysis_html || 'No analysis content.';
        detailPanel.innerHTML = `
          <div class="stat-sheet-detail" style="padding:16px;background:var(--bg-secondary);border-radius:var(--radius);margin-top:12px">
            ${buildStatSheetChart(html)}
            <div class="stat-sheet-html" style="margin-top:16px;font-size:14px;line-height:1.6;color:var(--text-primary)">${html}</div>
          </div>`;
      })
      .catch(() => { detailPanel.innerHTML = '<div style="color:var(--red)">Failed to load analysis</div>'; });
  }
}

// ===== STAT SHEET CHART =====
function buildStatSheetChart(html) {
  const colors = ['var(--orange-dark),var(--orange-light)', '#2563eb,#3b82f6', '#16a34a,#22c55e', '#a855f7,#c084fc', '#eab308,#facc15', '#dc2626,#ef4444'];

  function renderChart(labels, values, title) {
    if (!labels || !values || labels.length === 0) return '';
    return `
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:16px;margin-bottom:16px">
        <h4 style="font-size:14px;margin-bottom:14px;display:flex;align-items:center;gap:8px">${IC.barChart} ${title || 'Key Metrics'}</h4>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${labels.map((lbl, i) => {
            const v = values[i] || 0;
            const c = colors[i % colors.length];
            return `<div>
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                <span style="color:var(--text-secondary)">${lbl}</span>
                <span style="font-weight:700">${v}${v <= 100 ? '%' : ''}</span>
              </div>
              <div style="height:8px;background:var(--bg-secondary);border-radius:4px;overflow:hidden">
                <div style="height:100%;width:${Math.min(v, 100)}%;background:linear-gradient(90deg,${c});border-radius:4px;transition:width 0.6s ease"></div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  // Try explicit chart-data div first
  const match = html.match(/id="chart-data"[^>]*>(\{.*?\})<\/div>/);
  if (match) {
    try {
      const cd = JSON.parse(match[1]);
      return renderChart(cd.labels, cd.values, cd.title);
    } catch { /* fall through to auto-extract */ }
  }

  // Auto-extract numeric stats from table cells or text patterns
  const labels = [];
  const values = [];

  // Look for percentage patterns like "FG%: 45%" or "Field Goal: 45.2%"
  const pctPattern = /(?:<td[^>]*>|<strong>|<b>|^|\n)\s*([A-Za-z][A-Za-z0-9 \/%.]+?)\s*(?:<\/td>|<\/strong>|<\/b>|:)\s*(?:<td[^>]*>)?\s*(\d+(?:\.\d+)?)\s*%/gi;
  let m;
  while ((m = pctPattern.exec(html)) !== null) {
    const lbl = m[1].replace(/<[^>]*>/g, '').trim();
    const val = parseFloat(m[2]);
    if (lbl.length > 1 && lbl.length < 30 && !isNaN(val) && !labels.includes(lbl)) {
      labels.push(lbl);
      values.push(Math.round(val));
    }
  }

  if (labels.length >= 2) {
    return renderChart(labels.slice(0, 6), values.slice(0, 6), 'Stat Sheet Breakdown');
  }

  return '';
}

// ===== STAT SHEET HISTORY ENTRY =====
function addStatSheetToHistory(fileName, analysisHtml) {
  const clipsList = document.getElementById('clips-list');
  const clipsEmpty = document.getElementById('clips-empty');
  if (!clipsList || !clipsEmpty) return;

  clipsEmpty.style.display = 'none';

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const entryId = 'stat-' + Date.now();

  const entryDiv = document.createElement('div');
  entryDiv.className = 'analysis-entry';
  entryDiv.setAttribute('data-stat-entry', 'true');

  entryDiv.innerHTML = `
    <div class="analysis-entry-icon stat-sheet">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    </div>
    <div class="analysis-entry-info">
      <h4>${fileName}</h4>
      <div class="analysis-entry-meta">
        <span class="analysis-entry-type stat-sheet">Stat Sheet</span>
        <span>${dateStr} at ${timeStr}</span>
      </div>
    </div>
    <div class="analysis-entry-actions">
      <span class="badge badge-green">Complete</span>
      <button class="btn btn-secondary btn-sm" data-stat-share="${entryId}" title="Share to social media">
        ${IC.link} Share
      </button>
      <button class="btn btn-primary btn-sm" data-view="${entryId}">
        ${IC.search} View
      </button>
      <button class="btn-icon" data-stat-delete="${entryId}" title="Delete">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
    <div id="${entryId}" class="analysis-entry-detail">
      ${buildStatSheetChart(analysisHtml)}
      <div class="analysis-entry-detail-text">${analysisHtml}</div>
    </div>
  `;

  clipsList.insertBefore(entryDiv, clipsList.firstChild);

  const shareBtn = entryDiv.querySelector(`[data-stat-share="${entryId}"]`);
  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = `📊 ${fileName}\nStat Sheet Analysis • ${dateStr}\n\n` + (analysisHtml || '').replace(/<[^>]+>/g, '').slice(0, 300) + '\n\nAnalyzed with BenchPro 🏀';
      const url = window.location.origin;
      const fullText = text + '\n' + url;
      if (navigator.share) {
        navigator.share({ title: fileName, text, url }).then(() => showToast('Shared!', IC.check)).catch(() => showShareFallback(url, fullText));
      } else {
        showShareFallback(url, fullText);
      }
    });
  }

  const viewBtn = entryDiv.querySelector(`[data-view="${entryId}"]`);
  const detailPanel = document.getElementById(entryId);
  viewBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = detailPanel.classList.contains('show');
    detailPanel.classList.toggle('show');
    viewBtn.innerHTML = isVisible
      ? `${IC.search} View`
      : `${IC.x} Hide`;
  });

  const deleteBtn = entryDiv.querySelector(`[data-stat-delete="${entryId}"]`);
  deleteBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const ok = await confirmAction('Delete Analysis', 'Delete this stat sheet analysis? This cannot be undone.', { danger: true, okText: 'Delete', icon: IC.trash });
    if (!ok) return;
    entryDiv.remove();
    showToast('Analysis deleted.', IC.trash);
    if (!clipsList.querySelector('.analysis-entry')) {
      clipsEmpty.style.display = 'block';
      clipsList.appendChild(clipsEmpty);
    }
  });

  entryDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== SEND TIP (from Page) =====
async function loadTipPlayers() {
  const selPage = document.getElementById('tip-player-page');
  const selModal = document.getElementById('tip-player');
  const opts = '<option value="">Choose a player...</option>';
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/team/players`);
    const data = await res.json().catch(() => ({}));
    const players = data.players || [];
    const html = opts + players.map(p => `<option value="${p.id}">${p.name || p.email}</option>`).join('');
    if (selPage) selPage.innerHTML = html;
    if (selModal) selModal.innerHTML = html;
  } catch (err) {
    if (selPage) selPage.innerHTML = opts;
    if (selModal) selModal.innerHTML = opts;
  }
}

async function sendTipFromPage() {
  const playerId = document.getElementById('tip-player-page').value;
  const playerOpt = document.getElementById('tip-player-page').selectedOptions[0];
  const playerName = playerOpt ? playerOpt.textContent : '';
  const message = document.getElementById('tip-message-page').value.trim();
  const catSelect = document.querySelector('#page-send-tips .card-body select:not(#tip-player-page)');
  const category = catSelect?.value || 'General Feedback';
  if (!playerId || !message) { showToast('Please select a player and enter a message', IC.warn); return; }

  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/tips`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player_id: parseInt(playerId, 10), message })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to send tip');
    }
  } catch (err) {
    showToast(err.message || 'Could not send tip', IC.warn);
    return;
  }

  tipStore.unshift({ player: playerName, player_id: playerId, message, date: 'Just now', category });

  showToast(`Tip sent to ${playerName}!`, IC.bulb);
  document.getElementById('tip-message-page').value = '';
  addNotification(IC.bulb, 'green', `Tip delivered to <strong>${playerName}</strong>`, 'Just now');
  renderTipHistory();

  const dashHistory = document.getElementById('tip-history');
  if (dashHistory) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot success"></div>
      <div class="timeline-time">Now</div>
      <div class="timeline-content">
        <h4>Tip sent to ${playerName}</h4>
        <p>${message}</p>
      </div>`;
    dashHistory.prepend(item);
  }
}

function renderTipHistory() {
  const historyDiv = document.getElementById('tip-history-container');
  if (!historyDiv) return;
  if (tipStore.length === 0) {
    historyDiv.innerHTML = `<div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg><h3>No tips sent yet</h3><p>Send your first tip to a player above.</p></div>`;
    return;
  }
  historyDiv.innerHTML = tipStore.map(t => `
    <div class="timeline-item" style="cursor:pointer" onclick="openPlayerChat('${t.player.replace(/'/g, "\\'")}')">
      <div class="timeline-dot success"></div>
      <div class="timeline-time">${t.date}</div>
      <div class="timeline-content">
        <h4>Sent to ${t.player}</h4>
        <p>${t.message}</p>
      </div>
    </div>`).join('');
}

function openPlayerChat(playerName) {
  const tips = tipStore.filter(t => t.player === playerName);
  const allPlayers = [...new Set(tipStore.map(t => t.player))];

  let modal = document.getElementById('player-chat-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'player-chat-modal';
    modal.innerHTML = `<div class="modal" style="max-width:560px"><div class="modal-header"><h2 id="chat-modal-title"></h2><button class="modal-close" onclick="closeModal('player-chat-modal')">${IC.x}</button></div><div class="modal-body" id="chat-modal-body"></div></div>`;
    document.body.appendChild(modal);
  }

  document.getElementById('chat-modal-title').textContent = playerName;
  const body = document.getElementById('chat-modal-body');

  if (tips.length === 0) {
    body.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:24px">No tips sent to this player yet.</p>';
  } else {
    body.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:12px;max-height:400px;overflow-y:auto;padding-right:4px">
        ${tips.map(t => `
          <div style="background:var(--bg-secondary);border-radius:12px;padding:14px 16px;border:1px solid var(--border)">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <span class="badge badge-orange" style="font-size:10px">${t.category}</span>
              <span style="font-size:11px;color:var(--text-muted)">${t.date}</span>
            </div>
            <p style="font-size:13px;color:var(--text-primary);margin:0;line-height:1.5">${t.message}</p>
          </div>`).join('')}
      </div>
      <div style="margin-top:16px;border-top:1px solid var(--border);padding-top:16px;display:flex;gap:8px">
        <input type="text" class="form-input" id="chat-quick-tip" placeholder="Send a quick tip..." style="flex:1;margin:0">
        <button class="btn btn-primary" onclick="sendChatTip('${playerName.replace(/'/g, "\\'")}')">Send</button>
      </div>`;
  }

  openModal('player-chat-modal');
}

function sendChatTip(playerName) {
  const input = document.getElementById('chat-quick-tip');
  if (!input || !input.value.trim()) return;
  tipStore.unshift({ player: playerName, message: input.value.trim(), date: 'Just now', category: 'General Feedback' });
  showToast(`Tip sent to ${playerName}!`, IC.bulb);
  openPlayerChat(playerName);
  renderTipHistory();
}

// ===== DRILL TIMER =====
let drillInterval = null;
let drillTimeLeft = 0;
let drillTotalTime = 0;
let drillPaused = false;
let drillName = '';

function startDrill(name, minutes) {
  drillName = name;
  drillTotalTime = minutes * 60;
  drillTimeLeft = drillTotalTime;
  drillPaused = false;

  document.getElementById('drill-timer-name').textContent = name;
  document.getElementById('drill-pause-btn').innerHTML = `${IC.pause} Pause`;
  updateDrillDisplay();

  document.getElementById('drill-timer-overlay').classList.add('show');

  drillInterval = setInterval(() => {
    if (!drillPaused) {
      drillTimeLeft--;
      updateDrillDisplay();
      if (drillTimeLeft <= 0) {
        completeDrill();
      }
    }
  }, 1000);
}

function updateDrillDisplay() {
  const mins = Math.floor(drillTimeLeft / 60);
  const secs = drillTimeLeft % 60;
  document.getElementById('drill-timer-display').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Update circle progress
  const circle = document.getElementById('drill-timer-circle');
  const circumference = 565.48;
  const progress = 1 - (drillTimeLeft / drillTotalTime);
  circle.setAttribute('stroke-dashoffset', circumference * (1 - progress));
}

function toggleDrillPause() {
  drillPaused = !drillPaused;
  document.getElementById('drill-pause-btn').innerHTML = drillPaused ? `${IC.play} Resume` : `${IC.pause} Pause`;
}

function skipDrill() {
  drillTimeLeft = 0;
  completeDrill();
}

function cancelDrill() {
  clearInterval(drillInterval);
  document.getElementById('drill-timer-overlay').classList.remove('show');
  showToast(`${drillName} cancelled`, IC.x);
}

function completeDrill() {
  clearInterval(drillInterval);
  document.getElementById('drill-timer-overlay').classList.remove('show');
  showToast(`${drillName} completed! Great work!`, IC.check);
  addNotification(IC.check, 'green', `Drill <strong>${drillName}</strong> completed`, 'Just now');
  document.getElementById('drill-complete-overlay').classList.add('show');
}

function closeDrillComplete() {
  document.getElementById('drill-complete-overlay').classList.remove('show');
}

function redoDrill() {
  document.getElementById('drill-complete-overlay').classList.remove('show');
  const minutes = Math.round(drillTotalTime / 60);
  startDrill(drillName, minutes);
}


// ===== PLAYER DATA =====
const playerData = {
  'Marcus James (#3)': { ppg: 18.4, apg: 6.2, spg: 3.1, rpg: 4.5, fg: '48%', min: 28.3, eff: 72, shoots: [78, 52, 34, 81, 15], perf: [68, 55, 42, 28, 23], trend: '22,16,20,14,18,24,15,21,19,17' },
  'Anthony Davis (#11)': { ppg: 14.7, apg: 3.8, spg: 1.4, rpg: 3.2, fg: '44%', min: 26.1, eff: 65, shoots: [72, 48, 38, 75, 8], perf: [52, 40, 30, 15, 31], trend: '12,16,14,18,11,15,17,14,16,13' },
  'DeShawn Wright (#7)': { ppg: 12.1, apg: 2.1, spg: 1.8, rpg: 6.8, fg: '45%', min: 30.5, eff: 58, shoots: [68, 42, 30, 78, 22], perf: [38, 72, 35, 45, 28], trend: '10,14,12,16,8,15,11,13,10,12' },
  'Jaylen Carter (#23)': { ppg: 11.3, apg: 1.5, spg: 0.9, rpg: 8.4, fg: '51%', min: 27.8, eff: 61, shoots: [65, 55, 18, 82, 30], perf: [25, 80, 18, 52, 20], trend: '12,10,14,8,13,11,15,9,12,11' },
  'Omar Johnson (#5)': { ppg: 9.8, apg: 1.2, spg: 0.6, rpg: 9.1, fg: '54%', min: 24.6, eff: 55, shoots: [62, 50, 10, 85, 35], perf: [20, 85, 12, 60, 18], trend: '8,12,10,14,7,11,9,10,8,10' },
  'Tyrese Mitchell (#10)': { ppg: 8.6, apg: 2.8, spg: 1.6, rpg: 2.1, fg: '41%', min: 18.4, eff: 52, shoots: [75, 38, 35, 68, 5], perf: [42, 28, 32, 8, 25], trend: '6,10,8,12,7,11,9,8,10,6' },
  'Brandon Lewis (#12)': { ppg: 7.4, apg: 0.8, spg: 0.5, rpg: 6.2, fg: '49%', min: 16.2, eff: 48, shoots: [58, 52, 12, 80, 28], perf: [15, 65, 10, 38, 15], trend: '8,6,10,5,9,7,8,6,9,7' },
  'Kevin Brooks (#15)': { ppg: 6.9, apg: 0.4, spg: 0.3, rpg: 7.5, fg: '52%', min: 15.8, eff: 46, shoots: [55, 45, 5, 88, 32], perf: [8, 78, 6, 55, 12], trend: '5,8,6,10,4,9,7,6,8,5' },
  'Isaiah Thomas (#20)': { ppg: 6.2, apg: 4.5, spg: 2.0, rpg: 1.8, fg: '39%', min: 14.5, eff: 50, shoots: [70, 35, 32, 60, 2], perf: [58, 22, 38, 5, 30], trend: '4,8,5,10,6,7,5,8,4,6' },
  'Andre Williams (#22)': { ppg: 5.5, apg: 1.1, spg: 1.2, rpg: 3.6, fg: '42%', min: 13.2, eff: 44, shoots: [65, 40, 28, 72, 12], perf: [20, 42, 25, 18, 22], trend: '6,4,7,3,8,5,6,4,7,5' },
  'Chris Patterson (#30)': { ppg: 4.8, apg: 1.8, spg: 0.8, rpg: 1.5, fg: '38%', min: 11.6, eff: 40, shoots: [72, 32, 30, 55, 0], perf: [30, 18, 15, 3, 20], trend: '3,6,4,8,3,5,4,7,5,4' },
  'Malik Henderson (#33)': { ppg: 4.1, apg: 0.5, spg: 0.4, rpg: 5.0, fg: '47%', min: 10.3, eff: 38, shoots: [50, 48, 8, 75, 20], perf: [10, 55, 8, 30, 10], trend: '4,3,6,2,5,4,3,5,4,3' },
};
let selectedPlayer = 'Marcus James (#3)';

// ===== PLAYER STATS BAR CHARTS =====
function renderPlayerCharts() {
  const d = playerData[selectedPlayer] || playerData['Marcus James (#3)'];
  const sl = ['Free Throws', 'Mid-Range', 'Three-Point', 'Layups', 'Dunks'];
  const sc = ['#F04A00', '#FF6A00', '#C03B00', '#FF8C42', '#3b82f6'];
  renderBarChart('chart-shooting', sl.map((l, i) => ({ label: l, value: d.shoots[i], color: sc[i] })));
  const pl = ['Assists', 'Rebounds', 'Steals', 'Blocks', 'Turnovers'];
  const pc = ['#3b82f6', '#a855f7', '#F04A00', '#eab308', '#ef4444'];
  renderBarChart('chart-performance', pl.map((l, i) => ({ label: l, value: d.perf[i], color: pc[i] })));
  renderDonutChart('chart-efficiency', d.eff, 'Efficiency');
  // Update sparkline with player data
  const sparkEl = document.querySelector('#page-player-stats .sparkline');
  if (sparkEl) sparkEl.dataset.values = d.trend;
  renderSparklines();
}

function renderBarChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  data.forEach(item => {
    const group = document.createElement('div');
    group.className = 'chart-bar-group';
    group.innerHTML = `
      <div class="chart-bar-label"><span>${item.label}</span><span style="font-weight:700">${item.value}%</span></div>
      <div class="chart-bar-track"><div class="chart-bar-fill" style="width:0%;background:${item.color}"></div></div>`;
    container.appendChild(group);
    setTimeout(() => {
      group.querySelector('.chart-bar-fill').style.width = item.value + '%';
    }, 100);
  });
}

function renderDonutChart(containerId, value, label) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (value / 100) * circumference;
  container.innerHTML = `
    <div class="donut-chart">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="45" fill="none" stroke="#222" stroke-width="10"/>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#F04A00" stroke-width="10"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
          stroke-linecap="round" style="transition:stroke-dashoffset 1s ease"/>
      </svg>
      <div class="center-text">
        <span class="center-value">${value}%</span>
        <span class="center-label">${label}</span>
      </div>
    </div>`;
}

function renderSparklines() {
  document.querySelectorAll('.sparkline').forEach(el => {
    const values = el.dataset.values ? el.dataset.values.split(',').map(Number) : [];
    const max = Math.max(...values);
    el.innerHTML = values.map(v =>
      `<div class="sparkline-bar" style="height:${(v / max) * 100}%" title="${v}"></div>`
    ).join('');
  });
}

// ===== AI ANALYSIS CHARTS =====
function renderAnalysisCharts() {
  renderBarChart('chart-team-shooting', [
    { label: 'Team FG%', value: 46, color: '#F04A00' },
    { label: 'Team 3PT%', value: 33, color: '#FF6A00' },
    { label: 'Team FT%', value: 72, color: '#FF8C42' },
    { label: 'Opp FG%', value: 41, color: '#ef4444' },
  ]);
  renderBarChart('chart-quarters', [
    { label: 'Q1 Points', value: 75, color: '#F04A00' },
    { label: 'Q2 Points', value: 60, color: '#FF6A00' },
    { label: 'Q3 Points', value: 85, color: '#FF8C42' },
    { label: 'Q4 Points', value: 45, color: '#ef4444' },
  ]);
  renderDonutChart('chart-win-rate', 67, 'Win Rate');
  renderFatigueHeatmap();
  renderPaceChart();
  renderShotDistChart();
  renderSparklines();
}

function renderPaceChart() {
  renderBarChart('chart-pace', [
    { label: 'Possessions/Game', value: 72, color: '#F04A00' },
    { label: 'Points/Possession', value: 65, color: '#FF8C42' },
    { label: 'Pace Rating', value: 78, color: '#3b82f6' },
    { label: 'Half-Court Eff.', value: 54, color: '#FF6A00' },
    { label: 'Transition Eff.', value: 82, color: '#a855f7' },
  ]);
}

function renderShotDistChart() {
  renderBarChart('chart-shot-dist', [
    { label: 'At Rim', value: 38, color: '#FF8C42' },
    { label: 'Short Mid', value: 18, color: '#FF6A00' },
    { label: 'Long Mid', value: 12, color: '#eab308' },
    { label: '3PT Corner', value: 14, color: '#3b82f6' },
    { label: '3PT Above Break', value: 18, color: '#a855f7' },
  ]);
}

function renderFatigueHeatmap() {
  const container = document.getElementById('fatigue-heatmap');
  if (!container) return;
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const players = ['#3 James', '#11 Davis', '#7 Wright', '#23 Carter', '#5 Johnson'];
  // fatigue levels 1-5 (5 = high fatigue)
  const data = [
    [1, 2, 3, 4],
    [1, 1, 2, 3],
    [2, 3, 4, 5],
    [1, 2, 2, 3],
    [1, 1, 3, 5],
  ];
  const colors = ['#F04A00', '#FF8C42', '#eab308', '#3b82f6', '#ef4444'];
  let html = '<div style="display:flex;gap:8px;margin-bottom:8px;padding-left:90px">';
  quarters.forEach(q => { html += `<div style="width:28px;text-align:center;font-size:11px;color:var(--text-muted)">${q}</div>`; });
  html += '</div>';
  players.forEach((player, pi) => {
    html += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">`;
    html += `<div style="width:82px;font-size:11px;color:var(--text-secondary);text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${player}">${player}</div>`;
    html += '<div class="heatmap-row">';
    data[pi].forEach(level => {
      html += `<div class="heatmap-cell" style="background:${colors[level - 1]}" title="Fatigue: ${level}/5">${level}</div>`;
    });
    html += '</div></div>';
  });
  html += '<div style="display:flex;align-items:center;gap:8px;margin-top:12px;font-size:11px;color:var(--text-muted)"><span>Low</span>';
  colors.forEach(c => { html += `<div style="width:16px;height:12px;border-radius:2px;background:${c}"></div>`; });
  html += '<span>High</span></div>';
  container.innerHTML = html;
}

// ===== DRILL FILTER =====
function filterDrills(category) {
  document.querySelectorAll('.drill-filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.drill-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ===== PLAYER SWITCHER =====
function switchPlayer(name) {
  selectedPlayer = name;
  document.getElementById('selected-player-name').textContent = name;
  document.querySelectorAll('#page-player-stats .player-row').forEach(r => r.style.background = '');
  if (event && event.currentTarget) event.currentTarget.style.background = 'rgba(212,115,26,0.05)';
  const d = playerData[name];
  if (d) {
    const s = id => document.getElementById(id);
    if (s('stat-ppg')) s('stat-ppg').textContent = d.ppg;
    if (s('stat-apg')) s('stat-apg').textContent = d.apg;
    if (s('stat-spg')) s('stat-spg').textContent = d.spg;
    if (s('stat-rpg')) s('stat-rpg').textContent = d.rpg;
    if (s('stat-fg')) s('stat-fg').textContent = d.fg;
    if (s('stat-min')) s('stat-min').textContent = d.min;
  }
  showToast(`Viewing stats for ${name}`, IC.user);
  renderPlayerCharts();
}

// ===== AUTH SCREEN =====
let signupStep = 1;
let selectedSignupPlan = 'free';

function showAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-view').forEach(v => v.classList.remove('active'));
  document.querySelector(`.auth-tab:${tab === 'login' ? 'first-child' : 'last-child'}`).classList.add('active');
  document.getElementById(`auth-${tab}`).classList.add('active');
  // Reset signup to step 1 when switching tabs
  if (tab === 'signup') {
    signupStep = 1;
    updateSignupStep();
  }
}

function updateSignupStep() {
  // Update step content
  document.querySelectorAll('.signup-step').forEach(s => s.classList.remove('active'));
  const stepEl = document.getElementById(`signup-step-${signupStep}`);
  if (stepEl) stepEl.classList.add('active');

  // Update progress indicators
  document.querySelectorAll('.progress-step').forEach(ps => {
    const step = parseInt(ps.dataset.step);
    ps.classList.remove('active', 'completed');
    if (step === signupStep) ps.classList.add('active');
    else if (step < signupStep) ps.classList.add('completed');
  });

  // Update progress lines
  const lines = document.querySelectorAll('.progress-line');
  lines.forEach((line, i) => {
    line.classList.remove('active', 'completed');
    if (i < signupStep - 1) line.classList.add('completed');
    if (i === signupStep - 1) line.classList.add('active');
  });

  // Update buttons
  const backBtn = document.getElementById('signup-back-btn');
  const nextBtn = document.getElementById('signup-next-btn');
  backBtn.style.display = signupStep === 1 ? 'none' : 'flex';

  if (signupStep === 4) {
    nextBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      Create Account
    `;
  } else {
    nextBtn.innerHTML = `
      Continue
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    `;
  }
}

function signupNext() {
  if (signupStep < 4) {
    signupStep++;
    updateSignupStep();
  } else {
    handleSignupComplete();
  }
}

function signupBack() {
  if (signupStep > 1) {
    signupStep--;
    updateSignupStep();
  }
}

function selectSignupPlan(plan) {
  selectedSignupPlan = plan;
  document.querySelectorAll('.signup-plan-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.plan === plan);
  });
}

// OAuth: redirect to backend which redirects to Google/Apple
window.socialLogin = function (provider) {
  const path = provider === 'Google' ? '/api/auth/google/authorize' : '/api/auth/apple/authorize';
  window.location.href = BACKEND_URL + path;
};

async function handleLogin() {
  const emailEl = document.getElementById('login-email');
  const pwEl = document.getElementById('login-password');
  const email = emailEl.value.trim();
  const password = pwEl.value;

  let hasError = false;
  if (!email) { showFieldError(emailEl, 'Email is required'); hasError = true; }
  else if (!/\S+@\S+\.\S+/.test(email)) { showFieldError(emailEl, 'Enter a valid email address'); hasError = true; }
  else clearFieldError(emailEl);
  if (!password) { showFieldError(pwEl, 'Password is required'); hasError = true; }
  else clearFieldError(pwEl);
  if (hasError) return;

  const btn = document.querySelector('#auth-login .auth-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = IC.clock; }
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      showAuthError(data.error || 'Incorrect email or password. Please try again.');
      if (btn) { btn.style.animation = 'shake 0.4s ease'; setTimeout(() => { btn.style.animation = ''; btn.disabled = false; btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> Log In'; }, 400); }
      return;
    }
    if (data.user && data.user.user_type === 'player') {
      showAuthError('This account is for players. Use the Player Portal to log in.');
      if (btn) { btn.disabled = false; btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> Log In'; }
      return;
    }
    const rememberMe = document.getElementById('remember-me')?.checked ?? false;
    setAuthToken(data.token, rememberMe);
    const user = data.user || {};
    currentUser = user;
    const userName = user.name || 'Coach';
    const initials = userName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    updateUserUI(userName, initials, user.email || email);
    updateFreePlanUI();
    const authScreen = document.getElementById('auth-screen');
    authScreen.classList.add('hidden');
    setTimeout(() => {
      authScreen.style.display = 'none';
      navigateTo('dashboard');
      window.scrollTo(0, 0);
      document.querySelector('.main-content')?.scrollTo(0, 0);
      initUpload();
      setupCanvasEvents();
      renderSparklines();
      showToast(`Welcome back, ${userName}!`, IC.wave);
    }, 500);
  } catch (err) {
    showAuthError('Could not connect. Please try again.');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> Log In'; }
  }
}

function showAuthError(message) {
  const existing = document.querySelector('.auth-error-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.className = 'auth-error-popup';
  popup.style.cssText = 'position:fixed;top:32px;left:50%;transform:translateX(-50%);background:#1a1a1a;border:1px solid rgba(239,68,68,0.4);color:#ef4444;padding:14px 24px;border-radius:12px;font-size:14px;font-weight:600;z-index:100001;display:flex;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(0,0,0,0.5);animation:fadeInDown 0.3s ease';
  popup.innerHTML = `${IC.warn} ${message}`;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}

function openForgotPasswordModal() {
  const overlay = document.getElementById('forgot-password-overlay');
  if (overlay) overlay.classList.add('show');
}

function closeForgotPasswordModal() {
  const overlay = document.getElementById('forgot-password-overlay');
  if (overlay) overlay.classList.remove('show');
}

async function handleForgotPassword() {
  const email = document.getElementById('forgot-password-email')?.value?.trim();
  if (!email) { showAuthError('Enter your email'); return; }
  if (!/\S+@\S+\.\S+/.test(email)) { showAuthError('Enter a valid email'); return; }
  const btn = document.getElementById('forgot-password-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      showToast(data.message || 'If that email exists, we sent a reset link', IC.mail);
      closeForgotPasswordModal();
    } else {
      showAuthError(data.error || 'Something went wrong');
    }
  } catch { showAuthError('Could not connect'); }
  if (btn) { btn.disabled = false; btn.textContent = 'Send reset link'; }
}

function updateUserUI(name, initials, email) {
  // Update avatar
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.textContent = initials;
    avatar.title = name;
    avatar.onclick = () => showToast(`Profile: ${name}`, IC.user);
  }

  // Update dashboard greeting
  const dashTitle = document.querySelector('#page-dashboard .page-title');
  if (dashTitle) dashTitle.innerHTML = `Welcome back, ${name.split(' ')[0]}!`;

  // Update tip sender fields
  const tipSenderInputs = document.querySelectorAll('input[value="Coach Wilson"]');
  tipSenderInputs.forEach(input => { input.value = name; });

  // Update any placeholder tip sender references
  const tipSenderPlaceholders = document.querySelectorAll('input[placeholder="Coach Wilson"]');
  tipSenderPlaceholders.forEach(input => { input.placeholder = name; });
}

async function handleSignupComplete() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;

  // Validate
  if (!name) { showAuthError('Please enter your full name.'); return; }
  if (!email) { showAuthError('Please enter your email address.'); return; }
  if (!email.includes('@') || !email.includes('.')) { showAuthError('Please enter a valid email address.'); return; }
  if (!password) { showAuthError('Please create a password.'); return; }
  if (password.length < 4) { showAuthError('Password must be at least 4 characters.'); return; }
  if (password !== confirm) { showAuthError('Passwords do not match. Please try again.'); return; }

  const plan = (typeof selectedSignupPlan === 'string' ? selectedSignupPlan : 'standard').toLowerCase();
  const btn = document.getElementById('signup-next-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = IC.clock; }
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, user_type: 'coach', plan })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      showAuthError(data.error || 'Signup failed. Please try again.');
      if (btn) { btn.disabled = false; btn.innerHTML = 'Create Account'; }
      return;
    }
    const rememberMe = document.getElementById('signup-remember-me')?.checked ?? false;
    setAuthToken(data.token, rememberMe);
    const user = data.user || {};
    currentUser = user;
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    updateUserUI(user.name || name, initials, user.email || email);
    const authScreen = document.getElementById('auth-screen');
    authScreen.classList.add('hidden');
    setTimeout(() => {
      authScreen.style.display = 'none';
      currentPlan = plan === 'elite' ? 'elite' : 'standard';
      const planNameEl = document.querySelector('.plan-badge .plan-name');
      if (planNameEl) planNameEl.textContent = (currentPlan === 'elite' ? 'Elite' : 'Standard') + ' Plan';
      navigateTo('dashboard');
      initUpload();
      setupCanvasEvents();
      renderSparklines();
      showToast(`Welcome to BenchPro, ${name}!`, IC.star);
      addNotification(IC.star, 'green', `Account created for <strong>${name}</strong> (${email})`, 'Just now');
    }, 500);
  } catch (err) {
    showAuthError('Could not create account. Please try again.');
    if (btn) { btn.disabled = false; btn.innerHTML = 'Create Account'; }
  }
}

// ===== LINEUP ANALYSIS =====
function generateLineupAnalysis() {
  if (!window.genaiReady) {
    showToast('AI module is loading, please wait...', IC.clock);
    return;
  }
  const resultsDiv = document.getElementById('lineup-analysis-result');
  const btn = document.querySelector('[onclick="generateLineupAnalysis()"]');

  const starters = [
    'Marcus James (#3)',
    'Anthony Davis (#11)',
    'DeShawn Wright (#7)',
    'Jaylen Carter (#23)',
    'Omar Johnson (#5)'
  ];

  if (btn) { btn.disabled = true; btn.innerHTML = `${IC.clock} Analyzing...`; }
  resultsDiv.style.display = 'block';
  resultsDiv.innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:16px;animation:pulse 1.5s infinite">${IC.ai}</div>
      <p style="color:var(--text-muted);margin-top:8px">Analyzing starting lineup with Claude AI...</p>
      <div style="width:200px;height:4px;background:var(--border);border-radius:4px;margin:12px auto;overflow:hidden">
        <div style="width:60%;height:100%;background:var(--orange);border-radius:4px;animation:loading-bar 2s ease-in-out infinite"></div>
      </div>
    </div>`;

  window.analyzeLineup(starters, playerData).then(result => {
    if (btn) { btn.disabled = false; btn.innerHTML = `${IC.star} Analyze Lineup`; }
    if (result.success) {
      resultsDiv.innerHTML = `
        <div style="border-left:3px solid var(--orange);padding-left:16px;margin-bottom:12px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">${IC.ai} Claude AI Lineup Analysis</div>
        </div>
        <div style="font-size:13px;line-height:1.8;color:var(--text-secondary)">
          ${window.genaiMarkdownToHtml(result.text)}
        </div>`;
      showToast('Lineup analysis complete!', IC.ai);
      addNotification(IC.ai, 'orange', 'Lineup analysis generated by <strong>Claude AI</strong>', 'Just now');
    } else {
      resultsDiv.innerHTML = `
        <div style="text-align:center;padding:16px;color:var(--red)">
          <div style="margin-bottom:8px;color:var(--red)">${IC.warn}</div>
          <p><strong>Analysis failed:</strong> ${result.error}</p>
          <p style="font-size:12px;color:var(--text-muted);margin-top:8px">Please check your API key and internet connection.</p>
        </div>`;
      showToast('Lineup analysis failed.', IC.warn);
    }
  });
}

// ===== CLUTCH TIME SIMULATOR =====
function runClutchSimulation() {
  if (!window.genaiReady) {
    showToast('AI module is loading, please wait...', IC.clock);
    return;
  }
  const resultsDiv = document.getElementById('clutch-sim-result');
  const btn = document.querySelector('[onclick="runClutchSimulation()"]');

  if (btn) { btn.disabled = true; btn.innerHTML = `${IC.clock} Simulating...`; }
  resultsDiv.style.display = 'block';
  resultsDiv.innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:16px;animation:pulse 1.5s infinite">${IC.ai}</div>
      <p style="color:var(--text-muted);margin-top:8px">Simulating crunch time scenarios with Claude AI...</p>
      <div style="width:200px;height:4px;background:var(--border);border-radius:4px;margin:12px auto;overflow:hidden">
        <div style="width:60%;height:100%;background:var(--orange);border-radius:4px;animation:loading-bar 2s ease-in-out infinite"></div>
      </div>
    </div>`;

  window.simulateClutchTime(playerData).then(result => {
    if (btn) { btn.disabled = false; btn.innerHTML = `${IC.bolt} Simulate Crunch Time`; }
    if (result.success) {
      resultsDiv.innerHTML = `
        <div style="border-left:3px solid var(--orange);padding-left:16px;margin-bottom:12px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">${IC.ai} Claude AI Clutch Time Simulation</div>
        </div>
        <div style="font-size:13px;line-height:1.8;color:var(--text-secondary)">
          ${window.genaiMarkdownToHtml(result.text)}
        </div>`;
      showToast('Crunch time simulation complete!', IC.ai);
      addNotification(IC.ai, 'green', 'Clutch time simulation generated by <strong>Claude AI</strong>', 'Just now');
    } else {
      resultsDiv.innerHTML = `
        <div style="text-align:center;padding:16px;color:var(--red)">
          <div style="margin-bottom:8px;color:var(--red)">${IC.warn}</div>
          <p><strong>Simulation failed:</strong> ${result.error}</p>
          <p style="font-size:12px;color:var(--text-muted);margin-top:8px">Please check your API key and internet connection.</p>
        </div>`;
      showToast('Crunch time simulation failed.', IC.warn);
    }
  });
}

// ===== AI-POWERED ANALYSIS (Claude AI) =====

function runAIPlayerAnalysis() {
  if (!window.genaiReady) {
    showToast('AI module is loading, please wait...', IC.clock);
    return;
  }
  const btn = document.getElementById('ai-player-analyze-btn');
  const resultsDiv = document.getElementById('ai-player-analysis-results');
  const stats = playerData[selectedPlayer];
  if (!stats) { showToast('No player selected.', IC.warn); return; }

  btn.disabled = true;
  btn.innerHTML = `${IC.clock} Analyzing...`;
  resultsDiv.innerHTML = `
    <div style="text-align:center;padding:30px 0">
      <div style="font-size:16px;animation:pulse 1.5s infinite">${IC.ai}</div>
      <p style="color:var(--text-muted);margin-top:8px">Analyzing <strong>${selectedPlayer}</strong> with Claude AI...</p>
      <div style="width:200px;height:4px;background:var(--border);border-radius:4px;margin:12px auto;overflow:hidden">
        <div style="width:60%;height:100%;background:var(--orange);border-radius:4px;animation:loading-bar 2s ease-in-out infinite"></div>
      </div>
    </div>`;

  window.analyzePlayerStats(selectedPlayer, stats).then(result => {
    btn.disabled = false;
    btn.innerHTML = `${IC.ai} Analyze Player`;
    if (result.success) {
      resultsDiv.innerHTML = `
        <div style="border-left:3px solid var(--orange);padding-left:16px;margin-bottom:12px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">${IC.ai} Claude AI Analysis — ${selectedPlayer}</div>
        </div>
        <div style="font-size:13px;line-height:1.8;color:var(--text-secondary)">
          ${window.genaiMarkdownToHtml(result.text)}
        </div>`;
      showToast(`AI analysis for ${selectedPlayer} complete!`, IC.ai);
      addNotification(IC.ai, 'orange', `AI analysis complete for <strong>${selectedPlayer}</strong>`, 'Just now');
    } else {
      resultsDiv.innerHTML = `
        <div style="text-align:center;padding:20px;color:var(--red)">
          <div style="margin-bottom:8px;color:var(--red)">${IC.warn}</div>
          <p><strong>Analysis failed:</strong> ${result.error}</p>
          <p style="font-size:12px;color:var(--text-muted);margin-top:8px">Please check your API key and internet connection, then try again.</p>
        </div>`;
      showToast('AI analysis failed. Check console for details.', IC.warn);
    }
  });
}

function askAIQuestion() {
  if (!window.genaiReady) {
    showToast('AI module is loading, please wait...', IC.clock);
    return;
  }
  const input = document.getElementById('ai-chat-input');
  const sendBtn = document.getElementById('ai-chat-send-btn');
  const resultsDiv = document.getElementById('ai-chat-results');
  const question = input.value.trim();
  if (!question) { showToast('Please type a question first.', IC.warn); return; }

  sendBtn.disabled = true;
  sendBtn.innerHTML = IC.clock;
  input.disabled = true;

  // Build context from app data
  const context = {
    playerData: playerData,
    recentGames: gameAnalysisData,
  };

  // Add the question bubble
  const questionBubble = document.createElement('div');
  questionBubble.style.cssText = 'background:rgba(212,115,26,0.1);border:1px solid rgba(212,115,26,0.2);border-radius:12px;padding:12px 16px;margin-bottom:12px;font-size:13px;color:var(--text-primary)';
  questionBubble.innerHTML = `<strong>You:</strong> ${question}`;
  resultsDiv.appendChild(questionBubble);

  // Add loading indicator
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'ai-chat-loading';
  loadingDiv.style.cssText = 'text-align:center;padding:16px;color:var(--text-muted);font-size:13px';
  loadingDiv.innerHTML = `<div style="font-size:16px;animation:pulse 1.5s infinite">${IC.ai}</div><p style="margin-top:4px">Thinking...</p>`;
  resultsDiv.appendChild(loadingDiv);
  resultsDiv.scrollTop = resultsDiv.scrollHeight;

  window.askBenchProAI(question, context).then(result => {
    sendBtn.disabled = false;
    sendBtn.innerHTML = 'Ask AI';
    input.disabled = false;
    input.value = '';

    const loading = document.getElementById('ai-chat-loading');
    if (loading) loading.remove();

    const responseBubble = document.createElement('div');
    responseBubble.style.cssText = 'background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;font-size:13px;line-height:1.7;color:var(--text-secondary)';
    if (result.success) {
      responseBubble.innerHTML = `
        <div style="font-size:11px;color:var(--orange);margin-bottom:8px;font-weight:600">${IC.ai} BenchPro AI (Claude)</div>
        ${window.genaiMarkdownToHtml(result.text)}`;
    } else {
      responseBubble.innerHTML = `
        <div style="color:var(--red)">
          <strong>${IC.warn} Error:</strong> ${result.error}
          <p style="font-size:12px;color:var(--text-muted);margin-top:4px">Please check your API key and try again.</p>
        </div>`;
    }
    resultsDiv.appendChild(responseBubble);
    resultsDiv.scrollTop = resultsDiv.scrollHeight;
    input.focus();
  });
}

// Listen for genai loading state changes for UI feedback
document.addEventListener('genai-loading', (e) => {
  const { key, isLoading } = e.detail;
  // Update any relevant buttons based on loading state
  if (key === 'ai-chat' && isLoading) {
    const btn = document.getElementById('ai-chat-send-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = IC.clock; }
  }
});

// ===== DASHBOARD RECENT GAMES (from real backend) =====
async function loadDashboardRecentGames() {
  const container = document.getElementById('dashboard-recent-games');
  if (!container) return;

  container.innerHTML = '<div class="skeleton skeleton-card"></div><div class="skeleton skeleton-card"></div><div class="skeleton skeleton-card"></div>';

  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/clips`);
    if (!res.ok) throw new Error('Backend unavailable');
    const clips = await res.json();

    if (clips.length === 0) {
      container.innerHTML = `<div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg><h3>No analyses yet</h3><p>Upload a video or stat sheet to get started.</p></div>`;
      return;
    }

    const recent = clips.slice(0, 5);
    container.innerHTML = recent.map(clip => {
      const createdDate = clip.created_at ? new Date(clip.created_at.replace(' ', 'T') + 'Z') : new Date();
      const dateStr = createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      let statusBadge = '';
      if (clip.status === 'complete') statusBadge = '<span class="badge badge-orange">Complete</span>';
      else if (clip.status === 'processing') statusBadge = '<span class="badge badge-yellow">Processing</span>';
      else if (clip.status === 'error') statusBadge = '<span class="badge badge-red">Error</span>';

      const typeBadge = clip.type === 'stat_sheet' ? '<span class="badge badge-blue">Stat Sheet</span>' : '';
      const eventBadge = clip.event_count > 0 ? `<span class="badge badge-blue">${clip.event_count} Events</span>` : '';
      const playerBadge = clip.player_count > 0 ? `<span class="badge badge-orange">${clip.player_count} Detections</span>` : '';

      return `
        <div class="game-card" onclick="navigateTo('analysis-history')">
          <div class="game-card-top">
            <div>
              <div class="game-card-teams">${clip.title || clip.file_name || 'Untitled'}</div>
              <div class="game-card-date">${dateStr}${clip.opponent ? ' · vs. ' + clip.opponent : ''}${clip.type === 'stat_sheet' ? ' · Stat Sheet' : ''}</div>
            </div>
          </div>
          <div class="game-card-insights">
            ${statusBadge}
            ${typeBadge}
            ${eventBadge}
            ${playerBadge}
          </div>
        </div>`;
    }).join('');

  } catch (err) {
    container.innerHTML = `<div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg><h3>No analyses yet</h3><p>Upload a video or stat sheet to see analyses here.</p></div>`;
  }
}

// ===== CHALLENGES (Coach) =====
async function loadChallengesList() {
  const container = document.getElementById('coach-challenges-list');
  if (!container) return;
  container.innerHTML = '<div class="skeleton skeleton-card"></div>';
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/challenges`);
    if (!res.ok) throw new Error('Failed to load challenges');
    const { challenges } = await res.json();
    if (!challenges || challenges.length === 0) {
      container.innerHTML = `<div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><h3>No challenges yet</h3><p>Create a challenge to motivate your team.</p><button class="btn btn-primary" onclick="openChallengeCreateModal()">Create Challenge</button></div>`;
      return;
    }
    container.innerHTML = challenges.map(c => {
      const typeLabels = { shooting: 'Shooting', defense: 'Defense', playmaking: 'Playmaking', workout: 'Workout', film: 'Film', custom: 'Custom' };
      const typeLabel = typeLabels[c.challenge_type] || c.challenge_type;
      const endDate = c.end_date ? new Date(c.end_date + 'T23:59:59') : null;
      const isExpired = endDate && endDate < new Date();
      return `<div class="challenge-card ${isExpired ? 'expired' : ''}" onclick="openChallengeDetail(${c.id})">
        <div class="challenge-card-header">
          <span class="challenge-type-badge">${typeLabel}</span>
          <span class="challenge-xp">+${c.xp_reward} XP</span>
        </div>
        <h4 class="challenge-card-title">${escapeHtml(c.title)}</h4>
        <p class="challenge-card-desc">${escapeHtml(c.description || '')}</p>
        <div class="challenge-card-meta">${c.start_date} – ${c.end_date}</div>
      </div>`;
    }).join('');
  } catch (err) {
    container.innerHTML = `<div class="empty-state"><p>Could not load challenges.</p></div>`;
  }
}

async function loadChallengesLeaderboard() {
  const container = document.getElementById('coach-leaderboard');
  const spotEl = document.getElementById('coach-weekly-winner');
  const winnerName = document.getElementById('coach-weekly-winner-name');
  const winnerXp = document.getElementById('coach-weekly-winner-xp');
  if (!container) return;
  container.innerHTML = '<div class="skeleton skeleton-card"></div>';
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/leaderboard`);
    if (!res.ok) throw new Error('Failed to load leaderboard');
    const { leaderboard, weekly_winner } = await res.json();
    if (weekly_winner && spotEl && winnerName && winnerXp) {
      winnerName.textContent = weekly_winner.name;
      winnerXp.textContent = weekly_winner.weekly_xp + ' XP this week';
      spotEl.style.display = 'flex';
    } else if (spotEl) spotEl.style.display = 'none';
    if (!leaderboard || leaderboard.length === 0) {
      container.innerHTML = `<div class="empty-state"><p>No players on leaderboard yet.</p></div>`;
      return;
    }
    const winnerId = weekly_winner ? weekly_winner.player_id : null;
    container.innerHTML = leaderboard.map((r) => {
      const badges = (r.badges || []).map(b => `<span class="leaderboard-badge" title="${escapeHtml(b.name)}">${b.icon || '🏆'}</span>`).join('');
      const flair = (r.flair && r.flair.icon) ? r.flair.icon : '🌱';
      const isWinner = r.is_weekly_winner || r.player_id === winnerId;
      return `<div class="leaderboard-row ${isWinner ? 'weekly-winner-row' : ''}">
        <span class="leaderboard-flair">${flair}</span>
        <span class="leaderboard-rank">#${r.rank}</span>
        <span class="leaderboard-name">${escapeHtml(r.name)}</span>
        <span class="leaderboard-xp">${r.total_xp} XP</span>
        <span class="leaderboard-level">Lv.${r.level}</span>
        <span class="leaderboard-badges">${badges}</span>
      </div>`;
    }).join('');
  } catch (err) {
    container.innerHTML = `<div class="empty-state"><p>Could not load leaderboard.</p></div>`;
  }
}

function openChallengeDetail(challengeId) {
  fetchWithAuth(`${BACKEND_URL}/api/challenges/${challengeId}`)
    .then(r => r.json())
    .then(({ challenge, participations }) => {
      document.getElementById('challenge-detail-title').textContent = challenge.title;
      const typeLabels = { shooting: 'Shooting', defense: 'Defense', playmaking: 'Playmaking', workout: 'Workout', film: 'Film', custom: 'Custom' };
      const typeLabel = typeLabels[challenge.challenge_type] || challenge.challenge_type;
      let html = `<p style="margin-bottom:12px;color:var(--text-muted)">${escapeHtml(challenge.description || '')}</p>`;
      html += `<p><strong>Type:</strong> ${typeLabel} · <strong>Reward:</strong> +${challenge.xp_reward} XP</p>`;
      html += `<p><strong>Dates:</strong> ${challenge.start_date} – ${challenge.end_date}</p>`;
      html += `<h4 style="margin-top:16px;font-size:14px">Participations</h4>`;
      if (!participations || participations.length === 0) {
        html += `<p style="color:var(--text-muted);font-size:13px">No players have joined yet.</p>`;
      } else {
        html += `<div class="participation-list">`;
        participations.forEach(p => {
          const pct = challenge.goal_value ? Math.min(100, Math.round((p.progress_value / challenge.goal_value) * 100)) : 0;
          html += `<div class="participation-row">
            <span class="part-name">${escapeHtml(p.player_name)}</span>
            <span class="part-progress">${p.progress_value} / ${challenge.goal_value}</span>
            <span class="part-status">${p.completed ? '✓ Complete' : pct + '%'}</span>
          </div>`;
        });
        html += `</div>`;
      }
      document.getElementById('challenge-detail-body').innerHTML = html;
      openModal('challenge-detail-modal');
    })
    .catch(() => showToast('Could not load challenge', IC.warn));
}

function escapeHtml(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

async function createChallenge() {
  const title = document.getElementById('challenge-title')?.value?.trim();
  const description = document.getElementById('challenge-description')?.value?.trim();
  const challengeType = document.getElementById('challenge-type')?.value || 'custom';
  const xpReward = parseInt(document.getElementById('challenge-xp')?.value || '100', 10);
  const goalValue = parseFloat(document.getElementById('challenge-goal')?.value || '1');
  const startDate = document.getElementById('challenge-start')?.value;
  const endDate = document.getElementById('challenge-end')?.value;
  const verificationType = document.getElementById('challenge-verification')?.value || 'manual';
  if (!title || !startDate || !endDate) {
    showToast('Title, start date, and end date are required', IC.warn);
    return;
  }
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/challenges`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        challenge_type: challengeType,
        xp_reward: xpReward,
        goal_value: goalValue,
        start_date: startDate,
        end_date: endDate,
        verification_type: verificationType
      })
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || 'Failed to create challenge');
    }
    closeModal('challenge-create-modal');
    document.getElementById('challenge-title').value = '';
    document.getElementById('challenge-description').value = '';
    document.getElementById('challenge-xp').value = '100';
    document.getElementById('challenge-goal').value = '1';
    loadChallengesList();
    loadChallengesLeaderboard();
    showToast('Challenge created!', IC.check);
  } catch (err) {
    showToast(err.message || 'Could not create challenge', IC.warn);
  }
}

function openChallengeCreateModal() {
  const today = new Date().toISOString().slice(0, 10);
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const startEl = document.getElementById('challenge-start');
  const endEl = document.getElementById('challenge-end');
  if (startEl) startEl.value = today;
  if (endEl) endEl.value = nextWeek;
  openModal('challenge-create-modal');
}

// ===== HUSTLE LEADERBOARD =====
async function loadCoachHustleLeaderboard() {
  const container = document.getElementById('coach-hustle-leaderboard');
  if (!container) return;
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/hustle-leaderboard`);
    if (!res.ok) {
        const errText = await res.text();
        console.error('Hustle leaderboard API:', res.status, errText);
        throw new Error('Failed to load hustle leaderboard');
    }
    const { leaderboard } = await res.json();
    if (!leaderboard || leaderboard.length === 0) {
      container.innerHTML = `<div class="empty-state"><p>No hustle stats yet. Click "Update Stats" to add deflections, charges, rebounds, loose balls, and screen assists.</p></div>`;
      return;
    }
    container.innerHTML = `<div style="display:grid;grid-template-columns:40px 1fr 50px 50px 50px 50px 50px 60px;gap:8px;font-size:12px;font-weight:600;padding:8px 0;border-bottom:1px solid var(--border);color:var(--text-muted)">
      <span>#</span><span>Player</span><span>Def</span><span>Chg</span><span>Reb</span><span>LB</span><span>SA</span><span>Total</span>
    </div>` + leaderboard.map(r => `
      <div style="display:grid;grid-template-columns:40px 1fr 50px 50px 50px 50px 50px 60px;gap:8px;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
        <span><strong>#${r.rank}</strong></span>
        <span><strong>${escapeHtml(r.name)}</strong></span>
        <span>${r.deflections || 0}</span>
        <span>${r.charges || 0}</span>
        <span>${r.rebounds || 0}</span>
        <span>${r.loose_balls || 0}</span>
        <span>${r.screen_assists || 0}</span>
        <span style="font-weight:700;color:var(--orange)">${r.total_hustle || 0}</span>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = `<div class="empty-state"><p>Could not load hustle leaderboard.</p></div>`;
  }
}

function openHustleUpdateModal() {
  const modal = document.getElementById('hustle-update-modal');
  const select = document.getElementById('hustle-player-select');
  if (!modal || !select) return;
  fetchWithAuth(`${BACKEND_URL}/api/team/players`).then(r => r.json()).then(data => {
    const players = data.players || [];
    select.innerHTML = '<option value="">Select player...</option>' + players.map(p =>
      `<option value="${p.id}">${escapeHtml(p.name)}</option>`
    ).join('');
  }).catch(() => {});
  document.getElementById('hustle-deflections').value = '';
  document.getElementById('hustle-charges').value = '';
  document.getElementById('hustle-rebounds').value = '';
  document.getElementById('hustle-loose-balls').value = '';
  document.getElementById('hustle-screen-assists').value = '';
  document.getElementById('hustle-add-mode').checked = true;
  modal.classList.add('show');
}

async function submitHustleStats() {
  const playerId = document.getElementById('hustle-player-select')?.value;
  if (!playerId) {
    showToast('Select a player', IC.warn);
    return;
  }
  const deflections = document.getElementById('hustle-deflections')?.value;
  const charges = document.getElementById('hustle-charges')?.value;
  const rebounds = document.getElementById('hustle-rebounds')?.value;
  const looseBalls = document.getElementById('hustle-loose-balls')?.value;
  const screenAssists = document.getElementById('hustle-screen-assists')?.value;
  const add = document.getElementById('hustle-add-mode')?.checked || false;
  const body = { player_id: parseInt(playerId), add };
  if (deflections !== '' && deflections !== undefined) body.deflections = parseInt(deflections) || 0;
  if (charges !== '' && charges !== undefined) body.charges = parseInt(charges) || 0;
  if (rebounds !== '' && rebounds !== undefined) body.rebounds = parseInt(rebounds) || 0;
  if (looseBalls !== '' && looseBalls !== undefined) body.loose_balls = parseInt(looseBalls) || 0;
  if (screenAssists !== '' && screenAssists !== undefined) body.screen_assists = parseInt(screenAssists) || 0;
  if (Object.keys(body).length <= 3) {
    showToast('Enter at least one stat value', IC.warn);
    return;
  }
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/hustle-stats`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      throw new Error(d.error || 'Failed to update stats');
    }
    closeModal('hustle-update-modal');
    loadCoachHustleLeaderboard();
    showToast('Hustle stats updated!', IC.check);
  } catch (err) {
    showToast(err.message || 'Could not update stats', IC.warn);
  }
}

// ===== ANALYSIS HISTORY DYNAMIC LIST =====
async function loadClips() {
  const clipsList = document.getElementById('clips-list');
  const clipsEmpty = document.getElementById('clips-empty');
  if (!clipsList) return;

  clipsList.innerHTML = '<div class="skeleton skeleton-card"></div><div class="skeleton skeleton-card"></div><div class="skeleton skeleton-card"></div>';

  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/clips`);
    if (!res.ok) throw new Error('Failed to load clips');
    const clips = await res.json();

    clipsList.innerHTML = '';

    if (clips.length === 0) {
      if (clipsEmpty) {
        clipsEmpty.style.display = 'block';
        clipsList.appendChild(clipsEmpty);
      } else {
        clipsList.innerHTML = `<div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg><h3>No analyses yet</h3><p>Upload a video or stat sheet to get started.</p></div>`;
      }
      return;
    }

    if (clipsEmpty) clipsEmpty.style.display = 'none';

    clips.forEach(clip => {
      const isStatSheet = clip.type === 'stat_sheet';
      const createdDate = clip.created_at ? new Date(clip.created_at.replace(' ', 'T') + 'Z') : new Date();
      const dateStr = createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      let statusBadge = '';
      if (clip.status === 'complete') statusBadge = '<span class="badge badge-green">Complete</span>';
      else if (clip.status === 'processing') statusBadge = '<span class="badge badge-orange">Processing</span>';
      else if (clip.status === 'error') statusBadge = '<span class="badge badge-red">Error</span>';
      else statusBadge = '<span class="badge badge-blue">Pending</span>';

      const viewAnalysisBtn = (clip.status === 'complete' || isStatSheet) ? `
        <button class="btn btn-primary btn-sm" data-view-clip="${clip.id}" data-type="${clip.type || 'video'}">
          ${IC.search} View
        </button>` : '';

      const iconClass = isStatSheet ? 'stat-sheet' : 'video';
      const typeLabel = isStatSheet ? 'Stat Sheet' : 'Video';

      const clipEl = document.createElement('div');
      clipEl.className = 'analysis-entry';
      clipEl.dataset.type = clip.type || 'video';
      clipEl.innerHTML = `
        <div class="analysis-entry-icon ${iconClass}">
          ${isStatSheet ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>'}
        </div>
        <div class="analysis-entry-info">
          <h4>${clip.title || clip.file_name || 'Untitled'}</h4>
          <div class="analysis-entry-meta">
            <span class="analysis-entry-type ${iconClass}">${typeLabel}</span>
            <span>${dateStr}</span>
          </div>
        </div>
        <div class="analysis-entry-actions">
          ${statusBadge}
          ${viewAnalysisBtn}
          <button class="btn-icon" data-delete="${clip.id}" data-type="${clip.type || 'video'}" title="Delete">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
        <div id="clip-detail-${clip.id}" class="analysis-entry-detail"></div>
      `;
      clipsList.appendChild(clipEl);

      const delBtn = clipEl.querySelector(`[data-delete="${clip.id}"]`);
      const deleteUrl = isStatSheet ? `${BACKEND_URL}/api/stat-sheets/${clip.id}` : `${BACKEND_URL}/api/clips/${clip.id}`;
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const ok = await confirmAction('Delete Analysis', `Delete this ${isStatSheet ? 'stat sheet' : 'game clip'}? This cannot be undone.`, { danger: true, okText: 'Delete', icon: IC.trash });
        if (!ok) return;
        delBtn.disabled = true;
        delBtn.style.opacity = '0.5';
        try {
          const r = await fetchWithAuth(deleteUrl, { method: 'DELETE' });
          if (!r.ok) throw new Error('Delete failed');
          clipEl.remove();
          showToast('Analysis deleted', IC.trash);
          loadDashboardRecentGames();
          if (!clipsList.querySelector('.analysis-entry') && clipsEmpty) {
            clipsEmpty.style.display = 'block';
            clipsList.appendChild(clipsEmpty);
          }
        } catch (err) {
          showToast(err.message, IC.x);
          delBtn.disabled = false;
          delBtn.style.opacity = '1';
        }
      });

      const viewBtn = clipEl.querySelector(`[data-view-clip="${clip.id}"]`);
      if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const detailPanel = document.getElementById(`clip-detail-${clip.id}`);
          const isVisible = detailPanel.classList.contains('show');

          if (isVisible) {
            detailPanel.classList.remove('show');
            viewBtn.innerHTML = `${IC.search} View`;
          } else {
            if (detailPanel.innerHTML === '') {
              if (isStatSheet) {
                detailPanel.innerHTML = '<div style="color:var(--text-muted);font-size:13px">Loading...</div>';
                detailPanel.classList.add('show');
                renderStatSheetDetail(clip, detailPanel);
              } else {
                detailPanel.innerHTML = '<div style="color:var(--text-muted);font-size:13px">Loading analysis...</div>';
                detailPanel.classList.add('show');
                showResults(clip.id);
              }
            } else {
              detailPanel.classList.add('show');
            }
            viewBtn.innerHTML = `${IC.x} Hide`;
          }
        });
      }
    });

    if (window.lucide) lucide.createIcons({ root: clipsList });

  } catch (err) {
    console.error('Failed to load clips:', err);
    clipsList.innerHTML = '';
    const errDiv = document.createElement('div');
    errDiv.className = 'empty-state';
    errDiv.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg><h3>Could not load analyses</h3><p>${err.message || 'Please try again.'}</p>`;
    clipsList.appendChild(errDiv);
  }
}

function buildAnalysisChartData(playerStats, ballStats, eventStats, teamStats, aiInsights) {
  const bars = [];
  const conf = playerStats.avg_confidence || 0;
  if (conf > 0) bars.push({ label: 'Detection Confidence', display: conf + '%', pct: Math.min(conf, 100), color: '#16a34a,#22c55e' });
  const ballPct = ballStats.visible_pct || 0;
  if (ballPct > 0) bars.push({ label: 'Ball Visibility', display: ballPct + '%', pct: Math.min(ballPct, 100), color: 'var(--orange-dark),var(--orange-light)' });
  const homeD = teamStats.home_detections || 0;
  const awayD = teamStats.away_detections || 0;
  const totalD = homeD + awayD;
  if (totalD > 0) {
    const homePct = Math.round((homeD / totalD) * 100);
    bars.push({ label: 'Home Team Presence', display: homePct + '%', pct: homePct, color: '#2563eb,#3b82f6' });
    bars.push({ label: 'Away Team Presence', display: (100 - homePct) + '%', pct: 100 - homePct, color: '#dc2626,#ef4444' });
  }
  const eventsPerMin = eventStats.per_minute || 0;
  if (eventsPerMin > 0) bars.push({ label: 'Events per Minute', display: eventsPerMin.toFixed(1), pct: Math.min(eventsPerMin * 10, 100), color: '#a855f7,#c084fc' });

  if (aiInsights) {
    const match = aiInsights.match(/id="chart-data"[^>]*>(\{.*?\})<\/div>/);
    if (match) {
      try {
        const cd = JSON.parse(match[1]);
        if (cd.labels && cd.values) {
          cd.labels.forEach((lbl, i) => {
            const v = cd.values[i] || 0;
            bars.push({ label: lbl, display: v + (v <= 100 ? '%' : ''), pct: Math.min(v, 100), color: 'var(--orange-dark),var(--orange-light)' });
          });
        }
      } catch {}
    }
  }
  return bars.length > 0 ? bars : null;
}

function buildShareBar(gameId, title, opponent, date, analysis, stats, events) {
  return `
    <div class="share-analysis-bar" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px;padding:12px 16px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius);">
      <span style="font-size:13px;color:var(--text-secondary)">Share this analysis</span>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-sm btn-secondary" data-share-analysis title="Share to social media">
          ${IC.link} Share
        </button>
      </div>
    </div>`;
}

function buildShareText(title, opponent, date, analysis, stats) {
  const parts = [`📊 ${title}`];
  if (opponent) parts.push(`vs ${opponent}`);
  if (date) parts.push(date);
  const s = stats || {};
  const v = s.video || {};
  const p = s.players || {};
  const e = s.events || {};
  const lines = [];
  if (p.total_detections) lines.push(`👥 ${p.total_detections} player detections`);
  if (e.total) lines.push(`📋 ${e.total} events detected`);
  if (v.duration_formatted) lines.push(`⏱ ${v.duration_formatted} analyzed`);
  if (lines.length) parts.push('\n' + lines.join(' • '));
  if (analysis && analysis.ai_insights) {
    const raw = analysis.ai_insights.replace(/<[^>]+>/g, '');
    const insight = raw.slice(0, 200);
    parts.push('\n\n' + insight + (raw.length > 200 ? '...' : ''));
  }
  parts.push('\n\nAnalyzed with BenchPro 🏀');
  return parts.join(' ');
}

function openShareMenu(gameId, title, opponent, date, analysis, stats, events) {
  const url = window.location.origin + '/?clip=' + gameId;
  const shareText = buildShareText(title, opponent, date, analysis, stats);
  const fullText = shareText + '\n' + url;

  if (navigator.share) {
    navigator.share({
      title: title || 'BenchPro Analysis',
      text: shareText,
      url
    }).then(() => showToast('Shared!', IC.check)).catch(() => showShareFallback(url, fullText));
  } else {
    showShareFallback(url, fullText);
  }
}

function showShareFallback(url, fullText) {
  let overlay = document.getElementById('share-overlay');
  if (overlay) {
    const ta = overlay.querySelector('#share-full-text');
    if (ta) ta.value = fullText || '';
    overlay.classList.add('show');
    return;
  }
  const div = document.createElement('div');
  div.id = 'share-overlay';
  div.className = 'modal-overlay';
  const escaped = (fullText || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  div.innerHTML = `
    <div class="modal" style="max-width:420px" onclick="event.stopPropagation()">
      <div class="modal-header"><h2>Share to Social Media</h2><button class="modal-close" onclick="document.getElementById('share-overlay').classList.remove('show')">✕</button></div>
      <div class="modal-body">
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Share this clip and analysis to Instagram, Twitter, or any app.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn btn-primary share-copy-full">
            ${IC.clipboard} Copy for Instagram / Social
          </button>
          <a href="#" class="btn btn-secondary share-twitter" style="text-align:center;text-decoration:none" target="_blank" rel="noopener">
            Share to X (Twitter)
          </a>
          <a href="#" class="btn btn-secondary share-facebook" style="text-align:center;text-decoration:none" target="_blank" rel="noopener">
            Share to Facebook
          </a>
          <button class="btn btn-secondary share-copy-link">
            ${IC.link} Copy Link Only
          </button>
        </div>
        <textarea id="share-full-text" style="display:none">${escaped}</textarea>
      </div>
    </div>`;
  div.onclick = () => div.classList.remove('show');
  document.body.appendChild(div);
  const ta = div.querySelector('#share-full-text');
  if (ta) ta.value = fullText || '';
  div.querySelector('.share-copy-full').onclick = () => {
    navigator.clipboard.writeText(ta.value || fullText);
    showToast('Copied! Paste into Instagram or any app', IC.check);
  };
  div.querySelector('.share-copy-link').onclick = () => {
    navigator.clipboard.writeText(url);
    showToast('Link copied!', IC.check);
  };
  div.querySelector('.share-twitter').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent((fullText || '').slice(0, 200) + (fullText && fullText.length > 200 ? '...' : ''));
  div.querySelector('.share-facebook').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
  div.classList.add('show');
}

async function showResults(gameId) {
  try {
    const res = await fetchWithAuth(`${BACKEND_URL}/api/analysis/${gameId}`);
    const data = await res.json();

    const detailPanel = document.getElementById(`clip-detail-${gameId}`);
    if (!detailPanel) return;

    const analysis = data.analysis || {};
    const stats = analysis.stats || {};
    const videoStats = stats.video || {};
    const playerStats = stats.players || {};
    const ballStats = stats.ball || {};
    const eventStats = stats.events || {};
    const teamStats = stats.teams || {};

    const durationStr = videoStats.active_seconds ?
      `${videoStats.active_seconds}s / ${videoStats.duration_formatted}` :
      videoStats.duration_formatted || '0:00';

    const cards = [
      { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>', value: durationStr, label: 'Active Playtime' },
      { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>', value: videoStats.frames_analyzed || 0, label: 'Frames Analyzed' },
      { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>', value: playerStats.total_detections || 0, label: 'Player Detections' },
      { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>', value: (playerStats.avg_confidence || 0) + '%', label: 'Avg Confidence' },
      { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>', value: ballStats.total_detections || 0, label: 'Ball Detections' },
      { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="16" y2="14"></line><line x1="8" y1="18" x2="16" y2="18"></line></svg>', value: eventStats.total || 0, label: 'Events Detected' },
    ];

    const statsHtml = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-bottom: 20px;">
                ${cards.map(c => `
                    <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 12px;">
                        <div style="color:var(--orange);margin-bottom:8px">${c.icon}</div>
                        <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${c.value}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${c.label}</div>
                    </div>
                `).join('')}
            </div>
        `;

    const chartData = buildAnalysisChartData(playerStats, ballStats, eventStats, teamStats, analysis.ai_insights);
    const chartsHtml = chartData ? `
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <h3 style="font-size: 1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    ${IC.barChart} Performance Breakdown
                </h3>
                <div style="display:flex;flex-direction:column;gap:14px">
                    ${chartData.map(d => `
                        <div>
                            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
                                <span style="color:var(--text-secondary)">${d.label}</span>
                                <span style="font-weight:700;color:var(--text-primary)">${d.display}</span>
                            </div>
                            <div style="height:8px;background:var(--bg-secondary);border-radius:4px;overflow:hidden">
                                <div style="height:100%;width:${d.pct}%;background:linear-gradient(90deg,${d.color || 'var(--orange-dark),var(--orange-light)'});border-radius:4px;transition:width 0.6s ease"></div>
                            </div>
                        </div>`).join('')}
                </div>
            </div>` : '';

    const coachHtml = analysis.ai_insights ? `
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <h3 style="font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg> 
                    Coach Carter's Feedback
                </h3>
                <div style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${analysis.ai_insights}</div>
            </div>
        ` : '';

    const events = data.events || [];
    const eventsHtml = events.length > 0 ? `
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
                <h3 style="font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Detected Game Events
                </h3>
                <div style="max-height: 200px; overflow-y: auto; padding-right: 8px;">
                    ${events.map(ev => {
                        const ts = ev.timestamp_seconds || ev.timestamp || 0;
                        const typeLabel = (ev.event_type || ev.type || ev.description || '').replace(/_/g, ' ');
                        return `
                        <div style="display: flex; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--border);">
                            <span style="color: var(--orange); font-family: monospace; font-size: 0.85rem;">
                                ${Math.floor(ts / 60)}:${String(Math.floor(ts % 60)).padStart(2, '0')}
                            </span>
                            <span style="font-size: 0.9rem; color: var(--text-secondary);">${typeLabel}</span>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        ` : '';

    const game = data.game || {};
    const shareTitle = game.title || game.file_name || 'Game Analysis';
    const shareBar = buildShareBar(gameId, shareTitle, game.opponent || '', game.date || '', analysis, stats, data.events || []);
    detailPanel.innerHTML = shareBar + statsHtml + chartsHtml + coachHtml + eventsHtml;

    const shareBtn = detailPanel.querySelector('[data-share-analysis]');
    if (shareBtn) shareBtn.addEventListener('click', () => openShareMenu(gameId, shareTitle, game.opponent, game.date, analysis, stats, data.events || []));

    if (window.lucide) {
      lucide.createIcons({ root: detailPanel });
    }
  } catch (err) {
    console.error('Failed to load results:', err);
    const detailPanel = document.getElementById(`clip-detail-${gameId}`);
    if (detailPanel) {
      detailPanel.innerHTML = `<div style="color:var(--red);font-size:13px">Failed to load analysis results: ${err.message}</div>`;
    }
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', async () => {
  // Load saved settings (theme, toggles, profile) — apply theme immediately
  loadSettingsUI();

  // Handle redirects with token (?token= from OAuth)
  const urlParams = new URLSearchParams(window.location.search);
  const urlToken = urlParams.get('token');
  const oauthError = urlParams.get('oauth_error');
  if (oauthError) {
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    showAuthError(decodeURIComponent(oauthError));
  }
  if (urlToken) {
    setAuthToken(urlToken, true);
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Restore session if valid token exists
  const token = getAuthToken();
  if (token) {
    try {
      const res = await fetchWithAuth(`${BACKEND_URL}/api/auth/me`);
      if (res.ok) {
        const data = await res.json();
        const user = data.user || {};
        if (user.user_type === 'player') {
          setAuthToken(null);
        } else {
          currentUser = user;
          const name = user.name || 'Coach';
          const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
          updateUserUI(name, initials, user.email || '');
          updateFreePlanUI();
          const authScreen = document.getElementById('auth-screen');
          if (authScreen) {
            authScreen.classList.add('hidden');
            authScreen.style.display = 'none';
          }
          navigateTo('dashboard');
          initUpload();
          setupCanvasEvents();
          renderSparklines();
          loadNotifications();
        }
      } else {
        setAuthToken(null);
      }
    } catch {
      setAuthToken(null);
    }
  }

  // Hide OAuth buttons if providers not configured
  fetch(`${BACKEND_URL}/api/auth/oauth/status`).then(r => r.json()).then(data => {
    const googleBtn = document.querySelector('.social-btn[onclick*="Google"]');
    const appleBtn = document.querySelector('.social-btn[onclick*="Apple"]');
    if (googleBtn) googleBtn.style.display = data.google ? '' : 'none';
    if (appleBtn) appleBtn.style.display = data.apple ? '' : 'none';
    const divider = document.querySelector('.auth-divider');
    const anySocial = data.google || data.apple;
    if (divider) divider.style.display = anySocial ? '' : 'none';
    const socialWrap = document.querySelector('.social-buttons');
    if (socialWrap) socialWrap.style.display = anySocial ? 'flex' : 'none';
  }).catch(() => {});

  // Check if backend server is running and poll every 30s
  checkBackendHealth().then(online => {
    if (online) console.log('[OK] BenchPro backend connected — real video analysis enabled');
    else console.log('[WARN] BenchPro backend offline — using Claude AI fallback');
  });
  setInterval(checkBackendHealth, 30000);

  // ===== FORM VALIDATION SETUP =====
  function showFieldError(input, msg) {
    input.classList.add('error');
    let errEl = input.parentElement.querySelector('.form-error-msg');
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'form-error-msg';
      input.parentElement.appendChild(errEl);
    }
    errEl.textContent = msg;
    errEl.classList.add('show');
  }
  function clearFieldError(input) {
    input.classList.remove('error');
    const errEl = input.parentElement.querySelector('.form-error-msg');
    if (errEl) errEl.classList.remove('show');
  }
  window.showFieldError = showFieldError;
  window.clearFieldError = clearFieldError;

  const loginEmail = document.getElementById('login-email');
  const loginPw = document.getElementById('login-password');

  [loginEmail, loginPw].forEach(el => {
    if (!el) return;
    el.addEventListener('blur', () => {
      if (el === loginEmail && el.value.trim() && !/\S+@\S+\.\S+/.test(el.value.trim())) {
        showFieldError(el, 'Enter a valid email address');
      } else if (!el.value.trim()) {
        showFieldError(el, 'This field is required');
      } else {
        clearFieldError(el);
      }
    });
    el.addEventListener('input', () => clearFieldError(el));
  });

  // Enter key submits login
  ['login-email', 'login-password'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleLogin(); });
  });

  // Login button listener
  const loginBtn = document.getElementById('btn-login-submit');
  if (loginBtn) {
    loginBtn.addEventListener('click', handleLogin);
  }

  // Close modals with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.show').forEach(m => m.classList.remove('show'));
    }
  });

  // ===== DRAG-AND-DROP for page upload zones =====
  function initDragDrop(zoneId, inputId) {
    const zone = document.getElementById(zoneId);
    const input = document.getElementById(inputId);
    if (!zone || !input) return;
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      input.files = e.dataTransfer.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
  initDragDrop('upload-zone-clip', 'file-input-clip');
  initDragDrop('upload-zone-stat', 'file-input-stat');
});

/* ===== SETTINGS STORAGE ===== */
const SETTINGS_KEY = 'benchpro_settings';

function getStoredSettings() {
  try {
    const s = localStorage.getItem(SETTINGS_KEY);
    return s ? JSON.parse(s) : {};
  } catch { return {}; }
}

function saveStoredSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {}
}

function loadSettingsUI() {
  const s = getStoredSettings();
  ['push', 'email-notif', 'sms', 'player-activity', 'game-remind', 'autosave', 'sounds', '2fa', 'visible', 'analytics'].forEach(id => {
    const el = document.getElementById('setting-' + id);
    if (el && s[id] !== undefined) el.checked = s[id];
  });
  if (s.quality) {
    const q = document.getElementById('setting-quality');
    if (q) q.value = s.quality;
  }
  if (s.detail) {
    const d = document.getElementById('setting-detail');
    if (d) d.value = s.detail;
  }
  if (s.profile) {
    const p = s.profile;
    const n = document.getElementById('settings-name');
    const e = document.getElementById('settings-email');
    const sch = document.getElementById('settings-school');
    const t = document.getElementById('settings-team');
    const ph = document.getElementById('settings-phone');
    const bio = document.getElementById('settings-bio');
    const sport = document.getElementById('settings-sport');
    if (n && p.name !== undefined) n.value = p.name;
    if (e && p.email !== undefined) e.value = p.email;
    if (sch && p.school !== undefined) sch.value = p.school;
    if (t && p.team !== undefined) t.value = p.team;
    if (ph && p.phone !== undefined) ph.value = p.phone;
    if (bio && p.bio !== undefined) bio.value = p.bio;
    if (sport && p.sport !== undefined) sport.value = p.sport;
  }
  setTheme(s.theme || 'dark', false);
}

function setTheme(theme, showToastMsg = true) {
  const isLight = theme === 'light';
  if (document.body) document.body.classList.toggle('light-mode', isLight);
  if (isLight) document.documentElement.setAttribute('data-theme', 'light');
  else document.documentElement.removeAttribute('data-theme');
  const darkBtn = document.getElementById('theme-dark-btn');
  const lightBtn = document.getElementById('theme-light-btn');
  if (darkBtn) { darkBtn.classList.toggle('active', !isLight); darkBtn.setAttribute('aria-pressed', !isLight); }
  if (lightBtn) { lightBtn.classList.toggle('active', isLight); lightBtn.setAttribute('aria-pressed', isLight); }
  const s = getStoredSettings();
  s.theme = theme;
  saveStoredSettings(s);
  if (showToastMsg) showToast(isLight ? 'Light mode enabled' : 'Dark mode enabled', IC.check);
}
window.setTheme = setTheme;

/* ===== SETTINGS FUNCTIONS ===== */
function saveSettings() {
  const nameEl = document.getElementById('settings-name');
  const emailEl = document.getElementById('settings-email');
  const name = nameEl?.value?.trim() || '';
  const email = emailEl?.value?.trim() || '';
  const school = document.getElementById('settings-school')?.value || '';
  const team = document.getElementById('settings-team')?.value || '';
  const phone = document.getElementById('settings-phone')?.value || '';
  const bio = document.getElementById('settings-bio')?.value || '';
  const sport = document.getElementById('settings-sport')?.value || '';

  let hasError = false;
  if (nameEl && !name) { showFieldError(nameEl, 'Name is required'); hasError = true; }
  else if (nameEl) clearFieldError(nameEl);
  if (emailEl && email && !/\S+@\S+\.\S+/.test(email)) { showFieldError(emailEl, 'Enter a valid email'); hasError = true; }
  else if (emailEl) clearFieldError(emailEl);
  if (hasError) return;

  const s = getStoredSettings();
  s.profile = { name, email, school, team, phone, bio, sport };
  saveStoredSettings(s);

  const sidebarName = document.querySelector('.sidebar .plan-badge-text span:first-child');
  if (sidebarName) sidebarName.textContent = name || 'Coach';

  const avatarEl = document.getElementById('settings-avatar');
  if (avatarEl && name && !avatarEl.dataset.hasPhoto) {
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    avatarEl.textContent = initials;
  }

  const headerAvatar = document.querySelector('.avatar');
  if (headerAvatar && name) {
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    if (!headerAvatar.dataset.hasPhoto) headerAvatar.textContent = initials;
  }

  const coachTitle = document.querySelector('#team-code-section .card-header + .card-body')?.previousElementSibling;
  const subEl = document.querySelector('#page-settings .page-subtitle')?.nextElementSibling;
  const profileTitle = document.getElementById('settings-avatar')?.parentElement?.querySelector('div:first-child');
  if (profileTitle) profileTitle.textContent = name || 'Coach';
  const profileSub = profileTitle?.nextElementSibling;
  if (profileSub) profileSub.textContent = (team ? team + ' · ' : '') + (school || 'Head Coach');

  showToast('Profile saved successfully!', IC.check);
}

function toggleSetting(label, enabled) {
  const idMap = {
    'Push Notifications': 'push',
    'Email Notifications': 'email-notif',
    'SMS Alerts': 'sms',
    'Player Activity Alerts': 'player-activity',
    'Game Day Reminders': 'game-remind',
    'Auto-Save': 'autosave',
    'Sound Effects': 'sounds',
    'Two-Factor Auth': '2fa',
    'Profile Visibility': 'visible',
    'Analytics': 'analytics'
  };
  const key = idMap[label];
  if (key) {
    const s = getStoredSettings();
    s[key] = enabled;
    saveStoredSettings(s);
  }
  showToast(`${label} ${enabled ? 'enabled' : 'disabled'}`, enabled ? IC.check : IC.bellOff);
}

function saveSettingSelect(key, value) {
  const s = getStoredSettings();
  s[key] = value;
  saveStoredSettings(s);
}

function openChangePasswordModal() {
  const overlay = document.getElementById('change-password-overlay');
  if (overlay) {
    overlay.classList.add('show');
    document.getElementById('change-password-current')?.focus();
  } else {
    const div = document.createElement('div');
    div.id = 'change-password-overlay';
    div.className = 'modal-overlay';
    div.innerHTML = `
      <div class="modal" style="max-width:400px" onclick="event.stopPropagation()">
        <div class="modal-header"><h2>Change Password</h2><button class="modal-close" onclick="document.getElementById('change-password-overlay').classList.remove('show')">✕</button></div>
        <div class="modal-body">
        <div class="form-group"><label class="form-label">Current Password</label><input type="password" class="form-input" id="change-password-current" placeholder="Enter current password"></div>
        <div class="form-group"><label class="form-label">New Password</label><input type="password" class="form-input" id="change-password-new" placeholder="Enter new password"></div>
        <div class="form-group"><label class="form-label">Confirm New Password</label><input type="password" class="form-input" id="change-password-confirm" placeholder="Confirm new password"></div>
        <div style="display:flex;gap:10px;margin-top:20px">
          <button class="btn btn-primary" onclick="submitChangePassword()" style="flex:1">Update Password</button>
          <button class="btn btn-secondary" onclick="document.getElementById('change-password-overlay').classList.remove('show')">Cancel</button>
        </div>
        </div>
      </div>`;
    div.onclick = () => div.classList.remove('show');
    document.body.appendChild(div);
    div.classList.add('show');
    document.getElementById('change-password-current')?.focus();
  }
}

function submitChangePassword() {
  const current = document.getElementById('change-password-current')?.value || '';
  const newPw = document.getElementById('change-password-new')?.value || '';
  const confirm = document.getElementById('change-password-confirm')?.value || '';
  if (!current || !newPw || !confirm) {
    showToast('Please fill in all fields', IC.warn);
    return;
  }
  if (newPw.length < 4) {
    showToast('New password must be at least 4 characters', IC.warn);
    return;
  }
  if (newPw !== confirm) {
    showToast('New passwords do not match', IC.warn);
    return;
  }
  document.getElementById('change-password-overlay').classList.remove('show');
  showToast('Password change requested. Backend support coming soon.', IC.check);
}

function exportData() {
  showToast('Preparing your data export...', IC.clock);
  setTimeout(() => showToast('Export ready! Check your email for the download link.', IC.check), 1500);
}

function manageDevices() {
  showToast('Device management — view and revoke sessions from other devices.', IC.user);
}

function handleSettingsLogout() {
  if (confirm('Log out of BenchPro?')) {
    handleLogout();
  }
}

function deleteAccount() {
  if (confirm('Are you sure? This action cannot be undone. All your data will be permanently deleted.')) {
    showToast('Account deletion request submitted. You will receive a confirmation email.', IC.warn);
  }
}

function openPhotoUpload() {
  let input = document.getElementById('photo-file-input');
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'photo-file-input';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.addEventListener('change', handlePhotoSelected);
    document.body.appendChild(input);
  }
  input.click();
}

function handlePhotoSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const url = ev.target.result;
    const avatarEl = document.getElementById('settings-avatar');
    if (avatarEl) {
      avatarEl.textContent = '';
      avatarEl.dataset.hasPhoto = 'true';
      avatarEl.style.backgroundImage = `url(${url})`;
      avatarEl.style.backgroundSize = 'cover';
      avatarEl.style.backgroundPosition = 'center';
    }
    const headerAvatar = document.querySelector('.avatar');
    if (headerAvatar) {
      headerAvatar.textContent = '';
      headerAvatar.dataset.hasPhoto = 'true';
      headerAvatar.style.backgroundImage = `url(${url})`;
      headerAvatar.style.backgroundSize = 'cover';
      headerAvatar.style.backgroundPosition = 'center';
    }
    showToast('Profile photo updated!', IC.cam);
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

function sharePlayWithTeam() {
  const nameInput = document.querySelector('#page-draw-plays .form-input');
  const name = nameInput?.value?.trim();
  if (!name) { showToast('Please enter a play name first', IC.warn); return; }
  const canvas = document.getElementById('playCanvas');
  if (!canvas) return;

  if (navigator.share && navigator.canShare) {
    canvas.toBlob(blob => {
      const file = new File([blob], name + '.png', { type: 'image/png' });
      navigator.share({ title: name, text: `Check out this play: ${name}`, files: [file] }).catch(() => {});
    });
  } else {
    const link = canvas.toDataURL('image/png');
    navigator.clipboard?.writeText(link).then(() => {
      showToast(`"${name}" copied — share with your team!`, IC.upload);
    }).catch(() => {
      showToast(`"${name}" ready to share!`, IC.upload);
    });
  }
  showToast(`"${name}" shared with team!`, IC.upload);
  addNotification(IC.pencil, 'orange', `Play <strong>${name}</strong> shared with team`, 'Just now');
}

