let age = 20; //Number
let exitstsFlag = true; //Boolean
let lenguage = 'JavaScript'; //String


let favoriteLaguage: string;    
let langs = ["JavaScript", "Golang", "Rust"]
favoriteLaguage = langs[0];


interface Person{
    name: string;
    age: number;
}

function pirntName(person: Person) {
    console.log(person.name)
}


const john = { name: "Jonh", age: 23 };
const mary = { name: "Mary", age: 23, phone: "1234-5678" };

pirntName(john);
pirntName(mary);

interface Comparable {
compareTo(b): number;
}
class MyObject implements Comparable {
age: number;
compareTo(b): number {
if (this.age === b.age) {
return 0;
}
return this.age > b.age ? 1 : -1;
}
}
