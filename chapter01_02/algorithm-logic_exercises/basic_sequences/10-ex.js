// Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const height = parseFloat(prompt("Height:"));
const width = parseFloat(prompt("Width:"));

const CalculatePaint = (height, width) => {
  const area = height * width;
  const paintArea = area / 2;

  return {
    area: area,
    paintArea: paintArea,
  };
};

const result = CalculatePaint(height, width);

console.log(`Area to be painted: ${result.area} square meters`);
console.log(`Amount of paint required: ${result.paintArea} liters`);
