/* ==========================================================================
   Lab 6: Quantitative PM Calculation Drills (PERT, CPM/Float, EVM, ROI, Scoring)
   Auto-graded hands-on calculation exercises with step-by-step solutions
   ========================================================================== */
(function () {
  window.PMApp.labs.drills = function (container) {
    const drills = [
      {
        id: 'd1',
        tag: 'Pha 01 · Business Case (ROI)',
        title: 'Bài 1: Tính ROI & Thời gian hoàn vốn (Payback Period)',
        prompt: 'Một dự án tự động hóa tốn tổng chi phí đầu tư ban đầu là <strong>800 triệu VNĐ</strong>. Sau khi Go-Live, hệ thống giúp công ty tiết kiệm đều đặn <strong>400 triệu VNĐ/năm</strong> trong vòng 3 năm (tổng lợi ích 1.200 triệu, lợi ích ròng = 400 triệu). Hỏi <strong>ROI (%)</strong> sau 3 năm là bao nhiêu?',
        unit: '%',
        expected: 50,
        tolerance: 0.5,
        solution: 'Lợi ích ròng = 1.200 − 800 = 400 triệu. Công thức: <code>ROI = (400 / 800) × 100% = 50%</code>. Ngoài ra, thời gian hoàn vốn Payback = 800 / 400 = <strong>2 năm</strong> (24 tháng).'
      },
      {
        id: 'd2',
        tag: 'Pha 01 · Scoring Model (Nutzwertanalyse)',
        title: 'Bài 2: Chấm điểm lựa chọn dự án có trọng số',
        prompt: 'Bạn chấm điểm Dự án Alpha theo 3 tiêu chí: (1) Hiệu quả tài chính — trọng số <strong>50%</strong>, đạt <strong>8 điểm</strong>; (2) Mức độ phù hợp chiến lược — trọng số <strong>30%</strong>, đạt <strong>6 điểm</strong>; (3) Mức độ an toàn rủi ro — trọng số <strong>20%</strong>, đạt <strong>9 điểm</strong>. Tổng điểm có trọng số của Dự án Alpha là bao nhiêu?',
        unit: 'điểm',
        expected: 7.6,
        tolerance: 0.05,
        solution: '<code>Tổng điểm = (0.5 × 8) + (0.3 × 6) + (0.2 × 9) = 4.0 + 1.8 + 1.8 = 7.6 điểm</code>.'
      },
      {
        id: 'd3',
        tag: 'Pha 02 · Ước lượng 3 điểm PERT',
        title: 'Bài 3: Tính thời lượng kỳ vọng PERT (Expected Duration)',
        prompt: 'Đội kỹ thuật ước lượng gói công việc tích hợp cổng thanh toán như sau: Lạc quan nhất <code>O = 6 ngày</code>, Khả thi nhất <code>M = 9 ngày</code>, Bi quan nhất <code>P = 18 ngày</code>. Theo công thức PERT <code>tE = (O + 4M + P) / 6</code>, thời lượng kỳ vọng <strong>tE</strong> là bao nhiêu ngày?',
        unit: 'ngày',
        expected: 10,
        tolerance: 0.1,
        solution: '<code>tE = (6 + 4×9 + 18) / 6 = (6 + 36 + 18) / 6 = 60 / 6 = 10 ngày</code>. Độ lệch chuẩn rủi ro <code>σ = (18 − 6) / 6 = 2 ngày</code> (nên cân nhắc dự phòng thêm 1–2 ngày đệm).'
      },
      {
        id: 'd4',
        tag: 'Pha 02 · CPM & Total Float',
        title: 'Bài 4: Tính Thời gian dự trữ (Total Float) của gói công việc',
        prompt: 'Một công việc trong mạng CPM có thời lượng <strong>5 ngày</strong>, thời điểm bắt đầu sớm nhất <code>ES = 4</code> và thời điểm kết thúc muộn nhất <code>LF = 12</code>. Hỏi <strong>Total Float (TF)</strong> của công việc này là bao nhiêu ngày? (và nó có nằm trên Đường găng không?)',
        unit: 'ngày',
        expected: 3,
        tolerance: 0.05,
        solution: 'Ta có <code>EF = ES + Duration = 4 + 5 = 9</code>. Do đó <code>Total Float = LF − EF = 12 − 9 = 3 ngày</code> (hoặc <code>LS = 12 − 5 = 7 → TF = 7 − 4 = 3 ngày</code>). Vì <strong>TF = 3 &gt; 0</strong> nên công việc này <strong>KHÔNG</strong> nằm trên Đường găng.'
      },
      {
        id: 'd5',
        tag: 'Pha 03 · Earned Value (SPI)',
        title: 'Bài 5: Tính Chỉ số Hiệu suất Tiến độ (SPI)',
        prompt: 'Tại tuần thứ 10, theo kế hoạch dự án phải hoàn thành khối lượng trị giá <code>PV = 500 triệu</code>. Thực tế mới hoàn thành được khối lượng trị giá <code>EV = 425 triệu</code> và đã chi <code>AC = 460 triệu</code>. Hãy tính <strong>SPI</strong> (làm tròn 2 chữ số thập phân, ví dụ 0.85).',
        unit: '',
        expected: 0.85,
        tolerance: 0.01,
        solution: '<code>SPI = EV / PV = 425 / 500 = 0.85</code> (Chậm tiến độ 15%, SV = −75 triệu). Lưu ý: Không nhầm lẫn đưa AC vào công thức SPI!'
      },
      {
        id: 'd6',
        tag: 'Pha 03 · Earned Value (EAC Forecast)',
        title: 'Bài 6: Dự báo Tổng chi phí khi hoàn thành (EAC)',
        prompt: 'Một dự án có tổng ngân sách gốc <code>BAC = 1.600 triệu</code>. Đến giữa kỳ, hiệu suất chi phí đo được là <code>CPI = 0.80</code> (tiêu 1 đồng chỉ tạo ra 0,8 đồng giá trị). Nếu không cải thiện hiệu suất, dự báo tổng chi phí cuối kỳ <strong>EAC = BAC / CPI</strong> sẽ là bao nhiêu triệu?',
        unit: 'triệu',
        expected: 2000,
        tolerance: 5,
        solution: '<code>EAC = BAC / CPI = 1.600 / 0.80 = 2.000 triệu VNĐ</code>. Nghĩa là dự án có nguy cơ <strong>vượt ngân sách 400 triệu</strong> (VAC = 1.600 − 2.000 = −400tr) — cần lập tức báo trạng thái RED và kích hoạt biện pháp khắc phục!'
      },
      {
        id: 'd7',
        tag: 'Pha 03 · Risk Quantification (EMV)',
        title: 'Bài 7: Tính Giá trị Tiền tệ Kỳ vọng của Rủi ro (EMV — Quỹ dự phòng)',
        prompt: 'Trong Risk Register có 2 rủi ro lớn: Rủi ro A (xác suất <strong>30%</strong>, thiệt hại nếu xảy ra <strong>200 triệu</strong>) và Rủi ro B (xác suất <strong>20%</strong>, thiệt hại <strong>150 triệu</strong>). Tổng quỹ dự phòng rủi ro theo phương pháp <code>EMV = Σ(P × Impact)</code> cần lập là bao nhiêu triệu?',
        unit: 'triệu',
        expected: 90,
        tolerance: 0.5,
        solution: '<code>EMV(A) = 0.30 × 200 = 60 triệu</code>; <code>EMV(B) = 0.20 × 150 = 30 triệu</code> → <strong>Tổng Contingency Reserve = 60 + 30 = 90 triệu VNĐ</strong>.'
      }
    ];

    let answers = {};
    let checked = {};

    function render() {
      const solvedCount = drills.filter(d => checked[d.id] === 'ok').length;

      container.innerHTML = `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
            <div>
              <h3 style="margin-bottom:0.2rem;">Bộ 7 Bài tập Tính toán Thực chiến (Tự chấm điểm)</h3>
              <p style="margin:0;font-size:0.84rem;">Rèn phản xạ con số của PM: <strong>ROI · Scoring Model · PERT · CPM/Float · SPI · EAC · Quỹ dự phòng EMV</strong>.</p>
            </div>
            <span class="pill ${solvedCount === drills.length ? 'pill-success' : 'pill-primary'}">Đúng ${solvedCount} / ${drills.length} bài</span>
          </div>
        </div>

        ${drills.map(d => {
          const st = checked[d.id];
          return `
            <div class="card" style="${st === 'ok' ? 'border-left:4px solid var(--success);' : st === 'err' ? 'border-left:4px solid var(--danger);' : ''}">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.45rem;">
                <span class="pill pill-primary">${d.tag}</span>
                ${st === 'ok' ? '<span class="pill pill-success">✓ Chính xác</span>' : st === 'err' ? '<span class="pill pill-danger">✕ Chưa đúng — xem lời giải</span>' : ''}
              </div>
              <h4 style="margin-bottom:0.45rem;">${d.title}</h4>
              <p style="font-size:0.88rem;">${d.prompt}</p>
              <div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap;">
                <input type="number" step="any" class="input-field" style="width:160px;" data-did="${d.id}" value="${answers[d.id] !== undefined ? answers[d.id] : ''}" placeholder="Nhập kết quả...">
                ${d.unit ? `<span style="font-size:0.86rem;font-weight:600;color:var(--text-muted);">${d.unit}</span>` : ''}
                <button class="btn btn-primary btn-sm" data-check="${d.id}">Kiểm tra</button>
                <button class="btn btn-ghost btn-sm" data-reveal="${d.id}">Xem lời giải</button>
              </div>
              ${st ? `
                <div class="callout ${st === 'ok' ? 'callout-tip' : 'callout-insight'}" style="margin-top:0.85rem;margin-bottom:0;">
                  <div class="callout-title">${st === 'ok' ? '✓ Chuẩn xác!' : '📐 Hướng dẫn giải từng bước'}</div>
                  <div>${d.solution}</div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      `;

      container.querySelectorAll('input[data-did]').forEach(inp => {
        inp.addEventListener('input', e => {
          answers[e.target.dataset.did] = e.target.value;
        });
      });

      container.querySelectorAll('[data-check]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.check;
          const d = drills.find(x => x.id === id);
          const num = parseFloat(answers[id]);
          if (Number.isNaN(num)) {
            window.PMApp.utils.showToast('Hãy nhập một con số trước khi kiểm tra!');
            return;
          }
          checked[id] = Math.abs(num - d.expected) <= d.tolerance ? 'ok' : 'err';
          render();
        });
      });

      container.querySelectorAll('[data-reveal]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.reveal;
          if (!checked[id]) checked[id] = 'hint';
          render();
        });
      });
    }

    render();
  };
})();
