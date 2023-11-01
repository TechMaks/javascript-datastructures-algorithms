//  A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

const amountDays = parseFloat(prompt("Quantos dias alugados?"));
const kmTraveled = parseFloat(prompt("Km percorridos:"));

const calculateCostTotal = (amountDays, kmTraveled) => {
  const costFixed = 90;
  const costPlusKm = 0.2;

  const costTotal = amountDays * costFixed + kmTraveled * costPlusKm;
  return costTotal;
};

const result = calculateCostTotal(amountDays, kmTraveled);

console.log(`O preço do aluguel do carro é: R$${result.toFixed(2)}`);
