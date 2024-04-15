const solution = (dot) => {
  if (dot[0] > 0) {
    return dot[1] > 0 ? 1 : 4;
  }
  return dot[1] > 0 ? 2 : 3;
};
