import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '/logo.jpg';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = links.map(l => document.getElementById(l.id));
      const viewportMid = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= viewportMid) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <a className="navbar-logo" href="#" aria-label="Md Saklain Mahmud — Home">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">saklain<span>.dev</span></span>
        </a>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`} role="list">
          {links.map(l => (
            <li key={l.id}>
              <button
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/Md_Saklain_Mahmud_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
