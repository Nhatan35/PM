/* ==========================================================================
   Lab 5: Earned Value Management (EVM) & Milestone Trend Analysis (MTA)
   Covers Pha 03 (Project Controlling / Soll-Ist-Vergleich)
   ========================================================================== */
(function () {
  window.PMApp.labs.evm = function (container) {
    let evm = { bac: 2400, pv: 1200, ev: 1020, ac: 1150 };
    // MTA milestones over 4 reporting weeks (x = report week: 4, 8, 12, 16)
    let mta = {
      m2: [10, 10, 10, 10],     // Stable horizontal
      m3: [18, 19, 20.5, 22],   // Sloping up -> Delay trend!
      m4: [26, 26, 25.5, 25]    // Sloping down -> Ahead of schedule
    };

    function render() {
      const sv = evm.ev - evm.pv;
      const cv = evm.ev - evm.ac;
      const spi = evm.pv > 0 ? evm.ev / evm.pv : 1;
      const cpi = evm.ac > 0 ? evm.ev / evm.ac : 1;
      const eac = cpi > 0 ? Math.round(evm.bac / cpi) : evm.bac;
      const vac = evm.bac - eac;

      let rag = { label: 'GREEN — Ổn định', cls: 'pill-success', note: 'Tiến độ và chi phí đều nằm trong ngưỡng kiểm soát tốt.' };
      if (spi < 0.88 || cpi < 0.88) {
        rag = { label: 'RED — Cảnh báo nghiêm trọng', cls: 'pill-danger', note: 'Hiệu suất tiến độ hoặc chi phí lệch >12%. Cần báo cáo Ban chỉ đạo kèm phương án can thiệp (Fast-tracking / Scope Trade-off).' };
      } else if (spi < 0.96 || cpi < 0.96) {
        rag = { label: 'AMBER — Cần hành động khắc phục', cls: 'pill-hybrid', note: 'Đã xuất hiện sai lệch đáng kể nhưng PM vẫn có thể chủ động kéo lại bằng hành động khắc phục trong thẩm quyền.' };
      }

      // MTA SVG mapping: X (report week 0..26 -> 55..345), Y (milestone target week 0..28 -> 240..25)
      const repWeeks = [4, 8, 12, 16];
      const mapX = w => 55 + (w / 26) * 290;
      const mapY = w => 240 - (w / 28) * 215;
      const poly = arr => arr.map((val, i) => `${mapX(repWeeks[i]).toFixed(1)},${mapY(val).toFixed(1)}`).join(' ');

      container.innerHTML = `
        <div class="grid-2" style="align-items:start;">
          <!-- EVM Calculator -->
          <div class="card" style="margin:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
              <h3 style="margin:0;">1. Máy tính Earned Value (EVM)</h3>
              <span class="pill ${rag.cls}">${rag.label}</span>
            </div>
            <p style="font-size:0.82rem;">Đơn vị: Triệu VNĐ (mặc định là tình huống Tháng 3 của dự án NexusPortal).</p>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;margin-bottom:0.9rem;">
              <div>
                <label style="font-size:0.76rem;font-weight:700;">BAC (Tổng ngân sách gốc)</label>
                <input type="number" class="input-field" data-evm="bac" value="${evm.bac}" min="100" step="50">
              </div>
              <div>
                <label style="font-size:0.76rem;font-weight:700;">PV (Kế hoạch phải xong)</label>
                <input type="number" class="input-field" data-evm="pv" value="${evm.pv}" min="1" step="20">
              </div>
              <div>
                <label style="font-size:0.76rem;font-weight:700;">EV (Giá trị thực đã xong)</label>
                <input type="number" class="input-field" data-evm="ev" value="${evm.ev}" min="1" step="20">
              </div>
              <div>
                <label style="font-size:0.76rem;font-weight:700;">AC (Chi phí thực đã tiêu)</label>
                <input type="number" class="input-field" data-evm="ac" value="${evm.ac}" min="1" step="20">
              </div>
            </div>

            <div class="kpi-row">
              <div class="kpi-card">
                <div class="kpi-label">SPI (Tiến độ)</div>
                <div class="kpi-val" style="color:${spi >= 1 ? 'var(--success)' : spi >= 0.9 ? 'var(--warning)' : 'var(--danger)'};">${spi.toFixed(2)}</div>
                <div style="font-size:0.72rem;color:var(--text-muted);">SV = ${sv >= 0 ? '+' : ''}${sv}tr</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-label">CPI (Chi phí)</div>
                <div class="kpi-val" style="color:${cpi >= 1 ? 'var(--success)' : cpi >= 0.9 ? 'var(--warning)' : 'var(--danger)'};">${cpi.toFixed(2)}</div>
                <div style="font-size:0.72rem;color:var(--text-muted);">CV = ${cv >= 0 ? '+' : ''}${cv}tr</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-label">EAC (Dự báo tổng chi)</div>
                <div class="kpi-val" style="font-size:1.05rem;color:${vac >= 0 ? 'var(--success)' : 'var(--danger)'};">${eac}tr</div>
                <div style="font-size:0.72rem;color:var(--text-muted);">${vac >= 0 ? 'Tiết kiệm ' + vac + 'tr' : 'Nguy cơ vượt ' + Math.abs(vac) + 'tr'}</div>
              </div>
            </div>

            <div class="callout callout-insight" style="margin-bottom:0.5rem;">
              <div class="callout-title">Chẩn đoán tự động</div>
              <div>${rag.note}</div>
            </div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.65rem;">
              <button class="btn btn-secondary btn-sm" data-evmpreset="delay">Tình huống trễ &amp; đội vốn</button>
              <button class="btn btn-secondary btn-sm" data-evmpreset="healthy">Tình huống vượt chuẩn</button>
            </div>
          </div>

          <!-- MTA Chart -->
          <div class="card" style="margin:0;">
            <h3 style="margin-bottom:0.35rem;">2. Milestone Trend Analysis (MTA)</h3>
            <p style="font-size:0.82rem;">Quan sát hướng dốc của đường mốc: <strong>Ngang = Ổn định</strong> • <strong>Đi lên = Trễ dần</strong> • <strong>Đi xuống = Sớm hơn dự kiến</strong>.</p>

            <svg viewBox="0 0 375 275" width="100%" style="max-width:390px;display:block;margin:0 auto;">
              <!-- Diagonal (Report Date = Milestone Date) -->
              <polygon points="55,240 345,240 345,40" fill="#e2e8f0" opacity="0.45"/>
              <line x1="55" y1="240" x2="345" y2="40" stroke="#94a3b8" stroke-dasharray="5 4" stroke-width="1.5"/>

              <!-- Axes -->
              <line x1="55" y1="240" x2="350" y2="240" stroke="#334155" stroke-width="1.8"/>
              <line x1="55" y1="240" x2="55" y2="20" stroke="#334155" stroke-width="1.8"/>

              ${[4, 8, 12, 16, 20, 24].map(w => `
                <text x="${mapX(w)}" y="256" text-anchor="middle" font-size="9.5" fill="#64748b">T${w}</text>
                <text x="44" y="${mapY(w) + 3}" text-anchor="end" font-size="9.5" fill="#64748b">T${w}</text>
              `).join('')}

              <text x="200" y="272" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569">Tuần báo cáo (Reporting Date) →</text>
              <text x="15" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569" transform="rotate(-90 15 130)">Tuần dự kiến đạt mốc →</text>

              <!-- M2 (Stable) -->
              <polyline points="${poly(mta.m2)}" fill="none" stroke="#0284c7" stroke-width="2.6"/>
              ${mta.m2.map((v, i) => `<circle cx="${mapX(repWeeks[i])}" cy="${mapY(v)}" r="4" fill="#0284c7"/>`).join('')}
              <text x="${mapX(16) + 8}" y="${mapY(mta.m2[3]) + 4}" font-size="10" font-weight="700" fill="#0284c7">M2 (Ổn)</text>

              <!-- M3 (Delay Trend) -->
              <polyline points="${poly(mta.m3)}" fill="none" stroke="#dc2626" stroke-width="2.8"/>
              ${mta.m3.map((v, i) => `<circle cx="${mapX(repWeeks[i])}" cy="${mapY(v)}" r="4" fill="#dc2626"/>`).join('')}
              <text x="${mapX(16) + 8}" y="${mapY(mta.m3[3]) + 4}" font-size="10" font-weight="700" fill="#dc2626">M3 (Trễ!)</text>

              <!-- M4 (Ahead) -->
              <polyline points="${poly(mta.m4)}" fill="none" stroke="#059669" stroke-width="2.6"/>
              ${mta.m4.map((v, i) => `<circle cx="${mapX(repWeeks[i])}" cy="${mapY(v)}" r="4" fill="#059669"/>`).join('')}
              <text x="${mapX(16) + 8}" y="${mapY(mta.m4[3]) + 4}" font-size="10" font-weight="700" fill="#059669">M4 (Sớm)</text>
            </svg>

            <div class="control-group" style="margin-top:0.75rem;">
              <label><span>Điều chỉnh dự báo Mốc M3 tại Tuần báo cáo 16</span><span>Tuần ${mta.m3[3]}</span></label>
              <input type="range" min="16" max="27" step="0.5" value="${mta.m3[3]}" id="mtaM3Slider">
            </div>
          </div>
        </div>
      `;

      container.querySelectorAll('input[data-evm]').forEach(inp => {
        inp.addEventListener('change', e => {
          evm[e.target.dataset.evm] = Math.max(1, Number(e.target.value) || 1);
          render();
        });
      });

      container.querySelectorAll('[data-evmpreset]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.evmpreset === 'delay') evm = { bac: 2400, pv: 1200, ev: 1020, ac: 1150 };
          if (btn.dataset.evmpreset === 'healthy') evm = { bac: 2400, pv: 1200, ev: 1280, ac: 1180 };
          render();
        });
      });

      container.querySelector('#mtaM3Slider').addEventListener('input', e => {
        mta.m3[3] = Number(e.target.value);
        render();
      });
    }

    render();
  };
})();
