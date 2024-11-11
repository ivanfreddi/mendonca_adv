import HeaderPages from "../../components/HeaderPages";
import Specialized from "../../components/Specialized";
import Contact from "../../components/Contact";

const BpcLoas = () => {
  const specializedText = {
    title: "BPC LOAS",
    description:
      "O <strong> Benefício de Prestação Continuada (BPC LOAS) </strong> é um benefício assistencial do governo brasileiro destinado a pessoas com <strong> deficiência/impedimentos de longo prazo </strong> e <strong> idosos </strong> com <strong> 65 anos ou mais </strong> que comprovem <strong> não possuir meios de prover a própria subsistência </strong> ou de tê-la provida por sua família.",
  };

  const faq = [
    {
      question: "Sempre haverá requisito de idade para o BPC LOAS?",
      answer:
        "Para quem solicita o BPC LOAS por deficiência/impedimento de longo prazo, NÃO há requisito de idade, ao contrário de quem solicita por ser pessoa idosa.",
    },
    {
      question: "Qual o valor do BPC LOAS e até quando posso receber?",
      answer:
        "O <strong> valor do BPC LOAS </strong> corresponde a <strong> um salário mínimo </strong> vigente no país. Isso significa que o valor do benefício é atualizado anualmente de acordo com o reajuste do salário mínimo. <br><br> <strong> Quanto à duração do benefício </strong>, não há um prazo definido. O BPC LOAS é pago <strong> enquanto as condições que deram direito ao benefício permanecerem.</strong> Isso significa que:<br><br><strong>Para idosos:</strong> O benefício continua sendo pago enquanto a pessoa tiver 65 anos ou mais e continuar comprovando a necessidade.<br><br><strong>Para pessoas com deficiência:</strong> O benefício continua sendo pago enquanto a pessoa apresentar a deficiência e continuar comprovando a necessidade.<br><br><strong>É importante ressaltar que o BPC LOAS está sujeito a revisões periódicas.</strong> O Governo pode realizar <strong> perícias médicas e sociais </strong> para avaliar se o beneficiário ainda </strong>atende aos requisitos para receber o benefício.</strong> ",
    },
    {
      question: "Preciso contribuir para solicitar BPC LOAS?",
      answer:
        "<strong> A resposta curta é: não. </strong> <br><br> O Benefício de Prestação Continuada (BPC-LOAS) é um benefício <strong> assistencial </strong>, e não previdenciário. Isso significa que <strong> não é necessário ter contribuído para o INSS </strong> para ter direito ao benefício.",
    },
    {
      question: "Recebo BPC LOAS. Posso receber outros benefícios?",
      answer:
        "<strong> A resposta curta é: depende. </strong> <br><br> Conforme o Artigo 20, §4º da Lei 8.742 de 1993, o BPC LOAS é um benefício assistencial destinado a pessoas em situação de vulnerabilidade social, e, logo, incompatível com outros benefícios, como aposentadorias e auxílios-doença, que são previdenciários e exigem contribuições ao INSS. No entanto, existem algumas exceções: O BPC LOAS pode ser cumulado com benefícios assistenciais ou pensão especial de natureza indenizatório. O caso mais comum de recebimento de BPC LOAS e outro benefício <strong> é o recebimento concomitante de BOLSA FAMÍLIA.</strong>",
    },
    {
      question:
        "Moro com alguém que recebe BPC LOAS. Posso receber BPC LOAS também?",
      answer:
        "A resposta é: SIM. <br><br> Você e outra pessoa de sua família podem receber BPC LOAS. Isto é possível porque o BPC LOAS concedido a qualquer membro da família NÃO será computado para os fins do cálculo da renda familiar per capita para solicitação de outro benefício similar.",
    },
    {
      question:
        "Parei de receber meu BPC LOAS. Posso solicitar o restabelecimento do pagamento?",
      answer:
        "A resposta é: Depende!<br><br> Na maioria dos casos de “corte” do pagamento é possível a solicitação do RESTABELECIMENTO, inclusive com o pedido dos atrasados – ou seja, dos valores devidos desde quando você parou de receber.<br><br>Porém, é necessário estar atento ao motivo que levou ao fim do pagamento.<br><br>Existem diversas razões pelas quais o pagamento do BPC LOAS pode ser interrompido, como:<br><br><strong>Atualização cadastral:</strong> É importante manter seus dados cadastrais atualizados no Cadastro Único (CadÚnico). Caso haja alguma divergência nas informações, o benefício pode ser suspenso. A atualização é obrigatória A CADA DOIS ANOS.<br><br><strong>Revisão periódica:</strong> O INSS realiza revisões periódicas dos benefícios para verificar se o beneficiário continua atendendo aos requisitos para recebê-lo. Se houver uma mudança de renda familiar (por exemplo, alguém de sua família passou a trabalhar de carteira assinada e está recebendo uma renda alta), poderá haver o corte.<br><br><strong>Erro no sistema:</strong> Em alguns casos, o pagamento pode ser interrompido por erro no sistema do INSS.<br><br>Se você teve seu benefício CORTADO, contate agora mesmo um advogado especialista na área que ele irá lhe auxiliar.  ",
    },
    {
      question: "Sou PCD e tenho carteira assinada. Posso receber BPC LOAS?",
      answer:
        "A resposta é: Não!<br><br> O BPC LOAS é um benefício para quem NÃO aufere renda. Logo quem tem carteira de trabalho assinada, a exemplo, mesmo que seja deficiente, NÃO poderá receber BPC LOAS. O mesmo ocorre com quem tem MEI, onde há presunção de renda (mesmo se não estiver em atividade profissional com o MEI registrado), sendo incompatível com o benefício solicitado. ",
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
