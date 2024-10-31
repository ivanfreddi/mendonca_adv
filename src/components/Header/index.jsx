import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
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
        <nav className={`navbar-header ${menuOpen ? "open" : ""}`}>
          <a href="#" className="logotype" onClick={closeMenu}>
            <img
              src={logo}
              alt="Logomarca do escritório Mendonça advocacia. "
            />
          </a>
          <ul className={`header-ul ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#" className="nav-link" onClick={closeMenu}>
                Início
              </a>
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
            >
              <span className={`nav-link ${dropdownOpen ? "open" : ""}`}>
                Consultorias Especializadas
                <span className="dropdown-arrow">
                  <RiArrowDownSLine />
                </span>
                <ul className={`submenu ${dropdownOpen ? "open" : ""}`}>
                  <li>
                    <Link
                      to="/Auxilio-Doenca"
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      Auxílio-Doença
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Auxilio-Acidente"
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      Auxílio Acidente
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/BPC-Loas"
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      BPC Loas
                    </Link>
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

export default Header;
