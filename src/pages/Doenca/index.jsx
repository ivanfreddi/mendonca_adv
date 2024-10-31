import HeaderPages from "../../HeaderPages";
import Specialized from "../../components/Specialized";
import Contact from "../../components/Contact";

const Doenca = () => {
  const specializedText = {
    title: "O que é o Auxílio-Doença?",
    description:
      "O Auxílio-Doença é um benefício concedido pelo Instituto Nacional do Seguro Social (INSS) destinado aos trabalhadores que estão temporariamente incapacitados para o trabalho devido a doenças ou acidentes. Para ter direito a esse benefício, o segurado deve ser contribuinte do INSS e comprovar a incapacidade por meio de atestados médicos. A condição deve resultar em um afastamento superior a 15 dias, o que torna essencial a apresentação de documentação que comprove a situação de saúde do trabalhador.",
    description1:
      "O valor do Auxílio-Doença é calculado com base na média dos salários de contribuição do segurado, considerando as 12 últimas contribuições. O benefício corresponde a 91% dessa média, o que significa que a quantia a ser recebida depende diretamente do histórico de contribuições e do salário recebido pelo trabalhador. As condições de saúde que podem dar direito ao auxílio são diversas, abrangendo tanto doenças físicas quanto mentais. A comprovação é realizada por meio de laudos e atestados médicos que detalham a natureza da incapacidade e a sua duração prevista.",

    description2:
      "A duração do Auxílio-Doença pode variar, mas, em geral, o benefício é concedido por até 120 dias. Durante esse período, o INSS reavalia a situação do segurado para determinar a continuidade do pagamento. Caso o trabalhador se recupere ou não compareça à perícia médica, o benefício pode ser suspenso. Além disso, o Auxílio-Doença pode ser acumulado com outros benefícios previdenciários, como pensão por morte ou aposentadoria por invalidez, mas não é acumulável com o Auxílio Acidente, pois cada um possui suas especificidades e regras.",
  };

  const faq = [
    {
      question:
        "Quais são os requisitos necessários para ter direito ao Auxílio-Doença do INSS?",
      answer:
        "Para ter direito ao Auxílio-Doença, o trabalhador deve ser segurado do INSS, ter contribuído para a Previdência Social e estar incapacitado para o trabalho por mais de 15 dias, devido a doença ou acidente. É necessário também apresentar atestado médico que comprove a incapacidade.",
    },
    {
      question:
        "Como é calculado o valor do Auxílio-Doença e quais fatores influenciam esse cálculo?",
      answer:
        "O valor do Auxílio-Doença é calculado com base na média dos salários de contribuição do segurado, considerando as 12 últimas contribuições. O benefício corresponde a 91% dessa média, e fatores como o tempo de contribuição e o salário recebido influenciam o cálculo.",
    },
    {
      question:
        "Quais tipos de condições de saúde podem dar direito ao Auxílio-Doença, e como é feita a comprovação?",
      answer:
        "O Auxílio-Doença pode ser concedido para uma variedade de condições de saúde, incluindo doenças físicas e mentais que impeçam o trabalhador de exercer suas atividades. A comprovação é feita por meio de atestados e laudos médicos que detalham a condição e a duração da incapacidade.",
    },
    {
      question:
        "Qual é a duração do Auxílio-Doença e o que determina o seu término?",
      answer:
        "O Auxílio-Doença é pago enquanto o segurado estiver incapacitado para o trabalho e, em geral, pode durar até 120 dias. A continuidade do benefício deve ser reavaliada pelo INSS, e o pagamento pode ser interrompido quando o trabalhador recupera a capacidade ou não comparece à perícia médica",
    },
    {
      question:
        "Quais documentos são necessários para solicitar o Auxílio-Doença no INSS?",
      answer:
        "Para solicitar o Auxílio-Doença, o trabalhador precisa apresentar um atestado médico que comprove a incapacidade, documentos pessoais como RG e CPF, além de comprovante de residência e, se aplicável, a documentação que comprove o afastamento do trabalho.",
    },
    {
      question:
        "É possível acumular o Auxílio-Doença com outros benefícios da Previdência, e quais seriam as exceções?",
      answer:
        "O Auxílio-Doença pode ser acumulado com outros benefícios, como pensão por morte ou aposentadoria por invalidez, mas não pode ser recebido ao mesmo tempo que o Auxílio Acidente, pois ambos têm propósitos distintos e não são acumuláveis.",
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

export default Doenca;
