/* =========================================
   FORM-VALIDATION.JS - VALIDAZIONE FORM CONTATTI
   MEMBRO 3 - Validazione client-side
   ========================================= */

document.addEventListener('DOMContentLoaded', function() {
  initFormValidation();
});

/**
 * Gestisce la validazione completa del form contatti
 */
function initFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Form fields
  const fields = {
    nome: document.getElementById('formNome'),
    email: document.getElementById('formEmail'),
    telefono: document.getElementById('formTelefono'),
    oggetto: document.getElementById('formOggetto'),
    messaggio: document.getElementById('formMessaggio'),
    privacy: document.getElementById('formPrivacy')
  };

  // Error messages
  const errorMessages = {
    nome: document.getElementById('errorNome'),
    email: document.getElementById('errorEmail'),
    oggetto: document.getElementById('errorOggetto'),
    messaggio: document.getElementById('errorMessaggio'),
    privacy: document.getElementById('errorPrivacy')
  };

  // Real-time validation
  Object.keys(fields).forEach(key => {
    if (fields[key] && key !== 'privacy') {
      fields[key].addEventListener('blur', () => validateField(key, fields, errorMessages));
      fields[key].addEventListener('input', () => {
        if (fields[key].classList.contains('is-invalid')) {
          validateField(key, fields, errorMessages);
        }
      });
    }
  });

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Valida tutti i campi
    let isValid = true;
    Object.keys(fields).forEach(key => {
      if (!validateField(key, fields, errorMessages)) {
        isValid = false;
      }
    });

    if (isValid) {
      submitForm(form, fields);
    } else {
      console.warn('Form non valido');
    }
  });

  // Reset form
  form.addEventListener('reset', function() {
    resetForm(form, fields, errorMessages);
  });
}

/**
 * Valida un singolo campo del form
 */
function validateField(fieldName, fields, errorMessages) {
  const field = fields[fieldName];
  if (!field) return false;

  let isValid = true;
  let errorText = '';

  switch (fieldName) {
    case 'nome':
      if (!field.value.trim()) {
        errorText = 'Il nome è obbligatorio.';
        isValid = false;
      } else if (field.value.trim().length < 3) {
        errorText = 'Il nome deve contenere almeno 3 caratteri.';
        isValid = false;
      } else if (!/^[a-zA-Zàèéìòùä\s'-]+$/.test(field.value)) {
        errorText = 'Il nome contiene caratteri non validi.';
        isValid = false;
      }
      break;

    case 'email':
      if (!field.value.trim()) {
        errorText = 'L\'email è obbligatoria.';
        isValid = false;
      } else if (!isValidEmail(field.value)) {
        errorText = 'Inserisci un\'email valida (es: mario@email.com).';
        isValid = false;
      }
      break;

    case 'telefono':
      if (field.value.trim()) {
        // Telefono è opzionale, ma se inserito deve essere valido
        if (!/^[\d\s+\-()]+$/.test(field.value) || field.value.replace(/\D/g, '').length < 9) {
          errorText = 'Telefono non valido. Usa formato internazionale: +39 123 456 7890';
          isValid = false;
        }
      }
      break;

    case 'oggetto':
      if (!field.value.trim()) {
        errorText = 'L\'oggetto è obbligatorio.';
        isValid = false;
      } else if (field.value.trim().length < 3) {
        errorText = 'L\'oggetto deve contenere almeno 3 caratteri.';
        isValid = false;
      }
      break;

    case 'messaggio':
      if (!field.value.trim()) {
        errorText = 'Il messaggio è obbligatorio.';
        isValid = false;
      } else if (field.value.trim().length < 10) {
        errorText = 'Il messaggio deve contenere almeno 10 caratteri.';
        isValid = false;
      } else if (field.value.length > 500) {
        errorText = 'Il messaggio non può superare 500 caratteri.';
        isValid = false;
      }
      break;

    case 'privacy':
      if (!field.checked) {
        errorText = 'Devi accettare la privacy policy.';
        isValid = false;
      }
      break;
  }

  // Aggiorna lo stato visuale del campo
  if (isValid) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    if (errorMessages[fieldName]) {
      errorMessages[fieldName].textContent = '';
      errorMessages[fieldName].style.display = 'none';
    }
  } else {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
    if (errorMessages[fieldName]) {
      errorMessages[fieldName].textContent = errorText;
      errorMessages[fieldName].style.display = 'block';
    }
  }

  return isValid;
}

