//  Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.

const productPrice = parseFloat(prompt("Price:"));

const discount = 5;

const calculateDiscountPrice = (discount / 100) * productPrice;

console.log(`The discount is: R$${calculateDiscountPrice.toFixed(2)}`);

const pricePromotion = productPrice - calculateDiscountPrice;

console.log(
  `The price of product with discount of 5% is: RS${pricePromotion.toFixed(2)} `
);
