import idade from "../../assets/idade.jpg";
import contribuicao from "../../assets/contribuicao.jpg";
import deficiencia from "../../assets/deficiencia.jpg";
import especial from "../../assets/especial.jpg";
import morte from "../../assets/morte.jpg";
import planejamento from "../../assets/planejamento.jpg";
import idadeWebp from "../../assets/idade.webp";
import contribuicaoWebp from "../../assets/contribuicao.webp";
import deficienciaWebp from "../../assets/deficiencia.webp";
import especialWebp from "../../assets/especial.webp";
import morteWebp from "../../assets/morte.webp";
import planejamentoWebp from "../../assets/planejamento.webp";

import "./services.css";

const servicesCards = [
  {
    image: idade,
    imageWebp: idadeWebp,
    alt: "Senhor idoso sorrindo, representando o público-alvo da aposentadoria por idade",
    title: "Aposentadoria por Idade",
    description:
      "É o benefício concedido aos contribuintes que atingem a idade mínima estabelecida pela lei e cumprem os requisitos de contribuição. Poderá ser Urbana, Rural ou para Pessoas com Deficiência.",
  },
  {
    image: contribuicao,
    imageWebp: contribuicaoWebp,
    alt: "Casal analisando documentos previdenciários juntos",
    title: "Aposentadoria por Tempo de Contribuição",
    description:
      "É o benefício concedido aos trabalhadores que comprovarem um tempo mínimo de contribuição à Previdência Social, sem exigência de idade mínima. É levado em consideração o tempo que você dedicou ao trabalho e contribuiu para o sistema.",
  },
  {
    image: deficiencia,
    imageWebp: deficienciaWebp,
    alt: "Mulher em cadeira de rodas sorrindo em ambiente profissional",
    title: "Aposentadoria da Pessoa com Deficiência",
    description:
      "É o benefício especial concedido aos trabalhadores que possuem alguma deficiência física, mental, intelectual ou sensorial que os impeça, parcial ou totalmente, de exercer suas atividades laborais. Poderá ser por idade ou por tempo de contribuição.",
  },
  {
    image: especial,
    imageWebp: especialWebp,
    alt: "Profissional utilizando equipamentos de proteção em ambiente de trabalho especial",
    title: "Aposentadoria Especial",
    description:
      "É o benefício previdenciário concedido aos trabalhadores que exercem suas atividades em condições prejudiciais à saúde ou à integridade física, ou seja, em contato com agentes nocivos como ruído, calor excessivo, produtos químicos, entre outros.",
  },
  {
    image: morte,
    imageWebp: morteWebp,
    alt: "Representação sensível do tema pensão por morte com duas pessoas em momento de reflexão",
    title: "Pensão por Morte",
    description:
      "É o benefício concedido aos dependentes do contribuinte que faleceu e era segurado da Previdência Social. Esse benefício tem como objetivo garantir uma renda para aqueles que dependiam financeiramente da pessoa falecida.",
  },
  {
    image: planejamento,
    imageWebp: planejamentoWebp,
    alt: "Pessoa estudando documentos previdenciários para planejamento futuro",
    title: "Planejamento Previdenciário",
    description:
      'Quer ter a segurança da concessão da melhor aposentadoria para seu caso? Então o planejamento previdenciário é o ideal para você. Ele é um estudo detalhado da sua história contributiva na Previdência Social, com o objetivo de identificar a melhor estratégia para você se aposentar. É o "mapa do tesouro" que te guia até a aposentadoria ideal.',
  },
];

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading">
          <strong>Quais benefícios você está procurando?</strong>
        </h2>
        <div
          className="services-cards"
          aria-label="Lista de serviços previdenciários disponíveis"
        >
          {servicesCards.map((card, index) => (
            <div key={index} className="cards">
              <picture>
                <source srcSet={card.imageWebp} type="image/webp" />
                <img
                  src={card.image}
                  alt={card.alt}
                  width="320"
                  height="370"
                  loading="lazy"
                />
              </picture>
              <div className="cards-content">
                <h3>
                  <strong> {card.title}</strong>
                </h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
