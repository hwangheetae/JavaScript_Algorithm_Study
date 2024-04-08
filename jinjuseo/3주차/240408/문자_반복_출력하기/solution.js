const solution = (my_string, n) => {
  return [...my_string].map((x) => x.repeat(n)).join("");
};
