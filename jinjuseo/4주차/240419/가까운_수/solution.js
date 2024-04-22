const solution = (array, n) => {
  const arr = [...array, n].sort((a, b) => a - b);
  const index = arr.indexOf(n);
  let lower, upper;
  lower = index > 0 ? arr[index - 1] : null;
  upper = index < arr.length - 1 ? arr[index + 1] : null;
  if (lower && upper) {
    return Math.abs(n - lower) <= Math.abs(upper - n) ? lower : upper;
  } else {
    return lower === null ? upper : lower;
  }
};
