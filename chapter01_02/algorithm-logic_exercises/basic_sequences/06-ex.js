// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

const num = parseInt(prompt("type it one value:"));

const predecessor = num - 1;

const successor = num + 1;

console.log(`the predecessor of number ${num} is ${predecessor}.`);
console.log(`the successor of number ${num} is ${successor}.`);
