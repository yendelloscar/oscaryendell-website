# oscaryendell.de – Arbeitsanleitung

Website von Dr. Oscar Yendell (Armutssensibilität in pädagogischen Kontexten).
Gehostet auf Netlify (Projekt `brilliant-chimera-23f413`), Deploy automatisch aus `main`.

## Verbindliche Vorlage: Design-System „Wiener Bildstatistik“

Seit November 2026 gilt das Design-System „Wiener Bildstatistik“ (nach Isotype).
Beschrieben in `DESIGN.md` im Ordner `oscar-designsystem`; die Gestaltungs-Vereinbarung
der Startseite steht in `.impeccable/surfaces/index-html.md`. Das alte Artefakt in Claude Design
(Lora, Inter, Creme) gilt nicht mehr.

- Farben, Schrift, Abstände nur über die Tokens in `design/bildstatistik.css`. Keine neuen Hex-Werte im Code.
- Jede Farbe hat genau eine Aufgabe:
  - Tinte `--ink`: Text, Zeichen, Linien, Links, Fokus.
  - Petrol `--petrol`: nur die hervorgehobene Größe in einer Zählreihe (auf dunklem Grund `--petrol-on-ink`).
  - Rot `--act`: nur die Hauptaktion (Anfrage).
  - Ocker `--ochre`: nur Quellen- und Hinweismarken.
- Schrift: nur Jost (WOFF2 in `design/fonts/`, selbst ausgeliefert). Titel in Versalien.
- Zählzeichen (`Glyph`, `CountRow` in `index.app.js`) sind flache Piktogramme gleicher Größe. Ein Zeichen pro Format:
  Schule = schulinterne Fortbildung, Rathaus = kommunal, Pult = Workshop/Vortrag/Seminar, Blatt = Material.
- Jede Zählreihe braucht eine Legende („1 Zeichen = …“) und eine echte Quelle (Autor, Jahr). Keine erfundenen Zahlen.
- Keine Schatten, keine runden Ecken, keine Verläufe, keine kleinen Etiketten über Überschriften.
  Abschnitte trennt eine 6-px-Tintenlinie.
- Bildsprache: gezeichnete Illustrationen (`design/assets/illustrations/`, Tinte auf Weiß, ohne Farbkreis),
  ein Objekt pro Bild, keine Stockfotos. Ausnahme: Porträts von Oscar.
- Kopf und Fuß: Stile in `design/rahmen.css`, Unterseiten in `design/seiten.css`, Startseite in `start.css`.
- Textkontrast mind. 4,5:1. Überschriften ohne Sprünge (h1 → h2 → h3), Linktexte aussagekräftig.
- Logo-Motiv (zwei Ringe mit Petrol-Lücke) nicht verändern.

## Sprache

- Sie-Form. Gendern mit Sternchen (Lehrer*innen).
- Armutssensible Sprache: „Familien mit Armutserfahrung“, „von Armut betroffen“,
  „geringe formale Bildungsabschlüsse“ – nicht „sozial schwach“, „bildungsfern“, „arme Familien“.
- Ressourcen- statt Defizitblick, „ohne erhobenen Zeigefinger“.
- Deutsche Anführungszeichen „…“, Halbgeviertstrich mit Leerzeichen ( – ). Keine Emoji.
- Quellen im Text als (Autor, Jahr), Literatur nach APA 7.
- Schulen, Kommunen oder Personen in Blogartikeln nur mit deren Zustimmung nennen, sonst anonymisieren.

## Technik

- Live geht der Zweig **`main`** (Standardzweig). Neue Arbeit immer von `main` abzweigen.
- **Das Repo ist die einzige Quelle der Website.** Keine Exporte aus Claude Design mehr hochladen: Ein Export
  überschreibt alle Änderungen im Repo. Änderungen an Inhalt und Layout direkt hier als Pull Request.
- Aufbau: `*.html` mit `<div id="root">`, `*.app.js` (React-Komponenten, kompiliert, aber lesbar; direkt bearbeiten),
  `vendor/` (React), `start.css`, `design/bildstatistik.css` (Tokens), `design/rahmen.css`, `design/seiten.css`, `design/` (Schriften, Bilder).
  Kopf- und Fußzeile stecken in jeder `*.app.js`: Änderungen dort in allen Dateien gleich vornehmen.
- `npm run build` (läuft auf Netlify, siehe `netlify.toml`) rendert jede Seite vor und schreibt den Inhalt
  in `<div id="root">` (Ausgabe `dist/`). Suchmaschinen sehen so den vollständigen Text; im Browser rendert React danach normal.
- Neue Seite: HTML + `.app.js` nach dem Muster von `blog/was-ist-armutssensibilitaet.*` anlegen und in `sitemap.xml` eintragen.
- Schriften nur als WOFF2 (`design/fonts/`). Bringt ein neuer Export wieder TTF-Dateien mit, vor dem Hochladen ersetzen.
- Bilder vor dem Einchecken verkleinern (max. ca. 2000 px Breite, < 300 KB).
- Dateien mit `print` im Namen werden nicht veröffentlicht.
- Kontaktformular: Netlify Forms, Formularname `contact`. Feldnamen nicht ändern, ohne das versteckte Erkennungsformular in `index.html` anzupassen.

## Arbeitsweise

- Änderungen nur in einem Zweig (`claude/…`) mit Pull Request; die Netlify-Vorschau wird von Oscar freigegeben.
  Nie direkt auf `main` pushen.
