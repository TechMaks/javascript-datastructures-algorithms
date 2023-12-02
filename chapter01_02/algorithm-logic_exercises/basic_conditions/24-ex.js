// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

// Obtendo o distancida do pasageiro
const travelPass = parseFloat(prompt("Qual distância deseja percorrer?"));

// Salva o valor para viagem até 200km
const upTwoHundred = 0.5;

// salva o valor para viagem acima de 200ks
const moreTwoHundred = 0.45;

if (travelPass <= 200) {
  const valueUpTwoKm = travelPass * upTwoHundred;
  console.log(
    `O valor da passagem de acordo com a kilometragem percorrida é R$${valueUpTwoKm.toFixed(
      2
    )}`
  );
} else if (travelPass > 200) {
  const valueMoreTwoKm = travelPass * moreTwoHundred;
  console.log(
    `o valor da passegem de acordo com a kilometragem percorrida é R$${valueMoreTwoKm.toFixed(
      2
    )}`
  );
}
