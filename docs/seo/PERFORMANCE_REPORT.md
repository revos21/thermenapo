# Performance Report

## Umfang der Umsetzung

Es wurde ausschließlich das Arbeitspaket `Performance und Bilder` umgesetzt. Texte, SEO-Metadaten, Rechtstexte, Navigationsstruktur und sichtbares Layout wurden nicht inhaltlich verändert.

## Geänderte Dateien

### HTML/CSS

- `css/styles.css`
- `index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/kosmetik/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`

### Neu erzeugte Bilddateien

- `assets/images/topics/HeroPage2-960.webp`
- `assets/images/topics/HeroPage2-1448.webp`
- `assets/images/interior/inside/ApoProdukte-480.webp`
- `assets/images/interior/inside/ApoProdukte-960.webp`
- `assets/images/interior/inside/AnnaundKollegin-640.webp`
- `assets/images/interior/inside/AnnaundKollegin-1280.webp`
- `assets/images/interior/outside/ApoOutside-640.webp`
- `assets/images/interior/outside/ApoOutside-1280.webp`
- `assets/images/interior/inside/ApoImmunsystem-640.webp`
- `assets/images/interior/inside/ApoImmunsystem-1200.webp`
- `assets/images/interior/inside/ApoSonnencreme-640.webp`
- `assets/images/interior/inside/ApoSonnencreme-1200.webp`
- `assets/images/interior/inside/ApoTeewand-640.webp`
- `assets/images/interior/inside/ApoTeewand-1200.webp`
- `assets/images/interior/inside/ApoAromaTherapie-640.webp`
- `assets/images/interior/inside/ApoAromaTherapie-960.webp`
- `assets/images/team/AnnaWurzer-384.webp`
- `assets/images/team/AnnaWurzer-768.webp`
- `assets/images/team/JuliaHoefler-384.webp`
- `assets/images/team/JuliaHoefler-768.webp`
- `assets/images/team/ElisabethKoenigshofer-384.webp`
- `assets/images/team/ElisabethKoenigshofer-768.webp`
- `assets/images/team/RaberCarina-384.webp`
- `assets/images/team/RaberCarina-768.webp`
- `assets/images/team/RetterKarina-384.webp`
- `assets/images/team/RetterKarina-768.webp`
- `assets/images/team/AnnaWeinzettel-384.webp`
- `assets/images/team/AnnaWeinzettel-768.webp`
- `public/botanical-overlay-1024.webp`

## Umgesetzte Optimierungen

- Hero-Bild der Startseite auf responsive `picture`-Auslieferung mit WebP-Fallback umgestellt.
- Hero-Bild per `preload` und `fetchpriority="high"` priorisiert.
- Doppelte mobile Hero-Hintergrundladung auf der Startseite unterbunden.
- Große Inhaltsbilder auf den Hauptseiten und Produktseiten auf responsive WebP-Varianten umgestellt.
- Teamfotos auf kleinere responsive WebP-Varianten umgestellt.
- Breite und Höhe für alle betroffenen Bilder explizit beibehalten, um Layout Shifts zu vermeiden.
- Lazy Loading bei nicht-kritischen Bildern beibehalten.
- Hero-Bild explizit nicht lazy geladen.
- Dekoratives Overlay von PNG auf WebP per `image-set()` umgestellt.
- `@font-face`-Definitionen in `css/styles.css` integriert, damit kein zusätzlicher CSS-Request für `fonts.css` mehr nötig ist.

## Vorher/Nachher Dateigrößen

### Hero und große Inhaltsbilder

