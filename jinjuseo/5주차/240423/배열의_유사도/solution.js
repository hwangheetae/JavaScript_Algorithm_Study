const solution = (s1, s2) => {
  const intersect = s1.filter((x) => s2.includes(x));
  return intersect.length;
};
