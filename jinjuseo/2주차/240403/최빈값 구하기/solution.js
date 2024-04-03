const solution = (array) => {
  const dict = {};
  array.forEach((num) => {
    if (num in dict) {
      dict[num] += 1;
    } else {
      dict[num] = 1;
    }
  });
  const maxCount = Math.max(...Object.values(dict));
  const filtered = Object.entries(dict).filter(
    ([num, count]) => count === maxCount
  );
  return filtered.length > 1 ? -1 : Number(filtered[0][0]);
};
