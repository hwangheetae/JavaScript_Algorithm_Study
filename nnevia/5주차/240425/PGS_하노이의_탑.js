function hanoi(n, start, end, sub, answer) {
  if (n === 1) { 
      answer.push([start, end]);
  } else {
  hanoi(n-1, start, sub, end, answer);
  answer.push([start, end])
  hanoi(n-1, sub, end, start, answer)
  }
}
function solution(n) {
  let answer = [];
  hanoi(n, 1, 3, 2, answer)
  return answer;
}