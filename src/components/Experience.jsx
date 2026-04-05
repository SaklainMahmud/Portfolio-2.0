import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const workItems = [
  {
    title: 'Software Engineering Intern',
    org: 'NeuroFlight Lab',
    period: 'Jan 2026 – Present',
    location: 'Dhaka, Bangladesh',
    desc: 'Applying software development skills in a professional setting. Working on real-world projects with a focus on clean architecture, code quality, and team collaboration.',
    accent: false,
  },
];

const eduItems = [
  {
    title: 'Bachelor in Computer Science & Engineering',
    org: 'American International University‑Bangladesh (AIUB)',
    period: '2022 – Present',
    location: 'Dhaka, Bangladesh',
    desc: 'Studying core CS fundamentals: data structures, algorithms, software engineering, networking, and OOP design patterns.',
    accent: true,
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    org: 'Comilla Residential College',
    period: '2018 – 2020',
    location: 'Comilla, Bangladesh',
    desc: 'Completed HSC with focus on mathematics and physics.',
    accent: true,
  },
  {
    title: 'Secondary School Certificate (SSC)',
    org: 'Comilla Zilla School',
    period: '2014 – 2018',
    location: 'Comilla, Bangladesh',
    desc: 'Completed secondary education with strong academic performance.',
    accent: true,
  },
];

function TimelineItem({ item, isWork, index }) {
  return (
    <div className={`timeline-item reveal delay-${(index + 1) * 100}`}>
      <div className="timeline-node">
        <div className={`timeline-dot ${item.accent ? 'accent' : ''}`}></div>
      </div>
      <div className={`timeline-card ${item.accent ? 'accent' : ''}`}>
        <span className={`timeline-type-badge ${isWork ? 'badge-work' : 'badge-edu'}`}>
          {isWork ? <Briefcase size={10} /> : <GraduationCap size={10} />}
          {isWork ? 'Work' : 'Education'}
        </span>
        <div className="timeline-header">
          <h3 className="timeline-title">{item.title}</h3>
          <span className={`timeline-period ${item.accent ? 'purple' : ''}`}>{item.period}</span>
        </div>
        <div className={`timeline-org ${item.accent ? 'accent' : ''}`}>{item.org}</div>
        <div className="timeline-loc">📍 {item.location}</div>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  useScrollReveal();

  return (
    <section className="experience section-pad" id="experience" aria-label="Experience and Education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// experience & education</span>
          <h2 className="section-title">My Journey</h2>
          <div className="divider-line"></div>
          <p className="section-subtitle">Where I've worked and studied, building my foundations and skills.</p>
        </div>

        <div className="experience-groups">
          {/* Work */}
          <div>
            <p className="exp-col-title">💼 Work Experience</p>
            <div className="timeline">
              {workItems.map((item, i) => (
                <TimelineItem key={i} item={item} isWork={true} index={i} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="exp-col-title">🎓 Education</p>
            <div className="timeline">
              {eduItems.map((item, i) => (
                <TimelineItem key={i} item={item} isWork={false} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
