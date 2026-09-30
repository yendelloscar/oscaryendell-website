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

/* components/Hero.jsx */
;(function(){
function Hero() {
  return React.createElement("section", {
    className: "hero",
    id: "top"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "hero__grid"
  }, React.createElement("div", {
    className: "hero__copy"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "hero__eyebrow"
  }, "FORTBILDUNGEN \xB7 WORKSHOPS \xB7 VORTR\xC4GE \xB7 MATERIALENTWICKLUNG"), React.createElement("div", {
    className: "hero__name"
  }, "Dr. Oscar Yendell")), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("h1", {
    className: "hero__title"
  }, "Schule ", React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "armutssensibel"), " gestalten. Wissenschaftlich fundiert, f\xFCr den Schulalltag gemacht.")), React.createElement(Reveal, {
    delay: 200
  }, React.createElement("p", {
    className: "hero__lede"
  }, "Ich arbeite mit Lehrkr\xE4ften, Schulleitungen, Sozialarbeiter*innen und kommunalen sowie weiteren Bildungsakteur*innen zusammen. Gemeinsam \xFCbersetzen wir Forschung und Konzepte zur Armutssensibilit\xE4t in die p\xE4dagogische Praxis und erarbeiten konkrete M\xF6glichkeiten der Armutssensibilit\xE4t vor Ort.")), React.createElement(Reveal, {
    delay: 260
  }, React.createElement("div", {
    className: "hero__ctas"
  }, React.createElement("a", {
    href: "#kontakt",
    className: "btn btn-primary"
  }, "Veranstaltung anfragen ", React.createElement(Icon, {
    name: "arrow",
    size: 14
  })), React.createElement("a", {
    href: "#angebot",
    className: "btn btn-ghost"
  }, "Angebot ansehen")))), React.createElement(Reveal, {
    delay: 120,
    className: "hero__portrait"
  }, React.createElement("div", {
    className: "portrait-frame portrait-frame--photo"
  }, React.createElement("img", {
    src: "assets/oscar-standing.jpg",
    alt: "Dr. Oscar Yendell vor einer Backsteinfassade",
    className: "portrait-frame__img",
    style: {
      objectPosition: '58% 30%'
    }
  })), React.createElement("div", {
    className: "about__caption"
  }, "Dr. Oscar Yendell \xB7 Armutssensibilit\xE4t in p\xE4dagogischen Kontexten")))));
}
window.Hero = Hero;
})();

/* components/Offers.jsx */
;(function(){
function Offers() {
  const items = [{
    num: '01',
    accent: 'teal',
    tag: '',
    title: 'Schulinterne Fortbildungen',
    body: 'Ein gemeinsamer Tag mit Ihrem (multiprofessionellen) Kollegium: Wie beeinflusst Armut das Aufwachsen unserer Schüler*innen? In welchen Momenten wird Armut in unserer Schule überhaupt relevant? Wie können wir den identifizierten Armutsfolgen an unserer Schule begegnen? Gemeinsam erarbeiten wir konkrete Ansätze für Sie vor Ort.'
  }, {
    num: '02',
    accent: 'clay',
    tag: '',
    title: 'Kommunale Fortbildungen',
    body: 'Ein gemeinsamer Tag mit mehreren Institutionen (Bspw. Schulvertreter*innen, kommunale Bildungsakteur*innen und Partner*innen im Sozialraum): Wie beeinflusst Armut das Aufwachsen im Sozialraum? Welche Präventionsketten und -Netzwerke gibt es? Gemeinsam erarbeiten wir, wie Armutsfolgen institutionsübergreifend vor Ort aufgefangen werden können.'
  }, {
    num: '03',
    accent: 'ochre',
    tag: '',
    title: 'Workshops & Vorträge',
    body: 'Online oder vor Ort. Impuls­formate für Fachtage, Kommunen, Vereine und Stiftungen. Von 60-Minuten-Vortrag bis hin zu längeren Workshops.'
  }, {
    num: '04',
    accent: 'moss',
    tag: '',
    title: 'Materialentwicklung',
    body: 'Hand­reichungen, Arbeitsblätter, Checklisten, Reflexions­bögen, Materialien zur Sozialraumbegehung, passgenau für die Bedarfe der Nutzer*innen.'
  }];
  return React.createElement("section", {
    className: "section",
    id: "angebot"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section__head"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "section__eyebrow"
  }, "Angebot"), React.createElement("h2", {
    className: "section__title"
  }, "Vier Formate, ein Ziel: Armutssensibilit\xE4t in die Praxis \xFCbersetzen."), React.createElement("p", {
    className: "section__lede"
  }, "Jedes Format wird gemeinsam mit Ihnen auf das zugeschnitten, was bei Ihnen vor Ort tats\xE4chlich gerade ansteht. Meine Formate basieren immer auf aktuellen wissenschaftlichen Erkenntnissen zur Armutssensibilit\xE4t und Beispielen einer konkreten armutssensiblen Praxis vor Ort. Mein Anspruch ist es stets, dass am Ende des Formats konkrete Vorgehensweisen f\xFCr eine armutssensible Praxis erarbeitet werden."))), React.createElement("div", {
    className: "offers__grid"
  }, items.map((it, i) => React.createElement(Reveal, {
    key: it.num,
    delay: i * 60
  }, React.createElement("article", {
    className: `offer offer--${it.accent}`
  }, React.createElement("h3", {
    className: "offer__title"
  }, it.title), React.createElement("p", {
    className: "offer__body"
  }, it.body), React.createElement("span", {
    className: "offer__tag"
  }, it.tag))))), React.createElement(Reveal, {
    delay: 200
  }, React.createElement("div", {
    className: "offers__note"
  }, React.createElement("span", null, React.createElement("strong", null, "Sie haben Interesse an einem gemeinsamen Format oder haben weitere Ideen?"), " Schreiben Sie mir, gerne k\xF6nnen wir in die gemeinsame Planung einsteigen."), React.createElement("a", {
    href: "#kontakt",
    className: "text-link"
  }, "Format gemeinsam entwickeln ", React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))));
}
window.Offers = Offers;
})();

