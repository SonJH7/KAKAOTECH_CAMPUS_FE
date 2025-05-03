let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
  };

  function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  let person1 = new Person("홍길동", 30, "남자");
  let person2 = new Person("홍길순", 25, "여자");

console.log(person.name);   // "홍길동"
console.log(person.age);    // 30
console.log(person.gender); // "남자"


let keys = Object.keys(person);
  
console.log(keys);   // ["name", "age", "gender"]

let values = Object.values(person);

console.log(values);   // ["홍길동", 30, "남자"]

let entries = Object.entries(person);
  
console.log(entries);  // 2차원 배열로 반환

let newPerson = Object.assign({}, person, { age: 35 }); // 새로운 객체

console.log(newPerson);   // { name: "홍길동", age: 35, gender: "남자" }

let person3 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
  };
  
  let person7 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
  };
  
  console.log(person3 === person7);   // false
  console.log(JSON.stringify(person3) === JSON.stringify(person7));   // true

  let person8 = {
    name: "홍길동",
    age: 30
  };
  
  let person9 = {
    gender: "남자"
  };
  
  let mergedPerson = {...person1, ...person2};
  
  console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }


// 배열

let fruits = ["사과", "바나나", "오렌지"];
let numbers = new Array(5); //(배열 크기 지정)

console.log(fruits[0]);   // "사과"
console.log(fruits[1]);   // "바나나"
console.log(fruits[2]);   // "오렌지"

let fruits1 = ["사과", "바나나"];

fruits1.push("오렌지");

console.log(fruits1);   // ["사과", "바나나", "오렌지"]

fruits1.pop();

console.log(fruits1);   // ["사과", "바나나"]

let fruits2 = ["사과", "바나나", "오렌지"];

fruits2.shift();

console.log(fruits2);   // ["바나나", "오렌지"]

let fruits3 = ["바나나", "오렌지"];

fruits3.unshift("사과");

console.log(fruits3);   // ["사과", "바나나", "오렌지"]

let fruits7 = ["사과", "바나나", "오렌지"];  // 삭제 및 추가가

fruits7.splice(1, 1, "포도");

console.log(fruits7);   // ["사과", "포도", "오렌지"]

let fruits8 = ["사과", "바나나", "오렌지"];

let slicedFruits = fruits8.slice(1, 2);

console.log(slicedFruits);   // ["바나나"]

