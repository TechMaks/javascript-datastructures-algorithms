// Concatenando arrays usando a tag concat

const numberZero = [0];

const positeNumbers = [1, 2, 3];
const negativeNumbers = [-1, -2, -3];

let numbers = negativeNumbers.concat(numberZero, positeNumbers);

console.log(numbers);

// função de interação

const isEven = (x) => x % 2 === 0;

let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Numbers", numbersTwo);

// Executado a função

console.log(numbersTwo.every(isEven)); // percorre todos elementos até encontrar o false value
console.log(numbersTwo.some(isEven)); // precorre todos elementos até encontrat o true value

//  Interando usando forEach
numbersTwo.forEach((x) =>
  console.log(`numbersTwo.forEach: ${x} % 2 === 0`, x % 2 === 0)
);

// map and filter
console.log("map and filter");
console.log("numbers.map(isEven)", numbersTwo.map(isEven)); // Armazena o resultado da função isEven, desse modo é possivel saber se o número é par ou não.

console.log("numbers.filter(isEven)", numbersTwo.filter(isEven)); // Devolve um novo arrya com os elementos para quais a função devolveu true.

console.log("-----------------");

// método reduce

numbersTwo.reduce((previous, current) => previous + current);

// Esses três métodos (map, filter e reduce) constituem a base da programação funcional em JavaScript
