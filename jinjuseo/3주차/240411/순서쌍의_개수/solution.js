const solution = (n) => {
  let count = 0;
  let k = Math.floor(Math.sqrt(n));
  let i = 1;
  while (i <= k) {
    if (n % i === 0) {
      count += 2;
    }
    i++;
  }
  if (Number.isInteger(Math.sqrt(n))) {
    count -= 1;
  }
  return count;
};
