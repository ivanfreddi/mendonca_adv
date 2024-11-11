import ScrollToTopLink from "../../ScrollToTop";
import logo from "../../assets/logo.png";
import logoWebp from "../../assets/logo.webp";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="brand">
            <picture>
              <source srcSet={logoWebp} type="image/wepb" />
              <img
                src={logo}
                alt="Logomarca do escritório Mendonça advocacia."
                width="227"
                height="60"
              />
            </picture>
            <p className="brand-description">
              Com quase uma década de experiência na área previdenciária,
              oferecemos um atendimento personalizado e especializado para cada
              cliente. Conte conosco para garantir seus direitos e conquistar a
              aposentadoria que você merece. Entre em contato e agende uma
              consulta!
            </p>
          </div>

          <div className="social-network">
            <h2 className="contact-title">Contatos</h2>

            <ul className="contact-list" aria-label="Lista de contatos">
              <li>
                <a
                  href="https://wa.me/5551980582577?text=Ol%C3%A1"
                  target="_blank"
                  aria-label="Ligar para nosso telefone"
                >
                  <LuPhoneCall /> <span>(51) 98058-2577</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5551980582577?text=Ol%C3%A1"
                  target="_blank"
                  aria-label="Enviar mensagem pelo WhatsApp"
                >
                  <FaWhatsapp /> <span>(51) 98058-2577</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@mendoncadv.com.br"
                  aria-label="Enviar e-mail"
                >
                  <LuMail /> <span>contato@mendoncadv.com.br</span>
                </a>
              </li>
            </ul>
          </div>

          <nav className="footer-nav">
            <ul aria-label="Menu de navegação do rodapé">
              <li>
                <ScrollToTopLink to="/">Início</ScrollToTopLink>
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

        <div className="footer-bottom" aria-label="Informações legais">
          <p className="copyright">
            ©{currentYear} Mendonça Advocacia. Todos os direitos reservados.
          </p>
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
