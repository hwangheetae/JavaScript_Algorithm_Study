const solution = (numbers) => {
  const sorted = numbers.sort((a, b) => {
    return compare(a, b);
  });
  const numZero = sorted.filter((x) => x === 0);
  if (sorted.length === numZero.length) {
    return "0";
  }
  return sorted.join("");
};
const compare = (a, b) => {
  const ab = Number(String(a) + String(b));
  const ba = Number(String(b) + String(a));
  return ba - ab >= 0 ? 1 : -1;
};
