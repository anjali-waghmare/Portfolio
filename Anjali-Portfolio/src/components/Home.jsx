import { useEffect, useState } from "react";
import "./Home.css";

const ROLES = [
  "MERN Stack Developer",
  "React JS Developer",
  "Frontend Engineer",
  "UI Enthusiast",
];

const SKILLS = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML5", "CSS3", "Vite"];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="home">
      {/* Animated background blobs */}
      <div className="home__blob home__blob--1" aria-hidden="true" />
      <div className="home__blob home__blob--2" aria-hidden="true" />
      <div className="home__blob home__blob--3" aria-hidden="true" />

      {/* Floating grid overlay */}
      <div className="home__grid" aria-hidden="true" />

      <div className="home__content">
        <span className="home__badge">✦ &nbsp;Available for Opportunities</span>

        <h1 className="home__heading">
          Hi, I&rsquo;m <span className="home__name">Anjali</span>
        </h1>

        <div className="home__role-wrap" aria-live="polite">
          <span className="home__role-prefix">I&rsquo;m a&nbsp;</span>
          <span className="home__role-typed">{displayed}</span>
          <span className="home__role-cursor" aria-hidden="true">|</span>
        </div>

        <p className="home__sub">
          A passionate developer crafting beautiful, pixel-perfect experiences
          for the modern web — from idea to deployment.
        </p>

        {/* Skill chips */}
        <div className="home__skills" aria-label="Skills">
          {SKILLS.map((skill) => (
            <span key={skill} className="home__skill-chip">{skill}</span>
          ))}
        </div>

        <div className="home__actions">
          <a href="#projects" id="cta-projects" className="home__btn home__btn--primary">
            View Projects <span>→</span>
          </a>
          <a
            href="/resume.pdf"
            download="Anjali_Waghmare_Resume.pdf"
            id="cta-resume"
            className="home__btn home__btn--resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume <span>↓</span>
          </a>
          <a href="#contact" id="cta-contact" className="home__btn home__btn--outline">
            Contact Me
          </a>
          <a href="#experience" id="cta-experience" className="home__btn home__btn--ghost">
            My Journey
          </a>
        </div>

        {/* Stats row */}
        <div className="home__stats">
          <div className="home__stat">
            <span className="home__stat-num">3+</span>
            <span className="home__stat-label">Years Learning</span>
          </div>
          <div className="home__stat-divider" aria-hidden="true" />
          <div className="home__stat">
            <span className="home__stat-num">10+</span>
            <span className="home__stat-label">Projects Built</span>
          </div>
          <div className="home__stat-divider" aria-hidden="true" />
          <div className="home__stat">
            <span className="home__stat-num">100%</span>
            <span className="home__stat-label">Passion</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
