function BlogTeaser() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="blog-teaser">
            <div>
              <span className="blog-teaser__eyebrow">AUS MEINEM BLOG</span>
              <h2>Notizen zwischen Forschung und Schulalltag.</h2>
              <p>
                Kurze Texte, lange Gedanken: Was ich aus Studientagen mitnehme,
                welche Studien gerade wichtig sind, und wie sich Befunde in
                Routinen übersetzen lassen.
              </p>
              <a href="blog/index.html" className="btn btn-clay">
                Zum Blog <Icon name="arrow" size={14} />
              </a>
            </div>
            <div className="blog-teaser__art">
              <img src="design/assets/illustrations/papierflieger.svg" alt="" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}
window.BlogTeaser = BlogTeaser;