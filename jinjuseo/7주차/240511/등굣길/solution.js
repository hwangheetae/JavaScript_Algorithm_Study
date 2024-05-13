const solution = (m, n, puddles) => {
  // # 격자 생성 및 초기화
  let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
  //     # 물에 잠긴 지역 표시
  if (puddles[0].length > 0) {
    puddles.forEach(([a, b]) => (dp[b][a] = -1));
  }
  //     # 시작 지점 초기화
  dp[1][1] = 1;
  //     # 다이나믹 프로그래밍을 통해 최단 경로 개수 계산

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) {
        continue;
      }
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }
  return dp[n][m];
};
