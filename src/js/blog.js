/* =====================================================
   Whirl & Wonder — Blog Client-Side Search & Filter
   Used by blog.html
   ===================================================== */

var BlogManager = (function () {
  'use strict';

  var allPosts = [];
  var currentCategory = 'All';
  var currentSearch = '';

  function formatDate(dateStr) {
    var d = new Date(dateStr);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function renderBlogCards(container, posts) {
    if (!container) return;
    if (posts.length === 0) {
      container.innerHTML = '<div class="blog__empty"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><p>No articles found matching your search. Try different keywords.</p></div>';
      return;
    }
    container.innerHTML = posts.map(function (post) {
      return '<article class="blog-card" data-id="' + post.id + '">' +
        '<a href="blog-details.html?id=' + post.id + '" class="blog-card__link">' +
        '<div class="blog-card__media"><img src="' + post.image + '" alt="' + post.title + '" loading="lazy"/>' +
        '<span class="blog-card__category">' + post.category + '</span></div>' +
        '<div class="blog-card__body">' +
        '<div class="blog-card__meta"><span>' + formatDate(post.date) + '</span><span class="blog-card__sep">·</span><span>' + post.readTime + '</span></div>' +
        '<h3 class="blog-card__title">' + post.title + '</h3>' +
        '<p class="blog-card__excerpt">' + post.excerpt + '</p>' +
        '<div class="blog-card__tags">' + post.tags.slice(0, 3).map(function (t) { return '<span class="blog-card__tag">' + t + '</span>'; }).join('') + '</div>' +
        '<span class="blog-card__read">Read article <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="8 3 13 8 8 13"/></svg></span>' +
        '</div></a></article>';
    }).join('');
  }

  function renderSidebarRecent(container, posts) {
    if (!container) return;
    container.innerHTML = posts.slice(0, 5).map(function (post) {
      return '<a href="blog-details.html?id=' + post.id + '" class="sidebar-recent__item">' +
        '<img src="' + post.image + '" alt="" loading="lazy"/>' +
        '<div><h4>' + post.title + '</h4><span>' + formatDate(post.date) + '</span></div></a>';
    }).join('');
  }

  function renderSidebarCategories(container, categories, active) {
    if (!container) return;
    container.innerHTML = categories.map(function (cat) {
      var count = cat === 'All' ? allPosts.length : allPosts.filter(function (p) { return p.category === cat; }).length;
      return '<button class="sidebar-cat__item ' + (cat === active ? 'sidebar-cat__item--active' : '') + '" data-category="' + cat + '">' +
        '<span>' + cat + '</span><span class="sidebar-cat__count">' + count + '</span></button>';
    }).join('');
  }

  function filterPosts() {
    var filtered = allPosts;
    if (currentCategory !== 'All') {
      filtered = filtered.filter(function (p) { return p.category === currentCategory; });
    }
    if (currentSearch) {
      var q = currentSearch.toLowerCase();
      filtered = filtered.filter(function (p) {
        return p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some(function (t) { return t.toLowerCase().includes(q); }) ||
          p.author.toLowerCase().includes(q);
      });
    }
    return filtered;
  }

  function init(data) {
    allPosts = data || [];
    var grid = document.getElementById('blogGrid');
    var searchInput = document.getElementById('blogSearch');
    var filterBtns = document.querySelectorAll('.blog-filter-btn');
    var sidebarRecent = document.getElementById('sidebarRecent');
    var sidebarCats = document.getElementById('sidebarCategories');
    var resultCount = document.getElementById('blogResultCount');

    renderBlogCards(grid, allPosts);
    renderSidebarRecent(sidebarRecent, allPosts);
    renderSidebarCategories(sidebarCats, BLOG_CATEGORIES, currentCategory);

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentSearch = searchInput.value.trim();
        var filtered = filterPosts();
        renderBlogCards(grid, filtered);
        if (resultCount) resultCount.textContent = filtered.length + ' article' + (filtered.length !== 1 ? 's' : '');
      });
    }

    if (filterBtns.length) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filterBtns.forEach(function (b) { b.classList.remove('blog-filter-btn--active'); });
          btn.classList.add('blog-filter-btn--active');
          currentCategory = btn.getAttribute('data-category') || 'All';
          renderSidebarCategories(sidebarCats, BLOG_CATEGORIES, currentCategory);
          var filtered = filterPosts();
          renderBlogCards(grid, filtered);
          if (resultCount) resultCount.textContent = filtered.length + ' article' + (filtered.length !== 1 ? 's' : '');
        });
      });
    }

    if (sidebarCats) {
      sidebarCats.addEventListener('click', function (e) {
        var btn = e.target.closest('.sidebar-cat__item');
        if (!btn) return;
        currentCategory = btn.getAttribute('data-category');
        filterBtns.forEach(function (b) {
          b.classList.toggle('blog-filter-btn--active', b.getAttribute('data-category') === currentCategory);
        });
        renderSidebarCategories(sidebarCats, BLOG_CATEGORIES, currentCategory);
        var filtered = filterPosts();
        renderBlogCards(grid, filtered);
        if (resultCount) resultCount.textContent = filtered.length + ' article' + (filtered.length !== 1 ? 's' : '');
      });
    }
  }

  return { init: init };
})();
