const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuBtn && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Abrir menu');
  };

  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menuBtn.focus();
    }
  });
}

const cookie = document.querySelector('.cookie');
const accept = document.querySelector('[data-cookie-accept]');
if (localStorage.getItem('ibmex_cookie_notice') === 'accepted' && cookie) {
  cookie.classList.add('hidden');
}
if (accept && cookie) {
  accept.addEventListener('click', () => {
    localStorage.setItem('ibmex_cookie_notice', 'accepted');
    cookie.classList.add('hidden');
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
