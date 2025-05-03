let x = 10;


if (x > 0) {
  console.log("x는 양수입니다.");
} else if (x < 0) {
  console.log("x는 음수입니다.");
} else {
  console.log("x는 0입니다.");
}

let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과는 빨간색입니다.");
    break;
  case "바나나":
    console.log("바나나는 노란색입니다.");
    break;
  case "오렌지":
    console.log("오렌지는 주황색입니다.");
    break;
  default:
    console.log("해당하는 과일이 없습니다.");
    break;
}

let age = 20;
let gender = "여성";

if (age >= 18) {
  if (gender === "남성") {
    console.log("성인 남성입니다.");
  } else {
    console.log("성인 여성입니다.");
  }
} else {
  console.log("미성년자입니다.");
}

(x > 0) && console.log("x는 양수입니다.");

let ages = 20;
let message = (age >= 18) ? "성인입니다." : "미성년자입니다.";
console.log(message);   // "성인입니다."

let z;
let y = z || 10;  //위의 예제에서는 삼항 연산자를 사용하여 
// 변수 x가 존재하지 않는 경우 기본값으로 10을 사용합니다. 
// || 연산자를 사용하여 단축 평가(short-circuit evaluation)를 할 수 있습니다. 
// 변수 x가 존재하지 않는 경우, || 연산자는 false 값을 반환하고, 기본값으로 지정한 10을 반환합니다.

console.log(y);   // 10

if (0) {
    console.log("이 코드는 실행되지 않습니다.");
  }
  
  if ("") {
    console.log("이 코드는 실행되지 않습니다.");
  }
  
  if (null) {
    console.log("이 코드는 실행되지 않습니다.");
  }
  
  if (undefined) {
    console.log("이 코드는 실행되지 않습니다.");
  }
  
  if (NaN) {
    console.log("이 코드는 실행되지 않습니다.");
  }
  
  if (false) {
    console.log("이 코드는 실행되지 않습니다.");
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }