/* ==========================================================================
   End-to-End Case Study: "NexusPortal — Cổng Đặt Hàng Khách Hàng B2B"
   Follows André Dechange's "durchgängiges Praxisbeispiel" across all 4 Phases
   plus a direct Traditional vs. Hybrid (Water-Scrum-Fall) comparison.
   ========================================================================== */
(function () {
  window.PMApp.data.caseStudy = {
    title: 'Case Study Xuyên Suốt: Dự án "NexusPortal" (Cổng Đặt Hàng B2B)',
    subtitle: 'Từ ý tưởng ban đầu đến nghiệm thu bàn giao (Abnahme) & đối chiếu triển khai Traditional vs. Hybrid (Water-Scrum-Fall)',
    context: {
      company: 'Công ty Phân phối Thiết bị Công nghiệp Việt Đức (420 nhân sự, 650 đại lý B2B)',
      problem: 'Hiện tại 85% đơn hàng đại lý gửi qua Email/Zalo rồi nhân viên nhập tay vào ERP, mất trung bình 4,5 giờ xử lý/đơn, tỷ lệ sai mã hàng 6,2%.',
      budget: '2,4 tỷ VNĐ (Ngân sách trần đã gồm 10% quỹ dự phòng rủi ro)',
      duration: '6 tháng (26 tuần)',
      classification: 'Dự án loại B+ (Liên phòng ban Kinh doanh – Kho vận – Kế toán – CNTT, có tích hợp ERP lõi).'
    },
    stages: [
      {
        id: 'cs-1',
        phase: 'Pha 01 · Initiation',
        title: 'Khởi tạo: Projectworthiness, Project Charter & Stakeholder Matrix',
        gate: 'Gate 1: Sponsor ký duyệt Charter (Tuần 2)',
        body: `
          <h4>1. Kiểm tra Projectworthiness &amp; Phân loại</h4>
          <p>Ngân sách 2,4 tỷ VNĐ, thời lượng 6 tháng, ảnh hưởng 4 phòng ban + 650 đại lý, rủi ro tích hợp ERP cao → <strong>Đạt chuẩn Dự án loại B+</strong>, bắt buộc có Project Charter, Sponsor (Giám đốc Kinh doanh) và Ban chỉ đạo (Steering Committee).</p>
          <h4>2. Tóm tắt Project Charter (Projektauftrag)</h4>
          <div class="table-wrap">
            <table class="pm-table">
              <tbody>
                <tr><th style="width:28%;">Mục tiêu SMART</th><td>Triển khai Cổng B2B tích hợp thời gian thực với ERP trong vòng <strong>26 tuần</strong>, ngân sách tối đa <strong>2,4 tỷ VNĐ</strong>; rút thời gian xử lý đơn từ 4,5 giờ xuống <strong>&lt; 15 phút</strong>, giảm lỗi nhập liệu xuống <strong>&lt; 0,5%</strong>; đạt tối thiểu <strong>70% đại lý</strong> đặt hàng qua cổng sau 60 ngày Go-Live.</td></tr>
                <tr><th>Deliverables (In-Scope)</th><td>(1) Cổng Web đặt hàng &amp; tra cứu tồn kho/công nợ; (2) API đồng bộ 2 chiều với ERP; (3) Phân quyền đại lý &amp; phê duyệt hạn mức; (4) Bộ tài liệu &amp; đào tạo 30 nhân sự nội bộ + đại lý trọng điểm.</td></tr>
                <tr><th>Non-Goals (Out-of-Scope)</th><td><strong>KHÔNG</strong> làm ứng dụng Mobile Native (chỉ hỗ trợ Responsive Web); <strong>KHÔNG</strong> tích hợp thanh toán thẻ quốc tế; <strong>KHÔNG</strong> thay đổi hệ thống kế toán hiện hữu.</td></tr>
              </tbody>
            </table>
          </div>
          <h4>3. Stakeholder Matrix nổi bật</h4>
          <ul>
            <li><strong>Manage Closely:</strong> Giám đốc Kinh doanh (Sponsor — Ủng hộ), Trưởng phòng CNTT (Nắm khóa ERP — Trung lập, lo quá tải hạ tầng), Top 20 Đại lý chiến lược.</li>
            <li><strong>Keep Satisfied:</strong> Giám đốc Tài chính (Quan tâm trần 2,4 tỷ &amp; Payback &lt; 14 tháng), Pháp chế (Bảo mật dữ liệu hợp đồng).</li>
            <li><strong>Keep Informed:</strong> 18 Nhân viên Sales Admin — <em>Lưu ý thái độ ban đầu: Lo sợ bị cắt giảm việc làm</em> → Chiến lược: Mời tham gia sớm vào thiết kế quy trình &amp; truyền thông vai trò mới là "Chăm sóc đại lý VIP".</li>
          </ul>
        `
      },
      {
        id: 'cs-2',
        phase: 'Pha 02 · Planning',
        title: 'Lập kế hoạch: WBS, Đường găng CPM, Ngân sách & Rủi ro',
        gate: 'Gate 2: Baseline Freeze (Tuần 5)',
        body: `
          <h4>1. Cấu trúc WBS 3 cấp (100% Rule)</h4>
          <ul>
            <li><strong>1.1 Quản trị dự án:</strong> 1.1.1 Charter &amp; Kick-off · 1.1.2 Kiểm soát tiến độ/ngân sách · 1.1.3 Nghiệm thu &amp; Đóng dự án.</li>
            <li><strong>1.2 Phân tích &amp; Thiết kế:</strong> 1.2.1 Khảo sát quy trình &amp; Đặc tả UX/UI · 1.2.2 Đặc tả kiến trúc tích hợp API ERP.</li>
            <li><strong>1.3 Phát triển &amp; Tích hợp:</strong> 1.3.1 Cổng Đặt hàng &amp; Danh mục · 1.3.2 Phân quyền &amp; Công nợ · 1.3.3 Tích hợp ERP 2 chiều (Đường găng!).</li>
            <li><strong>1.4 Kiểm thử &amp; Chuyển giao:</strong> 1.4.1 System &amp; Performance Test · 1.4.2 UAT cùng 10 đại lý thí điểm · 1.4.3 Đào tạo, Go-Live &amp; Hypercare 4 tuần.</li>
          </ul>
          <h4>2. Đường găng (Critical Path) &amp; Rủi ro lớn nhất</h4>
          <p>Phân tích CPM chỉ ra nhánh <strong>1.2.2 (Kiến trúc API ERP) → 1.3.3 (Tích hợp ERP 2 chiều) → 1.4.1 (Kiểm thử tải) → 1.4.2 (UAT)</strong> có <strong>Total Float = 0</strong>. Mọi trễ hẹn từ đối tác ERP đều đẩy lùi ngày Go-Live.</p>
          <div class="table-wrap">
            <table class="pm-table">
              <thead><tr><th>Mã</th><th>Rủi ro trọng yếu</th><th>P × I</th><th>Phương án ứng phó (Mitigation)</th></tr></thead>
              <tbody>
                <tr><td>R01</td><td>API của hệ thống ERP cũ không đủ tài liệu, gây trễ nhánh đường găng 3 tuần.</td><td>4 × 5 = 20 (Đỏ)</td><td><strong>Mitigate:</strong> Chạy bản kiểm chứng kỹ thuật (Technical Spike) ngay Tuần 4; thuê chuyên gia ERP tham vấn theo gói T&amp;M.</td></tr>
                <tr><td>R02</td><td>Sales Admin &amp; Đại lý ngại dùng hệ thống mới sau Go-Live.</td><td>3 × 4 = 12 (Vàng)</td><td><strong>Mitigate:</strong> Mời đại diện đại lý tham gia UAT sớm; thiết kế video hướng dẫn 3 phút + thưởng chiết khấu 0,5% cho đơn online tháng đầu.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: 'cs-3',
        phase: 'Pha 03 · Execution & Controlling',
        title: 'Thực thi & Kiểm soát: Tình huống Tháng thứ 3 (EVM, MTA & Change Request)',
        gate: 'Gate 3: Acceptance Readiness (Tuần 21)',
        body: `
          <h4>Tình huống thực chiến tại Tuần 14 (Báo cáo Tháng thứ 3)</h4>
          <p>Dữ liệu EVM thu thập tại tuần 14 (trên tổng ngân sách gốc <code>BAC = 2.400 triệu</code>):</p>
          <div class="kpi-row">
            <div class="kpi-card"><div class="kpi-label">Planned Value (PV)</div><div class="kpi-val">1.200tr</div></div>
            <div class="kpi-card"><div class="kpi-label">Earned Value (EV)</div><div class="kpi-val">1.020tr</div></div>
            <div class="kpi-card"><div class="kpi-label">Actual Cost (AC)</div><div class="kpi-val">1.150tr</div></div>
            <div class="kpi-card"><div class="kpi-label">SPI / CPI</div><div class="kpi-val" style="color:var(--danger);">0.85 / 0.89</div></div>
          </div>
          <ul>
            <li><strong>Chẩn đoán (Trạng thái AMBER → tiệm cận RED):</strong> Dự án vừa <em>chậm tiến độ 15%</em> (SPI = 0.85, SV = -180tr) vừa <em>vượt chi phí 11%</em> (CPI = 0.89, CV = -130tr). Dự báo cuối kỳ <code>EAC = 2.400 / 0.89 ≈ 2.697 triệu</code> (nguy cơ vượt trần 297 triệu nếu không can thiệp!).</li>
            <li><strong>Biểu đồ MTA:</strong> Đường mốc <em>M4 (Hoàn tất tích hợp ERP)</em> đi lên liên tục 3 kỳ báo cáo liên tiếp (+2,5 tuần).</li>
            <li><strong>Phát sinh Change Request CR-04:</strong> Phòng Kinh doanh bất ngờ yêu cầu thêm tính năng <em>"Đề xuất giá chiết khấu theo combo tự động"</em>.</li>
            <li><strong>Cách xử lý chuẩn Dechange của PM:</strong>
              <ol>
                <li>Không nhận làm miệng! Ghi nhận CR-04 và phân tích tác động: tốn thêm 220 triệu &amp; trễ Go-Live 3 tuần.</li>
                <li>Trình Ban chỉ đạo: Đề xuất <strong>Defer CR-04 sang Phase 2</strong> để bảo vệ ngày Go-Live và ngân sách gốc.</li>
                <li>Với nhánh đường găng ERP đang trễ: Áp dụng <strong>Fast-tracking</strong> (cho đội QA viết kịch bản test song song trong lúc Dev hoàn thiện API) và dùng 80 triệu từ quỹ dự phòng để thuê chuyên gia tối ưu đồng bộ 2 tuần.</li>
              </ol>
            </li>
          </ul>
        `
      },
      {
        id: 'cs-4',
        phase: 'Pha 04 · Handover & Closure',
        title: 'Nghiệm thu (Abnahme), Chuyển giao vận hành & Lessons Learned',
        gate: 'Gate 4: Formal Closure (Tuần 26)',
        body: `
          <h4>1. UAT &amp; Biên bản Nghiệm thu (Acceptance Protocol)</h4>
          <p>10 đại lý thí điểm và đội Sales Admin chạy 48 kịch bản UAT đối chiếu tiêu chí chất lượng. Kết quả: 46/48 đạt ngay, còn 2 lỗi nhỏ về định dạng xuất PDF hóa đơn nháp (mức độ Minor — không chặn đặt hàng). Hai bên ký <strong>Biên bản nghiệm thu có điều kiện (Acceptance Protocol)</strong> kèm phụ lục <strong>Punch List</strong> cam kết vá 2 lỗi Minor trong 5 ngày làm việc.</p>
          <h4>2. Chuyển giao vận hành &amp; Hypercare</h4>
          <ul>
            <li>Bàn giao toàn bộ tài liệu API, Runbook giám sát đồng bộ ERP, mã nguồn và phân quyền quản trị cho phòng CNTT.</li>
            <li>Đào tạo xong 18 Sales Admin và phát hành video hướng dẫn cho 650 đại lý.</li>
            <li>Thiết lập <strong>Hypercare 4 tuần</strong>: trực hỗ trợ phản hồi sự cố nghiêm trọng trong vòng 2 giờ trước khi chuyển hẳn về Helpdesk thường trực.</li>
          </ul>
          <h4>3. Final Report &amp; Lessons Learned</h4>
          <ul>
            <li><strong>Kết quả cuối cùng:</strong> Bàn giao đúng Tuần 26, tổng chi thực tế 2,34 tỷ VNĐ (trong trần 2,4 tỷ), thời gian xử lý đơn giảm còn 9 phút.</li>
            <li><strong>3 Bài học xương máu lưu kho PMO:</strong> (1) Mọi dự án tích hợp hệ thống cũ bắt buộc phải có bước <em>Technical Spike</em> trước khi chốt Baseline; (2) Lôi kéo người dùng cuối (Sales Admin) sớm đã biến nhóm lo sợ thành nhóm ủng hộ mạnh nhất; (3) Cơ chế CCB đã cứu dự án khỏi trượt tiến độ khi dời CR-04 sang Phase 2.</li>
          </ul>
        `
      },
      {
        id: 'cs-5',
        phase: 'Góc nhìn Hybrid (Dechange)',
        title: 'So sánh: Nếu NexusPortal chạy theo Hybrid (Dạng 2: Water-Scrum-Fall) thì sao?',
        gate: 'Ứng dụng Chương 4 của André Dechange',
        body: `
          <p>Trong thực tế, <strong>NexusPortal</strong> là ứng cử viên hoàn hảo cho <strong>Hình thái Hybrid số 2 của André Dechange (Traditional Framework + Agile Phases — Water-Scrum-Fall)</strong>:</p>
          <div class="table-wrap">
            <table class="pm-table">
              <thead><tr><th>Giai đoạn</th><th>Chạy Thuần Traditional</th><th>Chạy Hybrid (Water-Scrum-Fall)</th></tr></thead>
              <tbody>
                <tr><td><strong>Initiation &amp; Architecture</strong></td><td>Khóa toàn bộ 100% đặc tả màn hình &amp; tính năng trước khi code.</td><td><strong>Traditional:</strong> Vẫn giữ Charter, trần 2,4 tỷ, Stakeholder Matrix &amp; chốt kiến trúc API ERP cứng, nhưng phạm vi UI/UX để ở mức <em>Epic Backlog</em>.</td></tr>
                <tr><td><strong>Development (Tuần 6–20)</strong></td><td>Code theo gói WBS suốt 3 tháng rồi mới mang ra cho đại lý xem ở UAT.</td><td><strong>Agile (7 Sprints × 2 tuần):</strong> Cuối mỗi 2 tuần đều <strong>Sprint Review</strong> demo bản chạy thật cho đại lý. Nhờ vậy phát hiện nhu cầu lọc sản phẩm sớm mà không cần chờ tới UAT!</td></tr>
                <tr><td><strong>Xử lý yêu cầu CR-04</strong></td><td>Đóng băng, bắt buộc qua quy trình CCB phức tạp.</td><td>Product Owner thương lượng với Sponsor: <strong>đổi ngang (Scope Trade-off)</strong> — đưa phần chiết khấu đơn giản vào Sprint 6 bằng cách bỏ bớt báo cáo ít dùng, giữ nguyên mốc Go-Live và ngân sách!</td></tr>
                <tr><td><strong>Handover &amp; Closure</strong></td><td>UAT, ký Abnahme, bàn giao Ops, Lessons Learned.</td><td><strong>Traditional + Agile:</strong> Vẫn giữ kỷ luật ký Abnahme &amp; Hypercare chuẩn pháp lý, kết hợp tổng hợp cải tiến từ 7 buổi Sprint Retrospective.</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  };

  /* Case Study 2: Industrial Multi-Stream Hybrid (Dechange Hybrid Form 3) */
  const smartFactory = {
    id: 'smartfactory',
    shortLabel: 'Case 2: SmartFactory 4.0 (Cơ khí + Phần mềm MES · Hybrid Dạng 3)',
    title: 'Case Study 2: Dự án "SmartFactory Line 4.0" (Dây chuyền Tự động & MES)',
    subtitle: 'Ví dụ công nghiệp đa ngành chuẩn phong cách Đức (André Dechange): Phần cứng/Cơ khí chạy Stage-Gate song song Phần mềm MES chạy Scrum, đồng bộ qua Synchronization Points',
    context: {
      company: 'Nhà máy Dược phẩm & Thực phẩm chức năng An Phú (GMP-WHO, 3 nhà xưởng)',
      problem: 'Dây chuyền đóng gói hiện tại chạy bán tự động (1.200 hộp/giờ), ghi chép lô sản xuất bằng sổ giấy nên khó truy xuất nguồn gốc khi kiểm tra GMP.',
      budget: '14,5 tỷ VNĐ (11 tỷ thiết bị cơ khí & lắp đặt + 3,5 tỷ phần mềm MES & tích hợp)',
      duration: '10 tháng (40 tuần)',
      classification: 'Dự án loại A (Chiến lược, ràng buộc pháp lý GMP cực chặt, có nhà thầu cơ khí Đức & đội phần mềm nội bộ).'
    },
    stages: [
      {
        id: 'sf-1',
        phase: 'Pha 01 · Initiation',
        title: 'Khởi tạo: Chọn Hybrid Dạng 3 (Fully Combined) & Hợp đồng kép',
        gate: 'Gate 1: Ban chỉ đạo phê duyệt Charter & Hợp đồng (Tuần 4)',
        body: `
          <h4>1. Tại sao không thể chạy thuần Traditional hay thuần Agile?</h4>
          <ul>
            <li><strong>Luồng Cơ khí &amp; Xây lắp (Stream A):</strong> Đặt chế tạo máy đóng gói tại Đức mất 16 tuần giao hàng, lắp đặt trong phòng sạch GMP — sai 1 ly phải tháo dỡ cực tốn kém → <strong>Bắt buộc Traditional (Stage-Gate + Hợp đồng Fixed-Price)</strong>.</li>
            <li><strong>Luồng Phần mềm MES &amp; Dashboard (Stream B):</strong> Giao diện giám sát OEE, cảnh báo lỗi máy, báo cáo truy xuất lô cho đội QA/Sản xuất có nhiều yêu cầu tinh chỉnh liên tục theo thực tế vận hành → <strong>Tối ưu bằng Agile (Scrum 2 tuần)</strong>.</li>
          </ul>
          <p>→ Theo khung 5 hình thái của André Dechange, dự án chốt chạy <strong>Hybrid Dạng 3: Fully Combined Traditional &amp; Agile</strong>, phân rõ: <strong>Overall PM</strong> quản trị tổng ngân sách, hợp đồng &amp; đồng bộ 2 luồng; <strong>Product Owner</strong> (Trưởng phòng QA) quản lý Backlog phần mềm MES.</p>
        `
      },
      {
        id: 'sf-2',
        phase: 'Pha 02 · Dual-Layer Planning',
        title: 'Lập kế hoạch 2 tầng & Thiết lập 4 Điểm đồng bộ (Synchronization Points)',
        gate: 'Gate 2: Baseline Freeze & Khóa Interface Contract (Tuần 8)',
        body: `
          <h4>1. Khóa Hợp đồng Giao diện (Interface Contract) ngay Tuần 7</h4>
          <p>Rủi ro lớn nhất của dự án đa ngành là phần mềm và phần cứng "không nói chung ngôn ngữ". Hai đội khóa chặt chuẩn giao tiếp <code>OPC-UA / PLC Tags</code> (danh sách 48 tín hiệu cảm biến, tốc độ máy, mã lô) và xây <strong>PLC Simulator (Bộ giả lập)</strong> để đội phần mềm code &amp; test ngay mà không cần chờ máy thật từ Đức về!</p>
          <h4>2. Lịch 4 Điểm đồng bộ (Synchronization Points)</h4>
          <div class="table-wrap">
            <table class="pm-table">
              <thead><tr><th>Sync Point</th><th>Tuần</th><th>Luồng Cơ khí (Traditional)</th><th>Luồng Phần mềm MES (Scrum)</th></tr></thead>
              <tbody>
                <tr><td><strong>SP1</strong></td><td>Tuần 12</td><td>Hoàn tất Thiết kế chi tiết (CDR)</td><td>Hoàn tất Sprint 2: Mockup giao diện + Test giả lập OPC-UA</td></tr>
                <tr><td><strong>SP2 (FAT)</strong></td><td>Tuần 22</td><td><strong>FAT (Factory Acceptance Test)</strong> tại xưởng nhà cung cấp</td><td>Sprint 7: Cắm thử bản MES Beta kết nối máy thật qua VPN</td></tr>
                <tr><td><strong>SP3 (SAT)</strong></td><td>Tuần 32</td><td>Lắp đặt xong dây chuyền tại nhà máy Việt Nam</td><td>Sprint 12: Chạy tích hợp thực tế đo OEE &amp; in tem truy xuất</td></tr>
                <tr><td><strong>SP4 (GMP)</strong></td><td>Tuần 38</td><td>Thẩm định thiết bị (IQ/OQ/PQ) chuẩn GMP</td><td>Hoàn tất thẩm định phần mềm (CSV) &amp; báo cáo kiểm toán</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: 'sf-3',
        phase: 'Pha 03 · Execution & Controlling',
        title: 'Thực thi & Xử lý khủng hoảng: Tàu chở máy kẹt cảng 3 tuần!',
        gate: 'Gate 3: Hoàn tất SAT & Sẵn sàng Thẩm định GMP (Tuần 34)',
        body: `
          <h4>Sự cố thực tế tại Tuần 26 (Đường găng bị đe dọa)</h4>
          <p>Container chở cụm máy đóng gói chính bị trễ tàu biển 3 tuần — đường MTA của mốc <em>SP3 (Lắp đặt xong)</em> lập tức bật dựng đứng +3 tuần, đe dọa vỡ lịch sản xuất vụ Tết!</p>
          <ul>
            <li><strong>Cứu tiến độ nhờ kiến trúc Hybrid:</strong> Trong 3 tuần chờ máy cập cảng, đội Scrum <strong>không hề ngồi chờ</strong> — họ dùng bộ giả lập PLC để chạy trước UAT quy trình nhập liệu và đào tạo vận hành phần mềm cho 25 công nhân.</li>
            <li><strong>Nén đường găng (Crashing + Fast-tracking):</strong> PM dùng 180 triệu từ quỹ dự phòng rủi ro để thuê thêm 1 tổ cơ điện làm 2 ca lắp đặt ngay khi máy về (Crashing) và chuẩn bị sẵn mặt bằng/đường điện khí nén trước 100% (Fast-tracking) → rút thời gian lắp đặt từ 4 tuần xuống 2 tuần, cứu lại được 2/3 tuần trễ!</li>
          </ul>
        `
      },
      {
        id: 'sf-4',
        phase: 'Pha 04 · Handover & Closure',
        title: 'Nghiệm thu kép (SAT + Abnahme), Chuyển giao & Lessons Learned',
        gate: 'Gate 4: Formal Closure & Giải ngân bảo hành (Tuần 40)',
        body: `
          <ul>
            <li><strong>Nghiệm thu kỹ thuật &amp; pháp lý (Abnahme):</strong> Dây chuyền chạy liên tục 72 giờ đạt năng suất 2.450 hộp/giờ (vượt mục tiêu 2.200), tỷ lệ lỗi &lt; 0,1%, toàn bộ hồ sơ thẩm định GMP (IQ/OQ/PQ/CSV) đạt 100%. Hai bên ký Biên bản nghiệm thu chính thức kèm lịch bảo trì định kỳ 12 tháng.</li>
            <li><strong>Chuyển giao &amp; Hypercare:</strong> Bàn giao bộ tài liệu bảo trì cơ khí, phụ tùng thay thế chiến lược và quyền quản trị MES cho đội Kỹ thuật nhà máy; duy trì trực kỹ thuật tại xưởng 2 ca trong 3 tuần đầu.</li>
            <li><strong>Bài học vàng về Hybrid Dạng 3:</strong> Việc đầu tư xây <strong>PLC Simulator</strong> ở Tuần 7 chỉ tốn 45 triệu nhưng đã giúp đội phần mềm giữ nguyên tốc độ suốt 3 tuần máy kẹt cảng và tiết kiệm gần 1 tháng tổng tiến độ!</li>
          </ul>
        `
      }
    ]
  };

  window.PMApp.data.caseStudy.id = 'nexusportal';
  window.PMApp.data.caseStudy.shortLabel = 'Case 1: NexusPortal (CNTT B2B · Water-Scrum-Fall)';
  window.PMApp.data.caseStudies = [window.PMApp.data.caseStudy, smartFactory];
})();