/**
 * Valida il formato dell'email usando regex
 */
function isValidEmail(email) {
  // Regex RFC 5322 semplificato
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Invia il form
 */
function submitForm(form, fields) {
  // Disabilita il bottone submit
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Invio...';
  }

  // Raccoglie i dati del form
  const formData = {
    nome: fields.nome.value.trim(),
    email: fields.email.value.trim(),
    telefono: fields.telefono.value.trim(),
    oggetto: fields.oggetto.value.trim(),
    messaggio: fields.messaggio.value.trim(),
    timestamp: new Date().toLocaleString('it-IT'),
    userAgent: navigator.userAgent
  };

  // Simula l'invio (in produzione, invia a un server)
  console.log('📧 Form Inviato:', formData);

  // Simula un delay di 1 secondo
  setTimeout(() => {
    // Mostra messaggio di successo
    showSuccessMessage();

    // Resetta il form
    form.reset();

    // Riabilita il bottone
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Invia Messaggio';
    }

    // Registra il dato (in una app reale, lo manderesti al server)
    storeFormData(formData);

    // Scroll al messaggio di successo
    const successMsg = document.getElementById('successMessage');
    if (successMsg) {
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 1000);
}

/**
 * Mostra il messaggio di successo
 */
function showSuccessMessage() {
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');

  if (successMsg) {
    successMsg.classList.remove('hide');
    successMsg.classList.add('show');
  }

  if (errorMsg) {
    errorMsg.classList.add('hide');
  }

  // Auto-hide dopo 5 secondi
  setTimeout(() => {
    if (successMsg) {
      successMsg.classList.add('hide');
    }
  }, 5000);
}

/**
 * Mostra un messaggio di errore
 */
function showErrorMessage(message) {
  const errorMsg = document.getElementById('errorMessage');
  const errorText = document.getElementById('errorText');

  if (errorMsg && errorText) {
    errorText.textContent = message;
    errorMsg.classList.remove('hide');
    errorMsg.classList.add('show');
  }

  // Auto-hide dopo 5 secondi
  setTimeout(() => {
    if (errorMsg) {
      errorMsg.classList.add('hide');
    }
  }, 5000);
}

/**
 * Resetta il form e rimuove le classi di validazione
 */
function resetForm(form, fields, errorMessages) {
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    if (field) {
      field.classList.remove('is-valid', 'is-invalid');
      if (errorMessages[key]) {
        errorMessages[key].textContent = '';
        errorMessages[key].style.display = 'none';
      }
    }
  });

  // Nascondi i messaggi
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');
  if (successMsg) successMsg.classList.add('hide');
  if (errorMsg) errorMsg.classList.add('hide');

  console.log('✨ Form resettato');
}

/**
 * Memorizza i dati del form (localStorage o IndexedDB)
 * Nota: In questo caso usiamo una variabile globale per il contesto scolastico
 */
function storeFormData(data) {
  // Crea un array di messaggi (simulazione database)
  let messages = JSON.parse(localStorage.getItem('dubaiMessages')) || [];
  
  messages.push(data);
  
  // Salva massimo 10 messaggi
  if (messages.length > 10) {
    messages.shift();
  }
  
  localStorage.setItem('dubaiMessages', JSON.stringify(messages));
  console.log(`💾 Messaggio salvato. Totale: ${messages.length}`);
}

/**
 * Recupera i dati memorizzati (debug)
 */
function getStoredMessages() {
  const messages = JSON.parse(localStorage.getItem('dubaiMessages')) || [];
  console.log('📬 Messaggi memorizzati:', messages);
  return messages;
}

// Espone le funzioni globalmente per debugging
window.FormDebug = {
  getStoredMessages,
  storeFormData,
  validateField
};

console.log('form-validation.js caricato');
