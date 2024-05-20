const solution = (number) => {
  let sum = 0;
  let arr = [];

  while (number.length > 3) {
    const curr = number.pop();
    for (let i = 0; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
        if (curr + number[i] + number[j] === 0) {
          arr.push([curr, number[i], number[j]]);
        }
      }
    }
  }
  if (number.reduce((a, c) => a + c) === 0) arr.push([...number]);

  return arr.length;
};
