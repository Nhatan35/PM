/* ==========================================================================
   Lab 1: Stacey Matrix & André Dechange 5 Hybrid Forms Selector
   ========================================================================== */
(function () {
  window.PMApp.labs.stacey = function (container) {
    let state = { req: 55, tech: 45, reg: 65, maturity: 55 };

    function evaluate() {
      const reqUnc = state.req;      // 0 = rất rõ ràng, 100 = rất mơ hồ/thay đổi liên tục
      const techUnc = state.tech;    // 0 = công nghệ quen thuộc, 100 = hoàn toàn mới
      const reg = state.reg;         // 0 = ít ràng buộc pháp lý/hợp đồng, 100 = rất chặt
      const mat = state.maturity;    // 0 = văn hóa truyền thống, 100 = rất trưởng thành Agile
      const avgUnc = (reqUnc + techUnc) / 2;

      let zone, rec, form, color, detail, practices;

      if (avgUnc >= 86) {
        zone = 'Chaos (Hỗn loạn)';
        rec = 'Cần ổn định hóa trước (Stabilize / Design Sprint ngắn)';
        form = 'Chưa phù hợp chốt kế hoạch dài — chạy thử nghiệm cực ngắn (Spike / Prototype)';
        color = 'var(--danger)';
        detail = 'Cả yêu cầu lẫn công nghệ đều quá bất định. Theo Stacey Matrix, đội cần hành động nhanh để thu thập dữ liệu thực tế nhằm kéo bài toán về vùng Complex trước khi chọn quy trình.';
        practices = ['Timebox thử nghiệm 1 tuần (Discovery Spike)', 'Đặt giới hạn ngân sách thí điểm nhỏ', 'Đánh giá lại sau khi có Prototype'];
      } else if (avgUnc <= 28 && reg >= 50) {
        zone = 'Simple / Complicated (Rõ ràng)';
        rec = 'Traditional Project Management (Waterfall / Stage-Gate)';
        form = 'Thuần Traditional (hoặc Hybrid Dạng 1: Traditional + Agile Methods)';
        color = 'var(--trad)';
        detail = 'Yêu cầu và giải pháp kỹ thuật đều có độ chắc chắn cao kèm ràng buộc tuân thủ chặt. Lập kế hoạch chi tiết từ đầu (WBS, CPM, Baseline, EVM) mang lại hiệu quả và kiểm soát chi phí tối ưu nhất.';
        practices = ['WBS 100% & Đường găng CPM', 'Stage-Gate (G1–G4) & Baseline Freeze', 'Có thể bổ sung bảng Kanban tuần & Daily 15p để tăng minh bạch'];
      } else if (avgUnc >= 60 && reg <= 35 && mat >= 60) {
        zone = 'Complex (Phức hợp)';
        rec = 'Agile Project Management (Scrum / Kanban)';
        form = 'Thuần Agile (hoặc Hybrid Dạng 4 nếu công ty yêu cầu báo cáo mốc)';
        color = 'var(--agile)';
        detail = 'Bất định cao, ít rào cản pháp lý cứng và đội ngũ có độ trưởng thành Agile tốt. Chạy Scrum theo các Sprint ngắn để kiểm chứng giả thuyết với khách hàng sau mỗi 2 tuần.';
        practices = ['Scrum (Product Backlog, Sprint 2 tuần, Sprint Review)', 'Cố định Timebox & Team, linh hoạt Scope', 'Đo lường bằng Velocity & Outcome KPIs'];
      } else {
        zone = 'Complicated ↔ Complex (Vùng Lai chiến lược)';
        color = 'var(--hybrid)';
        if (avgUnc <= 42 && mat < 45) {
          rec = 'Hybrid — Dạng 1 (Dechange): Traditional + Agile Methods';
          form = 'Khung Waterfall cốt lõi + bổ sung công cụ Agile nhẹ';
          detail = 'Văn hóa tổ chức còn thiên về truyền thống và độ bất định ở mức vừa phải. Giữ khung WBS/Gantt nhưng thêm bảng Kanban, Daily Stand-up và Retrospective cuối mỗi pha.';
          practices = ['Giữ Charter, WBS, Gantt & Milestone Plan', 'Thêm Kanban Board trực quan cho từng Work Package', 'Tổ chức Retrospective ngắn cuối mỗi pha thay vì đợi cuối dự án'];
        } else if (reg >= 55 && reqUnc >= 40 && techUnc <= 65) {
          rec = 'Hybrid — Dạng 2 (Dechange): Traditional Framework + Agile Phases';
          form = 'Water-Scrum-Fall / Agile-Stage-Gate';
          detail = 'Ràng buộc ngân sách, pháp lý hoặc bàn giao cứng cao nhưng yêu cầu tính năng cần linh hoạt. Khởi tạo & Nghiệm thu (Abnahme) chạy Traditional; giai đoạn xây dựng sản phẩm chạy Scrum Sprints.';
          practices = ['Gate 1 (Charter) & Gate 4 (Abnahme) theo chuẩn Traditional', 'Pha phát triển lõi chạy Sprint 2 tuần với Sprint Review', 'PM quản trị Governance/Budget; PO quản trị Backlog'];
        } else if (reg >= 55 && techUnc > 65) {
          rec = 'Hybrid — Dạng 3 (Dechange): Fully Combined Traditional & Agile';
          form = 'Kết hợp song song & đồng bộ qua Synchronization Points';
          detail = 'Dự án đa thành phần (ví dụ: phần cứng/hạ tầng chặt chẽ + phần mềm/AI đổi mới nhanh). Hai luồng chạy song song và khớp nối định kỳ tại các điểm đồng bộ.';
          practices = ['Lập Master Synchronization Plan giữa luồng Traditional và Agile', 'Quản trị phụ thuộc chéo (Cross-stream Dependencies)', 'Quy đổi báo cáo tổng hợp sang RAG + MTA cho Ban chỉ đạo'];
        } else if (avgUnc >= 50 && reg > 35) {
          rec = 'Hybrid — Dạng 4 (Dechange): Agile Framework + Traditional Methods';
          form = 'Scrum/Kanban làm lõi + Báo cáo Milestone, Risk & Budget truyền thống';
          detail = 'Tính chất sản phẩm đòi hỏi triển khai theo Agile, nhưng Ban lãnh đạo/khách hàng vẫn cần kiểm soát ngân sách, rủi ro và cột mốc chiến lược định kỳ.';
          practices = ['Chạy Scrum cốt lõi trong đội phát triển', 'Bổ sung Master Milestone Plan (MTA) & Cost Burn Tracking', 'Duy trì Risk Register & Báo cáo RAG hàng tháng'];
        } else {
          rec = 'Hybrid — Dạng 5 (Dechange): Freestyle / Tailored Approach';
          form = 'May đo quy trình linh hoạt theo bối cảnh đội ngũ trưởng thành';
          detail = 'Đội ngũ có độ trưởng thành cao và bối cảnh cân bằng — có thể chủ động kết hợp từng thực hành tối ưu nhất của Traditional và Agile mà không gò bó khuôn mẫu.';
          practices = ['Chốt Working Agreement & Governance nhẹ ngay từ Kick-off', 'Dùng Risk-based Gate thay vì thủ tục hành chính cố định', 'Cải tiến chính mô hình Hybrid sau mỗi 4–6 tuần'];
        }
      }

      return { zone, rec, form, color, detail, practices, x: techUnc, y: reqUnc };
    }

    function render() {
      const res = evaluate();
      // Map 0..100 to SVG coords (plot area: x 60..340, y 260..30)
      const cx = 60 + (res.x / 100) * 280;
      const cy = 260 - (res.y / 100) * 230;

      container.innerHTML = `
        <div class="grid-2" style="align-items:start;">
          <div class="card" style="margin:0;">
            <h3>Điều chỉnh đặc điểm dự án của bạn</h3>
            <p style="font-size:0.84rem;">Kéo 4 thanh trượt dưới đây để định vị dự án trên <strong>Stacey Matrix</strong> và nhận gợi ý mô hình theo <strong>5 hình thái Hybrid của André Dechange</strong>.</p>

            <div class="control-group">
              <label><span>1. Độ bất định Yêu cầu (What)</span><span>${state.req}%</span></label>
              <input type="range" min="0" max="100" value="${state.req}" data-k="req">
              <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);"><span>Rất rõ &amp; ổn định</span><span>Mơ hồ / đổi liên tục</span></div>
            </div>

            <div class="control-group">
              <label><span>2. Độ bất định Công nghệ / Cách làm (How)</span><span>${state.tech}%</span></label>
              <input type="range" min="0" max="100" value="${state.tech}" data-k="tech">
              <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);"><span>Đã làm nhiều lần</span><span>Công nghệ hoàn toàn mới</span></div>
            </div>

            <div class="control-group">
              <label><span>3. Ràng buộc Pháp lý / Hợp đồng / Ngân sách cứng</span><span>${state.reg}%</span></label>
              <input type="range" min="0" max="100" value="${state.reg}" data-k="reg">
              <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);"><span>Rất linh hoạt</span><span>Cực kỳ chặt chẽ</span></div>
            </div>

            <div class="control-group">
              <label><span>4. Độ trưởng thành Agile của tổ chức &amp; team</span><span>${state.maturity}%</span></label>
              <input type="range" min="0" max="100" value="${state.maturity}" data-k="maturity">
              <div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text-muted);"><span>Thuần truyền thống</span><span>Rất thành thạo Agile</span></div>
            </div>

            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem;">
              <button class="btn btn-secondary btn-sm" data-preset="trad">Mẫu: Xây dựng nhà xưởng</button>
              <button class="btn btn-secondary btn-sm" data-preset="hybrid">Mẫu: Cổng B2B ERP</button>
              <button class="btn btn-secondary btn-sm" data-preset="agile">Mẫu: Startup App AI</button>
            </div>
          </div>

          <div class="card" style="margin:0;">
            <h3>Vị trí trên Stacey Matrix</h3>
            <svg viewBox="0 0 380 305" width="100%" style="max-width:390px;display:block;margin:0 auto;">
              <!-- Zones -->
              <rect x="60" y="30" width="280" height="230" fill="#fee2e2" opacity="0.55" rx="6"/>
              <path d="M 60 260 L 60 65 Q 230 65 305 260 Z" fill="#ede9fe" opacity="0.85"/>
              <path d="M 60 260 L 60 140 Q 170 140 220 260 Z" fill="#fef3c7" opacity="0.9"/>
              <path d="M 60 260 L 60 198 Q 115 198 145 260 Z" fill="#bae6fd" opacity="0.95"/>

              <!-- Axes -->
              <line x1="60" y1="260" x2="345" y2="260" stroke="#334155" stroke-width="2"/>
              <line x1="60" y1="260" x2="60" y2="22" stroke="#334155" stroke-width="2"/>

              <!-- Zone Labels -->
              <text x="88" y="242" font-size="10.5" font-weight="700" fill="#0369a1">SIMPLE</text>
              <text x="122" y="198" font-size="10.5" font-weight="700" fill="#b45309">COMPLICATED / HYBRID</text>
              <text x="165" y="125" font-size="11" font-weight="700" fill="#6d28d9">COMPLEX (AGILE)</text>
              <text x="278" y="58" font-size="10.5" font-weight="700" fill="#b91c1c">CHAOS</text>

              <!-- Axis Titles -->
              <text x="200" y="292" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">Độ bất định Công nghệ / Giải pháp (HOW) →</text>
              <text x="22" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" transform="rotate(-90 22 145)">Độ bất định Yêu cầu (WHAT) →</text>

              <!-- Plotted Point -->
              <circle cx="${cx}" cy="${cy}" r="14" fill="${res.color}" opacity="0.22"/>
              <circle cx="${cx}" cy="${cy}" r="7" fill="${res.color}" stroke="#fff" stroke-width="2.5"/>
            </svg>
          </div>
        </div>

        <div class="card" style="margin-top:1rem;border-left:4px solid ${res.color};">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
            <span class="pill pill-primary">Vùng Stacey: ${res.zone}</span>
            <span style="font-size:0.8rem;color:var(--text-muted);">${res.form}</span>
          </div>
          <h3 style="margin:0.6rem 0 0.45rem;color:${res.color};">Đề xuất: ${res.rec}</h3>
          <p>${res.detail}</p>
          <h4 style="font-size:0.86rem;margin-bottom:0.4rem;">Bộ công cụ &amp; thực hành khuyến nghị:</h4>
          <ul style="margin:0;padding-left:1.2rem;font-size:0.86rem;color:var(--text-secondary);">
            ${res.practices.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      `;

      container.querySelectorAll('input[type="range"]').forEach(inp => {
        inp.addEventListener('input', e => {
          state[e.target.dataset.k] = Number(e.target.value);
          render();
        });
      });

      container.querySelectorAll('[data-preset]').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = btn.dataset.preset;
          if (p === 'trad') state = { req: 18, tech: 20, reg: 85, maturity: 30 };
          if (p === 'hybrid') state = { req: 55, tech: 45, reg: 75, maturity: 55 };
          if (p === 'agile') state = { req: 74, tech: 68, reg: 20, maturity: 80 };
          render();
        });
      });
    }

    render();
  };
})();
