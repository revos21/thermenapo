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

- Das Formular in `kontakt/index.html` ist für Netlify Forms vorbereitet (`data-netlify="true"`, Honeypot, Pflicht-Checkbox für Datenschutz).
- Nach dem Absenden wird auf `kontakt/danke/` weitergeleitet.
- Jede Einsendung erscheint in Netlify unter **Forms** (inkl. Feld `privacy-consent`).

### Kontaktformular – Setup & Betrieb

#### Environment Variables (Netlify → Site settings → Environment variables)

| Variable | Zweck | Beispiel |
|----------|--------|----------|
| `RESEND_API_KEY` | Authentifizierung bei Resend | `re_…` |
| `CONTACT_TO_EMAIL` | Empfänger (Microsoft-365-Postfach der Apo) | `office@thermen-apo.at` |
| `CONTACT_FROM_EMAIL` | Absender (Domain muss in Resend verifiziert sein) | `kontakt@ihre-domain.at` |
| `PARTNER_SHOP_URL` | Ziel-URL für `/webshop/`-Redirect | `https://partner-apotheke.at/shop` |

#### Einrichtung (Reihenfolge)

1. **Deploy auf Netlify** – Formular „contact“ erscheint unter *Forms* nach dem ersten Deploy.
2. **Resend-Konto** – Domain verifizieren (SPF/DKIM laut Resend-Dashboard), API-Key erzeugen.
3. **Env-Variablen setzen** – danach **Redeploy** (Functions lesen Env erst nach Deploy).
4. **Function prüfen** – `netlify/functions/submission-created.mjs` wird bei jeder Form-Submission automatisch ausgelöst.
5. **Microsoft 365** – Postfach unter `CONTACT_TO_EMAIL` empfangsbereit halten; ggf. Spam-Regel für Absender-Domain.
6. **Optional in Netlify UI** – zusätzliche E-Mail-Benachrichtigung unter *Forms* als Fallback; Spam/hCaptcha unter *Site settings → Forms*.
7. **Test** – Formular mit Datenschutz-Checkbox absenden → Eintrag in Netlify Forms + E-Mail im M365-Postfach.

#### Ablauf

Netlify Forms → Function `submission-created` → Resend API → Microsoft-365-Postfach (`CONTACT_TO_EMAIL`).

Keine Azure App-Registrierung oder Microsoft-SMTP-Passwörter nötig – Resend übernimmt den Versand, die Apotheke empfängt im Microsoft-Postfach.

### Partner-Webshop (Produktseiten)

Auf allen Produktseiten ist der Button **„Produkte im Online-Shop“** dauerhaft sichtbar (unter dem Beratungs-CTA). Die Ziel-URL wird beim Deploy gesetzt:

- `PARTNER_SHOP_URL` – vollständige URL zum externen Shop (z. B. `https://partner-apotheke.at/shop`)

Das Build-Script [scripts/inject-env.mjs](scripts/inject-env.mjs) macht beim Netlify-Build drei Dinge:

1. [`_redirects`](_redirects) mit erzwungenem Redirect `302!` (`/webshop/` → Partner-URL)
2. [webshop/index.html](webshop/index.html) – Meta-Refresh und JavaScript-Fallback auf die Partner-URL
3. Shop-Buttons in 11 Seiten – bei gesetzter Variable direkt `href="https://…"` statt `/webshop/`

**Netlify einrichten**

| Punkt | Erwartung |
|--------|-----------|
| Variablenname | exakt `PARTNER_SHOP_URL` |
| Wert | vollständige URL mit `https://` (ohne Anführungszeichen im UI) |
| Scope | **Build** oder „All scopes“ |
| Nach Änderung | **Clear cache and deploy site** |

**Deploy-Log prüfen** (Build command output):

- `inject-env: partner shop enabled` → Variable wurde gelesen, Weiterleitung aktiv
- `inject-env: partner shop fallback to /kontakt/` → Variable beim Build leer (Name/Scope/Branch prüfen)

**Fehlerindikator:** Erscheint die Zwischenseite mit Überschrift **„Partner-Webshop“**, greift die Partner-URL nicht (Redirect/Env/Deploy). Nach Fix: Klick auf Online-Shop öffnet direkt den externen Shop.

Ohne gesetzte Variable: `/webshop/` → `/kontakt/`, Buttons bleiben auf `/webshop/`.

Lokal testen:

```bash
PARTNER_SHOP_URL="https://example.com/shop" node scripts/inject-env.mjs
git checkout -- index.html ueber-uns/index.html leistungen/index.html team/index.html kontakt/index.html produkte/index.html produkte/kosmetik/index.html produkte/aromatherapie/index.html produkte/naturprodukte/index.html produkte/homoeopathie/index.html produkte/immunsystemstaerkung/index.html webshop/index.html
```

Für lokale Redirects am besten `netlify dev` nutzen; mit `npx serve` ohne vorheriges `inject-env` bleibt die Fallback-Seite unter [webshop/index.html](webshop/index.html).

## Rechtliches

- **Impressum:** Inhalt unter `content/pages/impressum.json` bzw. `impressum/index.html` – bei Änderungen beide anpassen oder nur HTML pflegen.
- **Datenschutz:** Strukturierte DSGVO-Erklärung in `datenschutz/index.html`; abschließende Prüfung durch Rechtsberater empfohlen.

## Kontaktdaten (zentral)

- **Adresse:** Bad Waltersdorf 6, 8271 Bad Waltersdorf  
- **Telefon:** +43 3333 3970 (Anzeige: 03333 3970)  
- **E-Mail:** office@thermen-apo.at  
- **Öffnungszeiten:** Mo–Fr 08:00–12:30 und 14:30–18:00, Sa 08:00–12:00  
- **Nachtdienst:** 1455, [Apothekensuche (Apothekerkammer)](https://www.apothekerkammer.at/apothekensuche)

## Texte ändern

- **Schnell:** Direkt in den jeweiligen `*.html`-Dateien (z. B. `ueber-uns/index.html`).
- **Zentral:** In `content/pages/*.json` – diese Dateien sind die inhaltliche Referenz; ein Build-Step könnte daraus HTML erzeugen, aktuell werden die Texte manuell aus den JSON-Inhalten in die HTML-Seiten übernommen.
