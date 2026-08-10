function Header({ active = 'home' }) {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: 'angebot', href: '#angebot', label: 'Angebot' },
    { id: 'person', href: '#person', label: 'Über mich' },
    { id: 'termine', href: '#termine', label: 'Termine' },
    { id: 'blog', href: 'blog/index.html', label: 'Blog' },
    { id: 'kontakt', href: '#kontakt', label: 'Kontakt' },
  ];
  // On blog page, the hash links should point back to the homepage
  const isBlog = active === 'blog';
  const isLegal = active === 'legal';
  const resolveHref = (h) => {
    if (isBlog && h.startsWith('#')) return `../index.html${h}`;
    if (isLegal && h.startsWith('#')) return `index.html${h}`;
    return h;
  };
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__top">
          <a className="brand" href={isBlog ? '../index.html' : (isLegal ? 'index.html' : '#top')}>
            <div className="brand__mark">
              <img src={isBlog ? '../design/assets/mark.svg' : 'design/assets/mark.svg'} alt="" width="36" height="36" />
            </div>
            <div>
              <div className="brand__name">Dr. Oscar Yendell</div>
              <div className="brand__tag">Armutssensibilität in pädagogischen Kontexten</div>
            </div>
          </a>
          <div className="header-contact">
            <a href="mailto:mail@oscaryendell.de"><Icon name="mail" size={16} /> mail@oscaryendell.de</a>
            <span className="divider"></span>
            <a href="https://www.linkedin.com/in/oscar-yendell/" target="_blank" rel="noopener"><Icon name="linkedin" size={16} /> LinkedIn</a>
          </div>
        </div>
        <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Hauptnavigation">
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} size={16} /> Menü
          </button>
          <div className="site-nav__links">
            {links.map(l => (
              <a key={l.id} href={resolveHref(l.href)} className={active === l.id ? 'active' : ''} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
          <a href={resolveHref('#kontakt')} className="btn btn-primary nav-cta">
            Anfrage senden <Icon name="arrow" size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
window.Header = Header;
