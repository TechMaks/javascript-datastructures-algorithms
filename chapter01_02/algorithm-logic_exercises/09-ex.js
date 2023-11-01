//  Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

// Read the amount of money in Brazilian Reais
let moneyInReais = parseFloat(
  prompt("Enter the amount of money in Brazilian Reais (R$):")
);

// Define the exchange rate
const exchangeRate = 3.45;

// Calculate the equivalent amount in US dollars
const moneyInDollars = moneyInReais / exchangeRate;

// Display the amount in dollars
console.log(
  `With R$${moneyInReais}, you can buy approximately $${moneyInDollars.toFixed(
    2
  )} USD.`
);
