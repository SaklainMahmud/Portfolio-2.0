import { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Hero.css';
import profileImg from '../assets/hero.JPG';

const roles = [
  'Full‑Stack Developer',
  'Frontend Engineer',
  'Software Developer',
  'MERN Stack Builder',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timeout;
    const current = roles[roleIdx];
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 40);
      } else {
        setDeleting(false);
        setRoleIdx(r => (r + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home" aria-label="Hero introduction">
      <div className="hero-inner">
        {/* ── Left ── */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-dot" aria-hidden="true"></span>
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm
            <span className="hero-name-accent">Md Saklain Mahmud</span>
          </h1>

          <div className="hero-role-wrapper">
            <p className="hero-role">
              &#47;&#47;&nbsp;
              <span className="hero-role-text">{displayed}</span>
              <span className="cursor-blink" aria-hidden="true"></span>
            </p>
          </div>

          <p className="hero-bio">
            CSE undergraduate at AIUB, passionate about building reliable and
            efficient software systems. Skilled in full-stack development,
            testing methodologies, and software engineering principles.
          </p>

          <div className="hero-buttons">
            <button className="btn-neon btn-neon-primary" id="hero-view-projects" onClick={() => scrollTo('projects')}>
              View Projects <ArrowRight size={16} />
            </button>
            <a
              href="/Md_Saklain_Mahmud_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-outline"
              id="hero-download-cv"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="hero-stats" aria-label="Statistics">
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="hero-visual" aria-hidden="true">
          <div className="profile-container">
            <div className="profile-ring-outer"></div>
            <div className="profile-ring-inner"></div>
            <div className="profile-img-wrapper">
              <img
                src={profileImg}
                alt="Md Saklain Mahmud profile photo"
                className="profile-img"
              />
            </div>
            <div className="tech-badge">⚛️ React</div>
            <div className="tech-badge">🟢 Node.js</div>
            <div className="tech-badge">🍃 MongoDB</div>
            <div className="tech-badge">🐍 Python</div>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
}
