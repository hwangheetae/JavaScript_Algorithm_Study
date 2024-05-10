const solution = (numlist, n) => {
  numlist.sort((a, b) => {
    const x = Math.abs(n - a);
    const y = Math.abs(n - b);
    if (x !== y) {
      return x - y;
    } else {
      return b - a;
    }
  });

  return numlist;
};
