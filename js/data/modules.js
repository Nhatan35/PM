/* ==========================================================================
   7-Module Curriculum Data
   Faithfully structured after Prof. Dr. André Dechange:
   "Project Management: From Traditional Project Management to Hybrid Forms"
   ========================================================================== */
(function () {
  window.PMApp.data.modules = [
    /* ======================================================================
       MODULE 0: PROJECT MANAGEMENT FUNDAMENTALS
       ====================================================================== */
    {
      id: 'm0',
      code: 'M0',
      title: 'Project Management Fundamentals',
      subtitle: 'Nền tảng tư duy, Projectworthiness, Tam giác ma thuật, Tiêu chuẩn, Tổ chức & Stage-Gate',
      phaseTag: 'Nền tảng',
      pillClass: 'pill-primary',
      readMinutes: 18,
      labLink: 'triangle',
      summary: 'Thiết lập ngôn ngữ chung về dự án theo chuẩn DIN 69901 và André Dechange: phân biệt Dự án vs. Vận hành, kiểm tra tính đáng làm dự án (Projectworthiness), Tam giác ma thuật, cơ cấu tổ chức và bản đồ vòng đời dự án.',
      sections: [
        {
          id: 'm0-project-def',
          title: '1. Dự án là gì? Phân biệt Project vs. Routine Operations',
          html: `
            <p>Theo tiêu chuẩn Đức <strong>DIN 69901</strong> mà André Dechange sử dụng làm xương sống cho cuốn sách, một <strong>Dự án (Project)</strong> là một nỗ lực mang tính <em>duy nhất trong tổng thể các điều kiện của nó</em>. Không phải mọi công việc lớn đều là dự án.</p>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>Tiêu chí</th><th>Dự án (Project)</th><th>Công việc thường nhật (Line / Operations)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Tính duy nhất (Uniqueness)</strong></td><td>Mục tiêu, điều kiện, tổ hợp nguồn lực mới hoặc chưa lặp lại y hệt.</td><td>Lặp đi lặp lại theo quy trình chuẩn hóa (SOP).</td></tr>
                  <tr><td><strong>Giới hạn thời gian</strong></td><td>Có ngày bắt đầu và ngày kết thúc/bàn giao rõ ràng.</td><td>Diễn ra liên tục, không có điểm kết thúc định sẵn.</td></tr>
                  <tr><td><strong>Nguồn lực & Ngân sách</strong></td><td>Giới hạn cụ thể theo ngân sách & nhân sự được phê duyệt riêng.</td><td>Nằm trong định biên và ngân sách vận hành hàng năm.</td></tr>
                  <tr><td><strong>Tính liên phòng ban & Rủi ro</strong></td><td>Phức tạp, cần phối hợp đa chức năng, chứa đựng bất định cao.</td><td>Thường nằm gọn trong một phòng ban, rủi ro thấp và đã biết.</td></tr>
                </tbody>
              </table>
            </div>
            <h3>Kiểm tra tính đáng làm dự án (Projectworthiness / Projektwürdigkeit) & Phân loại A/B/C</h3>
            <p>Một điểm rất thực tiễn trong sách Dechange là: <strong>đừng áp bộ máy quản trị dự án cồng kềnh lên một tác vụ nhỏ</strong>. Doanh nghiệp cần thực hiện bước <em>Projectworthiness Check</em> (dựa trên ngân sách, thời lượng, mức độ rủi ro, số phòng ban tham gia) để quyết định:</p>
            <ul>
              <li><strong>Dưới ngưỡng dự án (Small Task / Work Order):</strong> Giao thẳng cho bộ phận chức năng thực hiện, không cần Charter hay Steering Committee.</li>
              <li><strong>Dự án loại C (Nhỏ / Đơn giản):</strong> Quy trình tinh gọn — chỉ cần bản mô tả 1 trang, bảng tiến độ đơn giản và biên bản bàn giao ngắn.</li>
              <li><strong>Dự án loại B (Trung bình):</strong> Áp dụng đầy đủ các công cụ cốt lõi (Charter, WBS, Gantt, Risk Register, Status Report).</li>
              <li><strong>Dự án loại A (Lớn / Chiến lược):</strong> Quản trị toàn diện, có Ban chỉ đạo (Steering Committee), kiểm soát EVM/MTA nghiêm ngặt, kiểm toán cổng pha (Stage-Gate) chặt chẽ.</li>
            </ul>
            <div class="callout callout-insight">
              <div class="callout-title">💡 Dechange Insight</div>
              Quy trình quản trị dự án không phải mục đích tự thân — nó phải <strong>tương xứng với độ phức tạp và rủi ro</strong>. Quá ít quản trị dẫn đến hỗn loạn; quá nhiều quản trị tạo ra bộ máy quan liêu bóp nghẹt tiến độ.
            </div>
          `
        },
        {
          id: 'm0-magic-triangle',
          title: '2. Tam giác ma thuật (Magic Triangle of Project Management)',
          html: `
            <p>Mọi quyết định trong vòng đời dự án đều chịu sự chi phối của <strong>Tam giác ma thuật (Magisches Dreieck)</strong> gồm 3 đỉnh ràng buộc lẫn nhau: <strong>Phạm vi/Chất lượng (Scope & Quality)</strong>, <strong>Thời gian (Time)</strong> và <strong>Chi phí/Nguồn lực (Cost & Resources)</strong>.</p>
            <ul>
              <li>Nếu khách hàng <strong>tăng Phạm vi (Scope)</strong> nhưng giữ nguyên Thời gian và Chi phí → <strong>Chất lượng sẽ sụt giảm</strong> hoặc rủi ro thất bại tăng vọt.</li>
              <li>Nếu Ban lãnh đạo <strong>rút ngắn Thời gian (Time)</strong> nhưng giữ nguyên Phạm vi → buộc phải <strong>tăng Chi phí</strong> (thêm nhân lực, tăng ca — kỹ thuật <em>Crashing</em>) hoặc chấp nhận giảm chất lượng/phạm vi.</li>
              <li><strong>Điểm khác biệt cốt lõi giữa Traditional và Agile:</strong> Traditional cố định <em>Phạm vi</em> và ước lượng Thời gian/Chi phí; ngược lại Agile <strong>đảo ngược tam giác</strong> — cố định <em>Thời gian & Chi phí</em> (Timebox & Team cố định) và linh hoạt điều chỉnh <em>Phạm vi</em> theo độ ưu tiên giá trị.</li>
            </ul>
            <div class="callout callout-tip">
              <div class="callout-title">🧪 Thực hành ngay</div>
              Bạn có thể kéo thả trực tiếp các đỉnh của Tam giác ma thuật trong <strong>Lab 2: Magic Triangle Simulator</strong> để thấy tác động dây chuyền ở cả chế độ Traditional và Agile.
            </div>
          `
        },
        {
          id: 'm0-standards-org',
          title: '3. Tiêu chuẩn quốc tế & Cơ cấu tổ chức dự án',
          html: `
            <p>André Dechange nhấn mạnh PM cần nắm hệ sinh thái tiêu chuẩn để nói chung ngôn ngữ với đối tác toàn cầu:</p>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>Tiêu chuẩn</th><th>Xuất xứ / Tổ chức</th><th>Trọng tâm đặc trưng</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>DIN 69901</strong></td><td>Đức (DIN)</td><td>Chuẩn hóa chặt chẽ thuật ngữ, 5 nhóm quy trình (Initialisierung → Abschluss) & cấu trúc dữ liệu PM.</td></tr>
                  <tr><td><strong>ISO 21500 / 21502</strong></td><td>Quốc tế (ISO)</td><td>Khung hướng dẫn thực hành quản trị dự án mang tính phổ quát toàn cầu.</td></tr>
                  <tr><td><strong>PMI (PMBOK Guide)</strong></td><td>Mỹ (PMI)</td><td>Từ quy trình (Process Groups & Knowledge Areas) mở rộng sang 12 Principles & 8 Performance Domains (PMBOK 7).</td></tr>
                  <tr><td><strong>IPMA (ICB 4.0)</strong></td><td>Châu Âu / Toàn cầu</td><td>Tập trung vào <strong>năng lực con người</strong> qua 3 trụ cột: <em>Perspective</em> (Bối cảnh), <em>People</em> (Con người), <em>Practice</em> (Thực hành).</td></tr>
                  <tr><td><strong>PRINCE2</strong></td><td>Anh (Axelos)</td><td>Quản trị theo giai đoạn (Stage-by-Stage), nhấn mạnh Business Case liên tục & phân quyền rõ ràng.</td></tr>
                </tbody>
              </table>
            </div>
            <h3>3 Mô hình Cơ cấu tổ chức dự án (Project Organization)</h3>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>Mô hình</th><th>Quyền hạn của PM</th><th>Ưu điểm</th><th>Rủi ro / Nhược điểm</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1. Staff / Influence (Tham mưu)</strong></td><td>Thấp — chỉ điều phối & tham mưu; quyền chỉ đạo nằm ở Trưởng phòng chức năng.</td><td>Không xáo trộn bộ máy công ty, tận dụng chuyên môn sâu.</td><td>PM "có trách nhiệm nhưng không có quyền", phản ứng chậm khi xung đột nguồn lực.</td></tr>
                  <tr><td><strong>2. Matrix (Ma trận: Weak / Balanced / Strong)</strong></td><td>Chia sẻ — PM quản lý <em>Cái gì & Khi nào</em> (chuyên môn dự án), Line Manager quản lý <em>Ai & Như thế nào</em> (nhân sự).</td><td>Cân bằng tốt giữa hiệu quả chuyên môn và tập trung mục tiêu dự án.</td><td>Nhân sự có "2 sếp" dễ xung đột ưu tiên nếu thiếu quy chế rõ ràng.</td></tr>
                  <tr><td><strong>3. Pure Project (Dự án thuần túy)</strong></td><td>Rất cao — Nhân sự tách hẳn khỏi phòng ban, báo cáo trực tiếp cho PM.</td><td>Tốc độ ra quyết định cực nhanh, tinh thần đội nhóm cao, trách nhiệm rõ ràng.</td><td>Tốn kém nguồn lực, khó tái hòa nhập nhân sự khi dự án kết thúc.</td></tr>
                </tbody>
              </table>
            </div>
            <p>Bên cạnh PM, hai vai trò quản trị tối quan trọng trong vòng đời dự án là <strong>Project Sponsor (Người bảo trợ)</strong> — người cấp ngân sách, bảo vệ dự án về mặt chính trị và ký duyệt Charter/Acceptance — và <strong>Steering Committee (Ban chỉ đạo)</strong> — hội đồng ra quyết định tại các cổng chuyển pha (Stage-Gate) và xử lý leo thang vượt thẩm quyền PM.</p>
          `
        },
        {
          id: 'm0-lifecycle-gates',
          title: '4. Vòng đời dự án, Cơ chế Stage-Gate & Ma trận Stacey',
          html: `
            <p>Vòng đời dự án (Project Lifecycle) chia hành trình dài, rủi ro cao thành các <strong>Pha (Phases)</strong> kế tiếp nhau, ngăn cách bởi các <strong>Cổng quyết định (Phase Gates / Quality Gates)</strong>:</p>
            <div class="diagram-box">
              <svg viewBox="0 0 860 175" width="100%" style="min-width:620px;display:block;margin:auto;">
                <defs>
                  <marker id="arr0" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
                  </marker>
                </defs>
                <rect x="12" y="34" width="175" height="72" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                <text x="99" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="#1e3a8a">1. INITIATION</text>
                <text x="99" y="84" text-anchor="middle" font-size="11" fill="#334155">Charter &amp; Kick-off</text>

                <line x1="187" y1="70" x2="225" y2="70" stroke="#64748b" stroke-width="2" marker-end="url(#arr0)"/>
                <polygon points="206,12 222,28 206,44 190,28" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                <text x="206" y="32" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">G1</text>

                <rect x="230" y="34" width="175" height="72" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                <text x="317" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="#0c4a6e">2. PLANNING</text>
                <text x="317" y="84" text-anchor="middle" font-size="11" fill="#334155">WBS, CPM, Cost, Risk</text>

                <line x1="405" y1="70" x2="443" y2="70" stroke="#64748b" stroke-width="2" marker-end="url(#arr0)"/>
                <polygon points="424,12 440,28 424,44 408,28" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                <text x="424" y="32" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">G2</text>

                <rect x="448" y="34" width="185" height="72" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
                <text x="540" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="#4c1d95">3. EXECUTION &amp; CTRL</text>
                <text x="540" y="84" text-anchor="middle" font-size="11" fill="#334155">Deliver, MTA, EVM, CR</text>

                <line x1="633" y1="70" x2="671" y2="70" stroke="#64748b" stroke-width="2" marker-end="url(#arr0)"/>
                <polygon points="652,12 668,28 652,44 636,28" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                <text x="652" y="32" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">G3</text>

                <rect x="676" y="34" width="172" height="72" rx="10" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
                <text x="762" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">4. CLOSURE</text>
                <text x="762" y="84" text-anchor="middle" font-size="11" fill="#334155">Abnahme &amp; Handover</text>

                <text x="430" y="142" text-anchor="middle" font-size="11.5" font-weight="600" fill="#475569">Tại mỗi Cổng (G1–G4), Ban chỉ đạo ra 1 trong 4 quyết định: GO (Đi tiếp) • CONDITIONAL GO (Đi tiếp có điều kiện) • HOLD (Tạm dừng) • KILL (Hủy dự án)</text>
                <text x="430" y="162" text-anchor="middle" font-size="11" fill="#64748b">G1: Charter Approval  |  G2: Baseline Freeze  |  G3: Acceptance Readiness  |  G4: Formal Closure</text>
              </svg>
              <div class="diagram-caption">Hình 0.1 — Vòng đời dự án 4 pha gắn liền cơ chế Stage-Gate giúp kiểm soát rủi ro đầu tư theo từng chặng.</div>
            </div>
            <h3>Chọn phương pháp tiếp cận theo Ma trận Stacey</h3>
            <p>Không có phương pháp "tốt nhất cho mọi dự án". Dechange đề xuất đánh giá dự án trên 2 trục của <strong>Stacey Matrix</strong>:</p>
            <ul>
              <li><strong>Trục ngang — Độ chắc chắn về Giải pháp/Công nghệ (How):</strong> Đã làm nhiều lần và nắm chắc kỹ thuật, hay hoàn toàn mới?</li>
              <li><strong>Trục dọc — Độ đồng thuận về Yêu cầu (What):</strong> Các bên liên quan đã thống nhất rõ ràng mục tiêu chưa, hay còn thay đổi liên tục?</li>
              <li><strong>Vùng Đơn giản / Phức tạp có quy luật (Simple & Complicated):</strong> Yêu cầu & kỹ thuật rõ ràng → <strong>Traditional PM</strong> tối ưu nhất.</li>
              <li><strong>Vùng Phức hợp (Complex):</strong> Yêu cầu còn mơ hồ, cần thử nghiệm & học qua phản hồi → <strong>Agile PM</strong> phát huy sức mạnh.</li>
              <li><strong>Vùng Chuyển giao / Đa thành phần:</strong> Vừa có phần cố định (hạ tầng, pháp lý, ngân sách cứng), vừa có phần sáng tạo/thay đổi → <strong>Hybrid PM</strong> là lựa chọn thực tế nhất.</li>
            </ul>
          `
        }
      ]
    },

    /* ======================================================================
       MODULE 1: PROJECT INITIATION
       ====================================================================== */
    {
      id: 'm1',
      code: 'M1',
      title: 'Project Initiation (Khởi tạo dự án)',
      subtitle: 'Project Appraisal, Mục tiêu SMART & Non-Goals, Stakeholder Analysis, Project Charter & Kick-off',
      phaseTag: 'Pha 01 · Khởi tạo',
      pillClass: 'pill-trad',
      readMinutes: 20,
      labLink: 'stakeholder',
      summary: 'Đặt nền móng quyết định 70% thành bại dự án: sàng lọc tính khả thi, khóa chặt mục tiêu & phạm vi loại trừ (Non-Goals), nhận diện quyền lực Stakeholder, ban hành Project Charter và khởi động đồng bộ qua Kick-off Meeting.',
      sections: [
        {
          id: 'm1-appraisal',
          title: '1. Đánh giá dự án & Business Case (Project Appraisal)',
          html: `
            <p>Trước khi tiêu tốn nguồn lực cho lập kế hoạch chi tiết, giai đoạn Khởi tạo trả lời câu hỏi tối thượng: <strong>"Chúng ta có đang chọn ĐÚNG dự án để làm không?"</strong> (Doing the right project).</p>
            <ul>
              <li><strong>Phân tích tính khả thi (Feasibility Study):</strong> Đánh giá 4 khía cạnh: <em>Kỹ thuật</em> (có làm được không?), <em>Kinh tế</em> (lợi ích có vượt chi phí không?), <em>Pháp lý/Tuân thủ</em> (có vướng quy định không?) và <em>Tổ chức/Vận hành</em> (đội ngũ có sẵn sàng tiếp nhận không?).</li>
              <li><strong>Chỉ số kinh tế cốt lõi:</strong>
                <ul>
                  <li><code>ROI = (Lợi ích ròng / Tổng chi phí đầu tư) × 100%</code></li>
                  <li><code>Payback Period (Thời gian hoàn vốn)</code>: Bao lâu thì dòng tiền thu về bù đắp vốn bỏ ra.</li>
                  <li><code>NPV (Net Present Value)</code>: Giá trị hiện tại ròng có tính đến chiết khấu dòng tiền theo thời gian (NPV &gt; 0 là khả thi).</li>
                </ul>
              </li>
              <li><strong>Mô hình chấm điểm (Scoring Model / Nutzwertanalyse):</strong> Khi các lợi ích mang tính phi tài chính (tăng uy tín thương hiệu, đáp ứng luật định, giảm rủi ro vận hành), Dechange nhấn mạnh việc lập bảng tiêu chí có <em>trọng số (Weight)</em> để so sánh khách quan các phương án.</li>
            </ul>
          `
        },
        {
          id: 'm1-goals',
          title: '2. Hệ thống mục tiêu SMART, Deliverables & Non-Goals',
          html: `
            <p>Nguyên nhân số 1 khiến dự án thất bại không phải do năng lực kỹ thuật, mà do <strong>mục tiêu mơ hồ ngay từ ngày đầu</strong>. André Dechange phân tách mục tiêu thành:</p>
            <ul>
              <li><strong>System Goals (Mục tiêu sản phẩm/kết quả):</strong> Dự án bàn giao cái gì? (Tính năng, hiệu năng, chất lượng).</li>
              <li><strong>Process Goals (Mục tiêu tiến trình):</strong> Bàn giao khi nào và với chi phí tối đa bao nhiêu?</li>
              <li><strong>Mục tiêu bắt buộc (Must-have) vs. Mục tiêu mong muốn (Should/Could-have):</strong> Giúp PM có dư địa thương lượng khi xảy ra xung đột mục tiêu.</li>
            </ul>
            <div class="formula-grid">
              <div class="formula-card"><div class="formula-expr">S — Specific</div><div class="formula-desc">Cụ thể, không chung chung (tránh "cải thiện trải nghiệm", hãy viết "rút thời gian đặt hàng xuống dưới 90 giây").</div></div>
              <div class="formula-card"><div class="formula-expr">M — Measurable</div><div class="formula-desc">Đo lường được bằng con số hoặc tiêu chí Đạt/Không đạt rõ ràng.</div></div>
              <div class="formula-card"><div class="formula-expr">A — Achievable</div><div class="formula-desc">Khả thi trong năng lực kỹ thuật, nhân sự và thẩm quyền thực tế.</div></div>
              <div class="formula-card"><div class="formula-expr">R — Realistic / Relevant</div><div class="formula-desc">Gắn chặt chiến lược kinh doanh và tương xứng nguồn lực cho phép.</div></div>
              <div class="formula-card"><div class="formula-expr">T — Time-bound</div><div class="formula-desc">Gắn hạn hoàn thành cụ thể (ngày/quý/mốc bàn giao).</div></div>
            </div>
            <div class="callout callout-pitfall">
              <div class="callout-title">⚠️ Cạm bẫy kinh điển: Quên ghi Non-Goals (Ngoài phạm vi)</div>
              Nếu bạn chỉ liệt kê những gì <strong>CÓ làm (In-Scope)</strong> mà không ghi rõ những gì <strong>KHÔNG làm (Out-of-Scope / Non-Goals)</strong>, mỗi Stakeholder sẽ tự mặc định thêm các kỳ vọng ngầm — dẫn đến hiện tượng trượt phạm vi (<strong>Scope Creep</strong>) tàn phá ngân sách và tiến độ!
            </div>
          `
        },
        {
          id: 'm1-stakeholder',
          title: '3. Phân tích môi trường & Các bên liên quan (Stakeholder Analysis)',
          html: `
            <p>Dự án không tồn tại trong chân không. Dechange phân tích <strong>Môi trường dự án (Project Environment)</strong> theo 2 chiều: <em>Môi trường vật chất/kỹ thuật</em> (hệ thống liên quan, hạ tầng, luật định) và <em>Môi trường xã hội</em> — tức các <strong>Stakeholders</strong> (bất kỳ cá nhân/nhóm nào có thể ảnh hưởng đến dự án hoặc bị dự án ảnh hưởng).</p>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>Nhóm trên Ma trận Power–Interest</th><th>Đặc điểm</th><th>Chiến lược quản trị (Action Strategy)</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Manage Closely (Quyền lực CAO – Quan tâm CAO)</strong></td><td>Sponsor, Khách hàng chính, Giám đốc vận hành.</td><td>Hợp tác sát sao, tham vấn trước mọi quyết định lớn, báo cáo trực tiếp định kỳ.</td></tr>
                  <tr><td><strong>Keep Satisfied (Quyền lực CAO – Quan tâm THẤP)</strong></td><td>Ban Giám đốc, Pháp chế, Tài chính, CNTT cấp tập đoàn.</td><td>Không làm phiền bằng tiểu tiết, nhưng phải đảm bảo hài lòng ở các cổng Gate và báo cáo tóm tắt.</td></tr>
                  <tr><td><strong>Keep Informed (Quyền lực THẤP – Quan tâm CAO)</strong></td><td>Người dùng cuối, đội hỗ trợ khách hàng, đội kiểm thử.</td><td>Cập nhật tiến độ minh bạch, lấy góp ý sớm để biến họ thành người ủng hộ khi Go-Live.</td></tr>
                  <tr><td><strong>Monitor (Quyền lực THẤP – Quan tâm THẤP)</strong></td><td>Các phòng ban gián tiếp, đối tác phụ.</td><td>Theo dõi định kỳ, chỉ gửi thông báo chung, tránh tốn nhiều công sức quản trị.</td></tr>
                </tbody>
              </table>
            </div>
            <p><em>Lưu ý quan trọng:</em> Ngoài Quyền lực & Mức độ quan tâm, hãy đánh giá thêm <strong>Thái độ (Attitude: Ủng hộ / Trung lập / Phản đối)</strong> để có kế hoạch hóa giải sự chống đối từ sớm (đặc biệt khi dự án thay đổi thói quen làm việc cũ).</p>
          `
        },
        {
          id: 'm1-charter-kickoff',
          title: '4. Project Charter (Projektauftrag) & Kick-off Meeting',
          html: `
            <p><strong>Project Charter (Tuyên ngôn dự án / Projektauftrag)</strong> là văn bản mang tính "giấy khai sinh" chính thức cho dự án và là điều kiện bắt buộc để vượt qua <strong>Gate 1</strong>. Chưa có Charter được Sponsor ký duyệt → Dự án chưa chính thức tồn tại.</p>
            <h3>Cấu trúc chuẩn của một Project Charter (theo Dechange)</h3>
            <ol>
              <li><strong>Thông tin định danh:</strong> Tên dự án, mã dự án, Sponsor, Project Manager, ngày bắt đầu & dự kiến kết thúc.</li>
              <li><strong>Bối cảnh & Lý do kinh doanh (Background / Business Need):</strong> Tại sao dự án cần tồn tại lúc này?</li>
              <li><strong>Mục tiêu SMART & Deliverables cốt lõi</strong> kèm danh mục <strong>Non-Goals (Ngoài phạm vi)</strong>.</li>
              <li><strong>Các cột mốc sơ bộ (High-level Milestones) & Ngân sách khung (Budget Frame).</strong></li>
              <li><strong>Giả định, Ràng buộc & Rủi ro trọng yếu ban đầu.</strong></li>
              <li><strong>Thẩm quyền của Project Manager:</strong> PM được quyền quyết định gì, giới hạn chi tiêu bao nhiêu, khi nào phải báo cáo leo thang.</li>
              <li><strong>Chữ ký phê duyệt (Sign-off):</strong> Của Sponsor và Project Manager.</li>
            </ol>
            <h3>Kick-off Meeting — Phát súng khởi động đồng bộ</h3>
            <p>Ngay sau khi Charter được phê duyệt, <strong>Kick-off Meeting</strong> giúp toàn bộ đội dự án và Stakeholders chủ chốt "nhìn chung một hướng": làm rõ mục tiêu, phân vai, thiết lập kênh giao tiếp, giải đáp thắc mắc và tạo cam kết tinh thần. Với dự án làm cho khách hàng ngoài, thường tách <em>Internal Kick-off</em> (thống nhất nội bộ trước) và <em>External Kick-off</em> (cùng khách hàng).</p>
          `
        }
      ]
    },

    /* ======================================================================
       MODULE 2: TRADITIONAL PM — PLANNING
       ====================================================================== */
    {
      id: 'm2',
      code: 'M2',
      title: 'Traditional PM — Planning (Lập kế hoạch)',
      subtitle: 'WBS, Work Packages, Mạng công việc CPM & Đường găng, Gantt, RACI, Chi phí, Chất lượng, Giao tiếp & Rủi ro',
      phaseTag: 'Pha 02 · Lập kế hoạch',
      pillClass: 'pill-trad',
      readMinutes: 26,
      labLink: 'cpm',
      summary: 'Chuyển hóa Project Charter thành bản thiết kế thi công định lượng được: cấu trúc WBS 100%, tính toán Đường găng (Critical Path), cân đối nguồn lực & ngân sách, hoạch định Chất lượng/Giao tiếp/Hợp đồng và lập sổ đăng ký rủi ro trước khi chốt Baseline (Gate 2).',
      sections: [
        {
          id: 'm2-wbs',
          title: '1. Cấu trúc phân rã công việc — WBS (Projektstrukturplan)',
          html: `
            <p>Dechange gọi <strong>WBS (Work Breakdown Structure / PSP)</strong> là <em>"kế hoạch của mọi kế hoạch"</em>. Mọi công việc lập tiến độ, dự toán chi phí, phân bổ nguồn lực và nhận diện rủi ro sau đó đều bám vào cây WBS.</p>
            <div class="diagram-box">
              <svg viewBox="0 0 820 205" width="100%" style="min-width:580px;display:block;margin:auto;">
                <rect x="285" y="10" width="250" height="40" rx="8" fill="#1e3a8a"/>
                <text x="410" y="35" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1.0 Dự án Cổng Khách hàng B2B</text>

                <line x1="410" y1="50" x2="410" y2="70" stroke="#64748b" stroke-width="2"/>
                <line x1="115" y1="70" x2="705" y2="70" stroke="#64748b" stroke-width="2"/>
                <line x1="115" y1="70" x2="115" y2="90" stroke="#64748b" stroke-width="2"/>
                <line x1="312" y1="70" x2="312" y2="90" stroke="#64748b" stroke-width="2"/>
                <line x1="508" y1="70" x2="508" y2="90" stroke="#64748b" stroke-width="2"/>
                <line x1="705" y1="70" x2="705" y2="90" stroke="#64748b" stroke-width="2"/>

                <rect x="25" y="90" width="180" height="36" rx="7" fill="#dbeafe" stroke="#2563eb"/>
                <text x="115" y="113" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">1.1 Quản trị &amp; Khởi tạo</text>

                <rect x="222" y="90" width="180" height="36" rx="7" fill="#dbeafe" stroke="#2563eb"/>
                <text x="312" y="113" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">1.2 Phân tích &amp; Thiết kế</text>

                <rect x="418" y="90" width="180" height="36" rx="7" fill="#dbeafe" stroke="#2563eb"/>
                <text x="508" y="113" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">1.3 Phát triển &amp; Tích hợp</text>

                <rect x="615" y="90" width="180" height="36" rx="7" fill="#dbeafe" stroke="#2563eb"/>
                <text x="705" y="113" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">1.4 Kiểm thử &amp; Bàn giao</text>

                <line x1="312" y1="126" x2="312" y2="152" stroke="#94a3b8" stroke-width="1.5"/>
                <rect x="222" y="152" width="180" height="42" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="4 3"/>
                <text x="312" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">WP 1.2.1: Đặc tả UX/UI</text>
                <text x="312" y="185" text-anchor="middle" font-size="10.5" fill="#475569">WP 1.2.2: Kiến trúc API</text>

                <line x1="508" y1="126" x2="508" y2="152" stroke="#94a3b8" stroke-width="1.5"/>
                <rect x="418" y="152" width="180" height="42" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="4 3"/>
                <text x="508" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">WP 1.3.1: Module Đặt hàng</text>
                <text x="508" y="185" text-anchor="middle" font-size="10.5" fill="#475569">WP 1.3.2: Tích hợp ERP</text>
              </svg>
              <div class="diagram-caption">Hình 2.1 — Cấu trúc WBS phân rã từ Dự án → Sub-projects / Phases → Work Packages (Gói công việc).</div>
            </div>
            <ul>
              <li><strong>Quy tắc 100% (100% Rule):</strong> WBS phải bao phủ <em>100% công việc cần thiết</em> để tạo ra Deliverables (kể cả công việc quản trị dự án), và <em>không thừa</em> bất kỳ công việc nào ngoài phạm vi. Các nhánh không được chồng chéo (MECE).</li>
              <li><strong>3 cách phân rã phổ biến:</strong> Theo <em>Sản phẩm/Đối tượng</em> (Object-oriented), theo <em>Chức năng</em> (Function-oriented), theo <em>Giai đoạn</em> (Phase-oriented) hoặc kết hợp (Mixed — phổ biến nhất trong thực tế).</li>
              <li><strong>Work Package (Gói công việc — lá của cây WBS):</strong> Là đơn vị nhỏ nhất được gán cho <strong>duy nhất 1 người chịu trách nhiệm</strong>, ước lượng được thời gian/chi phí và kiểm tra được kết quả đầu ra. Mỗi WP nên có bảng đặc tả (<em>Work Package Specification</em>) ghi rõ: ID, Mô tả, Đầu vào, Kết quả bàn giao, Người phụ trách và Tiêu chí hoàn thành.</li>
            </ul>
          `
        },
        {
          id: 'm2-cpm-gantt',
          title: '2. Hoạch định tiến độ: Mạng công việc CPM, Đường găng & Gantt Chart',
          html: `
            <p>Từ danh sách Work Packages, PM xây dựng trình tự logic và lịch trình qua 4 bước:</p>
            <ol>
              <li><strong>Xác định mối quan hệ phụ thuộc (Dependencies):</strong> <code>FS</code> (Finish-to-Start — phổ biến nhất), <code>SS</code> (Start-to-Start), <code>FF</code> (Finish-to-Finish), <code>SF</code> (Start-to-Finish).</li>
              <li><strong>Ước lượng thời lượng (Duration):</strong> Dựa trên kinh nghiệm, dữ liệu lịch sử hoặc ước lượng 3 điểm <em>PERT</em>: <code>tE = (O + 4M + P) / 6</code>.</li>
              <li><strong>Tính toán Mạng công việc (CPM / Netzplantechnik):</strong>
                <ul>
                  <li><strong>Tính xuôi (Forward Pass):</strong> Xác định <code>ES</code> (Early Start) và <code>EF = ES + Duration</code> (Early Finish). Nếu một công việc có nhiều tiền nhiệm, <code>ES = max(EF các tiền nhiệm)</code>.</li>
                  <li><strong>Tính ngược (Backward Pass):</strong> Từ ngày kết thúc dự án, tính ngược <code>LF</code> (Late Finish) và <code>LS = LF - Duration</code> (Late Start). Nếu công việc dẫn tới nhiều công việc sau, <code>LF = min(LS các công việc sau)</code>.</li>
                  <li><strong>Thời gian dự trữ (Total Float / Pufferzeit):</strong> <code>TF = LS - ES = LF - EF</code>.</li>
                </ul>
              </li>
              <li><strong>Đường găng (Critical Path):</strong> Chuỗi các công việc có <strong>Total Float = 0</strong>. Đây là đường dài nhất quyết định tổng thời lượng dự án — bất kỳ công việc nào trên đường găng trễ 1 ngày, toàn bộ dự án sẽ trễ 1 ngày!</li>
            </ol>
            <div class="callout callout-tip">
              <div class="callout-title">🧪 Thực hành tính Đường găng tự động</div>
              Mở <strong>Lab 4: CPM &amp; WBS Mini-Calculator</strong> để thử thay đổi thời lượng từng gói công việc và xem Đường găng, Float và biểu đồ Gantt tự động tính lại theo thời gian thực.
            </div>
            <p><strong>Biểu đồ Gantt &amp; Milestones:</strong> Gantt Chart trực quan hóa lịch trình theo trục thời gian, còn <strong>Milestones (Cột mốc)</strong> là các sự kiện có thời lượng = 0 đánh dấu thời điểm hoàn thành kết quả quan trọng (ví dụ: <em>"M2: Chốt thiết kế kiến trúc"</em>) để kiểm soát bằng MTA sau này.</p>
          `
        },
        {
          id: 'm2-resource-cost',
          title: '3. Nguồn lực (RACI), Cân đối tải & Dự toán chi phí',
          html: `
            <h3>Ma trận trách nhiệm RACI</h3>
            <p>Tránh tình trạng "cha chung không ai khóc" bằng cách phân vai rõ cho từng Work Package:</p>
            <ul>
              <li><strong>R — Responsible:</strong> Người trực tiếp thực thi công việc (có thể nhiều người).</li>
              <li><strong>A — Accountable:</strong> Người chịu trách nhiệm cuối cùng & phê duyệt đầu ra (<strong>bắt buộc duy nhất 1 người</strong> cho mỗi công việc!).</li>
              <li><strong>C — Consulted:</strong> Chuyên gia được tham vấn hai chiều trước khi ra quyết định.</li>
              <li><strong>I — Informed:</strong> Người được thông báo một chiều về tiến độ/kết quả.</li>
            </ul>
            <h3>Cân đối nguồn lực (Resource Leveling) & Dự toán chi phí (Cost Baseline)</h3>
            <p>Sau khi gán nhân sự vào Gantt, biểu đồ chất tải (<em>Resource Histogram</em>) thường phát hiện các điểm quá tải (&gt;100% công suất). PM thực hiện <strong>Resource Leveling</strong> bằng cách dời các công việc có <em>Float &gt; 0</em> sang giai đoạn nhàn rỗi trước khi phải thuê thêm người hoặc giãn tiến độ.</p>
            <p>Với chi phí, Dechange phân biệt ước lượng <strong>Top-down</strong> (nhanh ở pha Initiation dựa trên dự án tương tự) và <strong>Bottom-up</strong> (tổng hợp chi tiết từng Work Package ở pha Planning — độ chính xác cao nhất). Tổng chi phí theo thời gian (kèm <em>Contingency Reserve</em> cho rủi ro đã nhận diện) tạo thành <strong>Cost Baseline (Đường cong chữ S — S-Curve)</strong>.</p>
          `
        },
        {
          id: 'm2-qcp-risk',
          title: '4. Chất lượng, Giao tiếp, Hợp đồng & Quản trị rủi ro',
          html: `
            <div class="grid-2">
              <div class="card" style="margin:0;">
                <h4>🎯 Quality &amp; Acceptance Criteria</h4>
                <p>Chất lượng không thể "kiểm tra rồi mới có" ở cuối dự án — nó phải được thiết kế ngay từ pha Planning thông qua các <strong>Acceptance Criteria (Tiêu chí nghiệm thu)</strong> đo lường được cho từng Deliverable, gắn kèm kế hoạch QA (phòng ngừa) và QC (kiểm định).</p>
              </div>
              <div class="card" style="margin:0;">
                <h4>📢 Communication &amp; Procurement</h4>
                <p>Lập <strong>Communication Matrix</strong> (Ai – Thông tin gì – Kênh nào – Tần suất). Nếu thuê ngoài, cần chọn loại hợp đồng phù hợp: <strong>Fixed-Price</strong> (rủi ro về nhà cung cấp, đòi hỏi phạm vi cố định — Traditional) vs. <strong>Time &amp; Material</strong> (linh hoạt thay đổi — Agile/Hybrid).</p>
              </div>
            </div>
            <h3>Quy trình 4 bước Quản trị Rủi ro (Risk Management)</h3>
            <ol>
              <li><strong>Nhận diện (Identification):</strong> Brainstorming, Checklist dự án cũ, phỏng vấn chuyên gia — phân biệt rõ <em>Nguyên nhân → Sự kiện rủi ro → Hệ quả</em>.</li>
              <li><strong>Đánh giá (Assessment):</strong> Xác định <em>Xác suất xảy ra (Probability, 1–5)</em> × <em>Mức độ tác động (Impact, 1–5)</em> = <strong>Risk Score</strong> và sắp xếp lên Ma trận rủi ro (Đỏ / Vàng / Xanh).</li>
              <li><strong>Lập phương án ứng phó (Response Planning):</strong>
                <ul>
                  <li><strong>Avoid (Tránh né):</strong> Đổi thiết kế/phương án để triệt tiêu nguyên nhân.</li>
                  <li><strong>Mitigate (Giảm thiểu):</strong> Giảm xác suất hoặc giảm thiệt hại (phổ biến nhất).</li>
                  <li><strong>Transfer (Chuyển giao):</strong> Mua bảo hiểm, ký hợp đồng Fixed-Price chuyển rủi ro sang đối tác.</li>
                  <li><strong>Accept (Chấp nhận):</strong> Với rủi ro nhỏ, thiết lập quỹ dự phòng (Contingency Plan) nếu xảy ra.</li>
                </ul>
              </li>
              <li><strong>Giám sát (Monitoring):</strong> Rà soát định kỳ <strong>Risk Register</strong> trong suốt pha Thực thi; mỗi rủi ro lớn phải có 1 <em>Risk Owner</em>.</li>
            </ol>
            <div class="callout callout-insight">
              <div class="callout-title">🚪 Gate 2: Baseline Freeze (Chốt kế hoạch gốc)</div>
              Khi WBS, Lịch trình (CPM/Gantt), Ngân sách (Cost Baseline), Kế hoạch Chất lượng–Giao tiếp và Risk Register hoàn tất và đồng nhất, Ban chỉ đạo ký duyệt <strong>Baseline Freeze</strong>. Từ thời điểm này, mọi thay đổi lớn đều phải qua quy trình Change Request chính thức.
            </div>
          `
        }
      ]
    },

    /* ======================================================================
       MODULE 3: TRADITIONAL PM — EXECUTION, CONTROLLING & CLOSURE
       ====================================================================== */
    {
      id: 'm3',
      code: 'M3',
      title: 'Execution, Controlling & Handover (Thực thi & Bàn giao)',
      subtitle: 'Soll-Ist-Vergleich, Milestone Trend Analysis (MTA), Earned Value (EVM), Change Control, Abnahme & Closure',
      phaseTag: 'Pha 03 & 04 · Thực thi & Bàn giao',
      pillClass: 'pill-success',
      readMinutes: 25,
      labLink: 'evm',
      summary: 'Làm chủ giai đoạn "đốt tiền thật" và giai đoạn về đích: điều phối thực thi, phát hiện sớm sai lệch bằng MTA & EVM, kiểm soát thay đổi chặt chẽ và thực hiện quy trình Nghiệm thu (Abnahme) – Chuyển giao vận hành – Lessons Learned bài bản.',
      sections: [
        {
          id: 'm3-exec-rag',
          title: '1. Điều phối thực thi & Vòng lặp Kiểm soát (Soll-Ist-Vergleich)',
          html: `
            <p>Lập kế hoạch tốt nhưng thiếu kiểm soát sẽ khiến dự án trôi dạt không phanh. Trung tâm của Project Controlling trong sách Dechange là vòng lặp điều khiển <strong>Plan vs. Actual (Soll-Ist-Vergleich)</strong>:</p>
            <ol>
              <li><strong>Thu thập dữ liệu thực tế (Actuals):</strong> Tiến độ hoàn thành thật của từng Work Package, giờ công & chi phí đã chi, chất lượng đầu ra.</li>
              <li><strong>So sánh với Baseline (Variance Analysis):</strong> Tìm độ lệch về Thời gian, Chi phí và Phạm vi.</li>
              <li><strong>Phân tích nguyên nhân gốc rễ (Root Cause Analysis):</strong> Tại sao lệch? Là sai lệch nhất thời hay mang tính hệ thống?</li>
              <li><strong>Hành động khắc phục (Corrective Actions):</strong> Tăng tốc (<em>Crashing</em>), làm song song (<em>Fast-tracking</em>), điều chỉnh nguồn lực hoặc đề xuất Change Request.</li>
            </ol>
            <h3>Báo cáo đèn giao thông (Traffic-Light / RAG Status Report)</h3>
            <p>Ban chỉ đạo không có thời gian đọc báo cáo dài 30 trang. PM tóm tắt sức khỏe dự án theo 3 màu chuẩn:</p>
            <ul>
              <li><span class="pill pill-success">GREEN (Xanh)</span> Dự án nằm trong ngưỡng dung sai cho phép về Tiến độ, Chi phí, Phạm vi.</li>
              <li><span class="pill pill-hybrid">AMBER / YELLOW (Vàng)</span> Đã xuất hiện sai lệch hoặc rủi ro đáng kể, <strong>nhưng PM vẫn kiểm soát được</strong> bằng hành động khắc phục trong thẩm quyền.</li>
              <li><span class="pill pill-danger">RED (Đỏ)</span> Sai lệch vượt ngưỡng dung sai hoặc có trở ngại vượt thẩm quyền PM → <strong>Cần Ban chỉ đạo quyết định ngay</strong> (kèm tối thiểu 2 phương án đề xuất!).</li>
            </ul>
          `
        },
        {
          id: 'm3-mta-evm',
          title: '2. Hai vũ khí định lượng: Milestone Trend Analysis (MTA) & Earned Value (EVM)',
          html: `
            <h3>A. Milestone Trend Analysis (MTA / Meilensteintrendanalyse)</h3>
            <p>MTA là công cụ cực kỳ được ưa chuộng trong quản trị dự án Đức và sách của Dechange nhờ sự trực quan tuyệt vời. Trục ngang ghi <em>Ngày báo cáo (Reporting Date)</em>, trục dọc ghi <em>Ngày dự kiến đạt mốc (Estimated Milestone Date)</em>:</p>
            <ul>
              <li><strong>Đường nằm ngang:</strong> Mốc đang đi đúng kế hoạch (ổn định).</li>
              <li><strong>Đường đi lên:</strong> Dấu hiệu <strong>trễ tiến độ dần</strong> — càng dốc càng nguy hiểm, cảnh báo sớm ngay cả trước khi ngày mốc thực sự tới!</li>
              <li><strong>Đường đi xuống:</strong> Dự án đang hoàn thành sớm hơn dự kiến.</li>
            </ul>
            <h3>B. Earned Value Management (EVM)</h3>
            <p>EVM khắc phục ảo giác nguy hiểm: <em>"Đã tiêu 50% ngân sách không có nghĩa là đã làm xong 50% khối lượng!"</em> EVM kết nối đồng thời Phạm vi – Tiến độ – Chi phí qua 3 đại lượng cơ bản và 5 chỉ số dẫn xuất:</p>
            <div class="formula-grid">
              <div class="formula-card"><div class="formula-expr">PV (Planned Value)</div><div class="formula-desc">Giá trị công việc <em>theo kế hoạch</em> phải xong tại thời điểm báo cáo.</div></div>
              <div class="formula-card"><div class="formula-expr">EV (Earned Value)</div><div class="formula-desc">Giá trị (theo ngân sách gốc) của khối lượng <em>thực sự đã hoàn thành</em>.</div></div>
              <div class="formula-card"><div class="formula-expr">AC (Actual Cost)</div><div class="formula-desc">Chi phí <em>thực tế đã chi ra</em> cho khối lượng đã làm.</div></div>
              <div class="formula-card"><div class="formula-expr">SV = EV − PV | SPI = EV / PV</div><div class="formula-desc">Độ lệch &amp; hiệu suất Tiến độ. <strong>SPI &ge; 1.0</strong> là đúng/vượt tiến độ; &lt; 1.0 là trễ.</div></div>
              <div class="formula-card"><div class="formula-expr">CV = EV − AC | CPI = EV / AC</div><div class="formula-desc">Độ lệch &amp; hiệu suất Chi phí. <strong>CPI &ge; 1.0</strong> là tiết kiệm; &lt; 1.0 là đội vốn.</div></div>
              <div class="formula-card"><div class="formula-expr">EAC = BAC / CPI</div><div class="formula-desc">Dự báo tổng chi phí khi hoàn thành nếu hiệu suất hiện tại tiếp diễn (BAC: Tổng ngân sách gốc).</div></div>
            </div>
            <div class="callout callout-tip">
              <div class="callout-title">🧪 Thực hành tính EVM &amp; đọc biểu đồ MTA</div>
              Vào <strong>Lab 5: EVM &amp; MTA Lab</strong> để nhập số liệu thực tế và xem hệ thống tự chẩn đoán sức khỏe dự án, dự báo vượt ngân sách và vẽ đồ thị MTA.
            </div>
          `
        },
        {
          id: 'm3-change',
          title: '3. Quản trị thay đổi (Change Request Management)',
          html: `
            <p>Thay đổi trong dự án là điều khó tránh. Nguyên tắc vàng của Traditional PM là <strong>không cấm thay đổi, nhưng không bao giờ làm thay đổi "miệng" (Informal Change)</strong>:</p>
            <ol>
              <li><strong>Ghi nhận (Log):</strong> Mọi yêu cầu thay đổi đều phải viết thành <em>Change Request (CR)</em> và đưa vào Change Log.</li>
              <li><strong>Phân tích tác động (Impact Analysis):</strong> PM cùng đội kỹ thuật đánh giá CR tác động thế nào đến <em>Phạm vi, Đường găng, Chi phí, Chất lượng và Rủi ro</em>.</li>
              <li><strong>Phê duyệt (Decision):</strong> Trình <strong>Change Control Board (CCB)</strong> hoặc Sponsor quyết định: <em>Approve / Reject / Defer (đẩy sang Phase 2)</em>.</li>
              <li><strong>Cập nhật &amp; Truyền thông:</strong> Nếu được duyệt, cập nhật chính thức WBS, Gantt, Cost Baseline và thông báo toàn đội.</li>
            </ol>
          `
        },
        {
          id: 'm3-closure',
          title: '4. Giai đoạn Bàn giao & Đóng dự án (Handover & Project Closure — Gate 4)',
          html: `
            <p>Rất nhiều dự án làm tốt 90% chặng đường nhưng lại "chết đuối" ở 10% cuối cùng: bàn giao dang dở, không có chữ ký nghiệm thu, lỗi phát sinh kéo dài vô tận khiến dự án không bao giờ đóng được. Dechange chia <strong>Project Closure</strong> thành 3 trụ cột không thể thiếu:</p>
            <h3>Trụ cột 1: Nghiệm thu chính thức (Formal Acceptance / Abnahme)</h3>
            <ul>
              <li>Tổ chức <strong>UAT (User Acceptance Testing)</strong> đối chiếu từng hạng mục với <em>Acceptance Criteria</em> đã thống nhất từ pha Planning.</li>
              <li>Ký <strong>Acceptance Protocol (Biên bản nghiệm thu chính thức)</strong> — đây là cột mốc pháp lý xác nhận chuyển giao trách nhiệm và thường gắn liền điều kiện thanh toán &amp; bắt đầu thời hạn bảo hành.</li>
              <li><strong>Quản lý Punch List (Danh mục tồn đọng):</strong> Nếu còn các lỗi nhỏ không cản trở vận hành, ghi rõ vào phụ lục kèm thời hạn khắc phục và người phụ trách, thay vì treo vô thời hạn biên bản nghiệm thu.</li>
            </ul>
            <h3>Trụ cột 2: Chuyển giao vận hành (Handover to Operations)</h3>
            <ul>
              <li>Bàn giao đầy đủ: Mã nguồn/bản vẽ hoàn công, tài liệu kỹ thuật, hướng dẫn sử dụng (User Manual), Runbook xử lý sự cố.</li>
              <li>Đào tạo người dùng cuối và đội vận hành (<em>Knowledge Transfer</em>).</li>
              <li>Thiết lập giai đoạn <strong>Hypercare (Hỗ trợ tăng cường sau Go-Live, thường 2–4 tuần)</strong> với SLA rõ ràng trước khi chuyển hẳn về hỗ trợ tiêu chuẩn.</li>
            </ul>
            <h3>Trụ cột 3: Đóng hành chính &amp; Đúc kết tri thức (Administrative Closure &amp; Lessons Learned)</h3>
            <ul>
              <li><strong>Final Project Report:</strong> So sánh tổng kết Kế hoạch gốc vs. Thực tế đạt được (Mục tiêu, Tiến độ, Ngân sách).</li>
              <li><strong>Hội thảo Lessons Learned:</strong> Tổ chức trong tinh thần cởi mở, <em>không đổ lỗi cá nhân (Blameless)</em> — rút ra: Điều gì làm tốt cần nhân rộng? Điều gì vấp váp và cách phòng tránh cho dự án sau?</li>
              <li><strong>Thanh lý &amp; Giải phóng:</strong> Quyết toán hợp đồng nhà cung cấp, đóng mã chi phí kế toán, lưu trữ hồ sơ vào kho PMO, chính thức trả nhân sự về phòng ban chức năng và <strong>tổ chức ghi nhận / ăn mừng thành công (Project Celebration)</strong>.</li>
            </ul>
            <div class="callout callout-pitfall">
              <div class="callout-title">⚠️ Sai lầm thường gặp khi đóng dự án</div>
              Đợi đến khi dự án đóng xong 2 tháng mới làm Lessons Learned (lúc đó mọi người đã chuyển sang dự án mới và quên sạch chi tiết). Hãy thu thập bài học liên tục ở mỗi Gate và chốt tổng kết <strong>ngay trong tuần cuối trước khi giải tán team</strong>.
            </div>
          `
        }
      ]
    },

    /* ======================================================================
       MODULE 4: AGILE PROJECT MANAGEMENT
       ====================================================================== */
    {
      id: 'm4',
      code: 'M4',
      title: 'Agile Project Management (Quản trị Linh hoạt)',
      subtitle: 'Agile Manifesto, Tư duy lặp tăng trưởng, Khung Scrum (3-3-5) & Hệ thống kéo Kanban',
      phaseTag: 'Tiến hóa · Agile',
      pillClass: 'pill-agile',
      readMinutes: 18,
      labLink: 'stacey',
      summary: 'Hiểu sâu lý do Agile ra đời, cách vòng đời dự án biến đổi từ tuần tự sang lặp và tăng trưởng thông qua Scrum và Kanban — tiền đề bắt buộc trước khi bước sang Hybrid.',
      sections: [
        {
          id: 'm4-mindset',
          title: '1. Tư duy Agile & Tuyên ngôn Agile (Agile Manifesto)',
          html: `
            <p>Khi môi trường biến động nhanh (VUCA) và yêu cầu khách hàng chỉ thực sự rõ ràng <em>sau khi họ chạm tay vào sản phẩm mẫu</em>, cách lập kế hoạch chi tiết trước cả năm của Traditional sẽ trở nên lỗi thời ngay khi vừa in ra. <strong>Agile</strong> chuyển từ điều khiển theo kế hoạch sang <strong>điều khiển thực nghiệm (Empirical Process Control)</strong> dựa trên 3 trụ cột: <strong>Minh bạch (Transparency) – Thanh tra (Inspection) – Thích nghi (Adaptation)</strong>.</p>
            <div class="grid-2">
              <div class="card" style="margin:0;">
                <h4>4 Giá trị cốt lõi (Agile Manifesto)</h4>
                <ul>
                  <li><strong>Cá nhân &amp; Tương tác</strong> hơn Quy trình &amp; Công cụ.</li>
                  <li><strong>Sản phẩm chạy được</strong> hơn Tài liệu đầy đủ.</li>
                  <li><strong>Cộng tác với khách hàng</strong> hơn Đàm phán hợp đồng.</li>
                  <li><strong>Phản hồi với thay đổi</strong> hơn Bám sát kế hoạch.</li>
                </ul>
                <p style="font-size:0.82rem;margin-bottom:0;"><em>(Vế phải vẫn có giá trị, nhưng Agile đề cao vế trái hơn.)</em></p>
              </div>
              <div class="card" style="margin:0;">
                <h4>Lặp (Iterative) &amp; Tăng trưởng (Incremental)</h4>
                <ul>
                  <li><strong>Incremental (Tăng trưởng):</strong> Xây dựng và bàn giao từng mảnh sản phẩm hoàn chỉnh theo giá trị cao nhất trước (MVP → Release 2 → Release 3).</li>
                  <li><strong>Iterative (Lặp):</strong> Liên tục tinh chỉnh chất lượng và thiết kế qua các vòng phản hồi thực tế từ người dùng.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'm4-scrum',
          title: '2. Khung làm việc Scrum (Mô hình 3 – 3 – 5)',
          html: `
            <p>Scrum là khung Agile phổ biến nhất được André Dechange phân tích chi tiết nhờ cấu trúc tối giản nhưng kỷ luật cao:</p>
            <div class="diagram-box">
              <svg viewBox="0 0 840 190" width="100%" style="min-width:600px;display:block;margin:auto;">
                <rect x="15" y="48" width="145" height="82" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
                <text x="87" y="82" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4c1d95">Product Backlog</text>
                <text x="87" y="102" text-anchor="middle" font-size="10.5" fill="#5b21b6">Owner: Product Owner</text>

                <line x1="160" y1="89" x2="210" y2="89" stroke="#7c3aed" stroke-width="2"/>
                <rect x="212" y="48" width="140" height="82" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
                <text x="282" y="82" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4c1d95">Sprint Backlog</text>
                <text x="282" y="102" text-anchor="middle" font-size="10.5" fill="#5b21b6">Sprint Planning</text>

                <line x1="352" y1="89" x2="405" y2="89" stroke="#7c3aed" stroke-width="2"/>
                <circle cx="485" cy="92" r="64" fill="#faf5ff" stroke="#7c3aed" stroke-width="3"/>
                <text x="485" y="84" text-anchor="middle" font-size="13.5" font-weight="800" fill="#4c1d95">SPRINT</text>
                <text x="485" y="103" text-anchor="middle" font-size="11" fill="#6d28d9">1 – 4 tuần</text>
                <text x="485" y="121" text-anchor="middle" font-size="10" fill="#64748b">Daily Scrum (15p)</text>

                <line x1="549" y1="89" x2="610" y2="89" stroke="#059669" stroke-width="2"/>
                <rect x="612" y="48" width="210" height="82" rx="10" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
                <text x="717" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="#065f46">Product Increment</text>
                <text x="717" y="98" text-anchor="middle" font-size="10.5" fill="#047857">Đạt Definition of Done</text>
                <text x="717" y="115" text-anchor="middle" font-size="10" fill="#334155">Sprint Review + Retrospective</text>

                <text x="420" y="178" text-anchor="middle" font-size="11" fill="#475569">Vòng lặp phản hồi liên tục sau mỗi Sprint Review quay về cập nhật Product Backlog</text>
              </svg>
              <div class="diagram-caption">Hình 4.1 — Vòng đời một Sprint trong Scrum: từ Product Backlog đến Product Increment đạt chuẩn Done.</div>
            </div>
            <div class="grid-3">
              <div class="card" style="margin:0;">
                <h4>3 Vai trò (Accountabilities)</h4>
                <ul>
                  <li><strong>Product Owner (PO):</strong> Tối đa hóa giá trị sản phẩm, quản lý &amp; sắp thứ tự Product Backlog.</li>
                  <li><strong>Scrum Master (SM):</strong> Huấn luyện Scrum, bảo vệ đội ngũ, tháo gỡ trở ngại (không phải sếp giao việc).</li>
                  <li><strong>Developers:</strong> Đội liên chức năng tự quản, cùng chịu trách nhiệm tạo ra Increment đạt chuẩn Done.</li>
                </ul>
              </div>
              <div class="card" style="margin:0;">
                <h4>3 Tạo tác (Artifacts)</h4>
                <ul>
                  <li><strong>Product Backlog:</strong> Danh sách duy nhất mọi yêu cầu sản phẩm (cam kết: <em>Product Goal</em>).</li>
                  <li><strong>Sprint Backlog:</strong> Kế hoạch của đội cho Sprint hiện tại (cam kết: <em>Sprint Goal</em>).</li>
                  <li><strong>Increment:</strong> Phần sản phẩm hoàn chỉnh, dùng được (cam kết: <em>Definition of Done</em>).</li>
                </ul>
              </div>
              <div class="card" style="margin:0;">
                <h4>5 Sự kiện (Events)</h4>
                <ul>
                  <li><strong>Sprint:</strong> Khung thời gian cố định 1–4 tuần bao bọc 4 sự kiện còn lại.</li>
                  <li><strong>Sprint Planning:</strong> Chốt mục tiêu &amp; kế hoạch Sprint.</li>
                  <li><strong>Daily Scrum:</strong> 15 phút đồng bộ hàng ngày.</li>
                  <li><strong>Sprint Review:</strong> Demo sản phẩm thật lấy phản hồi.</li>
                  <li><strong>Sprint Retrospective:</strong> Cải tiến cách làm việc nội bộ.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'm4-kanban',
          title: '3. Kanban & Khi nào chọn Kanban thay vì Scrum?',
          html: `
            <p>Khác với Scrum chạy theo các nhịp Sprint cố định, <strong>Kanban</strong> tập trung vào <strong>dòng chảy liên tục (Continuous Flow)</strong> với 4 nguyên tắc thực hành cốt lõi:</p>
            <ol>
              <li><strong>Trực quan hóa công việc (Visualize the Workflow):</strong> Bảng Kanban gồm các cột trạng thái thực tế (Backlog → Analysis → In Dev → Testing → Done).</li>
              <li><strong>Giới hạn công việc đang làm (Limit WIP — Work in Progress):</strong> Mỗi cột có trần số lượng tối đa (ví dụ: In Dev tối đa 3 thẻ). Muốn kéo việc mới vào, buộc phải giúp đẩy việc cũ sang cột sau — chống đa nhiệm gây tắc nghẽn (Bottleneck).</li>
              <li><strong>Quản lý dòng chảy (Manage Flow):</strong> Theo dõi <strong>Lead Time</strong> (từ lúc yêu cầu đến lúc giao) và <strong>Cycle Time</strong> (từ lúc bắt tay làm đến lúc xong).</li>
              <li><strong>Hệ thống kéo (Pull System) &amp; Cải tiến liên tục (Kaizen):</strong> Rất mạnh cho đội vận hành, bảo trì, hỗ trợ sau Go-Live (Hypercare) hoặc các dự án có yêu cầu phát sinh đột xuất liên tục.</li>
            </ol>
          `
        }
      ]
    },

    /* ======================================================================
       MODULE 5: HYBRID PROJECT MANAGEMENT (DECHANGE'S SIGNATURE CHAPTER)
       ====================================================================== */
    {
      id: 'm5',
      code: 'M5',
      title: 'Hybrid Project Management (Mô hình Lai)',
      subtitle: 'Phổ kết hợp Hybrid & 5 Hình thái Hybrid đặc trưng của André Dechange (từ Traditional + Agile đến Freestyle)',
      phaseTag: 'Trọng tâm Dechange · Hybrid',
      pillClass: 'pill-hybrid',
      readMinutes: 22,
      labLink: 'stacey',
      summary: 'Chương mang dấu ấn học thuật lớn nhất của André Dechange: giải mã Hybrid không phải 1 khuôn mẫu duy nhất mà là một phổ gồm 5 hình thái kết hợp chiến lược giữa kỷ luật Traditional và tốc độ Agile.',
      sections: [
        {
          id: 'm5-why-hybrid',
          title: '1. Tại sao Hybrid trở thành tiêu chuẩn thực tế của doanh nghiệp hiện đại?',
          html: `
            <p>Trong thực tế doanh nghiệp, cực hiếm dự án nào 100% thuần Waterfall hoặc 100% thuần Scrum. Một dự án phần mềm doanh nghiệp hay phát triển sản phẩm mới thường tồn tại song song <strong>hai thế giới</strong>:</p>
            <ul>
              <li><strong>Tầng Quản trị &amp; Ràng buộc cứng (cần Traditional):</strong> Ban giám đốc cần phê duyệt ngân sách năm, mốc ra mắt sản phẩm gắn sự kiện thương mại, quy trình mua sắm phần cứng, tuân thủ pháp lý/kiểm toán, hợp đồng với đối tác.</li>
              <li><strong>Tầng Thiết kế &amp; Phát triển giải pháp (cần Agile):</strong> Giao diện người dùng, luồng nghiệp vụ phần mềm, tính năng AI/số hóa có độ bất định cao và cần phản hồi liên tục từ người dùng cuối.</li>
            </ul>
            <div class="callout callout-hybrid">
              <div class="callout-title">⭐ Luận điểm cốt lõi của André Dechange</div>
              <strong>Hybrid Project Management không phải một phương pháp đơn lẻ</strong>, mà là một <strong>phổ kết hợp có chủ đích (Spectrum of Combinations)</strong> giữa các yếu tố Traditional và Agile nhằm tối ưu hóa sự phù hợp với <em>đặc thù dự án, mô hình quy trình và văn hóa tổ chức</em>.
            </div>
          `
        },
        {
          id: 'm5-five-forms',
          title: '2. Năm (5) Hình thái Hybrid theo phân loại của André Dechange',
          html: `
            <div class="diagram-box">
              <svg viewBox="0 0 860 155" width="100%" style="min-width:640px;display:block;margin:auto;">
                <defs>
                  <linearGradient id="hybGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#0284c7"/>
                    <stop offset="50%" stop-color="#d97706"/>
                    <stop offset="100%" stop-color="#7c3aed"/>
                  </linearGradient>
                </defs>
                <rect x="20" y="18" width="820" height="10" rx="5" fill="url(#hybGrad)"/>
                <text x="20" y="13" font-size="10.5" font-weight="700" fill="#0284c7">◄ THUẦN TRADITIONAL</text>
                <text x="840" y="13" text-anchor="end" font-size="10.5" font-weight="700" fill="#7c3aed">THUẦN AGILE ►</text>

                <rect x="20" y="42" width="152" height="98" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>
                <text x="96" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0c4a6e">Dạng 1</text>
                <text x="96" y="84" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Traditional +</text>
                <text x="96" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Agile Methods</text>
                <text x="96" y="124" text-anchor="middle" font-size="9.5" fill="#475569">Daily, Kanban, Retro</text>

                <rect x="187" y="42" width="152" height="98" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
                <text x="263" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#78350f">Dạng 2</text>
                <text x="263" y="84" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Traditional Frame</text>
                <text x="263" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">+ Agile Phases</text>
                <text x="263" y="124" text-anchor="middle" font-size="9.5" fill="#475569">Water-Scrum-Fall</text>

                <rect x="354" y="42" width="152" height="98" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.6"/>
                <text x="430" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#7c2d12">Dạng 3</text>
                <text x="430" y="84" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Fully Combined</text>
                <text x="430" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Trad &amp; Agile</text>
                <text x="430" y="124" text-anchor="middle" font-size="9.5" fill="#475569">Song song &amp; Đồng bộ</text>

                <rect x="521" y="42" width="152" height="98" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>
                <text x="597" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#4c1d95">Dạng 4</text>
                <text x="597" y="84" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Agile Frame +</text>
                <text x="597" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Trad Methods</text>
                <text x="597" y="124" text-anchor="middle" font-size="9.5" fill="#475569">Scrum + Milestone/Risk</text>

                <rect x="688" y="42" width="152" height="98" rx="8" fill="#f1f5f9" stroke="#475569" stroke-width="1.6" stroke-dasharray="4 3"/>
                <text x="764" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e293b">Dạng 5</text>
                <text x="764" y="84" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Freestyle /</text>
                <text x="764" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">Tailored</text>
                <text x="764" y="124" text-anchor="middle" font-size="9.5" fill="#475569">May đo theo ngữ cảnh</text>
              </svg>
              <div class="diagram-caption">Hình 5.1 — Phổ 5 hình thái Hybrid Project Management theo André Dechange.</div>
            </div>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>Hình thái Hybrid</th><th>Cách vận hành thực tế</th><th>Ví dụ điển hình</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>1. Traditional + Agile Methods</strong></td><td>Giữ nguyên khung kế hoạch Waterfall (WBS, Gantt, Stage-Gate), bổ sung các công cụ Agile nhẹ để tăng minh bạch và tốc độ giao tiếp.</td><td>Dự án xây dựng hoặc triển khai hạ tầng có bảng Kanban theo dõi công việc tuần và họp Daily 15 phút.</td></tr>
                  <tr><td><strong>2. Traditional Framework + Agile Phases</strong></td><td>Khung ngoài là Traditional (Khởi tạo, Ngân sách, Nghiệm thu), nhưng nhúng các pha Agile <em>nối tiếp</em> (<strong>Water-Scrum-Fall</strong>) hoặc <em>song song</em> (<strong>Agile-Stage-Gate</strong>) ở giai đoạn phát triển.</td><td>Dự án ERP/Cổng B2B: Khởi tạo &amp; Thiết kế tổng thể (Waterfall) → Phát triển tính năng (Scrum Sprints) → UAT &amp; Go-Live (Waterfall).</td></tr>
                  <tr><td><strong>3. Fully Combined Traditional &amp; Agile</strong></td><td>Kết hợp đồng bộ hai hệ thống song song cho dự án đa ngành lớn, nối với nhau bằng các <strong>Synchronization Points (Điểm đồng bộ)</strong> định kỳ.</td><td>Phát triển ô tô điện / thiết bị IoT: Phần cứng chạy Stage-Gate truyền thống, phần mềm điều khiển chạy Scrum, đồng bộ mỗi quý để tích hợp mẫu thử.</td></tr>
                  <tr><td><strong>4. Agile Framework + Traditional Methods</strong></td><td>Vận hành cốt lõi bằng Scrum/Kanban, nhưng bổ sung công cụ kiểm soát truyền thống (Master Milestones, Cost Tracking, Risk Register, RAG Report) để đáp ứng Ban lãnh đạo.</td><td>Đội sản phẩm số chạy Scrum nhưng cần báo cáo dòng tiền, tiến độ quý và quản trị rủi ro pháp lý cho Tập đoàn.</td></tr>
                  <tr><td><strong>5. Freestyle / Tailored Approach</strong></td><td>Tự lựa chọn từng mảnh ghép thực hành (Practices) tốt nhất từ cả hai thế giới mà không gò bó theo khuôn mẫu cố định — đòi hỏi PM &amp; đội ngũ có độ trưởng thành cao.</td><td>Đội ngũ giàu kinh nghiệm thiết kế bộ quy trình riêng (ví dụ: Shape Up + Stage-Gate ngân sách + Kanban).</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          id: 'm5-governance',
          title: '3. Quy tắc sống còn để Hybrid không biến thành "Hỗn loạn kép"',
          html: `
            <p>Sai lầm lớn nhất khi làm Hybrid là <em>"nhặt cái dở của cả hai"</em> — vừa họp hành/báo cáo rườm rà như Waterfall, vừa thiếu kế hoạch và kỷ luật. Để triển khai Hybrid thành công, Dechange nhấn mạnh 4 nguyên tắc:</p>
            <ol>
              <li><strong>Phân định vai trò cực kỳ rạch ròi:</strong> Ai là <strong>Project Manager</strong> (chịu trách nhiệm tổng thể ngân sách, hợp đồng, mốc đồng bộ, rủi ro, Ban chỉ đạo), ai là <strong>Product Owner</strong> (ưu tiên giá trị nghiệp vụ &amp; Backlog), ai là <strong>Scrum Master</strong> (quy trình đội Agile).</li>
              <li><strong>Thiết lập Synchronization Points (Điểm đồng bộ):</strong> Xác định lịch khớp nối cố định giữa các đội Waterfall và đội Sprint để tránh bên làm xong sớm phải chờ đợi hoặc tích hợp bị lệch phiên bản.</li>
              <li><strong>Thống nhất ngôn ngữ báo cáo:</strong> PM đóng vai trò "phiên dịch viên" — chuyển hóa Velocity/Burnup của đội Agile thành tiến độ mốc (MTA) và trạng thái ngân sách cho Ban chỉ đạo mà không bắt đội kỹ thuật viết báo cáo trùng lặp.</li>
              <li><strong>Chọn hợp đồng thông minh:</strong> Áp dụng <em>Agile Fixed Price</em> hoặc <em>Capped Time &amp; Material</em> thay vì ép hợp đồng Fixed-Price cứng nhắc lên một phạm vi đang chạy Sprint.</li>
            </ol>
          `
        }
      ]
    },

    /* ======================================================================
       MODULE 6: PERSONAL, SOCIAL COMPETENCIES & MULTIPROJECT CONTEXT
       ====================================================================== */
    {
      id: 'm6',
      code: 'M6',
      title: 'Soft Skills & Multiproject Management',
      subtitle: 'Self-Management, Lãnh đạo, Đội nhóm (Tuckman), Giao tiếp 4 tai, Xung đột & Portfolio / Program / PMO',
      phaseTag: 'Con người & Mở rộng',
      pillClass: 'pill-primary',
      readMinutes: 18,
      labLink: 'stakeholder',
      summary: 'Công cụ chỉ chiếm 30% thành công — 70% còn lại là Con người và Bối cảnh tổ chức. Tổng hợp Chương 5 (Personal & Social Competencies) và Chương 6 (Multiproject Management) của André Dechange.',
      sections: [
        {
          id: 'm6-self-lead',
          title: '1. Quản trị bản thân (Self-Management) & Lãnh đạo dự án',
          html: `
            <p>Project Manager thường xuyên chịu áp lực đa chiều (từ Sponsor, Khách hàng, Line Manager đến Đội ngũ) mà nhiều khi không nắm quyền hành chính trực tiếp. Vì vậy, Chương 5 sách Dechange bắt đầu từ chính năng lực nội tại của PM:</p>
            <ul>
              <li><strong>Self-Management (Quản trị bản thân):</strong> Sử dụng <strong>Ma trận Eisenhower</strong> (Khẩn cấp vs. Quan trọng) để tránh rơi vào bẫy "chữa cháy cả ngày" mà bỏ quên việc quan trọng (như quản trị rủi ro và giao tiếp Stakeholder); thiết lập ranh giới thời gian (Time-blocking) để chống kiệt sức (Burnout).</li>
              <li><strong>Lãnh đạo tình huống (Situational Leadership — Hersey &amp; Blanchard):</strong> Không áp một phong cách cho mọi thành viên:
                <ul>
                  <li>Nhân sự mới/chưa thạo việc → <em>Directing (Chỉ đạo rõ ràng)</em>.</li>
                  <li>Nhân sự đang học, dễ nản → <em>Coaching (Kèm cặp &amp; khích lệ)</em>.</li>
                  <li>Nhân sự giỏi nhưng thiếu tự tin → <em>Supporting (Hỗ trợ &amp; cùng thảo luận)</em>.</li>
                  <li>Nhân sự thành thạo, chủ động → <em>Delegating (Trao quyền tự chủ)</em>.</li>
                </ul>
              </li>
            </ul>
          `
        },
        {
          id: 'm6-team-comm',
          title: '2. Phát triển đội nhóm (Tuckman), Giao tiếp 4 tai & Xung đột',
          html: `
            <h3>5 Giai đoạn phát triển nhóm (Bruce Tuckman)</h3>
            <ol>
              <li><strong>Forming (Hình thành):</strong> Mọi người lịch sự, thăm dò, phụ thuộc nhiều vào hướng dẫn của PM.</li>
              <li><strong>Storming (Sóng gió):</strong> Bắt đầu xuất hiện va chạm quan điểm, tranh cãi cách làm, hiệu suất tạm giảm — <em>đây là giai đoạn bình thường, PM phải làm trung gian hóa giải chứ không né tránh</em>.</li>
              <li><strong>Norming (Ổn định quy chuẩn):</strong> Nhóm thống nhất luật chơi (Working Agreement), tôn trọng vai trò của nhau.</li>
              <li><strong>Performing (Hiệu suất cao):</strong> Nhóm tự quản mạnh mẽ, tin tưởng nhau và tập trung giải quyết vấn đề.</li>
              <li><strong>Adjourning (Giải tán — Pha Closure):</strong> Dự án kết thúc, thành viên có thể hụt hẫng — PM cần ghi nhận công sức và tổng kết trân trọng.</li>
            </ol>
            <h3>Mô hình Giao tiếp 4 tai (4-Ears Model — Friedemann Schulz von Thun)</h3>
            <p>Rất đặc trưng trong trường phái quản trị Đức của Dechange: Mọi thông điệp đều mang 4 lớp nghĩa: <strong>(1) Sự thật khách quan</strong>, <strong>(2) Tự bộc lộ</strong>, <strong>(3) Mối quan hệ</strong> và <strong>(4) Lời kêu gọi hành động</strong>. Ví dụ: Khi Sponsor nói <em>"Mốc UAT còn 3 ngày nữa thôi đấy"</em> — tai Sự thật nghe lịch trình, nhưng tai Mối quan hệ có thể hiểu thành <em>"Sếp đang không tin tưởng mình"</em>. PM giỏi luôn kiểm tra lại hiểu nhầm ở lớp Mối quan hệ và Lời kêu gọi.</p>
            <h3>Quản trị Xung đột (Thomas-Kilmann &amp; 9 cấp độ Glasl)</h3>
            <p>Phát hiện sớm xung đột (khi mới ở tầng Win–Win của thang <strong>Friedrich Glasl</strong>) để dùng chiến lược <strong>Collaborating (Hợp tác cùng thắng)</strong> hoặc <strong>Compromising (Thỏa hiệp)</strong>. Khi xung đột leo lên tầng Win–Lose hoặc Lose–Lose, PM cần sự can thiệp trung gian khách quan hoặc quyết định điều hành dứt khoát.</p>
          `
        },
        {
          id: 'm6-multiproject',
          title: '3. Bức tranh mở rộng: Multiproject Management (Program, Portfolio & PMO)',
          html: `
            <p>Chương 6 của Dechange mở rộng góc nhìn từ 1 dự án đơn lẻ lên cấp doanh nghiệp — nơi hàng chục dự án cạnh tranh cùng một nguồn lực hữu hạn:</p>
            <div class="table-wrap">
              <table class="pm-table">
                <thead>
                  <tr><th>Cấp độ</th><th>Định nghĩa &amp; Mục tiêu trọng tâm</th><th>Câu hỏi cốt lõi</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Project (Dự án)</strong></td><td>Nỗ lực duy nhất tạo ra sản phẩm/dịch vụ/kết quả cụ thể.</td><td><em>"Làm dự án ĐÚNG cách?"</em> (Doing the project right)</td></tr>
                  <tr><td><strong>Program (Chương trình)</strong></td><td>Nhóm các dự án <strong>có liên quan mật thiết</strong>, quản lý phối hợp để tạo lợi ích tổng hợp lớn hơn khi làm riêng lẻ.</td><td><em>"Phối hợp các dự án phụ thuộc để tối ưu lợi ích chung?"</em></td></tr>
                  <tr><td><strong>Portfolio (Danh mục đầu tư)</strong></td><td>Tập hợp các dự án &amp; chương trình (không nhất thiết liên quan kỹ thuật) nhằm hiện thực hóa <strong>mục tiêu chiến lược</strong> của công ty.</td><td><em>"Chọn ĐÚNG dự án để đầu tư?"</em> (Doing the right projects)</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Vai trò của PMO (Project Management Office):</strong> Cơ quan thường trực giúp chuẩn hóa vòng đời &amp; biểu mẫu dự án (Supportive), điều phối chia sẻ nguồn lực và giám sát tuân thủ (Controlling), hoặc trực tiếp quản lý các dự án chiến lược (Directive), đồng thời lưu giữ kho <em>Lessons Learned</em> cho toàn doanh nghiệp.</p>
          `
        }
      ]
    }
  ];
})();
