let numbers = [1,2,3,4,5];

numbers.forEach(function(number) {
    console.log(number);
});

let squaredNumbers = numbers.map(function(number) {
    return number * number;
  });
  
  console.log(squaredNumbers);   // [1, 4, 9, 16, 25]

let evenNumbers = numbers.filter(function(number) {
return number % 2 === 0;
});

console.log(evenNumbers);   // [2, 4]

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum); // 15

let foundNumber = numbers.find(function(number) {
return number > 3;
});

console.log(foundNumber);   // 4 요소 반환

let hasEvenNumber = numbers.some(function(number) {
    return number % 2 === 0;
  });
  
  console.log(hasEvenNumber);   // true

let isAllEvenNumbers = numbers.every(function(number) {
return number % 2 === 0;
});

console.log(isAllEvenNumbers);   // true

numbers.sort(function(a, b) {
    return a - b;
  });
  
  console.log(numbers);   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

numbers.reverse();

console.log(numbers);   // [5, 4, 3, 2, 1]