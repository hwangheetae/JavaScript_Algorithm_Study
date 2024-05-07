const solution = (my_string) => {
  let sum = 0;
  let numbers = "0123456789";
  let i = "";
  const filtered = my_string.split("").map((x) => {
    if (numbers.indexOf(x) !== -1) {
      return x;
    } else {
      return " ";
    }
  });
  filtered.forEach((x) => {
    if (x !== " ") {
      i += x;
    } else {
      sum += Number(i);
      i = "";
    }
  });
  sum += Number(i);
  return sum;
};

//다른 사람 풀이 : 나는정규식에 약하다... 정규식 문제를 많이 풀어봐야겠따
// function solution(my_string) {
//   return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
// }
