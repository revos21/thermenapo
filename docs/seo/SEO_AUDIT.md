# SEO Audit

## Scope

- Analysiert wurde das gesamte Repository unter `/Users/oliversommer/thermen-apotheke`.
- Primär produktiv ist die statische Multi-Page-Site im Repository-Root. Das bestätigt `package.json` (`serve`) und `netlify.toml` (`publish = "."`).
- Zusätzlich liegt unter `frontend/` ein separater Vite/React-Scaffold, der derzeit nicht die primäre Website bildet. Er wurde als Repo-Bestandteil geprüft, aber nicht als Haupt-SEO-Zielsystem bewertet.
- Es wurden keine produktiven Dateien geändert.

## Architektur und Routing

## Produktive Architektur

- Statische HTML-Site mit folder-basierten Routen.
- Zentrale Styles in `css/styles.css`, zentrales Verhalten in `js/script.js`.
- Inhalte zusätzlich in `content/pages/*.json`, laut `README.md` aber nicht build-gesteuert, sondern manuell in HTML übernommen.
- Netlify-Build nutzt nur `scripts/inject-env.mjs` für Webshop-Redirects, nicht für SEO-Generierung.

## Gefundene produktive Routen

| Route | Datei | Status |
| --- | --- | --- |
| `/` | `index.html` | primäre Startseite |
| `/ueber-uns/` | `ueber-uns/index.html` | indexierbar |
| `/team/` | `team/index.html` | indexierbar |
| `/leistungen/` | `leistungen/index.html` | indexierbar |
| `/produkte/` | `produkte/index.html` | indexierbar |
| `/produkte/immunsystemstaerkung/` | `produkte/immunsystemstaerkung/index.html` | indexierbar, gesundheitssensibel |
| `/produkte/kosmetik/` | `produkte/kosmetik/index.html` | indexierbar |
| `/produkte/homoeopathie/` | `produkte/homoeopathie/index.html` | indexierbar, rechtlich sensibel |
| `/produkte/naturprodukte/` | `produkte/naturprodukte/index.html` | indexierbar, gesundheitssensibel |
| `/produkte/aromatherapie/` | `produkte/aromatherapie/index.html` | indexierbar, rechtlich sensibel |
| `/kontakt/` | `kontakt/index.html` | indexierbar |
| `/kontakt/hartberg/` | `kontakt/hartberg/index.html` | indexierbar, aber orphan/thin local page |
| `/kontakt/danke/` | `kontakt/danke/index.html` | technisch öffentlich, sollte sehr wahrscheinlich `noindex` sein |
| `/kontakt/fehler/` | `kontakt/fehler/index.html` | technisch öffentlich, sollte sehr wahrscheinlich `noindex` sein |
| `/impressum/` | `impressum/index.html` | indexierbar |
| `/datenschutz/` | `datenschutz/index.html` | indexierbar |
| `/webshop/` | `webshop/index.html` | Hilfs-/Redirect-Seite, sollte sehr wahrscheinlich `noindex` sein |

## Technische SEO

## Positiv

- Alle produktiven HTML-Seiten verwenden `lang="de-AT"`.
- Jede geprüfte Hauptseite hat genau ein `h1`.
- 15 von 16 produktiven Seiten haben eine Meta-Description.
- Die Site nutzt sprechende Verzeichnis-URLs.
- Semantische Grundstruktur mit `header`, `nav`, `main`, `footer` ist vorhanden.

## Kritische technische Defizite

### 1. Keine Canonicals auf irgendeiner produktiven Seite

- Beispiel Startseite: `index.html:3-10`
- Gleiches Muster auf allen HTML-Seiten.
- Risiko:
  - keine saubere Konsolidierung von URL-Varianten
  - keine klare Signalgebung bei künftigem Tracking, Parameter-URLs oder Mehrdomain-Betrieb
  - unkontrollierte Indexierung von Hilfsseiten

### 2. Kein `robots.txt`

- Im Repository wurde keine `robots.txt` gefunden.
- Risiko:
  - keine explizite Crawling-Steuerung
  - keine Sitemap-Referenz
  - keine Richtlinie für Hilfsseiten oder Assets

### 3. Keine XML-Sitemap

- Im Repository wurde keine `sitemap.xml` oder ähnliche Sitemap-Datei gefunden.
- Risiko:
  - schwächere Discovery neuer oder tieferer URLs
  - keine definierte Indexierungsquelle für Search Console/Bing

### 4. Keine Open-Graph-, Twitter- oder Share-Metadaten

- Auf keiner geprüften Seite vorhanden.
- Risiko:
  - schwache Darstellung in Social Shares, Messenger-Previews und Knowledge-Workflows

### 5. Kein strukturiertes Daten-Markup

- Kein `application/ld+json` auf produktiven Seiten.
- Es fehlen insbesondere:
  - `Pharmacy` oder `MedicalBusiness`
  - `LocalBusiness`
  - `WebSite`
  - `BreadcrumbList`
  - ggf. `ContactPage`

