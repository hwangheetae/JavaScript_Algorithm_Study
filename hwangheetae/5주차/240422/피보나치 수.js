const memo = new Array(100001).fill(0);
memo[0] = 0;
memo[1] = 1;

for (let i = 2; i < 100001; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
}
function solution(n) {
  return memo[n];
}
