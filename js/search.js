/* ==========================================================================
   Global Quick Search (Ctrl + K) across Modules, Sections, Flashcards, Labs
   ========================================================================== */
(function () {
  window.PMApp.initSearch = function (navigate) {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    const resultsEl = document.getElementById('searchResults');
    const trigger = document.getElementById('searchTrigger');

    function buildIndex() {
      const items = [];
      const data = window.PMApp.data;

      [
        { route: 'stage/1', title: 'Chặng 1: Xưởng Khởi tạo (Charter Builder, Stakeholder, Gate 1)', meta: 'Thực hành Dự án Sống · Pha 01' },
        { route: 'stage/2', title: 'Chặng 2: Xưởng Lập kế hoạch (WBS, PERT, CPM/Gantt, RACI, Risk, Gate 2)', meta: 'Thực hành Dự án Sống · Pha 02' },
        { route: 'stage/3', title: 'Chặng 3: Vận hành Sống & Hybrid (Kanban WIP, EVM/MTA, Email RAG, Gate 3)', meta: 'Thực hành Dự án Sống · Pha 03' },
        { route: 'stage/4', title: 'Chặng 4: Nghiệm thu UAT, Abnahme, Lessons Learned & Xuất Hồ sơ Dự án', meta: 'Thực hành Dự án Sống · Pha 04' }
      ].forEach(st => {
        items.push({ title: st.title, meta: st.meta, haystack: `${st.title} ${st.meta}`.toLowerCase(), route: st.route });
      });

      data.modules.forEach(m => {
        items.push({
          title: `${m.code}: ${m.title}`,
          meta: `Module học thuật · ${m.phaseTag}`,
          haystack: `${m.code} ${m.title} ${m.subtitle} ${m.summary}`.toLowerCase(),
          route: `module/${m.id}`
        });
        m.sections.forEach(s => {
          const plain = s.html.replace(/<[^>]+>/g, ' ');
          items.push({
            title: s.title,
            meta: `${m.code} · ${m.title}`,
            haystack: `${s.title} ${plain}`.toLowerCase(),
            route: `module/${m.id}`,
            anchor: s.id
          });
        });
      });

      const labMeta = [
        { id: 'stacey', title: 'Lab 1: Stacey Matrix & 5 Mô hình Hybrid (Dechange)' },
        { id: 'triangle', title: 'Lab 2: Magic Triangle Simulator (Traditional vs Agile)' },
        { id: 'stakeholder', title: 'Lab 3: Stakeholder Matrix & Phase-Gate Readiness (G1 & G4)' },
        { id: 'cpm', title: 'Lab 4: CPM Đường găng & Biểu đồ Gantt' },
        { id: 'evm', title: 'Lab 5: Earned Value (EVM) & Milestone Trend Analysis (MTA)' },
        { id: 'drills', title: 'Lab 6: Bài tập Tính toán Thực chiến (PERT, CPM, EVM, ROI, EMV)' }
      ];
      labMeta.forEach(l => {
        items.push({
          title: l.title,
          meta: 'Phòng Lab tương tác',
          haystack: l.title.toLowerCase(),
          route: `labs/${l.id}`
        });
      });

      (data.scenarios || []).forEach(sc => {
        items.push({
          title: sc.title,
          meta: `PM War Room · ${sc.phase} · ${sc.tag}`,
          haystack: `${sc.title} ${sc.phase} ${sc.tag} ${sc.situation}`.toLowerCase(),
          route: 'warroom'
        });
      });

      (data.caseStudies || []).forEach(cs => {
        items.push({
          title: cs.title,
          meta: 'Case Study thực chiến A–Z',
          haystack: `${cs.title} ${cs.subtitle} ${cs.context.problem}`.toLowerCase(),
          route: 'casestudy'
        });
      });

      data.templates.forEach(t => {
        items.push({
          title: t.name,
          meta: `Biểu mẫu thực hành · ${t.phase}`,
          haystack: `${t.name} ${t.desc} ${t.phase}`.toLowerCase(),
          route: 'templates'
        });
      });

      data.flashcards.forEach(f => {
        items.push({
          title: f.term,
          meta: `Thuật ngữ (${f.cat}) · ${f.def.slice(0, 82)}...`,
          haystack: `${f.term} ${f.def} ${f.cat}`.toLowerCase(),
          route: 'practice/flashcards'
        });
      });

      return items;
    }

    const index = buildIndex();

    function renderHits(query) {
      const q = (query || '').trim().toLowerCase();
      const hits = q
        ? index.filter(it => it.haystack.includes(q)).slice(0, 18)
        : index.slice(0, 10);

      if (!hits.length) {
        resultsEl.innerHTML = `<div style="padding:1.25rem;text-align:center;color:var(--text-muted);font-size:0.88rem;">Không tìm thấy kết quả cho "<strong>${window.PMApp.utils.escapeHtml(query)}</strong>".</div>`;
        return;
      }

      resultsEl.innerHTML = hits.map((h, i) => `
        <button class="search-hit" data-idx="${i}">
          <span class="search-hit-title">${window.PMApp.utils.escapeHtml(h.title)}</span>
          <span class="search-hit-meta">${window.PMApp.utils.escapeHtml(h.meta)}</span>
        </button>
      `).join('');

      resultsEl.querySelectorAll('.search-hit').forEach(btn => {
        btn.addEventListener('click', () => {
          const hit = hits[Number(btn.dataset.idx)];
          close();
          navigate(hit.route, hit.anchor);
        });
      });
    }

    function open() {
      modal.classList.add('open');
      input.value = '';
      renderHits('');
      setTimeout(() => input.focus(), 30);
    }

    function close() {
      modal.classList.remove('open');
    }

    trigger.addEventListener('click', open);
    modal.addEventListener('click', e => {
      if (e.target === modal) close();
    });
    input.addEventListener('input', e => renderHits(e.target.value));

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        modal.classList.contains('open') ? close() : open();
      } else if (e.key === 'Escape' && modal.classList.contains('open')) {
        close();
      }
    });
  };
})();
