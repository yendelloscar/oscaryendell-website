function Voices() {
  const items = [
  { quote: 'Platzhalter — hier steht später ein Originalzitat einer Schulleitung oder Fortbildungs­teilnehmer*in.',
    name: 'Christine Jungmann, Schulleitung', role: 'Grundschule · Rheinland-Pfalz', placeholder: true },
  { quote: 'Platzhalter — Stimme aus einem Studientag oder einer Fortbildungs­reihe.',
    name: 'Christina Muscutt & Christine Schoelen', role: 'Landschaftsverband Rheinland', placeholder: true },
  { quote: 'Platzhalter — Rückmeldung einer Sozialarbeiter*in oder Schulsozialpädagog*in.',
    name: 'Jaana Espenlaub', role: 'ArbeiterKind.de', placeholder: true },
  { quote: 'Platzhalter — Stimme einer Bildungsbüro- oder Stiftungs­ansprechperson.',
    name: 'Mareike Fritz', role: 'Stiftung Lernen durch Engagement', placeholder: true }];

  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="section__eyebrow">Stimmen</span>
            <h2 className="section__title">Was Menschen sagen, mit denen ich zusammenarbeite.</h2>
            <p className="section__lede">Bei meinen Formaten ist mir eine Erwartungsabfrage im Vorfeld sehr wichtig, um die Formate nach Ihren Vorstellungen zu gestalten. Auch eine Evaluation sowie Nachbesprechung ist bei mir fester Bestandteil, um zu erfahren, ob und wie das Format für Sie gewinnbringend war. Folgend finden Sie einige Stimmen von Menschen, mit denen ich zusammenarbeite.


            </p>
          </Reveal>
        </div>
        <div className="voices__grid">
          {items.map((it, i) =>
          <Reveal key={i} delay={i * 60}>
              <article className="voice">
                <span className="voice__quote-mark" aria-hidden="true">"</span>
                <div className={`voice__quote ${it.placeholder ? 'voice__quote--placeholder' : ''}`}>
                  „{it.quote}"
                </div>
                <div className="voice__attr">
                  <div className="voice__name">{it.name}</div>
                  <div className="voice__role">{it.role}</div>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}
window.Voices = Voices;