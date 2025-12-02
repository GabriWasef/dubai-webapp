# 🚀 QUICK START - DUBAI WEBAPP

## 📦 Cosa Hai Ricevuto

Questo è il **deliverable completo** del progetto Dubai WebSite per ITIS Informatico 4°. Include:

✅ **5 Pagine HTML** complete e responsiv
✅ **3 File CSS** (stili + responsive + dark mode)
✅ **4 File JS** (modularità totale)
✅ **Documentazione Completa** (README + RELAZIONE)
✅ **Configurazione Git** (.gitignore + PR template)
✅ **Commenti Nel Codice** (italiano per scuola)

---

## 🎯 STEP 1: Setup GitHub Repository

### Da Fare SOLO UNA VOLTA (Gabriele)

```bash
# Crea un repository PUBBLICO su GitHub
# Nome: dubai-webapp
# Descrizione: "Sito web informativo su Dubai - ITIS Informatico 4° anno"
# Visibility: PUBLIC
# Aggiungi README (no, lo hai già)
```

### Poi, in Terminale:

```bash
# Scarica i file forniti in una cartella
cd /cartella/dubai-webapp

# Inizializza Git locale
git init
git add .
git commit -m "initial commit: project setup"

# Aggiungi il remote (sostituisci [username])
git remote add origin https://github.com/[username]/dubai-webapp.git

# Crea branch develop
git checkout -b dev
git push -u origin dev

# Torna a main per il primo push
git checkout -b main
git push -u origin main

# Condividi il link del repo con il gruppo!
```

---

## 🔀 STEP 2: Setup Per Ogni Membro

### Tutti e 3 i Membri:

```bash
# 1. Clone il repository
git clone https://github.com/[username]/dubai-webapp.git
cd dubai-webapp

# 2. Passa a dev
git checkout dev
git pull origin dev

# 3. Crea il tuo feature branch
# MEMBRO 1 (Gabriele):
git checkout -b feature/homepage-navbar-footer

# MEMBRO 2:
git checkout -b feature/storia-attrazioni

# MEMBRO 3:
<!-- Riferimenti al form contatti rimossi -->
```

---

## 📝 STEP 3: Fatto! Ora Puoi Iniziare

### Per aprire il sito localmente:

#### Opzione A: VS Code Live Server (CONSIGLIATO)
1. Installa "Live Server" extension (Ritchie Wild)
2. Tasto destro su `index.html` → "Open with Live Server"
3. Il sito si apre automaticamente su `http://localhost:5500`

#### Opzione B: Python
```bash
python -m http.server 8000
# Apri: http://localhost:8000
```

#### Opzione C: Node.js
```bash
npm install -g http-server
http-server .
# Apri: http://localhost:8080
```

---

## 💾 STEP 4: Workflow Sviluppo (Ogni Membro)

### Ogni volta che fai modifiche:

```bash
# 1. Verifica di essere nel tuo branch
git status

# 2. Fai le tue modifiche nei file...

# 3. Aggiungi i file modificati
git add .

# 4. Commit con messaggio descrittivo
git commit -m "feat: descrizione di cosa hai fatto"

# 5. Push al remote
git push -u origin feature/[tuo-branch]

# 6. SU GITHUB: Crea una Pull Request
#    - Apri il repo su GitHub
#    - Vedrai il banner "Compare & pull request"
#    - Clicca e compila il template
#    - Descrivi cosa hai fatto
#    - Aggiungi screenshot
#    - Crea la PR

# 7. I compagni REVIEWANO la PR
#    - Controllano il codice
#    - Suggeriscono miglioramenti
#    - Approvano o chiedono modifiche

# 8. Una volta approvata, MERGE su dev
#    - Clicca "Merge pull request"
#    - Conferma
#    - Cancella il branch remoto
```

---

## 🎨 STEP 5: Personalizzare

### Devi aggiungere i VOSTRI nomi?

**File: README.md (riga ~13)**
```markdown
### 👥 Componenti Gruppo

| Membro | Ruolo | Responsabilità |
|--------|-------|-----------------|
| **Gabriele** | Project Manager | ...
| **[Vero Nome]** | Frontend Developer | ...
| **[Vero Nome]** | Frontend Developer | ...
```

**File: RELAZIONE.md (riga ~10)**
```markdown
### Dati Gruppo
- **Istituto:** ITIS Informatico
- **Classe:** 4° anno
- **Componenti:** Gabriele, [Vero Nome], [Vero Nome]
- **Data:** 2024
- **Docente:** [Nome Docente]
```

---

## ✨ STEP 6: Bonus - Dark Mode Toggle

