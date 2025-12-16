function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const backdrop = document.querySelector('.nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  // Header not injected yet (safety guard)
  if (!toggle || !backdrop) return;

  // Toggle menu
  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close on backdrop click
  backdrop.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  });

  // Close when clicking any mobile link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });

  // Escape key closes menu
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });

  // Active link highlight (desktop + mobile)
  const currentPath =
    window.location.pathname.split('/').pop() || 'index.html';

  document
    .querySelectorAll('.nav-links a, .mobile-nav a')
    .forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
}

/* 🔑 IMPORTANT:
   nav.js is loaded AFTER header injection,
   so we call it immediately.
*/
initMobileNav();
