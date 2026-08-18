/* =====================================================
   Whirl & Wonder — Dashboard JS
   Used by admin-dashboard.html and user-dashboard.html
   ===================================================== */

var Dashboard = (function () {
  'use strict';

  function initDashboardCharts() {
    document.querySelectorAll('.dash-chart').forEach(function (chart) {
      var type = chart.getAttribute('data-chart');
      if (type === 'bar') renderBarChart(chart);
      else if (type === 'line') renderLineChart(chart);
      else if (type === 'donut') renderDonutChart(chart);
    });
  }

  function renderBarChart(container) {
    var data = [65, 80, 55, 90, 70, 85, 95];
    var labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var max = Math.max.apply(null, data);
    container.innerHTML = '<div class="chart-bars">' + data.map(function (val, i) {
      var pct = (val / max) * 100;
      return '<div class="chart-bar-col"><div class="chart-bar" style="height:' + pct + '%"><span class="chart-bar__val">' + val + '</span></div><span class="chart-bar__label">' + labels[i] + '</span></div>';
    }).join('') + '</div>';
  }

  function renderLineChart(container) {
    var data = [30, 45, 35, 60, 50, 70, 65, 80, 75, 90, 85, 95];
    var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var max = Math.max.apply(null, data);
    var svgW = 500, svgH = 200, padX = 10, padY = 10;
    var stepX = (svgW - padX * 2) / (data.length - 1);
    var points = data.map(function (val, i) {
      var x = padX + i * stepX;
      var y = padY + ((max - val) / max) * (svgH - padY * 2);
      return x + ',' + y;
    }).join(' ');
    var labelHtml = data.map(function (val, i) {
      var x = padX + i * stepX;
      return '<text x="' + x + '" y="' + (svgH - 2) + '" text-anchor="middle" class="chart-label">' + labels[i] + '</text>';
    }).join('');
    container.innerHTML = '<svg viewBox="0 0 ' + svgW + ' ' + svgH + '" class="chart-line-svg"><polyline points="' + points + '" fill="none" stroke="var(--marigold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' + labelHtml + '</svg>';
  }

  function renderDonutChart(container) {
    var segments = [
      { label: 'Members', value: 45, color: 'var(--marigold)' },
      { label: 'Drop-ins', value: 30, color: 'var(--sky)' },
      { label: 'Parties', value: 15, color: 'var(--rose)' },
      { label: 'Other', value: 10, color: 'var(--ink-mute)' }
    ];
    var total = segments.reduce(function (s, seg) { return s + seg.value; }, 0);
    var cumulative = 0;
    var radius = 40, cx = 50, cy = 50;
    var circumference = 2 * Math.PI * radius;

    var circles = segments.map(function (seg) {
      var pct = seg.value / total;
      var dashLen = pct * circumference;
      var dashOffset = -cumulative * circumference;
      cumulative += pct;
      return '<circle cx="' + cx + '" cy="' + cy + '" r="' + radius + '" fill="none" stroke="' + seg.color + '" stroke-width="12" stroke-dasharray="' + dashLen + ' ' + (circumference - dashLen) + '" stroke-dashoffset="' + dashOffset + '" transform="rotate(-90 ' + cx + ' ' + cy + ')" class="donut-seg"/>';
    }).join('');

    var legend = segments.map(function (seg) {
      return '<div class="donut-legend__item"><span class="donut-legend__dot" style="background:' + seg.color + '"></span>' + seg.label + ' (' + seg.value + '%)</div>';
    }).join('');

    container.innerHTML = '<div class="donut-chart-wrap"><svg viewBox="0 0 100 100" class="donut-svg">' + circles + '<text x="50" y="53" text-anchor="middle" class="donut-center">' + total + '%</text></svg><div class="donut-legend">' + legend + '</div></div>';
  }

  function initDashNav() {
    var toggle = document.querySelector('.dash__sidebar-toggle');
    var sidebar = document.querySelector('.dash__sidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', function () {
        sidebar.classList.toggle('is-open');
      });
    }
  }

  return {
    initDashboardCharts: initDashboardCharts,
    initDashNav: initDashNav
  };
})();
