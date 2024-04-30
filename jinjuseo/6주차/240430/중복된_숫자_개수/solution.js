const solution = (array, n) => {
  const filtered = array.filter((x) => x === n);
  return filtered.length;
};
