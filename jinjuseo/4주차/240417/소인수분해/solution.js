const solution = (n) => {
  const set = new Set();
  let divide = n;
  let i = 2;
  while (divide !== 1) {
    if (divide % i === 0) {
      set.add(i);
      divide /= i;
      continue;
    }
    i++;
  }
  return Array.from(set);
};
