import ScrollToTopLink from "../../ScrollToTop";
import doenca from "../../assets/doenca.png";
import acidente from "../../assets/acidente.png";
import bpc from "../../assets/bpc.png";

import "./cardsRouter.css";

const cards = [
  {
    icon: doenca,
    alt: "Imagem de uma pessoa doente.",
    title: "AUXÍLIO-DOENÇA",
    description:
      "Também chamado de Benefício por Incapacidade Temporária, é o benefício pago pelo INSS para quem está temporariamente incapacitado para trabalhar por causa de doença ou acidente. Funciona como uma licença médica remunerada, que garante uma renda enquanto você se recupera.",
    path: "/Auxilio-Doenca",
  },
  {
    icon: acidente,
    alt: "Imagem de uma pessoa sofrendo um acidente.",
    title: "AUXÍLIO ACIDENTE",
    description:
      "É o benefício pago pelo INSS para quem sofreu um acidente de trabalho, desenvolveu uma doença ocupacional ou acidente de qualquer natureza (ex: acidente de trânsito) e, por isso, ficou com alguma sequela que o impede de realizar algumas atividades. Este benefício funciona como uma indenização por dano sofridos.",
    path: "/Auxilio-Acidente",
  },
  {
    icon: bpc,
    alt: "Imagem de uma pessoa com limitação de mobilidade conversando com outra pessoa.",
    title: "BPC LOAS",
    description:
      "O Benefício de Prestação Continuada é um benefício assistencial para pessoas de baixa renda. Ele se divide em IDOSO, para maiores de 65 anos, e DEFICIÊNCIA, para quem tem impedimento de longo prazo, sem condições de trabalho, não importa a idade.",
    path: "/BPC-Loas",
  },
];

const CardsRouter = () => {
  return (
    <aside className="aside">
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} className="cards-router">
            <img src={card.icon} alt={card.alt} />
            <h3>
              <strong>{card.title}</strong>
            </h3>
            <p>{card.description}</p>
            <ScrollToTopLink className="card-btn" to={card.path}>
              Saiba Mais
            </ScrollToTopLink>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CardsRouter;
