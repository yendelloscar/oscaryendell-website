function Offers() {
  const items = [
  { num: '01', accent: 'teal', tag: '', title: 'Schulinterne Fortbildungen',
    body: 'Ein gemeinsamer Tag mit Ihrem (multiprofessionellen) Kollegium: Wie beeinflusst Armut das Aufwachsen unserer Schüler*innen? In welchen Momenten wird Armut in unserer Schule überhaupt relevant? Wie können wir den identifizierten Armutsfolgen an unserer Schule begegnen? Gemeinsam erarbeiten wir konkrete Ansätze für Sie vor Ort.' },
  { num: '02', accent: 'clay', tag: '', title: 'Kommunale Fortbildungen',
    body: 'Ein gemeinsamer Tag mit mehreren Institutionen (Bspw. Schulvertreter*innen, kommunale Bildungsakteur*innen und Partner*innen im Sozialraum): Wie beeinflusst Armut das Aufwachsen im Sozialraum? Welche Präventionsketten und -Netzwerke gibt es? Gemeinsam erarbeiten wir, wie Armutsfolgen institutionsübergreifend vor Ort aufgefangen werden können.' },
  { num: '03', accent: 'ochre', tag: '', title: 'Workshops & Keynotes',
    body: 'Online oder vor Ort. Impuls­formate für Fachtage, Kommunen, Vereine und Stiftungen. Von 60-Minuten-Vortrag bis hin zu längeren Workshops.' },
  { num: '04', accent: 'moss', tag: '', title: 'Materialentwicklung',
    body: 'Hand­reichungen, Arbeitsblätter, Checklisten, Reflexions­bögen, Materialien zur Sozialraumbegehung, passgenau für die Bedarfe der Nutzer*innen.' }];

  return (
    <section className="section" id="angebot">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="section__eyebrow">Angebot</span>
            <h2 className="section__title">Vier Formate, ein Ziel: Armutssensibilität in die
Praxis übersetzen.</h2>
            <p className="section__lede">Jedes Format wird gemeinsam mit Ihnen auf das zugeschnitten, was bei Ihnen vor Ort tatsächlich gerade ansteht. Meine Formate basieren immer auf aktuellen wissenschaftlichen Erkenntnissen zur Armutssensibilität und Beispielen einer konkreten armutssensiblen Praxis vor Ort. Mein Anspruch ist es stets, dass am Ende des Formats konkrete Vorgehensweisen für eine armutssensible Praxis erarbeitet werden.


            </p>
          </Reveal>
        </div>
        <div className="offers__grid">
          {items.map((it, i) => <Reveal key={it.num} delay={i * 60}>
              <article className={`offer offer--${it.accent}`}>
                <h3 className="offer__title">{it.title}</h3>
                <p className="offer__body">{it.body}</p>
                <span className="offer__tag">{it.tag}</span>
              </article>
            </Reveal>
          )}
        </div>
        <Reveal delay={200}>
          <div className="offers__note">
            <span><strong>Sie haben Interesse an einem gemeinsamen Format oder haben weitere Ideen?</strong> Schreiben Sie mir, gerne können wir in die gemeinsame Planung einsteigen.</span>
            <a href="#kontakt" className="text-link">Format gemeinsam entwickeln <span className="arrow">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>);

}
window.Offers = Offers;