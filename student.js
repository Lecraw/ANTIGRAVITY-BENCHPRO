// ===== STUDENT APP — BenchPro Mobile =====

// ===== CLEAN SVG ICONS =====
const _si = (d) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:-3px">${d}</svg>`;
const SIC = {
  check: _si('<polyline points="20 6 9 17 4 12"/>'),
  warn: _si('<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
  x: _si('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
  film: _si('<rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>'),
  upload: _si('<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>'),
  wave: _si('<path d="M18.36 6.64A9 9 0 015.64 18.36M19.78 2.22l-2.83 2.83M4.22 19.78l2.83-2.83"/>'),
  bell: _si('<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>'),
  bellOff: _si('<path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><line x1="1" y1="1" x2="23" y2="23"/>'),
  star: _si('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
  undo: _si('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>'),
  target: _si('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  shield: _si('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  ball: _si('<circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>'),
  bolt: _si('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
  msg: _si('<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>'),
  trendUp: _si('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
};

// ===== STATE =====
let currentTab = 'home';
let messageDetailOpen = false;

// ===== PLAYER DATA (empty for new accounts — real data from backend) =====
let currentStudentUser = null;  // { name, email, team_code } from /api/auth/me
const STUDENT = {
    name: '',
    email: '',
    stats: {
        ppg: { value: 0, change: 0, icon: 'target', color: 'orange' },
        apg: { value: 0, change: 0, icon: 'users', color: 'green' },
        rpg: { value: 0, change: 0, icon: 'globe', color: 'blue' },
        spg: { value: 0, change: 0, icon: 'shield', color: 'purple' },
    },
    shooting: { fg: 0, three: 0, ft: 0 },
    games: [],
    trend: [],
    insights: [],
};

const MESSAGES = [];
const MY_CLIPS = [];
const DRILLS = [];

const BACKEND_URL = window.location.origin;
const AUTH_STORAGE_KEY = 'benchpro_student_token';
const AUTH_STORAGE_KEY_SESSION = 'benchpro_student_token_session';

function getStudentAuthToken() {
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY_SESSION) || null;
  } catch { return null; }
}
function setStudentAuthToken(token, persist) {
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
  const token = getStudentAuthToken();
  const headers = { ...(opts.headers || {}) };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  return fetch(url, { ...opts, headers });
}

// ===== FORM VALIDATION =====
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

// ===== THEME =====
const STUDENT_THEME_KEY = 'student_dark_mode';

function toggleStudentDarkMode(darkOn) {
    try { localStorage.setItem(STUDENT_THEME_KEY, String(darkOn)); } catch {}
    const isLight = !darkOn;
    if (document.body) document.body.classList.toggle('light-mode', isLight);
    if (isLight) document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    showToast(darkOn ? 'Dark mode on' : 'Light mode on', SIC.check);
}

function loadStudentTheme() {
    try {
        const stored = localStorage.getItem(STUDENT_THEME_KEY);
        const darkOn = stored === null ? true : stored === 'true';
        const toggle = document.getElementById('student-dark-mode-toggle');
        if (toggle) toggle.checked = darkOn;
        if (document.body) document.body.classList.toggle('light-mode', !darkOn);
        if (darkOn) document.documentElement.removeAttribute('data-theme');
        else document.documentElement.setAttribute('data-theme', 'light');
    } catch {}
}

// ===== AUTH =====
let studentSignupOption = null;
let studentSelectedPlan = 'elite';
let studentAccounts = {};

function showStudentAuthTab(tab) {
    document.querySelectorAll('.student-auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.student-auth-view').forEach(v => v.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    document.getElementById('view-' + tab).classList.add('active');
    if (tab === 'signup') {
        goSignupStep(1);
    }
}

async function handleStudentLogin() {
    const emailEl = document.getElementById('student-email');
    const codeEl = document.getElementById('student-code');
    const email = emailEl.value.trim();
    const password = codeEl.value;  // "code" field is the password

    let hasError = false;
    if (!email) { showFieldError(emailEl, 'Email is required'); hasError = true; }
    else if (!/\S+@\S+\.\S+/.test(email)) { showFieldError(emailEl, 'Enter a valid email'); hasError = true; }
    else clearFieldError(emailEl);
    if (!password) { showFieldError(codeEl, 'Password is required'); hasError = true; }
    else clearFieldError(codeEl);
    if (hasError) return;

    const btn = document.getElementById('student-login-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<div class="login-spinner"></div> Signing in...'; }
    try {
        const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            const msg = data.code === 'email_not_verified'
                ? 'Please verify your email first. Check your inbox.'
                : (data.error || 'Invalid email or password');
            showFieldError(codeEl, msg);
            if (btn) { btn.disabled = false; btn.innerHTML = 'Log In'; }
            return;
        }
        if (data.user && data.user.user_type !== 'player') {
            showFieldError(codeEl, 'This account is for coaches. Use the Coach Dashboard to log in.');
            if (btn) { btn.disabled = false; btn.innerHTML = 'Log In'; }
            return;
        }
        const rememberMe = document.getElementById('student-remember-me')?.checked ?? false;
        setStudentAuthToken(data.token, rememberMe);
        const user = data.user || {};
        currentStudentUser = user;
        STUDENT.name = user.name || '';
        STUDENT.email = user.email || '';
        finishLogin(user.name || 'Player');
    } catch (err) {
        showFieldError(codeEl, 'Could not connect. Please try again.');
        if (btn) { btn.disabled = false; btn.innerHTML = 'Log In'; }
    }
}

function finishLogin(playerName) {
    const btn = document.getElementById('student-login-btn');
    btn.innerHTML = '<div class="login-spinner"></div> Signing in...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('student-auth').classList.add('hidden');
        document.getElementById('student-app').classList.add('active');
        const firstName = playerName.split(' ')[0];
        const titleEl = document.querySelector('#page-home .page-title');
        if (titleEl) titleEl.textContent = `Hey, ${firstName}!`;
        showToast(`Welcome back, ${firstName}!`, SIC.check);
    }, 800);
}

function goSignupStep(step) {
    document.querySelectorAll('#view-signup .signup-step').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('signup-step-' + step);
    if (el) el.classList.add('active');
}

function handleStudentSignupStep1() {
    const nameEl = document.getElementById('signup-name');
    const emailEl = document.getElementById('signup-email');
    const pwEl = document.getElementById('signup-password');
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const pw = pwEl.value;

    let hasError = false;
    if (!name) { showFieldError(nameEl, 'Name is required'); hasError = true; } else clearFieldError(nameEl);
    if (!email) { showFieldError(emailEl, 'Email is required'); hasError = true; }
    else if (!/\S+@\S+\.\S+/.test(email)) { showFieldError(emailEl, 'Enter a valid email'); hasError = true; }
    else clearFieldError(emailEl);
    if (!pw) { showFieldError(pwEl, 'Password is required'); hasError = true; }
    else if (pw.length < 4) { showFieldError(pwEl, 'At least 4 characters'); hasError = true; }
    else clearFieldError(pwEl);
    if (hasError) return;

    goSignupStep(2);
}

function selectSignupOption(opt) {
    studentSignupOption = opt;
    document.getElementById('opt-join').classList.toggle('selected', opt === 'join');
    document.getElementById('opt-plan').classList.toggle('selected', opt === 'plan');
    document.getElementById('join-panel').style.display = opt === 'join' ? 'block' : 'none';
    document.getElementById('plan-panel').style.display = opt === 'plan' ? 'block' : 'none';
}

function selectStudentPlan(plan) {
    studentSelectedPlan = plan;
    document.getElementById('splan-standard').classList.toggle('selected', plan === 'standard');
    document.getElementById('splan-elite').classList.toggle('selected', plan === 'elite');
}

async function handleStudentSignupFinish() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const pw = document.getElementById('signup-password').value;

    if (!studentSignupOption) {
        showToast('Please choose how you want to get started', SIC.warn);
        return;
    }

    let teamCode = '';
    let plan = 'standard';
    if (studentSignupOption === 'join') {
        teamCode = document.getElementById('signup-team-code').value.trim();
        if (!teamCode) {
            showToast('Please enter your team code', SIC.warn);
            return;
        }
        plan = 'standard';
    } else {
        plan = studentSelectedPlan || 'elite';
    }

    const btn = document.getElementById('signup-finish-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<div class="login-spinner"></div> Creating account...'; }
    try {
        const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: pw, name, user_type: 'player', team_code: teamCode, plan })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            showToast(data.error || 'Signup failed. Please try again.', SIC.warn);
            if (btn) { btn.disabled = false; btn.innerHTML = 'Create Account'; }
            return;
        }
        const rememberMe = document.getElementById('student-signup-remember-me')?.checked ?? false;
        setStudentAuthToken(data.token, rememberMe);
        currentStudentUser = data.user || {};
        STUDENT.name = name;
        STUDENT.email = email;
        document.getElementById('student-auth').classList.add('hidden');
        document.getElementById('student-app').classList.add('active');
        const firstName = name.split(' ')[0];
        const titleEl = document.querySelector('#page-home .page-title');
        if (titleEl) titleEl.textContent = `Hey, ${firstName}!`;
        const planLabel = studentSignupOption === 'join' ? 'Team' : (plan === 'elite' ? 'Elite' : 'Standard');
        showToast(`Welcome to BenchPro, ${firstName}! (${planLabel} Plan)`, SIC.star);
    } catch (err) {
        showToast('Could not create account. Please try again.', SIC.warn);
        if (btn) { btn.disabled = false; btn.innerHTML = 'Create Account'; }
    }
}

