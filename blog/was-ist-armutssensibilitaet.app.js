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
  delay = 0,
  as: As = 'div',
  className = '',
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setShown(true), delay);
        io.disconnect();
      }
    }, {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return React.createElement(As, _extends({
    ref: ref,
    className: `reveal ${shown ? 'in' : ''} ${className}`
  }, rest), children);
}
window.Icon = Icon;
window.Reveal = Reveal;
})();

/* components/Header.jsx */
;(function(){
function Header({
  active = 'home'
}) {
  const [open, setOpen] = React.useState(false);
  const links = [{
    id: 'angebot',
    href: '#angebot',
    label: 'Angebot'
  }, {
    id: 'person',
    href: '#person',
    label: 'Über mich'
  }, {
    id: 'termine',
    href: '#termine',
    label: 'Termine'
  }, {
    id: 'blog',
    href: 'blog/index.html',
    label: 'Blog'
  }, {
    id: 'kontakt',
    href: '#kontakt',
    label: 'Kontakt'
  }];
  const isBlog = active === 'blog';
  const isLegal = active === 'legal';
  const resolveHref = h => {
    if (isBlog && h.startsWith('#')) return `../index.html${h}`;
    if (isLegal && h.startsWith('#')) return `index.html${h}`;
    return h;
  };
  return React.createElement("header", {
    className: "site-header"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "site-header__top"
  }, React.createElement("a", {
    className: "brand",
    href: isBlog ? '../index.html' : isLegal ? 'index.html' : '#top'
  }, React.createElement("div", {
    className: "brand__mark"
  }, React.createElement("img", {
    src: isBlog ? '../design/assets/mark.svg' : 'design/assets/mark.svg',
    alt: "",
    width: "36",
    height: "36"
  })), React.createElement("div", null, React.createElement("div", {
    className: "brand__name"
  }, "Dr. Oscar Yendell"), React.createElement("div", {
    className: "brand__tag"
  }, "Armutssensibilit\xE4t in p\xE4dagogischen Kontexten"))), React.createElement("div", {
    className: "header-contact"
  }, React.createElement("a", {
    href: "mailto:mail@oscaryendell.de"
  }, React.createElement(Icon, {
    name: "mail",
    size: 16
  }), " mail@oscaryendell.de"), React.createElement("span", {
    className: "divider"
  }), React.createElement("a", {
    href: "https://www.linkedin.com/in/oscar-yendell/",
    target: "_blank",
    rel: "noopener"
  }, React.createElement(Icon, {
    name: "linkedin",
    size: 16
  }), " LinkedIn"))), React.createElement("nav", {
    className: `site-nav ${open ? 'open' : ''}`,
    "aria-label": "Hauptnavigation"
  }, React.createElement("button", {
    className: "menu-btn",
    onClick: () => setOpen(!open),
    "aria-expanded": open
  }, React.createElement(Icon, {
    name: open ? 'close' : 'menu',
    size: 16
  }), " Men\xFC"), React.createElement("div", {
    className: "site-nav__links"
  }, links.map(l => React.createElement("a", {
    key: l.id,
    href: resolveHref(l.href),
    className: active === l.id ? 'active' : '',
    onClick: () => setOpen(false)
  }, l.label))), React.createElement("a", {
    href: resolveHref('#kontakt'),
    className: "btn btn-primary nav-cta"
  }, "Anfrage senden ", React.createElement(Icon, {
    name: "arrow",
    size: 14
  })))));
}
window.Header = Header;
})();

