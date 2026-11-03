import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

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
            Have a project in mind or want to collaborate? Drop me a message — I&apos;d love to hear from you!
          </p>
        </div>

        <div className="contact__layout">
          {/* Info */}
          <div className="contact__info">
            <a href="mailto:waghmareanjali328@gmail.com" className="contact__info-card">
              <span className="contact__info-icon">📧</span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">waghmareanjali328@gmail.com</p>
              </div>
            </a>
            <a href="tel:+917057024755" className="contact__info-card">
              <span className="contact__info-icon">📞</span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-value">+91-7057024755</p>
              </div>
            </a>
            <div className="contact__info-card">
              <span className="contact__info-icon">📍</span>
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">Manewada Road, Nagpur</p>
              </div>
            </div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-card"
            >
              <span className="contact__info-icon">🐙</span>
              <div>
                <p className="contact__info-label">GitHub</p>
                <p className="contact__info-value">github.com/anjali-waghmare</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form id="contact-form" className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Name</label>
                <input id="contact-name" type="text" className="contact__input" placeholder="Your name" required />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email</label>
                <input id="contact-email" type="email" className="contact__input" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__label">Subject</label>
              <input id="contact-subject" type="text" className="contact__input" placeholder="Project idea / collaboration" />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea id="contact-message" className="contact__textarea" rows={5} placeholder="Tell me about your project..." required />
            </div>

            <button id="contact-submit" type="submit" className={`contact__btn${sent ? " contact__btn--sent" : ""}`}>
              {sent ? "✓ Message Sent!" : (<>Send Message <span>→</span></>)}
            </button>
          </form>
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
