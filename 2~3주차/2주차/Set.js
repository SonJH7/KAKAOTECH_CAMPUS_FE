const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');

for (const value of mySet.values()) {
  console.log(value);
}

console.log(mySet.has('value1')); // true 출력

console.log(mySet.size); // 3 출력