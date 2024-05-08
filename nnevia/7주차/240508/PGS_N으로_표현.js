// 구글링
function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());
  dp[1].add(N);
  
  for (let i = 1; i <= 8; i++) {
      dp[i].add(Number(String(N).repeat(i)));
      for (let j = 1; j < i; j++) {
          for (const num1 of dp[j]) {
              for (const num2 of dp[i - j]) {
                  dp[i].add(num1 + num2);
                  dp[i].add(num1 * num2);
                  dp[i].add(num1 - num2);
                  dp[i].add(Math.floor(num1 / num2));
              }
          }
      }
      if (dp[i].has(number)) {
          return i;
      }
  }
  
  return -1;
}


//gpt 이용 bfs
// function solution(N, number) {
//   if (N === number) {
//       return 1;
//   }

//   const queue = [{ num: N, count: 1 }]; // BFS를 위한 큐

//   // BFS 탐색
//   while (queue.length > 0) {
//       const { num, count } = queue.shift();

//       // 현재 숫자가 number와 같은지 확인
//       if (num === number) {
//           return count;
//       }

//       // 숫자를 추가로 사용하여 다음 숫자를 만들고 큐에 추가
//       for (const next of [N * 10 + N, num + N, num - N, num * N, Math.floor(num / N)]) {
//           if (1 <= next && next <= 32000) { // 주어진 제한사항에 맞는지 확인
//               queue.push({ num: next, count: count + 1 });
//           }
//       }
//   }

//   return -1; // number를 만들 수 없는 경우
// }