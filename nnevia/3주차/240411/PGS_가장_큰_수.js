// # 1차 풀이 (오답)
// function solution(numbers) {
//   let answer = '';
//   for (let i of numbers) {
//       i = String(i);
//       let a = parseInt(answer + i);
//       let b = parseInt(i + answer);
//       answer = String(Math.max(a, b));
//       console.log(a, b, answer);
//   }
//   return answer;
// }

// #2차 gpt
// function solution(numbers) {
//   numbers.sort((a, b) => {
//       const num1 = String(a) + String(b);
//       const num2 = String(b) + String(a);
//       return num2 - num1;
//   });
  
//   if (numbers[0] === 0) return "0";
  
//   return numbers.join('');
// }

// #3차 개선
function solution(numbers) {
  const answer = numbers
  .map(number => String(number))
  .sort((a, b) => (b + a) - (a + b))
  .join('');
  
  return numbers[0] === '0' ? '0' : answer;
}