| Datei | Vorher | Nachher |
| --- | ---: | ---: |
| `HeroPage2.png` | 2.307.296 B | `HeroPage2-960.webp` 89.590 B / `HeroPage2-1448.webp` 202.490 B |
| `ApoOutside.png` | 2.936.959 B | `ApoOutside-640.webp` 42.828 B / `ApoOutside-1280.webp` 180.730 B |
| `ApoProdukte.png` | 2.403.553 B | `ApoProdukte-480.webp` 41.168 B / `ApoProdukte-960.webp` 147.466 B |
| `AnnaundKollegin.png` | 1.801.006 B | `AnnaundKollegin-640.webp` 29.398 B / `AnnaundKollegin-1280.webp` 72.152 B |
| `ApoImmunsystem.png` | 2.006.556 B | `ApoImmunsystem-640.webp` 35.104 B / `ApoImmunsystem-1200.webp` 91.686 B |
| `ApoSonnencreme.png` | 2.234.544 B | `ApoSonnencreme-640.webp` 47.690 B / `ApoSonnencreme-1200.webp` 128.644 B |
| `ApoTeewand.png` | 2.496.765 B | `ApoTeewand-640.webp` 59.234 B / `ApoTeewand-1200.webp` 153.196 B |
| `ApoAromaTherapie.png` | 2.176.721 B | `ApoAromaTherapie-640.webp` 39.160 B / `ApoAromaTherapie-960.webp` 82.820 B |
| `botanical-overlay.png` | 1.077.568 B | `botanical-overlay-1024.webp` 35.674 B |

### Teamfotos

| Datei | Vorher | Nachher |
| --- | ---: | ---: |
| `AnnaWurzer.png` | 1.764.899 B | `AnnaWurzer-384.webp` 7.336 B / `AnnaWurzer-768.webp` 23.172 B |
| `JuliaHoefler.png` | 1.647.435 B | `JuliaHoefler-384.webp` 5.834 B / `JuliaHoefler-768.webp` 17.194 B |
| `ElisabethKoenigshofer.png` | 1.684.016 B | `ElisabethKoenigshofer-384.webp` 6.666 B / `ElisabethKoenigshofer-768.webp` 20.976 B |
| `RaberCarina.png` | 1.751.215 B | `RaberCarina-384.webp` 6.098 B / `RaberCarina-768.webp` 17.640 B |
| `RetterKarina.png` | 1.650.544 B | `RetterKarina-384.webp` 5.878 B / `RetterKarina-768.webp` 16.454 B |
| `AnnaWeinzettel.png` | 1.921.392 B | `AnnaWeinzettel-384.webp` 8.036 B / `AnnaWeinzettel-768.webp` 28.104 B |

## Erwarteter LCP-Gewinn

- Startseite: voraussichtlich deutlicher Gewinn beim LCP, weil das priorisierte Hero-Bild nicht mehr als 2,3 MB PNG, sondern als ca. 90 KB bis 202 KB WebP geladen wird.
- Konservative Erwartung für mobile Verbindungen: ca. `0,8 s bis 1,8 s` besserer LCP auf der Startseite, abhängig von Endgerät, Netz und Cache-Zustand.
- Zusätzlich sinkt das Risiko unnötiger Mehrfachdownloads auf Mobilgeräten, weil die generische mobile Hero-Hintergrundgrafik auf der Startseite nicht mehr parallel zum eigentlichen Hero-Bild sichtbar geladen werden muss.

## Prüfung weiterer Ressourcen

- CSS: ein zusätzlicher CSS-Request wurde entfernt, indem `fonts.css` nicht mehr separat eingebunden werden muss.
- Fonts: bestehende Font-Dateien wurden nicht inhaltlich geändert, nur die Einbindung wurde verschlankt.
- Preload: nur für das kritische Hero-Bild ergänzt.
- Preconnect: nicht ergänzt, weil keine dauerhaft kritische Drittanbieter-Connection im initialen Renderpfad identifiziert wurde.
- Unnötige Ressourcen: dekorative PNG-Overlays wurden auf WebP umgestellt; weitere ungenutzte Altdateien wurden bewusst nicht gelöscht, um keine Projektstruktur zu verändern.

## Verbleibende Optimierungsmöglichkeiten

- Laufzeitmessung mit Lighthouse oder WebPageTest, um den tatsächlichen LCP-, CLS- und Byte-Gewinn unter realen Profilen zu quantifizieren.
- Optional AVIF-Varianten ergänzen, falls künftig ein stabiler Build-Schritt oder Tooling dafür eingeführt wird.
- Nicht verwendete große Alt-PNGs langfristig aus dem Repository oder dem produktiven Pfad entfernen, sofern das Projektteam die Bereinigung freigibt.
- Bildgenerierung in einen reproduzierbaren Build-Prozess überführen, damit neue Inhalte automatisch responsive Varianten erhalten.
