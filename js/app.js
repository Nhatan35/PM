/* ==========================================================================
   Main Application Controller: SPA Router, Views, Persistence & JSON Backup
   ========================================================================== */
(function () {
  const STORAGE_KEY = 'pm_foundation_dechange_v1';

  const defaultState = {
    theme: 'light',
    completed: [],
    notes: {},
    quizScores: {},
    lifecycleMode: 'traditional',
    lifecyclePhase: 'initiation'
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      const parsed = JSON.parse(raw);
      return {
        ...defaultState,
        ...parsed,
        completed: Array.isArray(parsed.completed) ? parsed.completed : [],
        notes: parsed.notes || {},
        quizScores: parsed.quizScores || {}
      };
    } catch {
      return { ...defaultState };
    }
  }

  let state = loadState();
  let currentRoute = 'home';

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage quota errors
    }
    updateProgressUI();
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }

  function updateProgressUI() {
    const totalMods = window.PMApp.data.modules.length;
    const doneMods = state.completed.length;
    const p = window.PMApp.projectStore ? window.PMApp.projectStore.get() : null;
    const gatesDone = p ? [p.gates.g1, p.gates.g2, p.gates.g3, p.gates.g4].filter(Boolean).length : 0;
    const totalUnits = totalMods + 4;
    const doneUnits = doneMods + gatesDone;
    const pct = totalUnits ? Math.round((doneUnits / totalUnits) * 100) : 0;
    const pctEl = document.getElementById('progressPercent');
    const fillEl = document.getElementById('progressFill');
    if (pctEl) pctEl.textContent = `${pct}% (${gatesDone}/4 Gates)`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    renderSidebar();
  }

  /* ------------------------------------------------------------------------
     Sidebar Navigation
     ------------------------------------------------------------------------ */
  function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;
    const modules = window.PMApp.data.modules;
    const p = window.PMApp.projectStore ? window.PMApp.projectStore.get() : { gates: {} };

    const item = (route, badge, label, isDone) => {
      const active = currentRoute === route || (route === 'labs' && currentRoute.startsWith('labs')) || (route === 'practice' && currentRoute.startsWith('practice'));
      return `
        <button class="nav-item ${active ? 'active' : ''}" data-route="${route}">
          <span class="nav-badge">${badge}</span>
          <span class="nav-text">${label}</span>
          ${isDone ? '<span class="nav-check" title="Đã hoàn thành">✓</span>' : ''}
        </button>
      `;
    };

    nav.innerHTML = `
      <div class="nav-group-label">🚀 Thực hành Dự án Sống (4 Chặng)</div>
      ${item('stage/1', 'G1', 'Chặng 1: Initiation Studio', !!p.gates.g1)}
      ${item('stage/2', 'G2', 'Chặng 2: Planning Studio', !!p.gates.g2)}
      ${item('stage/3', 'G3', 'Chặng 3: Vận hành & Hybrid', !!p.gates.g3)}
      ${item('stage/4', 'G4', 'Chặng 4: Bàn giao & Hồ sơ', !!p.gates.g4)}

      <div class="nav-group-label">Tổng quan &amp; Thực chiến</div>
      ${item('home', '🏠', 'Bản đồ Vòng đời & IPO', false)}
      ${item('warroom', '⚔️', 'Phòng Tình Huống (10 War Room)', false)}
      ${item('labs', '🧪', '6 Phòng Lab & Bài tập Tính toán', false)}
      ${item('casestudy', '🏢', '2 Case Study A–Z', false)}
      ${item('templates', '📄', '10 Biểu mẫu Thực chiến', false)}
      ${item('practice', '🎯', '35 Quiz & 67 Flashcards', false)}

      <div class="nav-group-label">Tra cứu Giáo trình (7 Module)</div>
      ${modules.map(m => item(`module/${m.id}`, m.code, m.title, state.completed.includes(m.id))).join('')}
    `;

    nav.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        navigate(btn.dataset.route);
        closeMobileSidebar();
      });
    });
  }

  function renderMissionBar(activeStageNum) {
    const p = window.PMApp.projectStore.get();
    const steps = [
      { n: 1, gate: 'Gate 1', title: '1. Initiation Studio', sub: 'Charter, Stakeholder', passed: p.gates.g1 },
      { n: 2, gate: 'Gate 2', title: '2. Planning Studio', sub: 'WBS, PERT, CPM, RACI', passed: p.gates.g2 },
      { n: 3, gate: 'Gate 3', title: '3. Vận hành & Hybrid', sub: 'Kanban, EVM/MTA, CR', passed: p.gates.g3 },
      { n: 4, gate: 'Gate 4', title: '4. Handover & Hồ sơ', sub: 'UAT, Abnahme, Dossier', passed: p.gates.g4 }
    ];
    return `
      <div class="mission-bar no-print">
        ${steps.map(s => `
          <button class="mission-step ${activeStageNum === s.n ? 'active' : ''} ${s.passed ? 'passed' : ''}" data-go="stage/${s.n}">
            <div class="mission-step-top">
              <span>${s.gate}</span>
              <span>${s.passed ? '✓ PASSED' : activeStageNum === s.n ? '● ĐANG LÀM' : 'Mở →'}</span>
            </div>
            <div class="mission-step-title">${s.title}</div>
            <div class="mission-step-sub">${s.sub}</div>
          </button>
        `).join('')}
      </div>
    `;
  }

  function renderStageView(root, stageNum) {
    const n = Number(stageNum) || 1;
    root.innerHTML = `${renderMissionBar(n)}<div id="stageMount"></div>`;
    root.querySelectorAll('[data-go]').forEach(el => {
      el.addEventListener('click', () => navigate(el.dataset.go));
    });
    const mount = root.querySelector('#stageMount');
    if (n === 1) window.PMApp.studio.renderStage1(mount, navigate);
    else if (n === 2) window.PMApp.studio.renderStage2(mount, navigate);
    else if (n === 3) window.PMApp.studio.renderStage3(mount, navigate);
    else window.PMApp.studio.renderStage4(mount, navigate);
  }

  function closeMobileSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarBackdrop').classList.remove('open');
  }

  /* ------------------------------------------------------------------------
     VIEW 1: HOME — HERO + INTERACTIVE LIFECYCLE EXPLORER + MODULE GRID
     ------------------------------------------------------------------------ */
  function renderHome(root) {
    const modules = window.PMApp.data.modules;
    const done = state.completed.length;
    const lc = window.PMApp.data.lifecycle;
    const modeObj = lc.modes[state.lifecycleMode] || lc.modes.traditional;
    const phaseObj = modeObj.phases.find(p => p.id === state.lifecyclePhase) || modeObj.phases[0];

    root.innerHTML = `
      <section class="hero-banner">
        <div class="hero-eyebrow">📘 Giáo trình chuẩn André Dechange (Springer Gabler)</div>
        <h1>Project Management Foundation: Vòng Đời Dự Án Từ Khởi Tạo Đến Bàn Giao</h1>
        <p>Lộ trình tự học có hệ thống giúp bạn làm chủ trọn vẹn 4 pha vòng đời (Initiation → Planning → Execution &amp; Controlling → Handover/Abnahme), hiểu sâu bản chất Traditional, Agile và 5 hình thái Hybrid đặc trưng của André Dechange.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" data-go="stage/1">🚀 Bắt đầu Thực hành Dự án Sống (Chặng 1 → 4)</button>
          <button class="btn btn-secondary" style="background:rgba(255,255,255,0.12);color:#fff;border-color:rgba(255,255,255,0.25);" data-go="warroom">⚔️ 10 Tình huống War Room</button>
          <button class="btn btn-secondary" style="background:rgba(255,255,255,0.12);color:#fff;border-color:rgba(255,255,255,0.25);" data-go="labs/drills">🧮 Bài tập Tính toán PM</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item"><div class="stat-value">4 Chặng</div><div class="stat-label">Tự tay làm &amp; chạy dự án (G1 → G4)</div></div>
          <div class="stat-item"><div class="stat-value">10 Cases</div><div class="stat-label">PM War Room + Mẫu câu thực chiến</div></div>
          <div class="stat-item"><div class="stat-value">6 Labs</div><div class="stat-label">Stacey, Triangle, Gate, CPM, EVM, Drills</div></div>
          <div class="stat-item"><div class="stat-value">10 Mẫu · 35 Quiz</div><div class="stat-label">+ 67 thẻ Flashcards EN–VI–DIN</div></div>
        </div>
      </section>

      <!-- 4-Stage Live Project Mission Launcher -->
      <section style="margin-bottom:1.25rem;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.55rem;">
          <h2 style="margin:0;">🚀 Hành trình Tự Tay Điều Hành Dự Án (Gate 1 → Gate 4)</h2>
          <span style="font-size:0.82rem;color:var(--text-muted);">Học đến đâu làm trực tiếp đến đó — có Auto-Reviewer bắt lỗi</span>
        </div>
        ${renderMissionBar(0)}
      </section>

      <!-- Interactive Lifecycle & IPO Explorer -->
      <section class="card">
        <div class="card-header">
          <div>
            <h2 style="margin-bottom:0.25rem;">Bản đồ Vòng đời Dự án &amp; Ma trận IPO Tương tác</h2>
            <p style="margin:0;font-size:0.86rem;">Chuyển đổi 3 góc nhìn phương pháp luận và bấm vào từng pha để tra cứu <strong>Đầu vào → Hoạt động → Đầu ra → Tiêu chí vượt Gate</strong>.</p>
          </div>
          <div class="mode-switch">
            <button class="mode-btn ${state.lifecycleMode === 'traditional' ? 'active' : ''}" data-mode="traditional">Traditional</button>
            <button class="mode-btn ${state.lifecycleMode === 'agile' ? 'active' : ''}" data-mode="agile">Agile</button>
            <button class="mode-btn ${state.lifecycleMode === 'hybrid' ? 'active' : ''}" data-mode="hybrid">Hybrid (Dechange)</button>
          </div>
        </div>

        <div class="callout callout-insight" style="margin-top:0.25rem;">
          <div class="callout-title">${modeObj.label}</div>
          <div>${modeObj.summary}</div>
        </div>

        <div class="lifecycle-stepper">
          ${modeObj.phases.map(p => `
            <button class="phase-node ${p.id === phaseObj.id ? 'active' : ''}" data-phase="${p.id}">
              <div class="phase-num">${p.num}</div>
              <div class="phase-name">${p.name}</div>
              <span class="phase-gate-tag">🚪 ${p.gate}</span>
            </button>
          `).join('')}
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-top:1rem;">
          <div>
            <h3 style="margin-bottom:0.2rem;">${phaseObj.num}: ${phaseObj.name}</h3>
            <p style="margin:0;font-size:0.88rem;">${phaseObj.goal}</p>
          </div>
          <button class="btn btn-primary btn-sm" data-go="module/${phaseObj.moduleRef}">Học sâu Module liên quan →</button>
        </div>

        <div class="ipo-grid">
          <div class="ipo-box">
            <h4>📥 Inputs (Đầu vào)</h4>
            <ul>${phaseObj.inputs.map(x => `<li>${x}</li>`).join('')}</ul>
          </div>
          <div class="ipo-box">
            <h4>⚙️ Activities &amp; Tools</h4>
            <ul>${phaseObj.activities.map(x => `<li>${x}</li>`).join('')}</ul>
          </div>
          <div class="ipo-box">
            <h4>📦 Deliverables (Đầu ra)</h4>
            <ul>${phaseObj.deliverables.map(x => `<li>${x}</li>`).join('')}</ul>
          </div>
          <div class="ipo-box" style="border-color:var(--primary-border);background:var(--primary-soft);">
            <h4>🚪 ${phaseObj.gate}</h4>
            <ul>${phaseObj.gateCriteria.map(x => `<li>${x}</li>`).join('')}</ul>
          </div>
        </div>
      </section>

      <!-- 7 Modules Roadmap -->
      <section style="margin-top:1.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:0.85rem;">
          <h2 style="margin:0;">Lộ trình 7 Module Học Thuật</h2>
          <span style="font-size:0.82rem;color:var(--text-muted);">Bấm vào bất kỳ Module nào để học chi tiết</span>
        </div>
        <div class="grid-3">
          ${modules.map(m => {
            const isDone = state.completed.includes(m.id);
            return `
              <article class="module-card" data-go="module/${m.id}">
                <div class="module-card-top">
                  <span class="pill ${m.pillClass}">${m.code} · ${m.phaseTag}</span>
                  ${isDone ? '<span class="pill pill-success">✓ Đã xong</span>' : `<span style="font-size:0.75rem;color:var(--text-muted);">~${m.readMinutes} phút</span>`}
                </div>
                <h3>${m.title}</h3>
                <p>${m.summary}</p>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;

    root.querySelectorAll('[data-go]').forEach(el => {
      el.addEventListener('click', () => navigate(el.dataset.go));
    });

    root.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lifecycleMode = btn.dataset.mode;
        saveState();
        renderHome(root);
      });
    });

    root.querySelectorAll('.phase-node').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lifecyclePhase = btn.dataset.phase;
        saveState();
        renderHome(root);
      });
    });
  }

  /* ------------------------------------------------------------------------
     VIEW 2: MODULE LESSON DETAIL + INLINE QUIZ + PERSONAL NOTES
     ------------------------------------------------------------------------ */
  function renderModule(root, moduleId, anchorId) {
    const modules = window.PMApp.data.modules;
    const idx = modules.findIndex(m => m.id === moduleId);
    const m = modules[idx >= 0 ? idx : 0];
    const isDone = state.completed.includes(m.id);
    const prev = idx > 0 ? modules[idx - 1] : null;
    const next = idx < modules.length - 1 ? modules[idx + 1] : null;
    const questions = window.PMApp.data.quizzes[m.id] || [];

    root.innerHTML = `
      <header class="lesson-header">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
          <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <span class="pill ${m.pillClass}">${m.code} · ${m.phaseTag}</span>
            <span style="font-size:0.8rem;color:var(--text-muted);">⏱️ Thời lượng đọc ước tính: ${m.readMinutes} phút</span>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button class="btn btn-secondary btn-sm" id="openLabBtn">🧪 Mở Lab tương ứng</button>
            <button class="btn ${isDone ? 'btn-success' : 'btn-primary'} btn-sm" id="toggleDoneBtn">
              ${isDone ? '✓ Đã hoàn thành Module' : 'Đánh dấu hoàn thành'}
            </button>
          </div>
        </div>
        <h1>${m.title}</h1>
        <p style="margin-bottom:0.5rem;font-size:0.95rem;">${m.subtitle}</p>
        <div class="toc-bar">
          ${m.sections.map(s => `<button class="toc-chip" data-scroll="${s.id}">${s.title}</button>`).join('')}
        </div>
      </header>

      ${m.sections.map(s => `
        <section id="${s.id}" class="section-block">
          <h2>${s.title}</h2>
          ${s.html}
        </section>
      `).join('')}

      <!-- Quick Self-Check Quiz for this Module -->
      ${questions.length ? `
        <section class="section-block" id="module-quiz">
          <h2>🎯 Kiểm tra nhanh kiến thức ${m.code}</h2>
          <p style="font-size:0.86rem;">Trả lời câu hỏi tình huống để củng cố ngay phần vừa học.</p>
          <div id="inlineQuizContainer"></div>
        </section>
      ` : ''}

      <!-- Personal Notes -->
      <section class="notes-panel">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <strong>📝 Ghi chú học tập cá nhân (${m.code})</strong>
          <span id="noteSavedHint" style="font-size:0.75rem;color:var(--text-muted);">Tự động lưu trên trình duyệt</span>
        </div>
        <textarea id="moduleNoteInput" placeholder="Ghi lại ý tâm đắc, câu hỏi hoặc cách áp dụng vào dự án thực tế của bạn...">${window.PMApp.utils.escapeHtml(state.notes[m.id] || '')}</textarea>
      </section>

      <!-- Bottom Nav -->
      <nav class="lesson-footer-nav">
        <div>
          ${prev ? `<button class="btn btn-secondary" data-go="module/${prev.id}">← ${prev.code}: ${prev.title}</button>` : `<button class="btn btn-secondary" data-go="home">← Về Bản đồ Vòng đời</button>`}
        </div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
          <button class="btn ${isDone ? 'btn-success' : 'btn-primary'}" id="toggleDoneBtnBottom">${isDone ? '✓ Đã hoàn thành' : '✓ Hoàn thành bài này'}</button>
          ${next ? `<button class="btn btn-primary" data-go="module/${next.id}">Tiếp: ${next.code} →</button>` : `<button class="btn btn-primary" data-go="casestudy">Xem Case Study A–Z →</button>`}
        </div>
      </nav>
    `;

    root.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.scroll);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    root.querySelector('#openLabBtn').addEventListener('click', () => navigate(`labs/${m.labLink}`));

    const toggleComplete = () => {
      if (state.completed.includes(m.id)) {
        state.completed = state.completed.filter(x => x !== m.id);
        window.PMApp.utils.showToast(`Đã bỏ đánh dấu hoàn thành ${m.code}`);
      } else {
        state.completed.push(m.id);
        window.PMApp.utils.showToast(`Tuyệt vời! Đã hoàn thành ${m.code} 🎉`);
      }
      saveState();
      renderModule(root, m.id);
    };

    root.querySelector('#toggleDoneBtn').addEventListener('click', toggleComplete);
    root.querySelector('#toggleDoneBtnBottom').addEventListener('click', toggleComplete);

    const noteEl = root.querySelector('#moduleNoteInput');
    noteEl.addEventListener('input', () => {
      state.notes[m.id] = noteEl.value;
      saveState();
      const hint = root.querySelector('#noteSavedHint');
      if (hint) hint.textContent = '✓ Đã lưu tự động';
    });

    root.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.go));
    });

    if (questions.length) {
      renderQuizList(root.querySelector('#inlineQuizContainer'), questions, m.id);
    }

    if (anchorId) {
      setTimeout(() => {
        const target = document.getElementById(anchorId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }

  /* ------------------------------------------------------------------------
     VIEW 3: 6 INTERACTIVE LABS HUB
     ------------------------------------------------------------------------ */
  function renderLabs(root, activeLab) {
    const tabs = [
      { id: 'stacey', label: '1. Stacey & 5 Hybrid' },
      { id: 'triangle', label: '2. Magic Triangle' },
      { id: 'stakeholder', label: '3. Stakeholder & Gates' },
      { id: 'cpm', label: '4. CPM & Gantt' },
      { id: 'evm', label: '5. EVM & MTA' },
      { id: 'drills', label: '6. Bài tập Tính toán (7 bài)' }
    ];
    const current = tabs.some(t => t.id === activeLab) ? activeLab : 'stacey';

    root.innerHTML = `
      <header class="lesson-header" style="margin-bottom:1.1rem;">
        <span class="pill pill-primary">🧪 Learning by Doing · Phủ đủ 4 Pha Vòng đời</span>
        <h1>6 Phòng Lab Thực Hành &amp; Tính Toán Quản Trị Dự Án</h1>
        <p style="margin:0;">Tương tác trực tiếp với các mô hình định lượng, công thức PERT/CPM/EVM/ROI và khung ra quyết định cốt lõi trong sách André Dechange.</p>
      </header>
      <div class="lab-tabs">
        ${tabs.map(t => `<button class="lab-tab ${t.id === current ? 'active' : ''}" data-lab="${t.id}">${t.label}</button>`).join('')}
      </div>
      <div id="labMount"></div>
    `;

    root.querySelectorAll('.lab-tab').forEach(btn => {
      btn.addEventListener('click', () => navigate(`labs/${btn.dataset.lab}`));
    });

    const mount = root.querySelector('#labMount');
    if (window.PMApp.labs[current]) {
      window.PMApp.labs[current](mount);
    }
  }

  /* ------------------------------------------------------------------------
     VIEW 3B: PM WAR ROOM (10 REAL-WORLD SCENARIOS)
     ------------------------------------------------------------------------ */
  function renderWarRoom(root) {
    root.innerHTML = `
      <header class="lesson-header" style="margin-bottom:1.1rem;">
        <span class="pill pill-danger">⚔️ PM War Room · Xử lý Khủng hoảng &amp; Đàm phán Thực chiến</span>
        <h1>Phòng Tình Huống Thực Chiến (10 Kịch Bản PM Khó Nhằn Nhất)</h1>
        <p style="margin:0;">Đối mặt các tình huống thật ngoài doanh nghiệp từ Khởi tạo, Ma trận nguồn lực, Báo động Đỏ EVM, Hybrid lệch pha đến Đàm phán Nghiệm thu Abnahme — kèm <strong>Mẫu câu giao tiếp / Email thực chiến</strong>.</p>
      </header>
      <div id="warRoomMount"></div>
    `;
    window.PMApp.labs.warroom(root.querySelector('#warRoomMount'));
  }

  /* ------------------------------------------------------------------------
     VIEW 4: DUAL END-TO-END CASE STUDIES (NEXUSPORTAL & SMARTFACTORY 4.0)
     ------------------------------------------------------------------------ */
  function renderCaseStudy(root) {
    const cases = window.PMApp.data.caseStudies || [window.PMApp.data.caseStudy];
    let caseIdx = 0;
    let activeIdx = 0;

    function draw() {
      const cs = cases[caseIdx];
      if (activeIdx >= cs.stages.length) activeIdx = 0;
      const stage = cs.stages[activeIdx];
      root.innerHTML = `
        <header class="lesson-header">
          <span class="pill pill-hybrid">🏢 Durchgängiges Praxisbeispiel · 2 Dự án Thực tế Xuyên suốt</span>
          <h1>${cs.title}</h1>
          <p style="margin:0 0 0.9rem;">${cs.subtitle}</p>
          <div class="mode-switch">
            ${cases.map((c, i) => `<button class="mode-btn ${i === caseIdx ? 'active' : ''}" data-mode="${i === 0 ? 'traditional' : 'hybrid'}" data-cidx="${i}">${c.shortLabel}</button>`).join('')}
          </div>
        </header>

        <div class="card">
          <h3 style="margin-bottom:0.6rem;">Hồ sơ bối cảnh dự án</h3>
          <div class="grid-2" style="font-size:0.86rem;">
            <div><strong>Doanh nghiệp:</strong> ${cs.context.company}</div>
            <div><strong>Phân loại:</strong> ${cs.context.classification}</div>
            <div><strong>Ngân sách trần:</strong> ${cs.context.budget}</div>
            <div><strong>Thời lượng:</strong> ${cs.context.duration}</div>
          </div>
          <p style="margin:0.65rem 0 0;font-size:0.86rem;"><strong>Bài toán cốt lõi:</strong> ${cs.context.problem}</p>
        </div>

        <div class="lab-tabs">
          ${cs.stages.map((st, i) => `<button class="lab-tab ${i === activeIdx ? 'active' : ''}" data-sidx="${i}">${st.phase}</button>`).join('')}
        </div>

        <article class="section-block">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
            <span class="pill pill-primary">${stage.phase}</span>
            <span class="pill pill-success">🚪 ${stage.gate}</span>
          </div>
          <h2>${stage.title}</h2>
          ${stage.body}
          <div class="lesson-footer-nav" style="margin-top:1.25rem;">
            <button class="btn btn-secondary btn-sm" id="csPrev" ${activeIdx === 0 ? 'disabled' : ''}>← Giai đoạn trước</button>
            <button class="btn btn-primary btn-sm" id="csNext" ${activeIdx === cs.stages.length - 1 ? 'disabled' : ''}>Giai đoạn tiếp →</button>
          </div>
        </article>
      `;

      root.querySelectorAll('[data-cidx]').forEach(btn => {
        btn.addEventListener('click', () => {
          caseIdx = Number(btn.dataset.cidx);
          activeIdx = 0;
          draw();
        });
      });

      root.querySelectorAll('[data-sidx]').forEach(btn => {
        btn.addEventListener('click', () => {
          activeIdx = Number(btn.dataset.sidx);
          draw();
        });
      });

      const prevBtn = root.querySelector('#csPrev');
      const nextBtn = root.querySelector('#csNext');
      if (prevBtn) prevBtn.addEventListener('click', () => { if (activeIdx > 0) { activeIdx--; draw(); } });
      if (nextBtn) nextBtn.addEventListener('click', () => { if (activeIdx < cs.stages.length - 1) { activeIdx++; draw(); } });
    }

    draw();
  }

  /* ------------------------------------------------------------------------
     VIEW 5: 6 PRACTICAL TEMPLATES GALLERY
     ------------------------------------------------------------------------ */
  function renderTemplates(root) {
    const templates = window.PMApp.data.templates;
    let activeId = templates[0].id;

    function draw() {
      const tpl = templates.find(t => t.id === activeId) || templates[0];
      root.innerHTML = `
        <header class="lesson-header no-print">
          <span class="pill pill-success">📄 Bộ công cụ thực chiến theo 4 pha vòng đời</span>
          <h1>Thư Viện ${templates.length} Biểu Mẫu Quản Trị Dự Án</h1>
          <p style="margin:0;">Xem trực tiếp, sao chép, tải về file Markdown (.md) hoặc in ra để áp dụng ngay cho dự án thật.</p>
        </header>

        <div class="lab-tabs no-print">
          ${templates.map(t => `<button class="lab-tab ${t.id === tpl.id ? 'active' : ''}" data-tid="${t.id}">${t.name}</button>`).join('')}
        </div>

        <div class="card template-preview">
          <div class="card-header no-print">
            <div>
              <span class="pill pill-primary">${tpl.phase}</span>
              <h2 style="margin:0.4rem 0 0.2rem;">${tpl.name}</h2>
              <p style="margin:0;font-size:0.86rem;">${tpl.desc}</p>
            </div>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button class="btn btn-secondary btn-sm" id="copyTplBtn">📋 Copy Markdown</button>
              <button class="btn btn-primary btn-sm" id="dlTplBtn">⬇️ Tải file .md</button>
              <button class="btn btn-secondary btn-sm" id="printTplBtn">🖨️ In / Lưu PDF</button>
            </div>
          </div>

          <pre style="white-space:pre-wrap;background:var(--bg-subtle);padding:1.15rem 1.25rem;border-radius:var(--radius-md);border:1px solid var(--border-color);font-size:0.84rem;line-height:1.65;color:var(--text-primary);overflow-x:auto;margin:0;">${window.PMApp.utils.escapeHtml(tpl.markdown)}</pre>
        </div>
      `;

      root.querySelectorAll('[data-tid]').forEach(btn => {
        btn.addEventListener('click', () => {
          activeId = btn.dataset.tid;
          draw();
        });
      });

      root.querySelector('#copyTplBtn').addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(tpl.markdown).then(() => window.PMApp.utils.showToast('Đã sao chép biểu mẫu Markdown!'));
        }
      });

      root.querySelector('#dlTplBtn').addEventListener('click', () => {
        window.PMApp.utils.downloadText(`${tpl.id}.md`, tpl.markdown, 'text/markdown;charset=utf-8');
        window.PMApp.utils.showToast(`Đã tải xuống ${tpl.id}.md`);
      });

      root.querySelector('#printTplBtn').addEventListener('click', () => window.print());
    }

    draw();
  }

  /* ------------------------------------------------------------------------
     VIEW 6: PRACTICE HUB (QUIZZES & 67 FLASHCARDS + GLOSSARY)
     ------------------------------------------------------------------------ */
  function renderQuizList(targetEl, questions, scopeKey) {
    let answered = {};
    let correctCount = 0;

    function draw() {
      targetEl.innerHTML = questions.map((q, qi) => {
        const chosen = answered[qi];
        const isDone = chosen !== undefined;
        return `
          <div class="card" style="margin-bottom:0.9rem;">
            <div style="font-weight:700;margin-bottom:0.65rem;color:var(--text-primary);">Câu ${qi + 1}: ${q.q}</div>
            <div>
              ${q.options.map((opt, oi) => {
                let cls = '';
                if (isDone) {
                  if (oi === q.answer) cls = 'correct';
                  else if (oi === chosen) cls = 'wrong';
                }
                return `
                  <button class="quiz-option ${cls}" data-qi="${qi}" data-oi="${oi}" ${isDone ? 'disabled' : ''}>
                    <strong>${String.fromCharCode(65 + oi)}.</strong>
                    <span>${opt}</span>
                  </button>
                `;
              }).join('')}
            </div>
            ${isDone ? `
              <div class="callout ${chosen === q.answer ? 'callout-tip' : 'callout-pitfall'}" style="margin-top:0.65rem;margin-bottom:0;">
                <div class="callout-title">${chosen === q.answer ? '✓ Chính xác!' : '✕ Chưa chính xác — Giải thích chuẩn Dechange'}</div>
                <div>${q.explain}</div>
              </div>
            ` : ''}
          </div>
        `;
      }).join('') + `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
          <span style="font-size:0.86rem;font-weight:700;">Kết quả: ${correctCount} / ${questions.length} câu đúng (${Object.keys(answered).length}/${questions.length} đã làm)</span>
          <button class="btn btn-secondary btn-sm" id="resetQuizBtn">↺ Làm lại bộ câu hỏi</button>
        </div>
      `;

      targetEl.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const qi = Number(btn.dataset.qi);
          const oi = Number(btn.dataset.oi);
          if (answered[qi] !== undefined) return;
          answered[qi] = oi;
          if (oi === questions[qi].answer) correctCount++;
          state.quizScores[scopeKey] = { correct: correctCount, total: questions.length };
          saveState();
          draw();
        });
      });

      const resetBtn = targetEl.querySelector('#resetQuizBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          answered = {};
          correctCount = 0;
          draw();
        });
      }
    }

    draw();
  }

  function renderPractice(root, subTab) {
    let tab = subTab === 'flashcards' ? 'flashcards' : subTab === 'exam' ? 'exam' : 'quiz';
    let quizFilter = 'all';
    let cardCat = 'ALL';
    let cardIdx = 0;
    let flipped = false;
    let cards = [...window.PMApp.data.flashcards];

    // Timed Mock Exam state (25 questions / 20 minutes)
    let exam = { active: false, submitted: false, questions: [], answers: {}, secLeft: 20 * 60, timerId: null };

    function stopExamTimer() {
      if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }
    }

    function startMockExam() {
      stopExamTimer();
      const pool = [];
      Object.entries(window.PMApp.data.quizzes).forEach(([mid, list]) => {
        list.forEach(q => pool.push({ ...q, mid }));
      });
      const picked = pool.sort(() => Math.random() - 0.5).slice(0, 25);
      exam = { active: true, submitted: false, questions: picked, answers: {}, secLeft: 20 * 60, timerId: null };
      exam.timerId = setInterval(() => {
        if (!document.getElementById('examTimerDisplay')) { stopExamTimer(); return; }
        exam.secLeft--;
        const mm = String(Math.floor(Math.max(0, exam.secLeft) / 60)).padStart(2, '0');
        const ss = String(Math.max(0, exam.secLeft) % 60).padStart(2, '0');
        const el = document.getElementById('examTimerDisplay');
        if (el) el.textContent = `${mm}:${ss}`;
        if (exam.secLeft <= 0) {
          stopExamTimer();
          exam.submitted = true;
          draw();
        }
      }, 1000);
      draw();
    }

    function draw() {
      const allCats = ['ALL', ...Array.from(new Set(window.PMApp.data.flashcards.map(c => c.cat)))];
      const filteredCards = cardCat === 'ALL' ? cards : cards.filter(c => c.cat === cardCat);
      if (cardIdx >= filteredCards.length) cardIdx = 0;
      const card = filteredCards[cardIdx] || cards[0];

      const allQuestions = Object.values(window.PMApp.data.quizzes).flat();
      const activeQuestions = quizFilter === 'all' ? allQuestions : (window.PMApp.data.quizzes[quizFilter] || []);

      const mm = String(Math.floor(Math.max(0, exam.secLeft) / 60)).padStart(2, '0');
      const ss = String(Math.max(0, exam.secLeft) % 60).padStart(2, '0');

      root.innerHTML = `
        <header class="lesson-header">
          <span class="pill pill-agile">🎯 Active Recall · Ôn tập &amp; Thi thử chuẩn IPMA / CAPM</span>
          <h1>Quiz Tình Huống, Thi Thử Bấm Giờ &amp; ${window.PMApp.data.flashcards.length} Flashcards</h1>
          <p style="margin:0;">Củng cố vững chắc toàn bộ khái niệm, công thức và phản xạ tình huống chuẩn sách André Dechange.</p>
        </header>

        <div class="lab-tabs">
          <button class="lab-tab ${tab === 'quiz' ? 'active' : ''}" data-ptab="quiz">📝 Luyện Quiz (${allQuestions.length} câu)</button>
          <button class="lab-tab ${tab === 'exam' ? 'active' : ''}" data-ptab="exam">⏱️ Thi thử Bấm giờ (25 câu · 20p)</button>
          <button class="lab-tab ${tab === 'flashcards' ? 'active' : ''}" data-ptab="flashcards">🃏 Flashcards &amp; Từ điển (${window.PMApp.data.flashcards.length})</button>
        </div>

        ${tab === 'quiz' ? `
          <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;margin-bottom:1rem;">
            <strong style="font-size:0.84rem;">Lọc theo Module:</strong>
            <select id="quizFilterSelect" class="input-field" style="width:auto;min-width:220px;">
              <option value="all" ${quizFilter === 'all' ? 'selected' : ''}>Tất cả 7 Module (${allQuestions.length} câu)</option>
              ${window.PMApp.data.modules.map(m => `<option value="${m.id}" ${quizFilter === m.id ? 'selected' : ''}>${m.code}: ${m.title}</option>`).join('')}
            </select>
          </div>
          <div id="practiceQuizMount"></div>
        ` : tab === 'exam' ? `
          ${!exam.active ? `
            <div class="card" style="text-align:center;padding:2.2rem 1.5rem;">
              <span class="pill pill-hybrid">⏱️ Đề thi thử tổng hợp · Chuẩn đạt ≥ 75%</span>
              <h2 style="margin:0.7rem 0 0.45rem;">Kiểm Tra Năng Lực PM Foundation (25 Câu · 20 Phút)</h2>
              <p style="max-width:560px;margin:0 auto 1.25rem;">Hệ thống bốc ngẫu nhiên 25 câu tình huống phủ đều 7 Module (Initiation → Planning → Control → Handover → Agile → Hybrid → Soft Skills/PMO). Nộp bài sẽ có biểu đồ phân tích điểm mạnh/yếu theo từng chương.</p>
              <button class="btn btn-primary" id="startExamBtn">🚀 Bắt đầu Thi thử (20:00)</button>
            </div>
          ` : !exam.submitted ? `
            <div class="project-context-bar" style="position:sticky;top:64px;z-index:20;">
              <div>
                <strong>Đã chọn: ${Object.keys(exam.answers).length} / ${exam.questions.length} câu</strong>
              </div>
              <div style="display:flex;align-items:center;gap:0.75rem;">
                <span class="pill ${exam.secLeft < 180 ? 'pill-danger' : 'pill-primary'}" style="font-family:var(--font-mono);font-size:0.9rem;">⏱️ <span id="examTimerDisplay">${mm}:${ss}</span></span>
                <button class="btn btn-success btn-sm" id="submitExamBtn">✓ Nộp bài &amp; Chấm điểm</button>
              </div>
            </div>
            ${exam.questions.map((q, qi) => `
              <div class="card" style="margin-bottom:0.85rem;">
                <div style="font-weight:700;margin-bottom:0.55rem;"><span class="pill pill-primary" style="margin-right:0.4rem;">${q.mid.toUpperCase()}</span> Câu ${qi + 1}: ${q.q}</div>
                ${q.options.map((opt, oi) => `
                  <button class="quiz-option ${exam.answers[qi] === oi ? 'correct' : ''}" data-exq="${qi}:${oi}">
                    <strong>${String.fromCharCode(65 + oi)}.</strong><span>${opt}</span>
                  </button>
                `).join('')}
              </div>
            `).join('')}
          ` : (() => {
            const correct = exam.questions.filter((q, i) => exam.answers[i] === q.answer).length;
            const pct = Math.round((correct / exam.questions.length) * 100);
            const passed = pct >= 75;
            const byMod = {};
            exam.questions.forEach((q, i) => {
              byMod[q.mid] = byMod[q.mid] || { ok: 0, total: 0 };
              byMod[q.mid].total++;
              if (exam.answers[i] === q.answer) byMod[q.mid].ok++;
            });
            return `
              <div class="card" style="border-left:5px solid ${passed ? 'var(--success)' : 'var(--danger)'};">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
                  <div>
                    <span class="pill ${passed ? 'pill-success' : 'pill-danger'}">${passed ? '🏆 ĐẠT CHUẨN CHỨNG CHỈ (≥75%)' : '📚 CHƯA ĐẠT — CẦN ÔN THÊM'}</span>
                    <h2 style="margin:0.45rem 0 0.2rem;">Kết quả: ${correct} / ${exam.questions.length} câu (${pct}%)</h2>
                  </div>
                  <button class="btn btn-primary btn-sm" id="retakeExamBtn">↺ Thi đề mới</button>
                </div>
                <div class="kpi-row">
                  ${Object.entries(byMod).map(([mid, s]) => {
                    const mp = Math.round((s.ok / s.total) * 100);
                    return `<div class="kpi-card"><div class="kpi-label">${mid.toUpperCase()}</div><div class="kpi-val" style="color:${mp >= 75 ? 'var(--success)' : 'var(--danger)'};">${s.ok}/${s.total}</div></div>`;
                  }).join('')}
                </div>
              </div>
              ${exam.questions.map((q, qi) => {
                const pick = exam.answers[qi];
                const ok = pick === q.answer;
                if (ok) return '';
                return `
                  <div class="card" style="border-left:4px solid var(--danger);">
                    <div style="font-weight:700;margin-bottom:0.4rem;">Câu ${qi + 1} (${q.mid.toUpperCase()}): ${q.q}</div>
                    <div style="font-size:0.84rem;color:var(--danger);">✕ Bạn chọn: ${pick !== undefined ? q.options[pick] : '(Bỏ trống)'}</div>
                    <div style="font-size:0.84rem;color:var(--success);margin-top:3px;">✓ Đáp án đúng: ${q.options[q.answer]}</div>
                    <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:5px;">💡 ${q.explain}</div>
                  </div>
                `;
              }).join('')}
            `;
          })()}
        ` : `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:0.8rem;">
              <select id="cardCatSelect" class="input-field" style="width:auto;min-width:210px;">
                ${allCats.map(c => `<option value="${c}" ${c === cardCat ? 'selected' : ''}>${c === 'ALL' ? 'Tất cả nhóm (' + cards.length + ' thẻ)' : c}</option>`).join('')}
              </select>
              <div style="display:flex;gap:0.5rem;align-items:center;">
                <span style="font-size:0.82rem;color:var(--text-muted);">Thẻ ${cardIdx + 1} / ${filteredCards.length}</span>
                <button class="btn btn-secondary btn-sm" id="shuffleCardBtn">🔀 Xáo trộn</button>
              </div>
            </div>

            <div class="flashcard-stage">
              <div class="flashcard ${flipped ? 'flipped' : ''}" id="flashcardBox">
                <span class="pill pill-primary" style="margin-bottom:0.9rem;">${card.cat}</span>
                ${!flipped ? `
                  <h2 style="font-size:1.45rem;margin-bottom:0.65rem;">${card.term}</h2>
                  <p style="font-size:0.82rem;color:var(--text-muted);margin:0;">Bấm vào thẻ để lật xem giải nghĩa chi tiết</p>
                ` : `
                  <div style="font-size:0.78rem;font-weight:700;color:var(--primary);text-transform:uppercase;margin-bottom:0.45rem;">${card.term}</div>
                  <p style="font-size:1rem;color:var(--text-primary);margin:0;max-width:540px;">${card.def}</p>
                `}
              </div>
            </div>

            <div style="display:flex;justify-content:center;gap:0.7rem;margin-top:0.9rem;">
              <button class="btn btn-secondary" id="prevCardBtn">← Thẻ trước</button>
              <button class="btn btn-primary" id="flipCardBtn">↻ Lật thẻ</button>
              <button class="btn btn-secondary" id="nextCardBtn">Thẻ sau →</button>
            </div>
          </div>

          <!-- Full Glossary Table -->
          <div class="card">
            <h3 style="margin-bottom:0.65rem;">📖 Bảng tra cứu toàn bộ thuật ngữ (${filteredCards.length} mục)</h3>
            <div class="table-wrap">
              <table class="pm-table">
                <thead><tr><th style="width:24%;">Thuật ngữ (EN / DE)</th><th style="width:16%;">Nhóm</th><th>Giải thích cốt lõi</th></tr></thead>
                <tbody>
                  ${filteredCards.map(f => `
                    <tr>
                      <td><strong>${f.term}</strong></td>
                      <td><span class="pill pill-primary">${f.cat}</span></td>
                      <td>${f.def}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `}
      `;

      root.querySelectorAll('[data-ptab]').forEach(btn => {
        btn.addEventListener('click', () => {
          tab = btn.dataset.ptab;
          draw();
        });
      });

      if (tab === 'quiz') {
        root.querySelector('#quizFilterSelect').addEventListener('change', e => {
          quizFilter = e.target.value;
          draw();
        });
        renderQuizList(root.querySelector('#practiceQuizMount'), activeQuestions, `practice_${quizFilter}`);
      } else if (tab === 'exam') {
        const startBtn = root.querySelector('#startExamBtn');
        if (startBtn) startBtn.addEventListener('click', startMockExam);
        const retakeBtn = root.querySelector('#retakeExamBtn');
        if (retakeBtn) retakeBtn.addEventListener('click', startMockExam);
        const subBtn = root.querySelector('#submitExamBtn');
        if (subBtn) subBtn.addEventListener('click', () => { stopExamTimer(); exam.submitted = true; draw(); });
        root.querySelectorAll('[data-exq]').forEach(btn => {
          btn.addEventListener('click', () => {
            const [qi, oi] = btn.dataset.exq.split(':').map(Number);
            exam.answers[qi] = oi;
            draw();
          });
        });
      } else {
        root.querySelector('#cardCatSelect').addEventListener('change', e => {
          cardCat = e.target.value;
          cardIdx = 0;
          flipped = false;
          draw();
        });
        root.querySelector('#flashcardBox').addEventListener('click', () => { flipped = !flipped; draw(); });
        root.querySelector('#flipCardBtn').addEventListener('click', () => { flipped = !flipped; draw(); });
        root.querySelector('#prevCardBtn').addEventListener('click', () => {
          cardIdx = (cardIdx - 1 + filteredCards.length) % filteredCards.length;
          flipped = false;
          draw();
        });
        root.querySelector('#nextCardBtn').addEventListener('click', () => {
          cardIdx = (cardIdx + 1) % filteredCards.length;
          flipped = false;
          draw();
        });
        root.querySelector('#shuffleCardBtn').addEventListener('click', () => {
          cards = [...cards].sort(() => Math.random() - 0.5);
          cardIdx = 0;
          flipped = false;
          draw();
        });
      }
    }

    draw();
  }

  /* ------------------------------------------------------------------------
     Router & Bootstrap
     ------------------------------------------------------------------------ */
  function setBreadcrumb(html) {
    const el = document.getElementById('breadcrumb');
    if (el) el.innerHTML = html;
  }

  function navigate(route, anchorId) {
    currentRoute = route || 'home';
    const root = document.getElementById('appContent');
    if (!root) return;

    if (window.location.hash !== `#${currentRoute}`) {
      history.replaceState(null, '', `#${currentRoute}`);
    }

    if (currentRoute === 'home') {
      setBreadcrumb('Tổng quan / <strong>Bản đồ Vòng đời &amp; IPO</strong>');
      renderHome(root);
    } else if (currentRoute.startsWith('stage/')) {
      const sn = currentRoute.split('/')[1] || '1';
      const labels = { '1': 'Chặng 1: Initiation Studio', '2': 'Chặng 2: Planning Studio', '3': 'Chặng 3: Vận hành & Hybrid', '4': 'Chặng 4: Handover & Hồ sơ' };
      setBreadcrumb(`Dự án Sống / <strong>${labels[sn] || labels['1']}</strong>`);
      renderStageView(root, sn);
    } else if (currentRoute.startsWith('module/')) {
      const mid = currentRoute.split('/')[1];
      const m = window.PMApp.data.modules.find(x => x.id === mid) || window.PMApp.data.modules[0];
      setBreadcrumb(`Giáo trình / <strong>${m.code}: ${m.title}</strong>`);
      renderModule(root, m.id, anchorId);
    } else if (currentRoute === 'warroom') {
      setBreadcrumb('Thực chiến / <strong>Phòng Tình Huống (10 PM War Room)</strong>');
      renderWarRoom(root);
    } else if (currentRoute === 'labs' || currentRoute.startsWith('labs/')) {
      const lid = currentRoute.split('/')[1] || 'stacey';
      setBreadcrumb('Thực hành / <strong>6 Phòng Lab &amp; Bài Tập Tính Toán</strong>');
      renderLabs(root, lid);
    } else if (currentRoute === 'casestudy') {
      setBreadcrumb('Ứng dụng / <strong>2 Case Study A–Z</strong>');
      renderCaseStudy(root);
    } else if (currentRoute === 'templates') {
      setBreadcrumb('Ứng dụng / <strong>10 Biểu Mẫu Thực Chiến</strong>');
      renderTemplates(root);
    } else if (currentRoute === 'practice' || currentRoute.startsWith('practice/')) {
      const sub = currentRoute.split('/')[1] || 'quiz';
      setBreadcrumb('Ôn tập / <strong>Quiz &amp; Flashcards</strong>');
      renderPractice(root, sub);
    } else {
      setBreadcrumb('Tổng quan / <strong>Bản đồ Vòng đời &amp; IPO</strong>');
      renderHome(root);
    }

    renderSidebar();
    if (!anchorId) window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function init() {
    applyTheme();
    updateProgressUI();

    // Theme Toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      saveState();
    });

    // Mobile Sidebar
    document.getElementById('menuToggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebarBackdrop').classList.toggle('open');
    });
    document.getElementById('sidebarBackdrop').addEventListener('click', closeMobileSidebar);

    // Export / Import JSON Progress, Notes & Multi-Project Store
    document.getElementById('exportProgressBtn').addEventListener('click', () => {
      const multiProjects = window.PMApp.projectStore ? window.PMApp.projectStore.getAllData() : null;
      const payload = JSON.stringify({ exportedAt: new Date().toISOString(), state, multiProjects }, null, 2);
      window.PMApp.utils.downloadText('pm-foundation-progress.json', payload, 'application/json');
      window.PMApp.utils.showToast('Đã sao lưu tiến độ, ghi chú & toàn bộ danh sách Dự án ra file JSON!');
    });

    const fileInput = document.getElementById('importFileInput');
    document.getElementById('importProgressBtn').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (parsed && parsed.state) {
            state = { ...defaultState, ...parsed.state };
            if (parsed.multiProjects && window.PMApp.projectStore) {
              window.PMApp.projectStore.setAllData(parsed.multiProjects);
            } else if (parsed.liveProject && window.PMApp.projectStore) {
              window.PMApp.projectStore.set(parsed.liveProject);
            }
            applyTheme();
            saveState();
            navigate(currentRoute);
            window.PMApp.utils.showToast('Đã khôi phục toàn bộ tiến độ & danh sách Dự án thành công!');
          }
        } catch {
          window.PMApp.utils.showToast('File JSON không hợp lệ.');
        }
      };
      reader.readAsText(file);
      fileInput.value = '';
    });

    window.PMApp.onProjectChange = () => updateProgressUI();

    // Init Global Search
    window.PMApp.initSearch(navigate);

    // Hash Routing Support (Default to Stage 1 Live Project or Home)
    const initialHash = window.location.hash.replace(/^#/, '');
    navigate(initialHash || 'home');
    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace(/^#/, '') || 'home';
      if (h !== currentRoute) navigate(h);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
