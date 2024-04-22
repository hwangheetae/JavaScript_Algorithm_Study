const solution = (n) => {
  const arr = [];
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};
