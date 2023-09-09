// Packt == true

console.log("packt" ? true : false);
// outupus true

console.log("packt" == true);
// 1 - converts Boolean using toNumber
// "packt" == 1
// 2 - converts String using toNumber
// NaN == 1
// outputs false

console.log("packt" == false);
// 1 - converts Boollen using toNumber
// "packt" == 0
// 2 - converts String using toNuber
// NaN == 0
// outputs false

// type ===

console.log("packt" === true); //false
console.log("packt" === "packt"); //true

var person1 = { name: "John" };
var person2 = { name: "John" };

console.log(person1 === person2); // false, different objects
