function About() {
  return (
    <section className="section section--soft" id="person">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__portrait">
            <div className="portrait-frame portrait-frame--photo">
              <img src="assets/oscar-sitting.jpg" alt="Dr. Oscar Yendell im Hof, lachend" className="portrait-frame__img" style={{ objectPosition: '55% 30%' }} />
            </div>
            <div className="about__caption">Dr. Oscar Yendell · Armutssensibilität in pädagogischen Kontexten</div>
          </Reveal>
          <div className="about__copy">
            <Reveal>
              <span className="section__eyebrow">Über mich</span>
              <h2 className="section__title">Forschung trifft Klassenzimmer.</h2>
              <h3>Bildungswissenschaftler und Fortbildner an der Schnittstelle von Wissenschaft und Praxis.</h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="about__lede">Meine Biografie führte mich in die Arbeit zur <span className="about__accent about__accent--teal">Armutssensibilität</span>: Nachdem ich selbst in Armut aufgewachsen bin, habe ich in Flensburg erst Bildungswissenschaften und dann Transformationsstudien studiert, stets mit einem Fokus darauf, wie Armut Bildungskarrieren und Teilhabe beeinflusst. An der Universität Mannheim habe ich meine Doktorarbeit zu armuts­bezogenen Vorstellungen von Lehrkräften und zu armuts­bezogenen Interaktionen in Schulen geschrieben.</p>
              <p>Seit 2021 berate ich selbst­ständig Schulen, Kommunen, Träger, Vereine und Stiftungen bundesweit zur Armutssensibilität, in mehreren schulinternen sowie kommunalen Fortbildungen, Workshops und Keynotes.</p>
              <p>Parallel dazu habe ich meine Leidenschaft für <span className="about__accent about__accent--clay">Organisationsentwicklung</span> entdeckt: Im Projekt "Schule macht Stark" habe ich Schulen zu Ihrer Organisationsentwicklung und Sozialraumarbeit beraten. Im CHANCEN-Verbund habe ich Länder in der Begleitung von Startchancen-Schulen beraten. Aktuell berate ich als wissenschaftlicher Referent in der Initiative Zukunftsbildung Schulen, Kitas und Kindergärten in Ihrer Organisationsentwicklung. Zuletzt habe ich eine Fortbildung zum agilen Projektmanagement (IHK-zertifiziert) absolviert, da ein gutes Projektmanagement unerlässlich ist, um Veränderungen nachhaltig in Organisationen zu implementieren.</p>
              <p>In meinen Formaten verbinde ich meine Biografie mit wissenschaftlichen Erkenntnissen zur Armutssensibilität und meiner Expertise in der Organisationsentwicklung. Dabei habe ich stets ein Auge darauf, was Schulleitungen, Lehrkräfte, Sozial­arbeiter*innen und weitere Bildungsakteur*innen jeden Tag leisten.</p>
              <p className="about__closing">Konkret und evidenz­basiert, ohne erhobenen Zeigefinger.</p>
            </Reveal>
            <Reveal delay={140}>
              <blockquote className="about__quote">
                „Armuts­sensibilität beginnt nicht bei dem, was Kinder mitbringen,
                sondern bei dem, was wir als Schule voraussetzen und wie wir
                damit umgehen, wenn etwas fehlt."
              </blockquote>
            </Reveal>
            <Reveal delay={200}>
              <div className="about__cta">
                <a href="#kontakt" className="btn btn-primary">Kennen­lerngespräch</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}
window.About = About;