/* components/About.jsx */
;(function(){
function About() {
  return React.createElement("section", {
    className: "section section--soft",
    id: "person"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "about__grid"
  }, React.createElement(Reveal, {
    className: "about__portrait"
  }, React.createElement("div", {
    className: "portrait-frame portrait-frame--photo"
  }, React.createElement("img", {
    src: "assets/oscar-sitting.jpg",
    alt: "Dr. Oscar Yendell im Hof, lachend",
    className: "portrait-frame__img",
    style: {
      objectPosition: '55% 30%'
    }
  })), React.createElement("div", {
    className: "about__caption"
  }, "Dr. Oscar Yendell \xB7 Armutssensibilit\xE4t in p\xE4dagogischen Kontexten")), React.createElement("div", {
    className: "about__copy"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "section__eyebrow"
  }, "\xDCber mich"), React.createElement("h2", {
    className: "section__title"
  }, "Forschung trifft Klassenzimmer."), React.createElement("h3", null, "Bildungswissenschaftler und Fortbildner an der Schnittstelle von Wissenschaft und Praxis.")), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("p", {
    className: "about__lede"
  }, "Meine Biografie f\xFChrte mich in die Arbeit zur ", React.createElement("span", {
    className: "about__accent about__accent--teal"
  }, "Armutssensibilit\xE4t"), ": Nachdem ich selbst in Armut aufgewachsen bin, habe ich in Flensburg erst Bildungswissenschaften und dann Transformationsstudien studiert, stets mit einem Fokus darauf, wie Armut Bildungskarrieren und Teilhabe beeinflusst. An der Universit\xE4t Mannheim habe ich meine Doktorarbeit zu armuts\xADbezogenen Vorstellungen von Lehrkr\xE4ften und zu armuts\xADbezogenen Interaktionen in Schulen geschrieben. 2021 ist hieraus eine Freiberuflichkeit entstanden, in der ich Fortbildungen, Workshops und Beratungsleistungen f\xFCr Schulen, Kommunen, Tr\xE4ger, Vereine und Stiftungen zur Armutssensibilit\xE4t anbiete."), React.createElement("p", null, "Parallel dazu habe ich meine Leidenschaft f\xFCr ", React.createElement("span", {
    className: "about__accent about__accent--clay"
  }, "Organisationsentwicklung"), " entdeckt: Im Projekt \"Schule macht Stark\" habe ich Schulen zu Ihrer Organisationsentwicklung und Sozialraumarbeit beraten. Im CHANCEN-Verbund habe ich L\xE4nder in der Begleitung von Startchancen-Schulen beraten. Zuletzt habe ich eine Fortbildung zum agilen Projektmanagement (IHK-zertifiziert) absolviert, da ein gutes Projektmanagement unerl\xE4sslich ist, um Ver\xE4nderungen nachhaltig in Organisationen zu implementieren."), React.createElement("p", null, "Aktuell \xFCbernehme ich das operative Stiftungsmanagement der ", React.createElement("a", {
    href: "https://www.hanne-landgraf-stiftung.de",
    target: "_blank",
    rel: "noopener"
  }, "Hanne-Landgraf-Stiftung"), ", die sich gegen Kinder- und Jugendarmut in Karlsruhe einsetzt. Neben Projektkoordination, Fundraising und Kommunikation, baue ich Netzwerke und Kooperationen mit Bildungseinrichtungen sowie zivilgesellschaftlichen Akteur*innen auf, damit Ma\xDFnahmen zur Bew\xE4ltigung von Armutsfolgen umgesetzt werden."), React.createElement("p", null, "In meinen Formaten verbinde ich meine Biografie mit wissenschaftlichen Erkenntnissen zur Armutssensibilit\xE4t und meiner Expertise in der Organisationsentwicklung sowie der organisations\xFCbergreifenden Kooperation. Dabei habe ich stets ein Auge darauf, was Schulleitungen, Lehrkr\xE4fte, Sozial\xADarbeiter*innen und weitere Bildungsakteur*innen jeden Tag leisten."), React.createElement("p", {
    className: "about__closing"
  }, "Konkret und evidenz\xADbasiert, ohne erhobenen Zeigefinger.")), React.createElement(Reveal, {
    delay: 200
  }, React.createElement("div", {
    className: "about__cta"
  }, React.createElement("a", {
    href: "#kontakt",
    className: "btn btn-primary"
  }, "Kennen\xADlerngespr\xE4ch")))))));
}
window.About = About;
})();

