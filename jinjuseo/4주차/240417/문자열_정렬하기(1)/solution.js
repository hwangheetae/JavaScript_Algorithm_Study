const solution = (my_string) => {
  const num = "0123456789".split("");
  const arr = my_string
    .split("")
    .filter((x) => num.indexOf(x) !== -1)
    .map((x) => x * 1)
    .sort((a, b) => a - b);
  return arr;
};

//다른사람의 풀이 - 정규식

// function solution(my_string) {
//     return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
// }
