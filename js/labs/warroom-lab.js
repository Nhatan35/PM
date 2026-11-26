/* ==========================================================================
   PM War Room Interactive Decision Simulator (10 Real-World Scenarios)
   Tracks Decisions, 3 PM Competency Scores, Explanations & Field Scripts
   ========================================================================== */
(function () {
  window.PMApp.labs.warroom = function (container) {
    const scenarios = window.PMApp.data.scenarios || [];
    let currentIdx = 0;
    let picks = {}; // { scenarioId: choiceIndex }

    function totalStats() {
      let c = 0, r = 0, p = 0, done = 0;
      scenarios.forEach(sc => {
        const ci = picks[sc.id];
        if (ci !== undefined) {
          const ch = sc.choices[ci];
          c += ch.score.control;
          r += ch.score.relation;
          p += ch.score.process;
          done++;
        }
      });
      const max = done * 3 || 1;
      return {
        done,
        controlPct: done ? Math.round((c / max) * 100) : 0,
        relationPct: done ? Math.round((r / max) * 100) : 0,
        processPct: done ? Math.round((p / max) * 100) : 0
      };
    }

    function render() {
      const sc = scenarios[currentIdx];
      const chosenIdx = picks[sc.id];
      const isAnswered = chosenIdx !== undefined;
      const stats = totalStats();

      container.innerHTML = `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
            <div>
              <h3 style="margin-bottom:0.2rem;">Bảng điểm Năng lực Xử lý Tình huống (${stats.done}/${scenarios.length} tình huống)</h3>
              <p style="margin:0;font-size:0.83rem;">Mỗi quyết định của bạn được chấm đồng thời trên 3 trục năng lực PM thực chiến.</p>
            </div>
            <button class="btn btn-secondary btn-sm" id="resetWarRoom">↺ Chơi lại từ đầu</button>
          </div>
          <div class="kpi-row" style="margin-bottom:0;">
            <div class="kpi-card">
              <div class="kpi-label">Kiểm soát Tiến độ / Chi phí</div>
              <div class="kpi-val" style="color:var(--primary);">${stats.controlPct}%</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Quan hệ Stakeholder / Team</div>
              <div class="kpi-val" style="color:var(--success);">${stats.relationPct}%</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Kỷ luật Chuẩn Dechange</div>
              <div class="kpi-val" style="color:var(--hybrid);">${stats.processPct}%</div>
            </div>
          </div>
        </div>

        <!-- Scenario Selector Pills -->
        <div class="lab-tabs">
          ${scenarios.map((item, idx) => {
            const p = picks[item.id];
            const mark = p !== undefined ? (item.choices[p].verdict === 'best' ? '✓ ' : '• ') : '';
            return `<button class="lab-tab ${idx === currentIdx ? 'active' : ''}" data-scidx="${idx}">${mark}TH ${idx + 1}</button>`;
          }).join('')}
        </div>

        <!-- Active Scenario Card -->
        <article class="section-block">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">
            <span class="pill pill-primary">${sc.phase}</span>
            <span class="pill pill-hybrid">🏷️ ${sc.tag}</span>
          </div>
          <h2 style="margin-bottom:0.7rem;">${sc.title}</h2>
          <div class="callout callout-insight" style="margin-top:0;">
            <div class="callout-title">🎬 Bối cảnh thực tế</div>
            <div style="color:var(--text-primary);font-size:0.93rem;">${sc.situation}</div>
          </div>

          <h3 style="margin-top:1.1rem;">Bạn là Project Manager — bạn chọn xử lý thế nào?</h3>
          <div>
            ${sc.choices.map((ch, ci) => {
              let cls = '';
              if (isAnswered) {
                if (ch.verdict === 'best') cls = 'correct';
                else if (ci === chosenIdx) cls = 'wrong';
              }
              return `
                <button class="quiz-option ${cls}" data-choice="${ci}" ${isAnswered ? 'disabled' : ''}>
                  <strong>${String.fromCharCode(65 + ci)}.</strong>
                  <span>${ch.label}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${isAnswered ? (() => {
            const picked = sc.choices[chosenIdx];
            const boxClass = picked.verdict === 'best' ? 'callout-tip' : picked.verdict === 'warn' ? 'callout-hybrid' : 'callout-pitfall';
            const title = picked.verdict === 'best'
              ? '✅ Quyết định Xuất sắc (Chuẩn PM thực chiến)'
              : picked.verdict === 'warn'
                ? '⚠️ Quyết định Nửa vời — Chưa tối ưu'
                : '❌ Quyết định Nguy hiểm — Dễ sập bẫy thực tế';
            return `
              <div class="callout ${boxClass}" style="margin-top:1rem;">
                <div class="callout-title">${title}</div>
                <div>${picked.feedback}</div>
              </div>
              <div class="callout callout-tip" style="margin-top:0.85rem;border-color:var(--primary);background:var(--primary-soft);">
                <div class="callout-title" style="color:var(--primary);">💬 Mẫu câu giao tiếp / Email thực chiến (PM Field Script)</div>
                <div style="color:var(--text-primary);font-style:italic;">${sc.script}</div>
              </div>
            `;
          })() : ''}

          <div class="lesson-footer-nav" style="margin-top:1.25rem;">
            <button class="btn btn-secondary btn-sm" id="prevScBtn" ${currentIdx === 0 ? 'disabled' : ''}>← Tình huống trước</button>
            <button class="btn btn-primary btn-sm" id="nextScBtn" ${currentIdx === scenarios.length - 1 ? 'disabled' : ''}>Tình huống tiếp theo →</button>
          </div>
        </article>
      `;

      container.querySelectorAll('[data-scidx]').forEach(btn => {
        btn.addEventListener('click', () => {
          currentIdx = Number(btn.dataset.scidx);
          render();
        });
      });

      container.querySelectorAll('[data-choice]').forEach(btn => {
        btn.addEventListener('click', () => {
          picks[sc.id] = Number(btn.dataset.choice);
          render();
        });
      });

      container.querySelector('#resetWarRoom').addEventListener('click', () => {
        picks = {};
        currentIdx = 0;
        render();
      });

      const prevBtn = container.querySelector('#prevScBtn');
      const nextBtn = container.querySelector('#nextScBtn');
      if (prevBtn) prevBtn.addEventListener('click', () => { if (currentIdx > 0) { currentIdx--; render(); } });
      if (nextBtn) nextBtn.addEventListener('click', () => { if (currentIdx < scenarios.length - 1) { currentIdx++; render(); } });
    }

    render();
  };
})();
