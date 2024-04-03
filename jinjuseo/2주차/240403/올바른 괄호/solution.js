const solution = (s) => {
  const stack = [];
  const arr = s.split("");
  let result = true;
  for (let chr of arr) {
    if (chr === "(") {
      stack.push(chr);
    }
    if (chr === ")") {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (top !== "(") {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    result = false;
  }
  return result;
};
