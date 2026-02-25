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
let currentPlan = 'elite';
let drawTool = 'pen';
let drawColor = '#F04A00';
let isDrawing = false;
let lastX = 0, lastY = 0;
let arrowStartX = 0, arrowStartY = 0;
let preDrawSnapshot = null;
let canvasHistory = [];
let tipStore = [
  { player: 'Marcus James (#3)', message: 'Great ball movement tonight. Keep looking for the extra pass on the pick and roll.', date: 'Today', category: 'General Feedback' },
  { player: 'Entire Team', message: 'Defensive rotations were slow in Q3. Let\'s focus on communication and quick help-side recovery.', date: 'Feb 9', category: 'Defense' },
  { player: 'DeShawn Wright (#7)', message: 'Your conditioning dropped in the 4th quarter. Let\'s add extra cardio to your pregame warmup.', date: 'Feb 8', category: 'Conditioning' },
  { player: 'Jaylen Carter (#23)', message: 'Box out stronger on defensive rebounds. You\'re giving up too many second-chance points.', date: 'Feb 6', category: 'Defense' },
];

// ===== NAVIGATION =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (pageEl) { pageEl.classList.add('active'); currentPage = page; }
  if (navEl) navEl.classList.add('active');
  if (page === 'dashboard') loadDashboardRecentGames();
  if (page === 'draw-plays') initCanvas();
  if (page === 'player-stats') renderPlayerCharts();
  if (page === 'ai-analysis') renderAnalysisCharts();
  if (page === 'analysis-history') {
    document.querySelector('.main-content')?.scrollTo(0, 0);
    if (typeof loadClips === 'function') loadClips();
  }
  if (page === 'settings') {
    document.querySelectorAll('.plan-card').forEach(c => {
      c.classList.toggle('selected', c.getAttribute('data-plan') === currentPlan);
    });
  }
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
  const authScreen = document.getElementById('auth-screen');
  if (authScreen) {
    authScreen.classList.remove('hidden');
    authScreen.style.display = '';
  }
  const menu = document.getElementById('avatar-menu');
  if (menu) menu.style.display = 'none';
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
function sendTip() {
  const player = document.getElementById('tip-player').value;
  const message = document.getElementById('tip-message').value;
  if (!player || !message) { showToast('Please select a player and enter a message', IC.warn); return; }
  tipStore.unshift({ player, message, date: 'Just now', category: 'General Feedback' });
  showToast(`Tip sent to ${player}!`, IC.bulb);
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
        <h4>Tip sent to ${player}</h4>
        <p>${message}</p>
      </div>`;
    history.prepend(item);
  }
}

// ===== PLAN SWITCHER =====
async function selectPlan(plan) {
  if (plan === currentPlan) return;

  const label = plan === 'standard' ? 'Standard ($8.99/mo)' : 'Elite ($29.99/mo)';
  const fromLabel = currentPlan === 'standard' ? 'Standard' : 'Elite';

  const ok = await confirmAction('Switch Plan', `Switch from ${fromLabel} to ${label}? Your new plan will take effect at the start of your next billing cycle.`, { okText: 'Switch Plan' });
  if (!ok) return;

  currentPlan = plan;
  document.querySelectorAll('.plan-card').forEach(c => c.classList.remove('selected'));
  const card = document.querySelector(`.plan-card[data-plan="${plan}"]`);
  if (card) card.classList.add('selected');

  let banner = document.getElementById('plan-confirm-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'plan-confirm-banner';
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;display:flex;align-items:center;justify-content:center;gap:12px;padding:14px 24px;font-size:14px;font-weight:700;transform:translateY(-100%);transition:transform 0.35s ease;';
    document.body.appendChild(banner);
  }

  banner.style.background = 'linear-gradient(135deg, #F04A00, #d44400)';
  banner.style.color = '#fff';
  banner.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Plan updated to <strong style="margin-left:4px">${label}</strong><button onclick="this.parentElement.style.transform='translateY(-100%)'" style="margin-left:16px;background:rgba(255,255,255,0.2);border:none;color:#fff;padding:4px 12px;border-radius:6px;cursor:pointer;font-size:12px">Dismiss</button>`;

  requestAnimationFrame(() => { banner.style.transform = 'translateY(0)'; });
  setTimeout(() => { banner.style.transform = 'translateY(-100%)'; }, 5000);

  const sidebar = document.querySelector('.plan-badge-text .plan-price');
  if (sidebar) sidebar.textContent = plan === 'standard' ? '$8.99/mo' : '$29.99/mo';
  const sidebarName = document.querySelector('.plan-badge-text span:first-child');
  if (sidebarName) sidebarName.textContent = plan === 'standard' ? 'Standard Plan' : 'Elite Plan';
}

