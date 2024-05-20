/*
프로그래머스
Lv.2 소수 찾기

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers는 길이 1 이상 7 이하인 문자열입니다.
numbers는 0~9까지 숫자만으로 이루어져 있습니다.
"013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
*/

// GPT 코드
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const primeSet = new Set();

  function generateCombinations(s_num, remaining) {
    if (s_num.length > 0) {
      const num = parseInt(s_num, 10);
      if (isPrime(num)) {
        primeSet.add(num);
      }
    }
    for (let i = 0; i < remaining.length; i++) {
      generateCombinations(s_num + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  generateCombinations("", numbers);

  return primeSet.size;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2