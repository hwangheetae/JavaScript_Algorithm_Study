const solution = (my_string) => {
  const arr = my_string.split("").map((x) => {
    return x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
  });
  return arr.join("");
};
