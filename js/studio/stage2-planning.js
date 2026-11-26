/* ==========================================================================
   Stage 2: Planning Studio (M2 — WBS + PERT, CPM/Gantt, RACI, Risk/EMV, Gate 2)
   ========================================================================== */
(function () {
  window.PMApp.studio = window.PMApp.studio || {};
  const RACI_CYCLE = ['', 'R', 'A', 'C', 'I'];

  window.PMApp.studio.renderStage2 = function (container, navigate) {
    let activeSub = 'wbs'; // 'wbs' | 'cpm' | 'raci' | 'risk' | 'gate2'
    let pertOpenId = null;

    function render() {
      const store = window.PMApp.projectStore;
      const p = store.get();
      const rev = store.reviewGate2(p);
      const cpm = rev.cpm;
      const esc = window.PMApp.utils.escapeHtml;
      const overBudget = rev.totalWithReserve > Number(p.charter.budgetCap);
      const overTime = cpm.totalDuration > Number(p.charter.targetWeeks);

      container.innerHTML = `
        <div class="project-context-bar">
          <div>
            <div style="font-size:0.74rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Chặng 2 · Liên thông dữ liệu từ Charter (${esc(p.meta.name)})</div>
            <div style="display:flex;gap:0.8rem;flex-wrap:wrap;margin-top:0.25rem;font-size:0.84rem;">
              <span>💰 WBS (${cpm.totalCost}tr) + EMV (${rev.emv}tr) = <strong style="color:${overBudget ? 'var(--danger)' : 'var(--success)'};">${rev.totalWithReserve}tr / ${p.charter.budgetCap}tr</strong></span>
              <span>⏱️ Đường găng CPM: <strong style="color:${overTime ? 'var(--danger)' : 'var(--success)'};">${cpm.totalDuration} / ${p.charter.targetWeeks} tuần</strong></span>
            </div>
          </div>
          <span class="pill ${p.gates.g2 ? 'pill-success' : rev.canPass ? 'pill-hybrid' : 'pill-danger'}">
            ${p.gates.g2 ? '✓ GATE 2 BASELINE FROZEN' : `Chuẩn Gate 2: ${rev.passedCount}/${rev.total}`}
          </span>
        </div>

        <div class="lab-tabs">
          <button class="lab-tab ${activeSub === 'wbs' ? 'active' : ''}" data-sub="wbs">1. WBS &amp; Ước lượng PERT</button>
          <button class="lab-tab ${activeSub === 'cpm' ? 'active' : ''}" data-sub="cpm">2. Mạng CPM &amp; Gantt</button>
          <button class="lab-tab ${activeSub === 'raci' ? 'active' : ''}" data-sub="raci">3. Ma trận RACI (Click sửa)</button>
          <button class="lab-tab ${activeSub === 'risk' ? 'active' : ''}" data-sub="risk">4. Risk Register &amp; EMV</button>
          <button class="lab-tab ${activeSub === 'gate2' ? 'active' : ''}" data-sub="gate2">5. Chốt Baseline (Gate 2)</button>
        </div>

        ${activeSub === 'wbs' ? `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 style="margin-bottom:0.2rem;">🌲 Xưởng WBS &amp; Ước lượng 3 điểm PERT (O / M / P)</h3>
                <p style="margin:0;font-size:0.84rem;">Chỉnh sửa trực tiếp từng Work Package hoặc bấm <strong>🧮 PERT</strong> để tính thời lượng kỳ vọng <code>tE = (O + 4M + P) / 6</code>.</p>
              </div>
              <button class="btn btn-primary btn-sm" id="addWpBtn">+ Thêm Work Package</button>
            </div>

            ${overBudget ? `
              <div class="callout callout-pitfall" style="margin-top:0;">
                <div class="callout-title">⚠️ Vượt trần ngân sách Charter!</div>
                Tổng chi phí WBS (${cpm.totalCost}tr) + Dự phòng rủi ro EMV (${rev.emv}tr) = <strong>${rev.totalWithReserve}tr</strong> vượt trần <strong>${p.charter.budgetCap}tr</strong>. Hãy tối ưu chi phí gói việc hoặc quay lại Chặng 1 xin điều chỉnh Charter.
              </div>
            ` : ''}

            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>ID</th><th>Tên Work Package</th><th>Luồng (Stream)</th><th style="width:95px;">Tuần</th><th style="width:105px;">Chi phí (tr)</th><th>PERT</th><th></th></tr>
                </thead>
                <tbody>
                  ${p.wbs.map(w => `
                    <tr>
                      <td><strong>${w.id}</strong></td>
                      <td><input class="input-field" data-wpf="${w.id}:name" value="${esc(w.name)}" style="padding:0.3rem 0.5rem;"></td>
                      <td>
                        <select class="input-field" data-wpf="${w.id}:stream" style="padding:0.3rem 0.4rem;font-size:0.78rem;">
                          ${['Traditional', 'Agile Sprint', 'Sync Point'].map(st => `<option ${w.stream === st ? 'selected' : ''}>${st}</option>`).join('')}
                        </select>
                      </td>
                      <td><input type="number" min="1" max="30" class="input-field" data-wpf="${w.id}:dur" value="${w.dur}" style="padding:0.3rem 0.45rem;"></td>
                      <td><input type="number" min="0" step="10" class="input-field" data-wpf="${w.id}:cost" value="${w.cost}" style="padding:0.3rem 0.45rem;"></td>
                      <td><button class="btn btn-secondary btn-sm" data-pert="${w.id}">🧮 PERT</button></td>
                      <td><button class="btn btn-ghost btn-sm" data-wpdel="${w.id}" ${p.wbs.length <= 3 ? 'disabled' : ''}>✕</button></td>
                    </tr>
                    ${pertOpenId === w.id ? `
                      <tr style="background:var(--primary-soft);">
                        <td colspan="7">
                          <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;font-size:0.82rem;">
                            <strong>PERT (${w.id}):</strong>
                            <span>Lạc quan (O): <input type="number" min="1" id="pertO" value="${w.o || Math.max(1, w.dur - 1)}" style="width:58px;" class="input-field"></span>
                            <span>Khả thi (M): <input type="number" min="1" id="pertM" value="${w.m || w.dur}" style="width:58px;" class="input-field"></span>
                            <span>Bi quan (P): <input type="number" min="1" id="pertP" value="${w.p || w.dur + 2}" style="width:58px;" class="input-field"></span>
                            <button class="btn btn-primary btn-sm" data-applypert="${w.id}">Áp dụng tE</button>
                            <button class="btn btn-ghost btn-sm" id="closePertBtn">Đóng</button>
                          </div>
                        </td>
                      </tr>
                    ` : ''}
                  `).join('')}
                </tbody>
              </table>
            </div>
            <div style="margin-top:0.9rem;display:flex;justify-content:flex-end;">
              <button class="btn btn-primary btn-sm" data-sub="cpm">Tiếp: Xem Đường găng CPM &amp; Gantt →</button>
            </div>
          </div>
        ` : ''}

        ${activeSub === 'cpm' ? (() => {
          const chartW = 520;
          const rowH = 34;
          const svgH = cpm.tasks.length * rowH + 42;

          // Compute Weekly Resource Load (from RACI 'R' assignments) & Cumulative S-Curve
          const totalW = cpm.totalDuration;
          const weeklyRoleLoad = Array.from({ length: totalW }, () => ({}));
          const weeklyCost = Array.from({ length: totalW }, () => 0);
          cpm.tasks.forEach(t => {
            const rRow = p.raci[t.id] || {};
            const rRoles = Object.keys(rRow).filter(role => rRow[role] === 'R');
            const perWeekCost = t.cost / Math.max(1, t.dur);
            for (let w = t.es; w < t.ef && w < totalW; w++) {
              weeklyCost[w] += perWeekCost;
              rRoles.forEach(role => {
                weeklyRoleLoad[w][role] = (weeklyRoleLoad[w][role] || 0) + 100;
              });
            }
          });

          const maxLoadPerWeek = weeklyRoleLoad.map((obj, wIdx) => {
            const entries = Object.entries(obj);
            if (!entries.length) return { w: wIdx + 1, load: 0, role: '' };
            entries.sort((a, b) => b[1] - a[1]);
            return { w: wIdx + 1, load: entries[0][1], role: entries[0][0] };
          });
          const overloaded = maxLoadPerWeek.filter(x => x.load > 100);

          // S-Curve cumulative cost points
          let cum = 0;
          const sCurve = weeklyCost.map((c, idx) => { cum += c; return { w: idx + 1, val: Math.round(cum) }; });
          const maxCum = Math.max(1, cpm.totalCost);
          const sPoly = `40,155 ` + sCurve.map(pt => `${(40 + (pt.w / totalW) * 295).toFixed(1)},${(155 - (pt.val / maxCum) * 130).toFixed(1)}`).join(' ');

          return `
            <div class="card">
              <h3>⏱️ Mạng Công việc CPM &amp; Biểu đồ Gantt Tự động</h3>
              <p style="font-size:0.84rem;">Chỉnh danh sách tiền nhiệm (cách nhau dấu phẩy, VD: <code>WP1, WP2</code>) để quan sát <strong>Đường găng (${cpm.critPath.join(' → ')})</strong> tự động cập nhật.</p>

              ${overTime ? `
                <div class="callout callout-pitfall">
                  <div class="callout-title">⚠️ Đường găng (${cpm.totalDuration} tuần) vượt hạn mục tiêu Charter (${p.charter.targetWeeks} tuần)!</div>
                  Gợi ý chuẩn Dechange: Hãy áp dụng <strong>Fast-Tracking</strong> (cho 2 gói việc chạy song song bằng cách đổi tiền nhiệm) hoặc <strong>Crashing</strong> (rút ngắn thời lượng 1 gói việc màu đỏ trên Đường găng ở tab WBS).
                </div>
              ` : ''}

              <div class="table-wrap">
                <table class="pm-table">
                  <thead><tr><th>ID</th><th>Work Package</th><th>Tiền nhiệm (Preds)</th><th>Tuần</th><th>ES</th><th>EF</th><th>LS</th><th>LF</th><th>Float</th><th>Trạng thái</th></tr></thead>
                  <tbody>
                    ${cpm.tasks.map(t => `
                      <tr style="${t.critical ? 'background:var(--danger-soft);' : ''}">
                        <td><strong>${t.id}</strong></td>
                        <td>${esc(t.name)}</td>
                        <td><input class="input-field" data-preds="${t.id}" value="${t.preds.join(', ')}" placeholder="Không có" style="width:110px;padding:0.25rem 0.45rem;font-size:0.78rem;"></td>
                        <td>${t.dur}</td><td>${t.es}</td><td>${t.ef}</td><td>${t.ls}</td><td>${t.lf}</td><td><strong>${t.float}</strong></td>
                        <td>${t.critical ? '<span class="pill pill-danger">Đường găng</span>' : `<span class="pill pill-success">Float ${t.float}w</span>`}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <div class="diagram-box" style="margin-top:1rem;">
                <svg viewBox="0 0 750 ${svgH}" width="100%" style="min-width:580px;display:block;margin:auto;">
                  ${Array.from({ length: cpm.totalDuration + 1 }, (_, w) => {
                    const x = 195 + (w / cpm.totalDuration) * chartW;
                    return `<line x1="${x}" y1="20" x2="${x}" y2="${svgH - 10}" stroke="#cbd5e1" stroke-dasharray="2 3"/>${w % 4 === 0 || w === cpm.totalDuration ? `<text x="${x}" y="14" text-anchor="middle" font-size="9.5" fill="#64748b">T${w}</text>` : ''}`;
                  }).join('')}
                  ${cpm.tasks.map((t, i) => {
                    const y = 28 + i * rowH;
                    const x = 195 + (t.es / cpm.totalDuration) * chartW;
                    const bw = Math.max(8, (t.dur / cpm.totalDuration) * chartW);
                    const fw = (t.float / cpm.totalDuration) * chartW;
                    return `
                      <text x="8" y="${y + 14}" font-size="10.5" font-weight="600" fill="var(--text-primary)">${t.id}: ${esc(t.name.slice(0, 22))}</text>
                      ${t.float > 0 ? `<rect x="${x + bw}" y="${y + 6}" width="${fw}" height="9" rx="3" fill="#94a3b8" opacity="0.45"/>` : ''}
                      <rect x="${x}" y="${y + 2}" width="${bw}" height="17" rx="4" fill="${t.critical ? '#dc2626' : '#2563eb'}"/>
                      <text x="${x + bw / 2}" y="${y + 14}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">${t.dur}w</text>
                    `;
                  }).join('')}
                </svg>
              </div>

              <!-- Resource Histogram & S-Curve -->
              <div class="grid-2" style="margin-top:1rem;">
                <div class="diagram-box" style="margin:0;">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                    <strong style="font-size:0.84rem;">👥 Resource Histogram (Tải nhân sự đỉnh theo tuần)</strong>
                    <span class="pill ${overloaded.length ? 'pill-danger' : 'pill-success'}">${overloaded.length ? `Quá tải ${overloaded.length} tuần!` : '✓ Tải cân bằng ≤100%'}</span>
                  </div>
                  <svg viewBox="0 0 360 175" width="100%" style="display:block;margin:auto;">
                    <line x1="36" y1="150" x2="345" y2="150" stroke="#475569" stroke-width="1.4"/>
                    <line x1="36" y1="85" x2="345" y2="85" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.2"/>
                    <text x="342" y="80" text-anchor="end" font-size="8.5" fill="#dc2626" font-weight="700">Ngưỡng 100%</text>
                    ${maxLoadPerWeek.map((d, idx) => {
                      const bw = Math.max(4, (300 / totalW) - 2);
                      const x = 40 + idx * (300 / totalW);
                      const h = Math.min(130, (d.load / 200) * 130);
                      return `<rect x="${x}" y="${150 - h}" width="${bw}" height="${h}" rx="2" fill="${d.load > 100 ? '#dc2626' : '#2563eb'}"/>`;
                    }).join('')}
                    <text x="190" y="168" text-anchor="middle" font-size="9.5" fill="#64748b">Trục thời gian: Tuần 1 → Tuần ${totalW}</text>
                  </svg>
                  <div class="diagram-caption">${overloaded.length ? `Cảnh báo Resource Leveling: Vai trò <strong>${overloaded[0].role}</strong> đạt ${overloaded[0].load}% tại Tuần ${overloaded[0].w} (làm 2 gói song song). Hãy giãn gói có Float > 0 hoặc chia vai R trong bảng RACI!` : 'Mọi vai trò R trong bảng RACI đều phân bổ hợp lý không bị chồng chéo >100%.'}</div>
                </div>

                <div class="diagram-box" style="margin:0;">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                    <strong style="font-size:0.84rem;">💰 Đường cong Cost Baseline (S-Curve tích lũy)</strong>
                    <span class="pill pill-primary">WBS: ${cpm.totalCost}tr</span>
                  </div>
                  <svg viewBox="0 0 360 175" width="100%" style="display:block;margin:auto;">
                    <line x1="40" y1="155" x2="340" y2="155" stroke="#475569" stroke-width="1.4"/>
                    <line x1="40" y1="155" x2="40" y2="20" stroke="#475569" stroke-width="1.4"/>
                    <polyline points="${sPoly}" fill="none" stroke="#059669" stroke-width="2.6"/>
                    <text x="335" y="30" text-anchor="end" font-size="9.5" fill="#059669" font-weight="700">${cpm.totalCost}tr (T${totalW})</text>
                    <text x="190" y="170" text-anchor="middle" font-size="9.5" fill="#64748b">Chi phí kế hoạch tích lũy (PV) từ Tuần 1 → Tuần ${totalW}</text>
                  </svg>
                  <div class="diagram-caption">Đường cong chữ S thể hiện dòng tiền giải ngân kế hoạch gốc (chưa tính ${rev.emv}tr quỹ dự phòng EMV).</div>
                </div>
              </div>

              <div style="margin-top:0.9rem;display:flex;justify-content:flex-end;">
                <button class="btn btn-primary btn-sm" data-sub="raci">Tiếp: Ma trận RACI →</button>
              </div>
            </div>
          `;
        })() : ''}

        ${activeSub === 'raci' ? `
          <div class="card">
            <h3>👥 Ma trận Trách nhiệm RACI Tương tác</h3>
            <p style="font-size:0.84rem;"><strong>Bấm vào từng ô</strong> để đổi vòng tròn <code>— → R → A → C → I</code>. Quy tắc bắt buộc: Mỗi dòng phải có <strong>DUY NHẤT 1 chữ A</strong> (Accountable) và <strong>ít nhất 1 chữ R</strong> (Responsible)!</p>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr>
                    <th>Work Package</th>
                    ${p.raciRoles.map(r => `<th style="text-align:center;">${r}</th>`).join('')}
                    <th>Kiểm tra</th>
                  </tr>
                </thead>
                <tbody>
                  ${p.wbs.map(w => {
                    const row = p.raci[w.id] || {};
                    const vals = Object.values(row);
                    const aCnt = vals.filter(v => v === 'A').length;
                    const rCnt = vals.filter(v => v === 'R').length;
                    const ok = aCnt === 1 && rCnt >= 1;
                    return `
                      <tr style="${!ok ? 'background:var(--danger-soft);' : ''}">
                        <td><strong>${w.id}</strong> · ${esc(w.name)}</td>
                        ${p.raciRoles.map(role => {
                          const val = row[role] || '';
                          return `<td style="text-align:center;"><button class="raci-btn" data-raci="${w.id}:${role}" data-val="${val}">${val || '—'}</button></td>`;
                        }).join('')}
                        <td>${ok ? '<span class="pill pill-success">✓ Chuẩn</span>' : `<span class="pill pill-danger">✕ A:${aCnt} · R:${rCnt}</span>`}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <div style="margin-top:0.9rem;display:flex;justify-content:flex-end;">
              <button class="btn btn-primary btn-sm" data-sub="risk">Tiếp: Risk Register &amp; EMV →</button>
            </div>
          </div>
        ` : ''}

        ${activeSub === 'risk' ? `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 style="margin-bottom:0.2rem;">🛡️ Sổ Đăng ký Rủi ro (Risk Register) &amp; Quỹ Dự phòng EMV</h3>
                <p style="margin:0;font-size:0.84rem;">Quỹ dự phòng rủi ro tự động tính theo <code>EMV = Σ(Xác suất% × Thiệt hại)</code> = <strong>${rev.emv} triệu VNĐ</strong> (tự cộng vào Cost Baseline).</p>
              </div>
            </div>
            <form id="addRiskForm" style="display:grid;gap:0.55rem;margin-bottom:1rem;padding:0.85rem;background:var(--bg-subtle);border-radius:var(--radius-md);">
              <input class="input-field" id="rkText" placeholder="Mô tả rủi ro (Nguyên nhân → Sự kiện → Hệ quả)..." required>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:0.5rem;">
                <select class="input-field" id="rkProb"><option value="1">Xác suất: 1 (10%)</option><option value="2">Xác suất: 2 (25%)</option><option value="3" selected>Xác suất: 3 (45%)</option><option value="4">Xác suất: 4 (65%)</option><option value="5">Xác suất: 5 (85%)</option></select>
                <select class="input-field" id="rkImp"><option value="2">Tác động: 2</option><option value="3">Tác động: 3</option><option value="4" selected>Tác động: 4</option><option value="5">Tác động: 5 (Rất nặng)</option></select>
                <input type="number" class="input-field" id="rkCost" value="150" min="10" placeholder="Thiệt hại (tr)">
                <select class="input-field" id="rkStrat"><option>Mitigate</option><option>Avoid</option><option>Transfer</option><option>Accept</option></select>
                <input class="input-field" id="rkPlan" placeholder="Hành động ứng phó...">
              </div>
              <button class="btn btn-primary btn-sm" type="submit" style="justify-self:start;">+ Thêm Rủi ro vào Risk Register</button>
            </form>

            <div class="table-wrap">
              <table class="pm-table">
                <thead><tr><th>Mã</th><th>Rủi ro</th><th>P × I</th><th>Thiệt hại</th><th>Chiến lược &amp; Ứng phó</th><th></th></tr></thead>
                <tbody>
                  ${p.risks.map(r => {
                    const score = r.prob * r.impact;
                    const cls = score >= 15 ? 'pill-danger' : score >= 8 ? 'pill-hybrid' : 'pill-success';
                    return `
                      <tr>
                        <td><strong>${r.id}</strong></td>
                        <td>${esc(r.text)}</td>
                        <td><span class="pill ${cls}">${r.prob}×${r.impact} = ${score}</span></td>
                        <td>${r.costImpact}tr</td>
                        <td><strong>${r.strategy}:</strong> ${esc(r.plan || '—')}</td>
                        <td><button class="btn btn-ghost btn-sm" data-rkdel="${r.id}">✕</button></td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
            <div style="margin-top:0.9rem;display:flex;justify-content:flex-end;">
              <button class="btn btn-primary btn-sm" data-sub="gate2">Tiếp: Chốt Baseline (Gate 2) →</button>
            </div>
          </div>
        ` : ''}

        ${activeSub === 'gate2' ? `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
              <div>
                <h2 style="margin-bottom:0.2rem;">🚪 Cổng Kiểm Soát Gate 2: Baseline Freeze (Chốt Kế Hoạch Gốc)</h2>
                <p style="margin:0;font-size:0.86rem;">Khóa cứng Scope, Schedule (Đường găng ${cpm.totalDuration} tuần) và Cost Baseline (${rev.totalWithReserve}tr) làm chuẩn đo EVM/MTA ở Chặng 3.</p>
              </div>
              <span class="pill ${p.gates.g2 ? 'pill-success' : rev.canPass ? 'pill-hybrid' : 'pill-danger'}">
                ${p.gates.g2 ? '✓ BASELINE FROZEN' : `Đạt ${rev.passedCount}/${rev.total}`}
              </span>
            </div>

            <div class="review-panel ${rev.canPass ? 'pass' : 'fail'}">
              ${rev.checks.map(c => `<div class="review-item"><span>${c.ok ? '✅' : '❌'}</span><span>${c.msg}</span></div>`).join('')}
            </div>

            <div style="margin-top:1rem;display:flex;gap:0.7rem;flex-wrap:wrap;">
              <button class="btn ${rev.canPass ? 'btn-success' : 'btn-secondary'}" id="freezeGate2Btn">
                ${rev.canPass ? '❄️ Khóa Baseline (Vượt Gate 2)' : '🔒 Sửa đủ các mục ❌ để chốt Baseline'}
              </button>
              <button class="btn btn-primary" id="nextToStage3Btn">Chuyển sang Chặng 3: Vận Hành Sống →</button>
            </div>
          </div>
        ` : ''}
      `;

      container.querySelectorAll('[data-sub]').forEach(btn => {
        btn.addEventListener('click', () => { activeSub = btn.dataset.sub; render(); });
      });

      // WBS events
      const addWp = container.querySelector('#addWpBtn');
      if (addWp) {
        addWp.addEventListener('click', () => {
          const nextNum = p.wbs.length + 1;
          const id = 'WP' + nextNum;
          p.wbs.push({ id, name: `1.${nextNum} Gói công việc mới`, dur: 2, cost: 100, preds: [p.wbs[p.wbs.length - 1].id], o: 1, m: 2, p: 4, status: 'backlog', progress: 0, stream: 'Traditional' });
          p.raci[id] = { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'R', QA: 'I' };
          p.gates.g2 = false;
          store.save();
          render();
        });
      }

      container.querySelectorAll('[data-wpf]').forEach(el => {
        el.addEventListener('change', e => {
          const [id, field] = e.target.dataset.wpf.split(':');
          const wp = p.wbs.find(x => x.id === id);
          if (!wp) return;
          wp[field] = (field === 'dur' || field === 'cost') ? Math.max(field === 'dur' ? 1 : 0, Number(e.target.value) || 0) : e.target.value;
          p.gates.g2 = false;
          store.save();
          render();
        });
      });

      container.querySelectorAll('[data-wpdel]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.wpdel;
          p.wbs = p.wbs.filter(x => x.id !== id);
          delete p.raci[id];
          p.gates.g2 = false;
          store.save();
          render();
        });
      });

      container.querySelectorAll('[data-pert]').forEach(btn => {
        btn.addEventListener('click', () => {
          pertOpenId = pertOpenId === btn.dataset.pert ? null : btn.dataset.pert;
          render();
        });
      });

      const applyPert = container.querySelector('[data-applypert]');
      if (applyPert) {
        applyPert.addEventListener('click', () => {
          const id = applyPert.dataset.applypert;
          const wp = p.wbs.find(x => x.id === id);
          const o = Math.max(1, Number(container.querySelector('#pertO').value) || 1);
          const m = Math.max(1, Number(container.querySelector('#pertM').value) || 1);
          const pv = Math.max(1, Number(container.querySelector('#pertP').value) || 1);
          const te = Math.max(1, Math.round((o + 4 * m + pv) / 6));
          if (wp) { wp.o = o; wp.m = m; wp.p = pv; wp.dur = te; }
          pertOpenId = null;
          p.gates.g2 = false;
          store.save();
          window.PMApp.utils.showToast(`PERT đã tính tE = ${te} tuần (σ = ${((pv - o) / 6).toFixed(1)}w) cho ${id}!`);
          render();
        });
      }

      const closePert = container.querySelector('#closePertBtn');
      if (closePert) closePert.addEventListener('click', () => { pertOpenId = null; render(); });

      // CPM Predecessors
      container.querySelectorAll('[data-preds]').forEach(inp => {
        inp.addEventListener('change', e => {
          const id = e.target.dataset.preds;
          const wp = p.wbs.find(x => x.id === id);
          if (wp) {
            wp.preds = e.target.value.split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
            p.gates.g2 = false;
            store.save();
            render();
          }
        });
      });

      // RACI Click Cycle
      container.querySelectorAll('[data-raci]').forEach(btn => {
        btn.addEventListener('click', () => {
          const [wid, role] = btn.dataset.raci.split(':');
          p.raci[wid] = p.raci[wid] || {};
          const cur = p.raci[wid][role] || '';
          const next = RACI_CYCLE[(RACI_CYCLE.indexOf(cur) + 1) % RACI_CYCLE.length];
          p.raci[wid][role] = next;
          p.gates.g2 = false;
          store.save();
          render();
        });
      });

      // Risks
      const rkForm = container.querySelector('#addRiskForm');
      if (rkForm) {
        rkForm.addEventListener('submit', e => {
          e.preventDefault();
          p.risks.push({
            id: 'R' + (p.risks.length + 1),
            text: container.querySelector('#rkText').value.trim(),
            prob: Number(container.querySelector('#rkProb').value),
            impact: Number(container.querySelector('#rkImp').value),
            costImpact: Number(container.querySelector('#rkCost').value) || 100,
            strategy: container.querySelector('#rkStrat').value,
            owner: 'PM',
            plan: container.querySelector('#rkPlan').value.trim() || 'Theo dõi định kỳ hàng tuần'
          });
          p.gates.g2 = false;
          store.save();
          render();
        });
      }

      container.querySelectorAll('[data-rkdel]').forEach(btn => {
        btn.addEventListener('click', () => {
          p.risks = p.risks.filter(x => x.id !== btn.dataset.rkdel);
          p.gates.g2 = false;
          store.save();
          render();
        });
      });

      // Gate 2 Freeze
      const freezeBtn = container.querySelector('#freezeGate2Btn');
      if (freezeBtn) {
        freezeBtn.addEventListener('click', () => {
          if (!rev.canPass) {
            window.PMApp.utils.showToast('Chưa thể chốt Baseline: Hãy sửa hết các mục ❌ trước!');
            return;
          }
          p.gates.g2 = true;
          p.baseline = {
            frozenAt: new Date().toLocaleDateString('vi-VN'),
            bac: rev.totalWithReserve,
            wbsCost: cpm.totalCost,
            emvReserve: rev.emv,
            duration: cpm.totalDuration,
            critPath: cpm.critPath
          };
          p.execution.mtaHistory = [{ cycle: 0, forecast: cpm.totalDuration }];
          store.save();
          window.PMApp.utils.showToast('❄️ Đã khóa Baseline (Gate 2 Passed) — Sẵn sàng bước vào Vận hành sống!');
          render();
        });
      }

      const nextS3 = container.querySelector('#nextToStage3Btn');
      if (nextS3) nextS3.addEventListener('click', () => navigate('stage/3'));
    }

    render();
  };
})();
