const solution = (num, k) => {
  const index = (num + "").indexOf(k);
  return index !== -1 ? index + 1 : index;
};