// ===== NAVIGATION =====
function switchTab(tab) {
    if (tab === currentTab) return;

    // Close message detail if open
    if (messageDetailOpen) {
        closeMessageDetail();
    }

    currentTab = tab;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');

    // Update pages
    document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${tab}`).classList.add('active');

    // Always show BENCHPRO in top bar
    document.getElementById('top-bar-page-title').textContent = 'BENCHPRO';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Load clips when switching to upload tab
    if (tab === 'upload' && typeof loadStudentClips === 'function') {
        loadStudentClips();
    }
}

// ===== TOAST =====
function showToast(message, icon) {
    if (!icon) icon = SIC.check;
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ===== CLIP UPLOAD =====
function triggerClipUpload() {
    document.getElementById('clip-file-input').click();
}

function handleClipSelect(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const progressEl = document.getElementById('upload-progress');
        const nameEl = document.getElementById('upload-file-name');
        const pctEl = document.getElementById('upload-pct');
        const barEl = document.getElementById('upload-bar-fill');

        nameEl.textContent = file.name;
        progressEl.classList.add('active');
        barEl.style.width = '0%';
        pctEl.textContent = '0%';

        // Simulate upload
        let pct = 0;
        const interval = setInterval(() => {
            pct += Math.random() * 15 + 5;
            if (pct >= 100) {
                pct = 100;
                clearInterval(interval);
                setTimeout(() => {
                    progressEl.classList.remove('active');
                    showToast('Clip uploaded successfully!', SIC.check);
                    addClipToList(file.name);
                    input.value = '';
                }, 500);
            }
            barEl.style.width = pct + '%';
            pctEl.textContent = Math.round(pct) + '%';
        }, 200);
    }
}

async function studentUploadToBackend(file, title) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title || file.name);

    const res = await fetchWithAuth(`${BACKEND_URL}/api/upload`, { method: 'POST', body: formData });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Upload failed' }));
        throw new Error(err.error || 'Upload failed');
    }
    return res.json();
}

function studentPollAnalysisStatus(gameId, onProgress, onComplete, onError) {
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

            const pct = Math.round(data.progress || 0);
            let label = 'Processing...';
            if (pct < 10) label = 'Uploading and preparing video...';
            else if (pct < 40) label = 'Detecting players with YOLO AI...';
            else if (pct < 70) label = 'Classifying teams & tracking ball...';
            else if (pct < 90) label = 'Detecting game events...';
            else label = 'Building stats & AI insights...';

            onProgress(pct, label);
            setTimeout(poll, 1000);
        } catch (e) {
            console.error('Poll error:', e);
            setTimeout(poll, 2000);
        }
    };
    poll();
}

async function studentRealUploadAndAnalyze(file, title) {
    const indicator = document.getElementById('student-analysis-indicator');
    const fill = document.getElementById('student-analysis-progress-fill');
    const label = document.getElementById('student-analysis-progress-label');
    const titleEl = document.getElementById('student-analysis-indicator-title');
    const pctEl = document.getElementById('student-analysis-indicator-pct');

    if (titleEl) titleEl.textContent = title.length > 24 ? title.slice(0, 21) + '...' : title;
    if (fill) fill.style.width = '0%';
    if (label) label.textContent = 'Uploading video to server...';
    if (pctEl) pctEl.textContent = '0%';
    if (indicator) indicator.classList.add('show');

    try {
        showToast(`Uploading "${file.name}" (${(file.size / (1024 * 1024)).toFixed(1)} MB)...`, SIC.upload);
        const uploadResult = await studentUploadToBackend(file, title);
        const gameId = uploadResult.id;

        if (fill) fill.style.width = '15%';
        if (label) label.textContent = 'Starting YOLO detection...';
        if (pctEl) pctEl.textContent = '15%';

        studentPollAnalysisStatus(gameId,
            (pct, statusText) => {
                if (fill) fill.style.width = Math.max(pct, 15) + '%';
                if (label) label.textContent = statusText.length > 35 ? statusText.slice(0, 32) + '...' : statusText;
                if (pctEl) pctEl.textContent = pct + '%';
            },
            (result) => {
                if (fill) fill.style.width = '100%';
                if (label) label.textContent = 'Complete!';
                if (pctEl) pctEl.textContent = '100%';

                setTimeout(() => {
                    if (indicator) indicator.classList.remove('show');
                    showToast(`Analysis of "${title}" complete!`, SIC.check);
                    const titleInput = document.getElementById('clip-title-input');
                    const fileInput = document.getElementById('clip-file-input');
                    const info = document.getElementById('clip-file-info');
                    if (titleInput) titleInput.value = '';
                    if (fileInput) fileInput.value = '';
                    if (info) info.style.display = 'none';
                    if (typeof loadStudentClips === 'function') loadStudentClips();
                }, 600);
            },
            (errorMsg) => {
                if (indicator) indicator.classList.remove('show');
                showToast(`Analysis failed: ${errorMsg}`, SIC.warn);
            }
        );
    } catch (err) {
        if (indicator) indicator.classList.remove('show');
        showToast(`Upload failed: ${err.message}`, SIC.warn);
        console.error('Upload error:', err);
    }
}

function handleUploadClipBtn() {
    const titleInput = document.getElementById('clip-title-input');
    const title = titleInput ? titleInput.value.trim() : '';
    const fileInput = document.getElementById('clip-file-input');

    if (!fileInput.files || !fileInput.files[0]) {
        showToast('Please select a clip first', SIC.warn);
        return;
    }

    if (!title) {
        showToast('Please enter a clip title', SIC.warn);
        return;
    }

    const file = fileInput.files[0];
    studentRealUploadAndAnalyze(file, title);
}

function handleClipFileSelect(input) {
    if (input.files && input.files[0]) {
        const info = document.getElementById('clip-file-info');
        const name = document.getElementById('clip-selected-name');
        info.style.display = 'flex';
        name.textContent = input.files[0].name;
    }
}

function clearStudentClipFile() {
    const fileInput = document.getElementById('clip-file-input');
    const info = document.getElementById('clip-file-info');
    if (fileInput) fileInput.value = '';
    if (info) info.style.display = 'none';
}

// ===== ANALYSIS HISTORY (from backend) =====
async function loadStudentClips() {
    const clipsList = document.getElementById('my-clips-list');
    const badge = document.getElementById('student-clips-badge');
    if (!clipsList) return;

    if (!getStudentAuthToken()) {
        clipsList.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);font-size:13px">Log in to see your clips.</div>';
        if (badge) badge.textContent = '0 clips';
        return;
    }

    clipsList.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);font-size:13px">Loading clips...</div>';

    try {
        const res = await fetchWithAuth(`${BACKEND_URL}/api/clips`);
        if (!res.ok) throw new Error('Failed to load clips');
        const clips = await res.json();

        if (badge) badge.textContent = clips.length + ' clip' + (clips.length !== 1 ? 's' : '');
        clipsList.innerHTML = '';

        if (clips.length === 0) {
            clipsList.innerHTML = `<div class="empty-state" style="padding:24px;text-align:center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:12px;opacity:0.6">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                </svg>
                <p style="color:var(--text-muted);font-size:14px">No clips yet. Upload your first clip above!</p>
            </div>`;
            return;
        }

        clips.forEach(clip => {
            const createdDate = clip.created_at ? new Date(clip.created_at.replace(' ', 'T') + 'Z') : new Date();
            const dateStr = createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

            let statusBadge = '';
            if (clip.status === 'complete') statusBadge = '<span class="badge badge-green">Complete</span>';
            else if (clip.status === 'processing') statusBadge = '<span class="badge badge-orange">Processing</span>';
            else if (clip.status === 'error') statusBadge = '<span class="badge badge-red">Error</span>';
            else statusBadge = '<span class="badge badge-blue">Pending</span>';

            const viewBtn = clip.status === 'complete' ? `
                <button class="btn btn-primary btn-sm" data-view-video="${clip.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:4px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    View
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
                    ${viewBtn}
                    <button class="btn-icon" data-delete-clip="${clip.id}" title="Delete" style="padding:6px">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
                <div id="student-video-detail-${clip.id}" class="analysis-entry-detail"></div>
            `;
            clipsList.appendChild(clipEl);

            const delBtn = clipEl.querySelector(`[data-delete-clip="${clip.id}"]`);
            delBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                if (!confirm('Delete this clip? This cannot be undone.')) return;
                delBtn.disabled = true;
                delBtn.style.opacity = '0.5';
                try {
                    const r = await fetchWithAuth(`${BACKEND_URL}/api/clips/${clip.id}`, { method: 'DELETE' });
                    if (!r.ok) throw new Error('Delete failed');
                    clipEl.remove();
                    showToast('Clip deleted', SIC.film);
                    const remaining = clipsList.querySelectorAll('.analysis-entry').length;
                    if (badge) badge.textContent = remaining + ' clip' + (remaining !== 1 ? 's' : '');
                    if (remaining === 0) {
                        clipsList.innerHTML = `<div class="empty-state" style="padding:24px;text-align:center">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:12px;opacity:0.6">
                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                <circle cx="12" cy="13" r="3"></circle>
                            </svg>
                            <p style="color:var(--text-muted);font-size:14px">No clips yet. Upload your first clip above!</p>
                        </div>`;
                    }
                } catch (err) {
                    showToast(err.message || 'Delete failed', SIC.warn);
                    delBtn.disabled = false;
                    delBtn.style.opacity = '1';
                }
            });

            if (clip.status === 'complete' && viewBtn) {
                const viewBtnEl = clipEl.querySelector(`[data-view-video="${clip.id}"]`);
                viewBtnEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const detailPanel = document.getElementById(`student-video-detail-${clip.id}`);
                    const isVisible = detailPanel.classList.contains('show');

                    if (isVisible) {
                        detailPanel.classList.remove('show');
                        viewBtnEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:4px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> View';
                    } else {
                        if (detailPanel.innerHTML === '') {
                            detailPanel.innerHTML = '<div style="color:var(--text-muted);font-size:13px">Loading analysis...</div>';
                            detailPanel.classList.add('show');
                            showStudentResults(clip.id);
                        } else {
                            detailPanel.classList.add('show');
                        }
                        viewBtnEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:4px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Hide';
                    }
                });
            }
        });
    } catch (err) {
        console.error('Failed to load clips:', err);
        clipsList.innerHTML = `<div class="empty-state" style="padding:24px;text-align:center;color:var(--text-muted);font-size:13px">Could not load clips. ${err.message}</div>`;
    }
}

function buildStudentChartData(playerStats, ballStats, eventStats, teamStats, aiInsights) {
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

function buildStudentShareBar(title, opponent, date, analysis, stats) {
    return `
    <div class="share-analysis-bar" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:20px;padding:12px 16px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius);">
      <span style="font-size:13px;color:var(--text-secondary)">Share this analysis</span>
      <button class="btn btn-sm btn-secondary" data-share-analysis title="Share to social media">
        ${SIC.shield} Share
      </button>
    </div>`;
}

function buildStudentShareText(title, opponent, date, analysis, stats) {
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

function openStudentShareMenu(gameId, title, opponent, date, analysis, stats) {
    const url = window.location.origin + '/student?clip=' + gameId;
    const shareText = buildStudentShareText(title, opponent, date, analysis, stats);
    const fullText = shareText + '\n' + url;

    if (navigator.share) {
        navigator.share({
            title: title || 'BenchPro Analysis',
            text: shareText,
            url
        }).then(() => showToast('Shared!', SIC.check)).catch(() => showStudentShareFallback(url, fullText));
    } else {
        showStudentShareFallback(url, fullText);
    }
}

function showStudentShareFallback(url, fullText) {
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
    div.innerHTML = `
      <div class="modal" style="max-width:420px" onclick="event.stopPropagation()">
        <div class="modal-header"><h2>Share to Social Media</h2><button class="modal-close" onclick="document.getElementById('share-overlay').classList.remove('show')">✕</button></div>
        <div class="modal-body">
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Share this clip and analysis to Instagram, Twitter, or any app.</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <button class="btn btn-primary share-copy-full">Copy for Instagram / Social</button>
            <a href="#" class="btn btn-secondary share-twitter" style="text-align:center;text-decoration:none" target="_blank" rel="noopener">Share to X (Twitter)</a>
            <a href="#" class="btn btn-secondary share-facebook" style="text-align:center;text-decoration:none" target="_blank" rel="noopener">Share to Facebook</a>
            <button class="btn btn-secondary share-copy-link">Copy Link Only</button>
          </div>
          <textarea id="share-full-text" style="display:none"></textarea>
        </div>
      </div>`;
    div.onclick = () => div.classList.remove('show');
    document.body.appendChild(div);
    const ta = div.querySelector('#share-full-text');
    if (ta) ta.value = fullText || '';
    div.querySelector('.share-copy-full').onclick = () => {
        navigator.clipboard.writeText(ta.value || fullText);
        showToast('Copied! Paste into Instagram or any app', SIC.check);
    };
    div.querySelector('.share-copy-link').onclick = () => {
        navigator.clipboard.writeText(url);
        showToast('Link copied!', SIC.check);
    };
    div.querySelector('.share-twitter').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent((fullText || '').slice(0, 200) + (fullText && fullText.length > 200 ? '...' : ''));
    div.querySelector('.share-facebook').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    div.classList.add('show');
}

async function showStudentResults(gameId) {
    try {
        const res = await fetchWithAuth(`${BACKEND_URL}/api/analysis/${gameId}`);
        const data = await res.json();

        const detailPanel = document.getElementById(`student-video-detail-${gameId}`);
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
            { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>', value: videoStats.frames_analyzed || 0, label: 'Frames Analyzed' },
            { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>', value: playerStats.total_detections || 0, label: 'Player Detections' },
            { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>', value: (playerStats.avg_confidence || 0) + '%', label: 'Avg Confidence' },
            { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>', value: ballStats.total_detections || 0, label: 'Ball Detections' },
            { icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="16" y2="14"></line><line x1="8" y1="18" x2="16" y2="18"></line></svg>', value: eventStats.total || 0, label: 'Events Detected' },
        ];

        const statsHtml = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-bottom: 20px;">
            ${cards.map(c => `<div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 12px;">
                <div style="color:var(--orange);margin-bottom:8px">${c.icon}</div>
                <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${c.value}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${c.label}</div>
            </div>`).join('')}
        </div>`;

        const chartData = buildStudentChartData(playerStats, ballStats, eventStats, teamStats, analysis.ai_insights);
        const chartsHtml = chartData ? `<div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h3 style="font-size: 1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">Performance Breakdown</h3>
            <div style="display:flex;flex-direction:column;gap:14px">
                ${chartData.map(d => `<div>
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

        const coachHtml = analysis.ai_insights ? `<div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h3 style="font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
                AI Coach Feedback
            </h3>
            <div style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${analysis.ai_insights}</div>
        </div>` : '';

        const events = data.events || [];
        const eventsHtml = events.length > 0 ? `<div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
            <h3 style="font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Detected Game Events
            </h3>
            <div style="max-height: 200px; overflow-y: auto; padding-right: 8px;">
                ${events.map(ev => {
                    const ts = ev.timestamp_seconds || ev.timestamp || 0;
                    const typeLabel = (ev.event_type || ev.type || ev.description || '').replace(/_/g, ' ');
                    return `<div style="display: flex; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--border);">
                        <span style="color: var(--orange); font-family: monospace; font-size: 0.85rem;">${Math.floor(ts / 60)}:${String(Math.floor(ts % 60)).padStart(2, '0')}</span>
                        <span style="font-size: 0.9rem; color: var(--text-secondary);">${typeLabel}</span>
                    </div>`;
                }).join('')}
            </div>
        </div>` : '';

        const game = data.game || {};
        const shareTitle = game.title || game.file_name || 'Game Analysis';
        const shareBar = buildStudentShareBar(shareTitle, game.opponent || '', game.date || '', analysis, stats);
        detailPanel.innerHTML = shareBar + statsHtml + chartsHtml + coachHtml + eventsHtml;

        const shareBtn = detailPanel.querySelector('[data-share-analysis]');
        if (shareBtn) shareBtn.addEventListener('click', () => openStudentShareMenu(gameId, shareTitle, game.opponent, game.date, analysis, stats));
    } catch (err) {
        console.error('Failed to load results:', err);
        const detailPanel = document.getElementById(`student-video-detail-${gameId}`);
        if (detailPanel) {
            detailPanel.innerHTML = `<div style="color:var(--red);font-size:13px">Failed to load analysis: ${err.message}</div>`;
        }
    }
}