/* components/SiteFooter.jsx */
;(function(){
function SiteFooter({
  isBlog = false
}) {
  const base = isBlog ? '../' : '';
  return React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "site-footer__grid"
  }, React.createElement("div", null, React.createElement("a", {
    className: "brand",
    href: isBlog ? '../index.html' : '#top'
  }, React.createElement("img", {
    src: `${base}design/assets/mark.svg`,
    width: "36",
    height: "36",
    alt: "",
    style: {
      filter: 'invert(1) hue-rotate(180deg) brightness(1.1)'
    }
  }), React.createElement("div", null, React.createElement("div", {
    className: "brand__name"
  }, "Dr. Oscar Yendell"), React.createElement("div", {
    className: "brand__tag"
  }, "Armutssensibilit\xE4t in p\xE4dagogischen Kontexten")))), React.createElement("div", {
    className: "site-footer__col"
  }, React.createElement("h4", null, "FORMATE"), React.createElement("a", {
    href: `${base}index.html#angebot`
  }, "Schulinterne Fortbildungen"), React.createElement("a", {
    href: `${base}index.html#angebot`
  }, "Kommunale Fortbildungen"), React.createElement("a", {
    href: `${base}index.html#angebot`
  }, "Workshops & Vortr\xE4ge"), React.createElement("a", {
    href: `${base}index.html#angebot`
  }, "Materialentwicklung")), React.createElement("div", {
    className: "site-footer__col"
  }, React.createElement("h4", null, "Forschung"), React.createElement("a", {
    href: `${base}blog/index.html`
  }, "Blog"), React.createElement("a", {
    href: `${base}index.html#person`
  }, "\xDCber mich"), React.createElement("a", {
    href: `${base}index.html#termine`
  }, "Termine")), React.createElement("div", {
    className: "site-footer__col"
  }, React.createElement("h4", null, "Rechtliches"), React.createElement("a", {
    href: `${base}impressum.html`
  }, "Impressum"), React.createElement("a", {
    href: `${base}datenschutz.html`
  }, "Datenschutz"))), React.createElement("div", {
    className: "site-footer__bottom"
  }, React.createElement("div", null, "\xA9 2026 Dr. Oscar Yendell \xB7 Alle Rechte vorbehalten. \xB7 Fotos: ", React.createElement("a", {
    href: "https://www.conen.photos/",
    target: "_blank",
    rel: "noopener"
  }, "Sebastian Conen")), React.createElement("div", {
    className: "site-footer__social"
  }, React.createElement("a", {
    href: "https://www.linkedin.com/in/oscar-yendell/",
    "aria-label": "LinkedIn",
    target: "_blank",
    rel: "noopener"
  }, React.createElement(Icon, {
    name: "linkedin",
    size: 16
  })), React.createElement("a", {
    href: "mailto:mail@oscaryendell.de",
    "aria-label": "E-Mail",
    style: {
      marginLeft: 8
    }
  }, React.createElement(Icon, {
    name: "mail",
    size: 16
  }))))));
}
window.SiteFooter = SiteFooter;
})();

