/* ==========================================================================
   Interactive Lifecycle Explorer & IPO Matrix Data
   Covers 4 Core Phases + Phase Gates across Traditional / Agile / Hybrid
   ========================================================================== */
(function () {
  window.PMApp.data.lifecycle = {
    modes: {
      traditional: {
        label: 'Traditional (Plan-driven)',
        badge: 'pill-trad',
        summary: 'Lập kế hoạch chi tiết từ đầu (Upfront Planning), cố định Phạm vi (Scope), kiểm soát chặt chẽ qua các mốc Milestone, Baseline và cổng chuyển pha Stage-Gate.',
        phases: [
          {
            id: 'initiation',
            num: 'Pha 01',
            name: 'Initiation (Khởi tạo)',
            gate: 'Gate 1: Charter Approval',
            goal: 'Xác thực ý tưởng có đáng làm dự án (Projectworthiness), chốt mục tiêu, phạm vi/ngoài phạm vi, phân tích Stakeholder và chính thức trao quyền cho PM.',
            inputs: [
              'Đề xuất ý tưởng / Yêu cầu nghiệp vụ (Business Need)',
              'Chiến lược doanh nghiệp & nguồn lực sẵn có',
              'Nghiên cứu tiền khả thi & giả định ban đầu'
            ],
            activities: [
              'Đánh giá tính đáng làm dự án (Projectworthiness) & phân loại A/B/C',
              'Lập Business Case (ROI, Payback, Scoring Model)',
              'Xác định mục tiêu SMART, Deliverables & Non-Goals',
              'Phân tích môi trường & Ma trận Stakeholder (Power–Interest)',
              'Soạn thảo Project Charter & tổ chức Kick-off Meeting'
            ],
            deliverables: [
              'Project Appraisal / Business Case',
              'Project Charter (Projektauftrag) đã ký duyệt',
              'Stakeholder Register & Ma trận Power–Interest',
              'Biên bản Kick-off Meeting'
            ],
            gateCriteria: [
              'Business Case chứng minh tính khả thi kinh tế & kỹ thuật',
              'Deliverables và Non-Goals không mơ hồ, Sponsor đã ký Charter',
              'PM được bổ nhiệm chính thức với thẩm quyền rõ ràng'
            ],
            moduleRef: 'm1'
          },
          {
            id: 'planning',
            num: 'Pha 02',
            name: 'Planning (Lập kế hoạch)',
            gate: 'Gate 2: Baseline Freeze',
            goal: 'Biến tuyên ngôn dự án thành bản kế hoạch thi công chi tiết (WBS, Tiến độ đường găng, Ngân sách, Nguồn lực, Chất lượng, Giao tiếp & Rủi ro) làm chuẩn gốc để đo lường.',
            inputs: [
              'Project Charter đã phê duyệt',
              'Stakeholder Register & mục tiêu SMART',
              'Định mức chi phí, lịch nguồn lực & bài học dự án cũ'
            ],
            activities: [
              'Phân rã công việc WBS (Projektstrukturplan) theo nguyên tắc 100%',
              'Đặc tả Work Packages & phân công trách nhiệm RACI',
              'Lập mạng công việc CPM (ES/EF/LS/LF, Float), tìm Đường găng & Gantt Chart',
              'Ước lượng chi phí (Bottom-up/Top-down) & cân đối nguồn lực (Leveling)',
              'Lập Quality Plan (Acceptance Criteria), Communication Plan, Procurement & Risk Register'
            ],
            deliverables: [
              'WBS + Work Package Specifications',
              'Schedule Baseline (Gantt, CPM, Milestones)',
              'Cost Baseline & Resource Histogram',
              'Risk Register, Quality Plan & Communication Matrix'
            ],
            gateCriteria: [
              'Tổng công việc WBS phủ 100% Deliverables trong Charter',
              'Đường găng, ngân sách và nguồn lực khả thi, đã cân đối tải',
              'Steering Committee ký chốt Scope–Schedule–Cost Baseline'
            ],
            moduleRef: 'm2'
          },
          {
            id: 'execution',
            num: 'Pha 03',
            name: 'Execution & Controlling',
            gate: 'Gate 3: Acceptance Readiness',
            goal: 'Tổ chức triển khai các Work Packages để tạo ra sản phẩm, đồng thời liên tục đối chiếu Kế hoạch–Thực tế (Soll-Ist), kiểm soát thay đổi và kéo dự án về đúng quỹ đạo.',
            inputs: [
              'Bộ Baseline đã chốt (Scope, Schedule, Cost, Quality)',
              'Work Package Specifications & Risk Register',
              'Dữ liệu tiến độ, chi phí thực tế (Actuals) & Change Requests'
            ],
            activities: [
              'Phân giao gói công việc, điều phối nhóm và thực hiện QA/QC',
              'Đo lường Soll-Ist: Milestone Trend Analysis (MTA) & Earned Value (EVM)',
              'Báo cáo trạng thái đèn giao thông (RAG: Red–Amber–Green)',
              'Đánh giá tác động Change Request & trình CCB phê duyệt',
              'Kích hoạt phương án ứng phó rủi ro & hành động khắc phục (Corrective Actions)'
            ],
            deliverables: [
              'Sản phẩm / Deliverables hoàn thiện theo đặc tả',
              'Báo cáo trạng thái định kỳ (RAG, MTA, EVM)',
              'Change Log & Baseline cập nhật (nếu được duyệt)',
              'Biên bản kiểm thử nội bộ (QC / System Test)'
            ],
            gateCriteria: [
              '100% Work Packages cốt lõi hoàn thành & vượt qua QC nội bộ',
              'Không còn lỗi nghiêm trọng (Critical/Blocker defects)',
              'Tài liệu bàn giao và kịch bản UAT đã sẵn sàng cho khách hàng'
            ],
            moduleRef: 'm3'
          },
          {
            id: 'closure',
            num: 'Pha 04',
            name: 'Handover & Closure (Bàn giao)',
            gate: 'Gate 4: Formal Closure',
            goal: 'Nghiệm thu chính thức sản phẩm (Abnahme), chuyển giao trọn vẹn sang đội vận hành, tổng kết tài chính, đúc kết Lessons Learned và giải tán tổ chức dự án có trật tự.',
            inputs: [
              'Sản phẩm đã vượt qua kiểm thử nội bộ',
              'Tiêu chí nghiệm thu (Acceptance Criteria) từ pha Planning',
              'Hồ sơ dự án, dữ liệu chi phí cuối kỳ & nhật ký rủi ro/thay đổi'
            ],
            activities: [
              'Tổ chức UAT & Nghiệm thu chính thức (Formal Acceptance / Abnahme)',
              'Ghi nhận và xử lý danh mục tồn đọng (Punch List)',
              'Chuyển giao vận hành (Handover to Ops), đào tạo người dùng & thiết lập Hypercare',
              'Tổ chức hội thảo Lessons Learned & lập Final Project Report',
              'Thanh lý hợp đồng, quyết toán tài chính, lưu trữ hồ sơ & giải phóng nguồn lực'
            ],
            deliverables: [
              'Biên bản nghiệm thu chính thức (Acceptance Protocol)',
              'Gói tài liệu vận hành & Kế hoạch Hypercare',
              'Final Project Report & Tài liệu Lessons Learned',
              'Xác nhận giải phóng nhân sự & đóng mã chi phí dự án'
            ],
            gateCriteria: [
              'Sponsor / Khách hàng ký Biên bản nghiệm thu (Abnahme)',
              'Đội vận hành chính thức tiếp nhận hệ thống & tài liệu',
              'Hồ sơ dự án, tài chính và Lessons Learned đã được lưu trữ chuẩn PMO'
            ],
            moduleRef: 'm3'
          }
        ]
      },
      agile: {
        label: 'Agile (Value-driven)',
        badge: 'pill-agile',
        summary: 'Cố định Thời gian & Chi phí (Timebox & Team ổn định), linh hoạt Phạm vi theo giá trị kinh doanh. Bàn giao tăng trưởng từng phần (Increment) sau mỗi Sprint ngắn 1–4 tuần.',
        phases: [
          {
            id: 'initiation',
            num: 'Pha 01',
            name: 'Product Vision & Envisioning',
            gate: 'Gate 1: Vision & Funding',
            goal: 'Thống nhất tầm nhìn sản phẩm (Product Vision), chân dung người dùng, ngân sách theo năng lực đội ngũ và thiết lập Product Backlog ban đầu.',
            inputs: [
              'Vấn đề khách hàng & cơ hội thị trường',
              'Định hướng sản phẩm (Product Strategy)',
              'Ngân sách tài trợ (Funding Horizon)'
            ],
            activities: [
              'Xây dựng Product Vision Board & mục tiêu giá trị (Outcomes)',
              'Xác định vai trò: Product Owner, Scrum Master, Developers',
              'Thu thập Epic / User Stories ban đầu (Story Mapping)',
              'Thống nhất Definition of Ready (DoR) & Definition of Done (DoD)'
            ],
            deliverables: [
              'Product Vision & High-level Product Roadmap',
              'Initial Product Backlog (đã sắp xếp ưu tiên theo giá trị)',
              'Working Agreement & Definition of Done (DoD)'
            ],
            gateCriteria: [
              'Product Owner nắm toàn quyền ưu tiên Backlog',
              'Đội ngũ liên chức năng (Cross-functional) đã được phân bổ',
              'Đủ User Stories rõ ràng cho 1–2 Sprint đầu tiên'
            ],
            moduleRef: 'm4'
          },
          {
            id: 'planning',
            num: 'Pha 02',
            name: 'Adaptive Release & Sprint Planning',
            gate: 'Sprint Goal Commitment',
            goal: 'Thay vì lập kế hoạch chi tiết cả năm, Agile lập kế hoạch cuốn chiếu (Rolling-wave): Release Plan ở tầm cao và Sprint Planning chi tiết ngay trước từng vòng lặp.',
            inputs: [
              'Product Backlog đã tinh chỉnh (Refined Backlog)',
              'Năng lực nhóm (Capacity) & vận tốc lịch sử (Velocity)',
              'Phản hồi từ Sprint Review trước đó'
            ],
            activities: [
              'Backlog Refinement: chia nhỏ Story, viết Acceptance Criteria',
              'Ước lượng tương đối bằng Story Points / Planning Poker',
              'Sprint Planning: chốt Sprint Goal & chọn hạng mục vào Sprint Backlog',
              'Thiết lập giới hạn WIP (nếu dùng Kanban / Scrumban)'
            ],
            deliverables: [
              'Release Plan / Roadmap cập nhật',
              'Sprint Goal & Sprint Backlog cụ thể cho 1–4 tuần',
              'Task Board (To Do / Doing / Done)'
            ],
            gateCriteria: [
              'Cả đội thống nhất Sprint Goal mang lại giá trị đo lường được',
              'Các Story được chọn đạt Definition of Ready (DoR)',
              'Khối lượng công việc phù hợp với Capacity thực tế của Sprint'
            ],
            moduleRef: 'm4'
          },
          {
            id: 'execution',
            num: 'Pha 03',
            name: 'Iterative Sprints & Inspection',
            gate: 'Sprint Review (Increment Demo)',
            goal: 'Xây dựng, kiểm thử và tích hợp liên tục trong từng Sprint để cuối mỗi vòng lặp đều có một Product Increment đạt chuẩn "Done" có thể phát hành.',
            inputs: [
              'Sprint Backlog & Sprint Goal',
              'Definition of Done (DoD)',
              'Biểu đồ tiến độ (Burndown / Burnup / CFD)'
            ],
            activities: [
              'Daily Scrum (15 phút) đồng bộ kế hoạch & tháo gỡ trở ngại (Impediments)',
              'Phát triển, kiểm thử tự động & tích hợp liên tục',
              'Sprint Review: Demo Increment thật cho Stakeholders lấy phản hồi tức thì',
              'Sprint Retrospective: cải tiến quy trình & cách làm việc của đội'
            ],
            deliverables: [
              'Potentially Shippable Product Increment sau mỗi Sprint',
              'Product Backlog cập nhật theo phản hồi thực tế',
              'Danh sách hành động cải tiến từ Retrospective'
            ],
            gateCriteria: [
              'Mọi hạng mục hoàn tất đều thỏa mãn 100% Definition of Done',
              'Stakeholders đã nghiệm thu trực tiếp sản phẩm chạy thật tại Sprint Review',
              'Phản hồi mới đã được đưa trở lại Product Backlog'
            ],
            moduleRef: 'm4'
          },
          {
            id: 'closure',
            num: 'Pha 04',
            name: 'Release, Value Realization & Transition',
            gate: 'Product Release / Sunset',
            goal: 'Phát hành phiên bản hoàn chỉnh (hoặc đóng giai đoạn đầu tư khi giá trị biên không còn vượt chi phí), bàn giao vận hành và lưu giữ tri thức sản phẩm.',
            inputs: [
              'Các Product Increments đã qua kiểm thử và phát hành',
              'Chỉ số đo lường giá trị người dùng (KPIs, Adoption, NPS)',
              'Nhật ký cải tiến từ các buổi Retrospective'
            ],
            activities: [
              'Kiểm tra độ sẵn sàng phát hành (Release Readiness & Security/Ops)',
              'Chuyển giao sang đội vận hành/DevOps hoặc duy trì Product Team nhỏ',
              'Tổng kết giá trị kinh doanh đạt được (Outcome Review)',
              'Final Retrospective (tương đương Lessons Learned) & giải phóng nguồn lực'
            ],
            deliverables: [
              'Sản phẩm vận hành ổn định trên Production',
              'Release Notes, Runbook vận hành & báo cáo Outcome',
              'Tài liệu tổng hợp bài học cải tiến'
            ],
            gateCriteria: [
              'Mục tiêu giá trị kinh doanh (Product Goal) đã đạt hoặc hết ngân sách tài trợ',
              'Hệ thống vận hành ổn định, có đội ngũ hỗ trợ sau phát hành',
              'Tri thức sản phẩm và kiến trúc được bàn giao đầy đủ'
            ],
            moduleRef: 'm4'
          }
        ]
      },
      hybrid: {
        label: 'Hybrid (Dechange Spectrum)',
        badge: 'pill-hybrid',
        summary: 'Kết hợp kỷ luật quản trị, ngân sách & cổng Stage-Gate của Traditional ở tầng điều hành với tốc độ lặp, phản hồi nhanh của Agile ở tầng phát triển (ví dụ: Water-Scrum-Fall).',
        phases: [
          {
            id: 'initiation',
            num: 'Pha 01',
            name: 'Structured Initiation + Vision',
            gate: 'Gate 1: Hybrid Charter',
            goal: 'Giữ chặt khung khởi tạo chuẩn (Business Case, Ngân sách trần, Stakeholder, Hợp đồng) như Traditional nhưng xác định phạm vi dạng High-level Epics/Outcomes để tạo độ mở cho phát triển Agile.',
            inputs: [
              'Yêu cầu kinh doanh & khung ngân sách doanh nghiệp',
              'Đánh giá độ bất định trên Stacey Matrix',
              'Yêu cầu tuân thủ, pháp lý & văn hóa tổ chức'
            ],
            activities: [
              'Đánh giá Projectworthiness & chọn 1 trong 5 hình thái Hybrid của Dechange',
              'Lập Project Charter chốt trần ngân sách, mốc chiến lược & kiến trúc lõi',
              'Thiết lập Product Vision & Epic Backlog cấp cao (chưa khóa chi tiết từng tính năng)',
              'Phân định rõ vai trò: Project Manager (Governance) vs. Product Owner (Value)'
            ],
            deliverables: [
              'Hybrid Project Charter (kèm lựa chọn mô hình Hybrid)',
              'Stakeholder Matrix & Cơ chế quản trị (Governance Model)',
              'High-level Product Vision & Initial Epic Map'
            ],
            gateCriteria: [
              'Steering Committee phê duyệt Charter, ngân sách trần và mô hình Hybrid',
              'Ranh giới quyền hạn giữa PM, PO và Scrum Master được thống nhất',
              'Các ràng buộc cứng (pháp lý, hạ tầng, mốc go-live) được ghi rõ'
            ],
            moduleRef: 'm5'
          },
          {
            id: 'planning',
            num: 'Pha 02',
            name: 'Dual-Layer Planning (Macro + Micro)',
            gate: 'Gate 2: Release & Architecture Plan',
            goal: 'Lập kế hoạch 2 tầng: Tầng Macro (Traditional) quản lý các mốc đồng bộ hóa (Sync Milestones), ngân sách, mua sắm và rủi ro; Tầng Micro (Agile) quy hoạch Release & Sprint.',
            inputs: [
              'Hybrid Charter & Epic Map',
              'Ràng buộc tích hợp phần cứng/hạ tầng/đối tác bên ngoài',
              'Năng lực các đội phát triển (Scrum Teams & Traditional Streams)'
            ],
            activities: [
              'Lập Macro Plan: WBS cấp cao, Master Milestone Plan & Synchronization Points',
              'Thiết lập Budget Guardrails, Risk Register & hợp đồng (Agile Fixed Price / T&M)',
              'Lập Micro Plan: Release Roadmap & tinh chỉnh Backlog cho 2–3 Sprint đầu',
              'Thống nhất quy tắc đồng bộ giữa luồng Traditional (hạ tầng/pháp lý) và luồng Agile (phần mềm)'
            ],
            deliverables: [
              'Master Milestone & Synchronization Plan',
              'Release Roadmap + Refined Backlog cho đợt đầu',
              'Risk Register, Cost Guardrails & Governance Cadence'
            ],
            gateCriteria: [
              'Các điểm đồng bộ (Sync Points) giữa luồng Waterfall và luồng Sprint khớp nhau',
              'Ngân sách và các phụ thuộc bên ngoài đã được khóa rủi ro',
              'Đội Agile sẵn sàng bước vào Sprint 1 với kiến trúc lõi ổn định'
            ],
            moduleRef: 'm5'
          },
          {
            id: 'execution',
            num: 'Pha 03',
            name: 'Agile Sprints inside Stage-Gate Control',
            gate: 'Gate 3: Integration & UAT Ready',
            goal: 'Đội phát triển chạy các Sprint ngắn (Scrum/Kanban) để nhanh chóng thích nghi yêu cầu, trong khi PM theo dõi sức khỏe tổng thể qua MTA, Burnup, Budget Tracking và báo cáo Ban chỉ đạo.',
            inputs: [
              'Release Plan, Sprint Backlogs & Master Milestones',
              'Dữ liệu Velocity/Burnup (Agile) + Chi phí thực tế/MTA (Traditional)',
              'Yêu cầu thay đổi từ Sprint Review & Steering Committee'
            ],
            activities: [
              'Chạy các vòng lặp Sprint (Daily, Review, Retro) tạo Increment liên tục',
              'Tích hợp kết quả Agile với các luồng Traditional tại Synchronization Points',
              'PM quy đổi tiến độ Agile sang báo cáo RAG / MTA / Budget Burn cho Ban chỉ đạo',
              'Quản lý thay đổi linh hoạt trong Backlog; chỉ trình CCB khi vượt ngân sách/mốc cứng'
            ],
            deliverables: [
              'Product Increments đã tích hợp định kỳ',
              'Hybrid Status Report (RAG + Burnup + Budget vs. Actual)',
              'Bản cập nhật Risk Register & Dependency Log'
            ],
            gateCriteria: [
              'Toàn bộ tính năng bắt buộc (Must-have / MVP+) đã hoàn thành và đạt DoD',
              'Tích hợp đầu-cuối (End-to-End Integration) với hệ thống liên quan vượt qua kiểm thử',
              'Sẵn sàng bước vào giai đoạn nghiệm thu chính thức & đào tạo quy mô lớn'
            ],
            moduleRef: 'm5'
          },
          {
            id: 'closure',
            num: 'Pha 04',
            name: 'Formal Handover + Agile Retrospective',
            gate: 'Gate 4: Formal Acceptance & Closure',
            goal: 'Kết hợp sự chặt chẽ pháp lý của Traditional (Nghiệm thu Abnahme, Quyết toán, Bàn giao vận hành) với văn hóa học hỏi liên tục của Agile (Final Retrospective).',
            inputs: [
              'Phiên bản tích hợp hoàn chỉnh & tiêu chí nghiệm thu',
              'Dữ liệu KPI sản phẩm từ các đợt phát hành thử/pilot',
              'Nhật ký Sprint Retrospectives & báo cáo chi phí cuối cùng'
            ],
            activities: [
              'Thực hiện UAT tổng thể & ký Biên bản nghiệm thu chính thức (Abnahme)',
              'Triển khai Go-Live, đào tạo người dùng & chuyển giao sang đội Ops/Hypercare',
              'Kết hợp Final Retrospective (đội dự án) + Lessons Learned Report (cấp tổ chức)',
              'Đóng hợp đồng, quyết toán ngân sách và bàn giao Backlog cải tiến giai đoạn 2'
            ],
            deliverables: [
              'Acceptance Protocol (Biên bản nghiệm thu chính thức)',
              'Gói bàn giao vận hành, tài liệu & Backlog cho Phase 2',
              'Final Project Report & Hybrid Lessons Learned'
            ],
            gateCriteria: [
              'Khách hàng/Sponsor ký nghiệm thu và chấp nhận chuyển giao vận hành',
              'Đạt mục tiêu giá trị (Outcome) trong khung ngân sách/mốc đã cam kết',
              'Cả bài học kỹ thuật lẫn bài học phối hợp Hybrid được lưu trữ chuẩn PMO'
            ],
            moduleRef: 'm5'
          }
        ]
      }
    }
  };
})();
