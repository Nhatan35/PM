/* ==========================================================================
   Unified Live Project Store (v3.1 Practice-First)
   Connects Stage 1 (Initiation) -> Stage 2 (Planning) -> Stage 3 (Execution)
   -> Stage 4 (Handover & Closure) with Presets, Buggy Drill Mode & CPM Engine
   ========================================================================== */
(function () {
  const PROJ_KEY = 'pm_live_project_v31';
  const MULTI_KEY = 'pm_multi_projects_v32';

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /* ------------------------------------------------------------------------
     Shared CPM Solver (used across Stage 2 Planning & Stage 3 Execution)
     ------------------------------------------------------------------------ */
  function solveCPM(wbsList) {
    const list = (wbsList || []).map(t => ({
      ...t,
      dur: Math.max(1, Number(t.dur) || 1),
      cost: Math.max(0, Number(t.cost) || 0),
      preds: Array.isArray(t.preds) ? t.preds : [],
      es: 0, ef: 0, ls: 0, lf: 0, float: 0, critical: false, succs: []
    }));
    const map = {};
    list.forEach(t => { map[t.id] = t; });
    list.forEach(t => {
      t.preds = t.preds.filter(p => map[p] && p !== t.id);
      t.preds.forEach(p => map[p].succs.push(t.id));
    });

    // Topological-safe multi-pass forward calculation (handles out-of-order edits)
    for (let pass = 0; pass < list.length + 2; pass++) {
      list.forEach(t => {
        t.es = t.preds.length ? Math.max(...t.preds.map(p => map[p].ef)) : 0;
        t.ef = t.es + t.dur;
      });
    }

    const totalDuration = Math.max(...list.map(t => t.ef), 1);

    // Multi-pass backward calculation
    list.forEach(t => { t.lf = totalDuration; t.ls = totalDuration - t.dur; });
    for (let pass = 0; pass < list.length + 2; pass++) {
      [...list].reverse().forEach(t => {
        t.lf = t.succs.length ? Math.min(...t.succs.map(s => map[s].ls)) : totalDuration;
        t.ls = t.lf - t.dur;
        t.float = Math.max(0, t.lf - t.ef);
        t.critical = t.float === 0;
      });
    }

    const totalCost = list.reduce((acc, t) => acc + t.cost, 0);
    const critPath = list.filter(t => t.critical).map(t => t.id);
    return { tasks: list, totalDuration, totalCost, critPath };
  }

  /* ------------------------------------------------------------------------
     Presets: Guided NexusPortal, Buggy Drill, SmartFactory 4.0, Custom Project
     ------------------------------------------------------------------------ */
  function createPreset(presetId) {
    if (presetId === 'buggy') {
      const p = createPreset('nexusportal');
      p.presetId = 'buggy';
      p.meta.name = 'NexusPortal (Hồ sơ Gài Lỗi — Hãy Tự Tìm & Sửa!)';
      p.charter.smartGoal = 'Làm cổng đặt hàng B2B cho đẹp và tốt hơn hiện tại càng nhanh càng tốt.';
      p.charter.nonGoals = ['']; // Missing Non-Goals!
      p.charter.sponsor = '';
      p.stakeholders[1].strategy = 'Monitor'; // Wrong strategy for CFO (Power 5)!
      p.raci['WP2'] = { Sponsor: 'I', PM: 'A', BA: 'A', Tech: 'C', QA: 'I' }; // 2 A's error!
      p.raci['WP4'] = { Sponsor: 'I', PM: 'C', BA: 'I', Tech: 'R', QA: 'I' }; // 0 A error!
      p.wbs[3].cost = 950; // Pushes WBS total over Charter budget!
      p.gates = { g1: false, g2: false, g3: false, g4: false };
      return p;
    }

    if (presetId === 'smartfactory') {
      return {
        presetId: 'smartfactory',
        meta: {
          name: 'SmartFactory Line 4.0 (Dây chuyền Cơ khí + Phần mềm MES)',
          code: 'PRJ-SF-2026',
          industry: 'Sản xuất Công nghiệp (GMP)',
          approach: 'hybrid_f3', // Fully Combined
          approachLabel: 'Hybrid Dạng 3: Fully Combined (Cơ khí Stage-Gate + MES Scrum)'
        },
        projectworthiness: { budget: 3, novelty: 3, crossFunc: 3, risk: 3, strategic: 3 },
        charter: {
          sponsor: 'Ông Trần Minh Đức — Giám đốc Nhà máy',
          pm: 'Bạn (Overall Project Manager)',
          budgetCap: 14500, // triệu VNĐ
          targetWeeks: 36,
          businessNeed: 'Nâng năng suất đóng gói từ 1.200 lên 2.200 hộp/giờ và số hóa truy xuất lô tự động đạt chuẩn kiểm toán GMP-WHO.',
          smartGoal: 'Lắp đặt dây chuyền đóng gói tự động tích hợp phần mềm MES trong vòng 36 tuần, ngân sách tối đa 14.500 triệu VNĐ, đạt năng suất >= 2.200 hộp/giờ và 100% truy xuất lô tự động.',
          deliverables: [
            'Dây chuyền đóng gói cơ khí hoàn chỉnh đạt chuẩn phòng sạch GMP',
            'Phần mềm MES giám sát OEE & truy xuất lô tích hợp PLC (OPC-UA)',
            'Hồ sơ thẩm định IQ/OQ/PQ/CSV và đào tạo 25 công nhân vận hành'
          ],
          nonGoals: [
            'KHÔNG thay thế hệ thống ERP kế toán hiện hữu của tập đoàn',
            'KHÔNG xây mới nhà xưởng — lắp đặt trong phòng sạch hiện có'
          ],
          authority: 'PM được chủ động sử dụng quỹ dự phòng rủi ro tối đa 5% và điều phối 4 Synchronization Points giữa nhà thầu cơ khí và đội MES.'
        },
        stakeholders: [
          { id: 's1', name: 'Giám đốc Nhà máy (Sponsor)', power: 5, interest: 5, attitude: 'Ủng hộ', strategy: 'Manage Closely' },
          { id: 's2', name: 'Trưởng phòng QA / GMP', power: 5, interest: 4, attitude: 'Trung lập', strategy: 'Manage Closely' },
          { id: 's3', name: 'Giám đốc Tài chính (CFO)', power: 5, interest: 2, attitude: 'Trung lập', strategy: 'Keep Satisfied' },
          { id: 's4', name: 'Đội Công nhân Vận hành', power: 2, interest: 5, attitude: 'Lo ngại', strategy: 'Keep Informed' }
        ],
        kickoff: [true, true, true, true, true],
        wbs: [
          { id: 'WP1', name: '1.1 Charter, Hợp đồng & Khóa chuẩn OPC-UA', dur: 4, cost: 600, preds: [], o: 3, m: 4, p: 6, status: 'backlog', progress: 0, stream: 'Traditional' },
          { id: 'WP2', name: '1.2 Chế tạo & Giao máy cơ khí (Đức)', dur: 14, cost: 8500, preds: ['WP1'], o: 12, m: 14, p: 18, status: 'backlog', progress: 0, stream: 'Traditional' },
          { id: 'WP3', name: '1.3 Xây PLC Simulator & Sprint MES Lõi', dur: 10, cost: 1800, preds: ['WP1'], o: 8, m: 10, p: 13, status: 'backlog', progress: 0, stream: 'Agile Sprint' },
          { id: 'WP4', name: '1.4 Lắp đặt Cơ khí & Tích hợp MES (SAT)', dur: 8, cost: 1900, preds: ['WP2', 'WP3'], o: 6, m: 8, p: 11, status: 'backlog', progress: 0, stream: 'Sync Point' },
          { id: 'WP5', name: '1.5 Thẩm định GMP, Đào tạo & Abnahme', dur: 5, cost: 900, preds: ['WP4'], o: 4, m: 5, p: 7, status: 'backlog', progress: 0, stream: 'Traditional' }
        ],
        raciRoles: ['Sponsor', 'PM', 'BA', 'Tech', 'QA'],
        raci: {
          WP1: { Sponsor: 'A', PM: 'R', BA: 'C', Tech: 'C', QA: 'I' },
          WP2: { Sponsor: 'I', PM: 'A', BA: 'I', Tech: 'R', QA: 'C' },
          WP3: { Sponsor: 'I', PM: 'A', BA: 'R', Tech: 'R', QA: 'C' },
          WP4: { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'R', QA: 'R' },
          WP5: { Sponsor: 'A', PM: 'R', BA: 'I', Tech: 'C', QA: 'R' }
        },
        risks: [
          { id: 'R1', text: 'Tàu chở máy từ Đức kẹt cảng → Trễ mốc lắp đặt SAT 3 tuần', prob: 3, impact: 5, costImpact: 1200, strategy: 'Mitigate', owner: 'PM', plan: 'Xây PLC Simulator để đội MES test trước & chuẩn bị mặt bằng sẵn sàng' },
          { id: 'R2', text: 'Tín hiệu PLC sai lệch chuẩn OPC-UA → Không ghép được MES', prob: 3, impact: 4, costImpact: 600, strategy: 'Avoid', owner: 'Tech', plan: 'Khóa Interface Contract ở Tuần 4 & chạy kiểm thử FAT từ xa' }
        ],
        gates: { g1: false, g2: false, g3: false, g4: false },
        baseline: null,
        execution: {
          mode: 'sim',
          cycle: 0,
          wipLimit: 3,
          actualCost: 0,
          teamMorale: 85,
          stakeholderSat: 85,
          mtaHistory: [],
          evmHistory: [],
          eventsResolved: {},
          changeRequests: []
        },
        handover: {
          uatClassified: {},
          checklist: [false, false, false, false, false, false],
          lessons: [
            { phase: 'Planning', good: 'Xây PLC Simulator sớm giúp 2 luồng không chờ nhau', improve: 'Cần khóa hợp đồng giao diện sớm hơn 1 tuần' }
          ],
          accepted: false
        }
      };
    }

    if (presetId === 'custom') {
      return {
        presetId: 'custom',
        meta: {
          name: 'Dự án Thực tế Của Tôi',
          code: 'PRJ-MY-2026',
          industry: 'Tùy chỉnh',
          approach: 'hybrid_f2',
          approachLabel: 'Hybrid Dạng 2: Traditional Framework + Agile Phases'
        },
        projectworthiness: { budget: 2, novelty: 2, crossFunc: 2, risk: 2, strategic: 2 },
        charter: {
          sponsor: '',
          pm: 'Bạn (Project Manager)',
          budgetCap: 1000,
          targetWeeks: 16,
          businessNeed: '',
          smartGoal: '',
          deliverables: ['Sản phẩm / Kết quả chính 1', 'Tài liệu & Đào tạo bàn giao'],
          nonGoals: ['KHÔNG bao gồm hạng mục ngoài phạm vi 1'],
          authority: 'PM chủ động điều phối công việc, báo cáo RAG hàng tuần và trình CCB khi thay đổi vượt 5% ngân sách.'
        },
        stakeholders: [
          { id: 's1', name: 'Sponsor / Sếp trực tiếp', power: 5, interest: 5, attitude: 'Ủng hộ', strategy: 'Manage Closely' },
          { id: 's2', name: 'Đại diện Người dùng cuối', power: 2, interest: 5, attitude: 'Trung lập', strategy: 'Keep Informed' }
        ],
        kickoff: [true, true, false, false, false],
        wbs: [
          { id: 'WP1', name: '1.1 Khởi tạo & Khảo sát yêu cầu', dur: 2, cost: 120, preds: [], o: 1, m: 2, p: 3, status: 'backlog', progress: 0, stream: 'Traditional' },
          { id: 'WP2', name: '1.2 Thiết kế giải pháp', dur: 3, cost: 180, preds: ['WP1'], o: 2, m: 3, p: 5, status: 'backlog', progress: 0, stream: 'Traditional' },
          { id: 'WP3', name: '1.3 Triển khai lõi (Build)', dur: 6, cost: 420, preds: ['WP2'], o: 5, m: 6, p: 9, status: 'backlog', progress: 0, stream: 'Agile Sprint' },
          { id: 'WP4', name: '1.4 Kiểm thử UAT & Bàn giao', dur: 3, cost: 150, preds: ['WP3'], o: 2, m: 3, p: 5, status: 'backlog', progress: 0, stream: 'Traditional' }
        ],
        raciRoles: ['Sponsor', 'PM', 'BA', 'Tech', 'QA'],
        raci: {
          WP1: { Sponsor: 'A', PM: 'R', BA: 'R', Tech: 'C', QA: 'I' },
          WP2: { Sponsor: 'I', PM: 'A', BA: 'R', Tech: 'C', QA: 'C' },
          WP3: { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'R', QA: 'I' },
          WP4: { Sponsor: 'A', PM: 'R', BA: 'C', Tech: 'C', QA: 'R' }
        },
        risks: [
          { id: 'R1', text: 'Yêu cầu thay đổi giữa chừng → Trượt phạm vi (Scope Creep)', prob: 3, impact: 4, costImpact: 120, strategy: 'Mitigate', owner: 'PM', plan: 'Áp dụng chặt Change Request & Scope Trade-off' }
        ],
        gates: { g1: false, g2: false, g3: false, g4: false },
        baseline: null,
        execution: {
          mode: 'real',
          cycle: 0,
          wipLimit: 3,
          actualCost: 0,
          teamMorale: 85,
          stakeholderSat: 85,
          mtaHistory: [],
          evmHistory: [],
          eventsResolved: {},
          changeRequests: []
        },
        handover: {
          uatClassified: {},
          checklist: [false, false, false, false, false, false],
          lessons: [],
          accepted: false
        }
      };
    }

    // Default: NexusPortal Guided IT (Hybrid Form 2: Water-Scrum-Fall)
    return {
      presetId: 'nexusportal',
      meta: {
        name: 'NexusPortal — Cổng Đặt Hàng Khách Hàng B2B',
        code: 'PRJ-NP-2026',
        industry: 'CNTT / Phần mềm Doanh nghiệp',
        approach: 'hybrid_f2',
        approachLabel: 'Hybrid Dạng 2: Traditional Framework + Agile Phases (Water-Scrum-Fall)'
      },
      projectworthiness: { budget: 3, novelty: 2, crossFunc: 3, risk: 3, strategic: 3 },
      charter: {
        sponsor: 'Bà Nguyễn Lan Anh — Giám đốc Kinh doanh',
        pm: 'Bạn (Project Manager)',
        budgetCap: 2400, // triệu VNĐ
        targetWeeks: 26,
        businessNeed: '85% đơn hàng đại lý đang nhập tay vào ERP mất 4,5 giờ/đơn với tỷ lệ lỗi 6,2%, gây mất đơn vào mùa cao điểm.',
        smartGoal: 'Triển khai cổng đặt hàng B2B tích hợp ERP trong vòng 26 tuần với ngân sách tối đa 2.400 triệu VNĐ, rút thời gian xử lý đơn xuống dưới 15 phút và giảm lỗi nhập liệu xuống < 0,5%.',
        deliverables: [
          'Cổng Web đặt hàng B2B & tra cứu tồn kho/công nợ thời gian thực',
          'API đồng bộ đơn hàng 2 chiều với hệ thống ERP hiện hữu',
          'Tài liệu vận hành, video hướng dẫn & đào tạo 18 Sales Admin'
        ],
        nonGoals: [
          'KHÔNG phát triển ứng dụng Mobile Native (chỉ hỗ trợ Web Responsive)',
          'KHÔNG tích hợp cổng thanh toán thẻ quốc tế trong giai đoạn 1'
        ],
        authority: 'PM quyết định điều phối nhân sự dự án, duyệt chi biến động trong phạm vi <= 5% ngân sách và trình CCB với mọi Change Request vượt ngưỡng.'
      },
      stakeholders: [
        { id: 's1', name: 'GĐ Kinh doanh (Sponsor)', power: 5, interest: 5, attitude: 'Ủng hộ', strategy: 'Manage Closely' },
        { id: 's2', name: 'Giám đốc Tài chính (CFO)', power: 5, interest: 2, attitude: 'Trung lập', strategy: 'Keep Satisfied' },
        { id: 's3', name: 'Trưởng phòng CNTT (ERP)', power: 4, interest: 4, attitude: 'Trung lập', strategy: 'Manage Closely' },
        { id: 's4', name: 'Đội Sales Admin (User)', power: 2, interest: 5, attitude: 'Lo ngại', strategy: 'Keep Informed' },
        { id: 's5', name: 'Phòng Hành chính', power: 1, interest: 2, attitude: 'Ủng hộ', strategy: 'Monitor' }
      ],
      kickoff: [true, true, true, true, true],
      wbs: [
        { id: 'WP1', name: '1.1 Khởi tạo, Charter & Kick-off', dur: 2, cost: 150, preds: [], o: 1, m: 2, p: 3, status: 'backlog', progress: 0, stream: 'Traditional' },
        { id: 'WP2', name: '1.2.1 Khảo sát & Đặc tả UX/UI', dur: 3, cost: 240, preds: ['WP1'], o: 2, m: 3, p: 5, status: 'backlog', progress: 0, stream: 'Traditional' },
        { id: 'WP3', name: '1.2.2 Kiến trúc & Technical Spike API ERP', dur: 4, cost: 310, preds: ['WP1'], o: 3, m: 4, p: 7, status: 'backlog', progress: 0, stream: 'Traditional' },
        { id: 'WP4', name: '1.3.1 Sprint 1–3: Cổng Đặt hàng & Danh mục', dur: 6, cost: 520, preds: ['WP2'], o: 5, m: 6, p: 8, status: 'backlog', progress: 0, stream: 'Agile Sprint' },
        { id: 'WP5', name: '1.3.2 Sprint 4–6: Tích hợp ERP 2 chiều', dur: 8, cost: 540, preds: ['WP3'], o: 6, m: 8, p: 12, status: 'backlog', progress: 0, stream: 'Agile Sprint' },
        { id: 'WP6', name: '1.4.1 Kiểm thử Hệ thống & Hiệu năng', dur: 3, cost: 210, preds: ['WP4', 'WP5'], o: 2, m: 3, p: 5, status: 'backlog', progress: 0, stream: 'Sync Point' },
        { id: 'WP7', name: '1.4.2 UAT, Đào tạo & Bàn giao Abnahme', dur: 4, cost: 180, preds: ['WP6'], o: 3, m: 4, p: 6, status: 'backlog', progress: 0, stream: 'Traditional' }
      ],
      raciRoles: ['Sponsor', 'PM', 'BA', 'Tech', 'QA'],
      raci: {
        WP1: { Sponsor: 'A', PM: 'R', BA: 'C', Tech: 'C', QA: 'I' },
        WP2: { Sponsor: 'I', PM: 'A', BA: 'R', Tech: 'C', QA: 'C' },
        WP3: { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'R', QA: 'I' },
        WP4: { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'R', QA: 'C' },
        WP5: { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'R', QA: 'C' },
        WP6: { Sponsor: 'I', PM: 'A', BA: 'C', Tech: 'C', QA: 'R' },
        WP7: { Sponsor: 'A', PM: 'R', BA: 'C', Tech: 'C', QA: 'R' }
      },
      risks: [
        { id: 'R1', text: 'Tài liệu API ERP cũ thiếu → Tích hợp chậm trễ đường găng 3 tuần', prob: 4, impact: 5, costImpact: 240, strategy: 'Mitigate', owner: 'Tech', plan: 'Chạy Technical Spike ở Tuần 4 & thuê chuyên gia ERP hỗ trợ' },
        { id: 'R2', text: 'Sales Admin lo ngại mất việc → Phản đối sử dụng sau Go-Live', prob: 3, impact: 4, costImpact: 120, strategy: 'Mitigate', owner: 'PM', plan: 'Mời tham gia thiết kế sớm & truyền thông vai trò mới' }
      ],
      gates: { g1: false, g2: false, g3: false, g4: false },
      baseline: null,
      execution: {
        mode: 'sim',
        cycle: 0,
        wipLimit: 3,
        actualCost: 0,
        teamMorale: 85,
        stakeholderSat: 85,
        mtaHistory: [],
        evmHistory: [],
        eventsResolved: {},
        changeRequests: []
      },
      handover: {
        uatClassified: {},
        checklist: [false, false, false, false, false, false],
        lessons: [],
        accepted: false
      }
    };
  }

  function loadStore() {
    try {
      const rawMulti = localStorage.getItem(MULTI_KEY);
      if (rawMulti) {
        const parsed = JSON.parse(rawMulti);
        if (parsed && Array.isArray(parsed.list) && parsed.list.length) return parsed;
      }
      const rawSingle = localStorage.getItem(PROJ_KEY);
      if (rawSingle) {
        const one = JSON.parse(rawSingle);
        one.uid = one.uid || 'proj_' + Date.now();
        return { activeUid: one.uid, list: [one] };
      }
    } catch {
      // fallback below
    }
    const def = createPreset('nexusportal');
    def.uid = 'proj_default_nexus';
    return { activeUid: def.uid, list: [def] };
  }

  let db = loadStore();

  function getActive() {
    let found = db.list.find(x => x.uid === db.activeUid);
    if (!found) {
      found = db.list[0];
      db.activeUid = found.uid;
    }
    return found;
  }

  function save() {
    try {
      localStorage.setItem(MULTI_KEY, JSON.stringify(db));
    } catch {
      // ignore quota
    }
    if (typeof window.PMApp.onProjectChange === 'function') {
      window.PMApp.onProjectChange(getActive());
    }
  }

  window.PMApp.projectStore = {
    get: () => getActive(),
    list: () => db.list,
    getAllData: () => clone(db),
    setAllData: (nextDb) => {
      if (nextDb && Array.isArray(nextDb.list) && nextDb.list.length) {
        db = nextDb;
        save();
      }
    },
    set: (next) => {
      const idx = db.list.findIndex(x => x.uid === db.activeUid);
      next.uid = next.uid || db.activeUid;
      if (idx >= 0) db.list[idx] = next;
      else db.list.push(next);
      db.activeUid = next.uid;
      save();
    },
    switchTo: (uid) => {
      if (db.list.some(x => x.uid === uid)) {
        db.activeUid = uid;
        save();
      }
      return getActive();
    },
    createNew: (presetId) => {
      const p = createPreset(presetId);
      p.uid = 'proj_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
      db.list.push(p);
      db.activeUid = p.uid;
      save();
      return p;
    },
    deleteProject: (uid) => {
      if (db.list.length <= 1) return false;
      db.list = db.list.filter(x => x.uid !== uid);
      if (db.activeUid === uid) db.activeUid = db.list[0].uid;
      save();
      return true;
    },
    save,
    loadPreset: (id) => {
      const p = createPreset(id);
      p.uid = db.activeUid;
      const idx = db.list.findIndex(x => x.uid === db.activeUid);
      if (idx >= 0) db.list[idx] = p;
      else db.list.push(p);
      save();
      return p;
    },
    solveCPM,
    calcEMV: (risks) => {
      const probPct = [0, 0.1, 0.25, 0.45, 0.65, 0.85];
      return Math.round((risks || []).reduce((sum, r) => sum + (probPct[r.prob] || 0.2) * (Number(r.costImpact) || 0), 0));
    },
    calcProjectworthiness: (pw) => {
      const score = (pw.budget * 0.25) + (pw.novelty * 0.25) + (pw.crossFunc * 0.20) + (pw.risk * 0.20) + (pw.strategic * 0.10);
      let cls = 'Tác vụ thường (Line Task — Không cần lập dự án)';
      let badge = 'pill-primary';
      if (score >= 2.6) { cls = 'Dự án Loại A (Chiến lược — Quy trình toàn diện + Steering Committee)'; badge = 'pill-danger'; }
      else if (score >= 2.0) { cls = 'Dự án Loại B (Trung bình — Đầy đủ Charter, WBS, CPM, Risk, Abnahme)'; badge = 'pill-hybrid'; }
      else if (score >= 1.5) { cls = 'Dự án Loại C (Nhỏ — Mini-Charter 1 trang & quy trình tinh gọn)'; badge = 'pill-trad'; }
      return { score: Number(score.toFixed(2)), cls, badge };
    },
    reviewGate1: (p) => {
      const checks = [];
      const goal = (p.charter.smartGoal || '').trim();
      const hasNumber = /\d/.test(goal);
      const hasTime = /(tuần|tháng|quý|ngày|năm|week|month)/i.test(goal);
      checks.push({ ok: (p.charter.sponsor || '').trim().length >= 3, msg: 'Đã xác định rõ Project Sponsor phê duyệt.' });
      checks.push({ ok: goal.length >= 25 && hasNumber && hasTime, msg: 'Mục tiêu SMART có con số đo lường (M) và thời hạn cụ thể (T).' });
      const validDeliv = (p.charter.deliverables || []).filter(x => x.trim().length >= 4);
      checks.push({ ok: validDeliv.length >= 2, msg: `Đã liệt kê ít nhất 2 Deliverables (In-Scope) rõ ràng (hiện có ${validDeliv.length}).` });
      const validNon = (p.charter.nonGoals || []).filter(x => x.trim().length >= 4);
      checks.push({ ok: validNon.length >= 2, msg: `Đã ghi rõ ít nhất 2 Non-Goals (Out-of-Scope) chống Scope Creep (hiện có ${validNon.length}).` });
      checks.push({ ok: Number(p.charter.budgetCap) > 0 && Number(p.charter.targetWeeks) >= 2, msg: 'Đã chốt Ngân sách khung & Thời hạn mục tiêu.' });
      const shBad = (p.stakeholders || []).filter(s => s.power >= 4 && s.strategy === 'Monitor');
      checks.push({ ok: (p.stakeholders || []).length >= 3 && shBad.length === 0, msg: shBad.length ? `Lỗi Stakeholder: "${shBad[0].name}" có Quyền lực cao (${shBad[0].power}/5) nhưng lại chọn chiến lược "Monitor"!` : 'Stakeholder Matrix hợp lệ (không bỏ sót nhóm Quyền lực cao).' });
      const passedCount = checks.filter(c => c.ok).length;
      const pct = Math.round((passedCount / checks.length) * 100);
      return { checks, passedCount, total: checks.length, pct, canPass: pct >= 83 };
    },
    reviewGate2: (p) => {
      const cpm = solveCPM(p.wbs);
      const emv = window.PMApp.projectStore.calcEMV(p.risks);
      const totalWithReserve = cpm.totalCost + emv;
      const checks = [];
      checks.push({ ok: p.wbs.length >= 4, msg: `Cây WBS có ít nhất 4 Work Packages phủ 100% phạm vi (hiện có ${p.wbs.length}).` });
      checks.push({ ok: totalWithReserve <= Number(p.charter.budgetCap), msg: `Tổng chi phí WBS (${cpm.totalCost}tr) + Dự phòng EMV (${emv}tr) = ${totalWithReserve}tr <= Trần Charter (${p.charter.budgetCap}tr).` });
      checks.push({ ok: cpm.totalDuration <= Number(p.charter.targetWeeks), msg: `Đường găng CPM (${cpm.totalDuration} tuần) <= Hạn mục tiêu Charter (${p.charter.targetWeeks} tuần).` });
      const raciErrors = p.wbs.filter(w => {
        const row = p.raci[w.id] || {};
        const vals = Object.values(row);
        return vals.filter(v => v === 'A').length !== 1 || vals.filter(v => v === 'R').length < 1;
      });
      checks.push({ ok: raciErrors.length === 0, msg: raciErrors.length ? `Lỗi RACI tại ${raciErrors.map(x => x.id).join(', ')}: Mỗi Work Package bắt buộc có DUY NHẤT 1 chữ A và ít nhất 1 chữ R!` : 'Bảng RACI hợp lệ 100% (mỗi dòng có đúng 1 Accountable & >=1 Responsible).' });
      checks.push({ ok: (p.risks || []).length >= 2, msg: `Risk Register đã nhận diện >= 2 rủi ro kèm phương án ứng phó (hiện có ${(p.risks || []).length}).` });
      const passedCount = checks.filter(c => c.ok).length;
      const pct = Math.round((passedCount / checks.length) * 100);
      return { checks, passedCount, total: checks.length, pct, canPass: passedCount === checks.length, cpm, emv, totalWithReserve };
    }
  };
})();
