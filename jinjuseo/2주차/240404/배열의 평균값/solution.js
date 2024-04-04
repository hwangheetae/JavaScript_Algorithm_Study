const solution = (numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / numbers.length;
  return avg;
};
