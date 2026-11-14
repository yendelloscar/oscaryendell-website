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

/* components/Header.jsx – Unterseiten */
;(function(){
const h = React.createElement;
function Header({ base = '', current = '' }) {
  const [open, setOpen] = React.useState(false);
  const home = base + 'index.html';
  const links = [
    { href: home + '#angebot', label: 'Angebot' },
    { href: home + '#person', label: 'Über mich' },
    { href: home + '#termine', label: 'Einblicke' },
    { href: base + 'blog/index.html', label: 'Blog', id: 'blog' }
  ];
  return h('header', { className: 'masthead' },
    h('div', { className: 'wrap masthead__bar' },
      h('a', { className: 'brand', href: home },
        h('img', { src: base + 'design/assets/mark.svg', alt: '', width: 40, height: 40 }),
        h('span', { className: 'brand__text' },
          h('span', { className: 'brand__name' }, 'Dr. Oscar Yendell'),
          h('span', { className: 'brand__tag' }, 'Armutssensibilität in pädagogischen Kontexten'))),
      h('button', {
        className: 'masthead__menu', type: 'button', 'aria-expanded': open, 'aria-controls': 'hauptnavigation',
        onClick: () => setOpen(!open)
      }, h(Icon, { name: open ? 'close' : 'menu', size: 18 }), h('span', { className: 'masthead__menu-label' }, open ? 'Schließen' : 'Menü')),
      h('nav', { id: 'hauptnavigation', className: 'masthead__nav' + (open ? ' is-open' : ''), 'aria-label': 'Hauptnavigation' },
        links.map(l => h('a', { key: l.href, href: l.href, 'aria-current': current && l.id === current ? 'page' : undefined }, l.label)),
        h('a', { className: 'button button--act', href: home + '#kontakt' }, 'Format anfragen'))));
}
window.Header = Header;
})();

/* components/SiteFooter.jsx – Unterseiten */
;(function(){
const h = React.createElement;
function SiteFooter({ base = '' }) {
  const home = base + 'index.html';
  return h('footer', { className: 'colophon' },
    h('div', { className: 'wrap colophon__grid' },
      h('a', { className: 'brand', href: home },
        h('img', { src: base + 'design/assets/mark.svg', alt: '', width: 40, height: 40 }),
        h('span', { className: 'brand__text' }, h('span', { className: 'brand__name' }, 'Dr. Oscar Yendell'), h('span', { className: 'brand__tag' }, 'Armutssensibilität in pädagogischen Kontexten'))),
      h('nav', { 'aria-label': 'Formate' }, h('h2', null, 'Formate'),
        h('a', { href: home + '#angebot' }, 'Schulinterne Fortbildungen'), h('a', { href: home + '#angebot' }, 'Kommunale Fortbildungen'),
        h('a', { href: home + '#angebot' }, 'Workshops & Vorträge'), h('a', { href: home + '#angebot' }, 'Materialentwicklung')),
      h('nav', { 'aria-label': 'Mehr erfahren' }, h('h2', null, 'Mehr erfahren'),
        h('a', { href: base + 'blog/index.html' }, 'Blog'), h('a', { href: home + '#person' }, 'Über mich'), h('a', { href: home + '#termine' }, 'Einblicke')),
      h('nav', { 'aria-label': 'Rechtliches' }, h('h2', null, 'Rechtliches'),
        h('a', { href: base + 'impressum.html' }, 'Impressum'), h('a', { href: base + 'datenschutz.html' }, 'Datenschutz'))),
    h('div', { className: 'wrap colophon__bottom' },
      h('span', null, '© 2026 Dr. Oscar Yendell · Fotos: ', h('a', { href: 'https://www.conen.photos/', target: '_blank', rel: 'noopener' }, 'Sebastian Conen')),
      h('span', null, h('a', { href: 'mailto:mail@oscaryendell.de' }, 'mail@oscaryendell.de'), ' · ', h('a', { href: 'https://www.linkedin.com/in/oscar-yendell/', target: '_blank', rel: 'noopener' }, 'LinkedIn'))));
}
window.SiteFooter = SiteFooter;
})();

/* blog/BlogList.jsx */
;(function(){
function BlogList() {
  const featured = {
    tag: 'Grundlagen',
    title: 'Was ist Armutssensibilität?',
    excerpt: 'Ein Einstieg in den Begriff, der meine Arbeit trägt: Was meint Armuts­sensibilität in pädagogischen Kontexten? Und was bedeutet sie konkret für den Schul- und Bildungsalltag?',
    date: '01. Oktober 2026',
    read: '6 Min. Lesezeit',
    cat: 'Grundlagen',
    illu: 'gespraech.svg'
  };
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "blog-hero"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement(Reveal, null, React.createElement("h1", null, "Notizen zwischen Forschung und Schulalltag."), React.createElement("p", null, "Kurze Texte, lange Gedanken: Was ich aus Studientagen mitnehme, welche Studien gerade wichtig sind, und wie sich Befunde in Routinen \xFCbersetzen lassen, ohne erhobenen Zeigefinger.")))), React.createElement("section", {
    className: "blog-section"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement(Reveal, null, React.createElement("article", {
    className: "featured-card"
  }, React.createElement("div", {
    className: "featured-card__art"
  }, React.createElement("img", {
    src: `../design/assets/illustrations/${featured.illu}`,
    alt: ""
  })), React.createElement("div", {
    className: "featured-card__copy"
  }, React.createElement("h2", null, featured.title), React.createElement("p", null, featured.excerpt), React.createElement("div", {
    className: "featured-card__meta"
  }, React.createElement("span", null, featured.cat, " \xB7 ", featured.date)), React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, React.createElement("a", {
    href: "was-ist-armutssensibilitaet.html",
    className: "button button--line",
    "aria-label": "Beitrag lesen: Was ist Armutssensibilit\xE4t?"
  }, "Beitrag lesen"))))))), React.createElement("section", {
    className: "blog-section"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "blog-coming"
  }, React.createElement("div", {
    className: "blog-coming__dot",
    "aria-hidden": "true"
  }), React.createElement("div", null, React.createElement("div", {
    className: "blog-coming__title"
  }, "Weitere Beitr\xE4ge folgen."), React.createElement("p", null, "Der Blog w\xE4chst St\xFCck f\xFCr St\xFCck. Geplant sind Texte zu Forschungsergebnissen, Praxisbeispielen, Methoden und Werkzeugen in Hinblick auf Armutssensibilit\xE4t.")))))));
}
window.BlogList = BlogList;
})();

/* inline */
;(function(){
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Header, { base: '../', current: 'blog' }), React.createElement("main", null, React.createElement(BlogList, null)), React.createElement(SiteFooter, { base: '../' }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
})();