/* =========================================
   ANIMATIONS.JS - SMOOTH SCROLL E ANIMAZIONI
   MEMBRO 2 - Animazioni e transizioni
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
  initSmoothScroll();
  initScrollAnimations();
  initElementAnimations();
});

/**
 * Smooth scroll per i link di navigazione
 */
function initSmoothScroll() {
  // Link con href="#..." scrollano smoothly grazie al CSS
  // ma qui aggiungiamo ulteriore controllo
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Evita la gestione se è solo "#"
      if (href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        
        // Scroll con offset per evitare che la navbar copra il contenuto
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Aggiungi classe di evidenziazione temporanea
        targetElement.classList.add('highlight-target');
        setTimeout(() => {
          targetElement.classList.remove('highlight-target');
        }, 1500);
      }
    });
  });
}

/**
 * Anima gli elementi quando diventano visibili durante lo scroll
 */
function initScrollAnimations() {
  // Usa Intersection Observer per performance
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Aggiungi animazione
        entry.target.classList.add('fade-in-up', 'is-visible');
        // Smetti di osservare dopo l'animazione
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Osserva tutte le card e le sezioni
  document.querySelectorAll('.card, section > *').forEach(element => {
    observer.observe(element);
  });
}

/**
 * Aggiunge animazioni specifiche agli elementi
 */
function initElementAnimations() {
  // Anima i numeri nelle statistiche
  animateCounters();
  
  // Anima le card al hover
  animateCardHover();
  
  // Parallax effect su hero section
  initParallaxEffect();
}

/**
 * Anima i numeri (counter) dal 0 al valore finale
 */
function animateCounters() {
  const stats = document.querySelectorAll('.stat');
  
  stats.forEach(stat => {
    const target = parseInt(stat.textContent.replace(/\D/g, ''));
    if (isNaN(target)) return;

    let current = 0;
    const increment = Math.ceil(target / 30); // Anima in 30 frame
    
    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      
      // Mantieni il formato originale (aggiungi "M" se necessario)
      const text = stat.textContent;
      const suffix = text.replace(/[0-9,]/g, '');
      stat.textContent = current.toLocaleString() + suffix;
    }, 30);
  });
}

/**
 * Aggiunge effetti hover alle card
 */
function animateCardHover() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });

    // Per touch device
    card.addEventListener('touchstart', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('touchend', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

/**
 * Effetto parallax sulla hero section
 */
function initParallaxEffect() {
  const heroSections = document.querySelectorAll('.hero-section, .hero-section-sm');

  if (heroSections.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    heroSections.forEach(hero => {
      const rect = hero.getBoundingClientRect();
      
      // Calcola la posizione della parallax
      if (rect.top < window.innerHeight) {
        const offset = (rect.top / window.innerHeight) * 50;
        hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
      }
    });
  });
}

/**
 * Anima il testo di benvenuto nella homepage
 */
function typeWriterEffect(element, text, speed = 50) {
  if (!element) return;

  element.innerHTML = '';
  let index = 0;

  const typeInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, speed);
}

/**
 * Adds scroll to top button functionality
 */
function initScrollToTopButton() {
  // Crea il bottone
  const scrollButton = document.createElement('button');
  scrollButton.id = 'scrollToTop';
  scrollButton.className = 'btn btn-oro btn-sm';
  scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    z-index: 999;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0;
  `;

  document.body.appendChild(scrollButton);

  // Mostra/nascondi il bottone
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  // Scroll to top
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Inizializza il bottone scroll-to-top
initScrollToTopButton();

// Stile CSS per le animazioni
const style = document.createElement('style');
style.textContent = `
  .is-visible {
    animation: fadeInUp 0.8s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .highlight-target {
    animation: highlightFlash 1.5s ease-in-out;
  }

  @keyframes highlightFlash {
    0% {
      background-color: rgba(201, 169, 97, 0.3);
    }
    100% {
      background-color: transparent;
    }
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);

console.log('animations.js caricato');
