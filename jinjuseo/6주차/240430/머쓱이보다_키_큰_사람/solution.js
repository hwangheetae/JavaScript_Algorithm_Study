const solution = (array, height) => {
  return array.filter((x) => x > height).length;
};
