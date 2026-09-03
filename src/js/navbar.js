/* =====================================================
   Whirl & Wonder — Shared Navbar Component
   Loaded on every page via <script src="navbar.js">
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
  var isIndex = base === './';

  var links = [
    { href: base + 'index.html', text: 'Home', id: 'home' },
    { href: base + 'public/pages/home-2.html', text: 'Home 2', id: 'home-2' },
    { href: base + 'public/pages/about.html', text: 'About', id: 'about' },
    { href: base + 'public/pages/services.html', text: 'Services', id: 'services' },
    { href: base + 'public/pages/blog.html', text: 'Blog', id: 'blog' },
    { href: base + 'public/pages/contact.html', text: 'Contact', id: 'contact' }
  ];

  var currentPath = window.location.pathname.replace(/\\/g, '/').toLowerCase();

  var navLinksHtml = links.map(function (l) {
    var isActive = false;
    if (l.id === 'home' && (currentPath.endsWith('/index.html') || currentPath.endsWith('/') || !currentPath.includes('.html'))) {
      isActive = true;
    } else if (l.id !== 'home' && currentPath.includes(l.id)) {
      isActive = true;
    }
    return '<li><a href="' + l.href + '"' + (isActive ? ' class="is-active" aria-current="page"' : '') + '>' + l.text + '</a></li>';
  }).join('');

  var navHtml = '<header class="nav" id="nav"><div class="nav__inner">' +
    '<a href="' + base + 'index.html' + '" class="nav__brand">' +
    '<img src="' + base + 'assets/logo.png" alt="Whirl &amp; Wonder Logo" class="nav__logo-img" width="34" height="34" />' +
    '<span class="nav__name">Whirl<em>&amp;Wonder</em></span>' +
    '</a>' +
    '<ul class="nav__links" id="navLinks">' + navLinksHtml + '</ul>' +
    '<div class="nav__actions">' +
    '<a href="' + base + 'public/pages/booking.html" class="nav__cta-btn nav__cta-btn--desktop">Book a slot</a>' +
    '<div class="nav__profile-wrap">' +
    '<button class="nav__profile-btn" id="profileToggle" aria-label="Profile menu" aria-expanded="false">' +
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
    '</button>' +
    '<div class="nav__dropdown" id="profileDropdown">' +
    '<a href="' + base + 'public/auth/login.html" class="nav__dropdown-item">' +
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>' +
    'Login / Signup</a>' +
    '<a href="' + base + 'public/auth/admin/admin-dashboard.html" class="nav__dropdown-item">' +
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' +
    'Admin Dashboard</a>' +
    '<a href="' + base + 'public/auth/user/user-dashboard.html" class="nav__dropdown-item">' +
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
    'User Dashboard</a>' +
    '</div></div>' +
    '<button class="nav__theme-toggle" id="themeToggle" aria-label="Toggle dark mode">' +
    '<svg class="nav__sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
    '<svg class="nav__moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
    '</button>' +
    '<button class="nav__rtl-toggle" id="rtlToggle" aria-label="Toggle RTL direction">' +
    '<span class="nav__rtl-label">RTL</span>' +
    '</button>' +
    '<button class="nav__hamburger" id="navHamburger" aria-label="Open menu" aria-expanded="false">' +
    '<span class="nav__hamburger-line"></span>' +
    '<span class="nav__hamburger-line"></span>' +
    '<span class="nav__hamburger-line"></span>' +
    '</button>' +
    '</div></div>' +
    '<div class="nav__mobile-overlay" id="navMobileOverlay"></div>' +
    '<div class="nav__mobile-menu" id="navMobileMenu">' +
    '<div class="nav__mobile-head">' +
    '<a href="' + base + 'index.html' + '" class="nav__brand">' +
    '<img src="' + base + 'assets/logo.png" alt="Whirl &amp; Wonder Logo" class="nav__logo-img" width="34" height="34" />' +
    '<span class="nav__name">Whirl<em>&amp;Wonder</em></span>' +
    '</a>' +
    '<button class="nav__mobile-close" id="navMobileClose" aria-label="Close menu">' +
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
    '</button>' +
    '</div>' +
    '<ul class="nav__mobile-links">' + navLinksHtml + '</ul>' +
    '<div class="nav__mobile-actions">' +
    '<a href="' + base + 'public/pages/booking.html" class="nav__cta-btn" style="width:100%;justify-content:center;">Book a slot</a>' +
    '<a href="' + base + 'public/auth/login.html" class="nav__mobile-login">' +
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>' +
    'Login / Signup</a>' +
    '<div class="nav__mobile-tools" style="display:flex;gap:0.65rem;margin-top:0.25rem;">' +
    
    '</div>' +
    '</div>' +
    '</div>' +
    '</header>';

  // Clean up any pre-existing static header to avoid duplicates
  var existingNav = document.getElementById('nav') || document.querySelector('header.nav');
  if (existingNav) {
    existingNav.remove();
  }

  document.body.insertAdjacentHTML('afterbegin', navHtml);

  var nav = document.getElementById('nav');
  var profileBtn = document.getElementById('profileToggle');
  var dropdown = document.getElementById('profileDropdown');

  // Scroll state
  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Profile dropdown
  if (profileBtn && dropdown) {
    profileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var expanded = profileBtn.getAttribute('aria-expanded') === 'true';
      profileBtn.setAttribute('aria-expanded', String(!expanded));
      dropdown.classList.toggle('is-open');
    });
    document.addEventListener('click', function () {
      profileBtn.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('is-open');
    });
    dropdown.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  // Mobile menu
  var hamburger = document.getElementById('navHamburger');
  var mobileMenu = document.getElementById('navMobileMenu');
  var mobileOverlay = document.getElementById('navMobileOverlay');
  var mobileClose = document.getElementById('navMobileClose');

  function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('is-open');
    if (mobileOverlay) mobileOverlay.classList.add('is-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('is-open');
    if (mobileOverlay) mobileOverlay.classList.remove('is-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMobileMenu(); else openMobileMenu();
    });
  }
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile menu on link click
  var mobileLinks = document.querySelectorAll('.nav__mobile-links a');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', closeMobileMenu);
  }

  // Dark mode
  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }

  var savedTheme = localStorage.getItem('ww-theme');
  if (savedTheme === 'dark') {
    applyTheme(true);
  } else if (savedTheme === 'light') {
    applyTheme(false);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme(true);
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.contains('dark');
    applyTheme(!isDark);
    localStorage.setItem('ww-theme', !isDark ? 'dark' : 'light');
  }

  // RTL toggle
  var savedRtl = localStorage.getItem('ww-rtl') === 'true';
  if (savedRtl) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('rtl');
    document.querySelectorAll('.nav__rtl-toggle').forEach(function (btn) {
      btn.classList.add('is-active');
    });
  }

  function toggleRtl() {
    var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    if (isRtl) {
      document.documentElement.removeAttribute('dir');
      document.documentElement.classList.remove('rtl');
      localStorage.setItem('ww-rtl', 'false');
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.classList.add('rtl');
      localStorage.setItem('ww-rtl', 'true');
    }
    document.querySelectorAll('.nav__rtl-toggle').forEach(function (btn) {
      btn.classList.toggle('is-active', !isRtl);
    });
  }

  // Delegated click handler for theme and RTL toggles
  document.addEventListener('click', function (e) {
    var themeBtn = e.target.closest('.nav__theme-toggle');
    if (themeBtn) {
      e.preventDefault();
      toggleTheme();
      return;
    }

    var rtlBtn = e.target.closest('.nav__rtl-toggle');
    if (rtlBtn) {
      e.preventDefault();
      toggleRtl();
      return;
    }
  });

  // Smooth scroll for anchor links
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
})();
