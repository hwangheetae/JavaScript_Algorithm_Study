const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄의 입력(정수의 수)은 필요 없으므로 무시합니다.
// 나머지 줄을 정수 배열로 변환합니다.
let numbers = input.slice(1).map(Number);

// 배열을 오름차순으로 정렬합니다.
numbers.sort((a, b) => a - b);

// 정렬된 숫자를 한 줄씩 출력합니다.
numbers.forEach(number => console.log(number));