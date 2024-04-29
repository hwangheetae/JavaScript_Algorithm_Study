//오답
function solution(n) {
  if (n === 1) {
    return 1;
  }
  return solution(n - 1) * 2 + 1;
}

//정답
function solution(n) {
  var answer = [];

  function hanoi(n, start, end, mid) {
    if (n === 1) {
      answer.push([start, end]);
    } else {
      hanoi(n - 1, start, mid, end);
      hanoi(1, start, end, mid);
      hanoi(n - 1, mid, end, start);
    }
  }
  hanoi(n, 1, 3, 2);
  return answer;
}
