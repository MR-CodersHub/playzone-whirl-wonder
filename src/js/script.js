/* =====================================================
   Whirl & Wonder — nav, smooth scroll, reserve form
   Login moved to /login.html
   ===================================================== */

(function () {
  'use strict';

  // ---------- Nav scroll state ----------
  var nav = document.getElementById('nav');
  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ---------- Smooth scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var offset = (nav ? nav.offsetHeight : 0) + 12;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ---------- Reserve form ----------
  var form = document.getElementById('reserveForm');
  var success = document.getElementById('reserveSuccess');
  if (form) {
    var dateInput = document.getElementById('r-date');
    if (dateInput) {
      dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('[required]');
      var ok = true;
      fields.forEach(function (f) {
        if (!String(f.value).trim()) {
          f.style.borderBottomColor = '#e87a7a';
          ok = false;
        } else {
          f.style.borderBottomColor = '';
        }
      });
      if (!ok) return;
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = 'Reserving…'; btn.disabled = true; }
      setTimeout(function () {
        form.reset();
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (btn) { btn.textContent = 'Reserve slot'; btn.disabled = false; }
        setTimeout(function () { if (success) success.hidden = true; }, 6000);
      }, 800);
    });
  }

  // ---------- Strip animation ----------
  var strip = document.querySelector('.hero__strip-inner');
  if (strip) {
    strip.style.opacity = '0';
    strip.style.transform = 'translateY(20px)';
    setTimeout(function () {
      strip.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      strip.style.opacity = '1';
      strip.style.transform = 'translateY(0)';
    }, 400);
  }
})();
