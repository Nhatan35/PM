/* ==========================================================================
   Lab 2: Magic Triangle Simulator (Traditional vs. Agile Inverted Triangle)
   ========================================================================== */
(function () {
  window.PMApp.labs.triangle = function (container) {
    let state = { mode: 'traditional', scope: 100, time: 100, cost: 100 };

    function compute() {
      // Capacity = average of time & cost normalized against scope
      const pressure = state.scope - ((state.time * 0.55) + (state.cost * 0.45));
      let quality = Math.round(Math.max(20, Math.min(100, 100 - Math.max(0, pressure) * 1.15)));
      let risk = Math.round(Math.max(5, Math.min(98, 18 + Math.max(0, pressure) * 1.45)));
      let status = 'Cân bằng lành mạnh';
      let color = 'var(--success)';
      let advice = 'Ba đỉnh Phạm vi – Thời gian – Chi phí đang cân bằng, đội dự án đủ dư địa giữ vững chuẩn chất lượng đã cam kết.';

      if (pressure > 25) {
        status = 'Báo động Đỏ — Phá vỡ Tam giác!';
        color = 'var(--danger)';
        advice = state.mode === 'traditional'
          ? 'Bạn đang ép Phạm vi quá lớn so với Thời gian/Chi phí! Hãy (1) cắt giảm Scope qua Change Control, (2) kéo giãn Timeline, hoặc (3) tăng ngân sách (Crashing) — nếu không Chất lượng sẽ sụp đổ.'
          : 'Ở chế độ Agile (cố định Timebox & Cost), giải pháp chuẩn là Product Owner lập tức giảm Scope trong Backlog (giữ lại tính năng giá trị cao nhất) để bảo vệ Definition of Done!';
      } else if (pressure > 10) {
        status = 'Căng thẳng (Vàng) — Nguy cơ giảm chất lượng';
        color = 'var(--warning)';
        advice = 'Dự án bắt đầu chịu áp lực tiến độ/chi phí. Cần theo dõi sát Đường găng, tránh nhận thêm Scope Creep và cân nhắc Fast-tracking có kiểm soát.';
      } else if (pressure < -18) {
        status = 'Dư nguồn lực / Thời gian (Slack cao)';
        color = 'var(--info)';
        advice = 'Bạn có vùng đệm an toàn tốt (hoặc đang dự trù thừa chi phí/thời gian). Có thể tối ưu ngân sách hoặc bổ sung tính năng giá trị cao ở mức Should-have.';
      }
      return { quality, risk, status, color, advice };
    }

    function render() {
      const r = compute();
      const isAgile = state.mode === 'agile';
      // Dynamic triangle vertex offsets
      const topY = 30 + (140 - state.scope) * 0.35;
      const leftX = 48 + (140 - state.time) * 0.35;
      const rightX = 332 - (140 - state.cost) * 0.35;

      container.innerHTML = `
        <div class="card">
          <div class="card-header">
            <div>
              <h3 style="margin-bottom:0.25rem;">Mô phỏng Tam giác Ma thuật (Magisches Dreieck)</h3>
              <p style="margin:0;font-size:0.84rem;">Chuyển đổi giữa <strong>Traditional</strong> (khóa Phạm vi) và <strong>Agile</strong> (khóa Thời gian &amp; Chi phí) để thấy cách xử lý ràng buộc khác nhau.</p>
            </div>
            <div class="mode-switch">
              <button class="mode-btn ${!isAgile ? 'active' : ''}" data-mode="traditional">Traditional (Plan-driven)</button>
              <button class="mode-btn ${isAgile ? 'active' : ''}" data-mode="agile">Agile (Inverted Triangle)</button>
            </div>
          </div>

          <div class="grid-2" style="align-items:center;">
            <div>
              <div class="control-group">
                <label><span>📦 Phạm vi yêu cầu (Scope) ${isAgile ? '— LINH HOẠT' : '— CỐ ĐỊNH MỤC TIÊU'}</span><span>${state.scope}%</span></label>
                <input type="range" min="60" max="150" value="${state.scope}" data-k="scope">
              </div>

              <div class="control-group">
                <label><span>⏱️ Thời gian (Time) ${isAgile ? '— CỐ ĐỊNH TIMEBOX' : ''}</span><span>${state.time}%</span></label>
                <input type="range" min="60" max="140" value="${state.time}" data-k="time" ${isAgile ? 'disabled' : ''}>
              </div>

              <div class="control-group">
                <label><span>💰 Chi phí / Nguồn lực (Cost) ${isAgile ? '— CỐ ĐỊNH TEAM' : ''}</span><span>${state.cost}%</span></label>
                <input type="range" min="60" max="140" value="${state.cost}" data-k="cost" ${isAgile ? 'disabled' : ''}>
              </div>

              <div class="kpi-row">
                <div class="kpi-card">
                  <div class="kpi-label">Chất lượng (Quality)</div>
                  <div class="kpi-val" style="color:${r.quality >= 80 ? 'var(--success)' : r.quality >= 60 ? 'var(--warning)' : 'var(--danger)'};">${r.quality}%</div>
                </div>
                <div class="kpi-card">
                  <div class="kpi-label">Rủi ro thất bại</div>
                  <div class="kpi-val" style="color:${r.risk <= 30 ? 'var(--success)' : r.risk <= 55 ? 'var(--warning)' : 'var(--danger)'};">${r.risk}%</div>
                </div>
              </div>
              <button class="btn btn-secondary btn-sm" id="resetTriBtn">↺ Đặt lại cân bằng (100%)</button>
            </div>

            <div>
              <svg viewBox="0 0 380 260" width="100%" style="max-width:380px;display:block;margin:auto;">
                <polygon points="190,${topY} ${leftX},220 ${rightX},220" fill="${r.color}" fill-opacity="0.14" stroke="${r.color}" stroke-width="3" stroke-linejoin="round"/>
                <circle cx="190" cy="${topY}" r="7" fill="var(--primary)"/>
                <circle cx="${leftX}" cy="220" r="7" fill="var(--trad)"/>
                <circle cx="${rightX}" cy="220" r="7" fill="var(--hybrid)"/>

                <text x="190" y="${Math.max(16, topY - 12)}" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-primary)">SCOPE (${state.scope}%)</text>
                <text x="${leftX}" y="244" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-primary)">TIME (${state.time}%)</text>
                <text x="${rightX}" y="244" text-anchor="middle" font-size="11" font-weight="800" fill="var(--text-primary)">COST (${state.cost}%)</text>

                <text x="190" y="155" text-anchor="middle" font-size="12" font-weight="800" fill="${r.color}">QUALITY</text>
                <text x="190" y="176" text-anchor="middle" font-size="19" font-weight="800" fill="${r.color}">${r.quality}%</text>
              </svg>
            </div>
          </div>

          <div class="callout" style="margin-top:1rem;border-color:${r.color};background:var(--bg-subtle);">
            <div class="callout-title" style="color:${r.color};">${r.status}</div>
            <div>${r.advice}</div>
          </div>
        </div>
      `;

      container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.mode = btn.dataset.mode;
          if (state.mode === 'agile') {
            state.time = 100;
            state.cost = 100;
          }
          render();
        });
      });

      container.querySelectorAll('input[type="range"]').forEach(inp => {
        inp.addEventListener('input', e => {
          state[e.target.dataset.k] = Number(e.target.value);
          render();
        });
      });

      const resetBtn = container.querySelector('#resetTriBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.scope = 100;
          state.time = 100;
          state.cost = 100;
          render();
        });
      }
    }

    render();
  };
})();
