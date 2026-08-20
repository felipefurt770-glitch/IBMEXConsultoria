const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const mobileMenuQuery = window.matchMedia('(max-width: 760px)');

if (menuBtn && nav) {
  const setMenuState = (open, returnFocus = false) => {
    const isMobile = mobileMenuQuery.matches;
    const shouldOpen = isMobile && open;

    nav.classList.toggle('open', shouldOpen);
    document.body.classList.toggle('menu-open', shouldOpen);
    menuBtn.setAttribute('aria-expanded', String(shouldOpen));
    menuBtn.setAttribute('aria-label', shouldOpen ? 'Fechar menu' : 'Abrir menu');

    if (isMobile) {
      nav.setAttribute('aria-hidden', String(!shouldOpen));
      nav.inert = !shouldOpen;
    } else {
      nav.removeAttribute('aria-hidden');
      nav.inert = false;
    }

    if (returnFocus) menuBtn.focus();
  };

  setMenuState(false);

  menuBtn.addEventListener('click', () => {
    setMenuState(menuBtn.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      setMenuState(false, true);
    }
  });

  mobileMenuQuery.addEventListener('change', () => setMenuState(false));
}

const cookie = document.querySelector('.cookie');
const accept = document.querySelector('[data-cookie-accept]');

if (cookie) {
  try {
    if (localStorage.getItem('ibmex_cookie_notice') === 'accepted') {
      cookie.classList.add('hidden');
    }
  } catch (error) {
    // O aviso continua funcional durante a sessão se o armazenamento estiver bloqueado.
  }
}

if (accept && cookie) {
  accept.addEventListener('click', () => {
    try {
      localStorage.setItem('ibmex_cookie_notice', 'accepted');
    } catch (error) {
      // O fechamento do aviso não depende da disponibilidade do armazenamento.
    }
    cookie.classList.add('hidden');
  });
}

const mapContainer = document.querySelector('[data-map-container]');
const mapLoadButton = document.querySelector('[data-map-load]');

if (mapContainer && mapLoadButton) {
  mapLoadButton.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.title = 'Mapa da IBMEX Consultoria em Belo Horizonte';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.src = 'https://www.google.com/maps?q=Rua%20Rio%20Grande%20do%20Norte%2C%20300%2C%20Belo%20Horizonte%2C%20MG&output=embed';
    mapContainer.replaceChildren(iframe);
  }, { once: true });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
