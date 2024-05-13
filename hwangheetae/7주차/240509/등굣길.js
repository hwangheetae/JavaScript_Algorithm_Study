//내 시도

function solution(m, n, puddles) {
  const arr = Array.from(Array(m), () => new Array(n).fill(1));
  for (item of puddles) {
    [i, j] = item;
    arr[i - 1][j - 1] = 0;
  }
  const memo = Array.from(Array(m), () => new Array(n).fill(0));

  memo[0][0] = 1;
  console.log(memo);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      if (arr[i][j] === 1) {
        if (i === 0) {
          memo[i][j] === memo[i][j - 1];
        }
        if (j === 0) {
          memo[i][j] === memo[i + 1][j];
        }
        memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
      }
    }
  }
  console.log(arr);
}

//정답
function solution(m, n, puddles) {
  const arr = Array.from({ length: n }, () => Array(m).fill(0));
  arr[0][0] = 1;
  const MOD = 1000000007;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (puddles.some(([x, y]) => x === j + 1 && y === i + 1)) {
        arr[i][j] = 0;
      } else {
        arr[i][j] =
          ((i > 0 ? arr[i - 1][j] : 0) + (j > 0 ? arr[i][j - 1] : 0)) % MOD;
      }
    }
  }

  return arr[n - 1][m - 1];
}
