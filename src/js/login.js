/* =====================================================
   Whirl & Wonder — Login page
   Demo sign-in: any email + any password accepted.
   No data sent anywhere; shows success and "redirects" client-side.
   ===================================================== */

(function () {
  'use strict';

  var form = document.getElementById('loginForm');
  var success = document.getElementById('loginSuccess');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = form.querySelector('#l-email');
    var pass = form.querySelector('#l-pass');
    var ok = true;

    [email, pass].forEach(function (f) {
      if (!f || !String(f.value).trim()) {
        if (f) f.style.borderBottomColor = '#e87a7a';
        ok = false;
      } else if (f) {
        f.style.borderBottomColor = '';
      }
    });

    if (!ok) return;

    var btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Signing in…'; btn.disabled = true; }

    setTimeout(function () {
      if (success) success.hidden = false;
      setTimeout(function () {
        // Demo: no real dashboard — send them back to the home page.
        window.location.href = 'index.html#reserve';
      }, 1200);
    }, 600);
  });

  // Password toggle
  document.querySelectorAll('.password-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap = btn.closest('.input-password-wrap');
      if (!wrap) return;
      var input = wrap.querySelector('input');
      if (!input) return;
      var eye = btn.querySelector('.icon-eye');
      var eyeOff = btn.querySelector('.icon-eye-off');
      if (input.type === 'password') {
        input.type = 'text';
        if (eye) eye.style.display = 'none';
        if (eyeOff) eyeOff.style.display = 'block';
      } else {
        input.type = 'password';
        if (eye) eye.style.display = 'block';
        if (eyeOff) eyeOff.style.display = 'none';
      }
    });
  });
})();
