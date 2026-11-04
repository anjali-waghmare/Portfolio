import { useState, useEffect } from "react";
import apnaCollegeCert from "../assets/Apna College.png";
import rseCert from "../assets/RSE IT Solution.png";
import "./Experience.css";

const timeline = [
  {
    role: "MERN Stack Developer",
    company: "Sky Vision IT Solution Pvt Ltd",
    period: "Feb 2026 - July 2026",
    location: "Nagpur, MH",
    type: "Internship",
    highlights: [
      "Developed hands-on web development projects using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      "Strengthened technical expertise and gained practical insights into the software development lifecycle.",
      "Collaborated in a team environment, applying agile practices and collaborative teamwork.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    role: "React JS Trainee",
    company: "Apna College",
    period: "August 2025 - Feb 2026",
    location: "Online",
    type: "Training",
    highlights: [
      "Gained proficiency in modern web technologies, focusing on React.js, JavaScript (ES6+), and responsive UI design.",
      "Developed a deep understanding of component lifecycles, state management, and building scalable frontend structures.",
    ],
    tech: ["React.js", "JavaScript", "ES6+", "HTML5", "CSS3"],
  },
  {
    role: "React JS Developer (OJT)",
    company: "RSE IT Solution",
    period: "Mar 2024 - May 2024",
    location: "Nagpur, MH",
    type: "OJT",
    highlights: [
      "Completed hands-on OJT in React.js for industrial-level projects.",
      "Built dynamic, responsive web applications including a student portal with component-based architecture.",
    ],
    tech: ["React.js", "JavaScript", "CSS3", "HTML5"],
  },
];

const education = [
  {
    degree: "MSc in Computer Science",
    institution: "Dr. S.C. Gulhane Prerna Mahavidyalaya, Nagpur",
    period: "Sept 2023 - June 2025",
    result: "CGPA 6.34",
    icon: "\uD83C\uDF93",
  },
  {
    degree: "BSc in Computer Science",
    institution: "K.R. Pandav Mahavidyalaya, Nagpur",
    period: "Sept 2017 - Aug 2021",
    result: "61.96%",
    icon: "\uD83C\uDF93",
  },
];

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Apna College",
    year: "2026",
    icon: "\uD83C\uDFC5",
    color: "#f0b429",
    image: apnaCollegeCert,
    fileUrl: "/certificates/Apna-College.png",
  },
  {
    title: "React.js Developer",
    issuer: "RSE IT Solution",
    year: "2024",
    icon: "\uD83C\uDFC5",
    color: "#38bdf8",
    image: rseCert,
    fileUrl: "/certificates/RSE-IT-Solution.png",
  },
];

const TABS = [
  { id: "work",  label: "Work",           icon: "\uD83D\uDCBC" },
  { id: "edu",   label: "Education",      icon: "\uD83C\uDF93" },
  { id: "certs", label: "Certifications", icon: "\uD83C\uDFC5" },
];

const TYPE_COLOR = {
  Internship: "#f0b429",
  Training:   "#fb923c",
  OJT:        "#34d399",
};

