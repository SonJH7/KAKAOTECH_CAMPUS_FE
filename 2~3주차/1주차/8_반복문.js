for (let i = 0; i < 10; i++) {
    console.log(i);
  }

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}

let person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 10);