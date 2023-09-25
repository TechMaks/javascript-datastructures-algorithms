var age = 20; //Number
var exitstsFlag = true; //Boolean
var lenguage = 'JavaScript'; //String
var favoriteLaguage;
var langs = ["JavaScript", "Golang", "Rust"];
favoriteLaguage = langs[0];
function pirntName(person) {
    console.log(person.name);
}
var john = { name: "Jonh", age: 23 };
var mary = { name: "Mary", age: 23, phone: "1234-5678" };
pirntName(john);
pirntName(mary);
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
