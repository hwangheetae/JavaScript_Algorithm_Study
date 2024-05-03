function solution(n, computers) {
  let visited = new Array(n).fill(false);
  let answer = 0;

  function dfs(start) {
      visited[start] = true;
      computers[start].forEach((connected, i) => {
          if (connected === 1 && !visited[i]) {
              dfs(i);
          }
      });
  }

  computers.forEach((_, i) => {
      if (!visited[i]) {
          answer++;
          dfs(i);
      }
  });

  return answer;
}