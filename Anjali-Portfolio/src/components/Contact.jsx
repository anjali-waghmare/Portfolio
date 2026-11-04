import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__blob contact__blob--1" aria-hidden="true" />
      <div className="contact__blob contact__blob--2" aria-hidden="true" />

      <div className="contact__inner">
        {/* Heading */}
        <div className="contact__header">
          <span className="contact__badge">✦ Let&apos;s Talk</span>
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            Have a project in mind, an opportunity, or just want to connect? Reach out anytime!
          </p>
        </div>

        <div className="contact__layout">
          {/* Info Cards Grid */}
          <div className="contact__info">
            <a href="mailto:waghmareanjali328@gmail.com" className="contact__info-card">
              <span className="contact__info-icon">📧</span>
              <div className="contact__info-text">
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">waghmareanjali328@gmail.com</p>
              </div>
              <span className="contact__info-arrow" aria-hidden="true">↗</span>
            </a>

            <a href="tel:+917057024755" className="contact__info-card">
              <span className="contact__info-icon">📞</span>
              <div className="contact__info-text">
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-value">+91-7057024755</p>
              </div>
              <span className="contact__info-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/anjali-waghmare"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card"
            >
              <span className="contact__info-icon">💼</span>
              <div className="contact__info-text">
                <p className="contact__info-label">LinkedIn</p>
                <p className="contact__info-value">linkedin.com/in/anjali-waghmare</p>
              </div>
              <span className="contact__info-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/anjali-waghmare"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card"
            >
              <span className="contact__info-icon">🐙</span>
              <div className="contact__info-text">
                <p className="contact__info-label">GitHub</p>
                <p className="contact__info-value">github.com/anjali-waghmare</p>
              </div>
              <span className="contact__info-arrow" aria-hidden="true">↗</span>
            </a>

            <div className="contact__info-card contact__info-card--wide">
              <span className="contact__info-icon">📍</span>
              <div className="contact__info-text">
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">Manewada Road, Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="contact__footer">
        <p>© 2026 <strong>Anjali Waghmare</strong> · Built with React &amp; Vite</p>
      </div>
    </section>
  );
}

export default Contact;
