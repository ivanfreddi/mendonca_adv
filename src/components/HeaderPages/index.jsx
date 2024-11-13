import { useState } from "react";
import ScrollToTopLink from "../../ScrollToTop";
import logo from "../../assets/logo.png";
import logoWebp from "../../assets/logo.webp";
import "../Header/header.css";

const HeaderPages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className={`navbar-header ${menuOpen ? "open" : ""}`}>
          <ScrollToTopLink
            to="/"
            className="logotype"
            aria-label="ir para página inicial"
          >
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logo}
                alt="Mendonça Advocacia"
                width="227"
                height="50"
              />
            </picture>
          </ScrollToTopLink>
          <ul className={`header-ul ${menuOpen ? "open" : ""}`}>
            <li>
              <ScrollToTopLink to="/" className="nav-link">
                Início
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/Auxilio-Doenca" className="nav-link">
                Auxílio-Doença
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/Auxilio-Acidente" className="nav-link">
                Auxílio-Acidente
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/BPC-Loas" className="nav-link">
                BPC Loas
              </ScrollToTopLink>
            </li>
          </ul>
        </nav>
        <div
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <div className="menu-btn_burger"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPages;
