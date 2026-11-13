/* components/Common.jsx */
;(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Icon = ({
  name,
  size = 18
}) => {
  const paths = {
    mail: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 6h18v12H3z"
    }), React.createElement("path", {
      d: "M3 7l9 6 9-6"
    })),
    phone: React.createElement("path", {
      d: "M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A18 18 0 0 1 3 6a2 2 0 0 1 2-2z"
    }),
    pin: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 21s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z"
    }), React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "2.5"
    })),
    arrow: React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    arrowUp: React.createElement("path", {
      d: "M7 17L17 7M9 7h8v8"
    }),
    linkedin: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), React.createElement("path", {
      d: "M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7"
    })),
    bluesky: React.createElement("path", {
      d: "M6 5c2 1 4 3 6 6 2-3 4-5 6-6 2 0 3 2 2 4-1 1-3 2-4 2 1 0 3 1 4 3 1 2-1 4-3 4-2-1-4-3-5-6-1 3-3 5-5 6-2 0-4-2-3-4 1-2 3-3 4-3-1 0-3-1-4-2-1-2 0-4 2-4z"
    }),
    download: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 4v12M6 12l6 6 6-6"
    }), React.createElement("path", {
      d: "M4 20h16"
    })),
    calendar: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16",
      rx: "2"
    }), React.createElement("path", {
      d: "M3 9h18M8 3v4M16 3v4"
    })),
    book: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z"
    }), React.createElement("path", {
      d: "M5 17a3 3 0 0 1 3-3h11"
    })),
    spark: React.createElement("path", {
      d: "M12 3v6m0 6v6M3 12h6m6 0h6M6 6l3 3m6 6l3 3M6 18l3-3m6-6l3-3"
    }),
    quote: React.createElement("path", {
      d: "M7 10c0-3 2-5 4-5M5 17h4v-7H5zM15 10c0-3 2-5 4-5M13 17h4v-7h-4z"
    }),
    menu: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 6h16M4 12h16M4 18h16"
    })),
    close: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 5l14 14M19 5L5 19"
    })),
    check: React.createElement("path", {
      d: "M5 12l5 5L20 7"
    }),
    external: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M14 4h6v6"
    }), React.createElement("path", {
      d: "M20 4l-9 9"
    }), React.createElement("path", {
      d: "M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
    }))
  };
  return React.createElement("svg", {
    className: `svg-icon`,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, paths[name]);
};
function Reveal({
  children,
  as: As = 'div',
  className = '',
  delay,
  ...rest
}) {
  // Früher ein Einblend-Effekt; heute nur noch ein schlichter Behälter.
  return React.createElement(As, _extends({ className: className || undefined }, rest), children);
}
window.Icon = Icon;
window.Reveal = Reveal;
})();

/* components/Bildstatistik.jsx – Zählzeichen und Zählreihen */
;(function(){
const h = React.createElement;

/* Zählzeichen: flache Piktogramme gleicher Größe, gezeichnet als Geometrie */
const GLYPHS = {
  kind: { w: 24, h: 48, d: 'M12 1a6 6 0 1 1 0 12a6 6 0 1 1 0-12zM4 15h16l1.5 17h-5V47h-9V32h-5z' },
  erwachsen: { w: 24, h: 56, d: 'M12 1a6.5 6.5 0 1 1 0 13a6.5 6.5 0 1 1 0-13zM3 16h18l1.5 20h-5.5V55h-10V36H1.5z' },
  schein: { w: 40, h: 22, d: 'M1 1h38v20H1zM20 5a6 6 0 1 0 0 12a6 6 0 1 0 0-12z', rule: 'evenodd' },
  schule: { w: 40, h: 44, d: 'M19 0h2v10h-2zM21 0h9v6h-9zM20 9L39 21v22H25V32h-10v11H1V21z' },
  rathaus: { w: 40, h: 36, d: 'M20 1L39 10H1zM3 12h34v3H3zM5 17h5v14H5zM17.5 17h5v14h-5zM30 17h5v14h-5zM1 32h38v3H1z' },
  pult: { w: 40, h: 56, d: 'M12 1a6.5 6.5 0 1 1 0 13a6.5 6.5 0 1 1 0-13zM3 16h18l1.5 20h-5.5V55h-10V36H1.5zM26 22h13v4h-4.5v29h-4V26H26z' },
  blatt: { w: 34, h: 44, d: 'M9 1h24v34H9zM5 5h2v34h22v2H5zM1 9h2v34h22v1H1z' }
};

function Glyph({ kind, tone = 'ink', part = 1, title, rest }) {
  const g = GLYPHS[kind];
  const id = React.useId ? React.useId().replace(/:/g, '') : kind + Math.random().toString(36).slice(2);
  const path = (cls, clip, key) => h('path', { key, d: g.d, className: cls, fillRule: g.rule, clipPath: clip });
  return h('svg', {
    className: 'glyph glyph--' + kind,
    viewBox: `0 0 ${g.w} ${g.h}`,
    role: title ? 'img' : undefined,
    'aria-hidden': title ? undefined : 'true',
    'aria-label': title
  },
    part < 1 && h('defs', null, h('clipPath', { id: 'c' + id }, h('rect', { x: 0, y: 0, width: g.w * part, height: g.h }))),
    part < 1 ? [path(tone === 'ink' || rest === 'ghost' ? 'fill-ghost' : 'fill-ink', null, 'rest'), path('fill-' + tone, `url(#c${id})`, 'teil')] : path('fill-' + tone, null)
  );
}

/* Eine Zählreihe: zählt sich beim ersten Sichtbarwerden einmal ab */
function CountRow({ kind, total, marked = 0, tone = 'petrol', restTone = 'ink', label, className = '' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-counting'); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const items = [];
  for (let i = 0; i < total; i++) {
    const rest = marked - i;
    const part = rest >= 1 ? 1 : rest > 0 ? rest : 0;
    items.push(h('li', { key: i, style: { '--i': i } },
      part === 1 ? h(Glyph, { kind, tone }) : part > 0 ? h(Glyph, { kind, tone, part, rest: restTone }) : h(Glyph, { kind, tone: restTone })));
  }
  return h('ol', { ref, className: 'count-row count-row--' + kind + ' ' + className, role: 'img', 'aria-label': label }, items);
}

/* Quelle im Text: (Autor, Jahr) mit Sprung ins Quellenverzeichnis */
function Cite({ id, children }) {
  return h('a', { className: 'cite', href: '#quelle-' + id }, '(', children, ')');
}

window.Glyph = Glyph;
window.CountRow = CountRow;
window.Cite = Cite;
})();

/* components/Header.jsx */
;(function(){
const h = React.createElement;
function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: '#angebot', label: 'Angebot' },
    { href: '#person', label: 'Über mich' },
    { href: '#termine', label: 'Einblicke' },
    { href: 'blog/index.html', label: 'Blog' }
  ];
  return h('header', { className: 'masthead' },
    h('div', { className: 'wrap masthead__bar' },
      h('a', { className: 'brand', href: '#top' },
        h('img', { src: 'design/assets/mark.svg', alt: '', width: 40, height: 40 }),
        h('span', { className: 'brand__text' },
          h('span', { className: 'brand__name' }, 'Dr. Oscar Yendell'),
          h('span', { className: 'brand__tag' }, 'Armutssensibilität in pädagogischen Kontexten'))),
      h('div', { className: 'masthead__tools' },
        h('a', { className: 'button button--act masthead__quick', href: '#kontakt' }, 'Anfragen'),
        h('button', {
          className: 'masthead__menu', type: 'button', 'aria-expanded': open, 'aria-controls': 'hauptnavigation',
          onClick: () => setOpen(!open)
        }, h(Icon, { name: open ? 'close' : 'menu', size: 18 }), h('span', { className: 'masthead__menu-label' }, open ? 'Schließen' : 'Menü'))),
      h('nav', { id: 'hauptnavigation', className: 'masthead__nav' + (open ? ' is-open' : ''), 'aria-label': 'Hauptnavigation' },
        links.map(l => h('a', { key: l.href, href: l.href, onClick: () => setOpen(false) }, l.label)),
        h('a', { className: 'button button--act', href: '#kontakt', onClick: () => setOpen(false) }, 'Format anfragen'))));
}
window.Header = Header;
})();

