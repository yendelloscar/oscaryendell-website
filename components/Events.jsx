function Events() {
  const formats = [
  { accent: 'teal', label: 'Schulinterne Fortbildung', date: 'Grundschule, Ludwigshafen',
    title: 'Studientag zur Armutssensibilität im schulischen Alltag',
    desc: 'Beginnend haben wir uns damit auseinandergesetzt, welche Dimensionen Armutssensibilität umfasst. Anschließend haben wir eigene Vorstellungen und Fehlannahmen in Bezug auf Armut (zum Teil spielerisch) reflektiert. Darauffolgend haben wir identifiziert, welche Rolle Armut im Schulalltag (nicht) spielt (Bspw. Unterricht, Verpflegung, Ausflüge, Elternarbeit). Unter Bezugnahme auf konkrete Praxisbeispiele anderer Schulen haben wir erarbeitet, wie die Schule die identifizierten Armutsfolgen auffangen kann und wo eine Zusammenarbeit mit außerschulischen Partner*innen sinnvoll ist. Am Ende des Tages standen konkrete Vorgehensweisen fest, um in den kommenden Wochen eine armutssensible Praxis in den identifizierten Bereichen zu implementieren.' },
  { accent: 'clay', label: 'Kommunale Fortbildung', date: 'Landschaftsverband Rheinland, Köln',
    title: 'Armutssensible Praxis als Teil der kommunalen Präventionskette',
    desc: 'Nachdem wir zu Beginn auf die Dimensionen von Armutssensibilität eingegangen sind, haben wir uns anschließend damit beschäftigt, wie Armut das Aufwachsen von Kindern & Jugendlichen in unterschiedlichen Lebensbereichen beeinflusst. Mit Blick auf konkrete armutssensible Praxisbeispiele anderer Kommunen, haben wir anschließend erarbeitet, welche Rolle Schulen und welche Rolle weitere Akteur*innen (Bspw. Jugendämter oder Jobcenter) in Bezug auf Armutssensibilität einnehmen. Am Ende des Tages bestand ein geteiltes Verständnis darüber, wer welche Armutsfolgen (nicht) auffangen kann und welche Kooperationsmöglichkeiten zwischen schulischen und außerschulischen Akteur*innen kommunale Präventionsketten in Bezug auf Armutssensibilität ermöglichen.' },
  { accent: 'ochre', label: 'Workshop', date: 'ArbeiterKind.de, online',
    title: 'Armutsbezogene Vorstellungen von Lehr­kräften',
    desc: 'Zu Beginn haben wir uns unter Bezugnahme auf das ökonomische, soziale und kulturelle Kapital damit auseinandergesetzt, wie ein Mangel der Kapitalsorten Bildungskarrieren negativ beeinflusst. Anschließend haben wir aktuelle Studien diskutiert, die zeigen, wie negative armutsbezogene Vorstellungen von Lehrkräften zu verringerten Leistungserwartungen und -Bewertungen führen können. Abschließend wurden konkrete Möglichkeiten für den Schulalltag vorgestellt, negative Vorstellungen abzubauen. Dabei diskutierten die Teilnehmer*innen, wie dies in den Schulalltag implementiert werden kann.' },
  { accent: 'moss', label: 'Materialentwicklung', date: 'Stiftung Lernen durch Engagement',
    title: 'Armutssensible Haltung im Schulkontext',
    desc: 'Gemeinsam mit der Stiftung Lernen durch Engagement, habe ich Material zur Armutssensiblen Schulentwicklung mit einem besonderen Fokus auf eine Armutssensible Haltung entwickelt. Das Material ist so konzipiert, dass es schulischen Akteur*innen sowohl einzeln als auch in Gruppensettings ermöglicht, an einer armutssensiblen Haltung zu arbeiten. Zudem leitet das Material hin zu einer Implementation von regelmäßigen Routinen & Methoden zur dauerhaften Förderung der Armutssensibilität. Im Material selbst werden ausschließlich praxisnahe Open-Access-Materialien zitiert, damit die Nutzer*innen selbstständig weiter recherchieren können.', link: 'https://www.servicelearning.de/aktuelles/neuigkeiten/meldung/2025/10/02/neues-arbeitsmaterial-unterstuetzt-schulen-auf-dem-weg-zu-mehr-armutssensibilitaet', linkLabel: 'Zum Arbeitsmaterial' }];

  return (
    <section className="section" id="termine">
      <div className="container">
        <div className="section__head">
          <Reveal>
            <span className="section__eyebrow">Termine</span>
            <h2 className="section__title">Ein Einblick in meine Arbeit.</h2>
            <p className="section__lede">Vier meiner letzten Formate beispielhaft beschrieben. Von der schulinternen Fortbildung bis hin zur Material­entwicklung.




            </p>
          </Reveal>
        </div>
        <div className="formats-grid">
          {formats.map((f, i) =>
          <Reveal key={i} delay={i * 60}>
              <article className={`format-card format-card--${f.accent}`}>
                <header className="format-card__head">
                  <span className="format-card__label">{f.label}</span>
                  <span className="format-card__date">{f.date}</span>
                </header>
                <h3 className="format-card__title">{f.title}</h3>
                {f.meta && <div className="format-card__meta">{f.meta}</div>}
                <p className="format-card__desc">{f.desc}</p>
                {f.link &&
                <a className="format-card__link" href={f.link} target="_blank" rel="noopener noreferrer">{f.linkLabel}<span aria-hidden="true">→</span></a>}
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}
window.Events = Events;