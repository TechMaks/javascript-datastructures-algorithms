let daysOfWeek = new Array();

daysOfWeek = new Array(7);

daysOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday"
);

// prefered

daysOfWeek = [];
daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/* length displays number of elements in the array */
console.log("daysOfWeek.length", daysOfWeek.length);

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// fibonacci numbers
// 0, 1, 2, 3, 4, 5, 8, 13, 21, 34, ...

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(`fibonacci[${i}]`, fibonacci[i]);
}

// Insteade of {5} and {6} we can simple use

console.log("fibonacci", fibonacci);