/* components/Hero.jsx */
;(function(){
const h = React.createElement;
const FORMATE = ['Schulinterne Fortbildung', 'Kommunale Fortbildung', 'Workshop oder Vortrag', 'Materialentwicklung'];

function prefill(e) {
  e.preventDefault();
  const src = new FormData(e.target);
  const form = document.querySelector('#kontakt form');
  if (form) {
    const einrichtung = form.querySelector('[name="einrichtung"]');
    const format = form.querySelector('[name="format"]');
    if (einrichtung && src.get('einrichtung')) einrichtung.value = src.get('einrichtung');
    if (format && src.get('format')) format.value = src.get('format');
  }
  const target = document.getElementById('kontakt');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const name = target.querySelector('[name="name"]');
    if (name) setTimeout(() => name.focus({ preventScroll: true }), 450);
  }
}

function Hero() {
  return h('section', { className: 'opening', id: 'top', 'aria-labelledby': 'titel' },
    h('div', { className: 'wrap' },
      h('figure', { className: 'chart chart--opening' },
        h(CountRow, { kind: 'kind', total: 20, marked: 4.7,
          label: 'Bildstatistik: Von 20 Zeichen sind 4,7 hervorgehoben. 23,5 Prozent der unter 18-Jährigen in Deutschland sind von Armut oder sozialer Ausgrenzung bedroht.' }),
        h('figcaption', { className: 'chart__key chart__key--single' },
          h('span', { className: 'chart__fact' },
            h('strong', null, '23,5 %'), ' der unter 18-Jährigen in Deutschland sind von Armut oder sozialer Ausgrenzung bedroht ',
            h(Cite, { id: 'eurostat' }, 'Eurostat, 2026'), '.'))),
      h('div', { className: 'opening__grid' },
        h('div', { className: 'opening__copy' },
          h('h1', { id: 'titel', className: 'display' }, 'Schule armuts­sensibel gestalten.'),
          h('p', { className: 'opening__lede' },
            'Wissenschaftlich fundiert, für Schule und Sozialraum gemacht. Ich bin Dr. Oscar Yendell, selbst in Armut aufgewachsen und promoviert zu Armut im Schulkontext. Bundesweit begleite ich Schulen, Kommunen, Träger, Vereine und Stiftungen dabei, Forschung zur Armutssensibilität in konkrete Schritte vor Ort zu übersetzen.')),
        h('form', { className: 'quick-ask', onSubmit: prefill, 'aria-label': 'Format anfragen' },
          h('label', { className: 'field' }, h('span', null, 'Einrichtung'),
            h('input', { name: 'einrichtung', autoComplete: 'organization', placeholder: 'Schule, Kommune, Träger …' })),
          h('label', { className: 'field' }, h('span', null, 'Format'),
            h('select', { name: 'format', defaultValue: '' },
              h('option', { value: '' }, 'Noch offen'),
              FORMATE.map(f => h('option', { key: f }, f)))),
          h('button', { className: 'button button--act button--wide', type: 'submit' }, 'Format anfragen'),
          h('p', { className: 'quick-ask__note' }, 'Planung am besten 3 bis 6 Monate im Voraus.')))));
}
window.Hero = Hero;
})();

