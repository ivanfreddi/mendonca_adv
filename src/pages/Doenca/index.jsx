import HeaderPages from "../../components/HeaderPages";
import Specialized from "../../components/Specialized";
import Contact from "../../components/Contact";

const Doenca = () => {
  const specializedText = {
    title: "AUXÍLIO-DOENÇA",
    description:
      "<strong>Imagine que você se machuca ou adoece e fica impossibilitado de trabalhar por um tempo.</strong> Nesse caso, você pode ter direito a receber um benefício do governo chamado <strong>Auxílio-Doença.</strong><br> <strong>Em resumo, o Auxílio-Doença é um dinheiro que você recebe enquanto estiver afastado do trabalho por causa de uma doença ou acidente.</strong> Esse benefício é pago pelo INSS (Instituto Nacional do Seguro Social) e tem como objetivo garantir que você tenha uma renda durante o período em que não puder trabalhar.",
  };
  const faq = [
    {
      question:
        "Quais são os requisitos necessários para ter direito ao Auxílio-Doença do INSS?",
      answer:
        "<strong>O auxílio-doença é um benefício pago pelo INSS para pessoas que estão incapacitadas para trabalhar por causa de uma doença ou acidente.<br><br>Para ter direito a esse benefício, é preciso cumprir alguns requisitos:</strong><br><br>1. <strong>Ser segurado do INSS:</strong> Isso significa que você precisa ter contribuído para a Previdência Social, seja como empregado, contribuinte individual, etc. A quantidade de contribuições necessárias varia de acordo com a sua situação.<br><br>2. <strong>Estar incapacitado para o trabalho:</strong> Você precisa passar por uma perícia médica no INSS e o médico precisa atestar que você está temporariamente incapaz de trabalhar por causa de uma doença ou acidente. Essa incapacidade precisa durar mais de 15 dias. <strong>Atenção: Hoje em dia já é possível que passe por análise médica documental, sem necessidade de perícia presencial.</strong><br><br>3. <strong>Cumprir a carência:</strong> A carência é um período mínimo de contribuições que você precisa ter feito para ter direito a alguns benefícios. No caso do auxílio-doença, a carência costuma ser de 12 meses, mas pode variar em algumas situações.<br><br><strong>É importante lembrar que:<br><br>Cada caso é analisado individualmente:</strong> A concessão do auxílio-doença depende da avaliação do seu caso específico.",
    },
    {
      question:
        "Como saber quanto irei receber de Auxílio-doença? Qual o cálculo?",
      answer:
        "<strong>O valor do auxílio-doença é calculado com base na sua média salarial.</strong> Isso significa que quanto mais você contribuiu para a Previdência Social, maior poderá ser o valor do seu benefício.<br><br><strong>O cálculo, de forma simplificada, funciona assim:</strong><br><br>1. <strong>Cálculo da média salarial:</strong> O INSS calcula a média dos seus últimos salários de contribuição, considerando um período específico.<br><br>2. <strong>Aplicação do fator de 91%:</strong> Sobre essa média salarial, é aplicado um fator de 91%. Esse percentual é utilizado para determinar o valor do benefício.<br><br> 3. <strong>Limites:</strong> Existem limites mínimo e máximo para o valor do auxílio-doença, definidos pela legislação.<br><br><strong>Exemplo:</strong><br><br>Imagine que a média dos seus últimos salários de contribuição seja de R$ 3.000,00. Para calcular o valor do seu auxílio-doença, você faria:<br>• R$ 3.000,00 (média salarial) x 91% = R$ 2.730,00 (valor do benefício)<br><br><strong>É importante ressaltar que:</strong><br><br><strong>• O cálculo pode variar:</strong> A forma exata do cálculo pode sofrer pequenas alterações ao longo do tempo, por isso é sempre bom consultar a legislação mais recente ou um profissional da área.<br><br><strong>• Existem exceções:</strong> Em alguns casos, como no caso de trabalhadores rurais, o cálculo pode ser diferente.<br><br><strong>• O valor do benefício pode ser reajustado:</strong> O valor do auxílio-doença pode ser reajustado periodicamente, de acordo com os índices de correção monetária.",
    },
    {
      question: "Quais doenças dão direito ao Auxílio-doença?",
      answer:
        "<strong>A questão de quais doenças dão direito ao auxílio-doença não é tão simples de responder, pois a incapacidade para o trabalho é avaliada de forma individualizada.</strong> Cada caso é analisado pelo INSS, considerando a natureza da doença, a gravidade dos sintomas e a capacidade funcional do segurado.<br><br><strong>No entanto, algumas doenças comumente associadas à concessão do auxílio-doença incluem:</strong><br><br><strong>• Doenças crônicas:</strong> Diabetes, hipertensão, doenças pulmonares, doenças renais crônicas, entre outras.<br><br><strong>• Doenças reumatológicas:</strong> Artrite reumatóide, lúpus e espondilite anquilosante.<br><br><strong>• Doenças neurológicas:</strong> Doença de Parkinson, esclerose múltipla, epilepsia e Alzheimer.<br><br><strong>• Doenças mentais:</strong> Depressão, ansiedade e transtorno bipolar.<br><br><strong>• Doenças oncológicas:</strong> Câncer em qualquer fase.<br><br><strong>• Lesões por acidentes de trabalho:</strong> Fraturas, queimaduras, amputações.<br><br><strong>É importante destacar: Não há uma lista de doenças que dão direito!</strong> Outras doenças podem ser consideradas para a concessão do benefício, dependendo da avaliação médica.",
    },
    {
      question: "Como eu comprovo minha incapacidade para o trabalho? ",
      answer:
        "Quanto à comprovação, se atente a ter o ATESTADO MÉDICO com seu diagnóstico e sua incapacidade para trabalho. Você também poderá/deverá apresentar os seguintes documentos: <br><br><strong>• Exames complementares:</strong> Dependendo da doença, podem ser solicitados exames complementares, como radiografias, tomografias, ressonâncias magnéticas, entre outros.<br><br><strong>• Laudos médicos:</strong> Em alguns casos, pode ser necessário apresentar laudos médicos de especialistas.<br><br><strong>• Comunicado de Acidente de Trabalho (CAT):</strong> Caso a incapacidade seja decorrente de um acidente de trabalho, apresentar o CAT.",
    },
    {
      question: "Até quando irei receber meu Auxílio-doença?",
      answer:
        "<strong>A duração do auxílio-doença varia de caso para caso e depende de diversos fatores, como:</strong><br><br><strong>• Natureza da doença ou lesão:</strong> Doenças crônicas ou com maior complexidade tendem a ter períodos de afastamento mais longos.<br><br><strong>• Tratamento médico:</strong> A necessidade de tratamentos prolongados ou a resposta do organismo ao tratamento podem influenciar a duração do benefício.<br><br><strong>• Avaliação médica:</strong> A cada período, um médico perito do INSS avaliará sua condição de saúde e determinará se você ainda está incapacitado para o trabalho.<br><br><strong>Geralmente, o auxílio-doença é concedido por períodos determinados,</strong> que podem ser renovados mediante nova perícia médica. No entanto, não há um prazo máximo fixo, pois cada situação é única.",
    },
    {
      question: "Recebo Auxílio-doença. Posso receber outros benefícios?",
      answer:
        "<strong>A possibilidade de acumular o auxílio-doença com outros benefícios do INSS depende da situação específica de cada beneficiário e da natureza dos benefícios em questão.</strong><br><br><strong>Em geral, a acumulação não é permitida.</strong> A legislação previdenciária estabelece que, como regra, um segurado não pode receber mais de um benefício previdenciário por incapacidade. Isso significa que, se você está recebendo o auxílio-doença, que pressupõe uma incapacidade temporária para o trabalho, não poderá, por exemplo, acumular com uma aposentadoria por invalidez, que também é um benefício por incapacidade.<br><br><strong>No entanto, existem algumas exceções:</strong><br><br><strong>Pensão por morte:</strong> Em alguns casos, é possível acumular o auxílio-doença com a pensão por morte, desde que a pensão seja por falecimento de cônjuge ou companheiro.<br><br><strong>Auxílio acidente:</strong> O auxílio acidente, que indeniza sequelas permanentes decorrentes de acidente de trabalho ou doença profissional, pode ser acumulado com outros benefícios, inclusive o auxílio-doença.<br><br><strong>É importante destacar que cada caso é analisado individualmente.</strong>",
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
