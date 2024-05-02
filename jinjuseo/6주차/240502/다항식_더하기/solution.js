const solution = (polynomial) => {
  const arr = polynomial.split(" ");
  let x = 0;
  let constant = 0;
  arr.forEach((item) => {
    if (item.indexOf("x") !== -1) {
      if (item === "x") {
        x += 1;
      } else {
        x += item.split("x")[0] * 1;
      }
    } else if (item !== "+") {
      constant += item * 1;
    }
  });
  let result = "";
  if (x > 0) {
    if (x === 1) result += "x";
    else result += x + "x";
  }
  if (constant > 0) {
    if (result !== "") result += " + " + constant;
    else result += constant;
  }
  return result;
};
