/* ==========================================================================
   FOCUS MEDIA — TOSHKENT VILOYATI MAKTABLARI LOYIHASI
   Minimalist Controller (No 3D / No Fluff)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = mobileDrawer.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('active') && !mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }

  // 2. Smooth Counter Animation for Executive Metrics
  const metricNumbers = document.querySelectorAll('.metric-num');
  let animated = false;

  function runCounters() {
    metricNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      if (isNaN(target)) return;

      const duration = 1400;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(ease * target);
        stat.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          stat.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounters();
      }
    });
  }, { threshold: 0.2 });

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroObserver.observe(heroSection);
  }

  // 4. District Real-time Search Filter (22 Tuman va Shahar)
  const filterInput = document.getElementById('district-filter');
  const districtsTable = document.getElementById('districts-table');

  if (filterInput && districtsTable) {
    const rows = districtsTable.querySelectorAll('tbody tr');

    filterInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});
