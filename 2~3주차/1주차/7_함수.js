function add(x, y) {
    return x + y;
  }
  
  console.log(add(2, 3));   // 5
  let result = add(2, 3);
console.log(result);   // 5


// 전역 스코프

let x = 10;

function printX() {
  console.log(x);
}

printX();   // 10

// 지역 스코프

function printX() {
    let x = 10;
    console.log(x);
  }
  
  printX();   //

// 블록 스코프

if (true) {
    let x = 10;
    console.log(x);
  }
  
  console.log(x);   // ReferenceError: x is not defined

// 화살표 함수

let add = (x, y) => {
    return x + y;
  }
  
  console.log(add(2, 3));   // 5

let square = x => x * x;

console.log(square(3));   // 9