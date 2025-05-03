console.log(1 + "2");   // "12"
console.log("1" + true);   // "1true"
console.log("1" + {});   // "1[object Object]"
console.log("1" + null);   // "1null"
console.log("1" + undefined);   // "1undefined"

//숫자
console.log(1 - "2");   // -1
console.log("2" * "3");   // 6
console.log(4 + +"5");   // 9

console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true
console.log(Boolean({}));   // true


//명시적 변환

console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String({}));        // "[object Object]"

console.log(Number("123"));   // 123
console.log(Number(""));      // 0
console.log(Number("  "));    // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 산술 연산자

console.log(2 + 3);       // 5
console.log("2" + "3");   // "23"
console.log("2" + 3);     // "23"
console.log(2 + "3");     // "23"

console.log(5 - 2);       // 3
console.log("5" - "2");   // 3
console.log("5" - 2);     // 3
console.log(5 - "2");     // 3
console.log("five" - 2);  // NaN

console.log(2 * 3);       // 6
console.log("2" * "3");   // 6
console.log("2" * 3);     // 6
console.log(2 * "3");     // 6
console.log("two" * 3);   // NaN

console.log(6 / 3);       // 2
console.log("6" / "3");   // 2
console.log("6" / 3);     // 2
console.log(6 / "3");     // 2
console.log("six" / 3);   // NaN

console.log(7 % 3);       // 1
console.log("7" % "3");   // 1
console.log("7" % 3);     // 1
console.log(7 % "3");     // 1
console.log("seven" % 3); // NaN

// 할당 연산자

let x = 10;
console.log(x);   // 10

x = 5;
console.log(x);   // 5

x += 5;
console.log(x);   // 10

x -= 5;
console.log(x);   // 5

x /= 5;
console.log(x);   // 1

x %= 3;
console.log(x);   // 1

// 비교 연산자

console.log(2 === 2);   // true
console.log("2" === 2);   // false
console.log(2 === "2");   // false
console.log(2 !== 2);   // false
console.log("2" !== 2);   // true
console.log(2 !== "2");   // true

console.log(2 < 3);   // true
console.log(2 < "3");   // true
console.log("2" < 3);   // true

console.log(2 > 3);   // false
console.log(2 > "3");   // false
console.log("2" > 3);   // false

console.log(2 <= 3);   // true
console.log(2 <= "3");   // true
console.log("2" <= 3);   // true
console.log(2 <= 2);   // true

console.log(2 >= 3);   // false
console.log(2 >= "3");   // false
console.log("2" >= 3);   // false
console.log(2 >= 2);   // true

// 논리 연산자

console.log(true && true);   // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);   // false

console.log(true || true);   // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);   // false

console.log(!true);   // false
console.log(!false);   // true
console.log(!(2 > 1));   // false

// 삼항 연산자

let result = (x < 5) ? "크다" : "작다";
console.log(result);   // "크다"

// 타입 연산자

console.log(typeof 123);   // "number"
console.log(typeof "123");   // "string"
console.log(typeof true);   // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);   // "object"
console.log(typeof {});   // "object"
console.log(typeof []);   // "object"
console.log(typeof function(){});   // "function"