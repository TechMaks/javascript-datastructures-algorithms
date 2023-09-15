/* Example - if */
var num = 1;
if (num === 1) {
  console.log("num is equal to 1");
}

/* Example - if-else */
var num = 0;
if (num === 1) {
  console.log("num is equal to 1");
} else {
  console.log(`num is not equal to 1, the value of num is ${num}`);
}

/* Example - if-else-if-else.... */
var month = 1;
if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("Mach");
} else {
  console.log("Month is not January, February or Mach");
}

/* Example - switch */
var month = 5;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("Mach");
    break;
  default:
    console.log("Month is not January, February or Mach");
}

/* Example - ternary operator - if .. else */

var num = 1;

if (num === 1) {
  num--;
} else {
  num++;
}

//  is the same as
num === 1 ? num-- : num++;
