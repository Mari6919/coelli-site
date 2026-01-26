(function () {
  const hoje = new Date();
  const diaSemana = hoje.getDay(); // 0 = Domingo
  const horaAtual = hoje.getHours();

  const estado = document.getElementById("estado-loja");
  const horas = document.getElementById("horas-loja");

  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  const horaAbertura = 9;
  const horaFecho = 18;

  const diaNome = dias[diaSemana];
  const abertoHoje = diaSemana >= 1 && diaSemana <= 5;

  estado.textContent = diaNome;

  if (abertoHoje) {
    horas.textContent = "09:00 – 18:00";

    if (horaAtual >= horaAbertura && horaAtual < horaFecho) {
      estado.style.color = "#2f855a"; // verde
    } else {
      estado.style.color = "#c53030"; // vermelho
    }
  } else {
    horas.textContent = "Encerrado";
    estado.style.color = "#c53030";
  }
})();
