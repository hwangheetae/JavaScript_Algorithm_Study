const solution = (age) => {
  const alpha = new Array(10)
    .fill("a")
    .map((x, i) => String.fromCharCode(x.charCodeAt() + i));
  const chars = String(age)
    .split("")
    .map((x) => alpha[x])
    .join("");
  return chars;
};
