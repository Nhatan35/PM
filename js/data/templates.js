/* ==========================================================================
   6 Ready-to-Use PM Templates (View, Print, or Download Markdown)
   ========================================================================== */
(function () {
  window.PMApp.data.templates = [
    {
      id: 'tpl-charter',
      phase: 'Pha 01 · Initiation',
      name: 'Project Charter (Projektauftrag)',
      desc: 'Văn bản khai sinh chính thức dự án — xác nhận mục tiêu SMART, Deliverables, Non-Goals, ngân sách khung và thẩm quyền PM (Gate 1).',
      markdown: `# PROJECT CHARTER (TUYÊN NGÔN DỰ ÁN)

## 1. Thông tin chung
- **Tên dự án:** [Điền tên dự án]
- **Mã dự án / Phân loại:** [PRJ-2026-01 | Loại A / B / C]
- **Project Sponsor:** [Họ tên & Chức danh]
- **Project Manager:** [Họ tên]
- **Phương pháp tiếp cận:** [Traditional / Agile / Hybrid - Ghi rõ hình thái Dechange]
- **Thời gian dự kiến:** [Ngày bắt đầu] → [Ngày bàn giao]

## 2. Bối cảnh & Mục tiêu kinh doanh (Business Need)
- Vấn đề hiện tại cần giải quyết: ...
- Lợi ích kỳ vọng (ROI / Payback / Giá trị chiến lược): ...

## 3. Mục tiêu SMART
1. [Cụ thể – Đo lường được – Khả thi – Liên quan – Có thời hạn]
2. ...

## 4. Phạm vi dự án (Scope)
### Deliverables (In-Scope — PHẢI bàn giao)
- [ ] Deliverable 1: ...
- [ ] Deliverable 2: ...

### Non-Goals (Out-of-Scope — KHÔNG làm trong dự án này)
- ❌ Không bao gồm ...
- ❌ Không bao gồm ...

## 5. Cột mốc sơ bộ & Ngân sách khung
| Cột mốc (Milestone) | Ngày dự kiến | Tiêu chí đạt |
|---|---|---|
| M1: Charter Approved (Gate 1) | ... | Sponsor ký duyệt |
| M2: Baseline Frozen (Gate 2) | ... | Chốt WBS, Gantt, Budget |
| M3: UAT Ready (Gate 3) | ... | Hoàn thành kiểm thử nội bộ |
| M4: Handover & Closure (Gate 4) | ... | Ký biên bản Abnahme |

- **Ngân sách khung:** [Số tiền] (bao gồm [X]% dự phòng rủi ro)

## 6. Thẩm quyền PM & Chữ ký phê duyệt
- PM được quyền phê duyệt điều chỉnh chi phí tối đa: [X]% / lịch trình tối đa: [Y] ngày.
- **Sponsor ký duyệt:** ___________________  Ngày: ___/___/2026
- **Project Manager:** ___________________  Ngày: ___/___/2026`
    },
    {
      id: 'tpl-stakeholder',
      phase: 'Pha 01 · Initiation',
      name: 'Stakeholder Register & Power–Interest Plan',
      desc: 'Bảng phân tích các bên liên quan theo Quyền lực, Mức độ quan tâm, Thái độ và kế hoạch hành động quản trị.',
      markdown: `# STAKEHOLDER REGISTER & CHIẾN LƯỢC QUẢN TRỊ

| ID | Tên / Nhóm Stakeholder | Vai trò | Quyền lực (1–5) | Quan tâm (1–5) | Thái độ | Nhóm Ma trận | Chiến lược hành động & Tần suất |
|---|---|---|---|---|---|---|---|
| S01 | Giám đốc Kinh doanh | Sponsor | 5 | 5 | Ủng hộ | Manage Closely | Họp 1-1 mỗi 2 tuần; phê duyệt Gate & CR lớn |
| S02 | Giám đốc Tài chính | Phê duyệt ngân sách | 5 | 2 | Trung lập | Keep Satisfied | Gửi báo cáo RAG & Budget Burn hàng tháng |
| S03 | Đại diện Người dùng cuối | Vận hành thực tế | 2 | 5 | Lo ngại | Keep Informed | Mời tham gia demo sớm & đào tạo UAT |
| S04 | Phòng Hành chính | Hỗ trợ gián tiếp | 1 | 2 | Trung lập | Monitor | Bản tin cập nhật chung hàng tháng |`
    },
    {
      id: 'tpl-raci-comm',
      phase: 'Pha 02 · Planning',
      name: 'RACI Matrix & Communication Plan',
      desc: 'Phân định rõ trách nhiệm cho từng Work Package (duy nhất 1 Accountable) kết hợp lịch họp & báo cáo xuyên suốt dự án.',
      markdown: `# RACI MATRIX & COMMUNICATION PLAN

## 1. Ma trận trách nhiệm RACI (R: Thực thi | A: Chịu trách nhiệm cuối - Duy nhất 1 | C: Tham vấn | I: Thông báo)
| Work Package | Sponsor | Project Manager | BA / PO | Tech Lead | QA Lead | Ops / User |
|---|---|---|---|---|---|---|
| WP 1.1 Project Charter | A | R | C | C | I | I |
| WP 1.2 Đặc tả yêu cầu & UX | I | A | R | C | C | C |
| WP 1.3 Phát triển & Tích hợp | I | A | C | R | I | I |
| WP 1.4 UAT & Nghiệm thu | A | C | C | C | R | R |

## 2. Kế hoạch Giao tiếp (Communication Matrix)
| Hạng mục giao tiếp | Mục đích | Đối tượng | Tần suất | Kênh | Người phụ trách |
|---|---|---|---|---|---|
| Daily / Sync Team | Đồng bộ công việc & gỡ vướng | Đội dự án | Hàng ngày / 2 lần tuần | Stand-up / Online | PM / Scrum Master |
| Weekly Status Report (RAG) | Theo dõi tiến độ, rủi ro, hành động | Sponsor, Core Team | Hàng tuần | Email + Dashboard | Project Manager |
| Steering Committee Review | Quyết định Gate, xử lý leo thang RED | Ban chỉ đạo | Hàng tháng / Tại Gate | Họp trực tiếp + Slide | Project Manager |`
    },
    {
      id: 'tpl-risk',
      phase: 'Pha 02 · Planning',
      name: 'Risk Register (Sổ đăng ký Rủi ro)',
      desc: 'Theo dõi rủi ro từ nhận diện, chấm điểm P × I, chiến lược ứng phó (Avoid/Mitigate/Transfer/Accept) đến người phụ trách.',
      markdown: `# RISK REGISTER (SỔ ĐĂNG KÝ RỦI RO DỰ ÁN)

**Thang chấm điểm:** Xác suất P (1–5) × Tác động I (1–5) = Risk Score (1–6: Xanh | 8–12: Vàng | 15–25: Đỏ)

| Mã | Mô tả rủi ro (Nguyên nhân → Sự kiện → Hệ quả) | P | I | Score | Chiến lược | Hành động phòng ngừa / Dự phòng | Risk Owner | Trạng thái |
|---|---|---|---|---|---|---|---|---|
| R01 | Tài liệu API hệ thống cũ thiếu → Tích hợp chậm → Trễ đường găng 3 tuần | 4 | 5 | 20 (Đỏ) | Mitigate | Chạy Technical Spike tuần 4; thuê chuyên gia hỗ trợ | Tech Lead | Đang xử lý |
| R02 | Nhân sự chủ chốt nghỉ việc giữa chừng → Mất tri thức thiết kế | 2 | 4 | 8 (Vàng) | Mitigate | Pair-review & tài liệu hóa kiến trúc trên Wiki chung | PM | Theo dõi |
| R03 | Đối tác phần cứng giao thiết bị chậm do hải quan | 3 | 4 | 12 (Vàng) | Transfer | Gắn điều khoản phạt trễ hạn trong hợp đồng & đặt sớm 2 tuần | Procurement | Đang xử lý |`
    },
    {
      id: 'tpl-change',
      phase: 'Pha 03 · Execution & Controlling',
      name: 'Change Request Form (Phiếu Yêu cầu Thay đổi)',
      desc: 'Kiểm soát chặt Scope Creep: đánh giá đầy đủ tác động lên Phạm vi – Tiến độ – Chi phí trước khi CCB phê duyệt.',
      markdown: `# CHANGE REQUEST FORM (PHIẾU YÊU CẦU THAY ĐỔI)

- **Mã CR:** CR-___  |  **Ngày đề xuất:** ___/___/2026
- **Người đề xuất:** [Họ tên / Phòng ban]
- **Mô tả thay đổi & Lý do kinh doanh:** ...

## Đánh giá tác động (Impact Analysis — PM & Tech Lead điền)
- **Tác động Phạm vi (Scope):** [Thêm/bớt Work Package nào?]
- **Tác động Tiến độ (Schedule):** [Có chạm Đường găng không? Trễ thêm bao nhiêu ngày?]
- **Tác động Chi phí (Cost):** [+ / - bao nhiêu VNĐ? Có vượt trần ngân sách không?]
- **Tác động Chất lượng & Rủi ro:** [...]

## Quyết định của Ban Kiểm soát Thay đổi (CCB / Sponsor)
- [ ] **APPROVED** (Phê duyệt — Cập nhật Baseline ngay)
- [ ] **DEFERRED** (Chấp nhận ý tưởng nhưng đẩy sang Phase 2 để giữ mốc Go-Live)
- [ ] **REJECTED** (Từ chối — Ghi rõ lý do: ...)

**Chữ ký Sponsor / CCB:** ___________________  Ngày: ___/___/2026`
    },
    {
      id: 'tpl-handover',
      phase: 'Pha 04 · Handover & Closure',
      name: 'Acceptance Protocol & Closure Checklist (Abnahme)',
      desc: 'Bộ kiểm tra toàn diện để nghiệm thu chính thức (Abnahme), bàn giao vận hành, xử lý Punch List và đóng dự án trọn vẹn (Gate 4).',
      markdown: `# ACCEPTANCE PROTOCOL & PROJECT CLOSURE CHECKLIST (GATE 4)

## 1. Biên bản Nghiệm thu Chính thức (Formal Acceptance / Abnahme)
- **Dự án:** [Tên dự án]  |  **Ngày nghiệm thu:** ___/___/2026
- **Kết quả kiểm thử UAT:** [Số kịch bản Đạt / Tổng số kịch bản]
- **Trạng thái nghiệm thu:**
  - [ ] Nghiệm thu hoàn toàn (Unconditional Acceptance)
  - [ ] Nghiệm thu có điều kiện kèm Punch List dưới đây

### Phụ lục Punch List (Danh mục tồn đọng nhỏ không chặn vận hành)
| # | Mô tả tồn đọng | Mức độ | Người phụ trách | Hạn hoàn tất |
|---|---|---|---|---|
| 1 | ... | Minor | ... | ___/___/2026 |

## 2. Checklist Chuyển giao Vận hành & Đóng dự án
- [ ] **Tài liệu bàn giao:** Tài liệu kỹ thuật, Hướng dẫn sử dụng (User Manual), Runbook sự cố đã giao cho đội Ops.
- [ ] **Đào tạo:** Đã hoàn tất đào tạo người dùng cuối và quản trị viên hệ thống.
- [ ] **Hypercare:** Đã thống nhất lịch trực hỗ trợ sau Go-Live ([X] tuần) và kênh bàn giao Helpdesk.
- [ ] **Tài chính & Hợp đồng:** Đã thanh lý hợp đồng nhà cung cấp, đối chiếu ngân sách thực tế vs. Baseline.
- [ ] **Lessons Learned:** Đã tổ chức buổi tổng kết Blameless và lưu báo cáo bài học vào kho PMO.
- [ ] **Nhân sự:** Đã gửi thư xác nhận giải phóng nhân sự về phòng ban & tổ chức ghi nhận đội nhóm.

**Đại diện Khách hàng / Sponsor:** _______________  **Đội Vận hành tiếp nhận:** _______________  **Project Manager:** _______________`
    },
    {
      id: 'tpl-projectworthiness',
      phase: 'Pha 00 · Pre-Initiation',
      name: 'Projectworthiness & A/B/C Scorecard',
      desc: 'Bảng chấm điểm chuẩn Đức (Projektwürdigkeit) giúp quyết định việc này chỉ là Tác vụ thường hay Dự án loại C / B / A.',
      markdown: `# PROJECTWORTHINESS & PHÂN LOẠI DỰ ÁN A / B / C (CHUẨN DECHANGE)

Chấm điểm từng tiêu chí từ **1 (Thấp)** đến **3 (Cao)** rồi nhân với trọng số:

| Tiêu chí đánh giá | Trọng số | Điểm (1–3) | Điểm quy đổi | Gợi ý chấm điểm |
|---|---|---|---|---|
| 1. Quy mô ngân sách đầu tư | 25% | [ ] | | 1: <200tr · 2: 200tr–2tỷ · 3: >2tỷ |
| 2. Độ mới & Tính phức tạp kỹ thuật | 25% | [ ] | | 1: Quen thuộc · 2: Có phần mới · 3: Chưa từng làm |
| 3. Số phòng ban / Đối tác tham gia | 20% | [ ] | | 1: 1 phòng · 2: 2–3 phòng · 3: ≥4 phòng / đối tác ngoài |
| 4. Mức độ rủi ro & Ràng buộc pháp lý | 20% | [ ] | | 1: Thấp · 2: Trung bình · 3: Cao / Luật định |
| 5. Tầm quan trọng chiến lược | 10% | [ ] | | 1: Tác nghiệp · 2: Phòng ban · 3: Cấp công ty |
| **TỔNG ĐIỂM** | **100%** | | **[___]** | |

## Quy tắc phân loại & Độ dày quy trình áp dụng
- **1.0 – 1.4 điểm → Tác vụ thường (Line Task):** Không lập dự án, giao thẳng phòng chuyên môn làm.
- **1.5 – 1.9 điểm → Dự án loại C (Nhỏ):** Mini-Charter 1 trang + Bảng đầu việc + Biên bản bàn giao ngắn.
- **2.0 – 2.5 điểm → Dự án loại B (Trung bình):** Đầy đủ Charter, WBS, Gantt, Risk Register, Status Report & Abnahme.
- **2.6 – 3.0 điểm → Dự án loại A (Chiến lược):** Quản trị toàn diện, bắt buộc có Steering Committee, EVM/MTA & kiểm soát chặt 4 Gate.`
    },
    {
      id: 'tpl-wp-spec',
      phase: 'Pha 02 · Planning',
      name: 'Work Package Specification (Đặc tả Gói công việc)',
      desc: 'Phiếu giao việc chi tiết cho từng lá của cây WBS — đảm bảo không mơ hồ đầu vào, đầu ra, chi phí và tiêu chí hoàn thành.',
      markdown: `# WORK PACKAGE SPECIFICATION (ĐẶC TẢ GÓI CÔNG VIỆC)

- **Mã WBS:** WP 1.3.2  |  **Tên gói công việc:** [Ví dụ: Tích hợp API Đồng bộ Tồn kho ERP]
- **Người chịu trách nhiệm duy nhất (Accountable / WP Owner):** [Họ tên]
- **Thời gian kế hoạch:** [Từ ngày ... đến ngày ... | Thời lượng: ... ngày]
- **Trên Đường găng?** [ ] Có (Float = 0)   [ ] Không (Total Float = ___ ngày)
- **Ngân sách dự toán:** [Số giờ công & chi phí]

## 1. Điều kiện đầu vào (Inputs / Prerequisites)
- [ ] Gói tiền nhiệm [WP 1.2.2] đã được ký chốt.
- [ ] Môi trường test / tài liệu API đối tác đã sẵn sàng.

## 2. Nội dung công việc cần thực hiện (Scope of WP)
1. ...
2. ...

## 3. Kết quả bàn giao & Tiêu chí Nghiệm thu (Deliverables & Acceptance Criteria)
- **Deliverable:** [...]
- **Tiêu chí đạt (Definition of Done / Acceptance Criteria):**
  - [ ] Đồng bộ thành công 100% đơn hàng mẫu không lỗi sai lệch tồn kho.
  - [ ] Thời gian phản hồi API < 1,5 giây với 100 truy cập đồng thời.
  - [ ] Đã cập nhật tài liệu kỹ thuật & vượt qua Peer Review.`
    },
    {
      id: 'tpl-rag-report',
      phase: 'Pha 03 · Controlling',
      name: 'Executive 1-Page RAG Status Report',
      desc: 'Mẫu báo cáo trạng thái đèn giao thông 1 trang gửi Sponsor & Ban chỉ đạo — cô đọng, định lượng EVM/MTA và có đề xuất quyết định.',
      markdown: `# EXECUTIVE PROJECT STATUS REPORT (1-PAGE RAG)

- **Dự án:** [Tên dự án]  |  **Kỳ báo cáo:** Tuần ___ / Tháng ___
- **Trạng thái tổng thể:** 🟢 GREEN  /  🟡 AMBER  /  🔴 RED *(chọn 1)*

## 1. Bảng sức khỏe 4 chiều (Traffic Light)
| Chiều kiểm soát | Trạng thái | Chỉ số chính (Soll-Ist / EVM / MTA) | Nhận xét ngắn |
|---|---|---|---|
| **Tiến độ (Schedule)** | 🟡 AMBER | SPI = 0.91 · M3 dự kiến trễ 1 tuần | Đang chạy Fast-tracking bù lại |
| **Chi phí (Cost)** | 🟢 GREEN | CPI = 1.02 · Đã chi 48% / 50% KH | Trong tầm kiểm soát |
| **Phạm vi (Scope)** | 🟢 GREEN | 0 Scope Creep · 2 CR chờ duyệt | Đang xử lý theo CCB |
| **Rủi ro (Risks)** | 🔴 RED | R01 (API đối tác) kích hoạt | Cần quyết định Ban chỉ đạo bên dưới |

## 2. Hoàn thành kỳ này & Trọng tâm kỳ tới
- **Đã xong:** (1)... (2)...
- **Kế hoạch 2 tuần tới:** (1)... (2)...

## 3. Vấn đề cần Ban chỉ đạo quyết định ngay (Escalations)
- **Vấn đề:** [...]
- **Phương án 1 (PM khuyến nghị):** [...] — *Chi phí / Tác động:* [...]
- **Phương án 2:** [...] — *Chi phí / Tác động:* [...]`
    },
    {
      id: 'tpl-lessons',
      phase: 'Pha 04 · Closure',
      name: 'Final Project Report & Lessons Learned',
      desc: 'Báo cáo tổng kết cuối dự án (so sánh Kế hoạch gốc vs. Thực tế) và bảng đóng gói tri thức Blameless lưu kho PMO.',
      markdown: `# FINAL PROJECT REPORT & LESSONS LEARNED

## 1. Tổng kết Kế hoạch gốc (Baseline) vs. Thực tế (Actual)
| Hạng mục | Kế hoạch gốc (Gate 2) | Thực tế bàn giao (Gate 4) | Chênh lệch & Nguyên nhân |
|---|---|---|---|
| **Thời gian bàn giao** | Tuần 26 | Tuần 26 | Đúng hạn (0 tuần) |
| **Tổng chi phí** | 2,40 tỷ VNĐ | 2,34 tỷ VNĐ | Tiết kiệm 60tr (-2,5%) |
| **Mục tiêu chất lượng / KPI** | Xử lý đơn < 15 phút | Đạt 9 phút | Vượt mục tiêu đề ra |

## 2. Bảng Đúc kết Bài học Kinh nghiệm (Blameless Lessons Learned)
| Pha vòng đời | Điều đã làm TỐT (Keep / Nhân rộng) | Điều gặp VƯỚNG MẮC (Problem) | Khuyến nghị cụ thể cho dự án sau (Actionable Rule) |
|---|---|---|---|
| **Initiation** | Viết rõ Non-Goals trong Charter | Stakeholder nhóm User ban đầu lo ngại | Luôn mời đại diện User tham gia từ tuần 2 |
| **Planning** | Chạy Technical Spike sớm cho API cũ | Ước lượng thời gian test tải hơi sát | Cộng thêm 20% đệm cho khâu kiểm thử tích hợp |
| **Execution** | Báo cáo RAG trung thực, CCB chặn CR-04 | Giao tiếp giữa 2 nhóm ban đầu lệch nhịp | Thiết lập lịch Sync Point cố định 2 tuần/lần |
| **Closure** | Cơ chế Punch List giúp ký Abnahme đúng hạn | Tài liệu hướng dẫn viết hơi muộn | Viết User Manual song song ngay từ pha UAT |`
    }
  ];
})();
