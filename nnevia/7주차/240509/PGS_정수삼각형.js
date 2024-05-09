// 1차 풀이
function solution(triangle) {
  let height = triangle.length;
  let dp = triangle.slice();
  
  for (let i = 1; i < height; i++) {
      for (let j = 0; j < triangle[i].length; j++) {
          if (j === 0) {
              dp[i][j] += dp[i-1][j];
          } else if (j === triangle[i].length - 1) {
              dp[i][j] += dp[i-1][j-1];
          } else {
              dp[i][j] += Math.max(dp[i-1][j-1], dp[i-1][j]);
          }
      }
  }
  
  return Math.max(...dp[height-1]);
}

// 코드 간결화 (gpt이용)
// function solution(triangle) {
//   const dp = [...triangle];
  
//   for (let i = 1; i < triangle.length; i++) {
//       for (let j = 0; j < triangle[i].length; j++) {
//           dp[i][j] += Math.max(
//               j > 0 ? dp[i-1][j-1] : 0,
//               j < triangle[i].length - 1 ? dp[i-1][j] : 0
//           );
//       }
//   }
  
//   return Math.max(...dp[triangle.length - 1]);
// }