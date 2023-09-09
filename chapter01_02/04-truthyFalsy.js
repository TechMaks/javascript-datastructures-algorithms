function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(true); //true
testTruthy(false); //false
testTruthy(new Boolean(false)); // true (Object is always true)
testTruthy(""); //false
testTruthy("Max"); //true
testTruthy(new String("")); // true (Object is always true)
testTruthy(1); //true
testTruthy(-1); //true
testTruthy(NaN); //false
testTruthy(new Number(NaN)); //true (object is always true)
testTruthy({}); //true (object is always true)

var obj = { name: "Max Santos" };

testTruthy(obj); //true (object is alwys true)

testTruthy(obj.name); //true (property exist)
testTruthy(obj.age); //true (property does not exist)
