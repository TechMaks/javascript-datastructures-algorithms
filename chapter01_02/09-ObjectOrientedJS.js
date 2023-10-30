/* Object example 1 */
var obj = new Object();

/* Object example 2 */
var obj = {};

obj = {
  name: {
    frist: "Max",
    Last: "Santos",
  },
  address: "Middle Earth",
};

/* Object example 3 */
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

var Book = new Book("title", "pag", "isbn");

console.log(Book.title); // outputs the book title

Book.title = "New title"; //update the value of the book title

console.log(Book.title); // outputs the updated value

Book.prototype.printTitle = function () {
  console.log(this.title);
};

Book.printTitle();

Book.printIsbn();
