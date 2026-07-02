/* =========================================================
   INTEGRAMENTE — Main JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ---- Nav shadow on scroll ---- */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(42,46,38,.10)'
      : 'none';
  }, { passive: true });

});
