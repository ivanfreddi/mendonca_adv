import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollToTopLink from "../ScrollToTop";
import logo from "../assets/logo.png";
import "../components/Header/header.css";

const HeaderPages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className={`navbar-header ${menuOpen ? "open" : ""}`}>
          <a
            href="https://mendoca-adv.vercel.app/"
            className="logotype"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Logomarca do escritório Mendonça advocacia. "
            />
          </a>
          <ul className={`header-ul ${menuOpen ? "open" : ""}`}>
            <li>
              <a
                href="https://mendoca-adv.vercel.app/"
                className="nav-link"
                onClick={closeMenu}
              >
                Início
              </a>
            </li>
            <li>
              <ScrollToTopLink
                to="/Auxilio-Doenca"
                className="nav-link"
                onClick={closeMenu}
              >
                Auxílio-Doença
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink
                to="/Auxilio-Acidente"
                className="nav-link"
                onClick={closeMenu}
              >
                Auxílio Acidente
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink
                to="/BPC-Loas"
                className="nav-link"
                onClick={closeMenu}
              >
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
