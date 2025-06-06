const quizData = [
  {
    pergunta: "Qual é a principal ferramenta usada pelo HydroSafe Solutions para monitorar enchentes?",
    opcoes: [
      "Drones agrícolas",
      "Sensores inteligentes de água",
      "Aviões caças",
      "Barragens automáticas"
    ],
    resposta: 1
  },
  {
    pergunta: "O que NÃO é um impacto direto das enchentes?",
    opcoes: [
      "Deslocamento de famílias",
      "Aumento da biodiversidade",
      "Danos à infraestrutura",
      "Aumento de doenças"
    ],
    resposta: 1
  },
  {
    pergunta: "Big Data no contexto do HydroSafe serve para:",
    opcoes: [
      "Tornar os sites mais bonitos",
      "Armazenar e analisar grandes volumes de dados hidrológicos",
      "Controlar satélites remotos",
      "Aumentar o tráfego de veículos"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual tecnologia pode prever enchentes com até 48 horas de antecedência?",
    opcoes: [
      "Satélite apenas",
      "Sensoriamento remoto",
      "Inteligência artificial analisando dados meteorológicos",
      "Barômetros simples"
    ],
    resposta: 2
  },
  {
    pergunta: "Que áreas do Brasil são mais vulneráveis às enchentes?",
    opcoes: [
      "Regiões costeiras e grandes cidades",
      "Somente o interior árido",
      "Áreas montanhosas acima de 3000m",
      "Somente regiões rurais"
    ],
    resposta: 0
  },
  {
    pergunta: "Sensores inteligentes fazem parte do:",
    opcoes: [
      "Sistema de alertas em tempo real",
      "Mecanismo de busca",
      "Projeto de internet das coisas culinárias",
      "Controle de iluminação das ruas"
    ],
    resposta: 0
  },
  {
    pergunta: "Como a população é informada sobre riscos iminentes segundo o HydroSafe?",
    opcoes: [
      "Jornais impressos",
      "Alertas digitais personalizados",
      "Aviso por correio",
      "TV aberta apenas"
    ],
    resposta: 1
  },
  {
    pergunta: "Infraestrutura inadequada contribui para enchentes principalmente devido à:",
    opcoes: [
      "Falta de calçadas",
      "Ausência de sistemas de drenagem eficientes",
      "Excesso de vegetação",
      "Iluminação pública insuficiente"
    ],
    resposta: 1
  },
  {
    pergunta: "Quais destes é um compromisso do HydroSafe Solutions?",
    opcoes: [
      "Informar, alertar e educar sobre riscos de enchentes",
      "Fotografar tempestades apenas",
      "Oferecer viagens turísticas em rios",
      "Gerar memes de enchentes"
    ],
    resposta: 0
  },
  {
    pergunta: "Prevenção a enchentes é eficaz quando inclui:",
    opcoes: [
      "Apenas obras grandes de engenharia",
      "Gestão integrada usando tecnologia, informação e ação rápida",
      "Ignorar sinais de alerta",
      "Cercar cidades com lonas plásticas"
    ],
    resposta: 1
  }
];

let currentQ = 0, score = 0;
function renderQuiz() {
  const quizBox = document.getElementById("quiz");
  if (currentQ < quizData.length) {
    let q = quizData[currentQ];
    quizBox.innerHTML = `
      <h2>Pergunta ${currentQ+1}/10</h2>
      <p>${q.pergunta}</p>
      <form id="quizForm">
        ${q.opcoes.map((op, i) => `
          <label>
            <input type="radio" name="opcao" value="${i}" required> ${op}
          </label><br>
        `).join('')}
        <button type="submit">Responder</button>
      </form>
    `;
    document.getElementById("quizForm").onsubmit = (ev) => {
      ev.preventDefault();
      const resposta = parseInt(document.querySelector('input[name="opcao"]:checked').value, 10);
      if (resposta === q.resposta) score++;
      currentQ++;
      renderQuiz();
    };
  } else {
    quizBox.innerHTML = `
      <h2>Quiz Finalizado!</h2>
      <p>Você acertou ${score} de ${quizData.length} perguntas.</p>
      <button onclick="restartQuiz()">Tentar novamente</button>
    `;
  }
}
function restartQuiz() {
  score = 0;
  currentQ = 0;
  renderQuiz();
}
document.addEventListener("DOMContentLoaded", function() {
  const quizBox = document.getElementById("quiz");
  if (quizBox) renderQuiz();
});