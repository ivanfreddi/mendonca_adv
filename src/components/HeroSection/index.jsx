import React, { useState, useEffect } from "react";
import hero from "../../assets/banner_hero.jpg";
import heroMobile from "../../assets/banner_hero_mobile.jpg";
import heroWebp from "../../assets/banner_hero.webp";
import heroMobileWebp from "../../assets/banner_hero_mobile.webp";
import "./heroSection.css";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(hero);
  const [currentImageWebp, setCurrentImageWebp] = useState(heroWebp);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentImage(heroMobile);
        setCurrentImageWebp(heroMobileWebp);
      } else {
        setCurrentImage(hero);
        setCurrentImageWebp(heroWebp);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main id="hero" aria-label="Seção principal sobre assistência com INSS">
      <picture>
        <source srcSet={currentImageWebp} type="image/webp" />
        <img
          src={currentImage}
          aria-hidden="true"
          alt=""
          width="100%"
          height="700"
          loading="eager"
        />
      </picture>
      <div className="container">
        <div className="hero-content">
          <h1>
            <strong>Você precisa de ajuda com o INSS ?</strong>
          </h1>
          <div
            className="hero-description"
            aria-label="Descrição dos nossos serviços"
          >
            <p>
              Com anos de experiência e advogados especialistas em Previdência,
              já ajudamos milhares de pessoas com seus benefícios, pensões por
              morte e aposentadorias.
            </p>
            <p>
              <strong>
                Temos a solução que você precisa para garantir seus direitos com
                o INSS tranquilamente.
              </strong>
            </p>
          </div>
          <a
            href="https://wa.me/5551980582577?text=Ol%C3%A1"
            target="_blank"
            aria-label="Fale com um especialista via WhatsApp"
            className="hero-btn"
          >
            FALE COM UM ESPECIALISTA
          </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
