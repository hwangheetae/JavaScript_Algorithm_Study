function solution(s) {
  var answer = true;
  stack = [];
  for (item of s) {
    if (item === "(" || stack.length === 0) {
      stack.push(item);
    } else {
      if (stack.at(-1) === "(") {
        stack.pop();
      }
    }
  }
  answer = stack.length ? false : true;

  return answer;
}
