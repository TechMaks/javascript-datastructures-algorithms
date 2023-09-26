/* Arithmetic operators */

var num = 0;
console.log(`Num value is ${num}`);

num = num + 2; //Sum
console.log(`New num value is ${num}`);

num = num * 3; //Multiply
console.log(`New num value is ${num}`);

num = num / 2; //Division
console.log(`New num value is ${num}`);

num++; //Increment

num--; //Decrement

console.log(`New num value is ${num}`);

console.log("num mod 2 value is " + (num % 2)); //Rest of division

/* Assignment operators */
num += 1; //Assign sum
num -= 2; //Assign subtract
num *= 3; //Assign mutiply
num /= 2; //Assing division
num %= 3; //Assing rest of division

console.log(`New num value is ${num}`);

/* Comparison operators */
console.log("num == 1 : " + (num == 1)); //Equal to
console.log("num === 1 : " + (num === 1)); //Equal to value and string
console.log("num != 1 : " + (num != 1)); //Different than
console.log("num > 1 : " + (num > 1));
console.log("num < 1 : " + (num < 1));
console.log("num >= 1 : " + (num >= 1));
console.log("num <= 1 : " + (num <= 1));

/* Logical operators*/

console.log("true && false: " + (true && false)); //true and false ? 'E'
console.log("true || false: " + (true || false)); //true or false? 'ou'
console.log("!true :" + !true); //true not is true 'negação'

/* Bitwise operators */

console.log("5 & 1 :", 5 & 1); // 5 and 1
console.log("5 | 1 :", 5 | 1); //5 or 1
console.log("~ 5 :", ~5); // 5 not is 5 'negation'
console.log("5 ^ 1 :", 5 ^ 1); //xor (ou exclusivo)
// console.lgo("5 << 1 :", 5 << 1); //left shift
// console.lgo("5 >> 1 :", 5 >> 1); //right shift

/* typeof operator return the type of varialble */
console.log("typeof num:", typeof num);
console.log("typeof Packt:", typeof "Packt");
console.log("typeof true:", typeof true);
console.log("typeof [1,2,3]:", typeof [1, 2, 3]);
console.log("typeof {name:John}:", typeof { name: "John" });

/* Delete operator */

var myObj = { name: "John", age: 21 };
delete myObj.age;

console.log(myObj);
