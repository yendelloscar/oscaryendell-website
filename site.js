// Interaktionen der vorgerenderten Seiten (ersetzt React im Browser).
(function () {
  var ICONS = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M5 5l14 14M19 5L5 19"/>',
    check: '<path d="M5 12l5 5L20 7"/>'
  };
  function icon(name, size) {
    return '<svg class="svg-icon" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  // Mobiles Menü
  document.querySelectorAll('.site-nav').forEach(function (nav) {
    var btn = nav.querySelector('.menu-btn');
    if (!btn) return;
    function set(open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      var svg = btn.querySelector('svg');
      if (svg) svg.outerHTML = icon(open ? 'close' : 'menu', 16);
    }
    btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.querySelectorAll('.site-nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { set(false); });
    });
  });

  // Einblenden beim Scrollen
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Kontaktformular (Netlify Forms) ohne Seitenwechsel absenden
  document.querySelectorAll('form[name="contact"][data-netlify]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = new URLSearchParams(new FormData(form)).toString();
      var done = function () {
        form.innerHTML = '<div class="contact__sent"><div class="contact__sent-icon">' + icon('check', 28) +
          '</div><h3>Danke für Ihre Nachricht.</h3><p>Ich melde mich innerhalb von drei Werktagen bei Ihnen.</p></div>';
      };
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
        .then(function (r) {
          if (r.ok) return done();
          form.querySelector('[type="submit"]').insertAdjacentHTML('afterend',
            '<p class="contact__consent">Das hat leider nicht geklappt. Bitte schreiben Sie mir direkt an <a href="mailto:mail@oscaryendell.de">mail@oscaryendell.de</a>.</p>');
        })
        .catch(function () { form.submit(); });
    });
  });
})();
