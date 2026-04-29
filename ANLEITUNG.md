# Thermen Apotheke – Website ansehen & deployen

## Lokal ansehen

### Option 1: Ohne Server
1. **Finder** öffnen.
2. Zum Ordner **thermen-apotheke** wechseln.
3. **index.html** doppelklicken.

Die Startseite öffnet sich im Browser. Unterordner-Seiten (z. B. Über uns, Kontakt) sind über die Navigation erreichbar; die Links sind relativ und funktionieren auch ohne Server.

### Option 2: Mit Server (empfohlen für alle Routen)
Falls Node.js installiert ist (z. B. über https://nodejs.org):

```bash
cd ~/thermen-apotheke
npx serve
```

Dann im Browser **http://localhost:3000** aufrufen. So werden alle URLs (/, /ueber-uns/, /kontakt/, …) korrekt ausgeliefert.

---

## Auf GitHub & Server übertragen

1. **Git-Repo anlegen** (falls noch nicht geschehen):
   ```bash
   cd thermen-apotheke
   git init
   git add .
   git commit -m "Thermen Apotheke Website – Mehrseitig, Content integriert"
   ```

2. **Auf GitHub pushen:**
   - Auf GitHub ein neues Repository anlegen (z. B. `thermen-apotheke`).
   - Remote hinzufügen und pushen:
   ```bash
   git remote add origin https://github.com/DEIN-USERNAME/thermen-apotheke.git
   git branch -M main
   git push -u origin main
   ```

3. **Server / Hosting:**
   - **Eigener Server (Apache/nginx):** Projektordner ins Document Root kopieren. Die Struktur mit `index.html` pro Ordner (z. B. `ueber-uns/index.html`) wird von gängigen Servern automatisch für saubere URLs genutzt.
   - **GitHub Pages:** Unter Settings → Pages → Source „Deploy from a branch“ wählen, Branch z. B. `main`, Ordner `/(root)`. Die Seite ist dann unter `https://DEIN-USERNAME.github.io/thermen-apotheke/` erreichbar (oder unter einer eigenen Domain, wenn konfiguriert).

Weitere Details siehe **README.md**.

---

**Pfad zum Projekt:**  
`/Users/oliversommer/thermen-apotheke`
