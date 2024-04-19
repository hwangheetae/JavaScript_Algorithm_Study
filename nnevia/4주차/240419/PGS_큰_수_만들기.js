// 1차 실패 (순열공식 시간초과)
// function solution(number, k) {
//   let num = number.split('');
//   let combinations = [];
//   for (let i = 0; i < num.length - k + 1; i++) {
//       combinations.push(num.slice(i, i + num.length-k));
//   }
//   let maxCombination = combinations.reduce((a, b) => {
//       return parseInt(a.join('')) > parseInt(b.join('')) ? a : b;
//   });
//   return maxCombination.join('');
// }

// 2차 gpt 활용
function solution(number, k) {
  let stack = [];
  for (let i of number) {
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] < i) {
          stack.pop();
          k--;
      }
      
      stack.push(i);
  }
  
  while (k > 0) {
      stack.pop();
      k--;
  }
  
  return stack.join('');
}