/* components/Offers.jsx */
;(function(){
const h = React.createElement;
function Offers() {
  const items = [
    { glyphs: ['schule'], example: [0, 'Grundschule, Ludwigshafen'], title: 'Schulinterne Fortbildungen',
      body: 'Ein gemeinsamer Tag mit Ihrem (multiprofessionellen) Kollegium: Wie beeinflusst Armut das Aufwachsen unserer Schüler*innen? In welchen Momenten wird Armut in unserer Schule überhaupt relevant? Wie können wir den identifizierten Armutsfolgen an unserer Schule begegnen? Gemeinsam erarbeiten wir konkrete Ansätze für Sie vor Ort.' },
    { glyphs: ['rathaus'], example: [1, 'Landschaftsverband Rheinland, Köln'], title: 'Kommunale Fortbildungen',
      body: 'Ein gemeinsamer Tag mit mehreren Institutionen (bspw. Schulvertreter*innen, kommunale Bildungsakteur*innen und Partner*innen im Sozialraum): Wie beeinflusst Armut das Aufwachsen im Sozialraum? Welche Präventionsketten und -netzwerke gibt es? Gemeinsam erarbeiten wir, wie Armutsfolgen institutionsübergreifend vor Ort aufgefangen werden können.' },
    { glyphs: ['pult'], example: [2, 'ArbeiterKind.de, online'], title: 'Workshops & Vorträge',
      body: 'Online oder vor Ort. Impulsformate für Fachtage, Kommunen, Vereine und Stiftungen. Vom 60-Minuten-Vortrag bis hin zu längeren Workshops.' },
    { glyphs: ['blatt'], example: [5, 'Stiftung Lernen durch Engagement'], title: 'Materialentwicklung',
      body: 'Handreichungen, Arbeitsblätter, Checklisten, Reflexionsbögen, Materialien zur Sozialraumbegehung, passgenau für die Bedarfe der Nutzer*innen.' }
  ];
  return h('section', { className: 'band', id: 'angebot', 'aria-labelledby': 'angebot-titel' },
    h('div', { className: 'wrap' },
      h('div', { className: 'band__head' },
        h('h2', { id: 'angebot-titel', className: 'headline' }, 'Vier Formate, ein Ziel: Armutssensibilität in die Praxis übersetzen.'),
        h('p', { className: 'band__lede' }, 'Jedes Format wird gemeinsam mit Ihnen auf das zugeschnitten, was bei Ihnen vor Ort tatsächlich gerade ansteht. Meine Formate basieren immer auf aktuellen wissenschaftlichen Erkenntnissen und Beispielen konkreter armutssensibler Praxis. Am Ende stehen immer konkrete Vorgehensweisen für Ihre Einrichtung.')),
      h('ol', { className: 'formats' },
        items.map(it => h('li', { key: it.title, className: 'formats__item' },
          h('div', { className: 'formats__sign', 'aria-hidden': 'true' }, it.glyphs.map((g, i) => h(Glyph, { key: i, kind: g }))),
          h('h3', { className: 'formats__title' }, it.title),
          h('div', { className: 'formats__text' },
            h('p', { className: 'formats__body' }, it.body),
            h('a', { className: 'formats__example', href: '#einblick-' + it.example[0] + '-zeile' }, 'Beispiel ansehen: ' + it.example[1]))))),
      h('p', { className: 'band__aside' },
        h('strong', null, 'Sie haben Interesse an einem gemeinsamen Format oder weitere Ideen?'),
        ' Schreiben Sie mir, gerne steigen wir gemeinsam in die Planung ein. ',
        h('a', { href: '#kontakt' }, 'Format anfragen'))));
}
window.Offers = Offers;
})();

/* components/Effect.jsx – Befunde: Alltag und Wirkung */
;(function(){
const h = React.createElement;
function Effect() {
  return h('section', { className: 'band band--ink', id: 'befunde', 'aria-labelledby': 'befunde-titel' },
    h('div', { className: 'wrap findings' },
      h('h2', { id: 'befunde-titel', className: 'headline' }, 'Was Armut im Alltag heißt – und was hilft.'),
      h('div', { className: 'finding' },
        h('h3', { className: 'finding__title' }, 'Unter 3.034 € im Monat gilt eine Familie mit zwei Kindern als armutsgefährdet.'),
          h('figure', { className: 'chart chart--money' },
            h('div', { className: 'chart--money__rows' },
              h('div', { className: 'family', 'aria-hidden': 'true' },
                h(Glyph, { kind: 'erwachsen' }), h(Glyph, { kind: 'erwachsen' }), h(Glyph, { kind: 'kind' }), h(Glyph, { kind: 'kind' })),
              h(CountRow, { kind: 'schein', total: 31, marked: 30.34, tone: 'petrol', restTone: 'ghost',
                label: 'Bildstatistik: 30,34 Geldscheine zu je 100 Euro, zusammen 3.034 Euro.' })),
            h('figcaption', { className: 'chart__key' },
              h('ul', { className: 'chart__legend' },
                h('li', null, h('span', { className: 'key-sign key-sign--wide', 'aria-hidden': 'true' }, h(Glyph, { kind: 'schein', tone: 'petrol' })), '1 Schein = 100 € netto im Monat')),
              h('span', { className: 'chart__fact' },
                'Eine Familie mit zwei Erwachsenen und zwei Kindern unter 14 Jahren gilt als armutsgefährdet, wenn ihr weniger als ',
                h('strong', null, '3.034 € netto im Monat'), ' zur Verfügung stehen ', h(Cite, { id: 'destatis' }, 'Statistisches Bundesamt, 2026'),
                '. Von diesem Betrag müssen auch Ausgaben für schulische und gesellschaftliche Teilhabe bestritten werden.')))),
      h('div', { className: 'finding' },
        h('h3', { className: 'finding__title' }, 'Wenn Schulen armutsbedingte Hürden abbauen, lernen alle Kinder besser.'),
        h('p', { className: 'finding__statement' },
          'Eine Wirkungsstudie aus Nordostengland vergleicht Grundschulen mit und ohne Armuts-Audit. Wo Schulen armutsbedingte Hürden abbauen, verbessern sich die Leistungen – besonders in Mathematik und Lesen, und zwar für alle Kinder.'),
        h('p', { className: 'finding__source' }, 'Quelle: ', h(Cite, { id: 'beeson' }, 'Beeson et al., 2024')))));
}
window.Effect = Effect;
})();

