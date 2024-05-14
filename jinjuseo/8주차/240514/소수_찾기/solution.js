const solution = (numbers) => {
  const arr = [...numbers.split("")];
  const set = new Set();
  const visited = new Array(arr.length).fill(false);
  for (let i = 0; i < arr.length; i++) {
    visited[i] = true;
    dfs(arr, set, arr[i], visited);
    visited[i] = false; // 각 DFS 호출 후 방문 배열을 초기화합니다.
  }
  return set.size;
};

const checkPrime = (num) => {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const dfs = (arr, set, num, visited) => {
  if (checkPrime(Number(num))) set.add(Number(num));

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(arr, set, num + arr[i], visited);
      visited[i] = false; // 각 DFS 호출 후 방문 배열을 초기화합니다.
    }
  }
};
