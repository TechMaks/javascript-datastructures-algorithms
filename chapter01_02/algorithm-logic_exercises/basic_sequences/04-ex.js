// Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.

const num1 = parseFloat(prompt(`Type it one value: `));
const num2 = parseFloat(prompt(`Type it outher value: `));

const sum = num1 + num2;

console.log(`The sum between ${num1} and ${num2} is equal to ${sum}.`);