/* components/About.jsx */
;(function(){
const h = React.createElement;
function About() {
  const [more, setMore] = React.useState(false);
  const steps = [
    ['Studium', 'Bildungswissenschaften und Transformationsstudien'],
    ['Promotion', 'Armut im Schulkontext, Mitarbeit in „Schule macht Stark“ und Startchancen'],
    ['Freiberuflichkeit', 'Fortbildung, Beratung, Material zur Armutssensibilität'],
    ['Stiftungsmanagement', 'Hanne-Landgraf-Stiftung gegen Kinder- und Jugendarmut']
  ];
  return h('section', { className: 'band', id: 'person', 'aria-labelledby': 'person-titel' },
    h('div', { className: 'wrap person' },
      h('figure', { className: 'person__photo' },
        h('img', { src: 'assets/oscar-standing.jpg', alt: 'Dr. Oscar Yendell vor einer Backsteinfassade', loading: 'lazy', style: { objectPosition: '58% 30%' } }),
        h('figcaption', null, 'Foto: Sebastian Conen')),
      h('div', { className: 'person__copy' },
        h('h2', { id: 'person-titel', className: 'headline' }, 'Forschung trifft Klassenzimmer.'),
        h('p', { className: 'person__lede' }, 'Bildungswissenschaftler und Fortbildner an der Schnittstelle von Wissenschaft und Praxis.'),
        h('ul', { className: 'person__keys' },
          h('li', null, h('strong', null, 'Selbst in Armut aufgewachsen.'), ' Ich weiß, wie sich Armut im Schulalltag anfühlt.'),
          h('li', null, h('strong', null, 'Promoviert zu Armut im Schulkontext.'), ' Universität Mannheim, zu armutsbezogenen Vorstellungen von Lehrkräften und Interaktionen in Schulen.'),
          h('li', null, h('strong', null, 'Erfahren in Organisationsentwicklung.'), ' „Schule macht Stark“, CHANCEN-Verbund, Hanne-Landgraf-Stiftung.')),
        h('ol', { className: 'stations' }, steps.map(([ort, was]) => h('li', { key: ort }, h('strong', null, ort), h('span', null, was)))),
        h('p', { className: 'person__closing' }, 'Konkret und evidenzbasiert, ohne erhobenen Zeigefinger.'),
        h('button', { type: 'button', className: 'text-button person__more', 'aria-expanded': more, 'aria-controls': 'werdegang', onClick: () => setMore(!more) },
          more ? 'Werdegang schließen' : 'Meinen Werdegang ausführlich lesen'),
        h('div', { id: 'werdegang', className: 'person__story', hidden: !more },
        h('p', null, 'Meine Biografie führte mich in die Arbeit zur Armutssensibilität: Nachdem ich selbst in Armut aufgewachsen bin, habe ich in Flensburg erst Bildungswissenschaften und dann Transformationsstudien studiert, stets mit einem Fokus darauf, wie Armut Bildungskarrieren und Teilhabe beeinflusst. An der Universität Mannheim habe ich meine Doktorarbeit zu armutsbezogenen Vorstellungen von Lehrkräften und zu armutsbezogenen Interaktionen in Schulen geschrieben. 2021 ist hieraus eine Freiberuflichkeit entstanden, in der ich Fortbildungen, Workshops und Beratungsleistungen für Schulen, Kommunen, Träger, Vereine und Stiftungen zur Armutssensibilität anbiete.'),
        h('p', null, 'Parallel dazu habe ich meine Leidenschaft für Organisationsentwicklung entdeckt: Im Projekt „Schule macht Stark“ habe ich Schulen zu ihrer Organisationsentwicklung und Sozialraumarbeit beraten. Im CHANCEN-Verbund habe ich Länder in der Begleitung von Startchancen-Schulen beraten. Zuletzt habe ich eine Fortbildung zum agilen Projektmanagement (IHK-zertifiziert) absolviert, da ein gutes Projektmanagement unerlässlich ist, um Veränderungen nachhaltig in Organisationen zu implementieren.'),
        h('p', null, 'Aktuell übernehme ich das operative Stiftungsmanagement der ',
          h('a', { href: 'https://www.hanne-landgraf-stiftung.de', target: '_blank', rel: 'noopener' }, 'Hanne-Landgraf-Stiftung'),
          ', die sich gegen Kinder- und Jugendarmut in Karlsruhe einsetzt. Neben Projektkoordination, Fundraising und Kommunikation baue ich Netzwerke und Kooperationen mit Bildungseinrichtungen sowie zivilgesellschaftlichen Akteur*innen auf, damit Maßnahmen zur Bewältigung von Armutsfolgen umgesetzt werden.'),
        h('p', null, 'In meinen Formaten verbinde ich meine Biografie mit wissenschaftlichen Erkenntnissen zur Armutssensibilität und meiner Expertise in der Organisationsentwicklung sowie der organisationsübergreifenden Kooperation. Dabei habe ich stets ein Auge darauf, was Schulleitungen, Lehrkräfte, Sozialarbeiter*innen und weitere Bildungsakteur*innen jeden Tag leisten.')),
        h('a', { className: 'button button--line', href: '#kontakt', onClick: () => {
          const t = document.querySelector('#kontakt textarea[name="anliegen"]');
          if (t && !t.value) t.value = 'Ich wünsche mir ein Kennenlerngespräch.';
        } }, 'Kennenlerngespräch anfragen'))));
}
window.About = About;
})();

