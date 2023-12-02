// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO

// Solicitar o ano ao usuário
const yaer = parseInt(prompt("Digite um ano para verificar se é bissexto:"));

function yearBissextile(yaer) {
  if ((yaer % 4 === 0 && yaer % 100 !== 0) || yaer % 400 === 0) {
    return true; // É um ano bissexto
  } else {
    return false; // Não é um ano bissexto
  }
}

if (yearBissextile(yaer)) {
  console.log(`${yaer} é um ano bissexto.`);
} else {
  console.log(`${yaer} não é um ano bissexto.`);
}
