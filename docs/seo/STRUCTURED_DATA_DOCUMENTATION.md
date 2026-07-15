# Structured Data Documentation

## Umfang

Es wurden ausschließlich strukturierte Daten als JSON-LD ergänzt.

Implementiert wurden nur die angeforderten und fachlich passenden Typen:

- `WebSite`
- `WebPage`
- `Pharmacy`
- `BreadcrumbList`
- `ContactPage`

Nicht implementiert wurden:

- `Review`
- `AggregateRating`
- `FAQPage`
- `Product`
- `MedicalClinic`
- `Physician`
- erfundene `sameAs`-Profile
- erfundene Social-Links
- erfundene Geo-Koordinaten

## Verwendete, verifizierte Datenquellen im Repository

Die JSON-LD-Daten wurden ausschließlich aus bereits vorhandenen und eindeutig belegten Angaben übernommen:

- Seitentitel aus den vorhandenen `<title>`-Tags
- Beschreibungen aus den vorhandenen `meta name="description"`-Tags
- Canonical-URLs aus den vorhandenen `link rel="canonical"`-Tags
- Name der Apotheke aus sichtbaren Seiteninhalten und Footer
- Rechtsform `Thermen Apotheke Bad Waltersdorf KG` aus [impressum/index.html](/Users/oliversommer/thermen-apotheke/impressum/index.html:57)
- Adresse, Telefon und E-Mail aus [kontakt/index.html](/Users/oliversommer/thermen-apotheke/kontakt/index.html:140) und [impressum/index.html](/Users/oliversommer/thermen-apotheke/impressum/index.html:61)
- Öffnungszeiten aus [kontakt/index.html](/Users/oliversommer/thermen-apotheke/kontakt/index.html:148) und [index.html](/Users/oliversommer/thermen-apotheke/index.html:487)

## Implementierte Seiten

### Startseite

- [index.html](/Users/oliversommer/thermen-apotheke/index.html:20)
- Enthält `WebSite`, `Pharmacy` und `WebPage`

### Unterseiten mit `WebPage` und `BreadcrumbList`

- [ueber-uns/index.html](/Users/oliversommer/thermen-apotheke/ueber-uns/index.html:20)
- [team/index.html](/Users/oliversommer/thermen-apotheke/team/index.html:20)
- [leistungen/index.html](/Users/oliversommer/thermen-apotheke/leistungen/index.html:20)
- [produkte/index.html](/Users/oliversommer/thermen-apotheke/produkte/index.html:20)
- [produkte/immunsystemstaerkung/index.html](/Users/oliversommer/thermen-apotheke/produkte/immunsystemstaerkung/index.html:20)
- [produkte/homoeopathie/index.html](/Users/oliversommer/thermen-apotheke/produkte/homoeopathie/index.html:20)
- [produkte/kosmetik/index.html](/Users/oliversommer/thermen-apotheke/produkte/kosmetik/index.html:20)
- [produkte/naturprodukte/index.html](/Users/oliversommer/thermen-apotheke/produkte/naturprodukte/index.html:20)
- [produkte/aromatherapie/index.html](/Users/oliversommer/thermen-apotheke/produkte/aromatherapie/index.html:20)
- [impressum/index.html](/Users/oliversommer/thermen-apotheke/impressum/index.html:20)
- [datenschutz/index.html](/Users/oliversommer/thermen-apotheke/datenschutz/index.html:20)

### Kontaktseite

- [kontakt/index.html](/Users/oliversommer/thermen-apotheke/kontakt/index.html:20)
- Enthält `ContactPage`, `Pharmacy` und `BreadcrumbList`

## Aus bewusst nicht geänderten Seiten

Folgende Seiten wurden bewusst nicht mit neuen strukturierten Daten ergänzt, weil sie Utility-/Weiterleitungs- oder `noindex`-Seiten sind und daher hier nicht fachlich priorisiert wurden:

- `kontakt/danke/index.html`
- `kontakt/fehler/index.html`
- `kontakt/hartberg/index.html`
- `webshop/index.html`
- `frontend/index.html`

## Validierung

Alle neu eingefügten JSON-LD-Blöcke wurden lokal maschinell validiert:

- JSON-Syntax erfolgreich geparst
- `@context` geprüft
- erwartete Typen pro Seite geprüft
- Breadcrumb-Positionen und Pflichtfelder geprüft

Validierungsergebnis:

- `13` Dateien mit JSON-LD erfolgreich validiert
- keine Parse-Fehler
- keine fehlenden Breadcrumb-Einträge

## Geänderte Dateien

- `index.html`
- `ueber-uns/index.html`
- `team/index.html`
- `leistungen/index.html`
- `produkte/index.html`
- `produkte/immunsystemstaerkung/index.html`
- `produkte/homoeopathie/index.html`
- `produkte/kosmetik/index.html`
- `produkte/naturprodukte/index.html`
- `produkte/aromatherapie/index.html`
- `kontakt/index.html`
- `impressum/index.html`
- `datenschutz/index.html`
