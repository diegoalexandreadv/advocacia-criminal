document.getElementById('contact-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    'Olá, Dr. Diego. Gostaria de solicitar informações sobre atendimento jurídico.',
    '',
    `Nome: ${data.get('nome')}`,
    `Telefone: ${data.get('telefone')}`,
    `Assunto: ${data.get('assunto')}`,
    `Mensagem: ${data.get('mensagem')}`
  ].join('\n');
  window.open(`https://wa.me/5598984079574?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

// Animações premium: reveal on scroll + sombra da topbar (não interfere no formulário)
(function () {
  try {
    document.documentElement.classList.add('js-anim');
    var bar = document.querySelector('.topbar');
    var onScroll = function () { if (bar) bar.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (!('IntersectionObserver' in window)) return;
    var els = document.querySelectorAll('.section-heading, .cards article, .article-grid article, .about-grid > *, .about-details span, .faq-list details, .contact-form, .contact-copy, .article-body, .article-cta, .service-mode > *, .approach > *');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('revealed'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  } catch (e) { /* sem animações, site segue normal */ }
})();

// Cards inteiros clicáveis + barra de progresso de leitura
(function () {
  try {
    document.querySelectorAll('.cards article, .article-grid article').forEach(function (card) {
      var link = card.querySelector('h3 a[href], a[href]');
      if (!link) return;
      card.addEventListener('click', function (e) {
        if (e.target.closest('a, summary, button')) return;
        var href = link.getAttribute('href');
        if (link.target === '_blank') window.open(href, '_blank', 'noopener,noreferrer');
        else window.location.href = href;
      });
    });
    var setProgress = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      h.style.setProperty('--scroll', max > 0 ? (h.scrollTop / max).toFixed(4) : 0);
    };
    window.addEventListener('scroll', setProgress, { passive: true });
    setProgress();
  } catch (e) {}
})();
