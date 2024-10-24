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
            <img src={logo} alt="" />
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
            <a href="">
              <LuPhoneCall /> <span>(51) 98058-2577</span>
            </a>
            <a href="">
              <FaWhatsapp /> <span>(51) 98058-2577</span>
            </a>
            <a href="">
              <LuMail /> <span>contato@mendocadv.com.br</span>
            </a>
          </div>

          <nav className="footer-nav">
            <ul>
              <li>
                <a href="">Início</a>
              </li>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
              <li>
                <a href="">Auxílio-Doença</a>
              </li>
              <li>
                <a href="">Auxílio Acidente</a>
              </li>
              <li>
                <a href="">BPC Loas</a>
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
