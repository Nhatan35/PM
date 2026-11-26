/* ==========================================================================
   Expanded Scenario Quizzes (35 Questions: 5 per Module M0–M6)
   & 67 Bilingual Flashcards (EN - VI - DE/DIN)
   ========================================================================== */
(function () {
  window.PMApp.data.quizzes = {
    m0: [
      {
        q: 'Một phòng Kế toán thực hiện việc khóa sổ và lập báo cáo thuế hàng tháng theo đúng quy trình chuẩn. Theo tiêu chuẩn DIN 69901 và André Dechange, đây là gì?',
        options: [
          'Một dự án loại C vì lặp lại đều đặn hàng tháng.',
          'Công việc vận hành thường nhật (Line / Routine Operation), KHÔNG phải dự án vì thiếu tính duy nhất và không có điểm kết thúc riêng biệt.',
          'Một chương trình (Program) vì có nhiều bước nghiệp vụ.',
          'Một dự án Agile vì chạy theo chu kỳ 1 tháng.'
        ],
        answer: 1,
        explain: 'Dự án bắt buộc phải có tính duy nhất (Uniqueness), thời hạn bắt đầu–kết thúc rõ ràng và thường có tính liên phòng ban/bất định. Khóa sổ hàng tháng là Routine Operations.'
      },
      {
        q: 'Trong Tam giác ma thuật (Magic Triangle), sự khác biệt cốt lõi giữa cách tiếp cận Traditional và Agile là gì?',
        options: [
          'Traditional bỏ qua yếu tố Chất lượng, còn Agile bỏ qua Chi phí.',
          'Traditional cố định Phạm vi (Scope) và ước lượng Thời gian/Chi phí; Agile đảo ngược — cố định Thời gian & Chi phí (Timebox/Team) và linh hoạt Phạm vi theo giá trị.',
          'Cả hai đều cố định đồng thời cả Phạm vi, Thời gian và Chi phí.',
          'Agile chỉ quan tâm Thời gian, không quản lý Phạm vi.'
        ],
        answer: 1,
        explain: 'Dechange nhấn mạnh sự đảo ngược của Magic Triangle: Traditional plan-driven khóa Scope trước; Agile value-driven khóa Timebox & Team Capacity và liên tục sắp xếp lại Scope trong Backlog.'
      },
      {
        q: 'Tại một Cổng chuyển pha (Phase Gate / Stage-Gate), Ban chỉ đạo (Steering Committee) có thể đưa ra những quyết định nào?',
        options: [
          'Chỉ có 2 lựa chọn: Go hoặc Kill.',
          'Go, Conditional Go (đi tiếp có điều kiện), Hold (tạm dừng) hoặc Kill (hủy dự án).',
          'Chỉ PM mới có quyền quyết định mở Gate, Ban chỉ đạo không tham gia.',
          'Luôn luôn cho đi tiếp để không lãng phí công sức pha trước.'
        ],
        answer: 1,
        explain: 'Cơ chế Stage-Gate giúp cắt lỗ sớm hoặc buộc khắc phục lỗ hổng trước khi rót thêm tiền sang pha sau thông qua 4 quyết định: Go / Conditional Go / Hold / Kill.'
      },
      {
        q: 'Vì sao doanh nghiệp cần thực hiện bước "Projectworthiness Check" và phân loại dự án A / B / C trước khi khởi tạo?',
        options: [
          'Để xếp hạng thưởng Tết cho các Project Manager.',
          'Để đảm bảo độ dày quy trình quản trị tương xứng với quy mô & rủi ro — tránh quan liêu cho tác vụ nhỏ và tránh thiếu kiểm soát cho dự án lớn.',
          'Vì chỉ dự án loại A mới được phép có ngân sách.',
          'Để chuyển toàn bộ dự án loại C sang thuê ngoài.'
        ],
        answer: 1,
        explain: 'Dechange nhấn mạnh quy trình PM phải tương xứng độ phức tạp: việc nhỏ dưới ngưỡng không cần Charter, còn dự án loại A cần đầy đủ Steering Committee, EVM/MTA và 4 Gate.'
      },
      {
        q: 'Trong 3 mô hình cơ cấu tổ chức dự án, điểm yếu lớn nhất của mô hình Tổ chức Ma trận (Matrix Organization) là gì?',
        options: [
          'Không tận dụng được chuyên môn sâu từ các phòng ban.',
          'Nhân sự chịu sự quản lý song song ("2 sếp": PM và Line Manager), dễ xảy ra xung đột ưu tiên nguồn lực nếu thiếu quy chế rõ ràng.',
          'PM có quá nhiều quyền hành chính nên gây lãng phí.',
          'Chỉ áp dụng được cho doanh nghiệp dưới 20 nhân sự.'
        ],
        answer: 1,
        explain: 'Trong tổ chức Ma trận, PM lo "Cái gì & Khi nào" còn Line Manager lo "Ai & Như thế nào". Nếu không thỏa thuận ưu tiên rõ ràng, nhân sự rất dễ bị giằng xé giữa việc dự án và việc vận hành.'
      }
    ],
    m1: [
      {
        q: 'Tại sao André Dechange đặc biệt nhấn mạnh phải ghi rõ mục "Non-Goals (Out-of-Scope)" trong Project Charter?',
        options: [
          'Để làm bản Charter dài và trang trọng hơn.',
          'Để loại trừ trước những kỳ vọng ngầm của các bên liên quan, phòng chống trượt phạm vi (Scope Creep) về sau.',
          'Để giảm trách nhiệm pháp lý của đội lập trình.',
          'Vì chuẩn Scrum bắt buộc phải có Non-Goals.'
        ],
        answer: 1,
        explain: 'Non-Goals vạch rõ ranh giới những gì KHÔNG thuộc phạm vi dự án, giúp PM có cơ sở khách quan để từ chối hoặc chuyển sang Change Request khi Stakeholder đòi thêm tính năng.'
      },
      {
        q: 'Giám đốc Tài chính có quyền lực rất lớn đối với việc giải ngân nhưng ít quan tâm chi tiết kỹ thuật hàng ngày. Theo Ma trận Power–Interest, chiến lược phù hợp nhất là gì?',
        options: [
          'Manage Closely — mời dự họp kỹ thuật hàng ngày.',
          'Keep Satisfied — không làm phiền bằng tiểu tiết nhưng đảm bảo thỏa mãn các báo cáo tài chính và mốc Gate quan trọng.',
          'Keep Informed — gửi mọi email trao đổi kỹ thuật để họ đọc.',
          'Monitor — bỏ qua vì họ không quan tâm.'
        ],
        answer: 1,
        explain: 'Quyền lực Cao + Quan tâm Thấp nằm ở góc phần tư "Keep Satisfied": cung cấp thông tin súc tích đúng mối quan tâm của họ (ngân sách, ROI, mốc Gate) và tránh tạo bất ngờ xấu.'
      },
      {
        q: 'Điểm đánh dấu kết thúc chính thức Pha Initiation (Gate 1) là gì?',
        options: [
          'Hoàn thành biểu đồ Gantt chi tiết đến từng giờ công.',
          'Project Charter (Projektauftrag) được Sponsor chính thức ký phê duyệt và bổ nhiệm PM.',
          'Đã code xong phiên bản thử nghiệm đầu tiên.',
          'Đã ký biên bản nghiệm thu Abnahme.'
        ],
        answer: 1,
        explain: 'Project Charter được Sponsor ký duyệt là "giấy khai sinh" hợp pháp của dự án và là tiêu chuẩn để vượt Gate 1 bước sang Pha Planning.'
      },
      {
        q: 'Khi cần so sánh 3 đề xuất dự án mà lợi ích bao gồm cả yếu tố phi tài chính (tuân thủ luật, uy tín thương hiệu, giảm rủi ro vận hành), công cụ nào trong pha Initiation phù hợp nhất?',
        options: [
          'Chỉ dùng biểu đồ Gantt.',
          'Scoring Model (Nutzwertanalyse — Mô hình chấm điểm đa tiêu chí có trọng số) kết hợp phân tích tài chính.',
          'Dùng Burnup Chart của Scrum.',
          'Dùng Punch List.'
        ],
        answer: 1,
        explain: 'Scoring Model giúp lượng hóa các tiêu chí định tính theo trọng số chiến lược, hỗ trợ Ban lãnh đạo chọn dự án khách quan thay vì cảm tính.'
      },
      {
        q: 'Mục tiêu nào sau đây đạt chuẩn SMART theo hướng dẫn của Pha Initiation?',
        options: [
          '"Cải thiện mạnh mẽ trải nghiệm người dùng trên cổng đặt hàng."',
          '"Triển khai cổng đặt hàng B2B trong 26 tuần với ngân sách tối đa 2,4 tỷ, rút thời gian xử lý đơn từ 4,5 giờ xuống dưới 15 phút."',
          '"Giảm chi phí vận hành công ty càng nhiều càng tốt."',
          '"Xây dựng hệ thống phần mềm hiện đại hàng đầu thị trường."'
        ],
        answer: 1,
        explain: 'Phương án B hội tụ đủ 5 yếu tố: Cụ thể (cổng B2B), Đo lường được (< 15 phút, ≤ 2,4 tỷ), Khả thi, Liên quan nghiệp vụ và Có thời hạn (26 tuần).'
      }
    ],
    m2: [
      {
        q: 'Trong phân tích Mạng công việc (CPM), Đường găng (Critical Path) được định nghĩa chính xác là gì?',
        options: [
          'Chuỗi công việc tốn nhiều tiền nhất trong dự án.',
          'Chuỗi công việc dài nhất quyết định tổng thời lượng dự án, nơi mọi công việc đều có Total Float = 0.',
          'Chuỗi công việc có nhiều rủi ro kỹ thuật nhất.',
          'Chuỗi công việc ngắn nhất từ đầu đến cuối dự án.'
        ],
        answer: 1,
        explain: 'Đường găng là đường dài nhất về mặt thời gian xuyên qua mạng công việc (Float = 0). Bất kỳ chậm trễ nào trên đường găng sẽ trực tiếp làm trễ ngày hoàn thành toàn dự án.'
      },
      {
        q: 'Khi lập Ma trận trách nhiệm RACI cho một Work Package, quy tắc BẮT BUỘC không được vi phạm là gì?',
        options: [
          'Mỗi Work Package chỉ được có duy nhất 1 người R (Responsible).',
          'Mỗi Work Package phải có duy nhất 1 người A (Accountable — chịu trách nhiệm cuối cùng).',
          'Mọi thành viên đều phải có ít nhất 1 chữ C hoặc I ở tất cả các dòng.',
          'Project Manager luôn phải là R cho tất cả Work Packages.'
        ],
        answer: 1,
        explain: 'Một Work Package có thể có nhiều người cùng thực thi (R), nhưng bắt buộc chỉ có DUY NHẤT 1 người chịu trách nhiệm phê duyệt cuối cùng (A) để tránh đùn đẩy trách nhiệm.'
      },
      {
        q: 'Quy tắc 100% (100% Rule) trong Work Breakdown Structure (WBS) có nghĩa là gì?',
        options: [
          'Tất cả nhân sự phải làm việc 100% công suất.',
          'WBS phải bao phủ 100% công việc cần thiết để hoàn thành phạm vi dự án (kể cả quản trị dự án) và không chứa công việc ngoài phạm vi.',
          'Mọi gói công việc phải có thời lượng chia hết cho 100 giờ.',
          '100% công việc phải nằm trên đường găng.'
        ],
        answer: 1,
        explain: 'WBS đảm bảo tổng các nhánh con bằng đúng 100% nhánh cha: không sót việc (gây phát sinh ẩn) và không thừa việc (gây lãng phí ngoài Scope).'
      },
      {
        q: 'Khi biểu đồ chất tải nguồn lực (Resource Histogram) cho thấy 1 kỹ sư bị quá tải 150% trong Tuần 8, hành động ưu tiên đầu tiên khi thực hiện Resource Leveling là gì?',
        options: [
          'Lập tức thuê thêm nhân sự ngoài với chi phí cao.',
          'Dời các công việc KHÔNG nằm trên đường găng (có Total Float > 0) sang các tuần nhàn rỗi trước để tránh làm trễ ngày kết thúc dự án.',
          'Cắt bỏ luôn công việc đó khỏi WBS.',
          'Yêu cầu kỹ sư làm việc 12 tiếng/ngày suốt tháng.'
        ],
        answer: 1,
        explain: 'Resource Leveling ưu tiên tận dụng Total Float của các gói việc ngoài đường găng để san phẳng tải mà vẫn bảo toàn mốc hoàn thành và ngân sách.'
      },
      {
        q: 'Bạn ký hợp đồng trọn gói (Fixed-Price) kèm điều khoản phạt trễ hạn với nhà thầu phụ cho một hạng mục có rủi ro biến động giá nguyên liệu cao. Đây là chiến lược ứng phó rủi ro nào?',
        options: [
          'Avoid (Tránh né)',
          'Transfer (Chuyển giao rủi ro sang bên thứ ba)',
          'Accept (Chấp nhận)',
          'Ignore (Bỏ qua)'
        ],
        answer: 1,
        explain: 'Hợp đồng Fixed-Price hoặc mua bảo hiểm là ví dụ kinh điển của chiến lược Transfer — chuyển phần rủi ro tài chính sang đối tác có năng lực gánh chịu (đổi lại họ thường tính phí dự phòng trong giá thầu).'
      }
    ],
    m3: [
      {
        q: 'Tại tháng thứ 4, một dự án có PV = 500tr, EV = 400tr, AC = 500tr. Nhận định nào sau đây CHÍNH XÁC nhất?',
        options: [
          'Dự án đang đúng tiến độ và đúng ngân sách vì AC = PV = 500tr.',
          'Dự án đang vừa CHẬM tiến độ (SPI = 0.80) vừa VƯỢT chi phí (CPI = 0.80).',
          'Dự án đang vượt tiến độ nhưng đội vốn.',
          'Không thể kết luận vì chưa có biểu đồ Gantt.'
        ],
        answer: 1,
        explain: 'Đây là bẫy kinh điển mà EVM vạch trần! Dù tiêu đúng 500tr như kế hoạch (AC = PV), giá trị thực sự làm xong chỉ đạt 400tr (EV) → SPI = 400/500 = 0.80 (trễ) và CPI = 400/500 = 0.80 (đội vốn).'
      },
      {
        q: 'Trên biểu đồ Milestone Trend Analysis (MTA), nếu đường của Mốc M3 liên tục DỐC LÊN qua 3 kỳ báo cáo, điều đó cảnh báo gì?',
        options: [
          'Tiến độ đang tăng tốc và hoàn thành sớm hơn dự kiến.',
          'Ngày dự kiến hoàn thành mốc M3 đang liên tục bị đẩy lùi — dấu hiệu trễ tiến độ có hệ thống cần can thiệp sớm.',
          'Ngân sách đang được tiết kiệm.',
          'Mốc M3 hoàn toàn ổn định.'
        ],
        answer: 1,
        explain: 'Trong MTA, trục tung là ngày dự kiến hoàn thành mốc (tăng dần từ dưới lên). Đường đi lên chứng tỏ sau mỗi kỳ báo cáo, ngày hoàn thành lại bị lùi xa hơn.'
      },
      {
        q: 'Trong giai đoạn Bàn giao (Handover & Closure), nếu hệ thống chạy tốt nhưng còn 2 lỗi hiển thị nhỏ (Minor) không cản trở vận hành, cách xử lý chuyên nghiệp nhất là gì?',
        options: [
          'Treo vô thời hạn biên bản nghiệm thu cho đến khi hệ thống hoàn hảo 100%.',
          'Giấu nhẹm 2 lỗi đó để khách hàng ký nghiệm thu xong rồi tính.',
          'Ký Biên bản nghiệm thu chính thức (Abnahme) kèm phụ lục Punch List ghi rõ 2 lỗi nhỏ, người phụ trách và hạn khắc phục cụ thể.',
          'Bỏ qua hoàn toàn bước ký biên bản nghiệm thu.'
        ],
        answer: 2,
        explain: 'Cơ chế Punch List cho phép hoàn tất cột mốc pháp lý Abnahme và đưa hệ thống vào khai thác đúng hạn mà vẫn đảm bảo minh bạch cam kết khắc phục các tồn đọng nhỏ.'
      },
      {
        q: 'Khi cần rút ngắn tiến độ trên Đường găng, sự khác nhau giữa "Crashing" và "Fast-Tracking" là gì?',
        options: [
          'Crashing làm tăng rủi ro phải làm lại; Fast-Tracking luôn miễn phí và không rủi ro.',
          'Crashing bơm thêm nguồn lực/chi phí vào công việc đường găng; Fast-Tracking cho chạy song song các công việc vốn tuần tự (tăng rủi ro phải làm lại nếu phần trước thay đổi).',
          'Hai thuật ngữ hoàn toàn đồng nghĩa.',
          'Cả hai đều chỉ áp dụng cho công việc có Float > 0.'
        ],
        answer: 1,
        explain: 'Nén tiến độ chỉ có tác dụng khi áp dụng trên Đường găng: Crashing đánh đổi bằng CHI PHÍ, còn Fast-Tracking đánh đổi bằng RỦI RO làm lại (Rework).'
      },
      {
        q: 'Thời điểm và tinh thần tổ chức hội thảo "Lessons Learned" hiệu quả nhất là gì?',
        options: [
          'Đợi 3 tháng sau khi dự án kết thúc để mọi người quên bớt căng thẳng rồi mới họp.',
          'Thu thập định kỳ ở mỗi Gate và tổng kết chính thức ngay trước khi giải tán đội dự án, trong tinh thần cởi mở không đổ lỗi cá nhân (Blameless).',
          'Chỉ họp riêng giữa PM và Sponsor để kỷ luật các thành viên làm chậm.',
          'Chỉ cần làm Lessons Learned khi dự án thất bại.'
        ],
        answer: 1,
        explain: 'Cả dự án thành công lẫn thất bại đều có bài học quý. Làm sớm trước khi giải tán team và giữ văn hóa Blameless mới khai thác được sự thật để lưu kho tri thức PMO.'
      }
    ],
    m4: [
      {
        q: 'Trong Scrum, ai là người duy nhất chịu trách nhiệm tối đa hóa giá trị sản phẩm và sắp xếp thứ tự ưu tiên của Product Backlog?',
        options: [
          'Scrum Master',
          'Product Owner',
          'Project Sponsor',
          'Tech Lead của nhóm Developers'
        ],
        answer: 1,
        explain: 'Product Owner là chủ sở hữu duy nhất của Product Backlog và quyết định thứ tự ưu tiên theo giá trị kinh doanh. Scrum Master phụ trách quy trình & gỡ vướng, Developers quyết định cách làm kỹ thuật.'
      },
      {
        q: 'Giới hạn WIP (Work in Progress Limit) trong Kanban nhằm giải quyết vấn đề cốt lõi nào?',
        options: [
          'Ép nhân viên làm thêm giờ nhiều hơn.',
          'Ngăn đa nhiệm quá mức, làm lộ rõ điểm nghẽn (Bottleneck) và rút ngắn thời gian hoàn thành (Cycle Time).',
          'Thay thế hoàn toàn nhu cầu lập kế hoạch ngân sách.',
          'Giới hạn số lượng thành viên tối đa trong công ty.'
        ],
        answer: 1,
        explain: '"Stop starting, start finishing" — WIP Limit buộc đội ngũ tập trung hoàn tất việc đang dở trước khi kéo việc mới vào, giảm tồn đọng và tăng thông lượng dòng chảy.'
      },
      {
        q: 'Sự khác biệt trọng tâm giữa "Sprint Review" và "Sprint Retrospective" trong Scrum là gì?',
        options: [
          'Sprint Review dành riêng cho nội bộ Dev, còn Retrospective mời khách hàng tham dự.',
          'Sprint Review thanh tra SẢN PHẨM (demo Increment cùng Stakeholders để cập nhật Backlog); Sprint Retrospective thanh tra QUY TRÌNH & CÁCH LÀM VIỆC nội bộ đội ngũ.',
          'Hai sự kiện có thể gộp làm một buổi báo cáo tiến độ 15 phút.',
          'Sprint Review chỉ tổ chức khi kết thúc toàn bộ dự án.'
        ],
        answer: 1,
        explain: 'Sprint Review tập trung vào "What we built" (Sản phẩm & Giá trị), còn Sprint Retrospective tập trung vào "How we worked" (Cải tiến quy trình, công cụ và phối hợp).'
      },
      {
        q: 'Vai trò đúng của "Definition of Done (DoD)" trong Scrum là gì?',
        options: [
          'Danh sách các tính năng chưa kịp làm bị đẩy sang Sprint sau.',
          'Thỏa thuận chất lượng chung minh bạch xác định các tiêu chuẩn kỹ thuật/kiểm thử phải đạt để một Product Increment được coi là hoàn tất và có thể phát hành.',
          'Bản hợp đồng lao động của Scrum Master.',
          'Lịch nghỉ phép của đội phát triển.'
        ],
        answer: 1,
        explain: 'Không có DoD rõ ràng, mỗi người sẽ hiểu "xong" một kiểu (ví dụ mới code xong chưa test đã báo xong), phá vỡ trụ cột Minh bạch (Transparency) của Scrum.'
      },
      {
        q: 'Khi nào Kanban thường là lựa chọn phù hợp HƠN Scrum?',
        options: [
          'Khi phát triển sản phẩm mới cần nhịp demo cố định mỗi 2 tuần.',
          'Khi vận hành đội bảo trì, hỗ trợ sau Go-Live (Hypercare) hoặc xử lý yêu cầu phát sinh đột xuất liên tục theo dòng chảy không thể đợi đến Sprint sau.',
          'Khi dự án không cần quản lý chất lượng.',
          'Khi đội có quy mô trên 100 người làm chung 1 bảng.'
        ],
        answer: 1,
        explain: 'Kanban dựa trên hệ thống kéo dòng chảy liên tục (Continuous Flow) nên cực kỳ mạnh với các luồng việc ưu tiên thay đổi từng ngày như Operations, Support và Hypercare.'
      }
    ],
    m5: [
      {
        q: 'Một dự án triển khai cổng B2B có pha Khởi tạo & Thiết kế tổng thể theo Waterfall, pha Phát triển tính năng chạy các Sprint Scrum 2 tuần, rồi pha UAT & Go-Live theo Waterfall. Theo phân loại 5 hình thái của André Dechange, đây là dạng nào?',
        options: [
          'Dạng 1: Traditional + Agile Methods.',
          'Dạng 2: Traditional Framework + Agile Phases (ví dụ Water-Scrum-Fall).',
          'Dạng 4: Agile Framework + Traditional Methods.',
          'Thuần Agile.'
        ],
        answer: 1,
        explain: 'Đây chính là Dạng 2 kinh điển của Dechange: khung ngoài là Traditional (Initiation & Handover) bao bọc các pha phát triển Agile nối tiếp hoặc song song (Water-Scrum-Fall / Agile-Stage-Gate).'
      },
      {
        q: 'Trong một dự án Hybrid kết hợp luồng phần cứng (Stage-Gate) và luồng phần mềm (Scrum), cơ chế nào là "xương sống" để hai bên không lệch pha nhau?',
        options: [
          'Bắt đội phần cứng phải bỏ hết bản vẽ để làm Scrum.',
          'Thiết lập các Synchronization Points (Điểm đồng bộ) định kỳ, khóa Interface Contract và phân định rõ vai trò PM vs. Product Owner.',
          'Để hai đội làm độc lập hoàn toàn cho đến tuần cuối mới ghép lại.',
          'Bỏ qua quản trị ngân sách để tăng tốc độ.'
        ],
        answer: 1,
        explain: 'Dechange nhấn mạnh Synchronization Points là cầu nối bắt buộc trong mô hình Fully Combined / Hybrid để đồng bộ tiến độ, tích hợp mẫu thử và giữ chung nhịp báo cáo.'
      },
      {
        q: 'Đội sản phẩm chạy Scrum làm lõi nhưng PM bổ sung Master Milestone Plan (MTA), Risk Register và Budget Tracking để báo cáo Ban Giám đốc. Đây là hình thái Hybrid nào của Dechange?',
        options: [
          'Dạng 1: Traditional + Agile Methods.',
          'Dạng 4: Agile Framework + Traditional Methods.',
          'Thuần Waterfall.',
          'Không phải Hybrid.'
        ],
        answer: 1,
        explain: 'Khi lõi vận hành là Agile (Scrum/Kanban) và chỉ bổ sung các công cụ kiểm soát/báo cáo truyền thống ở tầng quản trị, đó chính là Hybrid Dạng 4.'
      },
      {
        q: 'Trong dự án Hybrid, vì sao cần phân định rạch ròi vai trò Project Manager và Product Owner ngay từ Gate 1?',
        options: [
          'Để tăng thêm chức danh cho đẹp sơ đồ tổ chức.',
          'Để tránh giẫm chân lên nhau: PM quản trị tổng thể ngân sách, hợp đồng, rủi ro & đồng bộ đa luồng, còn PO tập trung tối đa hóa giá trị sản phẩm & ưu tiên Backlog.',
          'Vì Product Owner không được phép nói chuyện với khách hàng.',
          'Vì Project Manager sẽ trực tiếp viết code thay Developers.'
        ],
        answer: 1,
        explain: 'Xung đột quyền hạn giữa PM và PO là nguyên nhân hàng đầu khiến dự án Hybrid rối loạn. Phân ranh giới rõ giúp cả Governance (PM) và Value (PO) cùng mạnh.'
      },
      {
        q: 'Rủi ro lớn nhất khi một đội ngũ thiếu kinh nghiệm chọn Hybrid Dạng 5 (Freestyle / Tailored) là gì?',
        options: [
          'Dự án hoàn thành quá nhanh.',
          'Biến thành "Hỗn loạn không kỷ luật": bỏ qua các nguyên tắc cốt lõi của cả Traditional lẫn Agile mà không có năng lực kiểm soát tương ứng.',
          'Không thể dùng công cụ Jira.',
          'Không thể tổ chức Kick-off Meeting.'
        ],
        answer: 1,
        explain: 'Dechange lưu ý Freestyle/Tailored chỉ phát huy hiệu quả với các PM và tổ chức có độ trưởng thành cao, hiểu sâu bản chất từng công cụ trước khi phá vỡ khuôn mẫu.'
      }
    ],
    m6: [
      {
        q: 'Theo mô hình phát triển nhóm của Bruce Tuckman, ở giai đoạn nào các thành viên bắt đầu va chạm quan điểm gay gắt và hiệu suất tạm giảm trước khi đi vào ổn định?',
        options: [
          'Forming',
          'Storming',
          'Norming',
          'Performing'
        ],
        answer: 1,
        explain: 'Storming là giai đoạn sóng gió tất yếu khi cái tôi và cách làm việc va chạm. Vai trò của PM là dẫn dắt đối thoại minh bạch để nhóm sớm bước sang Norming.'
      },
      {
        q: 'Sự khác biệt bản chất giữa Portfolio Management và Project Management trong Chương 6 (Multiproject Management) của Dechange là gì?',
        options: [
          'Không có khác biệt, chỉ khác tên gọi ở châu Âu và Mỹ.',
          'Project Management tập trung "Làm dự án ĐÚNG cách" (Doing the project right), còn Portfolio Management tập trung "Chọn ĐÚNG dự án để đầu tư" gắn chiến lược công ty (Doing the right projects).',
          'Portfolio chỉ quản lý các dự án Agile.',
          'Portfolio nhỏ hơn Project.'
        ],
        answer: 1,
        explain: 'Portfolio đứng ở tầm chiến lược để sàng lọc, ưu tiên và phân bổ nguồn lực cho tập hợp các dự án/chương trình mang lại giá trị chiến lược cao nhất.'
      },
      {
        q: 'Theo Mô hình Giao tiếp 4 tai (Schulz von Thun), khi Sponsor nói "Tuần sau là đến mốc UAT rồi đấy" và PM lập tức thấy khó chịu vì nghĩ "Sếp đang nghi ngờ năng lực mình", PM đang nghe chủ yếu bằng tai nào?',
        options: [
          'Tai Sự thật khách quan (Factual level).',
          'Tai Mối quan hệ (Relationship level).',
          'Tai Kỹ thuật.',
          'Tai Ngân sách.'
        ],
        answer: 1,
        explain: 'Phản ứng cảm xúc về việc đối phương nghĩ gì về mình xuất phát từ Tai Mối quan hệ. Nhận diện được 4 tai giúp PM bình tĩnh kiểm chứng lại thông điệp ở lớp Sự thật và Lời kêu gọi.'
      },
      {
        q: 'Trong kỹ năng Quản trị bản thân (Self-Management), PM nên dùng Ma trận Eisenhower để ưu tiên đầu tư thời gian vào nhóm công việc nào nhằm giảm tình trạng "suốt ngày đi chữa cháy"?',
        options: [
          'Không quan trọng nhưng Khẩn cấp.',
          'Quan trọng nhưng Chưa khẩn cấp (lập kế hoạch rủi ro, xây quan hệ Stakeholder, tối ưu quy trình).',
          'Không quan trọng và Không khẩn cấp.',
          'Chỉ làm việc khi đã thành khủng hoảng khẩn cấp.'
        ],
        answer: 1,
        explain: 'Đầu tư chủ động vào góc phần tư 2 (Quan trọng – Chưa khẩn cấp) là bí quyết ngăn các rủi ro tiềm ẩn biến thành khủng hoảng khẩn cấp ở góc phần tư 1.'
      },
      {
        q: 'Đâu là sự khác nhau cốt lõi giữa một Program (Chương trình) và một Portfolio (Danh mục)?',
        options: [
          'Các dự án trong cùng một Program có mối liên hệ phụ thuộc mật thiết để tạo ra lợi ích tổng hợp chung; còn các dự án trong Portfolio không nhất thiết liên quan kỹ thuật nhưng cùng chia sẻ nguồn lực và phục vụ chiến lược công ty.',
          'Program luôn ngắn hơn 1 tháng.',
          'Portfolio không cần PMO hỗ trợ.',
          'Program chỉ chứa 1 dự án duy nhất.'
        ],
        answer: 0,
        explain: 'Ví dụ: Chương trình "Chuyển đổi số chuỗi cung ứng" gồm 3 dự án phụ thuộc nhau (ERP + Kho WMS + Cổng B2B) = Program. Tập hợp toàn bộ dự án CNTT, xây dựng nhà máy và tung sản phẩm mới của tập đoàn = Portfolio.'
      }
    ]
  };

  /* 67 Bilingual Flashcards covering the entire Dechange textbook */
  window.PMApp.data.flashcards = [
    // Module 0: Fundamentals
    { cat: 'M0 · Fundamentals', term: 'Project (DIN 69901)', def: 'Nỗ lực mang tính duy nhất trong tổng thể điều kiện: có mục tiêu rõ ràng, giới hạn thời gian/ngân sách/nhân sự, phân biệt với vận hành thường nhật và có cấu trúc tổ chức riêng.' },
    { cat: 'M0 · Fundamentals', term: 'Routine Operations (Line)', def: 'Công việc vận hành lặp đi lặp lại theo quy trình chuẩn (SOP), không có ngày kết thúc cố định, thuộc một phòng ban chức năng.' },
    { cat: 'M0 · Fundamentals', term: 'Projectworthiness (Projektwürdigkeit)', def: 'Bước đánh giá xem một đề xuất công việc có đủ độ phức tạp, rủi ro và quy mô để quản lý theo chuẩn dự án hay chỉ cần xử lý như tác vụ thường.' },
    { cat: 'M0 · Fundamentals', term: 'A / B / C Project Classification', def: 'Phân loại dự án theo quy mô & rủi ro (A: Lớn/Chiến lược, B: Trung bình, C: Nhỏ) nhằm điều chỉnh độ dày quy trình quản trị tương xứng.' },
    { cat: 'M0 · Fundamentals', term: 'Magic Triangle (Magisches Dreieck)', def: 'Tam giác ràng buộc 3 đỉnh: Phạm vi/Chất lượng (Scope) – Thời gian (Time) – Chi phí (Cost). Thay đổi 1 đỉnh luôn kéo theo tác động lên ít nhất 1 đỉnh còn lại.' },
    { cat: 'M0 · Fundamentals', term: 'DIN 69901', def: 'Bộ tiêu chuẩn Đức về Hệ thống Quản trị Dự án — chuẩn hóa thuật ngữ, 5 nhóm quy trình và mô hình dữ liệu dự án được dùng xuyên suốt sách Dechange.' },
    { cat: 'M0 · Fundamentals', term: 'IPMA ICB 4.0', def: 'Chuẩn năng lực quốc tế về Quản trị dự án tập trung vào 3 trụ cột: Perspective (Bối cảnh), People (Con người), Practice (Thực hành).' },
    { cat: 'M0 · Fundamentals', term: 'PMBOK Guide (PMI)', def: 'Bộ tri thức Quản trị dự án của Viện Quản lý Dự án Hoa Kỳ (PMI), kết hợp các Nguyên lý quản trị và Miền hiệu suất (Performance Domains).' },
    { cat: 'M0 · Fundamentals', term: 'PRINCE2', def: 'Phương pháp quản trị dự án có cấu trúc của Anh, nhấn mạnh Business Case liên tục, phân quyền rõ ràng và quản trị theo từng chặng (Stage-by-Stage).' },
    { cat: 'M0 · Fundamentals', term: 'Matrix Organization', def: 'Cơ cấu tổ chức ma trận nơi PM quản lý nội dung/tiến độ dự án, còn Line Manager quản lý chuyên môn/nhân sự (gồm Weak, Balanced, Strong Matrix).' },
    { cat: 'M0 · Fundamentals', term: 'Pure Project Organization', def: 'Cơ cấu dự án thuần túy: nhân sự tách riêng toàn thời gian báo cáo thẳng cho PM; tốc độ quyết định cao nhất nhưng tốn kém nguồn lực.' },
    { cat: 'M0 · Fundamentals', term: 'Project Sponsor', def: 'Người bảo trợ cấp cao cấp ngân sách, đại diện lợi ích kinh doanh, bảo vệ dự án trước tổ chức và ký duyệt Charter / Acceptance.' },
    { cat: 'M0 · Fundamentals', term: 'Steering Committee', def: 'Ban chỉ đạo dự án — hội đồng cấp cao ra quyết định tại các cổng Stage-Gate và giải quyết các vấn đề leo thang (RED) vượt thẩm quyền PM.' },
    { cat: 'M0 · Fundamentals', term: 'Phase Gate / Stage-Gate', def: 'Cổng kiểm soát chất lượng giữa 2 pha vòng đời dự án, nơi Ban chỉ đạo ra quyết định: Go, Conditional Go, Hold hoặc Kill.' },
    { cat: 'M0 · Fundamentals', term: 'Stacey Matrix', def: 'Ma trận đánh giá mức độ phức tạp dựa trên 2 trục: Độ rõ Yêu cầu (What) và Độ chắc chắn Công nghệ/Giải pháp (How) để chọn Traditional, Agile hay Hybrid.' },

    // Module 1: Initiation
    { cat: 'M1 · Initiation', term: 'Project Appraisal', def: 'Đánh giá tiền khả thi & kinh tế của đề xuất dự án (Feasibility, ROI, NPV, Payback, Scoring Model) để đảm bảo chọn đúng dự án.' },
    { cat: 'M1 · Initiation', term: 'Business Case', def: 'Tài liệu luận chứng kinh doanh chứng minh giá trị mang lại của dự án xứng đáng với chi phí, thời gian và rủi ro đầu tư.' },
    { cat: 'M1 · Initiation', term: 'Scoring Model (Nutzwertanalyse)', def: 'Phương pháp chấm điểm đa tiêu chí có trọng số để so sánh khách quan các phương án dự án có nhiều yếu tố phi tài chính.' },
    { cat: 'M1 · Initiation', term: 'SMART Goals', def: 'Tiêu chuẩn viết mục tiêu dự án: Specific (Cụ thể), Measurable (Đo được), Achievable (Khả thi), Realistic/Relevant (Thực tế), Time-bound (Có thời hạn).' },
    { cat: 'M1 · Initiation', term: 'Deliverables (In-Scope)', def: 'Các sản phẩm, tài liệu hoặc kết quả hữu hình/vô hình cụ thể mà dự án cam kết bàn giao.' },
    { cat: 'M1 · Initiation', term: 'Non-Goals (Out-of-Scope)', def: 'Danh mục ghi rõ những hạng mục KHÔNG nằm trong phạm vi dự án — lá chắn quan trọng nhất để phòng ngừa Scope Creep.' },
    { cat: 'M1 · Initiation', term: 'Scope Creep', def: 'Hiện tượng phạm vi dự án phình to dần một cách mất kiểm soát do tiếp nhận các yêu cầu thêm không qua thẩm định tác động.' },
    { cat: 'M1 · Initiation', term: 'Stakeholder', def: 'Bất kỳ cá nhân, nhóm hay tổ chức nào có thể tác động lên dự án hoặc chịu ảnh hưởng (tích cực/tiêu cực) từ dự án.' },
    { cat: 'M1 · Initiation', term: 'Power–Interest Matrix', def: 'Ma trận phân nhóm Stakeholder thành 4 chiến lược: Manage Closely, Keep Satisfied, Keep Informed và Monitor.' },
    { cat: 'M1 · Initiation', term: 'Project Charter (Projektauftrag)', def: 'Tuyên ngôn dự án — văn bản chính thức khai sinh dự án, xác lập mục tiêu, phạm vi, ngân sách khung và thẩm quyền của PM (Gate 1).' },
    { cat: 'M1 · Initiation', term: 'Kick-off Meeting', def: 'Cuộc họp khởi động sau khi duyệt Charter nhằm đồng bộ tầm nhìn, vai trò, kênh giao tiếp và tạo cam kết cho toàn đội.' },

    // Module 2: Planning
    { cat: 'M2 · Planning', term: 'WBS (Projektstrukturplan)', def: 'Cấu trúc phân rã công việc theo phân cấp ("kế hoạch của mọi kế hoạch"), chia toàn bộ dự án thành các Work Packages quản lý được.' },
    { cat: 'M2 · Planning', term: '100% Rule (WBS)', def: 'Tổng các nhánh con trong WBS phải bao phủ đúng 100% công việc thuộc phạm vi dự án — không thiếu, không thừa, không chồng chéo.' },
    { cat: 'M2 · Planning', term: 'Work Package (Arbeitspaket)', def: 'Gói công việc ở cấp lá của cây WBS — ước lượng được chi phí/thời gian và gán cho duy nhất 1 người chịu trách nhiệm.' },
    { cat: 'M2 · Planning', term: 'CPM (Critical Path Method)', def: 'Phương pháp mạng công việc tính xuôi (ES/EF) và tính ngược (LS/LF) để xác định thời lượng tối thiểu, Float và Đường găng.' },
    { cat: 'M2 · Planning', term: 'Critical Path (Đường găng)', def: 'Chuỗi công việc dài nhất quyết định thời lượng toàn dự án, có Total Float = 0. Trễ 1 ngày trên đường găng = trễ toàn dự án 1 ngày.' },
    { cat: 'M2 · Planning', term: 'Total Float (Pufferzeit)', def: 'Khoảng thời gian tối đa một công việc có thể bị trì hoãn mà không làm chậm ngày kết thúc chung của toàn dự án (TF = LS - ES).' },
    { cat: 'M2 · Planning', term: 'Gantt Chart', def: 'Biểu đồ thanh ngang hiển thị lịch trình các công việc, mối liên hệ phụ thuộc và các mốc Milestone theo trục thời gian.' },
    { cat: 'M2 · Planning', term: 'Milestone (Cột mốc)', def: 'Sự kiện quan trọng có thời lượng bằng 0, đánh dấu thời điểm hoàn tất một kết quả/cổng kiểm soát lớn.' },
    { cat: 'M2 · Planning', term: 'RACI Matrix', def: 'Ma trận phân công trách nhiệm: Responsible (Thực thi), Accountable (Chịu trách nhiệm cuối — duy nhất 1), Consulted (Tham vấn), Informed (Thông báo).' },
    { cat: 'M2 · Planning', term: 'Resource Leveling', def: 'Kỹ thuật điều chỉnh lịch trình (ưu tiên dời việc có Float > 0) để xử lý tình trạng nhân sự bị quá tải (>100% công suất).' },
    { cat: 'M2 · Planning', term: 'Cost Baseline (S-Curve)', def: 'Ngân sách gốc được phê duyệt phân bổ theo thời gian (thường có dạng đường cong chữ S), làm chuẩn đo lường chi phí thực tế.' },
    { cat: 'M2 · Planning', term: 'Acceptance Criteria', def: 'Bộ tiêu chí định lượng/kiểm chứng được dùng để xác định một Deliverable đã đạt chất lượng nghiệm thu hay chưa.' },
    { cat: 'M2 · Planning', term: 'Risk Register', def: 'Sổ đăng ký rủi ro lưu trữ toàn bộ rủi ro đã nhận diện, điểm P × I, chiến lược ứng phó (Avoid/Mitigate/Transfer/Accept) và Risk Owner.' },
    { cat: 'M2 · Planning', term: 'Baseline Freeze (Gate 2)', def: 'Cột mốc chốt cứng bộ kế hoạch gốc (Scope, Schedule, Cost) làm chuẩn đo lường; mọi thay đổi sau đó phải qua Change Control.' },

    // Module 3: Execution, Controlling & Closure
    { cat: 'M3 · Control & Closure', term: 'Soll-Ist-Vergleich (Plan vs. Actual)', def: 'Vòng lặp kiểm soát cốt lõi: so sánh dữ liệu thực tế (Ist) với kế hoạch gốc (Soll), tìm nguyên nhân lệch và thực hiện hành động khắc phục.' },
    { cat: 'M3 · Control & Closure', term: 'RAG Status Report', def: 'Báo cáo trạng thái đèn giao thông: Green (Ổn định), Amber (Lệch nhưng PM tự xử lý được), Red (Vượt thẩm quyền, cần Ban chỉ đạo quyết định).' },
    { cat: 'M3 · Control & Closure', term: 'Milestone Trend Analysis (MTA)', def: 'Biểu đồ theo dõi xu hướng dịch chuyển ngày dự kiến của các mốc qua từng kỳ báo cáo: ngang = ổn, đi lên = trễ dần, đi xuống = sớm hơn.' },
    { cat: 'M3 · Control & Closure', term: 'Earned Value (EV)', def: 'Giá trị (tính theo ngân sách gốc) của khối lượng công việc thực sự đã hoàn thành tại thời điểm báo cáo.' },
    { cat: 'M3 · Control & Closure', term: 'SPI (Schedule Performance Index)', def: 'Chỉ số hiệu suất tiến độ: SPI = EV / PV. Nếu SPI < 1.0 dự án đang chậm tiến độ; SPI ≥ 1.0 là đúng hoặc nhanh hơn kế hoạch.' },
    { cat: 'M3 · Control & Closure', term: 'CPI (Cost Performance Index)', def: 'Chỉ số hiệu suất chi phí: CPI = EV / AC. Nếu CPI < 1.0 dự án đang đội vốn; CPI ≥ 1.0 là tiết kiệm chi phí.' },
    { cat: 'M3 · Control & Closure', term: 'EAC (Estimate at Completion)', def: 'Dự báo tổng chi phí khi hoàn thành dự án dựa trên hiệu suất hiện tại (phổ biến nhất: EAC = BAC / CPI).' },
    { cat: 'M3 · Control & Closure', term: 'Crashing vs. Fast-Tracking', def: 'Hai kỹ thuật nén tiến độ: Crashing là bơm thêm nguồn lực/chi phí vào đường găng; Fast-tracking là chạy song song các việc vốn làm tuần tự (tăng rủi ro làm lại).' },
    { cat: 'M3 · Control & Closure', term: 'Change Control Board (CCB)', def: 'Hội đồng/nhóm thẩm quyền xem xét đánh giá tác động và phê duyệt (Approve / Defer / Reject) các Change Request chính thức.' },
    { cat: 'M3 · Control & Closure', term: 'Formal Acceptance (Abnahme)', def: 'Nghiệm thu chính thức có chữ ký xác nhận sản phẩm đạt tiêu chí, chuyển giao trách nhiệm pháp lý và kích hoạt thanh toán/bảo hành.' },
    { cat: 'M3 · Control & Closure', term: 'Punch List', def: 'Danh mục các lỗi nhỏ/tồn đọng không cản trở vận hành được đính kèm biên bản nghiệm thu cùng cam kết thời hạn xử lý.' },
    { cat: 'M3 · Control & Closure', term: 'Hypercare', def: 'Giai đoạn hỗ trợ kỹ thuật tăng cường ngay sau Go-Live (thường 2–4 tuần) để ổn định hệ thống trước khi chuyển về vận hành chuẩn.' },
    { cat: 'M3 · Control & Closure', term: 'Lessons Learned', def: 'Quá trình đúc kết bài học thành công và thất bại (Blameless) khi đóng dự án nhằm chuyển hóa kinh nghiệm cá nhân thành tri thức tổ chức.' },

    // Module 4: Agile
    { cat: 'M4 · Agile', term: 'Empirical Process Control', def: 'Nền tảng của Agile/Scrum dựa trên 3 trụ cột: Transparency (Minh bạch), Inspection (Thanh tra) và Adaptation (Thích nghi).' },
    { cat: 'M4 · Agile', term: 'Product Backlog', def: 'Danh sách duy nhất, sống động và được sắp xếp ưu tiên của mọi tính năng/yêu cầu cần cho sản phẩm do Product Owner quản lý.' },
    { cat: 'M4 · Agile', term: 'Sprint', def: 'Khung thời gian cố định (Timebox 1–4 tuần) mà đội Scrum tạo ra một Product Increment hoàn chỉnh đạt chuẩn Definition of Done.' },
    { cat: 'M4 · Agile', term: 'Definition of Done (DoD)', def: 'Thỏa thuận chất lượng chung xác định rõ các tiêu chuẩn kỹ thuật & kiểm thử phải đạt để một Increment được coi là hoàn tất.' },
    { cat: 'M4 · Agile', term: 'Sprint Review vs. Retrospective', def: 'Sprint Review thanh tra SẢN PHẨM (demo Increment cùng Stakeholder); Sprint Retrospective thanh tra QUY TRÌNH & CÁCH LÀM VIỆC nội bộ đội ngũ.' },
    { cat: 'M4 · Agile', term: 'WIP Limit (Kanban)', def: 'Giới hạn số lượng công việc tối đa đang làm đồng thời tại mỗi bước nhằm chống đa nhiệm, lộ điểm nghẽn và rút ngắn Cycle Time.' },

    // Module 5: Hybrid
    { cat: 'M5 · Hybrid', term: 'Hybrid PM Spectrum (Dechange)', def: 'Quan điểm cốt lõi của Dechange: Hybrid không phải 1 mô hình duy nhất mà là phổ gồm 5 hình thái kết hợp giữa Traditional và Agile.' },
    { cat: 'M5 · Hybrid', term: 'Water-Scrum-Fall', def: 'Ví dụ điển hình của Hình thái Hybrid số 2 (Dechange): Khởi tạo & Thiết kế khung (Waterfall) → Phát triển lõi (Scrum) → UAT & Bàn giao (Waterfall).' },
    { cat: 'M5 · Hybrid', term: 'Synchronization Points', def: 'Các cột mốc khớp nối định kỳ giữa luồng công việc Traditional và luồng Agile trong dự án Hybrid để đảm bảo tích hợp đồng bộ.' },
    { cat: 'M5 · Hybrid', term: 'Agile Fixed Price', def: 'Mô hình hợp đồng lai cho phép chốt trần ngân sách & mốc thời gian trong khi vẫn linh hoạt hoán đổi ưu tiên phạm vi theo từng giai đoạn.' },

    // Module 6: Soft Skills & Multiproject
    { cat: 'M6 · People & Multi', term: 'Tuckman Team Stages', def: '5 giai đoạn phát triển đội nhóm: Forming (Hình thành) → Storming (Sóng gió) → Norming (Ổn định) → Performing (Hiệu suất cao) → Adjourning (Giải tán).' },
    { cat: 'M6 · People & Multi', term: '4-Ears Model (Schulz von Thun)', def: 'Mô hình giao tiếp 4 lớp nghĩa: Sự thật khách quan – Tự bộc lộ – Mối quan hệ – Lời kêu gọi hành động.' },
    { cat: 'M6 · People & Multi', term: 'Portfolio vs. Program vs. Project', def: 'Project tạo đầu ra cụ thể; Program phối hợp nhóm dự án liên quan để tăng lợi ích tổng hợp; Portfolio chọn đúng danh mục dự án phục vụ chiến lược công ty.' },
    { cat: 'M6 · People & Multi', term: 'PMO (Project Management Office)', def: 'Đơn vị thường trực chuẩn hóa phương pháp PM, điều phối nguồn lực đa dự án, giám sát danh mục và lưu giữ tri thức dự án toàn doanh nghiệp.' }
  ];
})();
