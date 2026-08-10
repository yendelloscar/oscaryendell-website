function Article() {
  return (
    <article className="article">
      <div className="container">
        <div className="article__inner">
          <a className="article__back" href="index.html">← Zurück zum Blog</a>

          <Reveal>
            <span className="article__tag">Grundlagen</span>
            <h1 className="article__title">Was ist Armutssensibilität?</h1>
            <div className="article__meta">
              <span>01. Mai 2026</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="article__art">
              <img src="../design/assets/illustrations/gespraech.svg" alt="" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="article__body">
              <p className="article__lede">In meinen Fortbildungen und Workshops teilen Lehr- und Fachkräfte regelmäßig Erlebnisse aus ihrem pädagogischen Alltag mit mir: Ein Kind hat beispielsweise die geforderten Materialien nicht dabei oder das Geld für den anstehenden Ausflug fehlt. In solchen Momenten, die im dichten pädagogischen Alltag sehr herausfordernd sind, wird manchmal nach den naheliegendsten Erklärungen gesucht. Dabei kommen zum Teil auch Stereotype, also verallgemeinerte Überzeugungen über Menschen mit Armutshintergrund, zum Tragen <span className="article__cite">(Shevchuk &amp; Glock, 2022)</span>. Häufige Stereotype in Bezug auf Armut sind, dass es Eltern und Kindern mit Armutserfahrungen am nötigen Bewusstsein für Bildung fehlt oder sie schlicht unorganisiert seien <span className="article__cite">(Civitillo &amp; Jugert, 2022; Koevel et al., 2021; Shevchuk &amp; Glock, 2022)</span>.</p>

              <p>Stereotype sind ein normaler psychischer Prozess und es ist menschlich, das Verhalten manchmal auch aus Stereotypen heraus zu deuten, die gesellschaftlich verbreitet sind <span className="article__cite">(Shevchuk &amp; Glock, 2022)</span>. Werden entsprechende Situationen jedoch unbewusst durch die eigene stereotype Brille betrachtet, kann dies dazu führen, dass entsprechenden Kindern und Eltern eine negative und defizitorientierte Haltung entgegengebracht wird, wodurch deren enorme strukturelle Belastungen übersehen werden <span className="article__cite">(Otto, 2026)</span>.</p>

              <p>Für ein wirksames und ressourcenorientiertes pädagogisches Handeln ist ein Perspektivwechsel daher hilfreich: Wir brauchen <span className="article__accent article__accent--clay">Armutssensibilität</span> <span className="article__cite">(Holz, 2021)</span>. Diese ermöglicht, eigene Stereotype zu hinterfragen und die professionelle Haltung sowie das eigene Handeln in der Einrichtung entsprechend weiterzuentwickeln. Wie Holz <span className="article__cite">(2021)</span> definiert, erfordert Armutssensibilität einen empathischen und respektvollen Blick auf armutsbetroffene Familien. Diese Wertschätzung bezieht sich auf ihre komplexe Lebenslage und ihre Bedürfnisse, aber ganz besonders auf ihre vorhandenen Ressourcen und individuellen Bewältigungsstrategien. Schoneville und Thole <span className="article__cite">(2025)</span> betonen zudem, dass es sich bei einer armutssensiblen Haltung nicht nur um ein spekulatives emotionales Einfühlen handelt. Es bedarf vielmehr eines fundierten professionellen Wissens und konkreter Einrichtungskonzepte, um angemessen auf die Lebenswirklichkeit armutsbetroffener Familien reagieren zu können. Ein zentrales Leitprinzip lautet in diesem Kontext, dass Ungleiches ungleich behandelt werden muss, um armutsbedingte Unterschiede aktiv auszugleichen und allen Kindern Teilhabe zu ermöglichen <span className="article__cite">(Holz, 2023)</span>. Doch welche armutsbezogenen Ungleichheiten werden in der Forschung diskutiert?</p>

              <h2>Forschung zu armutsbezogenen Ungleichheiten</h2>
              <p>Armut wird in Deutschland oftmals über den Begriff der <span className="article__accent article__accent--teal">relativen Armut</span> oder den Erhalt von Transferleistungen (bspw. Neue Grundsicherung, ehemals Bürgergeld) definiert <span className="article__cite">(Goebel &amp; Krause, 2018; Funcke &amp; Menne, 2023)</span>. Relative Armut beschreibt eine Lebenslage, in der das Einkommen so gering ist (weniger als 60% des Medianeinkommens), dass ein Lebensstandard, der als selbstverständlich gilt, nicht erreichbar ist.</p>

              <p>Das Aufwachsen in dieser Realität kann begrenzen, beschämen und das soziale Leben erheblich beeinflussen <span className="article__cite">(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)</span>. So erhalten Kinder im Bürgergeldbezug lediglich knapp 152€ im Monat für Lebensmittel, 47€ für Kleidung und 56€ für Freizeit &amp; Kultur <span className="article__cite">(Piekarz, 2026)</span>. Generell können Hobbys im Verein für armutsbetroffene Kinder und Jugendliche an den Kosten für Mitgliedsbeiträge oder Ausrüstung scheitern <span className="article__cite">(Funcke &amp; Menne, 2023)</span>. Der Paritätische Wohlfahrtsverband <span className="article__cite">(2026)</span> erfasst in seinem Armutsbericht, was sich Menschen aus finanziellen Gründen konkret nicht leisten können. Fast die Hälfte der einkommensarmen Menschen (49,8 %) kann sich beispielsweise keinen einwöchigen Jahresurlaub leisten <span className="article__cite">(Paritätischer Wohlfahrtsverband, 2026)</span>. Für Kinder bedeutet das, nach den Ferien in (möglichen) Erzählkreisen keine Urlaubsgeschichten teilen zu können. Wenn Familien unter extremen finanziellen und strukturellen Druck stehen, schrumpft oft ihr sozialer Radius, was das Risiko für Einsamkeit und soziale Isolation erhöht <span className="article__cite">(Paritätischer Wohlfahrtsverband, 2026)</span>. Aus diesem Erleben von Mangel und dem Gefühl, nicht dazuzugehören, kann bei Kindern und Jugendlichen eine tiefe Scham erwachsen <span className="article__cite">(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)</span>.</p>

              <p className="article__pullquote">Fast die Hälfte der einkommensarmen Menschen kann sich keinen einwöchigen Jahresurlaub leisten. Für Kinder bedeutet das, nach den Ferien keine Urlaubsgeschichten teilen zu können.</p>

              <p>Forschungsergebnisse zeigen darüber hinaus, dass Armut ein gesundes Aufwachsen negativ beeinflusst <span className="article__cite">(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)</span>. Beispielsweise schränkt das städtebauliche Umfeld in armutsbetroffenen Sozialräumen die Bewegungs- und Spielräume von Kindern negativ ein, indem eine hohe Verkehrsbelastung sowie weniger Spiel- und Freiräume bestehen <span className="article__cite">(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)</span>. Gleichzeitig zeigt sich in entsprechenden Sozialräumen auch eine schlechtere gesundheitliche Versorgung als in wohlhabenderen Sozialräumen <span className="article__cite">(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)</span>. Armut geht zudem mit unterschiedlichen gesundheitlichen Einschränkungen wie beispielsweise einer höheren Chance an Entwicklungsverzögerungen, Schlafproblemen sowie psychischen Erkrankungen einher <span className="article__cite">(Kooperationsverbund Gesundheitliche Chancengleichheit, 2024)</span>.</p>

              <p>Armutserfahrungen wirken sich entsprechend wie ein Katalysator auf Bildungswege aus. Die soziale Schere geht im Schulsystem nicht erst beim Schulabschluss auseinander, sondern ist bereits in der Grundschule messbar. Schüler*innen aus privilegierten Elternhäusern haben in der vierten Klasse in Mathematik und Deutsch einen Leistungsvorsprung von etwa einem ganzen Schuljahr vor Kindern aus Familien mit niedrigem Sozialstatus <span className="article__cite">(Funcke &amp; Menne, 2023)</span>. In der Folge verlaufen die Bildungsbiografien von Kindern mit Armutserfahrung deutlich instabiler: Sie wiederholen häufiger eine Klasse, werden bei gleichen Leistungen im Schnitt schlechter benotet, erhalten seltener eine Gymnasialempfehlung und münden nach der Schule häufiger in Warteschleifen des Übergangssystems statt in eine Berufsausbildung oder ein Studium <span className="article__cite">(Funcke &amp; Menne, 2023)</span>.</p>

              <p>Armutssensibilität erfordert entsprechend, auf vielschichtige Benachteiligungen einzugehen und dabei dennoch einen ressourcenorientierten Blick auf Kinder und Familien zu richten. Um diesem Anspruch gerecht zu werden, kann Armutssensibilität in drei Ebenen unterteilt werden.</p>

              <div className="article__levels">
                <div className="article__level article__level--teal">
                  <h3><span className="article__level-num">1</span>Die persönliche armutssensible Haltung</h3>
                  <p>Armutssensibles Arbeiten beginnt bei einer fundierten Selbstreflexion <span className="article__cite">(Otto, 2026)</span>. Es kann im Alltag sehr entlastend sein, eigene (unbewusste) Stereotype kritisch zu hinterfragen. Eine reflexiv-professionelle pädagogische Haltung blendet Armut nicht aus, sondern kann Ausgrenzungsmechanismen aktiv entgegentreten. Wir erkennen dabei an, dass Familien in Armutslagen unter enormem strukturellem Druck stehen können und richten unseren Blick darauf, sie in ihren Potenzialen zu stärken.</p>
                </div>

                <div className="article__level article__level--clay">
                  <h3><span className="article__level-num">2</span>Armutssensible organisatorische Abläufe in der Einrichtung</h3>
                  <p>Einrichtungen können ihre täglichen Routinen so gestalten, dass sie bestehende Barrieren abbauen und Beschämung verhindern <span className="article__cite">(Otto, 2026)</span>. Armut darf im pädagogischen Raum nicht offen zur Schau gestellt werden. Ein wirkungsvoller Ansatz ist beispielsweise die Einrichtung eines kooperativen Materialfundus <span className="article__cite">(Otto, 2026)</span>. Dabei nutzen Einrichtungen grundlegende Lern- und Bastelmaterialien aus einem gemeinsamen Pool für alle Kinder. Auf diese Weise lassen sich individuelle Bedarfe passgenau decken, ohne dass finanzielle Engpässe einzelner Familien sichtbar werden, was andernfalls zu einer sozialen Stigmatisierung führen könnte.</p>
                </div>

                <div className="article__level article__level--moss">
                  <h3><span className="article__level-num">3</span>Armutssensible strukturelle Zugänge und Vernetzung im Sozialraum</h3>
                  <p>Selbst die engagiertesten Fachkräfte können an ihre Grenzen stoßen, wenn sie isoliert handeln. Armutssensibilität gewinnt an Kraft durch eine institutionsübergreifende Zusammenarbeit im Sozialraum <span className="article__cite">(Otto, 2026)</span>. Sogenannte kommunale Präventionsketten verbinden die Angebote der Gesundheitsförderung, der Kinder- und Jugendhilfe sowie von Bildungseinrichtungen systematisch miteinander <span className="article__cite">(Richter-Kornweitz, 2024)</span>. Durch diese ressortübergreifende Vernetzung kann sichergestellt werden, dass Familien lückenlos begleitet werden und Kinder an den kritischen Übergängen im Bildungssystem nicht den Anschluss verlieren.</p>
                </div>
              </div>

              <h2>Gemeinsam Armutssensibilität in die Praxis übersetzen</h2>
              <p>Dieses Verständnis von Armutssensibilität prägt mein Arbeiten mit Schulen, Vereinen, Initiativen und Kommunen. Grundlage ist dabei für mich immer, welche (unausgesprochenen) Stereotype Eltern und Kindern mit Armutserfahrungen entgegengebracht werden und wie ein sensibler sowie gleichzeitig ressourcenorientierter Blick ermöglicht werden kann (<span className="article__level-ref article__level-ref--teal">Ebene 1</span>). Eine stetige Reflexion dieser Haltung ermöglicht darüber hinaus, einrichtungsinterne armutssensible Abläufe zu implementieren (<span className="article__level-ref article__level-ref--clay">Ebene 2</span>) sowie einrichtungsübergreifende und kommunale Vernetzung im Sozialraum armutssensibel zu gestalten (<span className="article__level-ref article__level-ref--moss">Ebene 3</span>). Dabei ist mir wichtig zu betonen:</p>

              <p className="article__pullquote">Armutssensibilität ist kein Zustand, den man einmalig erreicht, sondern eine dauerhafte professionelle Suchbewegung.</p>

              <p>Um diesen Weg nicht allein gehen zu müssen, unterstütze ich Sie gerne dabei, Forschung und Konzepte zur Armutssensibilität in Ihre konkrete Praxis zu übersetzen und die drängendsten Armutsfolgen aufzufangen.</p>

              <p>In meinen <span className="article__accent article__accent--teal">schulinternen Fortbildungen</span> erarbeite ich mit Ihnen und Ihrem (multiprofessionellen) Kollegium passgenaue Vorgehensweisen für Ihre Einzelschule. Dabei konzentrieren wir uns gezielt darauf, wie die professionelle Haltung im pädagogischen Alltag gestärkt werden kann (Ebene 1) und wie sich organisatorische Abläufe im Alltag (Ebene 2) so gestalten lassen, dass sie Armutsfolgen im Schulalltag bestmöglich abfedern. Zudem arbeiten wir heraus, welche Armutsfolgen Ihre Schule nicht alleine auffangen kann und wo eine kommunale Vernetzung im Sozialraum gewinnbringend ist (Ebene 3).</p>

              <p>In <span className="article__accent article__accent--clay">kommunalen Fortbildungen</span> blicken wir über den Tellerrand der einzelnen Einrichtung hinaus und bringen schulische sowie außerschulische Akteur*innen im Sozialraum zusammen. Hier richten wir den Fokus ganz besonders auf die dritte Ebene und erarbeiten, wie Kinder und Familien durch kommunale Präventionsketten institutionsübergreifend und armutssensibel unterstützt werden können.</p>

              <p>Mein Anspruch ist dabei stets, dass wir keine theoretischen Standardlösungen besprechen, sondern konkrete Ansätze für Ihre Lebensrealität vor Ort entwickeln. Zudem werden die Fortbildungen selbstverständlich an Ihre Bedürfnisse angepasst, weshalb mir vorherige Besprechungen (optional auch Umfragen) zur Erwartungsabfrage sehr wichtig sind. Gleiches gilt selbstverständlich für meine Workshops, Vorträge sowie eine gemeinsame Materialentwicklung. Wenn Sie Interesse an einer Zusammenarbeit haben, <a href="../index.html#kontakt">freue ich mich von Ihnen zu hören</a>.</p>

              <div className="article__refs">
                <h2>Literaturverzeichnis</h2>
                <ul>
                  <li>Civitillo, S., &amp; Jugert, P. (2022). ‚Sie kümmern sich nicht und haben es eh verdient‘ – Mythen über den Zusammenhang von Armut und Bildung. In G. Steins, B. Spinath, S. Dutke, M. Roth, &amp; M. Limbourg (Hrsg.), <em>Mythen, Fehlvorstellungen, Fehlkonzepte und Irrtümer in Schule und Unterricht</em> (S. 181–196). Springer Fachmedien.</li>
                  <li>Funcke, A., &amp; Menne, S. (2023). <em>Kinder- und Jugendarmut in Deutschland.</em> Bertelsmann Stiftung.</li>
                  <li>Goebel, J., &amp; Krause, P. (2018). Quantitative Messung von Armut. In P. Böhnke, J. Dittmann, &amp; J. Goebel (Hrsg.), <em>Handbuch Armut</em> (S. 56–68). Barbara Budrich.</li>
                  <li>Holz, G. (2021). <em>Stärkung von Armutssensibilität: Ein Basiselement individueller und struktureller Armutsprävention für junge Menschen.</em> Senatsverwaltung für Bildung, Jugend und Familie.</li>
                  <li>Holz, G. (2023). Kinderarmut und familienbezogene soziale Dienstleistungen. In E.-U. Huster &amp; J. Boeckh (Hrsg.), <em>Handbuch Armut und soziale Ausgrenzung</em> (S. 1–23). Springer Fachmedien Wiesbaden.</li>
                  <li>Koevel, A., Nerdinger, F. W., &amp; Junge, M. (2021). „Verschuldete Armut ist für mich, wenn ich saufen gehe und nichts mehr mach" – Eine Grounded Theory-Studie zu Armutskonstruktionen von Lehrpersonen. <em>Zeitschrift für Soziologie der Erziehung und Sozialisation, 41</em>(1), 57–72.</li>
                  <li>Kooperationsverbund Gesundheitliche Chancengleichheit. (2024). <em>Zur gesundheitlichen Lage sozial benachteiligter Kinder und Jugendlicher.</em> Kooperationsverbund Gesundheitliche Chancengleichheit.</li>
                  <li>Otto, S. (2026). Armutssensibles Handeln von Kindheitspädagog:innen. Chancen und Herausforderungen vor und nach dem Schuleintritt. In S. Rutter &amp; F. Weitkämper (Hrsg.), <em>Armut und Schule: Herausforderungen und Handlungsmöglichkeiten für die pädagogische Arbeit</em> (1. Aufl., S. 42–55). Juventa Verlag.</li>
                  <li>Paritätischer Wohlfahrtsverband. (2026). <em>Wachsende Armut, schrumpfende Sicherheit – Paritätischer Armutsbericht.</em> Deutscher Paritätischer Wohlfahrtsverband – Gesamtverband e. V.</li>
                  <li>Piekarz, P. (2026, 24. März). Bürgergeld Regelsatz – So hoch ist der Regelbedarf. <em>Buergergeld.org.</em></li>
                  <li>Richter-Kornweitz, A. (2024). Präventionsketten – Integrierte kommunale Strategie zur strukturell orientierten Armutsprävention. In A. Brettschneider, S. Grohs, &amp; N. Jehles (Hrsg.), <em>Handbuch Kommunale Sozialpolitik</em> (S. 1–18). Springer Fachmedien Wiesbaden.</li>
                  <li>Shevchuk, A., &amp; Glock, S. (2022). Pygmalion und die Rolle askriptiver Schüler*innenmerkmale auf Lehrkrafterwartungen und Erwartungseffekte: Damals und heute. In S. Glock (Hrsg.), <em>Stereotype in der Schule II</em> (S. 1–48). Springer Fachmedien Wiesbaden.</li>
                  <li>Schoneville, H., &amp; Thole, W. (2025). Armut und Soziale Arbeit. <em>Sozial Extra, 49</em>(2), 106–112.</li>
                </ul>
              </div>

              <div className="article__footer">
                <a className="article__back" href="index.html" style={{ marginBottom: 0 }}>← Zurück zum Blog</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
window.Article = Article;
