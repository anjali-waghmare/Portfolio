import "./About.css";

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap 5"],
  Backend: ["Node.js", "Express.js", "RESTful API"],
  Database: ["Oracle (SQL, PL/SQL)", "MySQL", "PostgreSQL", "MongoDB"],
  "Version Control & Deployment": ["Git", "GitHub", "Vercel"],
};

const education = [
  {
    degree: "MSc in Computer Science",
    institution: "Dr. S.C. Gulhane Prerna Mahavidyalaya, Nagpur",
    period: "Sept. 2023 – June 2025",
    result: "CGPA: 6.31",
  },
  {
    degree: "BSc in Computer Science",
    institution: "K.R. Pandav Mahavidyalaya, Nagpur",
    period: "Sept. 2017 – August 2021",
    result: "61.96%",
  },
];

const training = [
  {
    course: "Certified Course in Full Stack Development",
    institute: "Apna College",
    fileUrl: "/certificates/Apna-College.png",
  },
  {
    course: "Certified Course in React.js",
    institute: "RSE Business IT Solutions",
    fileUrl: "/certificates/RSE-IT-Solution.png",
  },
];

const aiTools = ["ChatGPT", "Gemini", "Blackbox AI"];
const buildTools = ["Vite"];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__blob about__blob--1" aria-hidden="true" />
      <div className="about__blob about__blob--2" aria-hidden="true" />

      <div className="about__inner">

        {/* ── Profile ── */}
        <div className="about__block">
          <div className="about__section-label">
            <span className="about__badge">✦ Who I Am</span>
            <h2 className="about__title">About Me</h2>
          </div>
          <div className="about__profile-card">
            <div className="about__avatar" aria-hidden="true">AW</div>
            <div className="about__profile-text">
              <h3 className="about__profile-name">Anjali Waghmare</h3>
              <p className="about__profile-role">React Developer · Full Stack Enthusiast</p>
              <p className="about__profile-bio">
                Proficient in building responsive, high-performance interfaces using Vite,
                React-Bootstrap, and modern JavaScript. Skilled in transforming complex designs
                into interactive, state-driven components with a focus on clean code and seamless
                user experiences. Based in Nagpur, Maharashtra.
              </p>
              <div className="about__profile-links">
                <a href="mailto:waghmareaanjali228@gmail.com" className="about__profile-link">
                  📧 waghmareaanjali228@gmail.com
                </a>
                <a href="tel:+917057024755" className="about__profile-link">
                  📞 +91-7057024755
                </a>
                <a
                  href="https://www.linkedin.com/in/anjali-waghmare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__profile-link"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Skills ── */}
        <div className="about__block">
          <div className="about__section-label">
            <span className="about__badge">✦ Expertise</span>
            <h2 className="about__title">Technical Skills</h2>
            <p className="about__subtitle">
              A versatile skill set spanning full-stack development, databases, and modern tooling.
            </p>
          </div>

          <div className="about__skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="about__skill-group">
                <h3 className="about__skill-category">{category}</h3>
                <ul className="about__skill-list">
                  {items.map((skill) => (
                    <li key={skill} className="about__skill-tag">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="about__tools-row">
            <div className="about__tools">
              <span className="about__tools-label">AI Tools:</span>
              {aiTools.map((t) => <span key={t} className="about__tool-tag">{t}</span>)}
            </div>
            <div className="about__tools">
              <span className="about__tools-label">Build Tools:</span>
              {buildTools.map((t) => <span key={t} className="about__tool-tag">{t}</span>)}
            </div>
          </div>
        </div>

        {/* ── Education ── */}
        <div className="about__block">
          <div className="about__section-label">
            <span className="about__badge">✦ Academic</span>
            <h2 className="about__title">Education</h2>
          </div>
          <div className="about__edu-list">
            {education.map((edu) => (
              <div key={edu.degree} className="about__edu-card">
                <div className="about__edu-dot" aria-hidden="true" />
                <div className="about__edu-body">
                  <div className="about__edu-top">
                    <h3 className="about__edu-degree">{edu.degree}</h3>
                    <span className="about__edu-pct">{edu.result}</span>
                  </div>
                  <p className="about__edu-inst">{edu.institution}</p>
                  <span className="about__edu-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Training ── */}
        <div className="about__block">
          <div className="about__section-label">
            <span className="about__badge">✦ Certifications</span>
            <h2 className="about__title">Training &amp; Certifications</h2>
          </div>
          <div className="about__training-list">
            {training.map((t) => (
              <a
                key={t.course}
                href={t.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about__training-card"
                title="Click to view certificate"
              >
                <span className="about__training-icon">🎓</span>
                <div className="about__training-text">
                  <p className="about__training-course">{t.course}</p>
                  <span className="about__training-inst">{t.institute}</span>
                </div>
                <span className="about__training-link-badge">
                  View Certificate <span>↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
