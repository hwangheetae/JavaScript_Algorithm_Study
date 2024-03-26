function solution(n) {
  let result = 0;
  if (n % 2 !== 0) {
    result = Math.pow(Number((n + 1) / 2), 2);
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        result += i * i;
      }
    }
  }
  return result;
}
