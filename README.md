# Thermen Apotheke Bad Waltersdorf – Website

Offizielle Website der Thermen Apotheke Bad Waltersdorf. Statische Website mit mehrseitigem Aufbau, optimiert für lokale SEO (Bad Waltersdorf, Thermenregion, Hartberg) und Conversion.

## Ordnerstruktur (Übersicht)

```
thermen-apotheke/
├── index.html                 # Startseite (/)
├── css/
│   └── styles.css             # Globale Styles
├── js/
│   └── script.js              # Menü, Scroll-Reveal, Hero-Animation
├── content/
│   ├── site.json              # Brand, Kontakt, Navigation
│   └── pages/                 # Seitentexte (JSON, Quelle für Redaktion)
│       ├── home.json
│       ├── ueber-uns.json
│       ├── leistungen.json
│       ├── produkte.json
│       ├── produkte-*.json
│       ├── kontakt.json
│       ├── kontakt-hartberg.json
│       ├── impressum.json
│       └── datenschutz.json
├── ueber-uns/
│   └── index.html
├── leistungen/
│   └── index.html
├── produkte/
│   └── index.html
│   ├── immunsystemstaerkung/
│   │   └── index.html
│   ├── kosmetik/
│   │   └── index.html
│   ├── homoeopathie/
│   │   └── index.html
│   ├── naturprodukte/
│   │   └── index.html
│   └── aromatherapie/
│       └── index.html
├── kontakt/
│   └── index.html
│   └── hartberg/
│       └── index.html
├── impressum/
│   └── index.html
├── datenschutz/
│   └── index.html
├── ANLEITUNG.md
├── ROUTES.md                  # Route → Seitentitel → CTA (Übersicht)
└── README.md
```

## Lokal ansehen

- **Ohne Server:** `index.html` im Browser öffnen (Doppelklick). Relative Links funktionieren; Startseite von Unterordnern aus mit `../` korrekt verlinkt.
- **Mit Server (empfohlen für alle Links):**
  ```bash
  cd thermen-apotheke
  npx serve
  ```
  Dann im Browser **http://localhost:3000** aufrufen.

## Auf GitHub & Server deployen

1. **Repository anlegen:** Projekt auf GitHub pushen (z. B. `username/thermen-apotheke`).
2. **GitHub Pages (optional):**
   - Settings → Pages → Source: Deploy from a branch.
   - Branch: `main` (oder `master`), Ordner: `/ (root)`.
   - Wenn die Seite unter `username.github.io/thermen-apotheke` liegt, ggf. im HTML `<base href="/thermen-apotheke/">` setzen oder Subpath in den Links berücksichtigen.
3. **Eigener Server:** Projektordner per FTP/SSH hochladen und Document Root auf den Projektordner zeigen. Apache/nginx liefern `index.html` für `/` und für `/ueber-uns/` die Datei `ueber-uns/index.html` aus.

## Deploy auf Netlify (automatisch)

- Das Projekt enthält eine `netlify.toml` im Root.
- Nach dem Verbinden des Repos mit Netlify startet jeder Push auf den verbundenen Branch automatisch ein Deploy.
- Publish-Ordner ist die Projektwurzel (`.`), da es eine statische Multi-Page-Website ist.

### Netlify Forms (Kontaktformular)

- Das Formular in `kontakt/index.html` ist für Netlify Forms vorbereitet (`data-netlify="true"` und Honeypot).
- Nach dem Absenden wird auf `kontakt/danke/` weitergeleitet.
- Jede Einsendung erscheint in Netlify unter **Forms**.

### E-Mail-Empfänger per Environment Variables

Für die automatische Mail-Benachrichtigung über die Netlify Function `netlify/functions/submission-created.mjs`:

- `RESEND_API_KEY` – API-Key von Resend
- `CONTACT_TO_EMAIL` – Empfängeradresse (z. B. office@domain.at)
- `CONTACT_FROM_EMAIL` – Absenderadresse (optional, Default: `onboarding@resend.dev`)

Diese Variablen setzt du in Netlify unter **Site settings → Environment variables**.

## Kontaktdaten (zentral)

- **Adresse:** Bad Waltersdorf 6, 8271 Bad Waltersdorf  
- **Telefon:** +43 3333 3970 (Anzeige: 03333 3970)  
- **E-Mail:** thermenapo.waltersdorf@aon.at  
- **Öffnungszeiten:** Mo–Fr 08:00–12:30 und 14:30–18:00, Sa 08:00–12:00  
- **Nachtdienst:** 1455, [apotheker.or.at](https://www.apotheker.or.at/nachtdienst)

## Rechtliches

- **Impressum:** Inhalt unter `content/pages/impressum.json` bzw. `impressum/index.html` – bei Änderungen beide anpassen oder nur HTML pflegen.
- **Datenschutz:** Aktuell Platzhalter. Rechtssichere DSGVO-Erklärung vom Projekt/Rechtsberater einholen und in `datenschutz/index.html` einfügen.

## Texte ändern

- **Schnell:** Direkt in den jeweiligen `*.html`-Dateien (z. B. `ueber-uns/index.html`).
- **Zentral:** In `content/pages/*.json` – diese Dateien sind die inhaltliche Referenz; ein Build-Step könnte daraus HTML erzeugen, aktuell werden die Texte manuell aus den JSON-Inhalten in die HTML-Seiten übernommen.
