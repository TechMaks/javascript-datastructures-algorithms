/*ES6: Destructurin assignment + property shorthend */
let [x, y] = ["a", "b"];
let obj = { x, y };
console.log(obj);

//swap
[x, y] = [y, x];
var temp = x;
x = y;
y = temp;

// code abore is the same as
var x2 = "a";
var y2 = "b";
var obj2 = { x2: x2, y2: y2 };
console.log(obj2);

//Method properties
const hello = {
  name: "Max",
  printHello() {
    console.log("Helo");
  },
};
console.log(hello.printHello());

// code abore is the same as
var hello2 = {
  name: "isa",
  printHello: function printHello() {
    console.log("Hello");
  },
};
console.log(hello2.printHello());