/* components/Voices.jsx */
;(function(){
const h = React.createElement;
function Voices() {
  const [showAll, setShowAll] = React.useState(false);
  const items = [
    { quote: 'Von der Vorbereitung über die Durchführung bis zur Nachbereitung war es eine produktive Zusammenarbeit. Man ging individuell und unkompliziert auf unsere Vorstellungen ein – Schulleitung und Kollegium waren sehr angetan. Herr Yendell und seine Kollegin waren äußerst kompetent, einfühlsam und insgesamt überzeugend.', name: 'Christoph Timmerhues', role: 'stellv. Schulleitung · Grundschule · Rheinland-Pfalz' },
    { quote: 'Oscar Yendell kann komplexe Themen verständlich machen, ohne sie zu vereinfachen, und bringt in seinen Vorträgen wissenschaftliche Erkenntnisse und praktische Perspektiven überzeugend zusammen. Ich erlebe die nun mehrjährige Zusammenarbeit als fachlich fundiert, professionell und zugleich sehr nahbar. Seine persönliche Geschichte sorgt für zusätzliche Glaubwürdigkeit, ohne im Vordergrund zu stehen.', name: 'Jaana Espenlaub', role: 'ArbeiterKind.de, Baden-Württemberg' },
    { quote: 'Als Teilnehmer der Fortbildung habe ich sehr davon profitiert, Armutssensibilität nicht nur theoretisch, sondern anhand konkreter Situationen aus unserem Arbeitsalltag zu besprechen. Für die Koordination der Schulsozialarbeit in unserer Kommune haben wir daraus direkt umsetzbare Ansätze mitnehmen können, die wir künftig umsetzen wollen.', name: 'Markus Bender', role: 'Koordination Schulsozialarbeit, Bayern' },
    { quote: 'Die Workshops zur Armutssensibilität, die Oscar Yendell bei uns gegeben hat, waren fachlich sehr fundiert und gleichzeitig nah an der Praxis der angehenden Lehrkräfte. Besonders wertvoll war, wie konkret die Inhalte an alltäglichen Beispielen ausgerichtet wurden.', name: 'Sandra Hoffmeister', role: 'Schulsozialarbeit, Niedersachsen' },
    { quote: 'Die Zusammenarbeit mit Oscar Yendell bei der Entwicklung des Materials zur armutssensiblen Schulentwicklung war fachlich fundiert, verlässlich und immer mit klarem Blick für die schulische Praxis. Gemeinsam ist es uns gelungen, wissenschaftlich fundierte Perspektiven in ein strukturiertes und flexibel einsetzbares Arbeitsmaterial zu übersetzen. Das kostenlos zugängliche Material schließt damit eine bislang bestehende Lücke und unterstützt Schulen dabei, Armutssensibilität systematischer in den Blick zu nehmen und weiterzuentwickeln.', name: 'Mareike Fritz', role: 'Stiftung Lernen durch Engagement, Berlin' }
  ];
  const shown = showAll ? items : items.slice(0, 3);
  return h('section', { className: 'band', id: 'stimmen', 'aria-labelledby': 'stimmen-titel' },
    h('div', { className: 'wrap' },
      h('div', { className: 'band__head' },
        h('h2', { id: 'stimmen-titel', className: 'headline' }, 'Was Menschen sagen, mit denen ich zusammenarbeite.'),
        h('p', { className: 'band__lede' }, 'Vor jedem Format frage ich Ihre Erwartungen ab, danach gehören Evaluation und Nachbesprechung fest dazu. So erfahre ich, ob und wie das Format für Sie gewinnbringend war.')),
      h('div', { className: 'voices', id: 'stimmen-liste' },
        shown.map(it => h('blockquote', { key: it.name, className: 'voice' },
          h('p', null, '„', it.quote, '“'),
          h('footer', null, h('strong', null, it.name), h('span', null, it.role))))),
      h('button', { type: 'button', className: 'button button--line', 'aria-expanded': showAll, 'aria-controls': 'stimmen-liste', onClick: () => setShowAll(!showAll) },
        showAll ? 'Weniger Stimmen zeigen' : `Weitere Stimmen lesen`)));
}
window.Voices = Voices;
})();

