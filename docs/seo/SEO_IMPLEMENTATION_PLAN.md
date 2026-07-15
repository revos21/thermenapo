# SEO Implementation Plan

## Zielbild

- Technische SEO-Basis vollständig herstellen.
- Lokale Sichtbarkeit für Bad Waltersdorf verbessern.
- Indexierung steuern und Thin/Utility-Seiten absichern.
- Rechtlich sensible Gesundheitsinhalte erst nach Freigabe optimieren.
- Änderungen zunächst nur auf Basis verifizierter Unternehmensdaten umsetzen.

## Nicht im Scope vor Freigabe

- Keine neuen Leistungsversprechen.
- Keine erfundenen Standort-, Team-, Öffnungs- oder Gesundheitsangaben.
- Keine finalen Texte für medizinisch/pharmazeutisch sensible Seiten ohne manuelle Prüfung.

## Arbeitspakete

## WP1: SEO-Basis im `<head>` aller produktiven Seiten

### Ziel

- Canonicals, konsistente Titles, Meta-Descriptions, OG/Twitter-Basis, Indexierungsregeln.

### Änderungen

- Pro produktiver HTML-Seite:
  - `rel="canonical"`
  - OG-Tags
  - Twitter-Card-Basis
  - `meta name="robots"` je nach Seitentyp

### Priorität

- kritisch

### Voraussichtlich betroffene Dateien

- `index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `leistungen/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/kosmetik/index.html`
- `produkte/homoeopathie/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- `kontakt/index.html`
- `kontakt/hartberg/index.html`
- `kontakt/danke/index.html`
- `kontakt/fehler/index.html`
- `impressum/index.html`
- `datenschutz/index.html`
- `webshop/index.html`

## WP2: Indexierungssteuerung und Crawl-Hygiene

### Ziel

- `robots.txt` und XML-Sitemap einführen.
- `noindex` für Utility-Seiten setzen.

### Änderungen

- `robots.txt` anlegen
- `sitemap.xml` anlegen
- Helper-Seiten aus Index fernhalten

### Priorität

- kritisch

### Voraussichtlich betroffene Dateien

- `robots.txt` neu
- `sitemap.xml` neu
- `kontakt/danke/index.html`
- `kontakt/fehler/index.html`
- `webshop/index.html`
- ggf. `scripts/inject-env.mjs` für stabile Helper-Metadaten

## WP3: Strukturierte Daten

### Ziel

- `Pharmacy`/`LocalBusiness`-Schema für Standort und Kontakt.
- `WebSite`-Schema für die Domain.
- `BreadcrumbList` auf Unterseiten.

### Abhängigkeit

- benötigte Basisdaten aus `SEO_REQUIRED_INFORMATION.md`

### Priorität

- hoch

### Voraussichtlich betroffene Dateien

- `index.html`
- `kontakt/index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `leistungen/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/kosmetik/index.html`
- `produkte/homoeopathie/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- `kontakt/hartberg/index.html`

## WP4: Informationsarchitektur und interne Verlinkung

### Ziel

- Crawl-Pfade stärken, Orphan-Page-Probleme lösen, Breadcrumbs ergänzen.

### Änderungen

- Entscheidung für `/kontakt/hartberg/`:
  - entweder strategisch aufwerten und sinnvoll intern verlinken
  - oder `noindex`/Entfernung
- Breadcrumb-Komponente in Unterseiten einbauen
- Related links zwischen Leistungs- und Produktclustern verbessern

### Priorität

- hoch

### Voraussichtlich betroffene Dateien