function addClipToList(title, status) {
    if (typeof loadStudentClips === 'function') loadStudentClips();
    else renderMyClips();
}

// ===== MESSAGES =====
function openMessage(id) {
    const msg = MESSAGES.find(m => m.id === id);
    if (!msg) return;

    // Mark as read
    msg.unread = false;
    updateUnreadBadge();

    const detail = document.getElementById('message-detail-view');
    const list = document.getElementById('message-list-view');

    detail.innerHTML = `
    <button class="message-detail-back" onclick="closeMessageDetail()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back to messages
    </button>
    <div style="margin-bottom:12px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="coach-badge">Coach</span>
          <span style="font-weight:700;font-size:15px;">${msg.from}</span>
        </div>
        <span style="font-size:11px;color:var(--text-muted)">${msg.time}</span>
      </div>
      <span class="badge badge-blue">${msg.category}</span>
    </div>
    <div class="message-detail-body">${msg.full}</div>
    ${msg.clip ? `
      <div class="attached-clip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>${msg.clip}</span>
      </div>
    ` : ''}
    <div class="message-detail-meta">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      Received ${msg.time}
    </div>
  `;

    list.style.display = 'none';
    detail.classList.add('active');
    messageDetailOpen = true;
}

function closeMessageDetail() {
    const detail = document.getElementById('message-detail-view');
    const list = document.getElementById('message-list-view');

    detail.classList.remove('active');
    list.style.display = 'block';
    messageDetailOpen = false;

    // Re-render message list to update read status
    renderMessages();
}

