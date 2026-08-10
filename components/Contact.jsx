function Contact() {
  const [sent, setSent] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    const form = e.target;
    const body = new URLSearchParams(new FormData(form)).toString();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    }).then(() => setSent(true)).catch(() => setSent(true));
  }
  return (
    <section className="section section--soft" id="kontakt">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__copy">
            <Reveal>
              <span className="section__eyebrow">Kontakt</span>
              <h2 className="section__title">Melden Sie sich gerne, ich freue mich auf den Austausch.</h2>
              <p>Schreiben Sie mir kurz, was Sie planen: Fortbildung, Keynote, Workshop oder etwas ganz anderes. Ich antworte innerhalb von drei Werktagen.


              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="contact__details">
                <li>
                  <span className="label">E-Mail</span>
                  <a href="mailto:mail@oscaryendell.de">
                    <Icon name="mail" size={16} />
                    <span className="underline-grow">mail@oscaryendell.de</span>
                  </a>
                </li>
                <li>
                  <span className="label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/oscar-yendell/" target="_blank" rel="noopener">
                    <Icon name="linkedin" size={16} />
                    <span className="underline-grow">linkedin.com/in/oscar-yendell</span>
                  </a>
                </li>
                <li>
                  <span className="label">Standort</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                    <Icon name="pin" size={16} /> Karlsruhe · bundesweit unterwegs
                  </span>
                </li>
                <li>
                  <span className="label"></span>
                  <span style={{ color: 'var(--ink)' }}></span>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <form className="contact__form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>Nicht ausfüllen: <input name="bot-field" /></label>
              </p>
              {sent ?
              <div className="contact__sent">
                  <div className="contact__sent-icon"><Icon name="check" size={28} /></div>
                  <h3>Danke für Ihre Nachricht.</h3>
                  <p>Ich melde mich innerhalb von drei Werktagen bei Ihnen.</p>
                </div> :

              <>
                  <div className="row">
                    <label>Name<input required name="name" placeholder="Ihr Name" /></label>
                    <label>E-Mail<input required name="email" type="email" placeholder="ihre@schule.de" /></label>
                  </div>
                  <div className="row">
                    <label>Einrichtung<input name="einrichtung" placeholder="Schule, Kita, Träger …" /></label>
                    <label>Format
                      <select name="format" defaultValue="">
                        <option value="" disabled>Bitte wählen …</option>
                        <option>Schulinterne Fortbildung</option>
                        <option>Kommunale Fortbildung</option>
                        <option>Workshop</option>
                        <option>Keynote / Vortrag</option>
                        <option>Materialentwicklung</option>
                        <option>Anderes / Beratung</option>
                      </select>
                    </label>
                  </div>
                  <label>Anliegen
                    <textarea name="anliegen" rows="5" placeholder="Termin, Anzahl Teilnehmende, gewünschtes Thema …"></textarea>
                  </label>
                  <p className="contact__consent">
                    Mit dem Absenden stimme ich zu, dass meine Angaben zur
                    Bearbeitung der Anfrage verwendet werden. Hinweise zum Datenschutz
                    finden Sie <a href="datenschutz.html">hier</a>.
                  </p>
                  <button className="btn btn-primary" type="submit">
                    Anfrage senden <Icon name="arrow" size={14} />
                  </button>
                  <div className="contact__lead-note">
                    <Icon name="calendar" size={18} />
                    <span>Fortbildungen werden bestenfalls 3 bis 6 Monate im Voraus geplant. Frühe Anfragen ermöglichen, dass wir eher einen passenden Termin finden.</span>
                  </div>
                </>
              }
            </form>
          </Reveal>
        </div>
      </div>
    </section>);

}
window.Contact = Contact;