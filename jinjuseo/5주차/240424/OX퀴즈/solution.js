const solution = (quiz) => {
  return quiz.map((str) => right(str));
};
const right = (str) => {
  const [num1, operator, num2, ecole, result] = str.split(" ");
  let sum = num1 * 1;
  sum += operator === "+" ? num2 * 1 : num2 * -1;
  return sum === result * 1 ? "O" : "X";
};
