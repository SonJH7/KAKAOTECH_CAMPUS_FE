/*
💡[맵에는 다음과 같은 주요 메서드와 프로퍼티가 있습니다]
new Map() – 맵을 만듭니다.
map.set(key, value) – key를 이용해 value를 저장합니다.
map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
map.delete(key) – key에 해당하는 값을 삭제합니다.
map.clear() – 맵 안의 모든 요소를 제거합니다.
map.size – 요소의 개수를 반환합니다.
*/

const myMap7 = new Map();
myMap7.set('key', 'value'); // 값 추가
console.log(myMap7.get('key')); // 값 검색 'value' 출력

var iterable = [10, 20, 30];

for (var valueof iterable) {
  console.log(value);// 10, 20, 30
}

const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log(myMap.size); // 3 출력

console.log(myMap.has('two')); // true 출력