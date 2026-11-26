/* ==========================================================================
   Stage 3: Live Execution & Hybrid Control Center (M3 + M4 + M5)
   Dual Mode: Crisis Simulation (6 Cycles) OR Real Project Tracker
   Includes Drag-and-Drop + Click Kanban (WIP Limit), Live EVM/MTA, CCB/Hybrid
   Trade-off, and Auto-Generated 1-Page Executive RAG Email for Sponsor
   ========================================================================== */
(function () {
  window.PMApp.studio = window.PMApp.studio || {};

  const COLS = [
    { id: 'backlog', label: 'Backlog', pct: 0 },
    { id: 'in_progress', label: 'In Progress', pct: 45 },
    { id: 'review', label: 'Review / QA', pct: 80 },
    { id: 'done', label: 'Done (Hoàn thành)', pct: 100 }
  ];

  const SIM_EVENTS = {
    2: {
      id: 'ev2',
      title: 'Biến cố Chu kỳ 2: Khách hàng nhắn Zalo đòi thêm tính năng "nhỏ xíu"!',
      desc: 'Người dùng bên khách hàng nhắn thẳng cho Lead Dev nhờ code thêm màn hình xuất báo cáo tùy biến (~2 ngày công) không có trong Charter/WBS.',
      choices: [
        {
          text: 'Cho Dev làm luôn cho khách vui, khỏi ghi phiếu CR.',
          effect: { costDelta: 80, weekDelta: 1, morale: -5, sat: 4 },
          verdict: 'warn',
          msg: 'Bạn vừa dính bẫy Informal Change / Gold Plating! Chi phí tăng +80tr, lịch trễ +1 tuần mà không được Sponsor duyệt thêm ngân sách.',
          script: 'Bài học: Không bao giờ cho phép làm thêm ngoài Scope mà không ghi nhận tác động.'
        },
        {
          text: 'Dừng phần phát sinh, lập Change Request (hoặc Hybrid Scope Trade-off: đổi ngang tính năng ít ưu tiên) để Sponsor/PO duyệt minh bạch.',
          effect: { costDelta: 0, weekDelta: 0, morale: 5, sat: 6 },
          verdict: 'best',
          msg: 'Xử lý chuẩn xác! Giữ vững Baseline ngân sách & tiến độ, đồng thời khách hàng vẫn thấy yêu cầu được tôn trọng qua kênh chính thức.',
          script: 'Mẫu nhắn: "Em đã ghi nhận yêu cầu xuất báo cáo thành CR-01 (2 ngày công). Mình chọn đổi ngang với báo cáo phụ X để giữ đúng ngày Go-Live hay đưa sang Phase 2 ạ?"'
        }
      ]
    },
    3: {
      id: 'ev3',
      title: 'Biến cố Chu kỳ 3: Xung đột Matrix & Tranh cãi Storming!',
      desc: 'Trưởng phòng CNTT bất ngờ kéo Tech Lead đi xử lý sự cố vận hành 1 tuần (đúng lúc giữ gói trên Đường găng), đồng thời BA và Dev tranh cãi gay gắt về tài liệu đặc tả.',
      choices: [
        {
          text: 'Gửi email báo thẳng lên Giám đốc kỷ luật Line Manager & quát BA/Dev im lặng.',
          effect: { costDelta: 40, weekDelta: 1, morale: -15, sat: -8 },
          verdict: 'warn',
          msg: 'Leo thang quá sớm phá vỡ quan hệ ngang cấp và làm tụt tinh thần đội nhóm nghiêm trọng (-15 điểm Morale).',
          script: 'Bài học: Luôn thương lượng ngang cấp bằng dữ liệu Đường găng (Float=0) trước khi leo thang.'
        },
        {
          text: 'Thương lượng trực tiếp Line Manager chia tải bằng dữ liệu Đường găng (Float=0) + Dùng Mô hình 4 tai hòa giải BA/Dev và chốt quy ước Definition of Ready.',
          effect: { costDelta: 0, weekDelta: 0, morale: 10, sat: 5 },
          verdict: 'best',
          msg: 'Xuất sắc! Bảo toàn Đường găng và đưa đội nhóm vượt qua giai đoạn Storming sang Norming (+10 Morale).',
          script: 'Mẫu nói: "Anh Nam đang giữ gói Float=0 quyết định ngày Go-Live. Nhờ anh cho anh Nam hỗ trợ sự cố 1 ngày rồi bàn giao lại cho bạn Hưng, đồng thời đội em chốt luôn DoR để BA–Dev khớp nhau 100%."'
        }
      ]
    },
    4: {
      id: 'ev4',
      title: 'Biến cố Chu kỳ 4: Đối tác giao API trễ 2 tuần — Đèn chuyển ĐỎ (RED)!',
      desc: 'Gói tích hợp trên Đường găng bị đối tác trễ hẹn 2 tuần, kéo đường MTA dốc lên và đe dọa vỡ mốc Go-Live.',
      choices: [
        {
          text: 'Tô màu đèn Vàng (Watermelon Report) giấu Ban chỉ đạo để đỡ bị áp lực.',
          effect: { costDelta: 120, weekDelta: 2, morale: -10, sat: -18 },
          verdict: 'warn',
          msg: 'Hội chứng Báo cáo Dưa hấu! Không cứu được tiến độ (+2 tuần trễ) và mất niềm tin nghiêm trọng từ Sponsor (-18 điểm).',
          script: 'Bài học: Với trạng thái RED, luôn báo sớm trung thực kèm 2 phương án quyết định.'
        },
        {
          text: 'Báo cáo trung thực trạng thái RED kèm EVM/MTA + kích hoạt Crashing (rút quỹ dự phòng EMV) & Fast-Tracking (test song song) để kéo lại tiến độ.',
          effect: { costDelta: 70, weekDelta: -1, morale: 4, sat: 10 },
          verdict: 'best',
          msg: 'Bản lĩnh PM thực chiến! Dùng quỹ dự phòng đúng mục đích và cứu lại tiến độ trước khi vỡ mốc (+10 điểm hài lòng Sponsor).',
          script: 'Mẫu báo cáo RED: "Dự án chuyển RED do API đối tác chậm 2 tuần. Em đề xuất dùng 70tr quỹ dự phòng EMV + Fast-Tracking khâu kiểm thử để kéo mốc về sát kế hoạch gốc."'
        }
      ]
    }
  };

  window.PMApp.studio.renderStage3 = function (container, navigate) {
    let draggedId = null;
    let showEmail = false;

    function computeMetrics(p) {
      const store = window.PMApp.projectStore;
      const cpm = store.solveCPM(p.wbs);
      const emv = store.calcEMV(p.risks);
      const bac = p.baseline ? p.baseline.bac : (cpm.totalCost + emv);
      const baseDur = p.baseline ? p.baseline.duration : cpm.totalDuration;
      const totalWbsCost = Math.max(1, cpm.totalCost);

      // Earned Value derived directly from live WBS progress!
      const ev = Math.round(p.wbs.reduce((s, w) => s + (Number(w.cost) || 0) * ((Number(w.progress) || 0) / 100), 0));
      const pctDone = Math.round((ev / totalWbsCost) * 100);

      // Planned Value based on current cycle (6 cycles total)
      const cycleRatio = Math.min(1, Math.max(0.15, (p.execution.cycle || 1) / 6));
      const pv = p.execution.mode === 'sim'
        ? Math.round(totalWbsCost * (p.execution.cycle / 6))
        : Math.round(totalWbsCost * cycleRatio);

      const ac = Number(p.execution.actualCost) || (ev > 0 ? Math.round(ev * 1.04) : 0);
      const spi = pv > 0 ? ev / pv : 1;
      const cpi = ac > 0 ? ev / ac : 1;
      const eac = cpi > 0 ? Math.round(bac / cpi) : bac;

      let rag = { label: 'GREEN', cls: 'pill-success' };
      if (spi < 0.88 || cpi < 0.88) rag = { label: 'RED', cls: 'pill-danger' };
      else if (spi < 0.96 || cpi < 0.96) rag = { label: 'AMBER', cls: 'pill-hybrid' };

      const lastMta = p.execution.mtaHistory.length
        ? p.execution.mtaHistory[p.execution.mtaHistory.length - 1].forecast
        : baseDur;

      return { cpm, bac, baseDur, pv, ev, ac, spi, cpi, eac, pctDone, rag, lastMta };
    }

    function buildRagEmail(p, m) {
      const doneList = p.wbs.filter(w => w.status === 'done').map(w => `- ${w.id}: ${w.name}`).join('\n') || '- Đang triển khai các gói công việc đầu tiên';
      const wipList = p.wbs.filter(w => w.status === 'in_progress' || w.status === 'review').map(w => `- ${w.id}: ${w.name} (${w.progress}%)`).join('\n') || '- Chưa có gói đang mở';
      const topRisk = p.risks[0] ? `${p.risks[0].id}: ${p.risks[0].text} (${p.risks[0].strategy})` : 'Không có rủi ro mở';
      return `Tiêu đề: [${m.rag.label}] Báo cáo Tiến độ Dự án "${p.meta.name}" — Chu kỳ ${p.execution.cycle}/6

Kính gửi ${p.charter.sponsor || 'Anh/Chị Sponsor'},

Em xin gửi báo cáo trạng thái 1 trang của dự án (${p.meta.approachLabel}):

1. SỨC KHỎE TỔNG THỂ (EVM & MTA):
- Trạng thái đèn giao thông: ${m.rag.label}
- Tiến độ hoàn thành thực tế: ${m.pctDone}% (EV = ${m.ev}tr / PV = ${m.pv}tr → SPI = ${m.spi.toFixed(2)})
- Chi phí thực tế đã chi: AC = ${m.ac}tr → CPI = ${m.cpi.toFixed(2)} | Dự báo cuối kỳ EAC = ${m.eac}tr (Trần: ${p.charter.budgetCap}tr)
- Dự báo hoàn thành (MTA): Tuần ${m.lastMta} (Kế hoạch gốc: Tuần ${m.baseDur})

2. CÁC HẠNG MỤC ĐÃ HOÀN THÀNH:
${doneList}

3. ĐANG TRIỂN KHAI & TRỌNG TÂM KỲ TỚI:
${wipList}

4. RỦI RO & CHANGE REQUEST CẦN LƯU Ý:
- Rủi ro trọng yếu: ${topRisk}
- Số Change Request đã ghi nhận: ${(p.execution.changeRequests || []).length} phiếu.

Trân trọng,
${p.charter.pm || 'Project Manager'}`;
    }

    function render() {
      const store = window.PMApp.projectStore;
      const p = store.get();
      const ex = p.execution;
      const m = computeMetrics(p);
      const esc = window.PMApp.utils.escapeHtml;
      const isHybrid = p.meta.approach.startsWith('hybrid') || p.meta.approach === 'agile';
      const inProgCount = p.wbs.filter(w => w.status === 'in_progress').length;
      const wipExceeded = inProgCount > ex.wipLimit;
      const activeEvent = (ex.mode === 'sim' && SIM_EVENTS[ex.cycle] && !ex.eventsResolved[ex.cycle]) ? SIM_EVENTS[ex.cycle] : null;
      const allDone = p.wbs.every(w => w.status === 'done');

      // MTA SVG chart points
      const hist = ex.mtaHistory.length ? ex.mtaHistory : [{ cycle: 0, forecast: m.baseDur }];
      const maxW = Math.max(m.baseDur + 6, ...hist.map(h => h.forecast + 2));
      const mapX = c => 42 + (c / 6) * 290;
      const mapY = w => 165 - (w / maxW) * 140;
      const polyPts = hist.map(h => `${mapX(h.cycle).toFixed(1)},${mapY(h.forecast).toFixed(1)}`).join(' ');

      container.innerHTML = `
        <!-- Top Control & Dual-Mode Switcher -->
        <div class="project-context-bar">
          <div>
            <div style="font-size:0.74rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Chặng 3 · Trung tâm Vận hành &amp; Kiểm soát (${esc(p.meta.approachLabel)})</div>
            <div style="font-size:0.84rem;margin-top:0.2rem;">Chu kỳ hiện tại: <strong>${ex.cycle} / 6</strong> · Hoàn thành WBS: <strong>${m.pctDone}%</strong> · <span class="pill ${m.rag.cls}">${m.rag.label}</span></div>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            <div class="mode-switch">
              <button class="mode-btn ${ex.mode === 'sim' ? 'active' : ''}" data-mode="hybrid" data-exmode="sim">🎮 Giả lập Khủng hoảng</button>
              <button class="mode-btn ${ex.mode === 'real' ? 'active' : ''}" data-mode="traditional" data-exmode="real">🏢 Theo dõi Dự án Thật</button>
            </div>
            ${ex.mode === 'sim' ? `
              <button class="btn btn-primary btn-sm" id="nextCycleBtn" ${ex.cycle >= 6 || activeEvent ? 'disabled' : ''}>
                ${ex.cycle >= 6 ? '✓ Đã chạy hết 6 Chu kỳ' : activeEvent ? '⚠️ Xử lý biến cố trước' : `▶ Chạy Chu kỳ ${ex.cycle + 1} / 6`}
              </button>
            ` : ''}
            <button class="btn btn-secondary btn-sm" id="resetExecBtn" title="Chạy lại từ Chu kỳ 0">↺ Reset</button>
          </div>
        </div>

        <!-- Live Crisis Event Card (Simulation Mode) -->
        ${activeEvent ? `
          <div class="card" style="border:2px solid var(--danger);background:var(--danger-soft);">
            <span class="pill pill-danger">🚨 BIẾN CỐ THỰC CHIẾN VỪA XẢY RA</span>
            <h3 style="margin:0.55rem 0 0.35rem;">${activeEvent.title}</h3>
            <p style="color:var(--text-primary);font-size:0.9rem;">${activeEvent.desc}</p>
            <div style="display:grid;gap:0.5rem;">
              ${activeEvent.choices.map((ch, ci) => `
                <button class="quiz-option" data-evpick="${ci}" style="margin:0;">
                  <strong>${String.fromCharCode(65 + ci)}.</strong><span>${ch.text}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Last Event Feedback Banner -->
        ${ex.lastFeedback ? `
          <div class="callout ${ex.lastFeedback.verdict === 'best' ? 'callout-tip' : 'callout-hybrid'}" style="margin-top:0;">
            <div class="callout-title">${ex.lastFeedback.verdict === 'best' ? '✅ Xử lý chuẩn xác!' : '⚠️ Hệ quả quyết định'}</div>
            <div>${ex.lastFeedback.msg}</div>
            <div style="margin-top:0.4rem;font-style:italic;font-size:0.84rem;">💬 ${ex.lastFeedback.script}</div>
          </div>
        ` : ''}

        <!-- Live EVM & MTA Dashboard -->
        <div class="grid-2" style="align-items:start;">
          <div class="card" style="margin:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem;">
              <h3 style="margin:0;">📈 Đồng hồ EVM &amp; Sức khỏe Dự án</h3>
              <button class="btn btn-secondary btn-sm" id="toggleEmailBtn">✉️ ${showEmail ? 'Ẩn' : 'Sinh'} Email RAG gửi Sponsor</button>
            </div>
            <div class="kpi-row" style="margin-top:0;">
              <div class="kpi-card"><div class="kpi-label">SPI (Tiến độ)</div><div class="kpi-val" style="color:${m.spi >= 0.96 ? 'var(--success)' : m.spi >= 0.88 ? 'var(--warning)' : 'var(--danger)'};">${m.spi.toFixed(2)}</div><div style="font-size:0.7rem;color:var(--text-muted);">EV ${m.ev} / PV ${m.pv}</div></div>
              <div class="kpi-card"><div class="kpi-label">CPI (Chi phí)</div><div class="kpi-val" style="color:${m.cpi >= 0.96 ? 'var(--success)' : m.cpi >= 0.88 ? 'var(--warning)' : 'var(--danger)'};">${m.cpi.toFixed(2)}</div><div style="font-size:0.7rem;color:var(--text-muted);">AC: ${m.ac}tr</div></div>
              <div class="kpi-card"><div class="kpi-label">EAC Dự báo</div><div class="kpi-val" style="font-size:1.05rem;color:${m.eac <= p.charter.budgetCap ? 'var(--success)' : 'var(--danger)'};">${m.eac}tr</div><div style="font-size:0.7rem;color:var(--text-muted);">Trần: ${p.charter.budgetCap}tr</div></div>
            </div>
            <div style="display:flex;gap:1rem;font-size:0.8rem;color:var(--text-secondary);flex-wrap:wrap;">
              <span>🤝 Hài lòng Stakeholder: <strong>${ex.stakeholderSat}%</strong></span>
              <span>🔥 Tinh thần Đội nhóm: <strong>${ex.teamMorale}%</strong></span>
            </div>
            ${ex.mode === 'real' ? `
              <div style="margin-top:0.85rem;padding-top:0.75rem;border-top:1px solid var(--border-color);display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;">
                <div>
                  <label class="field-label">Chu kỳ hiện tại (1–6)</label>
                  <input type="number" min="1" max="6" class="input-field" id="realCycle" value="${ex.cycle || 1}">
                </div>
                <div>
                  <label class="field-label">Chi phí thực AC (tr)</label>
                  <input type="number" min="0" step="20" class="input-field" id="realAC" value="${ex.actualCost}">
                </div>
                <div>
                  <label class="field-label">Dự báo xong (Tuần)</label>
                  <input type="number" min="1" class="input-field" id="realForecast" value="${m.lastMta}">
                </div>
              </div>
            ` : ''}
          </div>

          <div class="card" style="margin:0;">
            <h3 style="margin-bottom:0.35rem;">📉 Biểu đồ Xu hướng Mốc (MTA) Trực tiếp</h3>
            <svg viewBox="0 0 360 190" width="100%" style="max-width:380px;display:block;margin:0 auto;">
              <line x1="42" y1="165" x2="340" y2="165" stroke="#475569" stroke-width="1.5"/>
              <line x1="42" y1="165" x2="42" y2="15" stroke="#475569" stroke-width="1.5"/>
              <line x1="42" y1="${mapY(m.baseDur)}" x2="340" y2="${mapY(m.baseDur)}" stroke="#059669" stroke-dasharray="4 3" stroke-width="1.3"/>
              <text x="338" y="${mapY(m.baseDur) - 5}" text-anchor="end" font-size="9" fill="#059669" font-weight="700">Baseline: Tuần ${m.baseDur}</text>
              ${hist.length > 1 ? `<polyline points="${polyPts}" fill="none" stroke="${m.lastMta > m.baseDur ? '#dc2626' : '#2563eb'}" stroke-width="2.6"/>` : ''}
              ${hist.map(h => `<circle cx="${mapX(h.cycle)}" cy="${mapY(h.forecast)}" r="4.5" fill="${h.forecast > m.baseDur ? '#dc2626' : '#2563eb'}"/>`).join('')}
              <text x="190" y="185" text-anchor="middle" font-size="10" fill="#64748b">Chu kỳ báo cáo (0 → 6)</text>
            </svg>
            <div style="font-size:0.78rem;color:var(--text-muted);text-align:center;">Dự báo Go-Live hiện tại: <strong>Tuần ${m.lastMta}</strong> (so với gốc Tuần ${m.baseDur})</div>
          </div>
        </div>

        ${showEmail ? `
          <div class="card" style="margin-top:1rem;">
            <div class="card-header">
              <h3 style="margin:0;">✉️ Email Báo cáo RAG 1 Trang Tự Động (Gửi Sponsor)</h3>
              <button class="btn btn-primary btn-sm" id="copyRagEmailBtn">📋 Copy Email này</button>
            </div>
            <pre id="ragEmailPre" style="white-space:pre-wrap;background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md);font-size:0.82rem;margin:0;">${esc(buildRagEmail(p, m))}</pre>
          </div>
        ` : ''}

        <!-- Interactive Kanban / Sprint Board (Drag & Drop + Quick Arrows) -->
        <div class="card" style="margin-top:1rem;">
          <div class="card-header">
            <div>
              <h3 style="margin-bottom:0.2rem;">📋 Bảng Kanban / Sprint Tương tác (Kéo-thả hoặc bấm nút ◀ / ▶)</h3>
              <p style="margin:0;font-size:0.83rem;">Di chuyển các gói WBS sang <strong>Done</strong> để tăng Earned Value (EV) trực tiếp! Giới hạn <strong>WIP Limit = ${ex.wipLimit}</strong> ở cột In Progress.</p>
            </div>
            ${isHybrid ? '<span class="pill pill-hybrid">🔀 Hybrid Mode: Hiển thị Luồng &amp; Sync Points</span>' : '<span class="pill pill-trad">📐 Traditional Mode</span>'}
          </div>

          ${wipExceeded ? `
            <div class="callout callout-pitfall" style="margin-top:0;">
              <div class="callout-title">🚧 VI PHẠM WIP LIMIT (${inProgCount} / ${ex.wipLimit})!</div>
              Quá nhiều gói công việc đang mở đồng thời sẽ gây đa nhiệm, nghẽn cổ chai và kéo dài Cycle Time. Hãy đẩy xong thẻ sang <strong>Review / Done</strong> trước khi kéo thêm việc mới!
            </div>
          ` : ''}

          <div class="kanban-board">
            ${COLS.map((col, colIdx) => {
              const items = p.wbs.filter(w => w.status === col.id);
              const isWip = col.id === 'in_progress' && wipExceeded;
              return `
                <div class="kanban-col ${isWip ? 'wip-exceeded' : ''}" data-col="${col.id}">
                  <div class="kanban-col-head">
                    <span>${col.label}</span>
                    <span class="pill ${isWip ? 'pill-danger' : 'pill-primary'}">${items.length}${col.id === 'in_progress' ? '/' + ex.wipLimit : ''}</span>
                  </div>
                  ${items.map(w => {
                    const isCrit = m.cpm.critPath.includes(w.id);
                    return `
                      <div class="kanban-card ${isCrit ? 'critical-card' : ''}" draggable="true" data-card="${w.id}">
                        <div class="kanban-card-title">${w.id}: ${esc(w.name)}</div>
                        <div class="kanban-card-meta">
                          <span>${w.cost}tr · ${w.dur}w</span>
                          <span>${w.stream === 'Sync Point' ? '🔗 Sync' : w.stream === 'Agile Sprint' ? '⚡ Sprint' : '📐 Trad'}</span>
                        </div>
                        <div class="kanban-card-actions">
                          <button class="kanban-move-btn" data-move="${w.id}:${colIdx - 1}" ${colIdx === 0 ? 'disabled' : ''}>◀ Lùi</button>
                          <button class="kanban-move-btn" data-move="${w.id}:${colIdx + 1}" ${colIdx === COLS.length - 1 ? 'disabled' : ''}>Tiến ▶</button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Change Request (CCB) / Hybrid Scope Trade-off Panel -->
        <div class="card">
          <h3>🔄 Quản trị Thay đổi: ${isHybrid ? 'Hybrid Backlog Scope Trade-off &amp; CCB' : 'Traditional Change Control Board (CCB)'}</h3>
          <form id="addCrForm" style="display:grid;grid-template-columns:2fr 1fr 1fr auto;gap:0.5rem;margin-bottom:0.85rem;">
            <input class="input-field" id="crTitle" placeholder="Nhập yêu cầu thay đổi mới (VD: Thêm báo cáo chiết khấu combo...)" required>
            <input type="number" class="input-field" id="crCost" value="120" min="0" placeholder="+Chi phí (tr)">
            <select class="input-field" id="crDecision">
              <option value="Defer (Phase 2)">Defer → Phase 2 (Giữ mốc)</option>
              ${isHybrid ? '<option value="Hybrid Scope Trade-off">Hybrid Scope Trade-off (Đổi ngang)</option>' : ''}
              <option value="CCB Approved (+Baseline)">CCB Approve (Cộng Baseline)</option>
              <option value="Rejected">Reject (Từ chối)</option>
            </select>
            <button class="btn btn-primary btn-sm" type="submit">+ Ghi CR</button>
          </form>
          ${(ex.changeRequests || []).length ? `
            <div class="table-wrap">
              <table class="pm-table">
                <thead><tr><th>Mã</th><th>Nội dung thay đổi</th><th>Tác động CP</th><th>Quyết định</th></tr></thead>
                <tbody>
                  ${ex.changeRequests.map(cr => `
                    <tr><td><strong>${cr.id}</strong></td><td>${esc(cr.title)}</td><td>+${cr.cost}tr</td><td><span class="pill pill-primary">${cr.decision}</span></td></tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : '<p style="font-size:0.82rem;margin:0;color:var(--text-muted);">Chưa có Change Request nào được ghi nhận.</p>'}
        </div>

        <!-- Gate 3: Acceptance Readiness -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
            <div>
              <h3 style="margin-bottom:0.2rem;">🚪 Cổng Kiểm Soát Gate 3: Acceptance Readiness</h3>
              <p style="margin:0;font-size:0.84rem;">Đưa toàn bộ Work Packages sang <strong>Done</strong> (hiện tại ${m.pctDone}%) để sẵn sàng bước vào UAT &amp; Bàn giao Abnahme.</p>
            </div>
            <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
              ${!allDone ? '<button class="btn btn-secondary btn-sm" id="completeAllWpsBtn">⚡ Đẩy tất cả sang Done</button>' : ''}
              <button class="btn ${allDone ? 'btn-success' : 'btn-secondary'} btn-sm" id="approveGate3Btn">${p.gates.g3 ? '✓ GATE 3 PASSED' : 'Duyệt Gate 3'}</button>
              <button class="btn btn-primary btn-sm" id="nextToStage4Btn">Sang Chặng 4: Nghiệm thu &amp; Bàn giao →</button>
            </div>
          </div>
        </div>
      `;

      // Bind mode switch
      container.querySelectorAll('[data-exmode]').forEach(btn => {
        btn.addEventListener('click', () => {
          ex.mode = btn.dataset.exmode;
          store.save();
          render();
        });
      });

      // Next Simulation Cycle
      const nextCyc = container.querySelector('#nextCycleBtn');
      if (nextCyc) {
        nextCyc.addEventListener('click', () => {
          if (ex.cycle >= 6) return;
          ex.cycle++;
          // Auto advance some WBS cards progressively to feel alive
          const targetDoneCount = Math.min(p.wbs.length, Math.floor((ex.cycle / 6) * p.wbs.length));
          p.wbs.forEach((w, idx) => {
            if (idx < targetDoneCount) { w.status = 'done'; w.progress = 100; }
            else if (idx === targetDoneCount && w.status === 'backlog') { w.status = 'in_progress'; w.progress = 45; }
          });
          const curEv = p.wbs.reduce((s, w) => s + w.cost * (w.progress / 100), 0);
          ex.actualCost = Math.max(ex.actualCost, Math.round(curEv * (ex.cycle === 4 ? 1.12 : 1.03)));
          const prevF = ex.mtaHistory.length ? ex.mtaHistory[ex.mtaHistory.length - 1].forecast : m.baseDur;
          const nextF = ex.cycle === 4 ? prevF + 2 : prevF;
          ex.mtaHistory.push({ cycle: ex.cycle, forecast: nextF });
          ex.lastFeedback = null;
          store.save();
          render();
        });
      }

      // Handle Event Choice
      container.querySelectorAll('[data-evpick]').forEach(btn => {
        btn.addEventListener('click', () => {
          const ch = activeEvent.choices[Number(btn.dataset.evpick)];
          ex.eventsResolved[ex.cycle] = true;
          ex.actualCost = Math.max(0, (Number(ex.actualCost) || 0) + ch.effect.costDelta);
          ex.teamMorale = Math.max(20, Math.min(100, ex.teamMorale + ch.effect.morale));
          ex.stakeholderSat = Math.max(20, Math.min(100, ex.stakeholderSat + ch.effect.sat));
          const last = ex.mtaHistory[ex.mtaHistory.length - 1];
          if (last) last.forecast = Math.max(m.baseDur - 2, last.forecast + ch.effect.weekDelta);
          ex.lastFeedback = { verdict: ch.verdict, msg: ch.msg, script: ch.script };
          store.save();
          render();
        });
      });

      // Reset Execution
      container.querySelector('#resetExecBtn').addEventListener('click', () => {
        ex.cycle = 0;
        ex.actualCost = 0;
        ex.teamMorale = 85;
        ex.stakeholderSat = 85;
        ex.mtaHistory = [{ cycle: 0, forecast: m.baseDur }];
        ex.eventsResolved = {};
        ex.lastFeedback = null;
        p.wbs.forEach(w => { w.status = 'backlog'; w.progress = 0; });
        p.gates.g3 = false;
        store.save();
        render();
      });

      // Real Mode Inputs
      const rCyc = container.querySelector('#realCycle');
      if (rCyc) rCyc.addEventListener('change', e => { ex.cycle = Math.max(1, Math.min(6, Number(e.target.value) || 1)); store.save(); render(); });
      const rAC = container.querySelector('#realAC');
      if (rAC) rAC.addEventListener('change', e => { ex.actualCost = Math.max(0, Number(e.target.value) || 0); store.save(); render(); });
      const rFor = container.querySelector('#realForecast');
      if (rFor) rFor.addEventListener('change', e => {
        const f = Math.max(1, Number(e.target.value) || m.baseDur);
        ex.mtaHistory.push({ cycle: ex.cycle || 1, forecast: f });
        store.save();
        render();
      });

      // Email RAG toggle & copy
      container.querySelector('#toggleEmailBtn').addEventListener('click', () => { showEmail = !showEmail; render(); });
      const copyMail = container.querySelector('#copyRagEmailBtn');
      if (copyMail) {
        copyMail.addEventListener('click', () => {
          if (navigator.clipboard) navigator.clipboard.writeText(buildRagEmail(p, m)).then(() => window.PMApp.utils.showToast('Đã copy Email RAG 1 trang — sẵn sàng gửi Sponsor!'));
        });
      }

      // Move card helper
      function moveCard(wid, colId) {
        const wp = p.wbs.find(x => x.id === wid);
        const col = COLS.find(c => c.id === colId);
        if (!wp || !col) return;
        wp.status = col.id;
        wp.progress = col.pct;
        if (ex.mode === 'sim' && ex.actualCost === 0 && col.pct > 0) ex.actualCost = Math.round(wp.cost * (col.pct / 100));
        store.save();
        render();
      }

      // Click Move Arrows
      container.querySelectorAll('[data-move]').forEach(btn => {
        btn.addEventListener('click', () => {
          const [wid, nextColIdx] = btn.dataset.move.split(':');
          const targetCol = COLS[Number(nextColIdx)];
          if (targetCol) moveCard(wid, targetCol.id);
        });
      });

      // HTML5 Drag & Drop
      container.querySelectorAll('[data-card]').forEach(card => {
        card.addEventListener('dragstart', () => { draggedId = card.dataset.card; });
      });
      container.querySelectorAll('.kanban-col').forEach(colEl => {
        colEl.addEventListener('dragover', e => { e.preventDefault(); colEl.classList.add('drag-over'); });
        colEl.addEventListener('dragleave', () => colEl.classList.remove('drag-over'));
        colEl.addEventListener('drop', e => {
          e.preventDefault();
          colEl.classList.remove('drag-over');
          if (draggedId) { moveCard(draggedId, colEl.dataset.col); draggedId = null; }
        });
      });

      // Change Request Form
      container.querySelector('#addCrForm').addEventListener('submit', e => {
        e.preventDefault();
        const title = container.querySelector('#crTitle').value.trim();
        const cost = Number(container.querySelector('#crCost').value) || 0;
        const decision = container.querySelector('#crDecision').value;
        ex.changeRequests = ex.changeRequests || [];
        ex.changeRequests.push({ id: 'CR-' + String(ex.changeRequests.length + 1).padStart(2, '0'), title, cost, decision });
        if (decision.includes('CCB Approve') && p.baseline) {
          p.baseline.bac += cost;
        }
        store.save();
        window.PMApp.utils.showToast(`Đã ghi nhận Change Request (${decision})!`);
        render();
      });

      const compAll = container.querySelector('#completeAllWpsBtn');
      if (compAll) {
        compAll.addEventListener('click', () => {
          p.wbs.forEach(w => { w.status = 'done'; w.progress = 100; });
          if (ex.actualCost === 0) ex.actualCost = m.cpm.totalCost;
          store.save();
          render();
        });
      }

      container.querySelector('#approveGate3Btn').addEventListener('click', () => {
        if (!allDone) {
          window.PMApp.utils.showToast('Hãy hoàn tất toàn bộ Work Packages vào cột Done trước khi duyệt Gate 3!');
          return;
        }
        p.gates.g3 = true;
        store.save();
        window.PMApp.utils.showToast('🎉 Đạt Gate 3 (Acceptance Readiness) — Sẵn sàng UAT & Bàn giao!');
        render();
      });

      container.querySelector('#nextToStage4Btn').addEventListener('click', () => navigate('stage/4'));
    }

    render();
  };
})();