// ===== TEAM CODE =====
function copyTeamCode() {
  const code = 'HARKER2026';
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
  const shareData = {
    title: 'Join Harker Eagles on BenchPro',
    text: 'Use team code HARKER2026 to join the student app.',
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
  { type: 'page', label: 'Plans', sub: 'Subscription management', icon: IC.gem, action: () => navigateTo('plans') },
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
function toggleNotifications() {
  const dropdown = document.getElementById('notif-dropdown');
  dropdown.classList.toggle('show');
  // Mark all as read
  if (dropdown.classList.contains('show')) {
    setTimeout(() => {
      document.querySelectorAll('.notif-item.unread').forEach(n => n.classList.remove('unread'));
      const dot = document.getElementById('notif-dot');
      if (dot) dot.style.display = 'none';
    }, 1000);
  }
}

function clearNotifications() {
  document.getElementById('notif-list').innerHTML = '<div class="search-dropdown-empty">No notifications</div>';
  document.getElementById('notif-dot').style.display = 'none';
}

function addNotification(icon, color, text, time) {
  const list = document.getElementById('notif-list');
  // Remove "no notifications" message if present
  const empty = list.querySelector('.search-dropdown-empty');
  if (empty) empty.remove();
  const item = document.createElement('div');
  item.className = 'notif-item unread';
  item.innerHTML = `<div class="notif-icon ${color}">${icon}</div><div class="notif-body"><div class="notif-text">${text}</div><div class="notif-time">${time}</div></div>`;
  list.prepend(item);
  // Show notification dot
  const dot = document.getElementById('notif-dot');
  if (dot) dot.style.display = '';
}

function handleNotifClick(type) {
  document.getElementById('notif-dropdown').classList.remove('show');
  if (type === 'analysis') navigateTo('ai-analysis');
  else if (type === 'tip') navigateTo('send-tips');
  else if (type === 'drill') navigateTo('ai-drills');
  else if (type === 'upload') navigateTo('old-clips');
}

// ===== BACKEND API INTEGRATION =====
const BACKEND_URL = 'https://antigravity-benchpro.onrender.com';

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

  const res = await fetch(`${BACKEND_URL}/api/upload`, { method: 'POST', body: formData });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Upload failed' }));
    throw new Error(err.error || 'Upload failed');
  }
  return res.json();
}