function Experience() {
  const [activeTab, setActiveTab] = useState("work");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <section id="experience" className="exp">
      <div className="exp__blob exp__blob--1" aria-hidden="true" />
      <div className="exp__blob exp__blob--2" aria-hidden="true" />

      <div className="exp__inner">
        <div className="exp__header">
          <span className="exp__badge">&#x2728; Journey</span>
          <h2 className="exp__title">Experience</h2>
          <p className="exp__subtitle">
            A timeline of roles, education and certifications that shaped my craft.
          </p>
        </div>

        <nav className="exp__nav" aria-label="Experience sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={`exp-tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`exp__tab${activeTab === tab.id ? " exp__tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="exp__tab-icon">{tab.icon}</span>
              <span className="exp__tab-label">{tab.label}</span>
            </button>
          ))}
          <span
            className="exp__nav-slider"
            style={{ "--tab-index": TABS.findIndex((t) => t.id === activeTab) }}
            aria-hidden="true"
          />
        </nav>

        {activeTab === "work" && (
          <div className="exp__panel" role="tabpanel" aria-labelledby="exp-tab-work">
            <div className="exp__timeline">
              {timeline.map((item, i) => (
                <article key={i} className="exp__card">
                  <div className="exp__card-stripe" style={{ "--stripe": TYPE_COLOR[item.type] }} />
                  <div className="exp__card-body">
                    <div className="exp__card-top">
                      <div>
                        <h3 className="exp__card-role">{item.role}</h3>
                        <p className="exp__card-company">{item.company}</p>
                      </div>
                      <div className="exp__card-meta">
                        <span className="exp__card-type" style={{ "--type-color": TYPE_COLOR[item.type] }}>
                          {item.type}
                        </span>
                        <span className="exp__card-period">{item.period}</span>
                        <span className="exp__card-location">&#x1F4CD; {item.location}</span>
                      </div>
                    </div>
                    <ul className="exp__card-list">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="exp__card-item">
                          <span className="exp__card-bullet" aria-hidden="true">&#x2713;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="exp__card-tags">
                      {item.tech.map((tag) => (
                        <span key={tag} className="exp__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeTab === "edu" && (
          <div className="exp__panel" role="tabpanel" aria-labelledby="exp-tab-edu">
            <div className="exp__edu-grid">
              {education.map((edu, i) => (
                <div key={i} className="exp__edu-card">
                  <div className="exp__edu-icon">{edu.icon}</div>
                  <div className="exp__edu-body">
                    <h3 className="exp__edu-degree">{edu.degree}</h3>
                    <p className="exp__edu-inst">{edu.institution}</p>
                    <div className="exp__edu-foot">
                      <span className="exp__edu-period">{edu.period}</span>
                      <span className="exp__edu-result">{edu.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "certs" && (
          <div className="exp__panel" role="tabpanel" aria-labelledby="exp-tab-certs">
            <div className="exp__cert-grid">
              {certifications.map((cert, i) => (
                <div key={i} className="exp__cert-card">
                  <div className="exp__cert-glow" style={{ "--cert-color": cert.color }} />

                  {/* Thumbnail */}
                  <div
                    className="exp__cert-thumb-wrap"
                    onClick={() => setSelectedCert(cert)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Preview ${cert.title} certificate`}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="exp__cert-thumb"
                      loading="lazy"
                    />
                    <div className="exp__cert-thumb-overlay">
                      <span className="exp__cert-thumb-zoom">🔍 Click to Preview</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="exp__cert-info">
                    <div className="exp__cert-meta">
                      <span className="exp__cert-year">{cert.year}</span>
                      <span className="exp__cert-issuer-badge" style={{ "--cert-color": cert.color }}>
                        {cert.issuer}
                      </span>
                    </div>
                    <h3 className="exp__cert-title">{cert.title}</h3>
                  </div>

                  {/* Actions */}
                  <div className="exp__cert-actions">
                    <button
                      type="button"
                      className="exp__cert-btn exp__cert-btn--preview"
                      onClick={() => setSelectedCert(cert)}
                      style={{ "--cert-color": cert.color }}
                    >
                      Preview Certificate <span>👁️</span>
                    </button>
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp__cert-btn exp__cert-btn--full"
                      aria-label="Open certificate in new tab"
                    >
                      Full Size <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCert && (
          <div
            className="exp__modal-backdrop"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <div
              className="exp__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="exp__modal-header">
                <div>
                  <h3 id="cert-modal-title" className="exp__modal-title">
                    {selectedCert.title}
                  </h3>
                  <p className="exp__modal-subtitle">
                    {selectedCert.issuer} · {selectedCert.year}
                  </p>
                </div>
                <div className="exp__modal-actions">
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp__modal-action-btn"
                    download
                  >
                    Download ⬇
                  </a>
                  <button
                    type="button"
                    className="exp__modal-close"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate preview"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="exp__modal-img-wrap">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="exp__modal-img"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;