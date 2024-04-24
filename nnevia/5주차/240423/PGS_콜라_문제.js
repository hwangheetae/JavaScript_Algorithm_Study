function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
      var temp_bottle = parseInt(n / a)
      var temp_cola = n % a
      answer += temp_bottle*b
      n = temp_cola + temp_bottle*b
  }
  return answer;
}