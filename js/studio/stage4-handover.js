/* ==========================================================================
   Stage 4: Handover, Abnahme, Lessons Learned & Complete Project Dossier
   ========================================================================== */
(function () {
  window.PMApp.studio = window.PMApp.studio || {};

  const UAT_ISSUES = [
    { id: 'u1', text: 'Lỗi đồng bộ tồn kho bị sai số âm khi 2 đại lý đặt cùng lúc', ans: 'blocker', why: 'Ảnh hưởng trực tiếp dữ liệu tài chính & luồng kinh doanh lõi → BẮT BUỘC sửa xong trước Go-Live!' },
    { id: 'u2', text: 'Lệch lề 4px ở bảng lịch sử đơn hàng khi xem trên màn hình nhỏ', ans: 'punch', why: 'Lỗi hiển thị thẩm mỹ (Minor), không chặn đặt hàng → Đưa vào phụ lục Punch List kèm hạn sửa 5 ngày.' },
    { id: 'u3', text: 'Nút xuất PDF hóa đơn nháp bị thiếu 1 dấu tiếng Việt ở tiêu đề', ans: 'punch', why: 'Lỗi Minor không ảnh hưởng vận hành lõi → Đưa vào Punch List để ký Abnahme đúng hạn.' },
    { id: 'u4', text: 'Người dùng đại lý có thể xem nhầm bảng giá chiết khấu của đại lý khác', ans: 'blocker', why: 'Lỗ hổng bảo mật dữ liệu nghiêm trọng (Critical/Blocker) → Tuyệt đối KHÔNG được Go-Live khi chưa vá!' },
    { id: 'u5', text: 'Email thông báo xác nhận đơn gửi chậm 15 giây so với thông báo trên web', ans: 'punch', why: 'Tối ưu nhỏ không chặn vận hành → Ghi nhận vào Punch List / Hypercare.' }
  ];

  const CLOSURE_ITEMS = [
    'Đã hoàn tất UAT và vá 100% lỗi nghiêm trọng (Blocker), chốt phụ lục Punch List',
    'Khách hàng / Sponsor đã ký Biên bản Nghiệm thu chính thức (Abnahme)',
    'Đã bàn giao Tài liệu kỹ thuật, Hướng dẫn sử dụng (User Manual) & Runbook vận hành',
    'Đã đào tạo người dùng cuối và kích hoạt lịch trực Hypercare (2–4 tuần sau Go-Live)',
    'Đã thanh lý hợp đồng nhà cung cấp & đối chiếu quyết toán ngân sách cuối kỳ',
    'Đã tổ chức Lessons Learned (Blameless), lưu kho PMO & giải phóng nhân sự dự án'
  ];

  window.PMApp.studio.renderStage4 = function (container, navigate) {
    let showDossier = false;

    function buildDossierMarkdown(p) {
      const store = window.PMApp.projectStore;
      const cpm = store.solveCPM(p.wbs);
      const emv = store.calcEMV(p.risks);
      const bac = p.baseline ? p.baseline.bac : (cpm.totalCost + emv);
      const ac = p.execution.actualCost || cpm.totalCost;
      return `# PROJECT PORTFOLIO DOSSIER — ${p.meta.name}
**Mã dự án:** ${p.meta.code} | **Mô hình (Dechange):** ${p.meta.approachLabel}
**Sponsor:** ${p.charter.sponsor || '—'} | **Project Manager:** ${p.charter.pm || '—'}

---
## 1. PROJECT CHARTER (GATE 1: ${p.gates.g1 ? 'PASSED' : 'PENDING'})
- **Mục tiêu SMART:** ${p.charter.smartGoal}
- **Ngân sách khung:** ${p.charter.budgetCap} triệu VNĐ | **Thời hạn mục tiêu:** ${p.charter.targetWeeks} tuần
- **Deliverables (In-Scope):**
${(p.charter.deliverables || []).map(d => `  - ${d}`).join('\n')}
- **Non-Goals (Out-of-Scope):**
${(p.charter.nonGoals || []).map(d => `  - ${d}`).join('\n')}

## 2. STAKEHOLDER REGISTER
| Tên Stakeholder | Power | Interest | Thái độ | Chiến lược |
|---|---|---|---|---|
${p.stakeholders.map(s => `| ${s.name} | ${s.power} | ${s.interest} | ${s.attitude} | ${s.strategy} |`).join('\n')}

## 3. WBS, ĐƯỜNG GĂNG CPM & NGÂN SÁCH (GATE 2: ${p.gates.g2 ? 'FROZEN' : 'PENDING'})
- **Tổng thời lượng Đường găng (${cpm.critPath.join(' → ')}):** ${cpm.totalDuration} tuần
- **Cost Baseline:** WBS (${cpm.totalCost}tr) + Dự phòng EMV (${emv}tr) = **${cpm.totalCost + emv} triệu VNĐ**

| ID | Work Package | Tuần | Chi phí (tr) | ES–EF | Float | Trạng thái |
|---|---|---|---|---|---|---|
${cpm.tasks.map(t => `| ${t.id} | ${t.name} | ${t.dur} | ${t.cost} | ${t.es}–${t.ef} | ${t.float}w | ${t.critical ? 'Đường găng' : 'Thường'} |`).join('\n')}

## 4. RISK REGISTER
${p.risks.map(r => `- **${r.id}** (P:${r.prob}×I:${r.impact}=${r.prob * r.impact} | ${r.strategy}): ${r.text} → *Ứng phó:* ${r.plan}`).join('\n')}

## 5. KẾT QUẢ THỰC THI & BÀN GIAO (GATE 4: ${p.gates.g4 ? 'CLOSED' : 'OPEN'})
- **Ngân sách Baseline vs. Thực tế:** ${bac}tr vs. ${ac}tr
- **Hài lòng Stakeholder:** ${p.execution.stakeholderSat}% | **Tinh thần Đội nhóm:** ${p.execution.teamMorale}%
- **Số Change Request đã kiểm soát:** ${(p.execution.changeRequests || []).length}
- **Lessons Learned:**
${(p.handover.lessons || []).length ? p.handover.lessons.map(l => `  - [${l.phase}] Tốt: ${l.good} | Cải tiến: ${l.improve}`).join('\n') : '  - (Chưa bổ sung)'}
`;
    }

    function render() {
      const store = window.PMApp.projectStore;
      const p = store.get();
      const ho = p.handover;
      const cpm = store.solveCPM(p.wbs);
      const emv = store.calcEMV(p.risks);
      const bac = p.baseline ? p.baseline.bac : (cpm.totalCost + emv);
      const ac = p.execution.actualCost || cpm.totalCost;
      const esc = window.PMApp.utils.escapeHtml;

      const uatRight = UAT_ISSUES.filter(u => ho.uatClassified[u.id] === u.ans).length;
      const chkDone = ho.checklist.filter(Boolean).length;
      const canClose = uatRight === UAT_ISSUES.length && chkDone >= 5 && (ho.lessons || []).length >= 1;
      const gatesPassed = [p.gates.g1, p.gates.g2, p.gates.g3, p.gates.g4].filter(Boolean).length;

      container.innerHTML = `
        <div class="project-context-bar">
          <div>
            <div style="font-size:0.74rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Chặng 4 · Nghiệm thu (Abnahme), Bàn giao &amp; Đóng Dự án</div>
            <div style="font-weight:800;font-size:1rem;">${esc(p.meta.name)}</div>
          </div>
          <span class="pill ${p.gates.g4 ? 'pill-success' : 'pill-hybrid'}">
            ${p.gates.g4 ? '🏆 GATE 4 FORMALLY CLOSED' : `Cổng đã vượt: ${gatesPassed}/4 Gates`}
          </span>
        </div>

        <!-- 1. Interactive UAT & Punch List Classifier -->
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
            <div>
              <h3 style="margin-bottom:0.2rem;">🔍 1. Thử thách UAT: Phân loại Blocker vs. Punch List (Abnahme)</h3>
              <p style="margin:0;font-size:0.84rem;">Phân loại chính xác 5 kết quả UAT dưới đây để ra quyết định Go-Live &amp; ký Biên bản nghiệm thu chuẩn thực tế:</p>
            </div>
            <span class="pill ${uatRight === UAT_ISSUES.length ? 'pill-success' : 'pill-primary'}">Đúng ${uatRight}/${UAT_ISSUES.length}</span>
          </div>

          ${UAT_ISSUES.map(u => {
            const pick = ho.uatClassified[u.id];
            const ok = pick === u.ans;
            return `
              <div class="sort-card ${pick ? (ok ? 'ok' : 'err') : ''}">
                <div style="flex:1;min-width:240px;">
                  <div><strong>${u.text}</strong></div>
                  ${pick ? `<div style="font-size:0.78rem;margin-top:3px;color:var(--text-secondary);">${ok ? '✅' : '❌'} ${u.why}</div>` : ''}
                </div>
                <div style="display:flex;gap:0.4rem;flex-shrink:0;">
                  <button class="btn btn-sm ${pick === 'blocker' ? 'btn-primary' : 'btn-secondary'}" data-uat="${u.id}:blocker">🛑 Blocker (Chặn Go-Live)</button>
                  <button class="btn btn-sm ${pick === 'punch' ? 'btn-primary' : 'btn-secondary'}" data-uat="${u.id}:punch">📋 Punch List (Minor)</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- 2. Handover Checklist & Lessons Learned -->
        <div class="grid-2" style="align-items:start;">
          <div class="card" style="margin:0;">
            <h3>📦 2. Checklist Nghiệm thu &amp; Chuyển giao Vận hành</h3>
            <p style="font-size:0.82rem;">Hoàn tất tối thiểu 5/6 hạng mục bắt buộc của Gate 4:</p>
            ${CLOSURE_ITEMS.map((txt, i) => `
              <label style="display:flex;align-items:flex-start;gap:0.55rem;font-size:0.84rem;margin-bottom:0.5rem;color:var(--text-secondary);cursor:pointer;">
                <input type="checkbox" data-hchk="${i}" ${ho.checklist[i] ? 'checked' : ''} style="margin-top:3px;">
                <span>${txt}</span>
              </label>
            `).join('')}
          </div>

          <div class="card" style="margin:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem;">
              <h3 style="margin:0;">💡 3. Blameless Lessons Learned</h3>
              <button class="btn btn-secondary btn-sm" id="autoLessonBtn">✨ Gợi ý từ Chặng 3</button>
            </div>
            <form id="addLessonForm" style="display:grid;gap:0.5rem;margin-bottom:0.8rem;">
              <select class="input-field" id="lsPhase"><option>Initiation</option><option>Planning</option><option selected>Execution &amp; Hybrid</option><option>Handover</option></select>
              <input class="input-field" id="lsGood" placeholder="Điều đã làm TỐT cần nhân rộng..." required>
              <input class="input-field" id="lsImp" placeholder="Bài học cải tiến cho dự án sau..." required>
              <button class="btn btn-primary btn-sm" type="submit" style="justify-self:start;">+ Lưu Bài học vào Kho PMO</button>
            </form>
            ${(ho.lessons || []).length ? ho.lessons.map((l, idx) => `
              <div style="padding:0.6rem 0.75rem;background:var(--bg-subtle);border-radius:var(--radius-sm);margin-bottom:0.45rem;font-size:0.82rem;">
                <div style="display:flex;justify-content:space-between;">
                  <span class="pill pill-primary">${l.phase}</span>
                  <button class="btn btn-ghost btn-sm" data-lsdel="${idx}">✕</button>
                </div>
                <div style="margin-top:4px;"><strong>✓ Tốt:</strong> ${esc(l.good)}</div>
                <div><strong>→ Cải tiến:</strong> ${esc(l.improve)}</div>
              </div>
            `).join('') : '<p style="font-size:0.82rem;color:var(--text-muted);margin:0;">Hãy thêm ít nhất 1 bài học kinh nghiệm trước khi đóng dự án.</p>'}
          </div>
        </div>

        <!-- 4. Gate 4 Closure & Full PM Lifecycle Scorecard -->
        <div class="card" style="margin-top:1.1rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:0.85rem;">
            <div>
              <h2 style="margin-bottom:0.2rem;">🏆 Gate 4: Đóng Dự Án &amp; Bảng Tổng Kết Năng Lực PM</h2>
              <p style="margin:0;font-size:0.85rem;">So sánh Kế hoạch gốc (Gate 2) với Thực tế bàn giao (Gate 4) và xuất trọn bộ Hồ sơ Dự án của bạn.</p>
            </div>
            <div style="display:flex;gap:0.55rem;flex-wrap:wrap;">
              <button class="btn ${canClose ? 'btn-success' : 'btn-secondary'}" id="closeGate4Btn">
                ${p.gates.g4 ? '✓ Đã Ký Abnahme &amp; Đóng Dự Án' : canClose ? '✍️ Ký Abnahme &amp; Hoàn tất Gate 4' : '🔒 Hoàn thành UAT (5/5), Checklist (≥5/6) &amp; Lessons'}
              </button>
              <button class="btn btn-primary" id="toggleDossierBtn">📄 ${showDossier ? 'Ẩn' : 'Xem &amp; Xuất'} Hồ Sơ Dự Án</button>
            </div>
          </div>

          <div class="kpi-row">
            <div class="kpi-card"><div class="kpi-label">Cổng Stage-Gate</div><div class="kpi-val" style="color:var(--primary);">${gatesPassed} / 4</div></div>
            <div class="kpi-card"><div class="kpi-label">Ngân sách Gốc vs Thực</div><div class="kpi-val" style="font-size:1.02rem;color:${ac <= bac ? 'var(--success)' : 'var(--danger)'};">${ac} / ${bac}tr</div></div>
            <div class="kpi-card"><div class="kpi-label">Hài lòng Stakeholder</div><div class="kpi-val" style="color:var(--success);">${p.execution.stakeholderSat}%</div></div>
            <div class="kpi-card"><div class="kpi-label">Tinh thần Đội nhóm</div><div class="kpi-val" style="color:var(--hybrid);">${p.execution.teamMorale}%</div></div>
          </div>
        </div>

        ${showDossier ? `
          <div class="dossier-sheet">
            <div class="card-header no-print">
              <h3 style="margin:0;">📑 Hồ Sơ Dự Án Hoàn Chỉnh (Project Portfolio Dossier)</h3>
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <button class="btn btn-primary btn-sm" id="dlDossierBtn">⬇️ Tải file .md</button>
                <button class="btn btn-secondary btn-sm" id="printDossierBtn">🖨️ In / Lưu PDF</button>
              </div>
            </div>
            <pre style="white-space:pre-wrap;background:var(--bg-subtle);padding:1.1rem;border-radius:var(--radius-md);font-size:0.82rem;margin:0;">${esc(buildDossierMarkdown(p))}</pre>
          </div>
        ` : ''}
      `;

      // UAT classification
      container.querySelectorAll('[data-uat]').forEach(btn => {
        btn.addEventListener('click', () => {
          const [id, val] = btn.dataset.uat.split(':');
          ho.uatClassified[id] = val;
          store.save();
          render();
        });
      });

      // Checklist
      container.querySelectorAll('[data-hchk]').forEach(chk => {
        chk.addEventListener('change', e => {
          ho.checklist[Number(e.target.dataset.hchk)] = e.target.checked;
          store.save();
          render();
        });
      });

      // Auto lessons suggestion
      container.querySelector('#autoLessonBtn').addEventListener('click', () => {
        ho.lessons = ho.lessons || [];
        ho.lessons.push({
          phase: 'Execution & Hybrid',
          good: 'Kiểm soát chặt Change Request & báo cáo RAG/EVM trung thực giúp giữ ổn định ngân sách.',
          improve: 'Cần khóa Synchronization Points sớm và chạy Technical Spike cho các phụ thuộc đối tác ngoài.'
        });
        store.save();
        window.PMApp.utils.showToast('Đã tự động đề xuất bài học kinh nghiệm từ Chặng 3!');
        render();
      });

      container.querySelector('#addLessonForm').addEventListener('submit', e => {
        e.preventDefault();
        ho.lessons = ho.lessons || [];
        ho.lessons.push({
          phase: container.querySelector('#lsPhase').value,
          good: container.querySelector('#lsGood').value.trim(),
          improve: container.querySelector('#lsImp').value.trim()
        });
        store.save();
        render();
      });

      container.querySelectorAll('[data-lsdel]').forEach(btn => {
        btn.addEventListener('click', () => {
          ho.lessons.splice(Number(btn.dataset.lsdel), 1);
          store.save();
          render();
        });
      });

      container.querySelector('#closeGate4Btn').addEventListener('click', () => {
        if (!canClose) {
          window.PMApp.utils.showToast('Hãy phân loại đúng 5/5 UAT, hoàn thành >=5/6 Checklist và thêm >=1 Lesson Learned!');
          return;
        }
        p.gates.g4 = true;
        ho.accepted = true;
        store.save();
        showDossier = true;
        window.PMApp.utils.showToast('🏆 Chúc mừng! Bạn đã hoàn tất trọn vẹn Vòng đời Dự án (Gate 1 → Gate 4)!');
        render();
      });

      container.querySelector('#toggleDossierBtn').addEventListener('click', () => { showDossier = !showDossier; render(); });

      const dlBtn = container.querySelector('#dlDossierBtn');
      if (dlBtn) {
        dlBtn.addEventListener('click', () => {
          window.PMApp.utils.downloadText(`${p.meta.code || 'project'}-dossier.md`, buildDossierMarkdown(p), 'text/markdown;charset=utf-8');
          window.PMApp.utils.showToast('Đã tải xuống Hồ sơ Dự án (.md)!');
        });
      }

      const prBtn = container.querySelector('#printDossierBtn');
      if (prBtn) prBtn.addEventListener('click', () => window.print());
    }

    render();
  };
})();
