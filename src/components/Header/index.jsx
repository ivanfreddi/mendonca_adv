import ScrollToTopLink from "../../ScrollToTop";
import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import logoWebp from "../../assets/logo.webp";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 798);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 798);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setDropdownOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav
          className={`navbar-header ${menuOpen ? "open" : ""}`}
          aria-label="Navegação principal"
        >
          <ScrollToTopLink
            to="/"
            className="logotype"
            onClick={closeMenu}
            aria-label="ir para página inicial"
          >
            <picture>
              <source srcSet={logoWebp} type="image/web" />
              <img
                src={logo}
                alt="Mendonça Advocacia"
                width="227"
                height="60"
              />
            </picture>
          </ScrollToTopLink>
          <ul
            className={`header-ul ${menuOpen ? "open" : ""}`}
            aria-label="Links do menu principal"
            id="main-nav"
          >
            <li>
              <ScrollToTopLink to="/" className="nav-link" onClick={closeMenu}>
                Início
              </ScrollToTopLink>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={closeMenu}>
                Serviços
              </a>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="submenu"
            >
              <span
                className={`nav-link ${dropdownOpen ? "open" : ""}`}
                tabIndex={0}
              >
                Consultorias Especializadas
                <span className="dropdown-arrow">
                  <RiArrowDownSLine />
                </span>
                <ul
                  id="submenu"
                  className={`submenu ${dropdownOpen ? "open" : ""}`}
                  aria-label="Links do submenu consultorias especializadas"
                >
                  <li>
                    <ScrollToTopLink to="/Auxilio-Doenca" className="nav-link">
                      Auxílio-Doença
                    </ScrollToTopLink>
                  </li>
                  <li>
                    <ScrollToTopLink
                      to="/Auxilio-Acidente"
                      className="nav-link"
                    >
                      Auxílio-Acidente
                    </ScrollToTopLink>
                  </li>
                  <li>
                    <ScrollToTopLink to="/BPC-Loas" className="nav-link">
                      BPC Loas
                    </ScrollToTopLink>
                  </li>
                </ul>
              </span>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
          aria-label="Menu principal"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <div className="menu-btn_burger"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
