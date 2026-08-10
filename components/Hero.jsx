function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal>
              <span className="hero__eyebrow">FORTBILDUNGEN · WORKSHOPS · KEYNOTES · MATERIALENTWICKLUNG</span>
              <div className="hero__name">Dr. Oscar Yendell</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero__title">Schule <span style={{whiteSpace:'nowrap'}}>armutssensibel</span> gestalten. Wissenschaftlich fundiert, für den Schulalltag gemacht.

              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero__lede">Ich arbeite mit Lehrkräften, Schulleitungen, Sozialarbeiter*innen und kommunalen sowie weiteren Bildungsakteur*innen zusammen. Gemeinsam übersetzen wir Forschung und Konzepte zur Armutssensibilität in die schulische Praxis und erarbeiten konkrete Möglichkeiten der Armutssensibilität vor Ort.



              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="hero__ctas">
                <a href="#kontakt" className="btn btn-primary">
                  Veranstaltung anfragen <Icon name="arrow" size={14} />
                </a>
                <a href="#angebot" className="btn btn-ghost">Angebot ansehen</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="hero__portrait">
            <div className="portrait-frame portrait-frame--photo">
              <img src="assets/oscar-standing.jpg" alt="Dr. Oscar Yendell vor einer Backsteinfassade" className="portrait-frame__img" style={{ objectPosition: '58% 30%' }} />
            </div>
            <div className="about__caption">Dr. Oscar Yendell · Armutssensibilität in pädagogischen Kontexten</div>
          </Reveal>
        </div>
      </div>
    </section>);

}
window.Hero = Hero;