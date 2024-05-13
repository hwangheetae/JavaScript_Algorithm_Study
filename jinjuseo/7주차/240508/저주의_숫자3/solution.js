const solution = (n) => {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num++;
    while (num % 3 === 0 || (num + "").indexOf("3") !== -1) {
      num++;
    }
  }
  return num;
};