function pollAnalysisStatus(gameId, onProgress, onComplete, onError) {
  const poll = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/analysis/${gameId}/status`);
      const data = await res.json();

      if (data.status === 'complete') {
        onProgress(100, 'Analysis complete!');
        const fullRes = await fetch(`${BACKEND_URL}/api/analysis/${gameId}`);
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
  const res = await fetch(`${BACKEND_URL}/api/analysis/${gameId}`);
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
  const overlay = document.getElementById('analysis-overlay');
  const fill = document.getElementById('analysis-progress-fill');
  const label = document.getElementById('analysis-progress-label');
  const titleEl = document.getElementById('analysis-overlay-title');

  titleEl.textContent = 'Analyzing: ' + title;
  fill.style.width = '0%';
  label.textContent = 'Uploading video to server...';
  overlay.classList.add('show');

  // Reset stages
  document.querySelectorAll('.analysis-stage').forEach(s => { s.classList.remove('active', 'done'); });
  document.getElementById('stage-upload').classList.add('active');

  try {
    // Upload file
    showToast(`Uploading "${file.name}" (${(file.size / (1024 * 1024)).toFixed(1)} MB)...`, IC.upload);
    const uploadResult = await uploadToBackend(file, title, opponent, displayDate);
    const gameId = uploadResult.id;

    document.getElementById('stage-upload').classList.remove('active');
    document.getElementById('stage-upload').classList.add('done');
    document.getElementById('stage-detect').classList.add('active');
    fill.style.width = '15%';
    label.textContent = 'Video uploaded! Starting YOLO player detection...';

    // Poll for real progress
    pollAnalysisStatus(gameId,
      // onProgress
      (pct, statusText) => {
        fill.style.width = Math.max(pct, 15) + '%';
        label.textContent = statusText;

        // Update stage indicators based on progress
        if (pct >= 20) {
          document.getElementById('stage-detect').classList.remove('active');
          document.getElementById('stage-detect').classList.add('done');
          document.getElementById('stage-plays').classList.add('active');
        }
        if (pct >= 70) {
          document.getElementById('stage-plays').classList.remove('active');
          document.getElementById('stage-plays').classList.add('done');
          document.getElementById('stage-insights').classList.add('active');
        }
      },
      // onComplete
      (result) => {
        document.querySelectorAll('.analysis-stage').forEach(s => {
          s.classList.remove('active');
          s.classList.add('done');
        });
        fill.style.width = '100%';
        label.textContent = 'Analysis complete!';

        setTimeout(async () => {
          overlay.classList.remove('show');

          showToast(`Analysis of "${title}" complete!`, IC.check);
          addNotification(IC.upload, 'purple', `Film <strong>${title}</strong> analyzed.`, 'Just now');

          navigateTo('analysis-history');
          if (typeof loadClips === 'function') {
            await loadClips();
          }
          if (typeof loadDashboardRecentGames === 'function') {
            loadDashboardRecentGames();
          }
        }, 800);
      },
      // onError
      (errorMsg) => {
        overlay.classList.remove('show');
        showToast(`Analysis failed: ${errorMsg}`, IC.warn);
      }
    );

  } catch (err) {
    overlay.classList.remove('show');
    showToast(`Upload failed: ${err.message}`, IC.warn);
    console.error('Upload error:', err);
  }
}

function runAnalysisOverlay(title, date, onComplete) {
  const overlay = document.getElementById('analysis-overlay');
  const fill = document.getElementById('analysis-progress-fill');
  const label = document.getElementById('analysis-progress-label');
  const titleEl = document.getElementById('analysis-overlay-title');

  titleEl.textContent = 'Analyzing: ' + title;
  fill.style.width = '0%';
  overlay.classList.add('show');

  // Reset stages
  document.querySelectorAll('.analysis-stage').forEach(s => { s.classList.remove('active', 'done'); });
  document.getElementById('stage-upload').classList.add('active');

  const stages = [
    { id: 'stage-upload', pct: 20, label: 'Uploading file...', delay: 600 },
    { id: 'stage-detect', pct: 45, label: 'Detecting players & tracking motion...', delay: 1800 },
    { id: 'stage-plays', pct: 70, label: 'Analyzing plays & formations with Claude AI...', delay: 3200 },
    { id: 'stage-insights', pct: 100, label: 'Generating AI coaching insights...', delay: 5000 },
  ];

  stages.forEach((stage, i) => {
    setTimeout(() => {
      fill.style.width = stage.pct + '%';
      label.textContent = stage.label;
      if (i > 0) document.getElementById(stages[i - 1].id).classList.remove('active');
      if (i > 0) document.getElementById(stages[i - 1].id).classList.add('done');
      document.getElementById(stage.id).classList.add('active');
    }, stage.delay);
  });

  // Complete — extended to 6.5s to give AI more time to respond
  setTimeout(() => {
    document.getElementById(stages[3].id).classList.remove('active');
    document.getElementById(stages[3].id).classList.add('done');
    overlay.classList.remove('show');
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

  // Show processing overlay
  const overlay = document.getElementById('analysis-overlay');
  const fill = document.getElementById('analysis-progress-fill');
  const label = document.getElementById('analysis-progress-label');
  const titleEl = document.getElementById('analysis-overlay-title');
  const subtitleEl = document.getElementById('analysis-overlay-subtitle');

  titleEl.textContent = 'Analyzing: ' + uploadedFileName;
  subtitleEl.textContent = 'Please wait while our AI processes your stat sheet...';
  fill.style.width = '0%';
  label.textContent = 'Uploading stat sheet...';
  overlay.classList.add('show');

  document.querySelectorAll('.analysis-stage').forEach(s => { s.classList.remove('active', 'done'); });
  document.getElementById('stage-upload').classList.add('active');

  const formData = new FormData();
  formData.append('file', selectedStatFile);

  try {
    // Stage 1: upload
    setTimeout(() => {
      fill.style.width = '25%';
      label.textContent = 'Uploading stat sheet...';
    }, 200);

    const res = await fetch(`${BACKEND_URL}/api/upload_stats`, { method: 'POST', body: formData });

    // Stage 2: processing
    document.getElementById('stage-upload').classList.remove('active');
    document.getElementById('stage-upload').classList.add('done');
    document.getElementById('stage-detect').classList.add('active');
    fill.style.width = '40%';
    label.textContent = 'Reading stat sheet data...';

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Upload failed (${res.status})`);
    }

    // Stage 3: analyzing
    document.getElementById('stage-detect').classList.remove('active');
    document.getElementById('stage-detect').classList.add('done');
    document.getElementById('stage-plays').classList.add('active');
    fill.style.width = '70%';
    label.textContent = 'Claude AI analyzing stats...';

    const data = await res.json();

    // Stage 4: complete
    document.getElementById('stage-plays').classList.remove('active');
    document.getElementById('stage-plays').classList.add('done');
    document.getElementById('stage-insights').classList.add('active');
    fill.style.width = '100%';
    label.textContent = 'Analysis complete!';

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
      overlay.classList.remove('show');
      showToast('Stat sheet analyzed!', IC.check);
      addNotification(IC.upload, 'purple', `Stat sheet <strong>${uploadedFileName}</strong> analyzed.`, 'Just now');

      // Navigate to analysis history page manually, load clips, then add stat entry
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      const pageEl = document.getElementById('page-analysis-history');
      const navEl = document.querySelector('[data-page="analysis-history"]');
      if (pageEl) { pageEl.classList.add('active'); currentPage = 'analysis-history'; }
      if (navEl) navEl.classList.add('active');

      // Load backend clips first, then add stat sheet entry on top
      await loadClips();
      addStatSheetToHistory(uploadedFileName, data.analysis || 'No analysis available.');
    }, 800);

  } catch (err) {
    overlay.classList.remove('show');
    showToast(err.message, IC.x);
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalBtnText;
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
function sendTipFromPage() {
  const player = document.getElementById('tip-player-page').value;
  const message = document.getElementById('tip-message-page').value;
  const catSelect = document.querySelector('#page-send-tips .card-body select:not(#tip-player-page)');
  const category = catSelect?.value || 'General Feedback';
  if (!player || !message) { showToast('Please select a player and enter a message', IC.warn); return; }

  tipStore.unshift({ player, message, date: 'Just now', category });

  showToast(`Tip sent to ${player}!`, IC.bulb);
  document.getElementById('tip-message-page').value = '';
  addNotification(IC.bulb, 'green', `Tip delivered to <strong>${player}</strong>`, 'Just now');
  renderTipHistory();

  const dashHistory = document.getElementById('tip-history');
  if (dashHistory) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot success"></div>
      <div class="timeline-time">Now</div>
      <div class="timeline-content">
        <h4>Tip sent to ${player}</h4>
        <p>${message}</p>
      </div>`;
    dashHistory.prepend(item);
  }
}

function renderTipHistory() {
  const historyCards = document.querySelectorAll('#page-send-tips .card-body');
  const historyDiv = historyCards.length > 1 ? historyCards[1] : null;
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

// ===== PAYMENT METHODS =====
async function removePaymentMethod(btn) {
  const ok = await confirmAction('Remove Payment Method', 'Remove this payment method from your account?', { danger: true, okText: 'Remove', icon: IC.card });
  if (!ok) return;
  const row = btn.closest('.player-row');
  if (row) row.remove();
  showToast('Payment method removed', IC.trash);
}

function setDefaultPayment(btn) {
  document.querySelectorAll('#payment-methods-list .badge-orange').forEach(b => b.remove());
  document.querySelectorAll('#payment-methods-list .player-row').forEach(row => {
    const btns = row.querySelectorAll('.btn');
    btns.forEach(b => { if (b.textContent === 'Set Default') b.style.display = ''; });
  });
  const row = btn.closest('.player-row');
  const badgeArea = row.querySelector('div[style*="display:flex"]');
  const badge = document.createElement('span');
  badge.className = 'badge badge-orange';
  badge.textContent = 'Default';
  badgeArea.prepend(badge);
  btn.style.display = 'none';
  showToast('Default payment method updated', IC.check);
}

// ===== AUTH SCREEN =====
let signupStep = 1;
let selectedSignupPlan = 'elite';

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
      Start Free Trial
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

let socialLoginProvider = '';

window.socialLogin = function (provider) {
  socialLoginProvider = provider;
  const overlay = document.getElementById('social-login-overlay');
  const title = document.getElementById('social-login-title');
  const icon = document.getElementById('social-login-icon');
  const emailInput = document.getElementById('social-login-email');
  const nameInput = document.getElementById('social-login-name');

  // Reset fields
  nameInput.value = '';
  emailInput.value = '';

  if (provider === 'Google') {
    title.textContent = 'Sign in with Google';
    icon.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>';
    emailInput.placeholder = 'your.email@gmail.com';
  } else {
    title.textContent = 'Sign in with Apple';
    icon.innerHTML = '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.39-.04-.56 0-1.12.535-2.22 1.235-3.02C13.66 1.57 14.98.87 16.12.75c.02.23.04.45.04.68h.205zm3.635 10.44c.03 3.33 2.925 4.44 2.955 4.45-.025.08-.462 1.58-1.525 3.13-.916 1.34-1.866 2.67-3.363 2.7-1.47.03-1.944-.87-3.627-.87-1.683 0-2.208.84-3.597.9-1.445.05-2.545-1.45-3.47-2.79-1.885-2.73-3.325-7.72-1.392-11.09.955-1.67 2.672-2.72 4.53-2.75 1.42-.03 2.758.95 3.625.95.865 0 2.49-1.18 4.195-1.01.715.03 2.718.29 4.005 2.17-.1.07-2.39 1.39-2.365 4.16h.03z"/></svg>';
    emailInput.placeholder = 'your.email@icloud.com';
  }

  overlay.classList.add('show');
  setTimeout(() => nameInput.focus(), 200);
};

window.closeSocialLogin = function () {
  document.getElementById('social-login-overlay').classList.remove('show');
};

window.submitSocialLogin = function () {
  const name = document.getElementById('social-login-name').value.trim();
  const email = document.getElementById('social-login-email').value.trim();

  if (!name) { showAuthError('Please enter your name.'); return; }
  if (!email || !email.includes('@')) { showAuthError('Please enter a valid email address.'); return; }

  // Register account so they can also log in normally later
  if (!window.benchproAccounts) window.benchproAccounts = {};
  window.benchproAccounts[email.toLowerCase()] = { password: 'social-' + socialLoginProvider.toLowerCase(), name };

  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  updateUserUI(name, initials, email);

  // Close social modal
  closeSocialLogin();

  // Hide auth screen
  const authScreen = document.getElementById('auth-screen');
  authScreen.classList.add('hidden');
  setTimeout(() => {
    authScreen.style.display = 'none';
    navigateTo('dashboard');
    initUpload();
    setupCanvasEvents();
    renderSparklines();
    showToast(`Signed in with ${socialLoginProvider} as ${email}`, IC.login);
    addNotification(IC.check, 'green', `Signed in via <strong>${socialLoginProvider}</strong> (${email})`, 'Just now');
  }, 500);
};

// Close social login with Escape or clicking overlay
document.addEventListener('click', (e) => {
  if (e.target.id === 'social-login-overlay') closeSocialLogin();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('social-login-overlay').classList.contains('show')) {
    closeSocialLogin();
  }
});

function handleLogin() {
  const emailEl = document.getElementById('login-email');
  const pwEl = document.getElementById('login-password');
  const email = emailEl.value.trim();
  const password = pwEl.value;

  const validAccounts = window.benchproAccounts || {};
  validAccounts['coachw@gmail.com'] = { password: '12345', name: 'Coach Wilson' };

  let hasError = false;
  if (!email) { showFieldError(emailEl, 'Email is required'); hasError = true; }
  else if (!/\S+@\S+\.\S+/.test(email)) { showFieldError(emailEl, 'Enter a valid email address'); hasError = true; }
  else clearFieldError(emailEl);
  if (!password) { showFieldError(pwEl, 'Password is required'); hasError = true; }
  else clearFieldError(pwEl);
  if (hasError) return;

  const account = validAccounts[email.toLowerCase()];
  if (!account || account.password !== password) {
    showAuthError('Incorrect email or password. Please try again.');
    // Shake the login button for visual feedback
    const btn = document.querySelector('#auth-login .auth-btn');
    if (btn) {
      btn.style.animation = 'shake 0.4s ease';
      setTimeout(() => btn.style.animation = '', 400);
    }
    return;
  }

  // Successful login — update UI with user info
  const userName = account.name || 'Coach';
  const initials = userName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  updateUserUI(userName, initials, email);

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
}

function showAuthError(message) {
  // Remove any existing error
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

function handleSignupComplete() {
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

  // Register the account so they can log in later
  if (!window.benchproAccounts) window.benchproAccounts = {};
  window.benchproAccounts[email.toLowerCase()] = { password, name };

  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  updateUserUI(name, initials, email);

  const authScreen = document.getElementById('auth-screen');
  authScreen.classList.add('hidden');
  setTimeout(() => {
    authScreen.style.display = 'none';
    currentPlan = selectedSignupPlan;
    // Update the plan badge in sidebar
    const planBadge = document.querySelector('.plan-badge');
    if (planBadge) {
      const planName = selectedSignupPlan === 'elite' ? 'Elite' : 'Standard';
      const price = selectedSignupPlan === 'elite' ? '$29.99' : '$8.99';
      planBadge.querySelector('strong').textContent = planName + ' Plan';
      planBadge.querySelector('small').textContent = price + '/mo';
    }
    navigateTo('dashboard');
    initUpload();
    setupCanvasEvents();
    renderSparklines();
    showToast(`Welcome to BenchPro, ${name}! Your 14-day free trial has started.`, IC.star);
    addNotification(IC.star, 'green', `Account created for <strong>${name}</strong> (${email})`, 'Just now');
  }, 500);
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
    const res = await fetch(`${BACKEND_URL}/api/clips`);
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

      const eventBadge = clip.event_count > 0 ? `<span class="badge badge-blue">${clip.event_count} Events</span>` : '';
      const playerBadge = clip.player_count > 0 ? `<span class="badge badge-orange">${clip.player_count} Detections</span>` : '';

      return `
        <div class="game-card" onclick="navigateTo('analysis-history')">
          <div class="game-card-top">
            <div>
              <div class="game-card-teams">${clip.title || clip.file_name || 'Untitled'}</div>
              <div class="game-card-date">${dateStr}${clip.opponent ? ' · vs. ' + clip.opponent : ''}</div>
            </div>
          </div>
          <div class="game-card-insights">
            ${statusBadge}
            ${eventBadge}
            ${playerBadge}
          </div>
        </div>`;
    }).join('');

  } catch (err) {
    container.innerHTML = `<div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg><h3>No analyses yet</h3><p>Upload a video or stat sheet to see analyses here.</p></div>`;
  }
}

// ===== ANALYSIS HISTORY DYNAMIC LIST =====
async function loadClips() {
  const clipsList = document.getElementById('clips-list');
  const clipsEmpty = document.getElementById('clips-empty');
  if (!clipsList) return;

  // Preserve any stat sheet entries already in the list
  const existingStatEntries = clipsList.querySelectorAll('[data-stat-entry="true"]');
  const statEntriesArr = [];
  existingStatEntries.forEach(el => statEntriesArr.push(el));

  clipsList.innerHTML = '<div class="skeleton skeleton-card"></div><div class="skeleton skeleton-card"></div><div class="skeleton skeleton-card"></div>';

  try {
    const res = await fetch(`${BACKEND_URL}/api/clips`);
    if (!res.ok) throw new Error('Failed to load clips');
    const clips = await res.json();

    clipsList.innerHTML = '';

    // Put stat entries back first
    statEntriesArr.forEach(el => clipsList.appendChild(el));

    if (clips.length === 0 && statEntriesArr.length === 0) {
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
      const createdDate = clip.created_at ? new Date(clip.created_at.replace(' ', 'T') + 'Z') : new Date();
      const dateStr = createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      let statusBadge = '';
      if (clip.status === 'complete') statusBadge = '<span class="badge badge-green">Complete</span>';
      else if (clip.status === 'processing') statusBadge = '<span class="badge badge-orange">Processing</span>';
      else if (clip.status === 'error') statusBadge = '<span class="badge badge-red">Error</span>';
      else statusBadge = '<span class="badge badge-blue">Pending</span>';

      const viewAnalysisBtn = clip.status === 'complete' ? `
        <button class="btn btn-primary btn-sm" data-view-video="${clip.id}">
          ${IC.search} View
        </button>` : '';

      const clipEl = document.createElement('div');
      clipEl.className = 'analysis-entry';
      clipEl.innerHTML = `
        <div class="analysis-entry-icon video">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
        </div>
        <div class="analysis-entry-info">
          <h4>${clip.title || clip.file_name || 'Untitled'}</h4>
          <div class="analysis-entry-meta">
            <span class="analysis-entry-type video">Video</span>
            <span>${dateStr}</span>
          </div>
        </div>
        <div class="analysis-entry-actions">
          ${statusBadge}
          ${viewAnalysisBtn}
          <button class="btn-icon" data-delete="${clip.id}" title="Delete">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
        <div id="video-detail-${clip.id}" class="analysis-entry-detail"></div>
      `;
      clipsList.appendChild(clipEl);

      const delBtn = clipEl.querySelector(`[data-delete="${clip.id}"]`);
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const ok = await confirmAction('Delete Clip', 'Delete this game clip? This cannot be undone.', { danger: true, okText: 'Delete', icon: IC.trash });
        if (!ok) return;
        delBtn.disabled = true;
        delBtn.style.opacity = '0.5';
        try {
          const r = await fetch(`${BACKEND_URL}/api/clips/${clip.id}`, { method: 'DELETE' });
          if (!r.ok) throw new Error('Delete failed');
          clipEl.remove();
          showToast('Clip deleted', IC.trash);
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

      if (clip.status === 'complete') {
        const viewBtn = clipEl.querySelector(`[data-view-video="${clip.id}"]`);
        viewBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const detailPanel = document.getElementById(`video-detail-${clip.id}`);
          const isVisible = detailPanel.classList.contains('show');

          if (isVisible) {
            detailPanel.classList.remove('show');
            viewBtn.innerHTML = `${IC.search} View`;
          } else {
            if (detailPanel.innerHTML === '') {
              detailPanel.innerHTML = '<div style="color:var(--text-muted);font-size:13px">Loading analysis...</div>';
              detailPanel.classList.add('show');
              showResults(clip.id);
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
    statEntriesArr.forEach(el => clipsList.appendChild(el));
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

async function showResults(gameId) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/analysis/${gameId}`);
    const data = await res.json();

    const detailPanel = document.getElementById(`video-detail-${gameId}`);
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

    detailPanel.innerHTML = statsHtml + chartsHtml + coachHtml + eventsHtml;

    if (window.lucide) {
      lucide.createIcons({ root: detailPanel });
    }
  } catch (err) {
    console.error('Failed to load results:', err);
    const detailPanel = document.getElementById(`video-detail-${gameId}`);
    if (detailPanel) {
      detailPanel.innerHTML = `<div style="color:var(--red);font-size:13px">Failed to load analysis results: ${err.message}</div>`;
    }
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Auth screen is shown by default — don't navigate to dashboard yet
  // Dashboard init happens after login/signup

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

/* ===== SETTINGS FUNCTIONS ===== */
function saveSettings() {
  const nameEl = document.getElementById('settings-name');
  const emailEl = document.getElementById('settings-email');
  const name = nameEl?.value?.trim() || '';
  const email = emailEl?.value?.trim() || '';
  const school = document.getElementById('settings-school')?.value || '';
  const team = document.getElementById('settings-team')?.value || '';

  let hasError = false;
  if (nameEl && !name) { showFieldError(nameEl, 'Name is required'); hasError = true; }
  else if (nameEl) clearFieldError(nameEl);
  if (emailEl && email && !/\S+@\S+\.\S+/.test(email)) { showFieldError(emailEl, 'Enter a valid email'); hasError = true; }
  else if (emailEl) clearFieldError(emailEl);
  if (hasError) return;

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

  showToast('Profile saved successfully!', IC.check);
}

function toggleSetting(label, enabled) {
  showToast(`${label} ${enabled ? 'enabled' : 'disabled'}`, enabled ? IC.check : IC.bellOff);
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

function openManageSubscription() {
  let modal = document.getElementById('manage-sub-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'manage-sub-modal';
    document.body.appendChild(modal);
  }
  const planName = currentPlan === 'elite' ? 'Elite' : 'Standard';
  const planPrice = currentPlan === 'elite' ? '$29.99' : '$8.99';
  const nextBill = 'March 1, 2026';

  modal.innerHTML = `
    <div class="modal" style="max-width:520px">
      <div class="modal-header">
        <h2>Manage Subscription</h2>
        <button class="modal-close" onclick="closeModal('manage-sub-modal')">${IC.x}</button>
      </div>
      <div class="modal-body">
        <div style="background:var(--bg-secondary);border-radius:var(--radius);padding:20px;border:1px solid var(--border);margin-bottom:20px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div>
              <div style="font-size:18px;font-weight:800;color:var(--text-primary)">${planName} Plan</div>
              <div style="font-size:13px;color:var(--text-muted)">Billed monthly</div>
            </div>
            <div style="font-size:28px;font-weight:900;color:var(--orange)">${planPrice}<span style="font-size:13px;font-weight:400;color:var(--text-muted)">/mo</span></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--text-secondary);padding-top:12px;border-top:1px solid var(--border)">
            <span>Next billing date</span>
            <span style="font-weight:600">${nextBill}</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn btn-primary" style="width:100%" onclick="closeModal('manage-sub-modal');navigateTo('plans')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-3px;margin-right:6px"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
            Change Plan
          </button>
          <button class="btn btn-secondary" style="width:100%" onclick="showToast('Payment method updated',IC.card);closeModal('manage-sub-modal')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-3px;margin-right:6px"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            Update Payment Method
          </button>
          <button class="btn btn-secondary" style="width:100%" onclick="showToast('Billing history downloaded',IC.download);closeModal('manage-sub-modal')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-3px;margin-right:6px"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download All Invoices
          </button>
          <button class="btn btn-secondary" style="width:100%;color:var(--red);border-color:rgba(239,68,68,0.3)" onclick="confirmAction('Cancel Subscription','Cancel your subscription? You will keep access until the end of the billing period.',{danger:true,okText:'Cancel Subscription',icon:IC.x}).then(ok=>{if(ok){showToast('Subscription cancelled',IC.x);closeModal('manage-sub-modal')}})">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>`;

  openModal('manage-sub-modal');
}