/* blog/Article.jsx */
;(function(){
function Article() {
  return React.createElement("article", {
    className: "article"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "article__inner"
  }, React.createElement("a", {
    className: "article__back",
    href: "index.html"
  }, "\u2190 Zur\xFCck zum Blog"), React.createElement(Reveal, null, React.createElement("span", {
    className: "article__tag"
  }, "Grundlagen"), React.createElement("h1", {
    className: "article__title"
  }, "Was ist Armutssensibilit\xE4t?"), React.createElement("div", {
    className: "article__meta"
  }, React.createElement("span", null, "01. Oktober 2026"))), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("div", {
    className: "article__art"
  }, React.createElement("img", {
    src: "../design/assets/illustrations/gespraech.svg",
    alt: ""
  }))), React.createElement(Reveal, {
    delay: 120
  }, React.createElement("div", {
    className: "article__body"
  }, React.createElement("p", {
    className: "article__lede"
  }, "In meinen Fortbildungen und Workshops teilen Lehr- und Fachkr\xE4fte regelm\xE4\xDFig Erlebnisse aus ihrem p\xE4dagogischen Alltag mit mir: Ein Kind hat beispielsweise die geforderten Materialien nicht dabei oder das Geld f\xFCr den anstehenden Ausflug fehlt. In solchen Momenten, die im dichten p\xE4dagogischen Alltag sehr herausfordernd sind, wird manchmal nach den naheliegendsten Erkl\xE4rungen gesucht. Dabei kommen zum Teil auch Stereotype, also verallgemeinerte \xDCberzeugungen \xFCber Menschen mit Armutshintergrund, zum Tragen ", React.createElement("span", {
    className: "article__cite"
  }, "(Shevchuk & Glock, 2022)"), ". H\xE4ufige Stereotype in Bezug auf Armut sind, dass es Eltern und Kindern mit Armutserfahrungen am n\xF6tigen Bewusstsein f\xFCr Bildung fehlt oder sie schlicht unorganisiert seien ", React.createElement("span", {
    className: "article__cite"
  }, "(Civitillo & Jugert, 2022; Koevel et al., 2021; Shevchuk & Glock, 2022)"), "."), React.createElement("p", null, "Stereotype sind ein normaler psychischer Prozess und es ist menschlich, das Verhalten manchmal auch aus Stereotypen heraus zu deuten, die gesellschaftlich verbreitet sind ", React.createElement("span", {
    className: "article__cite"
  }, "(Shevchuk & Glock, 2022)"), ". Werden entsprechende Situationen jedoch unbewusst durch die eigene stereotype Brille betrachtet, kann dies dazu f\xFChren, dass entsprechenden Kindern und Eltern eine negative und defizitorientierte Haltung entgegengebracht wird, wodurch deren enorme strukturelle Belastungen \xFCbersehen werden ", React.createElement("span", {
    className: "article__cite"
  }, "(Otto, 2026)"), "."), React.createElement("p", null, "F\xFCr ein wirksames und ressourcenorientiertes p\xE4dagogisches Handeln ist ein Perspektivwechsel daher hilfreich: Wir brauchen ", React.createElement("span", {
    className: "article__accent article__accent--clay"
  }, "Armutssensibilit\xE4t"), " ", React.createElement("span", {
    className: "article__cite"
  }, "(Holz, 2021)"), ". Diese erm\xF6glicht, eigene Stereotype zu hinterfragen und die professionelle Haltung sowie das eigene Handeln in der Einrichtung entsprechend weiterzuentwickeln. Wie Holz ", React.createElement("span", {
    className: "article__cite"
  }, "(2021)"), " definiert, erfordert Armutssensibilit\xE4t einen empathischen und respektvollen Blick auf armutsbetroffene Familien. Diese Wertsch\xE4tzung bezieht sich auf ihre komplexe Lebenslage und ihre Bed\xFCrfnisse, aber ganz besonders auf ihre vorhandenen Ressourcen und individuellen Bew\xE4ltigungsstrategien. Schoneville und Thole ", React.createElement("span", {
    className: "article__cite"
  }, "(2025)"), " betonen zudem, dass es sich bei einer armutssensiblen Haltung nicht nur um ein spekulatives emotionales Einf\xFChlen handelt. Es bedarf vielmehr eines fundierten professionellen Wissens und konkreter Einrichtungskonzepte, um angemessen auf die Lebenswirklichkeit armutsbetroffener Familien reagieren zu k\xF6nnen. Ein zentrales Leitprinzip lautet in diesem Kontext, dass Ungleiches ungleich behandelt werden muss, um armutsbedingte Unterschiede aktiv auszugleichen und allen Kindern Teilhabe zu erm\xF6glichen ", React.createElement("span", {
    className: "article__cite"
  }, "(Holz, 2023)"), ". Doch welche armutsbezogenen Ungleichheiten werden in der Forschung diskutiert?"), React.createElement("h2", null, "Forschung zu armutsbezogenen Ungleichheiten"), React.createElement("p", null, "Armut wird in Deutschland oftmals \xFCber den Begriff der ", React.createElement("span", {
    className: "article__accent article__accent--teal"
  }, "relativen Armut"), " oder den Erhalt von Transferleistungen (bspw. Neue Grundsicherung, ehemals B\xFCrgergeld) definiert ", React.createElement("span", {
    className: "article__cite"
  }, "(Goebel & Krause, 2018; Funcke & Menne, 2023)"), ". Relative Armut beschreibt eine Lebenslage, in der das Einkommen so gering ist (weniger als 60% des Medianeinkommens), dass ein Lebensstandard, der als selbstverst\xE4ndlich gilt, nicht erreichbar ist."), React.createElement("p", null, "Das Aufwachsen in dieser Realit\xE4t kann begrenzen, besch\xE4men und das soziale Leben erheblich beeinflussen ", React.createElement("span", {
    className: "article__cite"
  }, "(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)"), ". So erhalten Kinder im B\xFCrgergeldbezug lediglich knapp 152\u20AC im Monat f\xFCr Lebensmittel, 47\u20AC f\xFCr Kleidung und 56\u20AC f\xFCr Freizeit & Kultur ", React.createElement("span", {
    className: "article__cite"
  }, "(Piekarz, 2026)"), ". Generell k\xF6nnen Hobbys im Verein f\xFCr armutsbetroffene Kinder und Jugendliche an den Kosten f\xFCr Mitgliedsbeitr\xE4ge oder Ausr\xFCstung scheitern ", React.createElement("span", {
    className: "article__cite"
  }, "(Funcke & Menne, 2023)"), ". Der Parit\xE4tische Wohlfahrtsverband ", React.createElement("span", {
    className: "article__cite"
  }, "(2026)"), " erfasst in seinem Armutsbericht, was sich Menschen aus finanziellen Gr\xFCnden konkret nicht leisten k\xF6nnen. Fast die H\xE4lfte der einkommensarmen Menschen (49,8 %) kann sich beispielsweise keinen einw\xF6chigen Jahresurlaub leisten ", React.createElement("span", {
    className: "article__cite"
  }, "(Parit\xE4tischer Wohlfahrtsverband, 2026)"), ". F\xFCr Kinder bedeutet das, nach den Ferien in (m\xF6glichen) Erz\xE4hlkreisen keine Urlaubsgeschichten teilen zu k\xF6nnen. Wenn Familien unter extremen finanziellen und strukturellen Druck stehen, schrumpft oft ihr sozialer Radius, was das Risiko f\xFCr Einsamkeit und soziale Isolation erh\xF6ht ", React.createElement("span", {
    className: "article__cite"
  }, "(Parit\xE4tischer Wohlfahrtsverband, 2026)"), ". Aus diesem Erleben von Mangel und dem Gef\xFChl, nicht dazuzugeh\xF6ren, kann bei Kindern und Jugendlichen eine tiefe Scham erwachsen ", React.createElement("span", {
    className: "article__cite"
  }, "(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)"), "."), React.createElement("p", {
    className: "article__pullquote"
  }, "Fast die H\xE4lfte der einkommensarmen Menschen kann sich keinen einw\xF6chigen Jahresurlaub leisten. F\xFCr Kinder bedeutet das, nach den Ferien keine Urlaubsgeschichten teilen zu k\xF6nnen."), React.createElement("p", null, "Forschungsergebnisse zeigen dar\xFCber hinaus, dass Armut ein gesundes Aufwachsen negativ beeinflusst ", React.createElement("span", {
    className: "article__cite"
  }, "(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)"), ". Beispielsweise schr\xE4nkt das st\xE4dtebauliche Umfeld in armutsbetroffenen Sozialr\xE4umen die Bewegungs- und Spielr\xE4ume von Kindern negativ ein, indem eine hohe Verkehrsbelastung sowie weniger Spiel- und Freir\xE4ume bestehen ", React.createElement("span", {
    className: "article__cite"
  }, "(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)"), ". Gleichzeitig zeigt sich in entsprechenden Sozialr\xE4umen auch eine schlechtere gesundheitliche Versorgung als in wohlhabenderen Sozialr\xE4umen ", React.createElement("span", {
    className: "article__cite"
  }, "(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)"), ". Armut geht zudem mit unterschiedlichen gesundheitlichen Einschr\xE4nkungen wie beispielsweise einer h\xF6heren Chance an Entwicklungsverz\xF6gerungen, Schlafproblemen sowie psychischen Erkrankungen einher ", React.createElement("span", {
    className: "article__cite"
  }, "(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)"), "."), React.createElement("p", null, "Armutserfahrungen wirken sich entsprechend wie ein Katalysator auf Bildungswege aus. Die soziale Schere geht im Schulsystem nicht erst beim Schulabschluss auseinander, sondern ist bereits in der Grundschule messbar. Sch\xFCler*innen aus privilegierten Elternh\xE4usern haben in der vierten Klasse in Mathematik und Deutsch einen Leistungsvorsprung von etwa einem ganzen Schuljahr vor Kindern aus Familien mit niedrigem Sozialstatus ", React.createElement("span", {
    className: "article__cite"
  }, "(Funcke & Menne, 2023)"), ". In der Folge verlaufen die Bildungsbiografien von Kindern mit Armutserfahrung deutlich instabiler: Sie wiederholen h\xE4ufiger eine Klasse, werden bei gleichen Leistungen im Schnitt schlechter benotet, erhalten seltener eine Gymnasialempfehlung und m\xFCnden nach der Schule h\xE4ufiger in Warteschleifen des \xDCbergangssystems statt in eine Berufsausbildung oder ein Studium ", React.createElement("span", {
    className: "article__cite"
  }, "(Funcke & Menne, 2023)"), "."), React.createElement("p", null, "Armutssensibilit\xE4t erfordert entsprechend, auf vielschichtige Benachteiligungen einzugehen und dabei dennoch einen ressourcenorientierten Blick auf Kinder und Familien zu richten. Um diesem Anspruch gerecht zu werden, kann Armutssensibilit\xE4t in drei Ebenen unterteilt werden."), React.createElement("div", {
    className: "article__levels"
  }, React.createElement("div", {
    className: "article__level article__level--teal"
  }, React.createElement("h3", null, React.createElement("span", {
    className: "article__level-num"
  }, "1"), "Die pers\xF6nliche armutssensible Haltung"), React.createElement("p", null, "Armutssensibles Arbeiten beginnt bei einer fundierten Selbstreflexion ", React.createElement("span", {
    className: "article__cite"
  }, "(Otto, 2026)"), ". Es kann im Alltag sehr entlastend sein, eigene (unbewusste) Stereotype kritisch zu hinterfragen. Eine reflexiv-professionelle p\xE4dagogische Haltung blendet Armut nicht aus, sondern kann Ausgrenzungsmechanismen aktiv entgegentreten. Wir erkennen dabei an, dass Familien in Armutslagen unter enormem strukturellem Druck stehen k\xF6nnen und richten unseren Blick darauf, sie in ihren Potenzialen zu st\xE4rken.")), React.createElement("div", {
    className: "article__level article__level--clay"
  }, React.createElement("h3", null, React.createElement("span", {
    className: "article__level-num"
  }, "2"), "Armutssensible organisatorische Abl\xE4ufe in der Einrichtung"), React.createElement("p", null, "Einrichtungen k\xF6nnen ihre t\xE4glichen Routinen so gestalten, dass sie bestehende Barrieren abbauen und Besch\xE4mung verhindern ", React.createElement("span", {
    className: "article__cite"
  }, "(Otto, 2026)"), ". Armut darf im p\xE4dagogischen Raum nicht offen zur Schau gestellt werden. Ein wirkungsvoller Ansatz ist beispielsweise die Einrichtung eines kooperativen Materialfundus ", React.createElement("span", {
    className: "article__cite"
  }, "(Otto, 2026)"), ". Dabei nutzen Einrichtungen grundlegende Lern- und Bastelmaterialien aus einem gemeinsamen Pool f\xFCr alle Kinder. Auf diese Weise lassen sich individuelle Bedarfe passgenau decken, ohne dass finanzielle Engp\xE4sse einzelner Familien sichtbar werden, was andernfalls zu einer sozialen Stigmatisierung f\xFChren k\xF6nnte.")), React.createElement("div", {
    className: "article__level article__level--moss"
  }, React.createElement("h3", null, React.createElement("span", {
    className: "article__level-num"
  }, "3"), "Armutssensible strukturelle Zug\xE4nge und Vernetzung im Sozialraum"), React.createElement("p", null, "Selbst die engagiertesten Fachkr\xE4fte k\xF6nnen an ihre Grenzen sto\xDFen, wenn sie isoliert handeln. Armutssensibilit\xE4t gewinnt an Kraft durch eine institutions\xFCbergreifende Zusammenarbeit im Sozialraum ", React.createElement("span", {
    className: "article__cite"
  }, "(Otto, 2026)"), ". Sogenannte kommunale Pr\xE4ventionsketten verbinden die Angebote der Gesundheitsf\xF6rderung, der Kinder- und Jugendhilfe sowie von Bildungseinrichtungen systematisch miteinander ", React.createElement("span", {
    className: "article__cite"
  }, "(Richter-Kornweitz, 2024)"), ". Durch diese ressort\xFCbergreifende Vernetzung kann sichergestellt werden, dass Familien l\xFCckenlos begleitet werden und Kinder an den kritischen \xDCberg\xE4ngen im Bildungssystem nicht den Anschluss verlieren."))), React.createElement("h2", null, "Gemeinsam Armutssensibilit\xE4t in die Praxis \xFCbersetzen"), React.createElement("p", null, "Dieses Verst\xE4ndnis von Armutssensibilit\xE4t pr\xE4gt mein Arbeiten mit Schulen, Vereinen, Initiativen und Kommunen. Grundlage ist dabei f\xFCr mich immer, welche (unausgesprochenen) Stereotype Eltern und Kindern mit Armutserfahrungen entgegengebracht werden und wie ein sensibler sowie gleichzeitig ressourcenorientierter Blick erm\xF6glicht werden kann (", React.createElement("span", {
    className: "article__level-ref article__level-ref--teal"
  }, "Ebene 1"), "). Eine stetige Reflexion dieser Haltung erm\xF6glicht dar\xFCber hinaus, einrichtungsinterne armutssensible Abl\xE4ufe zu implementieren (", React.createElement("span", {
    className: "article__level-ref article__level-ref--clay"
  }, "Ebene 2"), ") sowie einrichtungs\xFCbergreifende und kommunale Vernetzung im Sozialraum armutssensibel zu gestalten (", React.createElement("span", {
    className: "article__level-ref article__level-ref--moss"
  }, "Ebene 3"), "). Dabei ist mir wichtig zu betonen:"), React.createElement("p", {
    className: "article__pullquote"
  }, "Armutssensibilit\xE4t ist kein Zustand, den man einmalig erreicht, sondern eine dauerhafte professionelle Suchbewegung."), React.createElement("p", null, "Um diesen Weg nicht allein gehen zu m\xFCssen, unterst\xFCtze ich Sie gerne dabei, Forschung und Konzepte zur Armutssensibilit\xE4t in Ihre konkrete Praxis zu \xFCbersetzen und die dr\xE4ngendsten Armutsfolgen aufzufangen."), React.createElement("p", null, "In meinen ", React.createElement("span", {
    className: "article__accent article__accent--teal"
  }, "schulinternen Fortbildungen"), " erarbeite ich mit Ihnen und Ihrem (multiprofessionellen) Kollegium passgenaue Vorgehensweisen f\xFCr Ihre Einzelschule. Dabei konzentrieren wir uns gezielt darauf, wie die professionelle Haltung im p\xE4dagogischen Alltag gest\xE4rkt werden kann (Ebene 1) und wie sich organisatorische Abl\xE4ufe im Alltag (Ebene 2) so gestalten lassen, dass sie Armutsfolgen im Schulalltag bestm\xF6glich abfedern. Zudem arbeiten wir heraus, welche Armutsfolgen Ihre Schule nicht alleine auffangen kann und wo eine kommunale Vernetzung im Sozialraum gewinnbringend ist (Ebene 3)."), React.createElement("p", null, "In ", React.createElement("span", {
    className: "article__accent article__accent--clay"
  }, "kommunalen Fortbildungen"), " blicken wir \xFCber den Tellerrand der einzelnen Einrichtung hinaus und bringen schulische sowie au\xDFerschulische Akteur*innen im Sozialraum zusammen. Hier richten wir den Fokus ganz besonders auf die dritte Ebene und erarbeiten, wie Kinder und Familien durch kommunale Pr\xE4ventionsketten institutions\xFCbergreifend und armutssensibel unterst\xFCtzt werden k\xF6nnen."), React.createElement("p", null, "Mein Anspruch ist dabei stets, dass wir keine theoretischen Standardl\xF6sungen besprechen, sondern konkrete Ans\xE4tze f\xFCr Ihre Lebensrealit\xE4t vor Ort entwickeln. Zudem werden die Fortbildungen selbstverst\xE4ndlich an Ihre Bed\xFCrfnisse angepasst, weshalb mir vorherige Besprechungen (optional auch Umfragen) zur Erwartungsabfrage sehr wichtig sind. Gleiches gilt selbstverst\xE4ndlich f\xFCr meine Workshops, Vortr\xE4ge sowie eine gemeinsame Materialentwicklung. Wenn Sie Interesse an einer Zusammenarbeit haben, ", React.createElement("a", {
    href: "../index.html#kontakt"
  }, "freue ich mich von Ihnen zu h\xF6ren"), "."), React.createElement("div", {
    className: "article__refs"
  }, React.createElement("h2", null, "Literaturverzeichnis"), React.createElement("ul", null, React.createElement("li", null, "Civitillo, S., & Jugert, P. (2022). \u201ASie k\xFCmmern sich nicht und haben es eh verdient\u2018 \u2013 Mythen \xFCber den Zusammenhang von Armut und Bildung. In G. Steins, B. Spinath, S. Dutke, M. Roth, & M. Limbourg (Hrsg.), ", React.createElement("em", null, "Mythen, Fehlvorstellungen, Fehlkonzepte und Irrt\xFCmer in Schule und Unterricht"), " (S. 181\u2013196). Springer Fachmedien."), React.createElement("li", null, "Funcke, A., & Menne, S. (2023). ", React.createElement("em", null, "Kinder- und Jugendarmut in Deutschland."), " Bertelsmann Stiftung."), React.createElement("li", null, "Goebel, J., & Krause, P. (2018). Quantitative Messung von Armut. In P. B\xF6hnke, J. Dittmann, & J. Goebel (Hrsg.), ", React.createElement("em", null, "Handbuch Armut"), " (S. 56\u201368). Barbara Budrich."), React.createElement("li", null, "Holz, G. (2021). ", React.createElement("em", null, "St\xE4rkung von Armutssensibilit\xE4t: Ein Basiselement individueller und struktureller Armutspr\xE4vention f\xFCr junge Menschen."), " Senatsverwaltung f\xFCr Bildung, Jugend und Familie."), React.createElement("li", null, "Holz, G. (2023). Kinderarmut und familienbezogene soziale Dienstleistungen. In E.-U. Huster & J. Boeckh (Hrsg.), ", React.createElement("em", null, "Handbuch Armut und soziale Ausgrenzung"), " (S. 1\u201323). Springer Fachmedien Wiesbaden."), React.createElement("li", null, "Koevel, A., Nerdinger, F. W., & Junge, M. (2021). \u201EVerschuldete Armut ist f\xFCr mich, wenn ich saufen gehe und nichts mehr mach\" \u2013 Eine Grounded Theory-Studie zu Armutskonstruktionen von Lehrpersonen. ", React.createElement("em", null, "Zeitschrift f\xFCr Soziologie der Erziehung und Sozialisation, 41"), "(1), 57\u201372."), React.createElement("li", null, "Kooperationsverbund Gesundheitliche Chancengleichheit. (2024). ", React.createElement("em", null, "Zur gesundheitlichen Lage sozial benachteiligter Kinder und Jugendlicher."), " Kooperationsverbund Gesundheitliche Chancengleichheit."), React.createElement("li", null, "Otto, S. (2026). Armutssensibles Handeln von Kindheitsp\xE4dagog:innen. Chancen und Herausforderungen vor und nach dem Schuleintritt. In S. Rutter & F. Weitk\xE4mper (Hrsg.), ", React.createElement("em", null, "Armut und Schule: Herausforderungen und Handlungsm\xF6glichkeiten f\xFCr die p\xE4dagogische Arbeit"), " (1. Aufl., S. 42\u201355). Juventa Verlag."), React.createElement("li", null, "Parit\xE4tischer Wohlfahrtsverband. (2026). ", React.createElement("em", null, "Wachsende Armut, schrumpfende Sicherheit \u2013 Parit\xE4tischer Armutsbericht."), " Deutscher Parit\xE4tischer Wohlfahrtsverband \u2013 Gesamtverband e. V."), React.createElement("li", null, "Piekarz, P. (2026, 24. M\xE4rz). B\xFCrgergeld Regelsatz \u2013 So hoch ist der Regelbedarf. ", React.createElement("em", null, "Buergergeld.org.")), React.createElement("li", null, "Richter-Kornweitz, A. (2024). Pr\xE4ventionsketten \u2013 Integrierte kommunale Strategie zur strukturell orientierten Armutspr\xE4vention. In A. Brettschneider, S. Grohs, & N. Jehles (Hrsg.), ", React.createElement("em", null, "Handbuch Kommunale Sozialpolitik"), " (S. 1\u201318). Springer Fachmedien Wiesbaden."), React.createElement("li", null, "Shevchuk, A., & Glock, S. (2022). Pygmalion und die Rolle askriptiver Sch\xFCler*innenmerkmale auf Lehrkrafterwartungen und Erwartungseffekte: Damals und heute. In S. Glock (Hrsg.), ", React.createElement("em", null, "Stereotype in der Schule II"), " (S. 1\u201348). Springer Fachmedien Wiesbaden."), React.createElement("li", null, "Schoneville, H., & Thole, W. (2025). Armut und Soziale Arbeit. ", React.createElement("em", null, "Sozial Extra, 49"), "(2), 106\u2013112."))), React.createElement("div", {
    className: "article__footer"
  }, React.createElement("a", {
    className: "article__back",
    href: "index.html",
    style: {
      marginBottom: 0
    }
  }, "\u2190 Zur\xFCck zum Blog")))))));
}
window.Article = Article;
})();

/* inline */
;(function(){
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    active: "blog"
  }), React.createElement("main", null, React.createElement(Article, null)), React.createElement(SiteFooter, {
    isBlog: true
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
})();