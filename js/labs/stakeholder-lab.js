/* ==========================================================================
   Lab 3: Stakeholder Power–Interest Matrix & Phase-Gate Readiness (G1 & G4)
   Covers Pha 01 (Initiation) & Pha 04 (Handover / Abnahme)
   ========================================================================== */
(function () {
  window.PMApp.labs.stakeholder = function (container) {
    let stakeholders = [
      { id: 1, name: 'GĐ Kinh doanh (Sponsor)', power: 5, interest: 5, attitude: 'Ủng hộ' },
      { id: 2, name: 'GĐ Tài chính (CFO)', power: 5, interest: 2, attitude: 'Trung lập' },
      { id: 3, name: 'Trưởng phòng CNTT', power: 4, interest: 4, attitude: 'Trung lập' },
      { id: 4, name: 'Đội Sales Admin (User)', power: 2, interest: 5, attitude: 'Lo ngại' },
      { id: 5, name: 'Phòng Hành chính', power: 1, interest: 2, attitude: 'Ủng hộ' }
    ];

    const gates = {
      g1: {
        title: 'Gate 1: Charter Approval (Kết thúc Pha Initiation)',
        items: [
          'Đã đánh giá Projectworthiness & Business Case khả thi (ROI/Payback)',
          'Mục tiêu SMART, Deliverables (In-Scope) và Non-Goals (Out-of-Scope) đã viết rõ',
          'Đã hoàn tất Stakeholder Register & chiến lược xử lý nhóm phản đối/lo ngại',
          'Ngân sách khung, cột mốc sơ bộ và thẩm quyền PM được xác định',
          'Project Sponsor đã chính thức ký duyệt Project Charter (Projektauftrag)'
        ]
      },
      g4: {
        title: 'Gate 4: Formal Acceptance & Closure (Kết thúc Pha Handover)',
        items: [
          '100% kịch bản UAT trọng yếu đạt tiêu chí Acceptance Criteria',
          'Khách hàng / Sponsor đã ký Biên bản nghiệm thu chính thức (Abnahme)',
          'Các lỗi nhỏ tồn đọng đã ghi vào phụ lục Punch List kèm hạn xử lý',
          'Đã bàn giao tài liệu, đào tạo người dùng & kích hoạt lịch Hypercare cho đội Ops',
          'Đã tổ chức Lessons Learned, lập Final Report, quyết toán hợp đồng & giải phóng nhân sự'
        ]
      }
    };

    let gateChecks = {
      g1: [true, true, true, false, false],
      g4: [true, true, true, false, false]
    };

    function classify(s) {
      if (s.power >= 3 && s.interest >= 3) return { label: 'Manage Closely', cls: 'pill-danger' };
      if (s.power >= 3 && s.interest < 3) return { label: 'Keep Satisfied', cls: 'pill-hybrid' };
      if (s.power < 3 && s.interest >= 3) return { label: 'Keep Informed', cls: 'pill-trad' };
      return { label: 'Monitor', cls: 'pill-primary' };
    }

    function render() {
      const g1Done = gateChecks.g1.filter(Boolean).length;
      const g4Done = gateChecks.g4.filter(Boolean).length;
      const gateStatus = (done, total) => {
        if (done === total) return { text: 'GO — Đủ điều kiện vượt cổng!', cls: 'pill-success' };
        if (done >= total - 1) return { text: 'CONDITIONAL GO — Bổ sung 1 mục còn thiếu', cls: 'pill-hybrid' };
        return { text: 'HOLD — Chưa đủ điều kiện mở pha tiếp theo', cls: 'pill-danger' };
      };

      const g1St = gateStatus(g1Done, gates.g1.items.length);
      const g4St = gateStatus(g4Done, gates.g4.items.length);

      container.innerHTML = `
        <div class="grid-2" style="align-items:start;">
          <div class="card" style="margin:0;">
            <h3>Bản đồ Stakeholder (Power – Interest)</h3>
            <svg viewBox="0 0 380 300" width="100%" style="max-width:390px;display:block;margin:0 auto;">
              <!-- 4 Quadrants -->
              <rect x="55" y="25" width="150" height="115" fill="#fef3c7" opacity="0.6"/>
              <rect x="205" y="25" width="150" height="115" fill="#fee2e2" opacity="0.65"/>
              <rect x="55" y="140" width="150" height="115" fill="#f1f5f9" opacity="0.9"/>
              <rect x="205" y="140" width="150" height="115" fill="#e0f2fe" opacity="0.7"/>

              <line x1="205" y1="25" x2="205" y2="255" stroke="#94a3b8" stroke-dasharray="4 3"/>
              <line x1="55" y1="140" x2="355" y2="140" stroke="#94a3b8" stroke-dasharray="4 3"/>
              <rect x="55" y="25" width="300" height="230" fill="none" stroke="#475569" stroke-width="1.5"/>

              <text x="130" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">KEEP SATISFIED</text>
              <text x="280" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">MANAGE CLOSELY</text>
              <text x="130" y="246" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">MONITOR</text>
              <text x="280" y="246" text-anchor="middle" font-size="10" font-weight="700" fill="#075985">KEEP INFORMED</text>

              <text x="205" y="285" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Mức độ quan tâm (Interest: 1 → 5)</text>
              <text x="20" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" transform="rotate(-90 20 140)">Quyền lực (Power: 1 → 5)</text>

              ${stakeholders.map((s, idx) => {
                const x = 55 + ((s.interest - 0.5) / 5) * 300;
                const y = 255 - ((s.power - 0.5) / 5) * 230;
                const dotColor = s.attitude === 'Lo ngại' || s.attitude === 'Phản đối' ? '#dc2626' : s.attitude === 'Ủng hộ' ? '#059669' : '#2563eb';
                return `
                  <g>
                    <circle cx="${x}" cy="${y}" r="11" fill="${dotColor}" stroke="#fff" stroke-width="2"/>
                    <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">${idx + 1}</text>
                  </g>
                `;
              }).join('')}
            </svg>
            <div style="display:flex;justify-content:center;gap:1rem;font-size:0.75rem;margin-top:0.5rem;color:var(--text-muted);">
              <span>🟢 Ủng hộ</span><span>🔵 Trung lập</span><span>🔴 Lo ngại / Phản đối</span>
            </div>
          </div>

          <div class="card" style="margin:0;">
            <h3>Thêm Stakeholder mới</h3>
            <form id="addStakeholderForm" style="display:grid;gap:0.65rem;">
              <input class="input-field" id="shName" placeholder="Tên / Nhóm (vd: Pháp chế, Đại lý lớn...)" required>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;">
                <div>
                  <label style="font-size:0.74rem;color:var(--text-muted);">Quyền lực (1–5)</label>
                  <select class="input-field" id="shPower"><option>1</option><option>2</option><option selected>4</option><option>3</option><option>5</option></select>
                </div>
                <div>
                  <label style="font-size:0.74rem;color:var(--text-muted);">Quan tâm (1–5)</label>
                  <select class="input-field" id="shInterest"><option>1</option><option>2</option><option>3</option><option selected>4</option><option>5</option></select>
                </div>
                <div>
                  <label style="font-size:0.74rem;color:var(--text-muted);">Thái độ</label>
                  <select class="input-field" id="shAttitude"><option>Ủng hộ</option><option selected>Trung lập</option><option>Lo ngại</option><option>Phản đối</option></select>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-sm">+ Thêm lên ma trận</button>
            </form>

            <div class="table-wrap" style="margin-top:0.9rem;">
              <table class="pm-table">
                <thead><tr><th>#</th><th>Stakeholder</th><th>Chiến lược</th><th></th></tr></thead>
                <tbody>
                  ${stakeholders.map((s, idx) => {
                    const c = classify(s);
                    return `
                      <tr>
                        <td><strong>${idx + 1}</strong></td>
                        <td>${window.PMApp.utils.escapeHtml(s.name)} <div style="font-size:0.74rem;color:var(--text-muted);">P:${s.power} · I:${s.interest} · ${s.attitude}</div></td>
                        <td><span class="pill ${c.cls}">${c.label}</span></td>
                        <td><button class="btn btn-ghost btn-sm" data-del="${s.id}" title="Xóa">✕</button></td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Phase Gate Readiness Checker (G1 & G4) -->
        <div class="grid-2" style="margin-top:1.25rem;">
          ${['g1', 'g4'].map(gk => {
            const g = gates[gk];
            const st = gk === 'g1' ? g1St : g4St;
            const done = gk === 'g1' ? g1Done : g4Done;
            return `
              <div class="card" style="margin:0;">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.65rem;">
                  <h4 style="margin:0;">${g.title}</h4>
                  <span class="pill ${st.cls}">${done}/${g.items.length}</span>
                </div>
                <div style="margin-bottom:0.75rem;"><span class="pill ${st.cls}">${st.text}</span></div>
                <div style="display:grid;gap:0.45rem;">
                  ${g.items.map((txt, i) => `
                    <label style="display:flex;align-items:flex-start;gap:0.55rem;font-size:0.84rem;color:var(--text-secondary);cursor:pointer;">
                      <input type="checkbox" data-gate="${gk}" data-idx="${i}" ${gateChecks[gk][i] ? 'checked' : ''} style="margin-top:3px;">
                      <span>${txt}</span>
                    </label>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      container.querySelector('#addStakeholderForm').addEventListener('submit', e => {
        e.preventDefault();
        const name = container.querySelector('#shName').value.trim();
        if (!name) return;
        stakeholders.push({
          id: Date.now(),
          name,
          power: Number(container.querySelector('#shPower').value),
          interest: Number(container.querySelector('#shInterest').value),
          attitude: container.querySelector('#shAttitude').value
        });
        render();
      });

      container.querySelectorAll('[data-del]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = Number(btn.dataset.del);
          stakeholders = stakeholders.filter(s => s.id !== id);
          render();
        });
      });

      container.querySelectorAll('input[data-gate]').forEach(chk => {
        chk.addEventListener('change', () => {
          gateChecks[chk.dataset.gate][Number(chk.dataset.idx)] = chk.checked;
          render();
        });
      });
    }

    render();
  };
})();
