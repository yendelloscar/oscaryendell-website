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

/* components/Legal.jsx */
;(function(){
function LegalLayout({
  title,
  updated,
  children
}) {
  return React.createElement("section", {
    className: "legal-page"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("article", {
    className: "legal"
  }, React.createElement("span", {
    className: "legal__eyebrow"
  }, "Rechtliches"), React.createElement("h1", {
    className: "legal__title"
  }, title), React.createElement("div", {
    className: "legal__divider"
  }), updated && React.createElement("p", {
    className: "legal__updated"
  }, updated), children, React.createElement("div", {
    className: "legal__source"
  }, React.createElement("p", null, "Quelle: ", React.createElement("a", {
    href: "https://www.e-recht24.de",
    target: "_blank",
    rel: "noopener"
  }, "e-recht24.de"))), React.createElement("a", {
    className: "legal__back",
    href: "index.html"
  }, "\u2190 Zur\xFCck zur Startseite"))));
}
function Impressum() {
  return React.createElement(LegalLayout, {
    title: "Impressum"
  }, React.createElement("h2", null, "Angaben gem\xE4\xDF \xA7 5 DDG"), React.createElement("div", {
    className: "legal__contact-card"
  }, React.createElement("p", null, "Oscar Anton Yendell", React.createElement("br", null), "Pfaffstra\xDFe 1", React.createElement("br", null), "76227 Karlsruhe")), React.createElement("h3", null, "Kontakt"), React.createElement("p", null, "Telefon: +49 152 29288801", React.createElement("br", null), "E-Mail: ", React.createElement("a", {
    href: "mailto:mail@oscaryendell.de"
  }, "mail@oscaryendell.de")), React.createElement("h3", null, "Umsatzsteuer-ID"), React.createElement("p", null, "Umsatzsteuer-Identifikationsnummer gem\xE4\xDF \xA7 27 a Umsatzsteuergesetz:", React.createElement("br", null), "DE453088387"), React.createElement("h3", null, "Redaktionell verantwortlich"), React.createElement("p", null, "Oscar Anton Yendell"), React.createElement("h3", null, "Verbraucherstreitbeilegung / Universalschlichtungsstelle"), React.createElement("p", null, "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."));
}
function Datenschutz() {
  return React.createElement(LegalLayout, {
    title: "Datenschutz\xADerkl\xE4rung"
  }, React.createElement("h2", null, "1. Datenschutz auf einen Blick"), React.createElement("h3", null, "Allgemeine Hinweise"), React.createElement("p", null, "Die folgenden Hinweise geben einen einfachen \xDCberblick dar\xFCber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Ausf\xFChrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\xFChrten Datenschutzerkl\xE4rung."), React.createElement("h3", null, "Datenerfassung auf dieser Website"), React.createElement("h4", null, "Wer ist verantwortlich f\xFCr die Datenerfassung auf dieser Website?"), React.createElement("p", null, "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\xF6nnen Sie dem Abschnitt \u201EHinweis zur Verantwortlichen Stelle\" in dieser Datenschutzerkl\xE4rung entnehmen."), React.createElement("h4", null, "Wie erfassen wir Ihre Daten?"), React.createElement("p", null, "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben."), React.createElement("p", null, "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."), React.createElement("h4", null, "Wof\xFCr nutzen wir Ihre Daten?"), React.createElement("p", null, "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\xE4hrleisten. Andere Daten k\xF6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern \xFCber die Website Vertr\xE4ge geschlossen oder angebahnt werden k\xF6nnen, werden die \xFCbermittelten Daten auch f\xFCr Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet."), React.createElement("h4", null, "Welche Rechte haben Sie bez\xFCglich Ihrer Daten?"), React.createElement("p", null, "Sie haben jederzeit das Recht, unentgeltlich Auskunft \xFCber Herkunft, Empf\xE4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\xDFerdem ein Recht, die Berichtigung oder L\xF6schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k\xF6nnen Sie diese Einwilligung jederzeit f\xFCr die Zukunft widerrufen. Au\xDFerdem haben Sie das Recht, unter bestimmten Umst\xE4nden die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde zu."), React.createElement("p", null, "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k\xF6nnen Sie sich jederzeit an uns wenden."), React.createElement("h2", null, "2. Hosting"), React.createElement("p", null, "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:"), React.createElement("h3", null, "Externes Hosting"), React.createElement("p", null, "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die \xFCber eine Website generiert werden, handeln."), React.createElement("p", null, "Das externe Hosting erfolgt zum Zwecke der Vertragserf\xFCllung gegen\xFCber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie\xDFlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und \xA7 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger\xE4t des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar."), React.createElement("p", null, "Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erf\xFCllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen."), React.createElement("p", null, "Wir setzen folgende(n) Hoster ein:", React.createElement("br", null), "Netlify Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA"), React.createElement("h3", null, "Auftragsverarbeitung"), React.createElement("p", null, "Wir haben einen Vertrag \xFCber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew\xE4hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet."), React.createElement("h2", null, "3. Allgemeine Hinweise und Pflichtinformationen"), React.createElement("h3", null, "Datenschutz"), React.createElement("p", null, "Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\xF6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\xE4rung."), React.createElement("p", null, "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers\xF6nlich identifiziert werden k\xF6nnen. Die vorliegende Datenschutzerkl\xE4rung erl\xE4utert, welche Daten wir erheben und wof\xFCr wir sie nutzen. Sie erl\xE4utert auch, wie und zu welchem Zweck das geschieht."), React.createElement("p", null, "Wir weisen darauf hin, dass die Daten\xFCbertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitsl\xFCcken aufweisen kann. Ein l\xFCckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xF6glich."), React.createElement("h3", null, "Hinweis zur verantwortlichen Stelle"), React.createElement("p", null, "Die verantwortliche Stelle f\xFCr die Datenverarbeitung auf dieser Website ist:"), React.createElement("div", {
    className: "legal__contact-card"
  }, React.createElement("p", null, "Oscar Anton Yendell", React.createElement("br", null), "Pfaffstra\xDFe 1", React.createElement("br", null), "76227 Karlsruhe", React.createElement("br", null), React.createElement("br", null), "Telefon: +49 152 29288801", React.createElement("br", null), "E-Mail: ", React.createElement("a", {
    href: "mailto:mail@oscaryendell.de"
  }, "mail@oscaryendell.de"))), React.createElement("p", null, "Verantwortliche Stelle ist die nat\xFCrliche oder juristische Person, die allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. \xC4.) entscheidet."), React.createElement("h3", null, "Speicherdauer"), React.createElement("p", null, "Soweit innerhalb dieser Datenschutzerkl\xE4rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f\xFCr die Datenverarbeitung entf\xE4llt. Wenn Sie ein berechtigtes L\xF6schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel\xF6scht, sofern wir keine anderen rechtlich zul\xE4ssigen Gr\xFCnde f\xFCr die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L\xF6schung nach Fortfall dieser Gr\xFCnde."), React.createElement("h3", null, "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website"), React.createElement("p", null, "Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr\xFCcklichen Einwilligung in die \xDCbertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au\xDFerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger\xE4t (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus\xE4tzlich auf Grundlage von \xA7 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf\xFCllung oder zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf\xFCllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. \xDCber die jeweils im Einzelfall einschl\xE4gigen Rechtsgrundlagen wird in den folgenden Abs\xE4tzen dieser Datenschutzerkl\xE4rung informiert."), React.createElement("h3", null, "Empf\xE4nger von personenbezogenen Daten"), React.createElement("p", null, "Im Rahmen unserer Gesch\xE4ftst\xE4tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine \xDCbermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserf\xFCllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbeh\xF6rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines g\xFCltigen Vertrags \xFCber Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag \xFCber gemeinsame Verarbeitung geschlossen."), React.createElement("h3", null, "Widerruf Ihrer Einwilligung zur Datenverarbeitung"), React.createElement("p", null, "Viele Datenverarbeitungsvorg\xE4nge sind nur mit Ihrer ausdr\xFCcklichen Einwilligung m\xF6glich. Sie k\xF6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm\xE4\xDFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xFChrt."), React.createElement("h3", null, "Widerspruchsrecht gegen die Datenerhebung in besonderen F\xE4llen sowie gegen Direktwerbung (Art. 21 DSGVO)"), React.createElement("p", {
    className: "legal__notice"
  }, "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR\xDCNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F\xDCR EIN AUF DIESE BESTIMMUNGEN GEST\xDCTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL\xC4RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K\xD6NNEN ZWINGENDE SCHUTZW\xDCRDIGE GR\xDCNDE F\xDCR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN \xDCBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS\xDCBUNG ODER VERTEIDIGUNG VON RECHTSANSPR\xDCCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO)."), React.createElement("p", {
    className: "legal__notice"
  }, "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F\xDCR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO)."), React.createElement("h3", null, "Beschwerderecht bei der zust\xE4ndigen Aufsichtsbeh\xF6rde"), React.createElement("p", null, "Im Falle von Verst\xF6\xDFen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh\xF6rde, insbesondere in dem Mitgliedstaat ihres gew\xF6hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma\xDFlichen Versto\xDFes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe."), React.createElement("h3", null, "Recht auf Daten\xFCbertragbarkeit"), React.createElement("p", null, "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xFCllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\xE4ngigen, maschinenlesbaren Format aush\xE4ndigen zu lassen. Sofern Sie die direkte \xDCbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."), React.createElement("h3", null, "Auskunft, Berichtigung und L\xF6schung"), React.createElement("p", null, "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \xFCber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\xE4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L\xF6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\xF6nnen Sie sich jederzeit an uns wenden."), React.createElement("h3", null, "Recht auf Einschr\xE4nkung der Verarbeitung"), React.createElement("p", null, "Sie haben das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k\xF6nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr\xE4nkung der Verarbeitung besteht in folgenden F\xE4llen:"), React.createElement("ul", null, React.createElement("li", null, "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben\xF6tigen wir in der Regel Zeit, um dies zu \xFCberpr\xFCfen. F\xFCr die Dauer der Pr\xFCfung haben Sie das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."), React.createElement("li", null, "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm\xE4\xDFig geschah/geschieht, k\xF6nnen Sie statt der L\xF6schung die Einschr\xE4nkung der Datenverarbeitung verlangen."), React.createElement("li", null, "Wenn wir Ihre personenbezogenen Daten nicht mehr ben\xF6tigen, Sie sie jedoch zur Aus\xFCbung, Verteidigung oder Geltendmachung von Rechtsanspr\xFCchen ben\xF6tigen, haben Sie das Recht, statt der L\xF6schung die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."), React.createElement("li", null, "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw\xE4gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen \xFCberwiegen, haben Sie das Recht, die Einschr\xE4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.")), React.createElement("p", null, "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr\xE4nkt haben, d\xFCrfen diese Daten \u2013 von ihrer Speicherung abgesehen \u2013 nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen oder zum Schutz der Rechte einer anderen nat\xFCrlichen oder juristischen Person oder aus Gr\xFCnden eines wichtigen \xF6ffentlichen Interesses der Europ\xE4ischen Union oder eines Mitgliedstaats verarbeitet werden."), React.createElement("h3", null, "SSL- bzw. TLS-Verschl\xFCsselung"), React.createElement("p", null, "Diese Seite nutzt aus Sicherheitsgr\xFCnden und zum Schutz der \xDCbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl\xFCsselung. Eine verschl\xFCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Ehttp://\" auf \u201Ehttps://\" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."), React.createElement("p", null, "Wenn die SSL- bzw. TLS-Verschl\xFCsselung aktiviert ist, k\xF6nnen die Daten, die Sie an uns \xFCbermitteln, nicht von Dritten mitgelesen werden."), React.createElement("h3", null, "Widerspruch gegen Werbe-E-Mails"), React.createElement("p", null, "Der Nutzung von im Rahmen der Impressumspflicht ver\xF6ffentlichten Kontaktdaten zur \xDCbersendung von nicht ausdr\xFCcklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr\xFCcklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor."), React.createElement("h2", null, "4. Datenerfassung auf dieser Website"), React.createElement("h3", null, "Kontaktformular"), React.createElement("p", null, "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f\xFCr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."), React.createElement("p", null, "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf\xFCllung eines Vertrags zusammenh\xE4ngt oder zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich ist. In allen \xFCbrigen F\xE4llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar."), React.createElement("p", null, "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L\xF6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\xFCr die Datenspeicherung entf\xE4llt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen \u2013 insbesondere Aufbewahrungsfristen \u2013 bleiben unber\xFChrt."), React.createElement("h3", null, "Anfrage per E-Mail, Telefon oder Telefax"), React.createElement("p", null, "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."), React.createElement("p", null, "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf\xFCllung eines Vertrags zusammenh\xE4ngt oder zur Durchf\xFChrung vorvertraglicher Ma\xDFnahmen erforderlich ist. In allen \xFCbrigen F\xE4llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar."), React.createElement("p", null, "Die von Ihnen an uns per Kontaktanfragen \xFCbersandten Daten verbleiben bei uns, bis Sie uns zur L\xF6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\xFCr die Datenspeicherung entf\xE4llt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen \u2013 insbesondere gesetzliche Aufbewahrungsfristen \u2013 bleiben unber\xFChrt."));
}
window.Impressum = Impressum;
window.Datenschutz = Datenschutz;
})();

/* inline */
;(function(){
function App() {
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    active: "legal"
  }), React.createElement("main", null, React.createElement(Datenschutz, null)), React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
})();