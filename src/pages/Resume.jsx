import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Resume.css';

const sections = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'core-skills', label: 'Core Skills & Themes' },
  { id: 'career-highlights', label: 'Career Highlights' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' }
];

const Resume = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [downloadHovered, setDownloadHovered] = useState(false);

  useEffect(() => {
    // ScrollSpy implementation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="resume-page-wrapper">
      <div className="resume-top-bar">
        <div className="resume-breadcrumbs">
          <span className="active">RESUME</span>
          <span className="inactive">CV</span>
        </div>
        <div 
          className="resume-download-container"
          onMouseEnter={() => setDownloadHovered(true)}
          onMouseLeave={() => setDownloadHovered(false)}
        >
          <a href="/resume.pdf" download="resume.pdf" className="resume-download-btn" aria-label="download resume">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 16l-5-5 1.4-1.4 2.6 2.6V4h2v8.2l2.6-2.6L17 11l-5 5zm-6 4v-2h12v2H6z"/>
            </svg>
          </a>
          <AnimatePresence>
            {downloadHovered && (
              <motion.div
                className="resume-download-tooltip"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
              >
                download resume
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="resume-layout">
        {/* Left Sticky Sidebar */}
        <aside className="resume-sidebar">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`resume-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleScrollTo(section.id)}
              aria-label={`Scroll to ${section.label}`}
            >
              <div className="resume-nav-line"></div>
              <div className="resume-nav-label">{section.label}</div>
            </button>
          ))}
        </aside>

        {/* Right Content Area */}
        <main className="resume-content">
          <section className="resume-header">
            <h1 className="resume-name">Abmi Sukma Edri</h1>
            <h2 className="resume-title">UI/UX Design and Researcher</h2>
            <p className="resume-location">Pekanbaru, Riau, Indonesia</p>

            <div className="resume-contact-grid">
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+6285194383250" className="contact-value">+62 851 9438 3250</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:abmisukma.e@gmail.com" className="contact-value">abmisukma.e@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website</span>
                <a href="https://amey-herlittleworld.vercel.app" className="contact-value" target="_blank" rel="noopener noreferrer">amey-herlittleworld.co</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <a href="https://linkedin.com/in/abmise" className="contact-value" target="_blank" rel="noopener noreferrer">linkedin.com/in/abmise</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Github</span>
                <a href="https://github.com/AbmiSukma" className="contact-value" target="_blank" rel="noopener noreferrer">github.com/AbmiSukma</a>
              </div>
            </div>
          </section>

          <section id="executive-summary" className="resume-section">
            <h3 className="resume-section-title">Executive Summary</h3>
            <p>Informatics Engineering graduate passionate about designing digital products that solve real user problems through intuitive, user-centered experiences.</p>
            <p>Experienced in the end-to-end UX design process, including user research, information architecture, wireframing, interactive prototyping, usability testing, and interface evaluation using User-Centered Design (UCD).</p>
            <p>Skilled at collaborating with multidisciplinary teams and developers by leveraging a strong technical background in Informatics to understand the product development lifecycle and translate insights into meaningful experiences.</p>
          </section>

          <section id="core-skills" className="resume-section">
            <h3 className="resume-section-title">Core Skills & Themes</h3>
            <p>Interaction Design | UX Research | User-Centered Design (UCD) | Wireframing & Prototyping | Usability Testing | Data Analysis</p>
          </section>

          <section id="career-highlights" className="resume-section">
            <h3 className="resume-section-title">Career Highlights</h3>
            <ul>
              <li>Achieved a System Usability Scale (SUS) score of 72.0, indicating good overall usability for the MajorPath decision support design.</li>
              <li>Designed and evaluated MajorPath to help Indonesian high school students identify suitable university majors based on their interests, learning preferences, and career aspirations.</li>
              <li>Created an integrated academic administration and service dashboard ("Dashboard TIF") for the Informatics Engineering department during a collaborative internship.</li>
            </ul>
          </section>

          <section id="experience" className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            
            <div className="experience-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">UIN Suska Riau</div>
                  <div className="exp-title">UI/UX Researcher (Bachelor's Thesis)</div>
                </div>
                <div className="exp-meta">
                  Pekanbaru, Indonesia<br/>
                  Apr 2026 – Jul 2026
                </div>
              </div>
              <p>Designed and evaluated MajorPath, a decision-support design that helps present high school students in the Indonesian curriculum identify suitable university majors.</p>
              <ul>
                <li>Conducted user research to understand students' needs and decision-making challenges.</li>
                <li>Designed user flows, wireframes, and high-fidelity prototypes using Figma.</li>
                <li>Applied the User-Centered Design (UCD) methodology throughout the design process.</li>
                <li>Evaluated usability using Nielsen's Heuristic Evaluation and the System Usability Scale (SUS).</li>
                <li>Iterated the prototype based on evaluator feedback to improve usability and user experience.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">UIN Suska Riau</div>
                  <div className="exp-title">User Experience Designer (Internship)</div>
                </div>
                <div className="exp-meta">
                  Pekanbaru, Indonesia<br/>
                  Jan 2025 – Jun 2025
                </div>
              </div>
              <ul>
                <li>Contributed to a joint internship project to create the "Dashboard TIF" website.</li>
                <li>Designed an integrated platform combining academic services and administration for the Informatics Engineering study program.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">HIMATIF UIN SUSKA</div>
                  <div className="exp-title">Head of Information and Communication Department</div>
                </div>
                <div className="exp-meta">
                  Pekanbaru, Indonesia<br/>
                  Feb 2025 – Dec 2025
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">Universitas Islam Negeri Sultan Syarif Kasim Riau</div>
                  <div className="exp-title">Student (UI/UX Class Final Project)</div>
                </div>
                <div className="exp-meta">
                  Pekanbaru, Indonesia<br/>
                  Sep 2025 – Dec 2025
                </div>
              </div>
              <ul>
                <li>Created an interactive mobile application prototype with an academic theme for the UI/UX class final project.</li>
              </ul>
            </div>
          </section>

          <section id="education" className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="experience-item">
              <div className="exp-header">
                <div>
                  <div className="exp-company">Universitas Islam Negeri Sultan Syarif Kasim Riau</div>
                  <div className="exp-title">Undergraduate, Informatics Engineering</div>
                </div>
                <div className="exp-meta">
                  Pekanbaru, Indonesia<br/>
                  Started Sep 2022
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Resume;
