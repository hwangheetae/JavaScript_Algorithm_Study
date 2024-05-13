function solution(m, n, puddles) {
  let a = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  puddles.forEach(([i, j]) => {
      a[j][i] = 1;
  });

  a[1][0] = 1;

  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
          if (a[i][j]) {
              a[i][j] = 0;
          } else {
              a[i][j] = (a[i - 1][j] + a[i][j - 1]) % 1000000007;
          }
      }
  }
  return a[n][m];
}