// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o eu novo salário, com 15% de aumento.

const salaryPresent = parseFloat(prompt("What is the salary:"));

const plusSalary = 15;

const calculatePlusSalary = (plusSalary / 100) * salaryPresent;

console.log(
  `Amount of salary that will be added is R$${calculatePlusSalary.toFixed(2)}`
);

const salaryPromotion = salaryPresent + calculatePlusSalary;

console.log(`New salary is R$${salaryPromotion.toFixed(2)}`);
