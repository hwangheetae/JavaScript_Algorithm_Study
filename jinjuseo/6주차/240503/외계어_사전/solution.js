const solution = (spell, dic) => {
  let result = false;
  dic.forEach((word) => {
    const filtered = word.split("").filter((x, i) => spell.includes(x));
    const set = new Set(filtered);
    if (spell.length === set.size) result = true;
  });
  return result ? 1 : 2;
};
