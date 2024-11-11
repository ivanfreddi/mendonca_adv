import whatsapp from "../../assets/whatsapp.png";
import whatsappWebp from "../../assets/whatsapp.webp";

import "./whatsappButton.css";

const WhatsappButton = () => {
  return (
    <a
      className="whatsapp-btn "
      href="https://wa.me/5551980582577?text=Ol%C3%A1"
      target="_blank"
      aria-label="Enviar mensagem pelo WhatsApp"
    >
      <picture>
        <source srcSet={whatsappWebp} type="image/wepb" />
      </picture>
      <img src={whatsapp} alt="WhatsApp" title="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;
