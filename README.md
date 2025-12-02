# DUBAI WEBAPP - README

## 📋 Panoramica Progetto

Sito web informativo su **Dubai** realizzato come progetto scolastico per l'**ITIS Informatico, classe 4°**.

**Tecnologie:**
- HTML5 semantico
- CSS3 responsive (mobile-first)
- JavaScript ES6+ (vanilla, no jQuery)
- Bootstrap 5
- Git & GitHub

---

## 👥 Componenti Gruppo

| Membro | Ruolo | Responsabilità |
|--------|-------|-----------------|
| **Gabriele** | Project Manager | Homepage, Navbar, Footer, Coordinamento |
| **Membro 2** | Frontend Developer | Storia, Attrazioni, Animazioni |
| **Membro 3** | Frontend Developer | Info Pratiche |

---

## 🏗️ Struttura Directory

```
dubai-webapp/
├── index.html                 # Homepage
├── storia.html               # Pagina storia
├── attrazioni.html           # Pagina attrazioni
├── info-pratiche.html        # Informazioni pratiche
<!-- contatti.html rimosso -->
├── css/
│   ├── style.css             # Stili principali
│   ├── responsive.css        # Media queries
│   └── dark-mode.css         # Tema scuro (opzionale)
├── js/
│   ├── main.js               # Logica generale
│   ├── navbar.js             # Menu & sticky navbar
│   ├── animations.js         # Scroll & effetti
<!-- form-validation.js rimosso -->
├── assets/
│   ├── images/               # Immagini Dubai
│   └── icons/                # Icone SVG
├── README.md                 # Questo file
├── RELAZIONE.md              # Documentazione tecnica
├── .gitignore               # File da ignorare
└── .github/PULL_REQUEST_TEMPLATE.md
```

---

## 🚀 Come Iniziare

### 1. Clone del Repository

```bash
git clone https://github.com/[username]/dubai-webapp.git
cd dubai-webapp
```

### 2. Apri il Sito Localmente

#### Opzione A: Live Server (VS Code)
1. Installa l'estensione "Live Server"
2. Tasto destro su `index.html` → "Open with Live Server"

#### Opzione B: Python (Locale)
```bash
# Python 3.x
python -m http.server 8000

# Apri: http://localhost:8000
```

#### Opzione C: Node.js (http-server)
```bash
npm install -g http-server
http-server .

# Apri: http://localhost:8080
```

---

## 📄 Pagine Disponibili

### 1. **Home** (`index.html`)
- Hero section con background parallax
- Sezione welcome con statistiche Dubai
- Quick facts con 4 card highlight
- Call-to-action button

### 2. **Storia** (`storia.html`)
- Timeline storica verticale/responsive
- Sezione trasformazione (prima/dopo)
- Cultura emirata con 3 card

### 3. **Attrazioni** (`attrazioni.html`)
- Gallery di 8 attrazioni principali
- Card interattive con overlay
- Modal popup con dettagli attrazione
- Layout responsive 4/2/1 colonne

### 4. **Info Pratiche** (`info-pratiche.html`)
- 5 Tabs Bootstrap:
  - Clima (tabella stagioni)
  - Valuta (cambio AED/EUR, costi)
  - Trasporti (metro, taxi, auto)
  - Info Utili (visto, documenti, telefoni)
  - Consigli di viaggio (cose da fare/evitare)

<!-- Sezione Contatti rimossa -->
- Mappa Google Maps embedded
- Info di contatto (indirizzo, tel, email)
- Validazione real-time dei campi

---

## 🎨 Design System

### Colori Principali

```css
--colore-oro: #C9A961         /* Primary - Lusso */
--colore-nero: #1a1a1a        /* Dark background */
--colore-accent: #0099cc      /* Secondary - Azzurro */
--colore-sfondo: #f8f8f8      /* Light background */
--colore-testo: #333333       /* Text primary */
--colore-testo-light: #666666 /* Text secondary */
```

### Font

- **Titoli:** Poppins (700, 600)
- **Corpo:** Roboto (400, 500)
- **Monospace:** Menlo/Monaco (per codice)

---

## 📱 Responsività

| Device | Breakpoint | Colonne |
|--------|-----------|---------|
| Mobile | 320px - 575px | 1 |
| Tablet | 576px - 767px | 2 |
| Desktop | 768px+ | 3-4 |

**Tested on:**
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## ✨ Funzionalità JavaScript

