// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta.

const coefissentA = parseFloat(prompt("Coefissent A:"));
const coefissentB = parseFloat(prompt("Coefissent B:"));
const coefissentC = parseFloat(prompt("Coefissent C:"));

const calculateDelta = (coefissentA, coefissentB, coefissentC) => {
  return coefissentB * coefissentB - 4 * coefissentA * coefissentC;
};

const delta = calculateDelta(coefissentA, coefissentB, coefissentC);

console.log(`The value of delta is : ${delta}`);
