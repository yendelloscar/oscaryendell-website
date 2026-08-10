function BlogList() {
  const featured = {
    tag: 'Grundlagen',
    title: 'Was ist Armutssensibilität?',
    excerpt:
      'Ein Einstieg in den Begriff, der meine Arbeit trägt: Was meint Armuts­sensibilität in pädagogischen Kontexten? Und was bedeutet sie konkret für den Schul- und Bildungsalltag?',
    date: '01. August 2026',
    read: '6 Min. Lesezeit',
    cat: 'Grundlagen',
    illu: 'gespraech.svg',
  };

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <Reveal>
            <span className="blog-hero__eyebrow">Blog · Notizen</span>
            <h1>Notizen zwischen Forschung und Schulalltag.</h1>
            <p>
              Kurze Texte, lange Gedanken: Was ich aus Studientagen mitnehme,
              welche Studien gerade wichtig sind, und wie sich Befunde in
              Routinen übersetzen lassen, ohne erhobenen Zeigefinger.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <Reveal>
            <article className="featured-card">
              <div className="featured-card__art">
                <img src={`../design/assets/illustrations/${featured.illu}`} alt="" />
              </div>
              <div className="featured-card__copy">
                <span className="featured-tag">{featured.tag}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div className="featured-card__meta">
                  <span>{featured.date}</span>
                </div>
                <div style={{ marginTop: 12 }}>
                  <a href="was-ist-armutssensibilitaet.html" className="text-link">
                    Beitrag lesen <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <Reveal>
            <div className="blog-coming">
              <div className="blog-coming__dot" aria-hidden="true"></div>
              <div>
                <div className="blog-coming__title">Weitere Beiträge folgen.</div>
                <p>
                  Der Blog wächst Stück für Stück. Geplant sind Texte zu Forschungsergebnissen, Praxisbeispielen, Methoden und Werkzeugen in Hinblick auf Armutssensibilität.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
window.BlogList = BlogList;