/* components/Voices.jsx */
;(function(){
function Voices() {
  const [showAll, setShowAll] = React.useState(false);
  const items = [{
    quote: 'Von der Vorbereitung über die Durchführung bis zur Nachbereitung war es eine produktive Zusammenarbeit. Man ging individuell und unkompliziert auf unsere Vorstellungen ein - Schulleitung und Kollegium waren sehr angetan. Herr Yendell und seine Kollegin waren äußerst kompetent, einfühlsam und insgesamt überzeugend.',
    name: 'Christoph Timmerhues',
    role: 'stellv. Schulleitung · Grundschule · Rheinland-Pfalz',
    placeholder: false
  }, {
    quote: 'Oscar Yendell kann komplexe Themen verständlich machen, ohne sie zu vereinfachen, und bringt in seinen Vorträgen wissenschaftliche Erkenntnisse und praktische Perspektiven überzeugend zusammen. Ich erlebe die nun mehrjährige Zusammenarbeit als fachlich fundiert, professionell und zugleich sehr nahbar. Seine persönliche Geschichte sorgt für zusätzliche Glaubwürdigkeit, ohne im Vordergrund zu stehen.',
    name: 'Jaana Espenlaub',
    role: 'ArbeiterKind.de, Baden-Württemberg',
    placeholder: false
  }, {
    quote: 'Die Workshops zur Armutssensibilität, die Oscar Yendell bei uns gegeben hat, waren fachlich sehr fundiert und gleichzeitig nah an der Praxis der angehenden Lehrkräfte. Besonders wertvoll war, wie konkret die Inhalte an alltäglichen Beispielen ausgerichtet wurden.',
    name: 'Sandra Hoffmeister',
    role: 'Schulsozialarbeit, Niedersachsen',
    placeholder: false
  }, {
    quote: 'Die Zusammenarbeit mit Oscar Yendell bei der Entwicklung des Materials zur armutssensiblen Schulentwicklung war fachlich fundiert, verlässlich und immer mit klarem Blick für die schulische Praxis. Gemeinsam ist es uns gelungen, wissenschaftlich fundierte Perspektiven in ein strukturiertes und flexibel einsetzbares Arbeitsmaterial zu übersetzen. Das kostenlos zugängliche Material schließt damit eine bislang bestehende Lücke und unterstützt Schulen dabei, Armutssensibilität systematischer in den Blick zu nehmen und weiterzuentwickeln.',
    name: 'Mareike Fritz',
    role: 'Stiftung Lernen durch Engagement, Berlin',
    placeholder: false
  }, {
    quote: 'Als Teilnehmer der Fortbildung habe ich sehr davon profitiert, Armutssensibilität nicht nur theoretisch, sondern anhand konkreter Situationen aus unserem Arbeitsalltag zu besprechen. Für die Koordination der Schulsozialarbeit in unserer Kommune haben wir daraus direkt umsetzbare Ansätze mitnehmen können, die wir künftig umsetzen wollen.',
    name: 'Markus Bender',
    role: 'Koordination Schulsozialarbeit, Bayern',
    placeholder: false
  }];
  return React.createElement("section", {
    className: "section section--soft"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section__head"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "section__eyebrow"
  }, "Stimmen"), React.createElement("h2", {
    className: "section__title"
  }, "Was Menschen sagen, mit denen ich zusammenarbeite."), React.createElement("p", {
    className: "section__lede"
  }, "Bei meinen Formaten ist mir eine Erwartungsabfrage im Vorfeld sehr wichtig, um die Formate nach Ihren Vorstellungen zu gestalten. Auch eine Evaluation sowie Nachbesprechung ist bei mir fester Bestandteil, um zu erfahren, ob und wie das Format f\xFCr Sie gewinnbringend war. Folgend finden Sie einige Stimmen von Menschen, mit denen ich zusammenarbeite."))), React.createElement("div", {
    className: "voices__grid"
  }, (showAll ? items : items.slice(0, 3)).map((it, i) => React.createElement(Reveal, {
    key: i,
    delay: i * 60
  }, React.createElement("article", {
    className: "voice"
  }, React.createElement("span", {
    className: "voice__quote-mark",
    "aria-hidden": "true"
  }, "\""), React.createElement("div", {
    className: `voice__quote ${it.placeholder ? 'voice__quote--placeholder' : ''}`
  }, "\u201E", it.quote, "\""), React.createElement("div", {
    className: "voice__attr"
  }, React.createElement("div", {
    className: "voice__name"
  }, it.name), React.createElement("div", {
    className: "voice__role"
  }, it.role)))))), items.length > 3 && React.createElement("div", {
    className: "voices__more"
  }, React.createElement("button", {
    type: "button",
    className: "voices__more-btn",
    onClick: () => setShowAll(!showAll),
    "aria-expanded": showAll
  }, showAll ? 'Weniger anzeigen' : `Weitere Stimmen anzeigen (${items.length - 3})`))));
}
window.Voices = Voices;
})();

