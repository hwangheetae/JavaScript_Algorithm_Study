const solution = (array) => {
  const sorted = array.sort((a, b) => a - b);
  return sorted[(sorted.length - 1) / 2];
};
