function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;
  
  function dfs(idx, res) {
      if (idx === n) {
          if (res === target) {
              answer++;
          }
          return;
      }
      dfs(idx+1, res+numbers[idx]);
      dfs(idx+1, res-numbers[idx]);
  }
  
  dfs(0, 0);
  return answer;
}