/* components/Events.jsx */
;(function(){
function Events() {
  const [openIdx, setOpenIdx] = React.useState(null);
  const formats = [{
    accent: 'teal',
    label: 'Schulinterne Fortbildung',
    date: 'Grundschule, Ludwigshafen',
    title: 'Studientag zur Armutssensibilität im schulischen Alltag',
    desc: 'Beginnend haben wir uns damit auseinandergesetzt, welche Dimensionen Armutssensibilität umfasst. Anschließend haben wir eigene Vorstellungen und Fehlannahmen in Bezug auf Armut (zum Teil spielerisch) reflektiert. Darauffolgend haben wir identifiziert, welche Rolle Armut im Schulalltag (nicht) spielt (Bspw. Unterricht, Verpflegung, Ausflüge, Elternarbeit). Unter Bezugnahme auf konkrete Praxisbeispiele anderer Schulen haben wir erarbeitet, wie die Schule die identifizierten Armutsfolgen auffangen kann und wo eine Zusammenarbeit mit außerschulischen Partner*innen sinnvoll ist. Am Ende des Tages standen konkrete Vorgehensweisen fest, um in den kommenden Wochen eine armutssensible Praxis in den identifizierten Bereichen zu implementieren.'
  }, {
    accent: 'clay',
    label: 'Kommunale Fortbildung',
    date: 'Landschaftsverband Rheinland, Köln',
    title: 'Armutssensible Praxis als Teil der kommunalen Präventionskette',
    desc: 'Nachdem wir zu Beginn auf die Dimensionen von Armutssensibilität eingegangen sind, haben wir uns anschließend damit beschäftigt, wie Armut das Aufwachsen von Kindern & Jugendlichen in unterschiedlichen Lebensbereichen beeinflusst. Mit Blick auf konkrete armutssensible Praxisbeispiele anderer Kommunen, haben wir anschließend erarbeitet, welche Rolle Schulen und welche Rolle weitere Akteur*innen (Bspw. Jugendämter oder Jobcenter) in Bezug auf Armutssensibilität einnehmen. Am Ende des Tages bestand ein geteiltes Verständnis darüber, wer welche Armutsfolgen (nicht) auffangen kann und welche Kooperationsmöglichkeiten zwischen schulischen und außerschulischen Akteur*innen kommunale Präventionsketten in Bezug auf Armutssensibilität ermöglichen.'
  }, {
    accent: 'ochre',
    label: 'Workshop',
    date: 'ArbeiterKind.de, online',
    title: 'Armutsbezogene Vorstellungen von Lehr­kräften',
    desc: 'Zu Beginn haben wir uns unter Bezugnahme auf das ökonomische, soziale und kulturelle Kapital damit auseinandergesetzt, wie ein Mangel der Kapitalsorten Bildungskarrieren negativ beeinflusst. Anschließend haben wir aktuelle Studien diskutiert, die zeigen, wie negative armutsbezogene Vorstellungen von Lehrkräften zu verringerten Leistungserwartungen und -Bewertungen führen können. Abschließend wurden konkrete Möglichkeiten für den Schulalltag vorgestellt, negative Vorstellungen abzubauen. Dabei diskutierten die Teilnehmer*innen, wie dies in den Schulalltag implementiert werden kann.'
  }, {
    accent: 'plum',
    label: 'Vortrag',
    date: 'Bildungskonferenz, Frankenthal',
    title: 'Armutssensibilität verändert die Perspektive',
    desc: 'Auf der Bildungskonferenz der Regionalagentur Kommunales Bildungsmanagement Rheinland-Pfalz – Saarland habe ich im Pecha-Kucha-Format die drei Ebenen der Armutssensibilität vorgestellt: die persönliche Haltung von Fach- und Lehrkräften, armutssensible Abläufe in der Organisation und strukturelle Zugänge im Sozialraum. Entlang konkreter Beispiele habe ich gezeigt, an welchen Stellen Schulen und kommunale Bildungsakteur*innen ansetzen können, um Armutsfolgen aufzufangen – und wie sich der Perspektivwechsel auf das eigene Handeln auswirkt.'
  }, {
    accent: 'ochre',
    label: 'Seminar',
    date: React.createElement(React.Fragment, null, "Karlsruher Institut f\xFCr Technologie,", React.createElement("br", null), "Karlsruhe"),
    title: 'Klassismus und soziale Ungleichheit im Bildungssystem: Von der theoretischen Analyse zur armutssensiblen Praxis',
    desc: 'Das Seminar richtete sich im Studium Generale an Studierende aller Fachrichtungen und setzte keine bildungswissenschaftlichen Vorkenntnisse voraus. Ausgehend von den eigenen Bildungserfahrungen der Studierenden erarbeiteten wir theoretische Zugänge zu Bildungsverständnissen, zu den Kapitalsorten und zum Habitusbegriff nach Pierre Bourdieu sowie zur Wirkung von Klassismus auf struktureller und interaktionaler Ebene. Ein besonderer Fokus lag darauf, wie armutsbezogene Stereotype entstehen und unbewusst wirken. Im Praxisteil stand das Konzept der Armutssensibilität mit seinen drei Ebenen im Mittelpunkt: Die Studierenden reflektierten ihre (zukünftige) Rolle im privaten, universitären und beruflichen Kontext und erarbeiteten, wie Armutssensibilität in den eigenen Alltag integriert werden kann.'
  }, {
    accent: 'moss',
    label: 'Materialentwicklung',
    date: 'Stiftung Lernen durch Engagement',
    title: 'Armutssensible Haltung im Schulkontext',
    desc: 'Gemeinsam mit der Stiftung Lernen durch Engagement, habe ich Material zur Armutssensiblen Schulentwicklung mit einem besonderen Fokus auf eine Armutssensible Haltung entwickelt. Das Material ist so konzipiert, dass es schulischen Akteur*innen sowohl einzeln als auch in Gruppensettings ermöglicht, an einer armutssensiblen Haltung zu arbeiten. Zudem leitet das Material hin zu einer Implementation von regelmäßigen Routinen & Methoden zur dauerhaften Förderung der Armutssensibilität. Im Material selbst werden ausschließlich praxisnahe Open-Access-Materialien zitiert, damit die Nutzer*innen selbstständig weiter recherchieren können.',
    link: 'https://www.servicelearning.de/aktuelles/neuigkeiten/meldung/2025/10/02/neues-arbeitsmaterial-unterstuetzt-schulen-auf-dem-weg-zu-mehr-armutssensibilitaet',
    linkLabel: 'Zum Arbeitsmaterial'
  }];
  return React.createElement("section", {
    className: "section",
    id: "termine"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "section__head"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "section__eyebrow"
  }, "Termine"), React.createElement("h2", {
    className: "section__title"
  }, "Ein Einblick in meine Arbeit."), React.createElement("p", {
    className: "section__lede"
  }, "Sechs meiner letzten Formate beispielhaft beschrieben. Von der schulinternen Fortbildung bis hin zur Material\xADentwicklung."))), React.createElement("div", {
    className: "formats-grid"
  }, formats.map((f, i) => React.createElement(Reveal, {
    key: i,
    delay: i * 60
  }, React.createElement("article", {
    className: `format-card format-card--${f.accent}`
  }, React.createElement("header", {
    className: "format-card__head"
  }, React.createElement("span", {
    className: "format-card__label"
  }, f.label), React.createElement("span", {
    className: "format-card__date"
  }, f.date)), React.createElement("h3", {
    className: "format-card__title"
  }, f.title), f.meta && React.createElement("div", {
    className: "format-card__meta"
  }, f.meta), React.createElement("p", {
    className: `format-card__desc${openIdx === i ? '' : ' format-card__desc--clamped'}`
  }, f.desc), React.createElement("button", {
    type: "button",
    className: "format-card__toggle",
    onClick: () => setOpenIdx(openIdx === i ? null : i),
    "aria-expanded": openIdx === i
  }, openIdx === i ? 'Weniger anzeigen' : 'Mehr lesen'), f.link && React.createElement("a", {
    className: "format-card__link",
    href: f.link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, f.linkLabel, React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))))))));
}
window.Events = Events;
})();

