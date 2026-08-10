function Voices() {
  const items = [
  { quote: 'Von der Vorbereitung über die Durchführung bis zur Nachbereitung war es eine produktive Zusammenarbeit. Man ging individuell und unkompliziert auf unsere Vorstellungen ein - Schulleitung und Kollegium waren sehr angetan. Herr Yendell und seine Kollegin waren äußerst kompetent, einfühlsam und insgesamt überzeugend.',
    name: 'Christoph Timmerhues', role: 'stellv. Schulleitung · Grundschule · Rheinland-Pfalz', placeholder: false },
  { quote: 'Die Workshops zur Armutssensibilität, die Oscar Yendell bei uns gegeben hat, waren fachlich sehr fundiert und gleichzeitig nah an der Praxis der angehenden Lehrkräfte. Besonders wertvoll war, wie konkret die Inhalte an alltäglichen Beispielen ausgerichtet wurden.',
    name: 'Jaana Espenlaub', role: 'ArbeiterKind.de', placeholder: false },
  { quote: 'Die Zusammenarbeit mit Oscar Yendell bei der Entwicklung des Materials zur armutssensiblen Schulentwicklung war fachlich fundiert, verlässlich und immer mit klarem Blick für die schulische Praxis. Gemeinsam ist es uns gelungen, wissenschaftlich fundierte Perspektiven in ein strukturiertes und flexibel einsetzbares Arbeitsmaterial zu übersetzen. Das kostenlos zugängliche Material schließt damit eine bislang bestehende Lücke und unterstützt Schulen dabei, Armutssensibilität systematischer in den Blick zu nehmen und weiterzuentwickeln.',
    name: 'Mareike Fritz', role: 'Stiftung Lernen durch Engagement', placeholder: false },
  { quote: 'Als Teilnehmer der Fortbildung habe ich sehr davon profitiert, Armutssensibilität nicht nur theoretisch, sondern anhand konkreter Situationen aus unserem Arbeitsalltag zu besprechen. Für die Koordination der Schulsozialarbeit in unserer Kommune haben wir daraus direkt umsetzbare Ansätze mitnehmen können, die wir künftig umsetzen wollen.',
    name: 'Markus Bender', role: 'Koordination Schulsozialarbeit, Bayern', placeholder: false }];

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