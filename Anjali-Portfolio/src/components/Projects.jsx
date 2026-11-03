import "./Projects.css";

const projects = [
  {
    id: "tasty-burger",
    title: "Tasty Burger",
    description:
      "Developed a high-performance, multi-page food industry website using React.js and Vite. Implemented a fully responsive UI using React-Bootstrap, featuring dynamic navigation and smooth interactions.",
    tags: ["React.js", "Vite", "React-Bootstrap", "HTML5", "CSS3"],
    liveUrl: "https://tasty-burger-bice.vercel.app/",
    codeUrl: "https://github.com/",
    accent: "#e0e0e0",
    icon: "🍔",
    period: "Mar 2026",
  },
  {
    id: "draquagalaxy",
    title: "Dr. Aqua Galaxy",
    description:
      "Engineered a high-performance web interface using React.js to present water purification solutions, features, and client inquiry systems. Developed reusable, state-driven UI components with responsive navigation, interactive forms, and optimized asset loading.",
    tags: ["React.js", "Vite", "React-Bootstrap", "JavaScript (ES6+)"],
    liveUrl: "https://draquagalaxy.in/",
    codeUrl: "https://github.com/",
    accent: "#38bdf8",
    icon: "🫧",
    period: "Mar 2024 – Apr 2024",
  },
  {
    id: "foodie-website",
    title: "Foodie Website",
    description:
      "Created a responsive food showcasing application with interactive menu filtering and image sliders. Clean, modern UI built with Bootstrap 5 for a seamless experience across all devices.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    liveUrl: "https://foodie-website-inky.vercel.app/",
    codeUrl: "https://github.com/",
    accent: "#c8c8c8",
    icon: "🍽️",
    period: "May 2025 – Jul 2025",
  },
];

function Projects() {
  return (
    <section id="projects" className="proj">
      {/* Background blobs */}
      <div className="proj__blob proj__blob--1" aria-hidden="true" />
      <div className="proj__blob proj__blob--2" aria-hidden="true" />

      <div className="proj__inner">
        {/* Heading */}
        <div className="proj__header">
          <span className="proj__badge">✦ My Work</span>
          <h2 className="proj__title">Featured Projects</h2>
          <p className="proj__subtitle">
            A selection of modern web applications and responsive platforms I&rsquo;ve built.
          </p>
        </div>

        {/* Cards */}
        <div className="proj__grid">
          {projects.map(({ id, title, description, tags, liveUrl, codeUrl, accent, icon, period }) => (
            <article key={id} id={`project-${id}`} className="proj__card">

              {/* Banner */}
              <div className="proj__card-img-wrap">
                <div className="proj__card-icon-display">
                  <span className="proj__card-emoji">{icon}</span>
                  <span className="proj__card-icon-title">{title}</span>
                </div>
                <div className="proj__card-overlay" />
                <span className="proj__card-dot" style={{ background: accent }} />
              </div>

              {/* Body */}
              <div className="proj__card-body">
                <div className="proj__card-title-row">
                  <h3 className="proj__card-title" style={{ color: accent }}>{title}</h3>
                  <span className="proj__card-period">{period}</span>
                </div>
                <p className="proj__card-desc">{description}</p>

                {/* Tags */}
                <ul className="proj__tags" aria-label="Tech stack">
                  {tags.map((tag) => (
                    <li key={tag} className="proj__tag">{tag}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="proj__links">
                  <a
                    href={liveUrl}
                    id={`live-${id}`}
                    className="proj__link proj__link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={codeUrl}
                    id={`code-${id}`}
                    className="proj__link proj__link--outline"
                    style={{ borderColor: `${accent}55`, color: accent }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
