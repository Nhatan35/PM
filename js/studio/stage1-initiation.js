/* ==========================================================================
   Stage 1: Initiation Studio (M0 + M1 — Practice-First + Gate 1 Auto-Reviewer)
   ========================================================================== */
(function () {
  window.PMApp.studio = window.PMApp.studio || {};

  const sortItems = [
    { id: 'st1', text: 'Khóa sổ kế toán và nộp báo cáo thuế định kỳ hàng tháng', ans: 'line' },
    { id: 'st2', text: 'Triển khai hệ thống cổng đặt hàng B2B tích hợp ERP trong 6 tháng', ans: 'project' },
    { id: 'st3', text: 'Trả lời ticket hỗ trợ khách hàng hàng ngày theo quy trình SOP', ans: 'line' },
    { id: 'st4', text: 'Di dời toàn bộ máy chủ sang Cloud kèm kiểm toán bảo mật ISO 27001', ans: 'project' },
    { id: 'st5', text: 'Chấm công và chuyển khoản lương nhân viên ngày 5 hàng tháng', ans: 'line' },
    { id: 'st6', text: 'Lắp đặt dây chuyền đóng gói tự động đạt chuẩn GMP-WHO mới', ans: 'project' }
  ];

  const kickoffTopics = [
    'Thống nhất Mục tiêu SMART, Deliverables & Non-Goals từ Project Charter',
    'Giới thiệu cơ cấu tổ chức, vai trò Sponsor – PM – Core Team & quyền quyết định',
    'Chốt nhịp giao tiếp, kênh báo cáo RAG & lịch họp định kỳ',
    'Rà soát các rủi ro trọng yếu & các phụ thuộc ban đầu',
    'Giải đáp thắc mắc và thống nhất bước hành động tuần đầu tiên (Next Steps)'
  ];

  window.PMApp.studio.renderStage1 = function (container, navigate) {
    let sortPicks = {};
    let showCoach = false;
    let activeSub = 'charter'; // 'warmup' | 'charter' | 'stakeholder' | 'gate1'

    function render() {
      const store = window.PMApp.projectStore;
      const p = store.get();
      const pwRes = store.calcProjectworthiness(p.projectworthiness);
      const rev = store.reviewGate1(p);
      const esc = window.PMApp.utils.escapeHtml;

      container.innerHTML = `
        <!-- Multi-Project Selector & Preset Bar -->
        <div class="project-context-bar">
          <div style="flex:1;min-width:260px;">
            <div style="font-size:0.74rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.25rem;">Quản lý Nhiều Dự Án Song Song (${store.list().length} dự án đã lưu)</div>
            <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;">
              <select class="input-field" id="multiProjSelect" style="width:auto;min-width:250px;font-weight:700;">
                ${store.list().map(item => `<option value="${item.uid}" ${item.uid === p.uid ? 'selected' : ''}>${esc(item.meta.name)}</option>`).join('')}
              </select>
              ${store.list().length > 1 ? '<button class="btn btn-ghost btn-sm" id="delProjBtn" title="Xóa dự án đang mở">🗑️ Xóa</button>' : ''}
            </div>
            <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.3rem;">${esc(p.meta.approachLabel)} · Trần ngân sách: <strong>${p.charter.budgetCap}tr</strong> · Hạn: <strong>${p.charter.targetWeeks} tuần</strong></div>
          </div>
          <div style="display:flex;gap:0.4rem;flex-wrap:wrap;align-items:center;">
            <span style="font-size:0.74rem;color:var(--text-muted);font-weight:700;">+ Tạo thêm:</span>
            <button class="btn btn-secondary btn-sm" data-newproj="nexusportal">📘 Mẫu CNTT</button>
            <button class="btn btn-secondary btn-sm" data-newproj="smartfactory">🏭 Mẫu Công nghiệp</button>
            <button class="btn btn-secondary btn-sm" data-newproj="custom">✍️ Dự án của tôi</button>
            <button class="btn btn-primary btn-sm" data-newproj="buggy" title="Tạo dự án cố tình có lỗi để bạn tự tìm và sửa!">🐛 Hồ sơ gài lỗi</button>
          </div>
        </div>

        <!-- Sub-steps Tabs -->
        <div class="lab-tabs">
          <button class="lab-tab ${activeSub === 'warmup' ? 'active' : ''}" data-sub="warmup">1. Khởi động: Projectworthiness &amp; Mô hình</button>
          <button class="lab-tab ${activeSub === 'charter' ? 'active' : ''}" data-sub="charter">2. Xưởng viết Project Charter</button>
          <button class="lab-tab ${activeSub === 'stakeholder' ? 'active' : ''}" data-sub="stakeholder">3. Ma trận Stakeholder &amp; Kick-off</button>
          <button class="lab-tab ${activeSub === 'gate1' ? 'active' : ''}" data-sub="gate1">4. Trình duyệt Gate 1 (${rev.pct}%)</button>
        </div>

        ${activeSub === 'warmup' ? `
          <!-- Mini-Game 1: Project vs Line Sorting -->
          <div class="card">
            <h3>🎮 Mini-Game 1: Phân biệt Dự án (Project) vs. Vận hành (Line — DIN 69901)</h3>
            <p style="font-size:0.84rem;">Chọn đúng loại cho 6 đầu việc thực tế dưới đây để nắm chắc ranh giới của André Dechange:</p>
            ${sortItems.map(it => {
              const pick = sortPicks[it.id];
              const st = pick ? (pick === it.ans ? 'ok' : 'err') : '';
              return `
                <div class="sort-card ${st}">
                  <span>${it.text}</span>
                  <div style="display:flex;gap:0.4rem;">
                    <button class="btn btn-sm ${pick === 'project' ? 'btn-primary' : 'btn-secondary'}" data-sort="${it.id}:project">Dự án</button>
                    <button class="btn btn-sm ${pick === 'line' ? 'btn-primary' : 'btn-secondary'}" data-sort="${it.id}:line">Vận hành</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Projectworthiness Calculator -->
          <div class="grid-2">
            <div class="card" style="margin:0;">
              <h3>📊 Đánh giá Projectworthiness (Phân loại A / B / C)</h3>
              <p style="font-size:0.82rem;">Chấm điểm dự án của bạn từ 1 (Thấp) đến 3 (Cao):</p>
              ${[
                ['budget', '1. Quy mô ngân sách (25%)'],
                ['novelty', '2. Độ mới & Phức tạp kỹ thuật (25%)'],
                ['crossFunc', '3. Số phòng ban / Đối tác tham gia (20%)'],
                ['risk', '4. Mức độ rủi ro & Pháp lý (20%)'],
                ['strategic', '5. Tầm quan trọng chiến lược (10%)']
              ].map(([k, lbl]) => `
                <div class="control-group" style="margin-bottom:0.65rem;">
                  <label><span>${lbl}</span><span>${p.projectworthiness[k]} / 3</span></label>
                  <input type="range" min="1" max="3" step="1" value="${p.projectworthiness[k]}" data-pw="${k}">
                </div>
              `).join('')}
              <div class="callout callout-insight" style="margin-bottom:0;">
                <div class="callout-title">Điểm quy đổi: ${pwRes.score} / 3.0</div>
                <span class="pill ${pwRes.badge}">${pwRes.cls}</span>
              </div>
            </div>

            <div class="card" style="margin:0;">
              <h3>🧭 Chọn Mô hình Triển khai (Theo André Dechange)</h3>
              <p style="font-size:0.82rem;">Lựa chọn này sẽ quyết định cách vận hành ở <strong>Chặng 3 (CCB truyền thống vs. Hybrid Scope Trade-off)</strong>:</p>
              <label class="field-label">Tên dự án</label>
              <input class="input-field" id="metaName" value="${esc(p.meta.name)}" style="margin-bottom:0.75rem;">
              <label class="field-label">Phương pháp quản trị dự án</label>
              <select class="input-field" id="metaApproach" style="margin-bottom:0.85rem;">
                <option value="traditional" ${p.meta.approach === 'traditional' ? 'selected' : ''}>Traditional (Waterfall / Stage-Gate — Khóa Scope)</option>
                <option value="agile" ${p.meta.approach === 'agile' ? 'selected' : ''}>Agile (Scrum / Kanban — Khóa Timebox &amp; Team)</option>
                <option value="hybrid_f1" ${p.meta.approach === 'hybrid_f1' ? 'selected' : ''}>Hybrid Dạng 1 (Dechange): Traditional + Agile Methods</option>
                <option value="hybrid_f2" ${p.meta.approach === 'hybrid_f2' ? 'selected' : ''}>Hybrid Dạng 2 (Dechange): Traditional Frame + Agile Phases (Water-Scrum-Fall)</option>
                <option value="hybrid_f3" ${p.meta.approach === 'hybrid_f3' ? 'selected' : ''}>Hybrid Dạng 3 (Dechange): Fully Combined Traditional &amp; Agile</option>
                <option value="hybrid_f4" ${p.meta.approach === 'hybrid_f4' ? 'selected' : ''}>Hybrid Dạng 4 (Dechange): Agile Frame + Traditional Reporting</option>
              </select>
              <button class="btn btn-primary btn-sm" id="goCharterStep">Tiếp sang Xưởng Project Charter →</button>
            </div>
          </div>
        ` : ''}

        ${activeSub === 'charter' ? `
          <div class="card">
            <div class="card-header">
              <div>
                <h3 style="margin-bottom:0.2rem;">✍️ Xưởng Tự Tay Viết Project Charter (Projektauftrag)</h3>
                <p style="margin:0;font-size:0.84rem;">Điền trực tiếp thông tin dự án của bạn. Hệ thống <strong>Auto-Reviewer</strong> sẽ kiểm tra lỗi SMART &amp; Non-Goals theo thời gian thực.</p>
              </div>
              <button class="btn btn-secondary btn-sm" id="toggleCoachBtn">💡 ${showCoach ? 'Ẩn' : 'Xem'} ví dụ Chuẩn vs. Sai</button>
            </div>

            ${showCoach ? `
              <div class="coach-box">
                <strong>Hướng dẫn viết Charter không bị trả hồ sơ:</strong>
                <div class="coach-grid">
                  <div class="coach-good">
                    <strong>✓ CHUẨN SMART &amp; Non-Goals:</strong><br>
                    • "Hoàn thành cổng B2B trong <strong>26 tuần</strong>, ngân sách &le; <strong>2.400tr</strong>, giảm lỗi nhập liệu xuống <strong>&lt; 0,5%</strong>."<br>
                    • Non-Goal: "KHÔNG làm Mobile App Native ở Phase 1."
                  </div>
                  <div class="coach-bad">
                    <strong>✕ LỖI THƯỜNG GẶP (Bị chặn Gate 1):</strong><br>
                    • "Làm hệ thống thật tốt và nhanh nhất có thể" (Không đo được, không hạn định!).<br>
                    • Bỏ trống Non-Goals → Chắc chắn bị Scope Creep.
                  </div>
                </div>
              </div>
            ` : ''}

            <div class="form-grid-2" style="margin-bottom:0.85rem;">
              <div>
                <label class="field-label">Project Sponsor (Người phê duyệt &amp; cấp ngân sách) *</label>
                <input class="input-field" data-cf="sponsor" value="${esc(p.charter.sponsor)}" placeholder="VD: Bà Nguyễn Lan Anh — GĐ Kinh doanh">
              </div>
              <div>
                <label class="field-label">Project Manager</label>
                <input class="input-field" data-cf="pm" value="${esc(p.charter.pm)}">
              </div>
              <div>
                <label class="field-label">Trần Ngân sách (Triệu VNĐ) *</label>
                <input type="number" class="input-field" data-cf="budgetCap" value="${p.charter.budgetCap}" min="10">
              </div>
              <div>
                <label class="field-label">Thời hạn mục tiêu (Tuần) *</label>
                <input type="number" class="input-field" data-cf="targetWeeks" value="${p.charter.targetWeeks}" min="2">
              </div>
            </div>

            <div style="margin-bottom:0.85rem;">
              <label class="field-label">Mục tiêu SMART (Phải có con số đo lường + mốc thời gian) *</label>
              <textarea class="input-field" rows="3" data-cf="smartGoal" placeholder="VD: Triển khai ... trong vòng 26 tuần với ngân sách <= 2.400tr, đạt KPI ...">${esc(p.charter.smartGoal)}</textarea>
            </div>

            <div class="grid-2">
              <div>
                <label class="field-label">📦 Deliverables (In-Scope — Mỗi dòng 1 mục, tối thiểu 2) *</label>
                <textarea class="input-field" rows="4" id="delivText">${esc((p.charter.deliverables || []).join('\n'))}</textarea>
              </div>
              <div>
                <label class="field-label">🚫 Non-Goals (Out-of-Scope — Tối thiểu 2 mục chống Scope Creep) *</label>
                <textarea class="input-field" rows="4" id="nonGoalsText">${esc((p.charter.nonGoals || []).join('\n'))}</textarea>
              </div>
            </div>

            <div class="review-panel ${rev.canPass ? 'pass' : 'fail'}">
              <div style="font-weight:800;font-size:0.85rem;margin-bottom:0.45rem;">🤖 Auto-Reviewer (Chấm điểm thời gian thực: ${rev.passedCount}/${rev.total} tiêu chí)</div>
              ${rev.checks.slice(0, 5).map(c => `<div class="review-item"><span>${c.ok ? '✅' : '❌'}</span><span>${c.msg}</span></div>`).join('')}
            </div>

            <div style="margin-top:0.9rem;display:flex;justify-content:flex-end;">
              <button class="btn btn-primary btn-sm" id="goStakeStep">Tiếp: Ma trận Stakeholder &amp; Kick-off →</button>
            </div>
          </div>
        ` : ''}

        ${activeSub === 'stakeholder' ? `
          <div class="grid-2" style="align-items:start;">
            <div class="card" style="margin:0;">
              <h3>🎯 Bản đồ Stakeholder (Power – Interest)</h3>
              <svg viewBox="0 0 380 285" width="100%" style="max-width:390px;display:block;margin:0 auto;">
                <rect x="55" y="20" width="150" height="110" fill="#fef3c7" opacity="0.65"/>
                <rect x="205" y="20" width="150" height="110" fill="#fee2e2" opacity="0.65"/>
                <rect x="55" y="130" width="150" height="110" fill="#f1f5f9" opacity="0.9"/>
                <rect x="205" y="130" width="150" height="110" fill="#e0f2fe" opacity="0.7"/>
                <line x1="205" y1="20" x2="205" y2="240" stroke="#94a3b8" stroke-dasharray="4 3"/>
                <line x1="55" y1="130" x2="355" y2="130" stroke="#94a3b8" stroke-dasharray="4 3"/>
                <rect x="55" y="20" width="300" height="220" fill="none" stroke="#475569" stroke-width="1.5"/>
                <text x="130" y="38" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">KEEP SATISFIED</text>
                <text x="280" y="38" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">MANAGE CLOSELY</text>
                <text x="130" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#475569">MONITOR</text>
                <text x="280" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#075985">KEEP INFORMED</text>
                <text x="205" y="268" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569">Mức độ quan tâm (Interest: 1–5)</text>
                <text x="18" y="130" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569" transform="rotate(-90 18 130)">Quyền lực (Power: 1–5)</text>
                ${p.stakeholders.map((s, idx) => {
                  const x = 55 + ((s.interest - 0.5) / 5) * 300;
                  const y = 240 - ((s.power - 0.5) / 5) * 220;
                  const col = s.attitude === 'Lo ngại' || s.attitude === 'Phản đối' ? '#dc2626' : s.attitude === 'Ủng hộ' ? '#059669' : '#2563eb';
                  return `<g><circle cx="${x}" cy="${y}" r="11" fill="${col}" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y + 4}" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">${idx + 1}</text></g>`;
                }).join('')}
              </svg>
              <form id="s1AddSh" style="display:grid;gap:0.5rem;margin-top:0.8rem;">
                <input class="input-field" id="s1ShName" placeholder="Thêm Stakeholder mới (VD: Pháp chế, Đại lý...)" required>
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.45rem;">
                  <select class="input-field" id="s1ShP"><option value="5">Power: 5</option><option value="4" selected>Power: 4</option><option value="3">Power: 3</option><option value="2">Power: 2</option><option value="1">Power: 1</option></select>
                  <select class="input-field" id="s1ShI"><option value="5">Interest: 5</option><option value="4" selected>Interest: 4</option><option value="3">Interest: 3</option><option value="2">Interest: 2</option><option value="1">Interest: 1</option></select>
                  <select class="input-field" id="s1ShA"><option>Ủng hộ</option><option selected>Trung lập</option><option>Lo ngại</option><option>Phản đối</option></select>
                </div>
                <button class="btn btn-primary btn-sm" type="submit">+ Thêm Stakeholder</button>
              </form>
            </div>

            <div class="card" style="margin:0;">
              <h3>Chọn Chiến lược Ứng xử (Auto-Review)</h3>
              <p style="font-size:0.8rem;">Đảm bảo chiến lược khớp với Quyền lực của từng Stakeholder:</p>
              <div class="table-wrap">
                <table class="pm-table">
                  <thead><tr><th>#</th><th>Tên (P/I)</th><th>Chiến lược</th><th></th></tr></thead>
                  <tbody>
                    ${p.stakeholders.map((s, idx) => {
                      const isBad = s.power >= 4 && s.strategy === 'Monitor';
                      return `
                        <tr style="${isBad ? 'background:var(--danger-soft);' : ''}">
                          <td><strong>${idx + 1}</strong></td>
                          <td>${esc(s.name)}<div style="font-size:0.72rem;color:var(--text-muted);">P:${s.power} · I:${s.interest} · ${s.attitude}</div></td>
                          <td>
                            <select class="input-field" data-shstrat="${s.id}" style="padding:0.25rem 0.4rem;font-size:0.78rem;">
                              ${['Manage Closely', 'Keep Satisfied', 'Keep Informed', 'Monitor'].map(st => `<option ${s.strategy === st ? 'selected' : ''}>${st}</option>`).join('')}
                            </select>
                            ${isBad ? '<div style="font-size:0.7rem;color:var(--danger);font-weight:700;">⚠️ Quyền lực cao không được để Monitor!</div>' : ''}
                          </td>
                          <td><button class="btn btn-ghost btn-sm" data-shdel="${s.id}">✕</button></td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>

              <h4 style="margin-top:1rem;margin-bottom:0.45rem;">📋 Kick-off Meeting Agenda Checklist</h4>
              ${kickoffTopics.map((t, i) => `
                <label style="display:flex;align-items:flex-start;gap:0.5rem;font-size:0.82rem;margin-bottom:0.38rem;color:var(--text-secondary);cursor:pointer;">
                  <input type="checkbox" data-ko="${i}" ${p.kickoff[i] ? 'checked' : ''} style="margin-top:3px;">
                  <span>${t}</span>
                </label>
              `).join('')}
            </div>
          </div>
          <div style="margin-top:0.9rem;display:flex;justify-content:flex-end;">
            <button class="btn btn-primary btn-sm" id="goGate1Step">Tiếp: Trình Sponsor duyệt Gate 1 →</button>
          </div>
        ` : ''}

        ${activeSub === 'gate1' ? `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
              <div>
                <h2 style="margin-bottom:0.2rem;">🚪 Cổng Kiểm Soát Gate 1: Charter Approval</h2>
                <p style="margin:0;font-size:0.86rem;">Sponsor kiểm tra toàn bộ hồ sơ Khởi tạo trước khi chính thức ký duyệt mở sang Pha Planning.</p>
              </div>
              <span class="pill ${p.gates.g1 ? 'pill-success' : rev.canPass ? 'pill-hybrid' : 'pill-danger'}">
                ${p.gates.g1 ? '✓ GATE 1 PASSED' : `Đạt ${rev.passedCount}/${rev.total} (${rev.pct}%)`}
              </span>
            </div>

            <div class="review-panel ${rev.canPass ? 'pass' : 'fail'}">
              ${rev.checks.map(c => `<div class="review-item"><span>${c.ok ? '✅' : '❌'}</span><span>${c.msg}</span></div>`).join('')}
            </div>

            <div style="margin-top:1rem;display:flex;gap:0.7rem;flex-wrap:wrap;align-items:center;">
              <button class="btn ${rev.canPass ? 'btn-success' : 'btn-secondary'}" id="approveGate1Btn">
                ${rev.canPass ? '✍️ Trình Sponsor Ký Duyệt Gate 1' : '🔒 Hãy sửa các mục ❌ ở trên để vượt Gate 1'}
              </button>
              <button class="btn btn-primary" id="nextToStage2Btn">Chuyển sang Chặng 2: Planning Studio →</button>
            </div>
          </div>
        ` : ''}
      `;

      // Bind Multi-Project Switcher & Create New
      const mpSel = container.querySelector('#multiProjSelect');
      if (mpSel) {
        mpSel.addEventListener('change', e => {
          store.switchTo(e.target.value);
          window.PMApp.utils.showToast('Đã chuyển sang dự án: ' + store.get().meta.name);
          render();
        });
      }

      const delBtn = container.querySelector('#delProjBtn');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          if (store.deleteProject(p.uid)) {
            window.PMApp.utils.showToast('Đã xóa dự án khỏi danh sách.');
            render();
          }
        });
      }

      container.querySelectorAll('[data-newproj]').forEach(btn => {
        btn.addEventListener('click', () => {
          const created = store.createNew(btn.dataset.newproj);
          window.PMApp.utils.showToast(btn.dataset.newproj === 'buggy'
            ? 'Đã tạo mới Hồ sơ Gài Lỗi (dự án cũ vẫn được giữ nguyên)!'
            : 'Đã tạo dự án mới: ' + created.meta.name);
          render();
        });
      });

      container.querySelectorAll('[data-sub]').forEach(btn => {
        btn.addEventListener('click', () => { activeSub = btn.dataset.sub; render(); });
      });

      // Sorting game
      container.querySelectorAll('[data-sort]').forEach(btn => {
        btn.addEventListener('click', () => {
          const [id, val] = btn.dataset.sort.split(':');
          sortPicks[id] = val;
          render();
        });
      });

      // Projectworthiness sliders
      container.querySelectorAll('[data-pw]').forEach(inp => {
        inp.addEventListener('input', e => {
          p.projectworthiness[e.target.dataset.pw] = Number(e.target.value);
          store.save();
          render();
        });
      });

      const metaName = container.querySelector('#metaName');
      if (metaName) metaName.addEventListener('input', e => { p.meta.name = e.target.value; store.save(); });
      const metaApproach = container.querySelector('#metaApproach');
      if (metaApproach) {
        metaApproach.addEventListener('change', e => {
          p.meta.approach = e.target.value;
          p.meta.approachLabel = e.target.options[e.target.selectedIndex].text;
          store.save();
          render();
        });
      }

      const goCharter = container.querySelector('#goCharterStep');
      if (goCharter) goCharter.addEventListener('click', () => { activeSub = 'charter'; render(); });

      // Charter fields
      const coachBtn = container.querySelector('#toggleCoachBtn');
      if (coachBtn) coachBtn.addEventListener('click', () => { showCoach = !showCoach; render(); });

      container.querySelectorAll('[data-cf]').forEach(el => {
        el.addEventListener('change', e => {
          const k = e.target.dataset.cf;
          p.charter[k] = (k === 'budgetCap' || k === 'targetWeeks') ? Math.max(1, Number(e.target.value) || 1) : e.target.value;
          p.gates.g1 = false;
          store.save();
          render();
        });
      });

      const delivEl = container.querySelector('#delivText');
      if (delivEl) delivEl.addEventListener('change', e => {
        p.charter.deliverables = e.target.value.split('\n').map(s => s.trim()).filter(Boolean);
        p.gates.g1 = false;
        store.save();
        render();
      });

      const nonEl = container.querySelector('#nonGoalsText');
      if (nonEl) nonEl.addEventListener('change', e => {
        p.charter.nonGoals = e.target.value.split('\n').map(s => s.trim()).filter(Boolean);
        p.gates.g1 = false;
        store.save();
        render();
      });

      const goStake = container.querySelector('#goStakeStep');
      if (goStake) goStake.addEventListener('click', () => { activeSub = 'stakeholder'; render(); });

      // Stakeholders
      const addShForm = container.querySelector('#s1AddSh');
      if (addShForm) {
        addShForm.addEventListener('submit', e => {
          e.preventDefault();
          const name = container.querySelector('#s1ShName').value.trim();
          if (!name) return;
          const power = Number(container.querySelector('#s1ShP').value);
          const interest = Number(container.querySelector('#s1ShI').value);
          const attitude = container.querySelector('#s1ShA').value;
          const strategy = power >= 3 && interest >= 3 ? 'Manage Closely' : power >= 3 ? 'Keep Satisfied' : interest >= 3 ? 'Keep Informed' : 'Monitor';
          p.stakeholders.push({ id: 's' + Date.now(), name, power, interest, attitude, strategy });
          store.save();
          render();
        });
      }

      container.querySelectorAll('[data-shstrat]').forEach(sel => {
        sel.addEventListener('change', e => {
          const s = p.stakeholders.find(x => x.id === e.target.dataset.shstrat);
          if (s) s.strategy = e.target.value;
          p.gates.g1 = false;
          store.save();
          render();
        });
      });

      container.querySelectorAll('[data-shdel]').forEach(btn => {
        btn.addEventListener('click', () => {
          p.stakeholders = p.stakeholders.filter(x => x.id !== btn.dataset.shdel);
          store.save();
          render();
        });
      });

      container.querySelectorAll('[data-ko]').forEach(chk => {
        chk.addEventListener('change', e => {
          p.kickoff[Number(e.target.dataset.ko)] = e.target.checked;
          store.save();
        });
      });

      const goGate1 = container.querySelector('#goGate1Step');
      if (goGate1) goGate1.addEventListener('click', () => { activeSub = 'gate1'; render(); });

      const appG1 = container.querySelector('#approveGate1Btn');
      if (appG1) {
        appG1.addEventListener('click', () => {
          if (!rev.canPass) {
            window.PMApp.utils.showToast('Sponsor từ chối ký: Hãy sửa các mục ❌ trước!');
            return;
          }
          p.gates.g1 = true;
          store.save();
          window.PMApp.utils.showToast('🎉 Sponsor đã ký duyệt Project Charter — Vượt Gate 1 thành công!');
          render();
        });
      }

      const nextS2 = container.querySelector('#nextToStage2Btn');
      if (nextS2) nextS2.addEventListener('click', () => navigate('stage/2'));
    }

    render();
  };
})();
