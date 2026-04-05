import { useEffect, useRef } from 'react';
import './Skills.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillGroups = [
  {
    icon: '💻',
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', hot: true },
      { name: 'Python', hot: true },
      { name: 'C#', hot: false },
      { name: 'C++', hot: false },
      { name: 'Java', hot: false },
    ],
  },
  {
    icon: '⚛️',
    title: 'Frontend',
    skills: [
      { name: 'React', hot: true },
      { name: 'Next.js', hot: true },
      { name: 'HTML5', hot: false },
      { name: 'CSS3', hot: false },
      { name: 'Tailwind CSS', hot: false },
    ],
  },
  {
    icon: '🟢',
    title: 'Backend',
    skills: [
      { name: 'Node.js', hot: true },
      { name: 'Express.js', hot: true },
      { name: 'Nest.js', hot: false },
      { name: 'REST APIs', hot: false },
      { name: 'JWT Auth', hot: false },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: [
      { name: 'MongoDB', hot: true },
      { name: 'PostgreSQL', hot: false },
      { name: 'MySQL', hot: false },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', hot: true },
      { name: 'GitHub', hot: true },
      { name: 'Vite', hot: false },
      { name: 'Postman', hot: false },
      { name: 'Thunder Client', hot: false },
    ],
  },
  {
    icon: '🧠',
    title: 'Concepts',
    skills: [
      { name: 'MERN Stack', hot: true },
      { name: 'MVC Architecture', hot: false },
      { name: 'CRUD Operations', hot: false },
      { name: 'OOP', hot: false },
      { name: 'Auth & Authorization', hot: false },
    ],
  },
];

const proficiencies = [
  { label: 'JavaScript / TypeScript', pct: 88 },
  { label: 'React & Next.js', pct: 85 },
  { label: 'Node.js / Express', pct: 82 },
  { label: 'MongoDB', pct: 78 },
  { label: 'Python', pct: 70 },
  { label: 'C# / .NET', pct: 65 },
];

function ProfBar({ label, pct }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.setProperty('--pct', pct / 100);
          el.classList.add('animated');
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="prof-item">
      <div className="prof-header">
        <span className="prof-label">{label}</span>
        <span className="prof-pct">{pct}%</span>
      </div>
      <div className="prof-bar-track">
        <div
          ref={fillRef}
          className="prof-bar-fill"
          style={{ transform: `scaleX(0)` }}
          aria-label={`${label}: ${pct}%`}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  useScrollReveal();

  return (
    <section className="skills section-pad" id="skills" aria-label="Technical skills">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// skills</span>
          <h2 className="section-title">Tech Arsenal</h2>
          <div className="divider-line"></div>
          <p className="section-subtitle">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`skill-group reveal delay-${Math.min((i + 1) * 100, 500)}`}
            >
              <div className="skill-group-header">
                <div className="skill-group-icon">{group.icon}</div>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span key={s.name} className={`skill-tag ${s.hot ? 'hot' : ''}`}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-proficiency reveal">
          <p className="prof-title">// Proficiency Overview</p>
          <div className="prof-list">
            {proficiencies.map(p => (
              <ProfBar key={p.label} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
