/* =====================================================
   Whirl & Wonder — Redesigned Curvy Footer Component
   Loaded dynamically on every page via <script src="footer.js">
   ===================================================== */

(function () {
  'use strict';

  function getBasePath() {
    var path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/public/auth/admin/') || path.includes('/auth/admin/')) return '../../../';
    if (path.includes('/public/auth/user/') || path.includes('/auth/user/')) return '../../../';
    if (path.includes('/public/auth/') || path.includes('/auth/')) return '../../';
    if (path.includes('/public/pages/') || path.includes('/pages/')) return '../../';
    return './';
  }

  var base = getBasePath();

  var logoSvg = '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="5"/><line x1="16" y1="3" x2="16" y2="8"/><line x1="16" y1="24" x2="16" y2="29"/><line x1="3" y1="16" x2="8" y2="16"/><line x1="24" y1="16" x2="29" y2="16"/><line x1="6.6" y1="6.6" x2="10.2" y2="10.2"/><line x1="21.8" y1="21.8" x2="25.4" y2="25.4"/><line x1="6.6" y1="25.4" x2="10.2" y2="21.8"/><line x1="21.8" y1="10.2" x2="25.4" y2="6.6"/></svg>';

  var footerHtml = '<footer class="foot">' +
    '<div class="container">' +

    '<!-- Main Multi-Column Grid -->' +
    '<div class="foot__grid">' +

    '<!-- Brand & Location Column -->' +
    '<div class="foot__col foot__col--brand">' +
    '<a href="' + base + 'index.html" class="foot__logo">' +
    '<img src="' + base + 'assets/logo.png" alt="Whirl &amp; Wonder Logo" class="foot__logo-img" width="38" height="38" />' +
    '<span class="foot__logo-text">Whirl<em>&amp;Wonder</em></span>' +
    '</a>' +
    '<p class="foot__tagline">Brooklyn’s premier sensory &amp; creative indoor play studio designed for joyful development for ages 0–12.</p>' +
    '</div>' +

    '<!-- Column: Play & Services -->' +
    '<div class="foot__col">' +
    '<h6 class="foot__col-title">Play &amp; Visit</h6>' +
    '<ul class="foot__col-links">' +
    '<li><a href="' + base + 'public/pages/booking.html">Book Play Slot</a></li>' +
    '<li><a href="' + base + 'index.html">Home</a></li>' +
    '<li><a href="' + base + 'public/pages/home-2.html">Home 2</a></li>' +
    '<li><a href="' + base + 'public/pages/services.html">Camps &amp; Classes</a></li>' +
    '<li><a href="' + base + 'public/pages/pricing.html">Passes &amp; Memberships</a></li>' +
    '</ul>' +
    '</div>' +

    '<!-- Column: Company & Community -->' +
    '<div class="foot__col">' +
    '<h6 class="foot__col-title">About &amp; Studio</h6>' +
    '<ul class="foot__col-links">' +
    '<li><a href="' + base + 'public/pages/about.html">Our Story</a></li>' +
    '<li><a href="' + base + 'public/pages/blog.html">The Play Journal (Blog)</a></li>' +
    '<li><a href="' + base + 'public/pages/FAQ.html">Frequently Asked Questions</a></li>' +
    '<li><a href="' + base + 'public/pages/contact.html">Contact &amp; Directions</a></li>' +
    '</ul>' +
    '</div>' +

    '<!-- Column: Contact & Info -->' +
    '<div class="foot__col foot__col--trust">' +
    '<h6 class="foot__col-title">Contact &amp; Hours</h6>' +
    '<ul class="foot__contacts">' +
    '<li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>412 Vanderbilt Ave · Brooklyn, NY 11238</span></li>' +
    '<li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>Tue–Sun · 9:00 AM – 7:30 PM</span></li>' +
    '<li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:hello@whirlandwonder.co">hello@whirlandwonder.co</a></li>' +
    '<li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:7185550142">(718) 555-0142</a></li>' +
    '</ul>' +
    '</div>' +

    '</div><!-- /.foot__grid -->' +

    '<!-- Bottom Bar -->' +
    '<div class="foot__bottom">' +
    '<div class="foot__legal-copy">' +
    '<span>© 2026 Whirl &amp; Wonder Play Studio LLC. All rights reserved.</span>' +
    '<span class="foot__dob">NYC DOB Inspected · ADA Accessible Studio</span>' +
    '</div>' +
    '<div class="foot__legal-links">' +
    '<a href="' + base + 'public/pages/Privacy-policy.html">Privacy Policy</a>' +
    '<span class="foot__dot">•</span>' +
    '<a href="' + base + 'public/pages/terms-of-service.html">Terms of Service</a>' +
    '<span class="foot__dot">•</span>' +
    '<a href="' + base + 'public/pages/FAQ.html">Safety Guidelines</a>' +
    '</div>' +
    '</div>' +

    '</div><!-- /.container -->' +
    '</footer>';

  // Remove existing static or older footer elements to avoid duplicates
  var existingFoot = document.querySelector('footer.foot');
  if (existingFoot) {
    existingFoot.remove();
  }

  document.body.insertAdjacentHTML('beforeend', footerHtml);
})();
