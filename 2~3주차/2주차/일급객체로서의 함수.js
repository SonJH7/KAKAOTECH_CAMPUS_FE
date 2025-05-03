//일급객체(First-class Object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다 (ex. 함수)

//함수는 변수에 할당할 수 있습니다. 함수는 값으로 취급되기 때문에, 
// 다른 변수와 마찬가지로 변수에 할당할 수 있습니다. 
// 변수에 할당된 함수는 나중에 사용할 수 있습니다.
const sayHello = function() {
    console.log('Hello!');
  };
  
  sayHello(); // "Hello!" 출력

  //콜백 함수. 그리고, 고차 함수(Higher-Order Function)란?

//- 콜백 함수는 어떠한 함수의 매개변수로 쓰이는 함수를 말해요. 4주차 때 정——말 깊게 배운답니다 😎
//- 고차 함수는 함수를 인자로 받거나 함수를 출력으로 반환하는 함수를 말해요! 함수를 다루는 함수라고도 하죠. 
// 정리하면 콜백함수는 고차함수라고도 할 수 있겠네요.

function callFunction(func) {
    func();
  }
  
  const sayHello = function() {
    console.log('Hello!');
  };
  
  callFunction(sayHello); // "Hello!" 출력

function createAdder(num) {
return function(x) {
    return x + num;
}
}

const addFive = createAdder(5);
console.log(addFive(10)); // 15 출력

// 객체의 프로퍼티로 함수를 할당
const person = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  person.sayHello(); // "Hello, my name is John" 출력

// 배열의 요소로 함수를 할당
const myArray = [
    function(a, b) {
      return a + b;
    },
    function(a, b) {
      return a - b;
    }
  ];
  
  console.log(myArray[0](5, 10)); // 15 출력
  console.log(myArray[1](10, 5)); // 5 출력



  function multiplyBy(num) {
    return function(x) {
      return x * num;
    }
  }
  
  function add(x, y) {
    return x + y;
  }
  
  const multiplyByTwo = multiplyBy(2);
  const multiplyByThree = multiplyBy(3);
  
  const result = add(multiplyByTwo(5), multiplyByThree(10)); // 40 출력