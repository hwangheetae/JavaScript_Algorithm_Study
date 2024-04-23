const solution = (my_string, num1, num2) => {
  const arr = my_string.split("");
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
  return arr.join("");
};
