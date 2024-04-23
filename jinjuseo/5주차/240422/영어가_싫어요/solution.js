const solution = (numbers) => {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let i = 0;
  let word = "";
  let result = "";
  for (let char of numbers) {
    word += char;
    if (num.indexOf(word) !== -1) {
      result += num.indexOf(word);
      word = "";
    }
  }
  return result * 1;
};
