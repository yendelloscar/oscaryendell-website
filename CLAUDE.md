# oscaryendell.de – Arbeitsanleitung

Website von Dr. Oscar Yendell (Armutssensibilität in pädagogischen Kontexten).
Gehostet auf Netlify (Projekt `brilliant-chimera-23f413`), Deploy automatisch aus `main`.

## Verbindliche Vorlage: Design-System

Maßgeblich ist das Artefakt **„Oscar Yendell Design System“** in Claude Design
(Slug `a5fd324f-aa80-4464-ba4e-15f86bfa9991`). Vor gestalterischen Änderungen dort
`project/README.md`, `project/tokens.css` und `project/ui_kits/website/` lesen.

- Farben, Typo-Skala, Abstände, Radien, Schatten: nur über die Tokens in
  `design/colors_and_type.css` (Spiegel von `tokens.css` aus dem Design-System).
  Keine neuen Hex-Werte im Code. Weicht das Design-System ab, zuerst die Tokens hier nachziehen.
- Schriften: Lora (Überschriften), Inter (Text), DM Sans nur bei Bedarf.
  Auf der Website als WOFF2 ausliefern; JetBrains Mono nicht einbinden, solange es nicht sichtbar genutzt wird.
- Bildsprache: gezeichnete Illustrationen aus dem Design-System (`project/assets/illustrations/`),
  keine Stockfotos. Ausnahme: Porträts von Oscar.
- Farbe ist nie Dekoration: Farben tragen die im Design-System festgelegte Bedeutung.
- Logo-Motiv (zwei Ringe mit Teal-Lücke) nicht verändern.

## Sprache

- Sie-Form. Gendern mit Sternchen (Lehrer*innen).
- Armutssensible Sprache: „Familien mit Armutserfahrung“, „von Armut betroffen“,
  „geringe formale Bildungsabschlüsse“ – nicht „sozial schwach“, „bildungsfern“, „arme Familien“.
- Ressourcen- statt Defizitblick, „ohne erhobenen Zeigefinger“.
- Deutsche Anführungszeichen „…“, Halbgeviertstrich mit Leerzeichen ( – ). Keine Emoji.
- Quellen im Text als (Autor, Jahr), Literatur nach APA 7.
- Schulen, Kommunen oder Personen in Blogartikeln nur mit deren Zustimmung nennen, sonst anonymisieren.

## Technik

- Live geht der Zweig **`main`** (nicht der GitHub-Standardzweig). Neue Arbeit immer von `main` abzweigen.
- Quelle sind Exporte aus Claude Design: `*.html` mit `<div id="root">`, kompilierte `*.app.js` und `vendor/` (React).
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
