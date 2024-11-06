import HeaderPages from "../../components/HeaderPages";
import Specialized from "../../components/Specialized";
import Contact from "../../components/Contact";

const BpcLoas = () => {
  const specializedText = {
    title: "O que é o BPC LOAS?",
    description:
      "O BPC LOAS, ou Benefício de Prestação Continuada da Lei Orgânica da Assistência Social, é um importante programa assistencial no Brasil que visa garantir um mínimo de dignidade aos cidadãos em situação de vulnerabilidade social. Esse benefício é concedido a pessoas idosas com 65 anos ou mais e a indivíduos com deficiência, independentemente de sua renda.",
    description1:
      "O valor do BPC corresponde a um salário mínimo mensal, e uma das suas principais características é que ele não é um benefício previdenciário, ou seja, não requer que o beneficiário tenha contribuído para a Previdência Social. Para ter direito ao BPC LOAS, os idosos devem ter pelo menos 65 anos, enquanto as pessoas com deficiência precisam comprovar a existência da deficiência e a impossibilidade de prover a própria manutenção.",

    description2:
      "Além disso, é necessário que a renda familiar per capita seja inferior a 1/4 do salário mínimo. O processo de solicitação deve ser feito junto ao INSS (Instituto Nacional do Seguro Social), que analisa a situação socioeconômica da família do requerente.",
  };

  const faq = [
    {
      question: "Quem pode receber BPC LOAS?",
      answer:
        "O BPC LOAS é destinado a pessoas idosas com 65 anos ou mais e a pessoas com deficiência que comprovem a impossibilidade de prover a própria manutenção",
    },
    {
      question: "Qual o valor do BPC LOAS e até quando posso receber?",
      answer: "O valor do benefício é equivalente a um salário mínimo mensal.",
    },
    {
      question: "Preciso contribuir para solicitar BPC LOAS?",
      answer:
        "Não, o BPC LOAS é um benefício assistencial e não exige contribuições prévias à Previdência Social",
    },
    {
      question: "Qual o critério renda familiar para ter o BPC LOAS concedido?",
      answer:
        "A solicitação deve ser feita junto ao INSS, onde será realizada uma análise da situação socioeconômica da família",
    },
    {
      question: "Recebo BPC LOAS. Posso receber outros benefícios?",
      answer:
        "A renda familiar per capita deve ser inferior a 1/4 do salário mínimo para que o beneficiário tenha direito ao BPC LOAS",
    },
    {
      question:
        "Moro com alguém que recebe BPC LOAS. Posso receber BPC LOAS também?",
      answer:
        "O benefício pode ser revisto periodicamente, e o beneficiário deve manter a condição de vulnerabilidade para continuar recebendo o BPC.",
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

export default BpcLoas;
