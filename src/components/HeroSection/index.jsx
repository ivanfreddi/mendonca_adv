import React from "react";
import hero from "../../assets/banner_hero.jpg";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div>
      <section id="hero">
        <img src={hero} alt="" />
        <div className="container">
          <div className="hero-content">
            <h1>
              <strong>Você precisa de ajuda com o INSS?</strong>
            </h1>
            <div className="hero-h3">
              <h3>
                Com anos de experiência e advogados especialistas em
                Previdência, já ajudamos milhares de pessoas com seus
                benefícios, pensões por morte e aposentadorias.
              </h3>

              <h3>
                <strong>
                  Temos a solução que você precisa para garantir seus direitos
                  com o INSS tranquilamente.
                </strong>
              </h3>
            </div>
            <a
              href="https://wa.me/5551980582577?text=Ol%C3%A1"
              target="_blank"
              className="hero-btn"
            >
              FALE COM UM ESPECIALISTA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
