const solution = (num, total) => {
  let medium = Math.floor(total / num);
  let medIndex = num % 2 > 0 ? Math.floor(num / 2) : num / 2 - 1;
  let arr = new Array(num)
    .fill(medium)
    .map((x, i) => (i > medIndex ? x + (i - medIndex) : x - (medIndex - i)));
  return arr;
};
