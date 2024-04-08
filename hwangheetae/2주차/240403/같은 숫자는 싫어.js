//내코드 - 오답 이유를 모르겠음

function solution(arr) {
  var answer = [];

  for (item of arr) {
    if (answer.length === 0 || item !== answer.at(-1)) {
      answer.push(item);
    } else if (item === answer.at(-1)) continue;
  }

  return answer;
}

//gpt

function solution(arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    // 배열의 첫 번째 요소이거나 현재 요소가 이전 요소와 다른 경우에만 answer 배열에 추가
    if (i === 0 || arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

//다른 사람 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