### main.js
- ✓ Inizializzazioni generali
- ✓ Toggle tema scuro/chiaro (localStorage)
- ✓ Tooltips Bootstrap

### navbar.js
- ✓ Sticky navbar al scroll
- ✓ Hamburger menu mobile
- ✓ Smooth navigation
- ✓ Responsive toggler

### animations.js
- ✓ Smooth scroll interno
- ✓ Scroll animations (Intersection Observer)
- ✓ Parallax effect su hero
- ✓ Counter animations
- ✓ Card hover effects
- ✓ Scroll-to-top button

<!-- form-validation.js rimosso -->
- ✓ Real-time field validation
- ✓ Email regex validation
- ✓ Telefono validation (internazionale)
- ✓ Messaggio length check (10-500 char)
- ✓ Privacy checkbox required
- ✓ Submit animation
- ✓ Success/Error messages
- ✓ localStorage storage (debug)

---

## 🔧 Workflow GitHub

### Setup Iniziale (Project Manager)

```bash
# Crea repository su GitHub (pubblico)
# Clone locale
git clone https://github.com/[username]/dubai-webapp.git
cd dubai-webapp

# Crea branch develop
git checkout -b dev
git push -u origin dev
```

### Workflow per Ogni Membro

```bash
# 1. Update dev
git checkout dev
git pull origin dev

# 2. Crea feature branch
git checkout -b feature/[nome-feature]

# 3. Fai modifiche...
git add .
git commit -m "feat: descrizione della feature"

# 4. Push
git push -u origin feature/[nome-feature]

# 5. Crea Pull Request su GitHub
# - Descrizione dettagliata
# - Screenshot/GIF
# - Checklist: testato su mobile?

# 6. Review dei compagni
# 7. Merge dopo approvazione
```

### Commit Message Convention

```
feat: aggiunge nuova funzionalità
fix: corregge bug
style: cambiamenti CSS/formattazione
refactor: refactoring senza cambio funzionalità
docs: aggiorna documentazione
test: aggiunge test
chore: configurazione repository
```

---

## 📊 Valutazione Criteri

| Criterio | Punti | Status |
|----------|-------|--------|
| Responsività mobile | 20 | ✓ |
| Modularità codice | 15 | ✓ |
| Bootstrap usage | 15 | ✓ |
| JavaScript interattivo | 15 | ✓ |
| GitHub workflow | 15 | ✓ |
| Relazione tecnica | 10 | ✓ |
| **TOTALE** | **90** | - |

**Bonus:**
- Dark mode toggle: +3 punti
- Performance optimization: +2 punti
- Accessibilità (ARIA): +2 punti

---

## 🐛 Debugging

### Console Browser
Apri DevTools (F12):
- Console: controlla error/warning
- Network: velocità caricamento immagini
- Performance: analizza bottleneck

### localStorage (Form Debug)
```javascript
// Nel console browser:
FormDebug.getStoredMessages()        // Mostra messaggi salvati
FormDebug.validateField('email', fields, errorMessages)
```

### Performance Check
```bash
# Lighthouse audit (Chrome DevTools)
- Performance
- Accessibility
- Best Practices
- SEO
```

---

## 📚 Riferimenti

### Risorse Utili
- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap 5 Docs](https://getbootstrap.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

### Tools Utilizzati
- VS Code
- Git & GitHub
- Chrome DevTools
- Figma (Mockup)
- TinyPNG (Compressione immagini)

---

## 📝 Note Importanti

### ⚠️ Attributi Obbligatori
- ✓ `alt` su tutte le immagini
- ✓ `lang="it"` su `<html>`
- ✓ `for` su `<label>` con id input
- ✓ `meta viewport` per responsività
- ✓ Contrasto colori (WCAG AA minimo)

### 🚫 Cose da Evitare
- ❌ jQuery (ES6 vanilla only)
- ❌ Inline styles (usare CSS classes)
- ❌ `!important` (evitare se possibile)
- ❌ Console.log() nel codice produzione
- ❌ Broken links
- ❌ Immagini non ottimizzate (>200KB)

---

<!-- Sezione Contatti & Supporto rimossa -->

**Domande su questo progetto?**
- Crea una Issue su GitHub
- Contatta il Project Manager (Gabriele)
- Rivedi RELAZIONE.md per dettagli tecnici

---

## 📄 Licenza

Progetto scolastico - Distribuito sotto MIT License.

---

**Versione:** 1.0.0
**Data:** 2024
**ITIS Informatico - Milano**