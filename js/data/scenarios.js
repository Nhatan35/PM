/* ==========================================================================
   PM War Room: 10 Real-World Project Management Scenarios (Thực chiến A–Z)
   Covers Initiation, Planning, Execution, Controlling, Agile, Hybrid,
   Handover/Abnahme, and Personal/Social Competencies (André Dechange)
   ========================================================================== */
(function () {
  window.PMApp.data.scenarios = [
    {
      id: 'sc-01',
      phase: 'Pha 01 · Initiation',
      tag: 'Scope Creep & Gate 1',
      title: 'Tình huống 1: Sponsor ép "cứ làm luôn đi, Charter viết sau!"',
      situation: 'Dự án nâng cấp hệ thống CRM ngân sách 1,8 tỷ VNĐ đang chịu sức ép tiến độ từ Ban Giám đốc. Giám đốc Kinh doanh (Sponsor) bảo bạn: "Gấp lắm rồi, cứ cho đội kỹ thuật bắt tay làm ngay tuần này đi, giấy tờ Project Charter với danh sách Non-Goals rườm rà lắm, để tháng sau rảnh rồi ký cũng được!"',
      choices: [
        {
          label: 'Chiều lòng Sponsor, cho đội kỹ thuật chạy ngay để lấy điểm "linh hoạt", rồi vừa làm vừa ghi chú lại yêu cầu.',
          score: { control: 1, relation: 2, process: 0 },
          verdict: 'bad',
          feedback: 'Cạm bẫy kinh điển! Chưa thống nhất Deliverables và Non-Goals nghĩa là mỗi phòng ban sẽ hiểu phạm vi một kiểu. Chỉ 3 tuần sau, Scope Creep sẽ bùng nổ, bạn không có cơ sở từ chối yêu cầu phát sinh và chính bạn sẽ bị quy trách nhiệm khi trễ hạn.'
        },
        {
          label: 'Cương quyết dừng mọi hoạt động trong 2 tuần để soạn bộ Project Charter đầy đủ 25 trang và bắt tất cả các phòng ban ký đầy đủ mới làm.',
          score: { control: 2, relation: 0, process: 2 },
          verdict: 'warn',
          feedback: 'Đúng quy trình trên giấy nhưng quá cứng nhắc (quan liêu). Theo André Dechange, độ dày quy trình phải tương xứng bối cảnh — làm chậm 2 tuần ở giai đoạn gấp sẽ khiến Sponsor mất niềm tin và coi PM là "người cản trở".'
        },
        {
          label: 'Đề xuất bản "Mini-Charter 1 trang" trong 48 giờ chốt 4 thứ sống còn (Mục tiêu SMART, Deliverables lõi, Non-Goals, Trần ngân sách) để Sponsor duyệt qua email/chữ ký nhanh, đồng thời chỉ mở gói Khảo sát sơ bộ (Discovery) trước.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Xuất sắc! Bạn vừa tôn trọng tốc độ kinh doanh của Sponsor, vừa bảo vệ nguyên tắc Gate 1 của Dechange: không bao giờ đốt tiền phát triển quy mô lớn khi chưa khóa khung mục tiêu, thẩm quyền PM và Non-Goals.'
        }
      ],
      script: 'Mẫu câu nói thực chiến với Sponsor: "Em hoàn toàn hiểu mình cần chạy gấp để kịp chiến dịch quý tới. Để đội kỹ thuật không làm sai hướng gây mất thời gian sửa lại, em xin 30 phút chiều nay chốt cùng anh 1 trang Mini-Charter (3 mục tiêu chính, 5 tính năng bắt buộc và 3 thứ KHÔNG làm ở đợt 1). Anh xác nhận qua email là sáng mai đội bắt đầu chạy ngay được ạ!"'
    },
    {
      id: 'sc-02',
      phase: 'Pha 01 · Initiation',
      tag: 'Stakeholder Politics',
      title: 'Tình huống 2: Trưởng phòng Vận hành âm thầm cản trở dự án',
      situation: 'Bạn triển khai phần mềm tự động hóa kho vận. Trưởng phòng Kho (Quyền lực: 4/5, Quan tâm: 5/5) luôn gật đầu trong cuộc họp lớn có Giám đốc, nhưng ngoài đời lại liên tục trì hoãn cử nhân sự đi khảo sát và nói nhỏ với cấp dưới rằng "phần mềm mới chỉ tổ làm chậm việc".',
      choices: [
        {
          label: 'Lập tức gửi email báo cáo thẳng lên Giám đốc (Sponsor) để kỷ luật Trưởng phòng Kho vì thiếu hợp tác.',
          score: { control: 1, relation: 0, process: 1 },
          verdict: 'bad',
          feedback: 'Leo thang quá sớm khi chưa đối thoại trực tiếp sẽ đẩy mâu thuẫn sang tầng Win–Lose (theo thang Glasl). Họ sẽ chuyển từ phản đối ngầm sang phá hoại tinh vi hơn khi đến giai đoạn UAT và Go-Live.'
        },
        {
          label: 'Gặp riêng 1–1 không chính thức để lắng nghe nỗi lo thật (sợ mất quyền kiểm soát/sợ tăng tải khi chuyển đổi), mời họ đồng chủ trì thiết kế quy trình và ghi nhận quyền lợi trực tiếp của bộ phận kho vào mục tiêu dự án.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Chuẩn mực Quản trị Stakeholder! Stakeholder ở góc "Manage Closely" nhưng có thái độ phản đối thường xuất phát từ nỗi lo chưa được lắng nghe. Biến họ từ "người bị áp đặt" thành "đồng tác giả" là cách hóa giải bền vững nhất.'
        },
        {
          label: 'Bỏ qua phòng Kho, tự lấy quy trình chuẩn từ bên ngoài để đội IT làm xong rồi ép áp dụng khi Go-Live.',
          score: { control: 0, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Dự án có thể hoàn thành 100% kỹ thuật nhưng sẽ thất bại thảm hại khi chuyển giao vận hành (Handover) vì người dùng cuối tẩy chay hệ thống.'
        }
      ],
      script: 'Mẫu câu gặp riêng 1–1: "Anh là người hiểu thực tế kho mình nhất, nếu thiếu góc nhìn của anh thì bên IT chắc chắn sẽ làm ra cái khó dùng cho anh em. Em muốn hỏi thật: điều gì ở hệ thống mới khiến anh thấy lo nhất cho tiến độ xuất nhập hàng hàng ngày của phòng mình? Mình cùng đưa điều đó thành tiêu chí nghiệm thu bắt buộc luôn anh nhé."'
    },
    {
      id: 'sc-03',
      phase: 'Pha 02 · Planning',
      tag: 'Magic Triangle & CPM',
      title: 'Tình huống 3: Bị ép cắt 30% thời gian nhưng giữ nguyên Scope & Budget',
      situation: 'Bạn vừa hoàn tất cây WBS và tính mạng CPM ra tổng thời lượng tối thiểu (Đường găng) là 20 tuần với ngân sách 2 tỷ. Ban Giám đốc yêu cầu: "Phải xong trong 14 tuần để kịp hội chợ, nhưng không cắt tính năng nào và ngân sách giữ nguyên 2 tỷ!"',
      choices: [
        {
          label: 'Gật đầu cam kết 14 tuần rồi về thúc ép cả đội tăng ca cuối tuần với hy vọng "cố gắng sẽ kịp".',
          score: { control: 0, relation: 1, process: 0 },
          verdict: 'bad',
          feedback: 'Vi phạm nghiêm trọng nguyên lý Tam giác Ma thuật! "Hy vọng không phải là một chiến lược lập kế hoạch". Kết quả tất yếu là kiệt sức, lỗi chất lượng nghiêm trọng và vẫn trễ hạn hội chợ trong sự bất ngờ của Ban lãnh đạo.'
        },
        {
          label: 'Trình bày trực quan biểu đồ Đường găng CPM và đề xuất 3 phương án đánh đổi rõ ràng: (A) Giữ 14 tuần & 2 tỷ → cắt 30% Scope sang Phase 2 (ra bản MVP đúng hội chợ); (B) Giữ 14 tuần & đủ Scope → tăng ngân sách 350tr thuê thêm nhân sự (Crashing) + chạy song song (Fast-tracking) kèm rủi ro; (C) Giữ đủ Scope & 2 tỷ → chấp nhận mốc 20 tuần.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Đỉnh cao bản lĩnh PM chuyên nghiệp! Bạn không nói "Không làm được" một cách tiêu cực, mà dùng dữ liệu Đường găng & Tam giác Ma thuật để trao quyền lựa chọn kinh doanh minh bạch cho Ban Giám đốc.'
        },
        {
          label: 'Cắt bớt toàn bộ thời gian kiểm thử (Testing & UAT) từ 5 tuần xuống còn 3 ngày để biểu đồ Gantt khớp đúng 14 tuần.',
          score: { control: 0, relation: 1, process: 0 },
          verdict: 'bad',
          feedback: 'Cắt bỏ giai đoạn kiểm thử để "làm đẹp Gantt" là tự sát về chất lượng — lỗi sẽ nổ tung ngay tại hội chợ và phá hủy uy tín doanh nghiệp.'
        }
      ],
      script: 'Mẫu trình bày Ban Giám đốc: "Theo phân tích Đường găng thực tế, để làm đủ 100% tính năng an toàn cần 20 tuần. Để chắc chắn có sản phẩm trình diễn mượt mà đúng ngày hội chợ (tuần 14), em đề xuất Phương án A (khuyến nghị): đóng gói 70% tính năng cốt lõi (MVP) lên kịp tuần 14 trong đúng 2 tỷ, còn 30% báo cáo nội bộ bàn giao tiếp vào tuần 20. Anh chị chọn phương án A hay tăng ngân sách theo phương án B ạ?"'
    },
    {
      id: 'sc-04',
      phase: 'Pha 02 · Planning',
      tag: 'Matrix Organization',
      title: 'Tình huống 4: Xung đột nguồn lực trong Tổ chức Ma trận (Matrix)',
      situation: 'Công ty bạn vận hành theo mô hình Weak/Balanced Matrix. Chuyên gia Kiến trúc dữ liệu duy nhất của dự án (đang giữ gói công việc trên Đường găng) bất ngờ bị Trưởng phòng CNTT (Line Manager) kéo đi xử lý sự cố vận hành suốt 1 tuần mà không báo trước cho bạn.',
      choices: [
        {
          label: 'Gọi điện tranh cãi gay gắt với chuyên gia đó, nhắc rằng bạn là PM của dự án.',
          score: { control: 0, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Đổ lỗi sai người! Trong tổ chức Matrix, nhân sự rơi vào thế "2 sếp" cực kỳ khó xử. Quát mắng nhân sự sẽ làm hỏng tinh thần đội nhóm mà không giải quyết được gốc rễ ưu tiên nguồn lực.'
        },
        {
          label: 'Trao đổi trực tiếp với Line Manager kèm dữ liệu tác động Đường găng ("vắng 1 tuần = trễ Go-Live 1 tuần"), tìm giải pháp chia tải (ví dụ 50% sáng/chiều hoặc mượn người thay thế), và chỉ leo thang lên Sponsor khi hai bên không tìm được tiếng nói chung.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Hoàn toàn chuẩn xác! Trong mô hình Ma trận, kỹ năng thương lượng ngang cấp với Line Manager bằng dữ liệu khách quan (Float = 0) là kỹ năng sinh tồn của PM. Chỉ leo thang lên Sponsor khi xung đột vượt tầm phòng ban.'
        },
        {
          label: 'Im lặng chấp nhận để giữ hòa khí và tự lùi lịch dự án 1 tuần mà không báo ai.',
          score: { control: 0, relation: 2, process: 0 },
          verdict: 'bad',
          feedback: 'Giấu rủi ro trễ đường găng sẽ tạo hiệu ứng domino và khiến Sponsor bị sốc khi báo cáo cuối kỳ.'
        }
      ],
      script: 'Mẫu trao đổi Line Manager: "Anh ơi, em biết sự cố vận hành bên mình đang rất gấp. Hiện anh Nam đang nắm gói API nằm đúng trên Đường găng (Float = 0), nên mỗi ngày anh ấy vắng sẽ đẩy lùi ngày Go-Live cam kết với khách hàng đúng 1 ngày. Mình có thể thống nhất anh Nam hỗ trợ xử lý sự cố trong 2 ngày đầu, rồi từ thứ Tư bàn giao lại cho bạn Hưng theo dõi tiếp để quay lại dự án được không anh?"'
    },
    {
      id: 'sc-05',
      phase: 'Pha 03 · Execution & Controlling',
      tag: 'EVM & RAG Escalation',
      title: 'Tình huống 5: Tháng thứ 3 báo động Đỏ (SPI = 0.82, CPI = 0.86) — Báo cáo thế nào?',
      situation: 'Dữ liệu EVM tháng thứ 3 cho thấy dự án vừa chậm tiến độ 18% (SPI = 0.82) vừa vượt chi phí 14% (CPI = 0.86), đường MTA đi lên 3 kỳ liên tiếp. Sắp tới phiên họp Ban chỉ đạo (Steering Committee). Đồng nghiệp khuyên bạn: "Cứ để đèn Vàng (Amber) thôi cho đỡ bị sếp mắng, tháng sau cố chạy bù!"',
      choices: [
        {
          label: 'Nghe lời đồng nghiệp: tô màu đèn Vàng (Watermelon Report — ngoài xanh/vàng, trong ruột đỏ rực) để tránh áp lực trong cuộc họp.',
          score: { control: 0, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Hội chứng "Báo cáo Dưa hấu" (Watermelon Project) là tội lỗi lớn nhất của PM! Che giấu trạng thái Đỏ khiến Ban chỉ đạo mất cơ hội can thiệp sớm khi còn cứu được, đến khi vỡ lở thì không thể cứu vãn.'
        },
        {
          label: 'Báo cáo trung thực trạng thái ĐỎ (RED) kèm biểu đồ EVM/MTA rõ ràng, chỉ ra nguyên nhân gốc rễ và trình sẵn 2–3 phương án khắc phục có phân tích chi phí–lợi ích để Ban chỉ đạo chọn quyết định ngay tại họp.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Chuẩn vàng của Project Controlling! Quy tắc bất di bất dịch với trạng thái RED là: KHÔNG BAO GIỜ chỉ mang "vấn đề" lên Ban chỉ đạo — hãy mang "vấn đề + dữ liệu định lượng + các phương án giải pháp kèm khuyến nghị".'
        },
        {
          label: 'Báo cáo đèn Đỏ nhưng chỉ liệt kê một loạt lý do khách quan đổ lỗi cho đối tác và đội kỹ thuật, rồi hỏi Ban chỉ đạo "giờ các sếp tính sao?".',
          score: { control: 1, relation: 0, process: 1 },
          verdict: 'warn',
          feedback: 'Trung thực là tốt, nhưng đẩy ngược bài toán mà thiếu phân tích nguyên nhân gốc rễ và đề xuất giải pháp cho thấy sự thiếu chủ động của PM.'
        }
      ],
      script: 'Mẫu mở đầu báo cáo RED trước Ban chỉ đạo: "Thưa các anh chị, kỳ này dự án chuyển sang trạng thái ĐỎ (SPI 0.82, CPI 0.86) chủ yếu do API từ đối tác chậm 2,5 tuần. Nếu không can thiệp, dự án sẽ vượt 280tr và trễ 3 tuần. Em đã phân tích 2 phương án xử lý: Phương án 1 (Khuyến nghị) dùng 90tr quỹ dự phòng + chạy song song test để kéo về đúng hạn; Phương án 2 cắt 2 báo cáo phụ để giữ nguyên ngân sách. Xin Ban chỉ đạo phê duyệt phương án 1 hôm nay."'
    },
    {
      id: 'sc-06',
      phase: 'Pha 03 · Execution & Controlling',
      tag: 'Change Control (CCB)',
      title: 'Tình huống 6: Khách hàng nhắn Zalo nhờ Dev thêm tính năng "nhỏ xíu thôi"',
      situation: 'Bạn phát hiện anh Lead Dev đang âm thầm code thêm một màn hình xuất báo cáo Excel tùy biến vì người dùng bên khách hàng nhắn tin Zalo nhờ vả trực tiếp: "Làm giúp anh xíu thôi, có 2 ngày công ấy mà, khỏi cần viết phiếu thay đổi rườm rà!".',
      choices: [
        {
          label: 'Mặc kệ cho Dev làm luôn vì 2 ngày công không đáng kể, làm vui lòng khách hàng là chính.',
          score: { control: 0, relation: 2, process: 0 },
          verdict: 'bad',
          feedback: 'Đây là "Gold Plating" & "Informal Change" — tiền lệ cực kỳ nguy hiểm! Hôm nay 2 ngày, tuần sau thêm 5 yêu cầu "nhỏ xíu" nữa sẽ thành 20 ngày công không ngân sách, không kiểm thử kỹ và kéo chậm các gói việc chính.'
        },
        {
          label: 'Yêu cầu Dev tạm dừng phần phát sinh, giải thích nhẹ nhàng cho cả Dev và Khách hàng về quy trình Change Request (CR): ghi nhận vào Change Log, đánh giá tác động (2 ngày công + test), rồi cho Sponsor khách hàng chọn: duyệt cộng thêm chi phí/thời gian, đổi ngang với 1 tính năng ít quan trọng khác, hoặc đưa vào Phase 2.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Xử lý mẫu mực! Bạn không từ chối thô bạo nhu cầu chính đáng của khách hàng, mà đưa nó vào đúng kênh minh bạch (Change Control) để bảo vệ cả đội ngũ lẫn kỳ vọng của Sponsor khách hàng.'
        },
        {
          label: 'Gửi email chính thức trách mắng khách hàng vì vi phạm quy trình giao tiếp và làm việc vòng qua PM.',
          score: { control: 1, relation: 0, process: 2 },
          verdict: 'warn',
          feedback: 'Đúng lý nhưng mất tình. Khách hàng thường không cố ý phá quy trình, họ chỉ muốn nhanh việc. Hãy định hướng lại kênh giao tiếp một cách mềm dẻo, chuyên nghiệp.'
        }
      ],
      script: 'Mẫu tin nhắn gửi Khách hàng: "Anh ơi, em có nghe bạn kỹ thuật trao đổi về nhu cầu xuất Excel tùy biến rất hay của bên mình. Để đảm bảo tính năng này được test kỹ và không ảnh hưởng tiến độ bàn giao chính tuần tới, em xin ghi nhận thành phiếu CR-07 (ước tính 2 ngày công + 0.5 ngày test). Mình chọn phương án đổi ngang với báo cáo phụ X để không phát sinh phí, hay để em đưa vào đợt cập nhật ngay sau Go-Live anh nhé?"'
    },
    {
      id: 'sc-07',
      phase: 'Pha 03 · Hybrid (Dechange Form 2/3)',
      tag: 'Synchronization Points',
      title: 'Tình huống 7: Lệch pha giữa đội Cơ khí (Waterfall) và đội Phần mềm (Scrum)',
      situation: 'Trong dự án Hybrid (Dạng 3 của Dechange — Máy bán hàng thông minh), đội Phần cứng làm theo Stage-Gate chốt bản vẽ cảm biến mỗi 2 tháng, còn đội Phần mềm chạy Scrum Sprint 2 tuần. Kết quả: đến cuối tháng thứ 4, code điều khiển của đội Scrum không chạy được trên bo mạch mới vì hai bên dùng 2 phiên bản giao thức khác nhau!',
      choices: [
        {
          label: 'Bắt đội Phần mềm bỏ Scrum chuyển hẳn sang Waterfall giống đội Phần cứng.',
          score: { control: 1, relation: 0, process: 1 },
          verdict: 'bad',
          feedback: 'Đánh mất toàn bộ lợi thế thích nghi nhanh của phần mềm và làm chậm tốc độ cải tiến UX/thanh toán.'
        },
        {
          label: 'Thiết lập Synchronization Points (Điểm đồng bộ) định kỳ mỗi 4 tuần (tức 2 Sprint = 1 mốc tích hợp), khóa Hợp đồng giao diện (Interface Contract) giữa Hardware & Software, và lập buổi Cross-Stream Sync hàng tuần giữa Tech Lead hai bên.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Chính xác tinh thần Chương 4 của André Dechange! Chìa khóa thành công của Hybrid Dạng 3 không phải ép hai bên làm giống nhau, mà là thiết kế các Điểm đồng bộ (Synchronization Points) và quản trị phụ thuộc giao diện (Interface Management) chặt chẽ.'
        },
        {
          label: 'Để hai đội tiếp tục chạy độc lập, dồn toàn bộ việc ghép nối vào tháng cuối cùng trước bàn giao.',
          score: { control: 0, relation: 1, process: 0 },
          verdict: 'bad',
          feedback: 'Tích hợp kiểu "Big Bang" ở tháng cuối là công thức chắc chắn dẫn tới thảm họa trễ hạn khi làm dự án đa ngành.'
        }
      ],
      script: 'Mẫu thống nhất cơ chế Hybrid: "Mỗi đội vẫn giữ nhịp làm việc tối ưu của mình (Cơ khí giữ Stage-Gate, Phần mềm giữ Sprint 2 tuần). Tuy nhiên từ tuần này, cứ cuối mỗi Sprint chẵn (4 tuần/lần) sẽ là Synchronization Point bắt buộc: cả hai bên ghép thử trên bộ giả lập/mẫu mạch thực tế dựa trên bản đặc tả giao thức v2 đã khóa chung."'
    },
    {
      id: 'sc-08',
      phase: 'Pha 03 · Hybrid (Dechange Form 4)',
      tag: 'Agile + Trad Reporting',
      title: 'Tình huống 8: Ban Giám đốc bắt đội Scrum báo cáo Gantt chi tiết từng ngày',
      situation: 'Đội sản phẩm số của bạn chạy Scrum rất hiệu quả, nhưng CFO và Ban Giám đốc (vốn quen quản trị truyền thống) yêu cầu: "Tuần nào cũng phải gửi tôi biểu đồ Gantt chi tiết 150 đầu việc con cho 6 tháng tới, không thì tôi không duyệt giải ngân quý sau!"',
      choices: [
        {
          label: 'Bắt cả đội Developers & Scrum Master dành mỗi thứ Sáu để điền % hoàn thành vào file MS Project 150 dòng nhằm chiều lòng CFO.',
          score: { control: 1, relation: 2, process: 0 },
          verdict: 'bad',
          feedback: 'Tạo ra "gánh nặng hành chính kép" (Hybrid tồi tệ nhất mà Dechange cảnh báo): đội kỹ thuật mất năng suất để tạo ra các con số ảo vốn thay đổi liên tục mỗi Sprint.'
        },
        {
          label: 'Áp dụng Hybrid Dạng 4 (Agile Framework + Traditional Methods): PM làm "lớp phiên dịch quản trị" — giữ nguyên Scrum cho đội phát triển, nhưng tự quy đổi Release Roadmap, Velocity & Burnup Chart sang Master Milestone Plan (MTA) + Budget Burn + RAG Report cấp cao cho CFO.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Tuyệt vời! Bạn hiểu nhu cầu thật đằng sau yêu cầu của CFO không phải 150 dòng Gantt, mà là "sự an tâm về dòng tiền, mốc phát hành và rủi ro". Lớp phiên dịch quản trị (Governance Translation Layer) bảo vệ sự tinh gọn của đội Agile mà vẫn thỏa mãn hoàn toàn Ban lãnh đạo.'
        },
        {
          label: 'Gửi thẳng link Jira Backlog cho CFO và nói "Bây giờ thời đại Agile rồi, không ai dùng Gantt nữa đâu anh".',
          score: { control: 0, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Thái độ giáo điều Agile sẽ lập tức gây phản ứng ngược và làm dự án mất nguồn tài trợ từ CFO.'
        }
      ],
      script: 'Mẫu trao đổi với CFO: "Em hiểu anh cần nắm chắc tiến độ giải ngân và mốc ra mắt sản phẩm từng quý. Thay vì bảng 150 dòng chi tiết kỹ thuật hay đổi mỗi tuần, em xin gửi anh bảng Executive Dashboard 1 trang mỗi tháng gồm: 5 Cột mốc chiến lược (MTA), biểu đồ giải ngân thực tế vs. ngân sách quý (Burn Chart), và Top 3 rủi ro kèm trạng thái RAG. Như vậy anh xem 3 phút là nắm hết sức khỏe tài chính dự án ạ."'
    },
    {
      id: 'sc-09',
      phase: 'Pha 04 · Handover & Closure',
      tag: 'Abnahme & Punch List',
      title: 'Tình huống 9: Sát ngày Go-Live còn 3 lỗi Minor — Khách hàng dọa không ký Nghiệm thu',
      situation: 'Dự án đã qua UAT với 98% kịch bản đạt, toàn bộ chức năng kinh doanh lõi chạy ổn định. Tuy nhiên còn 3 lỗi hiển thị giao diện nhỏ (mức Minor: lệch lề bảng trên màn hình nhỏ, sai dấu tiếng Việt ở 1 nút phụ). Đại diện khách hàng nói: "Chưa sạch 100% lỗi thì chúng tôi chưa ký Biên bản nghiệm thu (Abnahme) và chưa thanh toán đợt cuối!"',
      choices: [
        {
          label: 'Hoãn Go-Live và treo biên bản nghiệm thu vô thời hạn dù khách hàng đang rất cần hệ thống cho mùa cao điểm.',
          score: { control: 1, relation: 1, process: 1 },
          verdict: 'warn',
          feedback: 'Làm chậm giá trị kinh doanh của chính khách hàng và khiến chi phí duy trì đội dự án kéo dài không cần thiết.'
        },
        {
          label: 'Đề xuất ký Biên bản Nghiệm thu có điều kiện (Conditional Acceptance / Abnahme) kèm phụ lục Punch List chính thức ghi rõ 3 lỗi Minor, người chịu trách nhiệm, cam kết sửa xong trong 5 ngày làm việc (trong giai đoạn Hypercare), đồng thời chốt rõ điều kiện giải ngân.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Giải pháp thương mại & quản trị chuẩn xác nhất ở Gate 4! Cơ chế Abnahme + Punch List đảm bảo khách hàng được đưa hệ thống vào tạo doanh thu ngay, vẫn có ràng buộc pháp lý buộc nhà cung cấp sửa dứt điểm 3 lỗi nhỏ, còn PM đóng được dự án đúng hạn.'
        },
        {
          label: 'Tranh cãi rằng 3 lỗi đó quá nhỏ nên không cần sửa nữa và yêu cầu họ phải ký vô điều kiện.',
          score: { control: 0, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Phá vỡ niềm tin vào phút chót (hiệu ứng Peak-End Rule): ấn tượng xấu lúc bàn giao sẽ xóa sạch mọi nỗ lực suốt 6 tháng trước đó.'
        }
      ],
      script: 'Mẫu đàm phán Biên bản Abnahme: "Anh yên tâm, bên em cam kết xử lý sạch cả 3 lỗi hiển thị nhỏ này. Vì toàn bộ luồng bán hàng lõi đã đạt 100% UAT và bên mình cần Go-Live đầu tuần sau, em đề xuất mình ký Biên bản Nghiệm thu kèm Phụ lục Punch List ghi rõ 3 mục này và hạn đóng trước thứ Sáu tuần tới. Đóng đủ 3 mục này xong bên em mới làm thủ tục thanh toán đợt cuối (hoặc giữ lại 5% bảo hành). Rất minh bạch cho cả hai bên anh nhé!"'
    },
    {
      id: 'sc-10',
      phase: 'Module 6 · Soft Skills',
      tag: 'Storming & 4-Ears Model',
      title: 'Tình huống 10: Tech Lead và BA tranh cãi nảy lửa trước mặt cả nhóm',
      situation: 'Ở tuần thứ 4 dự án (giai đoạn Storming của Tuckman), trong buổi họp nhóm, Tech Lead lớn tiếng nói với BA: "Tài liệu đặc tả viết kiểu gì mà mơ hồ thế này, không ai code nổi!". BA đáp trả gay gắt: "Đội kỹ thuật chẳng bao giờ chịu đọc kỹ nghiệp vụ!". Cả phòng họp im phăng phắc, căng thẳng tột độ.',
      choices: [
        {
          label: 'Quát cả hai im lặng, kết thúc cuộc họp ngay và tự mình sửa tài liệu cho xong.',
          score: { control: 1, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Đàn áp xung đột không làm nó biến mất mà đẩy nó xuống ngầm; tự làm thay công việc của đội ngũ còn khiến PM kiệt sức và mất vai trò điều phối.'
        },
        {
          label: 'Bình tĩnh hạ nhiệt (tách Con người khỏi Vấn đề), sử dụng Mô hình 4 tai để làm rõ nhu cầu thực (Tech Lead cần ví dụ dữ liệu mẫu; BA cần kỹ thuật phản hồi sớm trước khi chốt), sau đó dẫn dắt hai bên cùng thống nhất 1 quy ước chung (Definition of Ready / Working Agreement) để nhóm chuyển sang giai đoạn Norming.',
          score: { control: 3, relation: 3, process: 3 },
          verdict: 'best',
          feedback: 'Bản lĩnh lãnh đạo & giải quyết xung đột chuẩn Chương 5 của Dechange! Bạn chuyển hóa một xung đột cảm tính (lớp Mối quan hệ) về lại bài toán quy trình khách quan (lớp Sự thật & Lời kêu gọi) để cả đội trưởng thành hơn.'
        },
        {
          label: 'Đứng hẳn về phía Tech Lead vì thấy tài liệu đúng là còn thiếu chi tiết, phê bình BA trước cả nhóm.',
          score: { control: 0, relation: 0, process: 0 },
          verdict: 'bad',
          feedback: 'Thiên vị và phê bình công khai phá hủy an toàn tâm lý (Psychological Safety) của cả nhóm.'
        }
      ],
      script: 'Mẫu điều phối ngay tại phòng họp: "Mọi người dừng lại 1 phút nhé — cả hai bên đều đang muốn sản phẩm làm ra ít lỗi nhất. Mình tách vấn đề ra khỏi cá nhân nhé: cụ thể ở mục X, đội Dev đang cần bổ sung thêm thông tin gì (ví dụ bảng mã lỗi, dữ liệu mẫu) để code trôi chảy? Và anh em Dev có thể dành 20 phút review nháp cùng BA trước mỗi mốc chốt để đỡ phải sửa lại không? Mình ghi luôn thành quy ước chung của nhóm nhé!"'
    }
  ];
})();
