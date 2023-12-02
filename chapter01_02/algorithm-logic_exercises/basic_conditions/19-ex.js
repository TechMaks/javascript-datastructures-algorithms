// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).

// Obtendo o nome do aluno.
const studentName = prompt("Digique aqui o nome do aluno:");

// Obtendo as duas notas do aluno.
const noteOne = parseFloat(prompt("Digite aqui a prmeira nota do aluno:"));
const noteTwo = parseFloat(prompt("Digite aqui a segunda nota do aluno:"));

//  calcula nota total do aluno
const AverageTotal = noteOne + noteTwo;

// Nota media para ser aprovado
const AverageGrade = 7.0;

if (AverageTotal >= AverageGrade) {
  console.log(
    `O aluno: ${studentName} foi aprovado. Sua nota total é ${AverageTotal}.`
  );
} else {
  console.log(
    `O aluno: ${studentName} foi reprovado. Sua nota total é ${AverageTotal}.`
  );
}
