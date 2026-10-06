import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      {/* Top Compliance & Domain Banner */}
      <div className="top-utility-bar">
        <div className="container utility-content">
          <div className="domain-pill">
            <span className="domain-canonical">CANONICAL: medicalpracticewatch.org</span>
            <span className="domain-mirror">| MIRROR: medicalpracticewatch.in</span>
          </div>

          <div className="utility-actions">
            <span className="public-record-tag">
              {language === "hi" ? "सार्वजनिक अभिलेख" : "PUBLIC RECORD"}
            </span>
            <button 
              type="button" 
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              title={language === "hi" ? "Switch to English" : "हिन्दी में बदलें"}
              aria-label="Toggle language"
            >
              <span className={language === "hi" ? "active-lang" : ""}>हिन्दी</span>
              <span className="lang-divider">/</span>
              <span className={language === "en" ? "active-lang" : ""}>ENG</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div className="masthead-bar">
        <div className="container masthead-content">
          <Link to="/" className="brand-lockup" onClick={closeMenu}>
            <div className="brand-crest">MPW</div>
            <div className="brand-text">
              <span className="brand-title">
                {language === "hi" ? "मेडिकल प्रैक्टिस वॉच" : "MEDICAL PRACTICE WATCH"}
              </span>
              <span className="brand-strapline">
                {language === "hi" 
                  ? "स्वास्थ्य साख, संस्थागत नेटवर्क और सांविधिक कार्रवाई का स्वतंत्र अभिलेख"
                  : "Independent Public Record of Healthcare Credentials, Networks & Statutory Enforcement"}
              </span>
            </div>
          </Link>

          {/* Mobile menu trigger */}
          <button 
            type="button" 
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </div>

      {/* Primary Navigation - Strictly 6 Items Ceiling */}
      <nav className={`primary-nav ${mobileMenuOpen ? "open" : ""}`} aria-label="Main Navigation">
        <div className="container nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}
              >
                {t.nav.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/investigations" 
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}
              >
                {t.nav.investigations}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/networks" 
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}
              >
                {t.nav.networks}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/enforcement" 
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}
              >
                {t.nav.enforcement}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/numbers" 
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}
              >
                {t.nav.numbers}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/method" 
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenu}
              >
                {t.nav.method}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;