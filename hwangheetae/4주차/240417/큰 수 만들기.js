function solution(number, k) {
  let stack = [];
  let count = 0; // 제거한 숫자의 카운트

  for (let i = 0; i < number.length; i++) {
    let current = number[i];
    // 스택의 마지막 원소가 현재 숫자보다 작고, 제거할 수 있는 기회가 남아 있는 동안 반복
    while (stack.length > 0 && stack[stack.length - 1] < current && count < k) {
      stack.pop();
      count++;
    }
    stack.push(current);
  }

  // 스택에는 최대 숫자의 요소들이 들어있지만, k개를 제거하지 못했을 수도 있으므로
  // 남은 제거 횟수만큼 뒤에서 요소를 제거
  while (count < k) {
    stack.pop();
    count++;
  }

  // 스택의 요소들을 문자열로 합침
  return stack.join("");
}

// 코드 설명
// 스택 초기화: 숫자들을 저장할 스택을 초기화합니다.
// 숫자 탐색: 입력된 문자열 number를 한 글자씩 탐색합니다.
// 스택 조건 검사: 스택의 마지막 원소가 현재 숫자보다 작고, 아직 제거할 수 있는 횟수(k)가 남아 있다면, 스택에서 원소를 제거합니다.
// 숫자 삽입: 현재 숫자를 스택에 삽입합니다.
// 제거 횟수 조정: 모든 숫자를 검토했지만 k번 모두 숫자를 제거하지 못했을 경우, 스택의 끝에서 남은 횟수만큼 더 제거합니다.
// 결과 반환: 스택에 남아있는 숫자를 문자열로 합쳐 반환합니다.
