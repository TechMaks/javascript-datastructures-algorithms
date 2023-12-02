// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

// Solicitar ao usuário que insira nome, sexo e valor das compras
const nome = prompt("Digite seu nome: ");
const sexo = prompt("Digite seu sexo (M para mulher ou H para homem): ");
const valorCompras = parseFloat(prompt("Digite o valor das compras: "));

let desconto = 0;

// Verificar o sexo e aplicar o desconto apropriado
if (sexo.toUpperCase() === "M") {
  // Se for mulher
  desconto = valorCompras * 0.13; // 13% de desconto para mulheres
} else if (sexo.toUpperCase() === "H") {
  // Se for homem
  desconto = valorCompras * 0.05; // 5% de desconto para homens
} else {
  console.log("Sexo inválido. Insira 'M' para mulher ou 'H' para homem.");
}

const precoComDesconto = valorCompras - desconto;

console.log(`Cliente: ${nome}`);
console.log(`Valor das compras: R$${valorCompras.toFixed(2)}`);
console.log(`Desconto aplicado: R$${desconto.toFixed(2)}`);
console.log(`Preço com desconto: R$${precoComDesconto.toFixed(2)}`);