- `index.html`
- `kontakt/index.html`
- `kontakt/hartberg/index.html`
- `leistungen/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/kosmetik/index.html`
- `produkte/homoeopathie/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- ggf. `css/styles.css`

## WP5: Local SEO und Conversion-Signale

### Ziel

- Bessere lokale Signale für Bad Waltersdorf und verifizierte Einzugsgebiete.

### Änderungen

- NAP im strukturierten Datenmodell abbilden
- konsistente Öffnungszeiten maschinenlesbar machen
- sofern vorhanden: Google Business Profile / Maps / Social Profile verknüpfen
- lokale Landingpages nur bei echtem Mehrwert ausbauen

### Priorität

- hoch

### Voraussichtlich betroffene Dateien

- `index.html`
- `kontakt/index.html`
- `kontakt/hartberg/index.html`
- ggf. weitere lokale Landingpages nur nach Freigabe

## WP6: Performance-Optimierung

### Ziel

- LCP und mobile Ladezeit verbessern.

### Änderungen

- große PNGs in moderne Formate und kleinere Varianten überführen
- responsive Bilder mit `srcset`/`sizes`
- kritische Hero-Ressourcen priorisieren
- optional Font-/Image-Preload prüfen

### Priorität

- hoch

### Voraussichtlich betroffene Dateien

- `index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/kosmetik/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- `kontakt/index.html`
- `css/styles.css`
- Bilddateien unter `assets/images/**`

## WP7: Accessibility-Verbesserungen mit SEO-Nebeneffekt

### Ziel

- bessere Nutzbarkeit, klarere Semantik, weniger Qualitätsrisiko.

### Änderungen

- Skip-Link
- `aria-current` in Navigation
- Breadcrumb-Semantik
- optionale Prüfung von Fokus-States und Motion-Reduktion im UI

### Priorität

- mittel

### Voraussichtlich betroffene Dateien

- alle produktiven HTML-Seiten
- `css/styles.css`
- ggf. `js/script.js`

## WP8: Content- und Legal-Hardening

### Ziel

- Gesundheits- und Rechtsinhalte fachlich absichern, dann erst SEO-intensiv ausbauen.

### Änderungen

- sensible Claims abschwächen oder mit zulässiger Formulierung neu schreiben
- Team-, Leitungs-, Service- und Rechtsdaten verifizieren
- Datenschutz/Impressum juristisch finalisieren

### Priorität

- kritisch

### Voraussichtlich betroffene Dateien

- `index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `leistungen/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/homoeopathie/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- `kontakt/hartberg/index.html`
- `impressum/index.html`
- `datenschutz/index.html`
- ggf. `content/pages/*.json`, wenn diese weiter als Referenz gepflegt werden sollen

## Empfohlene Reihenfolge

1. Verifizierte Pflichtdaten vom Kunden einsammeln.
2. Utility-Seiten-Indexierung, `robots.txt`, Sitemap und Canonicals umsetzen.
3. Strukturierte Daten auf Basis bestätigter Daten ergänzen.
4. Interne Verlinkung und Local-SEO-Struktur bereinigen.
5. Performance-Optimierungen an Bildern und Hero-Ressourcen umsetzen.
6. Sensible Inhalte erst nach rechtlicher/fachlicher Freigabe textlich schärfen.

## Validierung nach Umsetzung

- manuelle Prüfung aller Canonicals
- Sitemap-Validierung
- Robots-Validierung
- Rich-Results-/Schema-Validierung
- Crawl-Check für Orphans und `noindex`-Seiten
- Pagespeed-/Lighthouse-Check mobil
- manuelle Prüfung der finalen Gesundheits- und Rechtstexte

## Dateien, die bei der Umsetzung voraussichtlich geändert würden

- `index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `leistungen/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/kosmetik/index.html`
- `produkte/homoeopathie/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- `kontakt/index.html`
- `kontakt/hartberg/index.html`
- `kontakt/danke/index.html`
- `kontakt/fehler/index.html`
- `impressum/index.html`
- `datenschutz/index.html`
- `webshop/index.html`
- `css/styles.css`
- `js/script.js`
- `scripts/inject-env.mjs`
- `robots.txt` neu
- `sitemap.xml` neu
- ggf. `content/pages/*.json`
- ggf. Bilddateien unter `assets/images/**`
