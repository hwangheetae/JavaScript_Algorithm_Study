const solution = (n) => {
  let i = 1;
  let num = 1;
  while (true) {
    num *= ++i;
    if (num > n) {
      i = i - 1;
      break;
    }
  }

  return i;
};
