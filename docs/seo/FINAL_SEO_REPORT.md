# Final SEO Report

## Umfang des Final Audits

Geprüft wurden ausschließlich:

- Canonicals
- robots
- sitemap
- interne Links
- Broken Links
- Breadcrumbs
- strukturierte Daten
- Open Graph
- Twitter Cards
- Accessibility
- Core Web Vitals
- Bilder
- Alt-Texte
- H1-H6-Struktur
- Duplicate Titles
- Duplicate Descriptions
- Indexierungsstatus
- Orphan Pages
- Redirects
- HTML-Validität
- Semantik
- Mobile Darstellung
- versteckte Links / versteckte Texte
- Keyword-Stuffing
- Doorway-Pages
- intern erkennbare erfundene Inhalte
- Änderungen an Impressum / Datenschutz / medizinischen Aussagen im Rahmen dieses Audits

Es wurden keine neuen Features implementiert. Im Rahmen dieses Final Audits wurden keine produktiven Seiteninhalte geändert; erstellt wurde ausschließlich diese Report-Datei.

## Bestandene Prüfungen

- `Canonical`: Alle indexierbaren Hauptseiten besitzen genau einen selbstreferenziellen Canonical.
- `robots`: Indexierbare Seiten stehen auf `index, follow`; Utility-Seiten wie `kontakt/danke/`, `kontakt/fehler/`, `kontakt/hartberg/` und `webshop/` stehen auf `noindex, follow`.
- `sitemap`: `sitemap.xml` enthält ausschließlich die indexierbaren Kernseiten und keine `noindex`-Utility-Seiten.
- `robots.txt`: vorhanden, erlaubt Crawling und referenziert die Sitemap korrekt.
- `Interne Links`: Der Kernbereich der Website ist intern verbunden; alle indexierbaren Sitemap-URLs besitzen interne Eingangslinks.
- `Broken Links`: Im lokalen Audit wurden keine defekten internen HTML-, Asset-, CSS-, JS- oder Bildreferenzen gefunden.
- `Breadcrumbs`: Für die indexierbaren Unterseiten wurden valide `BreadcrumbList`-JSON-LD-Blöcke gefunden.
- `Strukturierte Daten`: Alle vorhandenen JSON-LD-Blöcke sind syntaktisch valide; die erwarteten Typen (`WebSite`, `WebPage`, `Pharmacy`, `ContactPage`, `BreadcrumbList`) sind korrekt zugeordnet.
- `Open Graph`: Für alle indexierbaren Kernseiten sind `og:title`, `og:description` und `og:url` vorhanden.
- `Twitter Cards`: Für alle indexierbaren Kernseiten sind `twitter:card`, `twitter:title` und `twitter:description` vorhanden.
- `Accessibility-Grundstruktur`: Alle geprüften Seiten besitzen genau ein `main`, genau ein `h1`, ein Viewport-Meta-Tag und beschriftete Hauptnavigation (`aria-label="Hauptnavigation"`).
- `Bilder`: Die zentralen Fotos sind vorhanden, lokal auslieferbar und auf den wesentlichen Seiten responsiv eingebunden.
- `Alt-Texte`: Es wurden keine fehlenden `alt`-Attribute gefunden; leere `alt`-Attribute werden nur für dekorative Karten-Platzhalter verwendet.
- `H1-H6-Struktur`: Es gibt keine Seiten mit mehrfachen `h1`; die Überschriftenhierarchie ist insgesamt konsistent ohne grobe Strukturbrüche.
- `Duplicate Titles`: keine doppelten Seitentitel gefunden.
- `Duplicate Descriptions`: keine doppelten Meta-Descriptions gefunden.
- `Indexierungsstatus`: Sitemap-, Canonical- und Robots-Status sind für die indexierbaren Seiten konsistent.
- `Redirects`: `_redirects` ist vorhanden; `/webshop` und `/webshop/` leiten konsistent per `302` weiter.
- `Semantik`: Die Seiten verwenden konsistente Landmarken mit `header`, `main`, `footer`, `nav`, `section`, `article`, `address` und Formular-Labels.
- `Keyword-Stuffing`: Im aktuellen Seitenstand wurden keine auffälligen Keyword-Häufungen identifiziert, die als Stuffing einzustufen wären.
- `Versteckte SEO-Texte`: Es wurden keine versteckten, keyword-orientierten SEO-Texte gefunden.
- `Erfundene Inhalte`: Im Repository wurden keine intern widersprüchlichen oder offensichtlich frei erfundenen Ergänzungen erkannt. Eine externe Tatsachenprüfung war nicht Bestandteil dieses repo-basierten Audits.
- `Impressum/Datenschutz/medizinische Aussagen`: Im Rahmen dieses Final Audits wurden daran keine Änderungen vorgenommen.

## Warnungen

### 1. Versteckter interner Link auf der Produktübersicht

- In [produkte/index.html](/Users/oliversommer/thermen-apotheke/produkte/index.html:124) existiert ein ausgeblendeter `article`-Block mit internem Link auf `produkte/homoeopathie/`.
- Das ist kein Broken Link, aber technisch ein versteckter interner Link.
- Die Seite `produkte/homoeopathie/` erhält aktuell nur `1` internen Link, und dieser liegt in diesem versteckten Teaser.

