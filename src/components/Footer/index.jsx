import { Link } from "react-router-dom";
import ScrollToTopLink from "../../ScrollToTop";
import logo from "../../assets/logo.png";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="brand">
            <img src={logo} alt="Logomarca do escritório Mendonça advocacia." />
            <h4>
              Com quase uma década de experiência na área previdenciária,
              oferecemos um atendimento personalizado e especializado para cada
              cliente. Conte conosco para garantir seus direitos e conquistar a
              aposentadoria que você merece. Entre em contato e agende uma
              consulta!
            </h4>
          </div>

          <div className="social-network">
            <h4>Contatos</h4>
            <a href="https://wa.me/5551980582577?text=Ol%C3%A1" target="_blank">
              <LuPhoneCall /> <span>(51) 98058-2577</span>
            </a>
            <a href="https://wa.me/5551980582577?text=Ol%C3%A1" target="_blank">
              <FaWhatsapp /> <span>(51) 98058-2577</span>
            </a>
            <a href="mailto:contato@mendoncadv.com.br">
              <LuMail /> <span>contato@mendoncadv.com.br</span>
            </a>
          </div>

          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/">
                  <ScrollToTopLink to="/">Início</ScrollToTopLink>
                </Link>
              </li>
              <li>
                <ScrollToTopLink to="/Auxilio-Doenca">
                  Auxílio-Doença
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/Auxilio-Acidente">
                  Auxílio Acidente
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/BPC-Loas">BPC Loas</ScrollToTopLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>©2024 Mendonça Advocacia. Todos os direitos reservados.</p>
          <span>
            Esse site não faz parte do Google LLC, Facebook Inc. e/ou de
            serviços oficiais do Governo Federal. Atuação exclusiva com serviços
            jurídicos.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
