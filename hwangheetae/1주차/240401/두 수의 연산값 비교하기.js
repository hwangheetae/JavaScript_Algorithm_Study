function solution(a, b) {
  let answer = Number(`${a}${b}`);
  return answer >= 2 * a * b ? answer : 2 * a * b;
}

//다른 풀이1
//parseInt
//parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환 (default base-10)
function solution(a, b) {
  let num1 = parseInt(a + "" + b + "");
  let num2 = 2 * a * b;
  return num1 > num2 ? num1 : num2;
}

//다른 풀이2
//toString() 임의의 숫자형(number) 값을 문자열(string)로 변환하는 자바스크립트 Number 객체의 내장 메서드
function solution(a, b) {
  const answerA = Number(a.toString() + b.toString());
  const answerB = 2 * a * b;

  return answerA > answerB ? answerA : answerB;
}
