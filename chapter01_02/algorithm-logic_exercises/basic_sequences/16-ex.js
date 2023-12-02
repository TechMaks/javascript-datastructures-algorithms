// [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const cigarretteDays = parseInt(prompt("Quantos cigarros você fuma por dia?"));
const cigarretteYaers = parseInt(prompt("Há quantos anos você fuma?"));

const minutesWastedSmoking = 10;
const daysYaers = 360;

const calculateLostTime = (cigarretteDays, cigarretteYaers) => {
  const cigarretteSmoking = cigarretteDays * cigarretteYaers * daysYaers;
  const lostTimeMinutes = cigarretteSmoking * minutesWastedSmoking;
  const lostTimeDays = lostTimeMinutes / 1440;

  return lostTimeDays;
};

const result = calculateLostTime(cigarretteDays, cigarretteYaers);

console.log(
  `Um fumante perderá aproximadamente ${result.toFixed(2)} dias de vida.`
);
