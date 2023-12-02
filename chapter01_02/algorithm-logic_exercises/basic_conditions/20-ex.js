// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR.

// Obtendo o numero
const num = parseInt(prompt("Digite aqui um numero:"));

// Divide o número por dois
const division = num / 2;

if (num % 2 == 0) {
  // Se o resto da divisão pro dois for igual a 0 exibe
  console.log(`O número ${num} é PAR!`);
} else {
  // Se o resto da divisão pro dois for diferente de 0 exibe
  console.log(`O número ${num} é IMPAR!`);
}
