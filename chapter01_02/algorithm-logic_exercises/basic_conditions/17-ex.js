// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

// Obtando a velocidade do carro
const carSpeed = parseFloat(prompt("Qual a velociadade do carro?"));

// Velocidade máxima permitida
const speedLimit = 80;
// valor da multa por km exedido
const fineKilometersExceeded = 5;

if (carSpeed > speedLimit) {
  const kmExeceeded = carSpeed - speedLimit;
  const fineVelue = kmExeceeded * fineKilometersExceeded;

  console.log(`Você foi multado! Velocidade acima do permitido.`);
  console.log(`Valor da multa a ser pago: R$${fineVelue.toFixed(2)}`);
} else {
  console.log("Velocidade dentro do limite permitido. Dirija com segurança!");
}
