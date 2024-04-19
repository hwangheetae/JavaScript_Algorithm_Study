const solution = (s) => {
  const stack = [];
  s.split(" ").forEach((item) => {
    if (item === "Z") {
      stack.pop();
    } else {
      stack.push(Number(item));
      console.log(stack);
    }
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
};