/* components/BlogTeaser.jsx */
;(function(){
function BlogTeaser() {
  return React.createElement("section", {
    className: "section"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "blog-teaser"
  }, React.createElement("div", null, React.createElement("span", {
    className: "blog-teaser__eyebrow"
  }, "AUS MEINEM BLOG"), React.createElement("h2", null, "Notizen zwischen Forschung und Schulalltag."), React.createElement("p", null, "Kurze Texte, lange Gedanken: Was ich aus Studientagen mitnehme, welche Studien gerade wichtig sind, und wie sich Befunde in Routinen \xFCbersetzen lassen."), React.createElement("a", {
    href: "blog/index.html",
    className: "btn btn-clay"
  }, "Zum Blog ", React.createElement(Icon, {
    name: "arrow",
    size: 14
  }))), React.createElement("div", {
    className: "blog-teaser__art"
  }, React.createElement("img", {
    src: "design/assets/illustrations/papierflieger.svg",
    alt: ""
  }))))));
}
window.BlogTeaser = BlogTeaser;
})();

/* components/Contact.jsx */
;(function(){
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    setError(false);
    const form = e.target;
    const body = new URLSearchParams(new FormData(form)).toString();
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    }).then(res => {
      if (res.ok) setSent(true);else setError(true);
    }).catch(() => setError(true));
  }
  return React.createElement("section", {
    className: "section section--soft",
    id: "kontakt"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "contact__grid"
  }, React.createElement("div", {
    className: "contact__copy"
  }, React.createElement(Reveal, null, React.createElement("span", {
    className: "section__eyebrow"
  }, "Kontakt"), React.createElement("h2", {
    className: "section__title"
  }, "Melden Sie sich gerne, ich freue mich auf den Austausch."), React.createElement("p", null, "Schreiben Sie mir kurz, was Sie planen: Fortbildung, Vortrag, Workshop oder etwas ganz anderes. Ich antworte innerhalb von drei Werktagen.")), React.createElement(Reveal, {
    delay: 100
  }, React.createElement("ul", {
    className: "contact__details"
  }, React.createElement("li", null, React.createElement("span", {
    className: "label"
  }, "E-Mail"), React.createElement("a", {
    href: "mailto:mail@oscaryendell.de"
  }, React.createElement(Icon, {
    name: "mail",
    size: 16
  }), React.createElement("span", {
    className: "underline-grow"
  }, "mail@oscaryendell.de"))), React.createElement("li", null, React.createElement("span", {
    className: "label"
  }, "LinkedIn"), React.createElement("a", {
    href: "https://www.linkedin.com/in/oscar-yendell/",
    target: "_blank",
    rel: "noopener"
  }, React.createElement(Icon, {
    name: "linkedin",
    size: 16
  }), React.createElement("span", {
    className: "underline-grow"
  }, "linkedin.com/in/oscar-yendell"))), React.createElement("li", null, React.createElement("span", {
    className: "label"
  }, "Standort"), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--ink)'
    }
  }, React.createElement(Icon, {
    name: "pin",
    size: 16
  }), " Karlsruhe \xB7 bundesweit unterwegs"))))), React.createElement(Reveal, {
    delay: 120
  }, React.createElement("form", {
    className: "contact__form",
    name: "contact",
    method: "POST",
    "data-netlify": "true",
    "netlify-honeypot": "bot-field",
    onSubmit: submit
  }, React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "contact"
  }), React.createElement("p", {
    hidden: true
  }, React.createElement("label", null, "Nicht ausf\xFCllen: ", React.createElement("input", {
    name: "bot-field"
  }))), sent ? React.createElement("div", {
    className: "contact__sent"
  }, React.createElement("div", {
    className: "contact__sent-icon"
  }, React.createElement(Icon, {
    name: "check",
    size: 28
  })), React.createElement("h3", null, "Danke f\xFCr Ihre Nachricht."), React.createElement("p", null, "Ich melde mich innerhalb von drei Werktagen bei Ihnen.")) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "row"
  }, React.createElement("label", null, "Name", React.createElement("input", {
    required: true,
    name: "name",
    placeholder: "Ihr Name"
  })), React.createElement("label", null, "E-Mail", React.createElement("input", {
    required: true,
    name: "email",
    type: "email",
    placeholder: "ihre@schule.de"
  }))), React.createElement("div", {
    className: "row"
  }, React.createElement("label", null, "Einrichtung", React.createElement("input", {
    name: "einrichtung",
    placeholder: "Schule, Kommune, Organisation \u2026"
  })), React.createElement("label", null, "Format", React.createElement("select", {
    name: "format",
    defaultValue: ""
  }, React.createElement("option", {
    value: "",
    disabled: true
  }, "Bitte w\xE4hlen \u2026"), React.createElement("option", null, "Schulinterne Fortbildung"), React.createElement("option", null, "Kommunale Fortbildung"), React.createElement("option", null, "Workshop"), React.createElement("option", null, "Vortrag"), React.createElement("option", null, "Materialentwicklung"), React.createElement("option", null, "Anderes / Beratung")))), React.createElement("label", null, "Anliegen", React.createElement("textarea", {
    name: "anliegen",
    rows: "5",
    placeholder: "Termin, Anzahl Teilnehmende, gew\xFCnschtes Thema \u2026"
  })), React.createElement("p", {
    className: "contact__consent"
  }, "Mit dem Absenden stimme ich zu, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. Hinweise zum Datenschutz finden Sie ", React.createElement("a", {
    href: "datenschutz.html"
  }, "hier"), "."), error && React.createElement("p", {
    className: "contact__error",
    role: "alert"
  }, "Die Nachricht konnte leider nicht gesendet werden. Bitte schreiben Sie mir direkt an ", React.createElement("a", {
    href: "mailto:mail@oscaryendell.de"
  }, "mail@oscaryendell.de"), "."), React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Anfrage senden ", React.createElement(Icon, {
    name: "arrow",
    size: 14
  })), React.createElement("div", {
    className: "contact__lead-note"
  }, React.createElement(Icon, {
    name: "calendar",
    size: 18
  }), React.createElement("span", null, "Fortbildungen werden bestenfalls 3 bis 6 Monate im Voraus geplant. Fr\xFChe Anfragen erm\xF6glichen, dass wir eher einen passenden Termin finden."))))))));
}
window.Contact = Contact;
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

/* inline */
;(function(){
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    active: "home"
  }), React.createElement("main", null, React.createElement(Hero, null), React.createElement(Offers, null), React.createElement(About, null), React.createElement(Voices, null), React.createElement(Events, null), React.createElement(BlogTeaser, null), React.createElement(Contact, null)), React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
if (window.location.hash) {
  const hash = window.location.hash;
  let tries = 0;
  const tryScroll = () => {
    const target = document.querySelector(hash);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo(0, y);
    } else if (tries++ < 40) {
      setTimeout(tryScroll, 50);
    }
  };
  tryScroll();
}
})();