### 2. Doorway-/Landingpage-Risiko bei `kontakt/hartberg/`

- [kontakt/hartberg/index.html](/Users/oliversommer/thermen-apotheke/kontakt/hartberg/index.html:7) ist eine regionale Landingpage mit lokalisiertem Suchintent auf Hartberg.
- Sie ist zwar korrekt auf `noindex, follow` gesetzt und nicht in der Sitemap, bleibt aber in Aufbau und Zweck doorway-nah.
- Zusätzlich ist sie intern orphaned, also ohne interne Eingangslinks.

### 3. Interne Links auf eine Redirect-/Utility-Seite

- Mehrere CTAs verlinken intern auf `/webshop/`.
- `/webshop/` ist aktuell eine `noindex`-Utility-Seite mit Meta-Refresh und zusätzlichem `_redirects`-Redirect auf `/kontakt/`.
- Das ist funktional kein Broken Link, aber aus SEO-Sicht ein unnötiger interner Redirect-Hop.

### 4. HTML-Validität nicht vollständig sauber

- In mehreren Dateien werden rohe `&` verwendet, die für saubere HTML-Entity-Escapes besser als `&amp;` ausgegeben werden sollten.
- Betroffen sind insbesondere:
  - die Description-Metadaten auf [index.html](/Users/oliversommer/thermen-apotheke/index.html:8)
  - Titel-/OG-/Twitter-Titel auf [kontakt/index.html](/Users/oliversommer/thermen-apotheke/kontakt/index.html:7)
  - Google-Maps-Links mit `?api=1&query=...` in Header- und Kontakt-Links auf praktisch allen Seiten
- Das führt typischerweise nicht zu Rendering-Fehlern, ist aber kein vollständig valider HTML-Ausgabestand.

### 5. Bild-Markup noch nicht komplett einheitlich

- Auf [index.html](/Users/oliversommer/thermen-apotheke/index.html:449) fehlen den vier thematischen SVG-Illustrationen (`allergiezeit.svg`, `sommerhaut.svg`, `reiseapotheke.svg`, `hausapotheke.svg`) explizite `width`- und `height`-Attribute.
- Die Hauptfotos sind korrekt dimensioniert; das Restthema betrifft nur diese kleineren Illustrationen.

### 6. Funktional versteckte Elemente auf der Kontaktseite

- Auf [kontakt/index.html](/Users/oliversommer/thermen-apotheke/kontakt/index.html:160) gibt es versteckte Status-/Fehler-/Honeypot-Elemente.
- Diese wirken funktional legitim und nicht SEO-manipulativ.
- Sie sind daher kein Spam-Signal, aber formal als versteckte Elemente vorhanden.

### 7. Mobile- und CWV-Bewertung nur statisch, nicht live gemessen

- Die Codebasis zeigt gute Voraussetzungen für Mobile und Performance:
  - Viewport-Tags auf allen produktiven Seiten
  - responsive Bilder via `srcset`/`sizes`
  - priorisiertes Hero-Bild
  - Lazy Loading für nicht-kritische Bilder
  - responsive Breakpoints in `css/styles.css`
- Lokal stand jedoch kein Browser für einen echten Render- oder Lighthouse-Lauf zur Verfügung.
- Deshalb konnten `Core Web Vitals` und `Mobile Darstellung` nur codebasiert, nicht per Live-Messung bestätigt werden.

## Verbleibende Empfehlungen

- Den versteckten Homöopathie-Teaser auf der Produktübersicht entweder vollständig entfernen oder als sichtbaren, regulären internen Link ausspielen.
- Die noindex-Landingpage `kontakt/hartberg/` fachlich entscheiden: entweder endgültig entfernen oder klar als nicht-SEO-relevante Sonderseite behandeln.
- Interne Links auf `/webshop/` vermeiden, solange diese URL nur auf `/kontakt/` umleitet.
- Alle rohen `&` in HTML-Texten und Attributen sauber zu `&amp;` escapen, insbesondere in Metadaten und Maps-URLs.
- Den vier SVG-Illustrationen auf der Startseite feste `width`-/`height`-Attribute geben, um das Bild-Markup vollständig zu harmonisieren.
- Einen abschließenden Browser-basierten Lighthouse-/Mobile-Test durchführen, um LCP, CLS, INP und das responsive Verhalten unter realem Rendering zu bestätigen.

## Schlussbewertung

Es wurden keine kritischen technischen SEO-Probleme mehr identifiziert.

Aus technischer SEO-Sicht sind aktuell keine weiteren zwingenden Maßnahmen mehr erforderlich.

Es bleiben nur noch Bereinigungs- und Qualitätsmaßnahmen mit niedriger bis mittlerer Priorität, vor allem:

- versteckten internen Link bereinigen
- doorway-nahe `Hartberg`-Sonderseite fachlich klären
- interne Redirect-Hops über `/webshop/` vermeiden
- HTML-Entity-Escaping bereinigen
- finale Browser-basierte CWV-/Mobile-Messung nachziehen