function renderMessages() {
    const container = document.getElementById('messages-container');
    if (!container) return;

    if (MESSAGES.length === 0) {
        container.innerHTML = `<div class="empty-state"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><p>No messages yet</p></div>`;
        return;
    }

    container.innerHTML = MESSAGES.map(m => `
    <div class="message-item ${m.unread ? 'unread' : ''}" onclick="openMessage(${m.id})">
      <div class="message-header">
        <div class="message-from">
          <span class="coach-badge">Coach</span>
          ${m.from}
        </div>
        <span class="message-time">${m.time}</span>
      </div>
      <div class="message-category">
        <span class="badge badge-blue">${m.category}</span>
      </div>
      <div class="message-preview">${m.preview}</div>
    </div>
  `).join('');
}

function updateUnreadBadge() {
    const count = MESSAGES.filter(m => m.unread).length;
    const badge = document.getElementById('msg-badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// ===== SPARKLINE DRAWING =====
function drawSparkline(canvasId, values, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const min = Math.min(...values) - 2;
    const max = Math.max(...values) + 2;
    const range = max - min;

    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color.replace(')', ', 0.2)').replace('rgb', 'rgba'));
    gradient.addColorStop(1, color.replace(')', ', 0)').replace('rgb', 'rgba'));

    ctx.beginPath();
    values.forEach((v, i) => {
        const x = (i / (values.length - 1)) * w;
        const y = h - ((v - min) / range) * (h - 8);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    values.forEach((v, i) => {
        const x = (i / (values.length - 1)) * w;
        const y = h - ((v - min) / range) * (h - 8);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Draw last point
    const lastX = w;
    const lastY = h - ((values[values.length - 1] - min) / range) * (h - 8);
    ctx.beginPath();
    ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

// ===== PROFILE ACTIONS =====
function handleLogout() {
    const token = getStudentAuthToken();
    setStudentAuthToken(null);
    const appEl = document.getElementById('student-app');
    const authEl = document.getElementById('student-auth');
    if (appEl) appEl.classList.remove('active');
    if (authEl) {
        authEl.classList.remove('hidden');
        authEl.style.visibility = 'visible';
        authEl.style.opacity = '1';
    }

    // Reset login form
    const emailEl = document.getElementById('student-email');
    const codeEl = document.getElementById('student-code');
    if (emailEl) emailEl.value = '';
    if (codeEl) codeEl.value = '';
    const btn = document.getElementById('student-login-btn');
    if (btn) {
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg> Sign In`;
        btn.disabled = false;
    }

    currentTab = 'home';
    showToast('Logged out', SIC.wave);
    if (token) fetch(`${BACKEND_URL}/api/auth/logout`, { method: 'POST', headers: { 'Authorization': 'Bearer ' + token } }).catch(() => {});
}

// ===== RENDER HOME PAGE =====
const STAT_ICONS = {
    target: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    users: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    globe: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
};

const INSIGHT_ICONS = {
    strength: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    focus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    trending: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
};

function renderHome() {
    const s = STUDENT;

    // Stats row
    const statsEl = document.getElementById('home-stats');
    if (statsEl) {
        statsEl.innerHTML = Object.entries(s.stats).map(([key, st]) => `
          <div class="stat-card">
            <div class="stat-card-icon ${st.color}">${STAT_ICONS[st.icon] || ''}</div>
            <div class="stat-label">${key.toUpperCase()}</div>
            <div class="stat-value">${st.value}</div>
            <div class="stat-change ${st.change > 0 ? 'up' : ''}">${st.change > 0 ? '↑ ' + st.change + '% this month' : 'No data yet'}</div>
          </div>`).join('');
    }

    // Shooting breakdown
    const shootingEl = document.getElementById('home-shooting');
    if (shootingEl) {
        const bars = [
            { label: 'Field Goal %', value: s.shooting.fg, cls: '' },
            { label: '3-Point %', value: s.shooting.three, cls: ' blue' },
            { label: 'Free Throw %', value: s.shooting.ft, cls: ' green' },
        ];
        shootingEl.innerHTML = bars.map(b => `
          <div class="perf-bar-group">
            <div class="perf-bar-label"><span>${b.label}</span><span>${b.value}%</span></div>
            <div class="perf-bar"><div class="perf-bar-fill${b.cls}" style="width:${b.value}%"></div></div>
          </div>`).join('');
    }

    // Recent games
    const gamesEl = document.getElementById('home-games');
    if (gamesEl) {
        if (s.games.length === 0) {
            gamesEl.innerHTML = `<div class="empty-state"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="12" cy="12" r="3"/></svg><p>No games played yet</p></div>`;
        } else {
            gamesEl.innerHTML = s.games.map((g, i) => `
              <div class="game-item" onclick="openGameDetail(${i})">
                <div class="game-item-left">
                  <div class="game-item-teams">${g.opponent}</div>
                  <div class="game-item-date">${g.date} · <span class="badge badge-${g.result === 'W' ? 'green' : 'red'} badge-xs">${g.result}</span></div>
                </div>
                <div class="game-item-right">
                  <div class="game-item-score">${g.score}</div>
                  <div class="game-item-stats">${g.pts} pts · ${g.ast} ast · ${g.reb} reb</div>
                </div>
              </div>`).join('');
        }
    }

    // Profile stats
    const profileStats = document.getElementById('profile-stats');
    if (profileStats) {
        profileStats.innerHTML = `
          <div><div class="stat-big">${s.stats.ppg.value}</div><div class="stat-small">PPG</div></div>
          <div><div class="stat-big">${s.stats.apg.value}</div><div class="stat-small">APG</div></div>
          <div><div class="stat-big">${s.shooting.fg}%</div><div class="stat-small">FG%</div></div>`;
    }

    // Coach insights
    const insightsEl = document.getElementById('home-insights');
    if (insightsEl) {
        if (s.insights.length === 0) {
            insightsEl.innerHTML = `<div class="empty-state"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg><p>No coach insights yet</p></div>`;
        } else {
            insightsEl.innerHTML = s.insights.map(ins => `
              <div class="insight-card ${ins.type}">
                <div class="insight-card-title">${INSIGHT_ICONS[ins.type] || ''} ${ins.title}</div>
                <div class="insight-card-text">${ins.text}</div>
              </div>`).join('');
        }
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', async () => {
    loadStudentTheme();

    // Restore session if valid token exists
    const token = getStudentAuthToken();
    if (token) {
        try {
            const res = await fetchWithAuth(`${BACKEND_URL}/api/auth/me`);
            if (res.ok) {
                const data = await res.json();
                const user = data.user || {};
                if (user.user_type === 'player') {
                    currentStudentUser = user;
                    STUDENT.name = user.name || '';
                    STUDENT.email = user.email || '';
                    document.getElementById('student-auth').classList.add('hidden');
                    document.getElementById('student-app').classList.add('active');
                    const firstName = (user.name || 'Player').split(' ')[0];
                    const titleEl = document.querySelector('#page-home .page-title');
                    if (titleEl) titleEl.textContent = `Hey, ${firstName}!`;
                } else {
                    setStudentAuthToken(null);
                }
            } else {
                setStudentAuthToken(null);
            }
        } catch {
            setStudentAuthToken(null);
        }
    }

    renderHome();
    renderMessages();
    updateUnreadBadge();
    loadStudentClips();
    renderDrills();

    // Draw sparklines after a short delay to ensure layout (skip if no data)
    setTimeout(() => {
        if (STUDENT.trend && STUDENT.trend.length > 0) {
            drawSparkline('trend-canvas', STUDENT.trend, 'rgb(212, 115, 26)');
        }
    }, 300);

    // Login on enter key
    document.getElementById('student-code').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleStudentLogin();
    });
    document.getElementById('student-email').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') document.getElementById('student-code').focus();
    });

    // Blur validation for login & signup fields
    ['student-email', 'student-code', 'signup-name', 'signup-email', 'signup-password'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', () => clearFieldError(el));
        el.addEventListener('blur', () => {
            if (!el.value.trim()) showFieldError(el, 'This field is required');
            else if (id.includes('email') && !/\S+@\S+\.\S+/.test(el.value.trim())) showFieldError(el, 'Enter a valid email');
            else clearFieldError(el);
        });
    });

    // ===== DRAG-AND-DROP for student clip upload =====
    const uploadZone = document.getElementById('student-upload-zone');
    const clipInput = document.getElementById('clip-file-input');
    if (uploadZone && clipInput) {
        uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.classList.add('dragover'); });
        uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.classList.remove('dragover');
            clipInput.files = e.dataTransfer.files;
            clipInput.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
});

// ===== GAME DETAIL MODAL =====
function openGameDetail(gameIdx) {
    const game = STUDENT.games[gameIdx];
    if (!game) return;
    const overlay = document.getElementById('game-detail-overlay');
    document.getElementById('game-detail-title').textContent = game.opponent;

    const won = game.result === 'W';
    const body = document.getElementById('game-detail-body');
    body.innerHTML = `
      <div class="game-detail-score">
        <div class="score-big">${game.score}</div>
        <div class="score-label">${game.date} · <span style="color:${won ? 'var(--green)' : 'var(--red)'};font-weight:700">${won ? 'Win' : 'Loss'}</span></div>
      </div>
      <div class="game-detail-stats">
        <div class="game-detail-stat"><div class="val">${game.pts}</div><div class="lbl">PTS</div></div>
        <div class="game-detail-stat"><div class="val">${game.ast}</div><div class="lbl">AST</div></div>
        <div class="game-detail-stat"><div class="val">${game.reb}</div><div class="lbl">REB</div></div>
        <div class="game-detail-stat"><div class="val">${game.stl || 0}</div><div class="lbl">STL</div></div>
        <div class="game-detail-stat"><div class="val">${game.blk || 0}</div><div class="lbl">BLK</div></div>
        <div class="game-detail-stat"><div class="val">${game.to || 0}</div><div class="lbl">TO</div></div>
        <div class="game-detail-stat"><div class="val">${game.fgm || '-'}/${game.fga || '-'}</div><div class="lbl">FG</div></div>
        <div class="game-detail-stat"><div class="val">${game.tpm || '-'}/${game.tpa || '-'}</div><div class="lbl">3PT</div></div>
        <div class="game-detail-stat"><div class="val">${game.ftm || '-'}/${game.fta || '-'}</div><div class="lbl">FT</div></div>
      </div>`;
    overlay.classList.add('active');
}

function closeGameDetail() {
    document.getElementById('game-detail-overlay').classList.remove('active');
}

function renderMyClips() {
    const list = document.getElementById('my-clips-list');
    if (!list) return;

    if (MY_CLIPS.length === 0) {
        list.innerHTML = `<div class="empty-state">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
      <p>No clips uploaded yet.<br>Upload your first clip above!</p>
    </div>`;
        return;
    }

    list.innerHTML = MY_CLIPS.map((c, i) => `
    <div class="clip-item" style="cursor:pointer">
      <div class="clip-item-info" onclick="openClipDetail(${i})">
        <div class="clip-item-title">${c.title}</div>
        <div class="clip-item-meta">${c.date}</div>
      </div>
      <span class="badge ${c.status === 'AI Analyzed' ? 'badge-green' : 'badge-blue'}">${c.status}</span>
      <button class="btn-icon" onclick="event.stopPropagation();deleteStudentClip(${i})" title="Remove clip" style="flex-shrink:0;padding:6px">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
  `).join('');
}

function deleteStudentClip(idx) {
    if (idx < 0 || idx >= MY_CLIPS.length) return;
    const clip = MY_CLIPS[idx];
    if (!confirm(`Remove "${clip.title}" from your clips?`)) return;
    MY_CLIPS.splice(idx, 1);
    renderMyClips();
    showToast('Clip removed', SIC.film);
}

function openClipDetail(idx) {
    const clip = MY_CLIPS[idx];
    if (!clip) return;
    const overlay = document.getElementById('game-detail-overlay');
    document.getElementById('game-detail-title').textContent = clip.title;
    const body = document.getElementById('game-detail-body');
    body.innerHTML = `
      <div style="text-align:center;padding:16px 0">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="1.5" style="margin-bottom:12px"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        <div style="font-size:14px;font-weight:600;margin-bottom:4px">${clip.title}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px">${clip.date}</div>
        <span class="badge ${clip.status === 'AI Analyzed' ? 'badge-green' : 'badge-blue'}">${clip.status}</span>
      </div>
      ${clip.analysis ? `<div style="margin-top:16px;padding:14px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:13px;line-height:1.6">${clip.analysis}</div>` : ''}`;
    overlay.classList.add('active');
}

// ===== SETTINGS MODAL =====
const SETTINGS_CONTENT = {
    team: {
        title: 'Team Info',
        html: `
      <div class="modal-section-title">Team Details</div>
      <div class="empty-state" style="padding:24px"><p>Team info will appear here when your coach adds it.</p></div>
    `
    },
    coach: {
        title: 'Coach',
        html: `
      <div class="modal-section-title">Coach Profile</div>
      <div class="empty-state" style="padding:24px"><p>Coach contact info will appear here when available.</p></div>
    `
    },
    about: {
        title: 'About BenchPro',
        html: `
      <div style="text-align:center;padding:16px 0;">
        <img src="logo.png" alt="BenchPro" style="width:56px;height:56px;border-radius:50%;margin-bottom:10px;border:2px solid rgba(212,115,26,0.3);">
        <div style="font-size:20px;font-weight:900;letter-spacing:2px;">BENCH<span style="color:var(--orange)">PRO</span></div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">Fair Play. Smart Coaching.</div>
      </div>
      <div class="modal-section-title">App Info</div>
      <div class="modal-info-row"><span class="modal-info-label">Version</span><span class="modal-info-value">1.0.0</span></div>
      <div class="modal-info-row"><span class="modal-info-label">Build</span><span class="modal-info-value">2026.02.20</span></div>
      <div class="modal-info-row"><span class="modal-info-label">Platform</span><span class="modal-info-value">Player Mobile</span></div>
      <div class="modal-section-title">Features</div>
      <div class="modal-info-row"><span class="modal-info-label">Personal Stats</span><span class="modal-info-value" style="color:var(--green)">Active</span></div>
      <div class="modal-info-row"><span class="modal-info-label">Clip Upload</span><span class="modal-info-value" style="color:var(--green)">Active</span></div>
      <div class="modal-info-row"><span class="modal-info-label">Coach Messages</span><span class="modal-info-value" style="color:var(--green)">Active</span></div>
      <div class="modal-info-row"><span class="modal-info-label">AI Analysis</span><span class="modal-info-value" style="color:var(--text-muted)">Coach Only</span></div>
      <div class="modal-section-title">Legal</div>
      <div class="modal-info-row"><span class="modal-info-label">Privacy Policy</span><span class="modal-info-value" style="color:var(--blue)">View →</span></div>
      <div class="modal-info-row"><span class="modal-info-label">Terms of Service</span><span class="modal-info-value" style="color:var(--blue)">View →</span></div>
      <div style="text-align:center;padding:16px 0;font-size:11px;color:var(--text-muted);">
        &copy; 2026 BenchPro. All rights reserved.
      </div>
    `
    }
};

function openSettingsModal(type) {
    const data = SETTINGS_CONTENT[type];
    if (!data) return;

    document.getElementById('settings-modal-title').textContent = data.title;
    document.getElementById('settings-modal-body').innerHTML = data.html;
    document.getElementById('settings-modal-overlay').classList.add('active');
}

function closeSettingsModal() {
    document.getElementById('settings-modal-overlay').classList.remove('active');
}

// ===== NOTIFICATION TOGGLE =====
function toggleNotifications(input) {
    if (input.checked) {
        showToast('Push notifications enabled', SIC.bell);
    } else {
        showToast('Push notifications disabled', SIC.bellOff);
    }
}

// ===== DRILLS =====
function renderDrills() {
    const activeList = document.getElementById('drills-list');
    const doneList = document.getElementById('drills-completed-list');
    if (!activeList || !doneList) return;

    const active = DRILLS.filter(d => !d.completed);
    const done = DRILLS.filter(d => d.completed);

    const badge = document.getElementById('drills-remaining-badge');
    if (badge) badge.textContent = active.length + ' remaining';

    activeList.innerHTML = active.length === 0
        ? `<div class="empty-state"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><p>All drills completed!</p></div>`
        : active.map(d => drillCardHTML(d)).join('');

    doneList.innerHTML = done.length === 0
        ? `<div class="empty-state" style="padding:20px"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg><p>No completed drills yet</p></div>`
        : done.map(d => drillCardHTML(d)).join('');

    updateDrillProgress();
}

function drillCardHTML(d) {
    return `
    <div class="drill-card ${d.completed ? 'completed' : ''}" onclick="openDrillDetail(${d.id})">
        <div class="drill-card-left">
            <div class="drill-card-icon">${d.icon}</div>
            <div class="drill-card-info">
                <div class="drill-card-title">${d.title}</div>
                <div class="drill-card-meta">${d.duration} min · ${d.category} · ${d.difficulty}</div>
            </div>
        </div>
        ${d.completed
            ? `<span class="badge badge-green">${SIC.check} Done</span>`
            : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>'
        }
    </div>`;
}

function updateDrillProgress() {
    const total = DRILLS.length;
    const done = DRILLS.filter(d => d.completed).length;
    const pct = total > 0 ? done / total : 0;
    const circumference = 2 * Math.PI * 34;
    const offset = circumference * (1 - pct);

    const ring = document.getElementById('drill-ring-fill');
    if (ring) ring.setAttribute('stroke-dashoffset', offset);

    const text = document.getElementById('drill-progress-text');
    if (text) text.textContent = done + '/' + total;
}

function openDrillDetail(id) {
    const drill = DRILLS.find(d => d.id === id);
    if (!drill) return;

    let modal = document.getElementById('drill-detail-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'settings-modal-overlay';
        modal.id = 'drill-detail-modal';
        modal.onclick = (e) => { if (e.target === modal) closeDrillDetail(); };
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
    <div class="settings-modal" onclick="event.stopPropagation()">
        <div class="settings-modal-header">
            <h3>${drill.icon} ${drill.title}</h3>
            <button class="settings-modal-close" onclick="closeDrillDetail()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="settings-modal-body">
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
                <span class="badge badge-orange">${drill.duration} min</span>
                <span class="badge badge-blue">${drill.category}</span>
                <span class="badge ${drill.difficulty === 'Hard' ? 'badge-red' : drill.difficulty === 'Easy' ? 'badge-green' : 'badge-yellow'}">${drill.difficulty}</span>
            </div>
            <div style="font-size:14px;color:var(--text-primary);line-height:1.7;margin-bottom:20px;">${drill.description}</div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:20px;display:flex;align-items:center;gap:6px;">
                <span class="coach-badge">Coach</span> Assigned by ${drill.assignedBy}
            </div>
            ${drill.completed
                ? '<button class="btn btn-secondary" style="width:100%" onclick="uncompleteDrill(' + drill.id + ')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-3px;margin-right:6px"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>Mark Incomplete</button>'
                : '<button class="btn btn-primary" style="width:100%" onclick="completeDrill(' + drill.id + ')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-3px;margin-right:6px"><polyline points="20 6 9 17 4 12"></polyline></svg>Mark Complete</button>'
            }
        </div>
    </div>`;

    modal.classList.add('active');
}

function closeDrillDetail() {
    const modal = document.getElementById('drill-detail-modal');
    if (modal) modal.classList.remove('active');
}

function completeDrill(id) {
    const drill = DRILLS.find(d => d.id === id);
    if (drill) {
        drill.completed = true;
        showToast(`"${drill.title}" completed!`, SIC.check);
        closeDrillDetail();
        renderDrills();
    }
}

function uncompleteDrill(id) {
    const drill = DRILLS.find(d => d.id === id);
    if (drill) {
        drill.completed = false;
        showToast(`"${drill.title}" moved back to active`, SIC.undo);
        closeDrillDetail();
        renderDrills();
    }
}
