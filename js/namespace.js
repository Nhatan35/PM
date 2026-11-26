/* ==========================================================================
   Global Namespace & Utilities (file:// CORS-safe architecture)
   ========================================================================== */
(function () {
  window.PMApp = {
    data: {
      lifecycle: null,
      modules: [],
      caseStudy: null,
      templates: [],
      quizzes: {},
      flashcards: []
    },
    labs: {},
    utils: {
      escapeHtml: function (str) {
        return String(str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      showToast: function (msg) {
        const el = document.getElementById('toast');
        if (!el) return;
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(el._timer);
        el._timer = setTimeout(() => el.classList.remove('show'), 2600);
      },
      downloadText: function (filename, content, mime) {
        const blob = new Blob([content], { type: mime || 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }
  };
})();
