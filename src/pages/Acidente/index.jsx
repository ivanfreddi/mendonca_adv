import HeaderPages from "../../HeaderPages";
import Specialized from "../../components/Specialized";
import Contact from "../../components/Contact";

const Acidente = () => {
  const specializedText = {
    title: "O que é o Auxílio Acidente?",
    description:
      "O Auxílio Acidente é um benefício concedido pelo Instituto Nacional do Seguro Social (INSS) aos segurados que sofreram um acidente e, como consequência, ficaram com sequelas que diminuem sua capacidade de trabalho. Para ter direito ao auxílio, é necessário que o trabalhador tenha contribuído para a Previdência Social e que as sequelas sejam significativas, mas não a ponto de impossibilitar totalmente o exercício de suas atividades laborais. O benefício é especialmente relevante para aqueles que, após um acidente, não conseguem desempenhar suas funções normalmente, mas ainda podem trabalhar em algumas capacidades.",
    description1:
      "Os acidentes que podem dar direito ao Auxílio Acidente incluem acidentes de trabalho, de trânsito e até domésticos, desde que resultem em limitações que afetem o desempenho profissional. Para solicitar o benefício, é preciso apresentar uma série de documentos, como laudos médicos que comprovem as sequelas, boletins de ocorrência em casos de acidentes de trânsito, além de documentos pessoais. O valor do auxílio corresponde a 50% do salário de benefício, que é calculado com base nas contribuições feitas ao INSS e é pago mensalmente ao trabalhador.",

    description2:
      "Esse benefício é vital para garantir uma fonte de renda para aqueles que, mesmo com limitações, ainda podem desempenhar funções no mercado de trabalho. O Auxílio Acidente é pago enquanto as sequelas persistirem, oferecendo um suporte essencial para que os segurados possam se reerguer e buscar alternativas de emprego. Além disso, é importante destacar que esse auxílio pode ser acumulado com outros benefícios, exceto com aposentadoria, garantindo assim uma proteção mais ampla ao trabalhador acidentado.",
  };

  const faq = [
    {
      question:
        "Quais são os requisitos necessários para ter direito ao Auxílio Acidente do INSS?",
      answer:
        "Para ter direito ao Auxílio Acidente, o trabalhador deve ser segurado do INSS e ter contribuído para a Previdência Social. Além disso, é necessário que o acidente tenha causado sequelas que reduzam a capacidade de trabalho, mas não sejam suficientes para conceder aposentadoria por invalidez.",
    },
    {
      question:
        "Como é calculado o valor do Auxílio Acidente e quais fatores influenciam esse cálculo?",
      answer:
        "O valor do Auxílio Acidente é calculado com base em 50% do salário de benefício, que é determinado pelas contribuições feitas ao INSS. Fatores como o tempo de contribuição e a média dos salários de contribuição influenciam esse cálculo.",
    },
    {
      question:
        "Quais tipos de acidentes podem gerar o direito ao Auxílio Acidente, e como é feita a comprovação das sequelas?",
      answer:
        "O Auxílio Acidente pode ser concedido em casos de acidentes de trabalho, de trânsito ou domésticos que resultem em sequelas. A comprovação das sequelas é feita por meio de laudos médicos que atestem a relação entre o acidente e as limitações que afetam a capacidade laboral.",
    },
    {
      question:
        "Qual é a duração do Auxílio Acidente e o que determina o seu término?",
      answer:
        "O Auxílio Acidente é pago enquanto as sequelas que limitam a capacidade de trabalho persistirem. O benefício termina quando o segurado recupera sua capacidade de trabalho ou atinge a idade de aposentadoria.",
    },
    {
      question:
        "Quais documentos são necessários para solicitar o Auxílio Acidente no INSS?",
      answer:
        "Para solicitar o Auxílio Acidente, o trabalhador deve apresentar laudos médicos, boletins de ocorrência (nos casos de acidentes de trânsito), além de documentos pessoais como RG, CPF e comprovante de residência.",
    },
    {
      question:
        "É possível acumular o Auxílio Acidente com outros benefícios da Previdência, e quais seriam as exceções?",
      answer:
        "Sim, o Auxílio Acidente pode ser acumulado com outros benefícios da Previdência, exceto com a aposentadoria. Isso permite que o trabalhador receba suporte financeiro adicional enquanto se recupera das sequelas.",
    },
  ];
  return (
    <>
      <HeaderPages />
      <Specialized text={specializedText} faq={faq} />
      <Contact />
    </>
  );
};

export default Acidente;
