function SiteFooter({ isBlog = false }) {
  const base = isBlog ? '../' : '';
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <a className="brand" href={isBlog ? '../index.html' : '#top'}>
              <img src={`${base}design/assets/mark.svg`} width="36" height="36" alt="" style={{ filter: 'invert(1) hue-rotate(180deg) brightness(1.1)' }} />
              <div>
                <div className="brand__name">Dr. Oscar Yendell</div>
                <div className="brand__tag">Armutssensibilität in pädagogischen Kontexten</div>
              </div>
            </a>
            <p className="site-footer__about">Beratung, Fortbildung und Materialentwicklung für eine armuts­sensible Bildungs­praxis.


            </p>
          </div>
          <div className="site-footer__col">
            <h4>FORMATE</h4>
            <a href={`${base}index.html#angebot`}>Schulinterne Fortbildungen</a>
            <a href={`${base}index.html#angebot`}>Kommunale Fortbildungen</a>
            <a href={`${base}index.html#angebot`}>Workshops & Keynotes</a>
            <a href={`${base}index.html#angebot`}>Materialentwicklung</a>
          </div>
          <div className="site-footer__col">
            <h4>Forschung</h4>
            <a href={`${base}blog/index.html`}>Blog</a>
            <a href={`${base}index.html#person`}>Über mich</a>
            <a href={`${base}index.html#termine`}>Termine</a>
          </div>
          <div className="site-footer__col">
            <h4>Rechtliches</h4>
            <a href={`${base}impressum.html`}>Impressum</a>
            <a href={`${base}datenschutz.html`}>Datenschutz</a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div>© 2026 Dr. Oscar Yendell · Alle Rechte vorbehalten.</div>
          <div className="site-footer__social">
            <a href="https://www.linkedin.com/in/oscar-yendell/" aria-label="LinkedIn" target="_blank" rel="noopener"><Icon name="linkedin" size={16} /></a>
            <a href="mailto:mail@oscaryendell.de" aria-label="E-Mail" style={{ marginLeft: 8 }}><Icon name="mail" size={16} /></a>
          </div>
        </div>
      </div>
    </footer>);

}
window.SiteFooter = SiteFooter;