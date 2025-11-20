/* =========================================
   MAIN.JS - LOGICA GENERALE E INIZIALIZZAZIONI
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Dubai WebSite - Applicazione caricata');
  
  // Inizializzazioni generali
  initThemeToggle();
  initTooltips();
});

/**
 * Gestisce il toggle del tema scuro/chiaro
 * MEMBRO 3 - Funzionalità opzionale
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Carica il tema salvato dal localStorage (se disponibile)
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    console.log(`Tema cambiato a: ${newTheme}`);
  });
}

/**
 * Applica il tema selezionato
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#e0e0e0';
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.body.style.backgroundColor = '#f8f8f8';
    document.body.style.color = '#333333';
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

/**
 * Inizializza i tooltip di Bootstrap
 */
function initTooltips() {
  // Inizializza tutti i tooltip Bootstrap presenti nella pagina
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

/**
 * Utility: Log con timestamp
 */
function logWithTime(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

/**
 * Utility: Mostra notifica toast
 */
function showToast(message, type = 'info') {
  // Crea un elemento toast
  const toast = document.createElement('div');
  toast.className = `alert alert-${type} alert-dismissible fade show`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  // Aggiunge al DOM
  const container = document.body;
  container.appendChild(toast);
  
  // Auto-dismissal dopo 5 secondi
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

/**
 * Verifica se il sito è caricato da HTTPS
 */
function isSecureConnection() {
  return window.location.protocol === 'https:';
}

// Export delle funzioni per uso globale
window.AppUtils = {
  applyTheme,
  showToast,
  logWithTime
};