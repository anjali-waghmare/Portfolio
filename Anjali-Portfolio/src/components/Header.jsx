import { useState, useEffect } from "react";
import "./Header.css";

const navLinks = [
  { label: "Home",       href: "#home"       },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "About",      href: "#about"      },
  { label: "Contact",    href: "#contact"    },
];


function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <header className={`hdr${scrolled ? " hdr--glass" : ""}`}>
      <div className="hdr__inner">

        {/* Logo */}
        <a href="#home" className="hdr__logo" onClick={() => handleNav("Home")}>
          <span className="hdr__logo-star">✦</span>
          <span className="hdr__logo-name">Anjali</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hdr__nav" aria-label="Main navigation">
          <ul className="hdr__nav-list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  id={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  href={href}
                  className={`hdr__nav-link${activeLink === label ? " hdr__nav-link--active" : ""}`}
                  onClick={() => handleNav(label)}
                >
                  {label}
                  <span className="hdr__nav-pill" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a href="#contact" className="hdr__cta" onClick={() => handleNav("Contact")}>
          Hire&nbsp;Me <span className="hdr__cta-arrow">→</span>
        </a>

        {/* Hamburger */}
        <button
          className={`hdr__burger${menuOpen ? " hdr__burger--open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`hdr__drawer${menuOpen ? " hdr__drawer--open" : ""}`}>
        <ul className="hdr__drawer-list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                id={`mob-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
                href={href}
                className={`hdr__drawer-link${activeLink === label ? " hdr__drawer-link--active" : ""}`}
                onClick={() => handleNav(label)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="hdr__drawer-cta" onClick={() => handleNav("Contact")}>
              Hire Me →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
