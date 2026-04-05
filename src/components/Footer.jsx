import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Globe, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─────────────────────────────────────────────────────────────
   EmailJS configuration
   1. Sign up at https://www.emailjs.com (free plan: 200 emails/month)
   2. Create an Email Service and an Email Template
   3. Replace the values below with your own
   Template variables expected: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
───────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'service_oqduxfg';    // ✅ Gmail (Portfolio)
const EMAILJS_TEMPLATE_ID = 'template_b6j4fhg';   // ✅ "Contact Us" template
const EMAILJS_PUBLIC_KEY = '4qX9LhhNbbnKPqoRN';  // ✅ Public key

const contactLinks = [
  {
    icon: <Mail size={17} />,
    label: 'Email',
    value: 'saklainmahmud556@gmail.com',
    href: 'mailto:saklainmahmud556@gmail.com',
    id: 'contact-email-link',
  },
  {
    icon: <FaGithub size={17} />,
    label: 'GitHub',
    value: 'github.com/SaklainMahmud',
    href: 'https://github.com/SaklainMahmud',
    id: 'contact-github-link',
  },
  {
    icon: <FaLinkedin size={17} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/md-saklain-mahmud',
    href: 'https://www.linkedin.com/in/md-saklain-mahmud/',
    id: 'contact-linkedin-link',
  },
  {
    icon: <Phone size={17} />,
    label: 'Phone',
    value: '+880 1863784443',
    href: 'tel:+8801863784443',
    id: 'contact-phone-link',
  },
];

function ContactForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Name is required';
    if (!values.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Enter a valid email';
    if (!values.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
    if (errors[name]) setErrors(errs => ({ ...errs, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setValues({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h4 className="form-success-title">Message Sent!</h4>
        <p className="form-success-text">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <button className="form-success-back" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            className={`form-input ${errors.name ? 'error' : ''}`}
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <p className="form-error-msg">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <p className="form-error-msg">{errors.email}</p>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className="form-input"
          value={values.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Write your message here..."
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          value={values.message}
          onChange={handleChange}
          rows={5}
        />
        {errors.message && <p className="form-error-msg">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="form-error-msg" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
          ⚠ Couldn't send the message. Please email me directly.
        </p>
      )}

      <button
        type="submit"
        className="form-submit-btn"
        id="contact-submit-btn"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <><div className="spinner"></div> Sending…</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}

export default function Footer() {
  useScrollReveal();

  return (
    <>
      <section className="contact section-pad" id="contact" aria-label="Contact section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">// contact</span>
            <h2 className="section-title">Let's Connect</h2>
            <div className="divider-line"></div>
            <p className="section-subtitle">I'm actively looking for opportunities — let's have a chat!</p>
          </div>

          <div className="contact-inner">
            {/* ── Left: info links ── */}
            <div className="contact-info-col reveal-left">
              <p className="contact-cta-text">
                Whether you have a role in mind, a project idea, or just want to talk software — my
                inbox is always open. Feel free to reach out through any of the channels below.
              </p>
              <div className="contact-links-col">
                {contactLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-link-card"
                    id={link.id}
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div className="contact-link-icon">{link.icon}</div>
                    <div className="contact-link-info">
                      <span className="contact-link-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: message form ── */}
            <div className="contact-form-col reveal-right">
              <div className="contact-form-card">
                <h3 className="form-title">
                  <span className="form-title-icon">✉️</span> Send Me a Message
                </h3>
                <p className="form-subtitle">// I'll respond within 24–48 hours</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-bar" aria-label="Site footer">
        <div className="footer-bar-inner">
          <p className="footer-copy">
            Designed &amp; Built by <span>Md Saklain Mahmud</span> · {new Date().getFullYear()}
          </p>
          <div className="footer-social" aria-label="Social links">
            <a href="https://github.com/SaklainMahmud" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <FaGithub size={15} />
            </a>
            <a href="https://www.linkedin.com/in/md-saklain-mahmud/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <FaLinkedin size={15} />
            </a>
            <a href="mailto:saklainmahmud556@gmail.com" className="footer-social-link" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
