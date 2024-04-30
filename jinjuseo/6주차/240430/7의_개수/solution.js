const solution = (array) => {
  let sum = 0;
  array.forEach((str) => {
    const filtered = String(str)
      .split("")
      .filter((x) => x === "7");
    sum += filtered.length;
  });
  return sum;
};
