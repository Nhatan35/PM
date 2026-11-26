/* ==========================================================================
   Lab 4: WBS & Critical Path Method (CPM / Netzplantechnik) Calculator
   Automatically calculates ES, EF, LS, LF, Total Float, Critical Path & Gantt
   ========================================================================== */
(function () {
  window.PMApp.labs.cpm = function (container) {
    const defaultTasks = [
      { id: 'A', name: '1.1 Charter & Kick-off', dur: 2, preds: [] },
      { id: 'B', name: '1.2.1 Đặc tả UX/UI Cổng B2B', dur: 3, preds: ['A'] },
      { id: 'C', name: '1.2.2 Kiến trúc API ERP', dur: 4, preds: ['A'] },
      { id: 'D', name: '1.3.1 Phát triển Cổng Đặt hàng', dur: 6, preds: ['B'] },
      { id: 'E', name: '1.3.2 Tích hợp ERP 2 chiều', dur: 8, preds: ['C'] },
      { id: 'F', name: '1.4.1 Kiểm thử Hệ thống & Tải', dur: 3, preds: ['D', 'E'] },
      { id: 'G', name: '1.4.2 UAT, Đào tạo & Abnahme', dur: 4, preds: ['F'] }
    ];

    let tasks = defaultTasks.map(t => ({ ...t, preds: [...t.preds] }));

    function solveCPM() {
      const map = {};
      tasks.forEach(t => {
        map[t.id] = { ...t, es: 0, ef: 0, ls: 0, lf: 0, float: 0, critical: false, succs: [] };
      });
      tasks.forEach(t => {
        t.preds.forEach(p => {
          if (map[p]) map[p].succs.push(t.id);
        });
      });

      // Forward pass (DAG order assumed by task list)
      tasks.forEach(t => {
        const node = map[t.id];
        node.es = node.preds.length ? Math.max(...node.preds.map(p => map[p].ef)) : 0;
        node.ef = node.es + node.dur;
      });

      const totalDuration = Math.max(...tasks.map(t => map[t.id].ef), 1);

      // Backward pass
      [...tasks].reverse().forEach(t => {
        const node = map[t.id];
        node.lf = node.succs.length ? Math.min(...node.succs.map(s => map[s].ls)) : totalDuration;
        node.ls = node.lf - node.dur;
        node.float = node.ls - node.es;
        node.critical = node.float === 0;
      });

      const list = tasks.map(t => map[t.id]);
      const critPath = list.filter(n => n.critical).map(n => n.id).join(' → ');
      return { list, totalDuration, critPath };
    }

    function render() {
      const { list, totalDuration, critPath } = solveCPM();
      const chartW = 540;
      const rowH = 34;
      const svgH = list.length * rowH + 45;

      container.innerHTML = `
        <div class="card">
          <div class="card-header">
            <div>
              <h3 style="margin-bottom:0.25rem;">Máy tính Đường găng (CPM) &amp; Biểu đồ Gantt Trực Quan</h3>
              <p style="margin:0;font-size:0.84rem;">Thử tăng/giảm số tuần (Duration) của từng Work Package (ví dụ tăng <strong>D</strong> lên 10 tuần) để xem <strong>Đường găng</strong> tự động nhảy sang nhánh mới!</p>
            </div>
            <button class="btn btn-secondary btn-sm" id="resetCpmBtn">↺ Khôi phục dữ liệu mẫu</button>
          </div>

          <div class="kpi-row">
            <div class="kpi-card">
              <div class="kpi-label">Tổng thời lượng dự án</div>
              <div class="kpi-val" style="color:var(--primary);">${totalDuration} tuần</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Đường găng (Critical Path)</div>
              <div class="kpi-val" style="color:var(--danger);font-size:1.05rem;">${critPath}</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Số gói trên đường găng</div>
              <div class="kpi-val">${list.filter(x => x.critical).length} / ${list.length}</div>
            </div>
          </div>

          <div class="table-wrap">
            <table class="pm-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Work Package</th>
                  <th>Tiền nhiệm</th>
                  <th style="width:110px;">Thời lượng (tuần)</th>
                  <th>ES</th>
                  <th>EF</th>
                  <th>LS</th>
                  <th>LF</th>
                  <th>Float</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                ${list.map(n => `
                  <tr style="${n.critical ? 'background:var(--danger-soft);' : ''}">
                    <td><strong>${n.id}</strong></td>
                    <td>${n.name}</td>
                    <td><code>${n.preds.length ? n.preds.join(', ') : '—'}</code></td>
                    <td>
                      <input type="number" class="input-field" min="1" max="20" value="${n.dur}" data-id="${n.id}" style="padding:0.25rem 0.45rem;width:72px;">
                    </td>
                    <td>${n.es}</td>
                    <td>${n.ef}</td>
                    <td>${n.ls}</td>
                    <td>${n.lf}</td>
                    <td><strong>${n.float}</strong></td>
                    <td>${n.critical ? '<span class="pill pill-danger">Đường găng</span>' : `<span class="pill pill-success">Dự trữ ${n.float}w</span>`}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <h4 style="margin-top:1.25rem;margin-bottom:0.5rem;">Biểu đồ Gantt &amp; Khoảng dự trữ (Float)</h4>
          <div class="diagram-box">
            <svg viewBox="0 0 760 ${svgH}" width="100%" style="min-width:600px;display:block;margin:auto;">
              <!-- Grid Lines -->
              ${Array.from({ length: totalDuration + 1 }, (_, w) => {
                const x = 195 + (w / totalDuration) * chartW;
                return `
                  <line x1="${x}" y1="22" x2="${x}" y2="${svgH - 12}" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="${w % 5 === 0 ? '0' : '2 3'}"/>
                  ${w % 2 === 0 || w === totalDuration ? `<text x="${x}" y="15" text-anchor="middle" font-size="10" fill="#64748b">T${w}</text>` : ''}
                `;
              }).join('')}

              ${list.map((n, i) => {
                const y = 30 + i * rowH;
                const x = 195 + (n.es / totalDuration) * chartW;
                const w = (n.dur / totalDuration) * chartW;
                const floatW = (n.float / totalDuration) * chartW;
                const fill = n.critical ? '#dc2626' : '#2563eb';
                return `
                  <text x="10" y="${y + 15}" font-size="11" font-weight="600" fill="var(--text-primary)">${n.id}: ${n.name.slice(0, 22)}</text>
                  ${n.float > 0 ? `<rect x="${x + w}" y="${y + 6}" width="${floatW}" height="10" rx="3" fill="#94a3b8" opacity="0.45"/>` : ''}
                  <rect x="${x}" y="${y + 2}" width="${Math.max(w, 8)}" height="18" rx="4" fill="${fill}"/>
                  <text x="${x + w / 2}" y="${y + 14.5}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">${n.dur}w</text>
                `;
              }).join('')}
            </svg>
            <div class="diagram-caption">Thanh màu đỏ: Đường găng (Float = 0) • Thanh màu xanh: Có thời gian dự trữ • Vạch xám nối đuôi: Total Float.</div>
          </div>
        </div>
      `;

      container.querySelectorAll('input[type="number"]').forEach(inp => {
        inp.addEventListener('change', e => {
          const val = Math.max(1, Math.min(20, Number(e.target.value) || 1));
          const t = tasks.find(x => x.id === e.target.dataset.id);
          if (t) t.dur = val;
          render();
        });
      });

      container.querySelector('#resetCpmBtn').addEventListener('click', () => {
        tasks = defaultTasks.map(t => ({ ...t, preds: [...t.preds] }));
        render();
      });
    }

    render();
  };
})();
