const solution = (n, computers) => {
  let count = 0;
  let visited = new Array(n).fill(false);

  const dfs = (start) => {
    visited[start] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[start][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
};

//배열들을 인자로 넘겨 준다면?
// const dfs = (computers, visited, start) =>{
//     visited[start] = true;

//     for (let i = 0; i < computers.length; i++) {
//         if (computers[start][i] === 1 && !visited[i]) {
//             dfs(computers, visited, i);
//         }
//     }
// }
