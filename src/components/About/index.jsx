import about from "../../assets/about.jpg";
import aboutWebp from "../../assets/about.webp";
import "./about.css";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">
          <strong>
            Sabe como garantir o seu futuro financeiro para você e sua família?
          </strong>
        </h2>
        <div className="about-content">
          <picture>
            <source srcSet={aboutWebp} type="image/webp" />
            <img
              src={about}
              alt="Duas pessoas em um ambiente corporativo conversando sobre planejamento previdenciário"
              width="380"
              height="475"
              loading="lazy"
            />
          </picture>
          <div className="about-right">
            <h3>Conte conosco!</h3>
            <div className="about-text">
              <p>
                Na Mendonça Advocacia você terá o amparo necessário para o
                encaminhamento de seu benefício previdenciário, com qualidade,
                agilidade e garantia de seus direitos.
              </p>
              <p>
                Nossa equipe está pronta para te auxiliar em todas as etapas do
                processo, desde a análise do seu caso até a conquista do seu
                direito.
              </p>
              <p>
                Clique abaixo para falar conosco e fazer parte da gama de
                clientes de um escritório com tradição e milhares de clientes
                satisfeitos em todo o Brasil.
              </p>
            </div>
            <a
              href="#contact"
              className="about-btn"
              aria-label="Clique para falar conosco sobre seu benefício previdenciário"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
