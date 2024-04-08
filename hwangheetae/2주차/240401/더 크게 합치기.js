function solution(a, b) {
  let answer1 = Number(String(a) + String(b));
  let answer2 = Number(String(b) + String(a));

  return answer1 > answer2 ? answer1 : answer2;
}

//다른 풀이

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
