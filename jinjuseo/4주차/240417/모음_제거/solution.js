const solution = (my_string) => {
  const regex = /a|e|i|o|u/gi;
  return my_string.replaceAll(regex, "");
};
