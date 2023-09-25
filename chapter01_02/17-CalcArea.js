// export const circleArea = (r) => 3.14 * r ** 2;

// export const squareArea = (s) => s * s;

// // export { circleArea, squareArea }; // {1}
// export { circleArea as circle, squareArea as square };

import * as area from "./17-CalcArea.js"; // we need the .js to run this code in the browser
import Book from "./17-Book.js";

console.log(area.circle(2));
console.log(area.square(2));

const myBook = new Book("some title");
myBook.printTitle();
