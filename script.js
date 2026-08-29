const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');
const mobileMenuQuery = window.matchMedia('(max-width: 720px)');

function menuLinks() {
  return menu ? Array.from(menu.querySelectorAll('a')) : [];
}

function setMenu(open, { moveFocus = false } = {}) {
  if (!toggle || !menu) return;
  const shouldOpen = mobileMenuQuery.matches && open;
  menu.classList.toggle('open', shouldOpen);
  document.body.classList.toggle('menu-open', shouldOpen);
  toggle.setAttribute('aria-expanded', String(shouldOpen));
  toggle.setAttribute('aria-label', shouldOpen ? 'Fechar menu' : 'Abrir menu');
  menu.inert = mobileMenuQuery.matches && !shouldOpen;
  if (shouldOpen && moveFocus) menuLinks()[0]?.focus();
}

if (toggle && menu) {
  setMenu(false);
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setMenu(open, { moveFocus: open });
  });
  menuLinks().forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') {
      setMenu(false);
      toggle.focus();
    }
    if (event.key === 'Tab') {
      const links = menuLinks();
      if (event.shiftKey && document.activeElement === links[0]) {
        event.preventDefault();
        toggle.focus();
      } else if (!event.shiftKey && document.activeElement === links.at(-1)) {
        event.preventDefault();
        toggle.focus();
      }
    }
  });
  mobileMenuQuery.addEventListener('change', () => setMenu(false));
}

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = String(new Date().getFullYear());
});
