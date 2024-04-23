const solution = (n) => {
  return fibonacci(n);
};
const fibonacci = (n) => {
  let fibo = new Array(n).fill(0);
  fibo[1] = 1;
  let i = 2;
  while (i <= n) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
    i++;
  }
  return fibo[n];
};
