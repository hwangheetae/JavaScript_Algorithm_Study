const solution = (s) => {
  const arr = s.split("");
  const filtered = arr
    .filter(
      (x, i) =>
        arr
          .slice(0, i)
          .concat(arr.slice(i + 1))
          .indexOf(x) === -1
    )
    .sort();
  return filtered.join("");
};