## Indexierungsrisiken

- `/kontakt/danke/`, `/kontakt/fehler/` und `/webshop/` sind öffentlich erreichbar, aber ohne `noindex`.
- Damit können Thin/Utility-Seiten indexiert werden.
- `webshop/index.html:7-18` ist eine reine Redirect-/Hilfsseite ohne Description, ohne Canonical und ohne Robots-Regel.

## Metadatenqualität

## Beobachtung

- Basis-Metadaten sind vorhanden, aber oft nur minimal.
- Viele Titles sind generisch und nicht konsequent lokal oder intent-basiert ausformuliert.
- Beispiel:
  - `leistungen/index.html:7-8`
  - `produkte/index.html:7-8`
  - `kontakt/hartberg/index.html:7-8`

## Bewertung

- Kein akuter Totalausfall, aber deutliches Optimierungspotenzial für CTR und Suchintention.
- `kontakt/hartberg/` ist lokal fokussiert, aber zu dünn und aktuell nicht intern verlinkt.

## Interne Verlinkung

## Positiv

- Hauptnavigation ist auf allen Kernseiten konsistent.
- Produktdetailseiten sind über `/produkte/` erreichbar.
- Homepage verlinkt mehrere Leistungs- und Produktcluster.

## Probleme

### 1. Orphan-Page `/kontakt/hartberg/`

- Interne Link-Analyse: keine eingehenden internen Links gefunden.
- Datei: `kontakt/hartberg/index.html`
- Folge:
  - schwache Discoverability
  - inkonsistente lokale SEO-Strategie
  - hohe Gefahr, dass die Seite entweder nicht performt oder als dünne Location-Seite wirkt

### 2. Keine Breadcrumbs

- Kein Breadcrumb-Markup, keine Breadcrumb-Navigation.
- Besonders relevant für tiefere Produktseiten.

### 3. Utility-Seiten ohne Indexierungssteuerung

- `/kontakt/danke/` und `/kontakt/fehler/` haben 0 interne Eingangslinks, sind aber öffentlich.
- Für SEO sollten sie nicht indexiert werden.

## Footer und NAP

## Positiv

- Footer mit Adresse, Telefon und Öffnungszeiten ist auf fast allen Kernseiten vorhanden.
- NAP-Daten sind in der geprüften HTML-Ausgabe weitgehend konsistent.
- Kontaktseite nutzt zusätzlich `<address>` und gut lesbare Kontaktblöcke (`kontakt/index.html:127-143`).

## Lücken

- Kein maschinenlesbares LocalBusiness-Schema trotz vorhandener NAP-Daten.
- Keine maschinenlesbaren OpeningHours im Schema.
- Keine eindeutige Verknüpfung zu Google Business Profile, Apple Maps Listing oder Social Profilen.

## Local SEO

## Positiv

- Starker Ortsbezug zu Bad Waltersdorf und Thermenregion.
- Kontaktinformationen, Öffnungszeiten und Anfahrt sind prominent eingebunden.
- Karten-Lösung wird datenschutzfreundlich erst nach Einwilligung geladen (`index.html:425-449`, `kontakt/index.html:100-124`).

## Risiken

### 1. Hartberg-Landingpage ist dünn und orphan

- `kontakt/hartberg/index.html:42-63`
- Wenig Unique Content, keine Belege für echten separaten Leistungsbezug, keine unterstützenden lokalen Signale.
- Kann als schwache Doorway-/Satellitenseite interpretiert werden, wenn weitere ähnliche Seiten folgen.

### 2. Fehlende strukturierte lokale Signale

- Kein `Pharmacy`-/`LocalBusiness`-Schema.
- Kein konsistentes Orts-/Geo-Markup.

### 3. Keine Sitemap- und Robots-Anbindung für lokale Landingpages

- Discovery und Priorisierung lokaler Seiten bleibt dem Zufall überlassen.

## Performance

## Positiv

- Fonts werden lokal gehostet und mit `font-display: swap` geladen (`css/fonts.css`).
- Viele Bilder nutzen `loading="lazy"` und feste Breiten/Höhen.
- JavaScript ist relativ klein (`js/script.js` ca. 11 KB).

## Kritische Performance-Befunde

### 1. Sehr große PNG-Dateien

- Beispiele:
  - `assets/images/interior/outside/ApoOutside.png` ca. 2.94 MB
  - `assets/images/interior/inside/ApoTeewand.png` ca. 2.50 MB
  - `assets/images/interior/inside/ApoProdukte.png` ca. 2.40 MB
  - `assets/images/topics/HeroPage2.png` ca. 2.31 MB
  - mehrere Teamfotos zwischen ca. 1.64 MB und 1.92 MB

### 2. LCP-Risiko auf der Startseite

- Hero-Bild wird eager geladen: `index.html:41`
- Die Quelldatei ist sehr groß und aktuell kein WebP/AVIF.

### 3. Kein Hinweis auf Bildvarianten

