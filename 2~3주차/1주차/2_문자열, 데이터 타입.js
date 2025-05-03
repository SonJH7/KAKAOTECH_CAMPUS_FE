let name = 'Alice';
let message = "Hello, world!";

let str = "Hello, world!";
console.log(str.length); // 13

let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // "Hello, world!"

console.log(str.substring(7, 5)); // "world"
console.log(str.slice(7, 12)); // "world"
console.log(str.search("world")); // 7
console.log(result); // "Hello, JavaScript!"

let str3 = "apple, banana, kiwi";
let result1 = str.split(",");
console.log(result); // ["apple", " banana", " kiwi"]

// Boolean

let bool1 = true;
console.log(bool1); // true
console.log(typeof bool1); // "boolean"

let bool2 = false;
console.log(bool2); // false
console.log(typeof bool2); // "boolean"

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// undefined
let x;
console.log(x); // undefined

// null <-> undefined
let y = null;

// Object
let person = { name: 'Alice', age: 20 };
person.name // 'Alice'
person.age // 20

// Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];