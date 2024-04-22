const solution = (sides) => {
  const [a, b, c] = sides.sort((a, b) => a - b);
  return c < a + b ? 1 : 2;
};
