// Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const daysofWork = parseInt(prompt("Quantos dias trabalhados?"));

const calculateDaysWorks = (daysofWork) => {
  const dayWork = 8 * 25;

  const calculateSalarymonth = daysofWork * dayWork;
  return {
    calculateSalarymonth: calculateSalarymonth,
  };
};

const result = calculateDaysWorks(daysofWork);

console.log(`O salário do colaborador é: R$${result.calculateSalarymonth}`);