Il sito ha già il dark mode! Provalo:
- Clicca l'icona 🌙 in alto a destra della navbar
- I colori cambiano automaticamente
- Il tema viene salvato in localStorage

---

## 🐛 STEP 7: Come Debuggare

### Se qualcosa non funziona:

```
1. Apri DevTools (F12)
2. Vai alla tab Console
3. Controlla se ci sono errori rossi
4. Se vedi errori, leggi il messaggio
5. Risolvi il problema nel codice
6. Refresh la pagina (F5)
```

### Errori Comuni:

**❌ "Cannot find module..."**
- Controlla i percorsi dei file
- CSS: `css/style.css` (case-sensitive!)

**❌ "Form non si valida"**
<!-- Istruzioni relative al form contatti rimosse -->
- Verifica tutti gli `id` degli input

**❌ "Navbar non è sticky"**
- Ricarica la pagina
- Prova in una pagina diversa

---

## 📊 STEP 8: Commit Minimi Richiesti

Per avere un BUON VOTO, assicurati che ci siano:

**Per OGNI membro:**
- [ ] Almeno 5 commit significativi
- [ ] Almeno 1 Pull Request (con descrizione!)
- [ ] Commit message chiari e descrittivi
- [ ] Contributo visibile in GitHub

**Complessivamente:**
- [ ] Almeno 1 commit per ogni pagina
- [ ] Almeno 1 commit per CSS
- [ ] Almeno 1 commit per JS
- [ ] README.md finalizzato
- [ ] RELAZIONE.md finalizzato

---

## 🚀 STEP 9: Prima della Presentazione

### Checklist Finale:

- [ ] Apri il sito su Desktop - Funziona? ✓
- [ ] Apri su Tablet (DevTools 768px) - Funziona? ✓
- [ ] Apri su Mobile (DevTools 375px) - Funziona? ✓
- [ ] Prova Navbar hamburger menu ✓
<!-- Checklist form contatti rimossa -->
- [ ] Prova Dark mode toggle ✓
- [ ] Prova Smooth scroll (clicca "Scopri di Più") ✓
- [ ] Console Browser: 0 errori ✓
- [ ] Repository GitHub: pubblico e visibile ✓
- [ ] README.md: nomi compilati ✓
- [ ] RELAZIONE.md: completata ✓
- [ ] Almeno 15+ commit totali ✓
- [ ] Almeno 3 PR (1 per membro) ✓

---

## 🎓 STEP 10: Presentazione al Docente

### Cosa Preparare:

1. **Link del Repository**
   ```
   https://github.com/[username]/dubai-webapp
   ```

2. **Link della Pagina (se deployata)**
   ```
   https://[username].github.io/dubai-webapp/
   ```

3. **Screenshot/GIF**
   - Homepage
   - Storia
   - Attrazioni
   - Info Pratiche
   <!-- Sezione Contatti rimossa -->

4. **Spiegazione Codice**
   - Mostra navbar.js (Gabriele)
   - Mostra animations.js (Membro 2)
   <!-- form-validation.js rimosso -->

5. **Workflow GitHub**
   - Mostra il tab "Pull requests"
   - Mostra il tab "Commits"
   - Mostra il tab "Network"

---

## 📚 RISORSE UTILI

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Can I Use](https://caniuse.com/)

---

## ⚠️ IMPORTANTE!

### Cosa NON fare:

❌ Non usare jQuery (usa vanilla JS ES6+)
❌ Non fare commit con "fix" senza descrizione
❌ Non pushare file personali (.DS_Store, node_modules)
❌ Non fare tutto l'ultimo giorno!
❌ Non copiare codice senza capirlo (spiega tutto!)

### Cosa fare:

✅ Testa il sito su mobile PRIMA di commitare
✅ Fai commit spesso (piccoli e significativi)
✅ Comunica con il gruppo su Discord/Telegram
✅ Chiedi aiuto al docente se bloccato
✅ Documenta tutto nella RELAZIONE

---

## 🎉 Pronto!

Sei pronto a partire! Inizia con:

```bash
# Step 1: Setup GitHub (Gabriele)
# Step 2: Clone e feature branch (Tutti)
# Step 3: Apri il sito localmente
# Step 4: Inizia a modificare i file
# Step 5: Fai commit e push
# Step 6: Crea Pull Request
```

**Buon lavoro! 🚀**

---

<!-- Sezione Contatti rimossa -->
- Domande? → Apri una Issue su GitHub
- Confuso? → Leggi README.md e RELAZIONE.md
- Bloccato? → Chiedi al docente o al gruppo

---

**Versione:** 1.0
**Data:** 2024
**Autore:** Project Team Dubai WebSite