const solution = (number, k) => {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    //stack head와 현재 값 비교 - 현재값이 헤드보다 더 크면 stack.pop, k
    while (k && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }

    if (k === 0) {
      //제거할 숫자개수가 0이면 이후 나머지 값들 stack에 푸시해줌
      for (const element of number.slice(i).split("")) {
        stack.push(element);
      }
      break;
    }

    stack.push(number[i]); //stack에 값 푸시
  }

  //위 포문을 도는동안 k값이 0이되지 않았으면  남은 갯수만큼 splice해줌(배열에서 개수만큼 요소제거- 끝에서 k개)
  stack.splice(stack.length - k, k);
  return stack.join("");
};
