// 내 풀이
var c = 0;
function solution(a, b, n) {
  if (n < a) return c;
  if (n % a === 0) {
    c += parseInt(n / a) * b;
    return solution(a, b, parseInt(n / a) * b);
  } else {
    c += parseInt(n / a) * b;
    return solution(a, b, parseInt(n / a) * b + (n % a));
  }
}

// 간략하게 정리
let c = 0;
function solution(a, b, n) {
  if (n < a) return c;
  c += parseInt(n / a) * b;
  return solution(a, b, parseInt(n / a) * b + (n % a));
}

//다른 사람 풀이

solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
// Math.max(n - b, 0): 이 부분은 n에서 b를 빼고, 그 결과가 0보다 작지 않도록 합니다. 즉, 음수가 되지 않도록 하는 것입니다. 이는 연산 과정에서 n이 b보다 작을 경우를 처리하기 위함입니다.
// (a - b): a에서 b를 뺀 값으로 나눕니다. 이는 한 사이클에서 소모되는 '순수'한 양을 계산하기 위한 것입니다.
// * b: 마지막으로 위에서 계산된 사이클 수에 b를 곱하여, 최종적으로 얻을 수 있는 b의 양을 계산합니다.
