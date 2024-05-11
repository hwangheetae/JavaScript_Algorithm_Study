const solution = (i, j, k) => {
  const arr = new Array(j - i + 1).fill(i).map((x, i) => i + x);
  let count = 0;
  arr.forEach((num) => {
    const filtered = (num + "")
      .split("")
      .filter((x) => x.indexOf(k + "") !== -1);
    count += filtered.length;
  });
  return count;
};
