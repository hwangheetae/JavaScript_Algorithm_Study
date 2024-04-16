const solution = (box, n) => {
  const [a, b, c] = box;
  return Math.floor(a / n) * Math.floor(b / n) * Math.floor(c / n);
};
