/* =========================================
   NAVBAR.JS - MENU HAMBURGER E STICKY NAVBAR
   MEMBRO 1 - Gabriele
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
  initStickyNavbar();
  initHamburgerMenu();
  initNavbarScroll();
});

/**
 * Rende la navbar sticky al scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
      navbar.style.backdropFilter = 'blur(10px)';
      navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
      navbar.classList.remove('shadow-lg');
      navbar.style.backdropFilter = 'none';
      navbar.style.backgroundColor = '';
    }
  });
}

/**
 * Gestisce il menu hamburger per mobile
 */
function initHamburgerMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navbarToggler || !navbarCollapse) return;

  // Chiude il menu quando clicchi su un link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Usa Bootstrap per chiudere il menu
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });

  // Aggiungi evento al toggle button
  navbarToggler.addEventListener('click', function() {
    navbarToggler.classList.toggle('collapsed');
  });
}

/**
 * Highlight del link attivo durante lo scroll
 * (Opzionale - per navbar con anchor links)
 */
function initNavbarScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    // Scorri tutte le sezioni e controlla quale è visibile
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    // Rimuovi active da tutti e aggiungilo a quello corrente
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Chiude il dropdown della navbar quando clicchi fuori
 */
document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbar && !navbar.contains(event.target)) {
    // Se il menu è aperto, chiudilo
    if (navbarToggler && navbarCollapse && !navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click();
    }
  }
});

/**
 * Gestisce la visualizzazione del menu a seconda della viewport
 */
function handleNavbarResponsive() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (window.innerWidth >= 992) {
    // Desktop: nascondi il toggler
    if (navbarToggler) {
      navbarToggler.style.display = 'none';
    }
  } else {
    // Mobile/Tablet: mostra il toggler
    if (navbarToggler) {
      navbarToggler.style.display = '';
    }
  }
}

// Chiama handleNavbarResponsive al resize della finestra
window.addEventListener('resize', handleNavbarResponsive);

// Chiama una volta al caricamento della pagina
handleNavbarResponsive();

console.log('navbar.js caricato');
