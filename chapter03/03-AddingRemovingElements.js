let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Original array", numbers);

/* Inserting an element in the end of the array */

// add a new element to the numbers array
numbers[numbers.length] = 10;
console.log("Add 10 tho the end", numbers);

numbers.push(11);
console.log("Add 11 using method push", numbers);

numbers.push(12, 13);
console.log("Add 12 and 13 using method push", numbers);

//insert first position manually
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);
console.log("Add -1 with insertFirstPosition", numbers);

// Using method unshift
numbers.unshift(-2);
console.log("Add -2 using method unshift", numbers);

numbers.unshift(-3, -4);
console.log("Add -3 and -4 using method unshift", numbers);

/* Removing elements */
numbers.pop();
console.log("Removed last value with pop", numbers);

// Reset array
numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Recreated method reindex of array

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
    return newArray;
  }
};

// Remove first position manually and reIndex

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();
console.log("Removed first with removeFirstPosition + reIndex", numbers);

// Using method shift
numbers.shift();
console.log("Removed first using method shift", numbers);
console.log("Lenght after removed first using method shift", numbers.length);

/* Removing and adding elements from the middle of the array or specific position */
// Splice method - paramter

numbers.splice(5, 3);
console.log("Removing 3 elements (3, 4, 5) starting index 5", numbers);

numbers.splice(5, 0, 2, 3, 4);
console.log("Adding 3 elements (2, 3, 4) starting index 5", numbers);

numbers.splice(5, 3, 2, 3, 4);
console.log(
  "Removing 3 elements starting index 5 and adding (2, 3, 4)",
  numbers
);