/* components/Events.jsx */
;(function(){
const h = React.createElement;
function Events() {
  const [openIdx, setOpenIdx] = React.useState(null);
  React.useEffect(() => {
    const fromHash = () => {
      const m = /^#einblick-(\d+)-zeile$/.exec(window.location.hash);
      if (m) setOpenIdx(Number(m[1]));
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);
  const formats = [
    { glyph: 'schule', label: 'Schulinterne Fortbildung', where: 'Grundschule, Ludwigshafen', title: 'Studientag zur Armutssensibilität im schulischen Alltag',
      desc: 'Beginnend haben wir uns damit auseinandergesetzt, welche Dimensionen Armutssensibilität umfasst. Anschließend haben wir eigene Vorstellungen und Fehlannahmen in Bezug auf Armut (zum Teil spielerisch) reflektiert. Darauffolgend haben wir identifiziert, welche Rolle Armut im Schulalltag (nicht) spielt (bspw. Unterricht, Verpflegung, Ausflüge, Elternarbeit). Unter Bezugnahme auf konkrete Praxisbeispiele anderer Schulen haben wir erarbeitet, wie die Schule die identifizierten Armutsfolgen auffangen kann und wo eine Zusammenarbeit mit außerschulischen Partner*innen sinnvoll ist. Am Ende des Tages standen konkrete Vorgehensweisen fest, um in den kommenden Wochen eine armutssensible Praxis in den identifizierten Bereichen zu implementieren.' },
    { glyph: 'rathaus', label: 'Kommunale Fortbildung', where: 'Landschaftsverband Rheinland, Köln', title: 'Armutssensible Praxis als Teil der kommunalen Präventionskette',
      desc: 'Nachdem wir zu Beginn auf die Dimensionen von Armutssensibilität eingegangen sind, haben wir uns anschließend damit beschäftigt, wie Armut das Aufwachsen von Kindern und Jugendlichen in unterschiedlichen Lebensbereichen beeinflusst. Mit Blick auf konkrete armutssensible Praxisbeispiele anderer Kommunen haben wir anschließend erarbeitet, welche Rolle Schulen und welche Rolle weitere Akteur*innen (bspw. Jugendämter oder Jobcenter) in Bezug auf Armutssensibilität einnehmen. Am Ende des Tages bestand ein geteiltes Verständnis darüber, wer welche Armutsfolgen (nicht) auffangen kann und welche Kooperationsmöglichkeiten zwischen schulischen und außerschulischen Akteur*innen kommunale Präventionsketten in Bezug auf Armutssensibilität ermöglichen.' },
    { glyph: 'pult', label: 'Workshops & Vorträge', where: 'Workshop · ArbeiterKind.de, online', title: 'Armutsbezogene Vorstellungen von Lehrkräften',
      desc: 'Zu Beginn haben wir uns unter Bezugnahme auf das ökonomische, soziale und kulturelle Kapital damit auseinandergesetzt, wie ein Mangel der Kapitalsorten Bildungskarrieren negativ beeinflusst. Anschließend haben wir aktuelle Studien diskutiert, die zeigen, wie negative armutsbezogene Vorstellungen von Lehrkräften zu verringerten Leistungserwartungen und -bewertungen führen können. Abschließend wurden konkrete Möglichkeiten für den Schulalltag vorgestellt, negative Vorstellungen abzubauen. Dabei diskutierten die Teilnehmer*innen, wie dies in den Schulalltag implementiert werden kann.' },
    { glyph: 'pult', label: 'Workshops & Vorträge', where: 'Vortrag · Bildungskonferenz, Frankenthal', title: 'Armutssensibilität verändert die Perspektive',
      desc: 'Auf der Bildungskonferenz der Regionalagentur Kommunales Bildungsmanagement Rheinland-Pfalz – Saarland habe ich im Pecha-Kucha-Format die drei Ebenen der Armutssensibilität vorgestellt: die persönliche Haltung von Fach- und Lehrkräften, armutssensible Abläufe in der Organisation und strukturelle Zugänge im Sozialraum. Entlang konkreter Beispiele habe ich gezeigt, an welchen Stellen Schulen und kommunale Bildungsakteur*innen ansetzen können, um Armutsfolgen aufzufangen – und wie sich der Perspektivwechsel auf das eigene Handeln auswirkt.' },
    { glyph: 'pult', label: 'Workshops & Vorträge', where: 'Seminar · Karlsruher Institut für Technologie', title: 'Klassismus und soziale Ungleichheit im Bildungssystem: Von der theoretischen Analyse zur armutssensiblen Praxis',
      desc: 'Das Seminar richtete sich im Studium Generale an Studierende aller Fachrichtungen und setzte keine bildungswissenschaftlichen Vorkenntnisse voraus. Ausgehend von den eigenen Bildungserfahrungen der Studierenden erarbeiteten wir theoretische Zugänge zu Bildungsverständnissen, zu den Kapitalsorten und zum Habitusbegriff nach Pierre Bourdieu sowie zur Wirkung von Klassismus auf struktureller und interaktionaler Ebene. Ein besonderer Fokus lag darauf, wie armutsbezogene Stereotype entstehen und unbewusst wirken. Im Praxisteil stand das Konzept der Armutssensibilität mit seinen drei Ebenen im Mittelpunkt: Die Studierenden reflektierten ihre (zukünftige) Rolle im privaten, universitären und beruflichen Kontext und erarbeiteten, wie Armutssensibilität in den eigenen Alltag integriert werden kann.' },
    { glyph: 'blatt', label: 'Materialentwicklung', where: 'Stiftung Lernen durch Engagement', title: 'Armutssensible Haltung im Schulkontext',
      desc: 'Gemeinsam mit der Stiftung Lernen durch Engagement habe ich Material zur armutssensiblen Schulentwicklung mit einem besonderen Fokus auf eine armutssensible Haltung entwickelt. Das Material ist so konzipiert, dass es schulischen Akteur*innen sowohl einzeln als auch in Gruppensettings ermöglicht, an einer armutssensiblen Haltung zu arbeiten. Zudem leitet das Material hin zu einer Implementation von regelmäßigen Routinen und Methoden zur dauerhaften Förderung der Armutssensibilität. Im Material selbst werden ausschließlich praxisnahe Open-Access-Materialien zitiert, damit die Nutzer*innen selbstständig weiter recherchieren können.',
      link: 'https://www.servicelearning.de/aktuelles/neuigkeiten/meldung/2025/10/02/neues-arbeitsmaterial-unterstuetzt-schulen-auf-dem-weg-zu-mehr-armutssensibilitaet', linkLabel: 'Zum Arbeitsmaterial der Stiftung' }
  ];
  return h('section', { className: 'band', id: 'termine', 'aria-labelledby': 'termine-titel' },
    h('div', { className: 'wrap' },
      h('div', { className: 'band__head' },
        h('h2', { id: 'termine-titel', className: 'headline' }, 'Ein Einblick in meine Arbeit.'),
        h('p', { className: 'band__lede' }, 'Sechs meiner letzten Formate, von der schulinternen Fortbildung bis zur Materialentwicklung.')),
      h('ol', { className: 'ledger' },
        formats.map((f, i) => {
          const open = openIdx === i;
          return h('li', { key: i, id: 'einblick-' + i + '-zeile', className: 'ledger__row' + (open ? ' is-open' : '') },
            h('div', { className: 'ledger__sign', 'aria-hidden': 'true' }, h(Glyph, { kind: f.glyph })),
            h('div', { className: 'ledger__meta' }, h('span', { className: 'ledger__label' }, f.label), h('span', null, f.where)),
            h('div', { className: 'ledger__main' },
              h('h3', { className: 'ledger__title' }, f.title),
              h('p', { id: 'einblick-' + i, className: 'ledger__desc', hidden: !open }, f.desc),
              h('div', { className: 'ledger__actions' },
                h('button', { type: 'button', className: 'text-button', 'aria-expanded': open, 'aria-controls': 'einblick-' + i, 'aria-label': (open ? 'Beschreibung schließen: ' : 'Ablauf lesen: ') + f.title, onClick: () => setOpenIdx(open ? null : i) },
                  open ? 'Beschreibung schließen' : 'Ablauf lesen'),
                f.link && h('a', { href: f.link, target: '_blank', rel: 'noopener noreferrer' }, f.linkLabel))));
        }))));
}
window.Events = Events;
})();

/* components/BlogTeaser.jsx */
;(function(){
const h = React.createElement;
function BlogTeaser() {
  return h('section', { className: 'band band--ruled', 'aria-labelledby': 'blog-titel' },
    h('div', { className: 'wrap blog-teaser' },
      h('img', { className: 'blog-teaser__art', src: 'design/assets/illustrations/buch.svg', alt: '', width: 280, height: 200 }),
      h('div', null,
        h('h2', { id: 'blog-titel', className: 'headline' }, 'Notizen zwischen Forschung und Schulalltag.'),
        h('p', null, 'Kurze Texte, lange Gedanken: Was ich aus Studientagen mitnehme, welche Studien gerade wichtig sind und wie sich Befunde in Routinen übersetzen lassen.'),
        h('a', { className: 'button button--line', href: 'blog/index.html' }, 'Zum Blog'))));
}
window.BlogTeaser = BlogTeaser;
})();

/* components/Contact.jsx */
;(function(){
const h = React.createElement;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    setError(false); setBusy(true);
    const body = new URLSearchParams(new FormData(e.target)).toString();
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      .then(res => { if (res.ok) setSent(true); else setError(true); })
      .catch(() => setError(true))
      .finally(() => setBusy(false));
  }
  return h('section', { className: 'band band--contact', id: 'kontakt', 'aria-labelledby': 'kontakt-titel' },
    h('div', { className: 'wrap contact' },
      h('div', { className: 'contact__copy' },
        h('h2', { id: 'kontakt-titel', className: 'headline' }, 'Melden Sie sich gerne, ich freue mich auf den Austausch.'),
        h('p', null, 'Schreiben Sie mir kurz, was Sie planen: Fortbildung, Vortrag, Workshop oder etwas ganz anderes. Ich antworte innerhalb von drei Werktagen.'),
        h('dl', { className: 'contact__facts' },
          h('dt', null, 'E-Mail'), h('dd', null, h('a', { href: 'mailto:mail@oscaryendell.de' }, 'mail@oscaryendell.de')),
          h('dt', null, 'LinkedIn'), h('dd', null, h('a', { href: 'https://www.linkedin.com/in/oscar-yendell/', target: '_blank', rel: 'noopener' }, 'linkedin.com/in/oscar-yendell')),
          h('dt', null, 'Standort'), h('dd', null, 'Karlsruhe, bundesweit unterwegs'),
          h('dt', null, 'Planung'), h('dd', null, 'Fortbildungen am besten 3 bis 6 Monate im Voraus anfragen.'))),
      h('form', { className: 'contact__form', name: 'contact', method: 'POST', 'data-netlify': 'true', 'netlify-honeypot': 'bot-field', onSubmit: submit },
        h('input', { type: 'hidden', name: 'form-name', value: 'contact' }),
        h('p', { hidden: true }, h('label', null, 'Nicht ausfüllen: ', h('input', { name: 'bot-field' }))),
        sent ? h('div', { className: 'contact__sent', role: 'status' },
            h('h3', null, 'Danke für Ihre Nachricht.'),
            h('p', null, 'Ich melde mich innerhalb von drei Werktagen bei Ihnen.'))
          : h(React.Fragment, null,
            h('div', { className: 'contact__row' },
              h('label', { className: 'field' }, h('span', null, 'Name ', h('em', { className: 'field__req' }, 'Pflichtfeld')), h('input', { required: true, name: 'name', autoComplete: 'name' })),
              h('label', { className: 'field' }, h('span', null, 'E-Mail ', h('em', { className: 'field__req' }, 'Pflichtfeld')), h('input', { required: true, name: 'email', type: 'email', autoComplete: 'email' }))),
            h('div', { className: 'contact__row' },
              h('label', { className: 'field' }, h('span', null, 'Einrichtung'), h('input', { name: 'einrichtung', autoComplete: 'organization', placeholder: 'Schule, Kommune, Träger …' })),
              h('label', { className: 'field' }, h('span', null, 'Format'),
                h('select', { name: 'format', defaultValue: '' },
                  h('option', { value: '' }, 'Bitte wählen …'),
                  ['Schulinterne Fortbildung', 'Kommunale Fortbildung', 'Workshop oder Vortrag', 'Materialentwicklung', 'Anderes oder noch offen'].map(o => h('option', { key: o }, o))))),
            h('label', { className: 'field' }, h('span', null, 'Anliegen'), h('textarea', { name: 'anliegen', rows: 5, placeholder: 'Termin, Anzahl Teilnehmende, gewünschtes Thema …' })),
            h('p', { className: 'contact__consent' }, 'Mit dem Absenden stimme ich zu, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. Hinweise zum Datenschutz finden Sie in der ', h('a', { href: 'datenschutz.html' }, 'Datenschutzerklärung'), '.'),
            error && h('p', { className: 'contact__error', role: 'alert' }, 'Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie mir direkt an ', h('a', { href: 'mailto:mail@oscaryendell.de' }, 'mail@oscaryendell.de'), '.'),
            h('button', { className: 'button button--act', type: 'submit', disabled: busy }, busy ? 'Wird gesendet …' : 'Anfrage senden')))));
}
window.Contact = Contact;
})();

