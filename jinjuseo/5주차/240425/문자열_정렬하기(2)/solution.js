const solution = (my_string) => {
  return my_string
    .split("")
    .map((x) => x.toLowerCase())
    .sort()
    .join("");
};
