import idade from "../../assets/idade.jpg";
import contribuicao from "../../assets/contribuicao.jpg";
import deficiencia from "../../assets/deficiencia.jpg";
import especial from "../../assets/especial.jpg";
import morte from "../../assets/morte.jpg";
import planejamento from "../../assets/planejamento.jpg";

import "./services.css";

const servicesCards = [
  {
    image: idade,
    alt: "Imagem de um senhor idoso.",
    title: "Aposentadoria por Idade",
    description:
      "É o benefício concedido aos contribuintes que atingem a idade mínima estabelecida pela lei e cumprem os requisitos de contribuição. Poderá ser Urbana, Rural ou para Pessoas com Deficiência.",
  },
  {
    image: contribuicao,
    alt: "Imagem de um casal conversando e fazendo anotações.",
    title: "Aposentadoria por Tempo de Contribuição",
    description:
      "É o benefício concedido aos trabalhadores que comprovarem um tempo mínimo de contribuição à Previdência Social, sem exigência de idade mínima. É levado em consideração o tempo que você dedicou ao trabalho e contribuiu para o sistema.",
  },
  {
    image: deficiencia,
    alt: "Imagem de uma mulher cadeirante.",
    title: "Aposentadoria da Pessoa com Deficiência",
    description:
      "É o benefício especial concedido aos trabalhadores que possuem alguma deficiência física, mental, intelectual ou sensorial que os impeça, parcial ou totalmente, de exercer suas atividades laborais. Poderá ser por idade ou por tempo de contribuição.",
  },
  {
    image: especial,
    alt: "Imagem de um homem fazendo trabalho prejudicial à saúde.",
    title: "Aposentadoria Especial",
    description:
      "É o benefício previdenciário concedido aos trabalhadores que exercem suas atividades em condições prejudiciais à saúde ou à integridade física, ou seja, em contato com agentes nocivos como ruído, calor excessivo, produtos químicos, entre outros.",
  },
  {
    image: morte,
    alt: "Imagem de duas pessoas caminhando próximo a um cemitério.",
    title: "Pensão por Morte",
    description:
      "É o benefício concedido aos dependentes do contribuinte que faleceu e era segurado da Previdência Social. Esse benefício tem como objetivo garantir uma renda para aqueles que dependiam financeiramente da pessoa falecida.",
  },
  {
    image: planejamento,
    alt: "Imagem de uma mulher lendo um livro.",
    title: "Planejamento Previdenciário",
    description:
      'Quer ter a segurança da concessão da melhor aposentadoria para seu caso? Então o planejamento previdenciário é o ideal para você. Ele é um estudo detalhado da sua história contributiva na Previdência Social, com o objetivo de identificar a melhor estratégia para você se aposentar. É o "mapa do tesouro" que te guia até a aposentadoria ideal.',
  },
];

const Services = () => {
  return (
    <main id="services">
      <div className="container">
        <h2>
          <strong>Quais benefícios você está procurando?</strong>
        </h2>
        <div className="services-cards">
          {servicesCards.map((card, index) => (
            <div key={index} className="cards">
              <img src={card.image} alt={card.alt} />
              <div className="cards-content">
                <h4>
                  <strong> {card.title}</strong>
                </h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
