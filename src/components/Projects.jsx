import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'ProjectFlow — Full‑Stack Project Management System',
    featured: true,
    accent: '',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    points: [
      'Designed and built a full-stack task management app with secure JWT authentication.',
      'Protected REST APIs with ownership-based authorization on projects and tasks.',
      'React frontend with login, dashboard, and kanban-style task workflow (Todo / In‑Progress / Done).',
      'Integrated with Axios and Authorization headers; maintained separate frontend/backend repos.',
    ],
    github: 'https://github.com/SaklainMahmud/ProjectFlow',
    live: null,
  },
  {
    title: 'Portfolio Website',
    featured: false,
    accent: 'purple-accent',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    points: [
      'Designed and deployed a responsive personal portfolio website using React.',
      'Implemented reusable components and modern UI/UX practices.',
      'Deployed on Vercel with live project showcases.',
    ],
    github: 'https://github.com/SaklainMahmud/portfolio',
    live: 'https://saklainmahmud.vercel.app/',
  },
  {
    title: 'Job Marketplace Website',
    featured: false,
    accent: 'green-accent',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    points: [
      'Developed a full-stack job marketplace using MVC Architecture with user registration, job posting, and applicant management.',
      'Designed relational database schema with secure data handling.',
    ],
    github: 'https://github.com/SaklainMahmud/Job_Marketplace',
    live: null,
  },
  {
    title: 'Library Management System',
    featured: false,
    accent: '',
    tech: ['Java'],
    points: [
      'Built a modular Java-based library system supporting book registration, borrowing, and returns.',
      'Focused on clean OOP design and user-friendly workflows.',
    ],
    github: 'https://github.com/SaklainMahmud/Library-Management-System-using-Java',
    live: null,
  },
  {
    title: 'e‑Shop Management System',
    featured: false,
    accent: 'purple-accent',
    tech: ['C#', 'OOP', 'SQL Database'],
    points: [
      'Developed an e-Shop system with product management, inventory tracking, and order processing.',
      'Applied software engineering principles: modular design and separation of concerns.',
      'Designed and integrated a relational database for data consistency.',
    ],
    github: 'https://github.com/SaklainMahmud/E-Shop',
    live: null,
  },
];

export default function Projects() {
  useScrollReveal();

  return (
    <section className="projects section-pad" id="projects" aria-label="Projects showcase">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// projects</span>
          <h2 className="section-title">What I've Built</h2>
          <div className="divider-line"></div>
          <p className="section-subtitle">A selection of projects that demonstrate my skills and passion for building quality software.</p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <article
              key={proj.title}
              className={`project-card ${proj.featured ? 'featured' : ''} ${proj.accent} reveal delay-${Math.min((i % 3 + 1) * 100, 300)}`}
            >
              <div className="project-card-top" aria-hidden="true"></div>
              <div className="project-card-body">
                <div className="project-card-header">
                  <h3 className="project-title">{proj.title}</h3>
                  {proj.featured && (
                    <span className="project-featured-badge">⭐ Featured</span>
                  )}
                </div>

                <div className="project-desc">
                  <ul>
                    {proj.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    id={`proj-github-${i}`}
                    aria-label={`View ${proj.title} code on GitHub`}
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  {proj.live ? (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      id={`proj-live-${i}`}
                      aria-label={`View live demo of ${proj.title}`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="project-link no-hover-pointer" style={{ opacity: 0.4 }}>
                      <ExternalLink size={14} /> Private
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
