const solution = (emergency) => {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((x) => sorted.indexOf(x) + 1);
};
