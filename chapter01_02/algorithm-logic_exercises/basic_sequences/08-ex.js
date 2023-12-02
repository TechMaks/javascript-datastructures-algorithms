// Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

const meters = parseFloat(prompt("Type it one distance in meters:"));

// Perform conversions to other units of measurement

const km = meters / 1000;
const hm = meters / 100;
const dam = meters / 10;
const dm = meters * 10;
const cm = meters * 100;
const mm = meters * 1000;

// Display the results
console.log(`The distance of ${meters}m corresponds to:`);
console.log(`${km}Km`);
console.log(`${hm}Hm`);
console.log(`${dam}Dam`);
console.log(`${dm}dm`);
console.log(`${cm}cm`);
console.log(`${mm}mm`);