- Keine `srcset`-/`sizes`-Nutzung gefunden.
- Keine responsive Bildauslieferung.

### 4. Keine Resource-Hints

- Keine Preloads für kritische Hero-Bilder oder Fonts.
- Keine `preconnect`-/`dns-prefetch`-Strategie für externe Ziele.

## Accessibility

## Positiv

- `lang="de-AT"` gesetzt.
- Hauptnavigation trägt `aria-label`.
- Kontaktformular ist ordentlich gelabelt (`kontakt/index.html:68-86`).
- Karten-Consent und Interaktion sind mit Buttons statt reinen Links umgesetzt.
- Statusmeldungen im Formular nutzen `role="status"` / `aria-live`.

## Offene Punkte / Schwächen

### 1. Keine Skip-Link-Navigation gefunden

- Das erschwert Tastatur- und Screenreader-Nutzung auf wiederkehrenden Seitenstrukturen.

### 2. Kein `aria-current` in der Navigation

- Nutzer sehen programmatisch nicht, auf welcher Seite sie sich befinden.

### 3. Accessibility konnte nicht mit Browser-Audit verifiziert werden

- Farbkontrast, Fokusreihenfolge, Motion-Verhalten und Tastaturpfade wurden statisch geprüft, nicht mit Lighthouse/Assistive-Tech gemessen.

## Gesundheits- und YMYL-/Legal-Risiken

## Hohe Priorität zur manuellen Prüfung

### 1. Medizinische/gesundheitsbezogene Leistungsclaims

- `leistungen/index.html:57-65`
- `index.html:129-139`
- `index.html:301-310`
- Inhalte zu HbA1c, Lipiden, Eisen/Vitamin D, Stresstest und Frauengesundheit sind rechtlich sensibel und müssen auf tatsächliche Verfügbarkeit, Zulässigkeit und Formulierung geprüft werden.

### 2. Homöopathie-Claims

- `produkte/homoeopathie/index.html:48-77`
- Formulierungen wie "unterstützen", "fördern", "begleiten" sind im Gesundheitskontext sensibel und sollten rechtlich/fachlich freigegeben werden.

### 3. Aromatherapie-Claims

- `produkte/aromatherapie/index.html:52-82`
- Aussagen zu Entspannung, Schlaf und Konzentration sind potentiell wirkungsbezogen.

### 4. Immunsystem-Claims

- `produkte/immunsystemstaerkung/index.html:42-83`
- `index.html:249-251`
- Aussagen wie "Abwehrkräfte gezielt und nachhaltig", "stärken", "wirksam" brauchen fachlich saubere und rechtlich belastbare Formulierungen.

### 5. Team- und Qualifikationsangaben

- `team/index.html:63-136`
- Namen, Rollen, Spezialisierungen und Bildrechte müssen manuell bestätigt werden.
- Besonders sensibel:
  - "Nährstoffexpertin"
  - "Schüssler Salze mit Antlitzanalyse"
  - "Orthomolekulare Medizin"
  - "Bachblüten"

### 6. Datums- und Übernahmeangaben

- `ueber-uns/index.html:8`
- `index.html:408`
- `kontakt/hartberg/index.html:59`
- Zeitbezogene Angaben zur Neuübernahme können schnell veralten und sollten gegen den aktuellen Stand geprüft werden.

### 7. Impressum/Datenschutz mit konkreten Unternehmensdaten

- `impressum/index.html:45-132`
- `datenschutz/index.html:45-200`
- UID, Firmenbuchnummer, Geschäftsführung, DSB-Hinweise, Auftragsverarbeiter und rechtliche Aussagen müssen juristisch geprüft werden.

## Repo-/Prozessrisiko

- Inhalte existieren parallel in `content/pages/*.json` und in den produktiven HTML-Dateien.
- Laut `README.md` findet aktuell keine automatische Generierung statt.
- Risiko:
  - Metadaten-Drift
  - Content-Inkonsistenzen
  - SEO-Änderungen müssen mehrfach gepflegt werden

## Wichtigste Befunde in Prioritätsreihenfolge

1. Es gibt aktuell keinerlei Canonicals, keine Sitemap, keine `robots.txt` und kein strukturiertes Daten-Markup.
2. Indexierungssteuerung für Utility-Seiten fehlt komplett (`/webshop/`, `/kontakt/danke/`, `/kontakt/fehler/`).
3. Mehrere YMYL-/Gesundheitsclaims sind fachlich und rechtlich sensibel und müssen vor SEO-Ausbau manuell freigegeben werden.
4. Die lokale Landingpage `/kontakt/hartberg/` ist thin und intern nicht verlinkt.
5. Große Bilddateien gefährden LCP und mobile Performance.

## Positive Ausgangslage

- Saubere statische Architektur ohne Framework-Komplexität.
- Konsistente Grundnavigation und klare URL-Struktur.
- Solide lokale NAP-Signale im sichtbaren Content.
- Gute Basis für schnelle technische SEO-Nachrüstung.
