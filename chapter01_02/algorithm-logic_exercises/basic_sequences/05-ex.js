// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

const gradeOne = parseFloat(prompt("What is the first grade:"));
const gradetwo = parseFloat(prompt("What is the second grade:"));

const sum = gradeOne + gradetwo;

const avarage = sum / 2;

console.log(
  `The avarge betwen ${gradeOne} and ${gradetwo} is equal to ${avarage}`
);
