# Content-Deliverables – Strukturierter Text pro Seite

Die **vollständigen, optimierten Texte** pro Seite liegen strukturiert in den JSON-Dateien unter `content/pages/`. Jede Datei enthält u. a.:

- **page** – Route (Slug)
- **seo** – title (≤60 Zeichen), description (≤155 Zeichen)
- **hero** – h1, subline, ctas[] (label, href, primary)
- **sections** – optional: title, body, bullets[]
- **teasers** – optional (Produkte-Übersicht): title, excerpt, href
- **legal** – optional (Impressum/Datenschutz): sections[] oder placeholder + notice
- **primaryCta** – Haupt-Button der Seite

## Kurzreferenz pro Route

| Route | Content-Datei | H1 (Kern) |
|-------|----------------|-----------|
| `/` | `content/pages/home.json` | Ihre Apotheke in Bad Waltersdorf |
| `/ueber-uns/` | `content/pages/ueber-uns.json` | Ihre Apotheke mit ausführlicher, persönlicher Beratung in Bad Waltersdorf |
| `/leistungen/` | `content/pages/leistungen.json` | Die umfangreichen Leistungen unserer Apotheke werden Sie begeistern |
| `/produkte/` | `content/pages/produkte.json` | Werfen Sie einen Blick in die Produkt-Vielfalt unserer Apotheke |
| `/produkte/immunsystemstaerkung/` | `content/pages/produkte-immunsystemstaerkung.json` | Wirksame Produkte zur Immunsystemstärkung |
| `/produkte/kosmetik/` | `content/pages/produkte-kosmetik.json` | Kosmetikprodukte namhafter Hersteller in Apothekenqualität |
| `/produkte/homoeopathie/` | `content/pages/produkte-homoeopathie.json` | Homöopathie – Arzneimittel mit ganzheitlichem Ansatz |
| `/produkte/naturprodukte/` | `content/pages/produkte-naturprodukte.json` | Heilen mit der Kraft der Natur |
| `/produkte/aromatherapie/` | `content/pages/produkte-aromatherapie.json` | Beschwerden lindern mit Aromatherapie |
| `/kontakt/` | `content/pages/kontakt.json` | Kontakt & Anfahrt |
| `/kontakt/hartberg/` | `content/pages/kontakt-hartberg.json` | Hochwertige Naturprodukte kaufen bei Hartberg |
| `/impressum/` | `content/pages/impressum.json` | Impressum |
| `/datenschutz/` | `content/pages/datenschutz.json` | Datenschutz (Platzhalter) |

## Beispiel: Struktur einer Inhaltsseite (z. B. Leistungen)

```json
{
  "page": "/leistungen/",
  "seo": {
    "title": "Leistungen – Thermen Apotheke Bad Waltersdorf",
    "description": "Impfberatung, Reiseberatung, Kosmetik, Bachblüten, Teemischungen, Hausapotheken-Check. Unsere Leistungen im Überblick."
  },
  "hero": {
    "h1": "Die umfangreichen Leistungen unserer Apotheke werden Sie begeistern",
    "subline": "Von Impfberatung bis Hausapotheken-Check – wir beraten Sie gerne persönlich.",
    "ctas": [{ "label": "Kontakt aufnehmen", "href": "/kontakt/", "primary": true }]
  },
  "sections": [
    { "title": "Impfberatung", "body": "..." },
    { "title": "Reiseberatung", "body": "..." },
    ...
  ],
  "primaryCta": "Kontakt aufnehmen"
}
```

Die **HTML-Seiten** (`ueber-uns/index.html`, `leistungen/index.html`, …) sind so aufgebaut, dass sie diesen Inhalt abbilden. Änderungen an Texten können direkt in den HTML-Dateien oder zentral in den JSON-Dateien vorgenommen werden (bei JSON: anschließend HTML manuell anpassen oder einen kleinen Build-Schritt einrichten).

## Compliance

- Keine medizinischen Heilversprechen; Formulierungen wie „unterstützen“, „beraten“, „kann helfen“ verwendet.
- Fakten einheitlich: Neuübernahme ab 1. Jänner 2026 (Mag. Pharm. Doris Pieler, Mag. Pharm. Anna Katharina Wurzer); Nachtdienst 1455; Adresse Bad Waltersdorf 6, 8271; Telefon 03333 3970; E-Mail thermenapo.waltersdorf@aon.at; Öffnungszeiten Mo–Fr 08:00–12:30 & 14:30–18:00, Sa 08:00–12:00.
