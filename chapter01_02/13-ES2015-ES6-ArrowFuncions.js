/* ES6: Arrow functions */
var circleArea1 = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
};

console.log(circleArea1(2));

/* Using arrow functions */

const circleArea = (r) => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};

console.log(circleArea(2));

const circleArea2 = (r) => 3.14 * r * r;
console.log(circleArea2(2));

const hello = () => console.log("Hello!");
hello();
