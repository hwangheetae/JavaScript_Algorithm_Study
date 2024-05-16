// 1차 풀이
function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
      for (let j = i + 1; j < number.length - 1; j++) {
          for (let k = j + 1; k < number.length; k++) {
              if (number[i] + number[j] + number[k] === 0) {
                  answer++;
              }
          }
      }
  }
  return answer;
}


// 2차풀이 백트래킹 사용 (구글)
// const NUM = 3;

// function solution(number) {
//     let ans = 0;
//     const tmp = [];
//     const backtrack = (cur) => {
//         if(tmp.length === NUM){
//             ans += tmp.reduce((a, b) => a + b) ? 0 : 1;
//             return;
//         }
        
//         for(let i = cur; i < number.length; i++){
//             tmp.push(number[i]);
//             backtrack(i + 1);
//             tmp.pop();
//         }   
//     }
    
//     backtrack(0);
//     return ans;
// }