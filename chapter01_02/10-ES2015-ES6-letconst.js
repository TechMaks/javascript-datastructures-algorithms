/* ES6: let is the new var */
var framework = "Angular";
var framework = "React";
console.log(framework);

let language = "Javascript";
// let language = "Golang"; // throws error
console.log(language);

/* ES6: const */

const PI = 3.141593;
// PI = 3.0; // throws error
console.log(PI);

const jsFramework = {
  name: "Angular",
};

jsFramework.name = "React";

// error, cannot reassign object reference
/*
jsFramework = {
  name: 'Vue'
};
*/
