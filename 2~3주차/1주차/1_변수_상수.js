// var로 변수 선언 - 같은 이름의 변수를 여러 번 선언해도 오류 발생x
var myVar = "Hello World";
console.log(myVar); // "Hello World"

// let으로 변수 선언 - 같은 이름의 변수 두 번 선언시 오류
let myLet = "Hello World";
console.log(myLet); // "Hello World"

// const로 상수 선언 - 같은 이름의 변수 두 번 선언시 오류
const myConst = "Hello World";
console.log(myConst); // "Hello World"

let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // "number"

let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"

let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // "number"

let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"

let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"
