import { Mail, MapPin, Calendar, BookOpen, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './About.css';
import profileImg from '../assets/profile.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <section className="about section-pad" id="about" aria-label="About Md Saklain Mahmud">
      <div className="container">
        <div className="about-inner">
          {/* Image Column */}
          <div className="about-image-col reveal-left">
            <div className="about-img-wrapper">
              <img
                src={profileImg}
                alt="Md Saklain Mahmud"
                className="about-img"
              />
              <div className="about-img-border" aria-hidden="true"></div>
              <div className="about-info-badges">
                <div className="info-badge">
                  <div className="info-badge-icon"><MapPin size={14} /></div>
                  Dhaka, Bangladesh
                </div>
                <div className="info-badge">
                  <div className="info-badge-icon"><BookOpen size={14} /></div>
                  CSE @ AIUB (2022 – Present)
                </div>
                <div className="info-badge">
                  <div className="info-badge-icon"><Globe size={14} /></div>
                  Bengali &amp; English
                </div>
                <div className="info-badge">
                  <div className="info-badge-icon"><Calendar size={14} /></div>
                  Born 04/11/2002
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="about-content reveal-right">
            <div className="section-header">
              <span className="section-tag">// about me</span>
              <h2 className="section-title">Who Am I?</h2>
              <div className="divider-line"></div>
            </div>

            <p className="about-text">
              I'm <span className="about-highlight">Md Saklain Mahmud</span>, a Computer Science and Engineering
              undergraduate at <span className="about-highlight">American International University‑Bangladesh (AIUB)</span>
              {' '}with a strong passion for building reliable and efficient software systems.
            </p>
            <p className="about-text">
              I thrive on <span className="about-highlight">real-world problem solving</span>—from architecting scalable backend
              APIs with Node.js and Express to crafting polished, reactive UIs with React and Next.js.
              I aim to contribute to high-quality software products while continuously learning and adapting to emerging technologies.
            </p>
            <p className="about-text">
              Currently interning at <span className="about-highlight neon-text">NeuroFlight Lab</span> (Since Jan 2026),
              where I'm applying my skills in a professional environment and growing as a developer
              every single day.
            </p>

            <div className="about-links">
              <a
                href="https://github.com/SaklainMahmud"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                id="about-github-link"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-saklain-mahmud/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                id="about-linkedin-link"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:saklainmahmud556@gmail.com"
                className="social-link"
                id="about-email-link"
              >
                <Mail size={16} /> Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
