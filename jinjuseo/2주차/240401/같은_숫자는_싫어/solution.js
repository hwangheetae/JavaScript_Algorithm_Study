/*
배열 arr: 각 원소는 0~9 로 이루어짐
연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 함.
단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야함.
*/
function solution(arr) {
  const stack = [];
  let top;
  arr.forEach((num) => {
    top = stack[stack.length - 1];
    if (top !== num) {
      stack.push(num);
    }
  });

  return stack;
}
