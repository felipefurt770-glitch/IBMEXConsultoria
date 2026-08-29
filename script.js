const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');
const mobileMenuQuery = window.matchMedia('(max-width: 720px)');

function menuLinks() {
  return menu ? Array.from(menu.querySelectorAll('a')) : [];
}

function setMenu(open, { moveFocus = false } = {}) {
  if (!toggle || !menu) return;
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  if (open && moveFocus) menuLinks()[0]?.focus();
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    setMenu(open, { moveFocus: open });
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (!menu.classList.contains('open')) return;

    if (e.key === 'Escape') {
      setMenu(false);
      toggle.focus();
    }

    if (e.key === 'Tab' && mobileMenuQuery.matches) {
      const links = menuLinks();
      const first = links[0];
      const last = links[links.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        toggle.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        toggle.focus();
      }
    }
  });
  mobileMenuQuery.addEventListener('change', () => setMenu(false));
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = String(new Date().getFullYear());
});

const mobileRevealQuery = window.matchMedia('(max-width: 720px)');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mobileRevealQuery.matches && !reduceMotionQuery.matches && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll([
    '.hero-panel',
    '.hero-actions',
    '.section-soft .about-grid > *',
    '.cta-box',
    '.contact-grid > div',
    '.contact-card p',
    '.footer-grid',
    '.footer-bottom'
  ].join(','));

  document.body.classList.add('reveal-ready');
  revealTargets.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  revealTargets.forEach(element => revealObserver.observe(element));
}
