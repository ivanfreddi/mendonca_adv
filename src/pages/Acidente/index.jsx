import HeaderPages from "../../components/HeaderPages";
import Specialized from "../../components/Specialized";
import Contact from "../../components/Contact";

const Acidente = () => {
  const specializedText = {
    title: "AUXÍLIO-ACIDENTE",
    description:
      "O auxílio-acidente é um benefício previdenciário concedido ao segurado que, após um acidente de qualquer natureza, uma doença ocupacional ou acidente de trabalho, sofre redução permanente de sua capacidade para o trabalho.",
  };

  const faq = [
    {
      question:
        "Quais são os requisitos necessários para ter direito ao Auxílio-Acidente?",
      answer:
        "Para este benefício, é necessário ter:<br><br><strong>Qualidade de segurado:</strong> Estar filiado ao INSS na época do acidente como Empregado Urbano; Empregado Doméstico (Para acidentes ocorridos a partir de 1º de junho de 2015); Trabalhador Avulso ou Segurado Especial (Trabalhador Rural).<br><br><strong>Acidente:</strong> Ter sofrido um acidente de qualquer natureza, seja ele relacionado ou não ao trabalho.<br><br><strong>Redução da capacidade para o trabalho:</strong> A lesão causada pelo acidente deve resultar em uma redução permanente da capacidade para exercer a atividade que o segurado habitualmente exercia.<br><br><strong>Nexo causal:</strong> Deve haver um nexo causal entre o acidente e a redução da capacidade laborativa",
    },
    {
      question: "Quem geralmente não tem direito ao Auxílio-Acidente?",
      answer:
        "<strong>Quem geralmente não tem direito ao auxílio-acidente:</strong><br><br><strong>• Contribuintes individuais:</strong> Aqueles que fazem contribuições por conta própria, como autônomos e profissionais liberais.<br><br><strong>• Segurados facultativos:</strong> Pessoas que contribuem para o INSS de forma facultativa, como estudantes e donas de casa.<br><br>A principal razão é que a legislação previdenciária brasileira não prevê o direito ao auxílio-acidente para essas categorias de segurados. O benefício é direcionado principalmente aos trabalhadores que contribuem para o INSS através de uma relação de trabalho formal, como empregados, trabalhadores domésticos e avulsos.",
    },
    {
      question:
        "Como saber quanto irei receber de Auxílio-Acidente? Qual o Cálculo?",
      answer:
        "Esta questão é importantíssima, pois é diferente do auxílio-doença.<br><br>O valor do auxílio-acidente é calculado com base em uma porcentagem do seu salário de benefício. <strong>Essa porcentagem é fixada em 50%.</strong><br><br>O saldo salário é a média das contribuições que você fez ao INSS, considerando um determinado período. A forma de calcular esse salário pode variar dependendo da data do acidente e de outras particularidades do seu caso.<br><br><strong>Exemplo:</strong><br>Se a média das suas contribuições for de R$ 2.000,00, o valor do seu auxílio-acidente será de R$ 1.000,00 (50% de R$ 2.000,00).",
    },
    {
      question:
        "Quais tipos de acidentes dão direito ao benefício? Como eu comprovo as sequelas?",
      answer:
        "O auxílio-acidente é concedido a segurados do INSS que sofreram um acidente de trabalho ou de qualquer natureza. <strong>Ou seja, não importa se o acidente ocorreu no trabalho, em casa, na rua ou em qualquer outro lugar.</strong><br><br><strong>Exemplos de acidentes que podem dar direito ao benefício:</strong><br><br>• Acidentes de trânsito<br><br>• Acidentes domésticos<br><br>• Acidentes de trabalho<br><br>• Acidentes esportivos<br><br>• Quedas<br><br>• Queimaduras<br><br>• Cortes profundos<br><br>• Fraturas que deixaram sequelas<br><br>Assim, para comprovar as sequelas e ter direito ao auxílio-acidente, é necessário apresentar alguns documentos médicos, como a exemplo:<br><br><strong>• Atestados médicos:</strong> Devem conter informações sobre o acidente, as lesões sofridas, o tratamento realizado e as sequelas que persistem.<br><br><strong>• Laudos médicos:</strong> Laudos de especialistas podem ser solicitados para complementar a avaliação das sequelas.<br><br><strong>• Exames complementares:</strong> Radiografias, tomografias, ressonâncias magnéticas, entre outros, que comprovem as lesões e as sequelas.<br><br><strong>• Relatórios de tratamento:</strong> Documentos que comprovem o tratamento realizado, como fisioterapia, medicamentos e outros.<br><br><strong>É importante que os documentos médicos demonstrem:</strong><br><br><strong>• Nexo causal:</strong> Que existe uma relação direta entre o acidente e as sequelas.<br><br><strong>• Redução da capacidade para o trabalho:</strong> Que as sequelas causam uma redução permanente da capacidade para exercer a atividade que o segurado habitualmente exercia.<br><br><strong>• Irreversibilidade:</strong> Que as sequelas são permanentes e não há possibilidade de recuperação completa.",
    },
    {
      question: "Até quando posso receber o Auxílio-Acidente?",
      answer:
        "<strong>Em regra, o auxílio-acidente é um benefício vitalício.</strong> Isso significa que, uma vez concedido, o segurado tem direito a recebê-lo pelo resto da vida, desde que as condições que deram origem ao benefício permaneçam.<br><br><strong>Atenção!</strong> Existem algumas situações em que o pagamento do auxílio-acidente pode ser interrompido:<br><br><strong>• Óbito do beneficiário:</strong> Com o falecimento do titular, o benefício é cessado.<br><br><strong>• Concessão de aposentadoria:</strong> Se o segurado tiver direito a qualquer tipo de aposentadoria, o auxílio-acidente será suspenso, pois não é possível acumular os dois benefícios (receberá apenas a aposentadoria).<br><br><strong>• Perda das condições que deram origem ao benefício:</strong> Em alguns casos, o INSS pode realizar uma perícia médica para verificar se as sequelas que deram origem ao benefício ainda persistem. Caso seja constatado que as sequelas desapareceram ou foram significativamente reduzidas, o benefício pode ser cessado.",
    },
    {
      question: " Recebo Auxílio-Acidente. Posso receber outros benefícios?",
      answer:
        "<strong>A possibilidade de acumular o auxílio acidente com outros benefícios do INSS depende da situação específica de cada beneficiário e da natureza dos benefícios em questão.</strong><br><br>Em geral, não é permitido, como no caso da aposentadoria e do BPC LOAS, a exemplo. No entanto, existem algumas exceções, como no caso do auxílio-doença. Neste caso, poderá ser cumulado com o auxílio-doença, desde que sejam por fatos geradores diferentes (por exemplo, receber o auxílio-doença por depressão e o auxílio acidente por sequela de um acidente de trabalho).<br><br><strong>É importante destacar que cada caso é analisado individualmente. </strong>",
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
