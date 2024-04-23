const solution = (my_string) => {
  const arr = my_string.split(" ");
  let sum = arr[0] * 1;
  let operator;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-") {
      operator = arr[i];
    } else {
      sum += operator === "+" ? arr[i] * 1 : arr[i] * -1;
    }
  }
  return sum;
};
