const solution = (cipher, code) => {
  const filtered = cipher.split("").filter((x, i) => (i + 1) % code === 0);
  return filtered.join("");
};