/* components/Sources.jsx – Quellenverzeichnis nach APA 7 */
;(function(){
const h = React.createElement;
function Sources() {
  return h('section', { className: 'sources', 'aria-labelledby': 'quellen-titel' },
    h('div', { className: 'wrap' },
      h('h2', { id: 'quellen-titel' }, 'Quellen'),
      h('ol', null,
        h('li', { id: 'quelle-beeson' }, 'Beeson, M., Wildman, J. M., & Wildman, J. (2024). Does tackling poverty related barriers to education improve school outcomes? Evidence from the North East of England. ', h('i', null, 'Economics Letters, 236'), ', Artikel 111614. ', h('a', { href: 'https://doi.org/10.1016/j.econlet.2024.111614' }, 'https://doi.org/10.1016/j.econlet.2024.111614')),
        h('li', { id: 'quelle-eurostat' }, 'Eurostat. (2026). ', h('i', null, 'Persons at risk of poverty or social exclusion by age and sex (ilc_peps01n)'), ' [Datensatz]. Abgerufen am 13. November 2026 von ', h('a', { href: 'https://doi.org/10.2908/ILC_PEPS01N' }, 'https://doi.org/10.2908/ILC_PEPS01N')),
        h('li', { id: 'quelle-destatis' }, 'Statistisches Bundesamt. (2026). ', h('i', null, 'EU-SILC – Armutsgefährdungsschwelle (60%-Median): Deutschland, Jahre, Haushaltstyp'), ' (Tabelle 12241-0002) [Datensatz]. GENESIS-Online. Abgerufen am 13. November 2026 von ', h('a', { href: 'https://genesis.destatis.de/datenbank/online/statistic/12241/table/12241-0002' }, 'https://genesis.destatis.de/datenbank/online/statistic/12241/table/12241-0002')))));
}
window.Sources = Sources;
})();

