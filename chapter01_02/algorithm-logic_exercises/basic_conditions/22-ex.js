// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.

const ageMan = parseInt(prompt("Digique a idade que deseja verificar:"));

const ageMinimum = 18;

const ageExceeded = ageMinimum - ageMan;

if (ageMan == ageMinimum) {
  console.log("Deve realizar o alistamento neste ano.");
} else if (ageMan < ageMinimum) {
  console.log(`Faltam ${ageExceeded} anos para o seu alistamento.`);
} else if (ageMan > ageMinimum) {
  console.log(`Já passaram-se ${ageExceeded} anos do seu alistamento`);
}
