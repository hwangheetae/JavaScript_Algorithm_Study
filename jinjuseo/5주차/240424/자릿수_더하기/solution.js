const solution = (n) => {
  return (n + "").split("").reduce((acc, cur) => acc + cur * 1, 0);
};
