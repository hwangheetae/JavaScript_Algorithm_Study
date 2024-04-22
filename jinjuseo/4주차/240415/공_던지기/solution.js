const solution = (numbers, k) => {
  return numbers[((k - 1) * 2) % numbers.length];
};