/* components/SiteFooter.jsx */
;(function(){
const h = React.createElement;
function SiteFooter() {
  return h('footer', { className: 'colophon' },
    h('div', { className: 'wrap colophon__grid' },
      h('a', { className: 'brand', href: '#top' },
        h('img', { src: 'design/assets/mark.svg', alt: '', width: 40, height: 40 }),
        h('span', { className: 'brand__text' }, h('span', { className: 'brand__name' }, 'Dr. Oscar Yendell'), h('span', { className: 'brand__tag' }, 'Armutssensibilität in pädagogischen Kontexten'))),
      h('nav', { 'aria-label': 'Formate' }, h('h2', null, 'Formate'),
        h('a', { href: '#angebot' }, 'Schulinterne Fortbildungen'), h('a', { href: '#angebot' }, 'Kommunale Fortbildungen'),
        h('a', { href: '#angebot' }, 'Workshops & Vorträge'), h('a', { href: '#angebot' }, 'Materialentwicklung')),
      h('nav', { 'aria-label': 'Weiteres' }, h('h2', null, 'Weiteres'),
        h('a', { href: 'blog/index.html' }, 'Blog'), h('a', { href: '#person' }, 'Über mich'), h('a', { href: '#termine' }, 'Einblicke')),
      h('nav', { 'aria-label': 'Rechtliches' }, h('h2', null, 'Rechtliches'),
        h('a', { href: 'impressum.html' }, 'Impressum'), h('a', { href: 'datenschutz.html' }, 'Datenschutz'))),
    h('div', { className: 'wrap colophon__bottom' },
      h('span', null, '© 2026 Dr. Oscar Yendell · Fotos: ', h('a', { href: 'https://www.conen.photos/', target: '_blank', rel: 'noopener' }, 'Sebastian Conen')),
      h('span', null, h('a', { href: 'mailto:mail@oscaryendell.de' }, 'mail@oscaryendell.de'), ' · ', h('a', { href: 'https://www.linkedin.com/in/oscar-yendell/', target: '_blank', rel: 'noopener' }, 'LinkedIn'))));
}
window.SiteFooter = SiteFooter;
})();

/* inline */
;(function(){
const h = React.createElement;
function App() {
  return h(React.Fragment, null,
    h('a', { className: 'skip', href: '#inhalt' }, 'Zum Inhalt springen'),
    h(Header, null),
    h('main', { id: 'inhalt' }, h(Hero, null), h(Offers, null), h(About, null), h(Effect, null), h(Voices, null), h(Events, null), h(Contact, null), h(BlogTeaser, null), h(Sources, null)),
    h(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(h(App, null));
if (window.location.hash) {
  const hash = window.location.hash;
  let tries = 0;
  const tryScroll = () => {
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView();
    else if (tries++ < 40) setTimeout(tryScroll, 50);
  };
  tryScroll();
}
})();
