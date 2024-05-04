/*
ROR게임 : 두팀으로 나누어진행, 상대팀 진영 먼저 파괴 -> 이기는 게임
- 각팀은 상대팀 진영에 최대한 빨리 도착하는 것이 유리.
- 검은색 부분 : 갈수없는길
- 흰색부분 : 갈수있는길
- move : 동,서,남,북 한 칸씩 이동가능
- return : 상대팀진영까지 지나가야하는 칸 최솟값, 갈수없다면? -1 return
- maps : n*m 크기 2차원배열 
    - 0,1로 이루어짐 , 0-벽O, 1-벽X
- 처음: 좌측상단(1,1)에 위치, 상대방진영은 (n,m) 위치
*/
const solution = (maps) => {
  let min = 100000;
  const [n, m] = [maps.length, maps[0].length];
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  let flag = false;

  const bfs = (i, j, visited, count) => {
    const queue = [];
    visited[i][j] = true;

    if (i + 1 < n && maps[i + 1][j] === 1) {
      queue.push([i + 1, j, count + 1]);
    }
    if (j + 1 < m && maps[i][j + 1] === 1) {
      queue.push([i, j + 1, count + 1]);
    }
    if (i - 1 >= 0 && maps[i - 1][j] === 1) {
      queue.push([i - 1, j, count + 1]);
    }
    if (j - 1 >= 0 && maps[i][j - 1] === 1) {
      queue.push([i, j - 1, count + 1]);
    }
    while (queue.length > 0) {
      [x, y, sum] = queue.shift();
      if (x + 1 === n && y + 1 === m) {
        flag = true;
        min = sum < min ? sum : min;
      }
      if (!visited[x][y]) {
        if (x + 1 < n && maps[x + 1][y] === 1) {
          queue.push([x + 1, y, sum + 1]);
        }
        if (y + 1 < m && maps[x][y + 1] === 1) {
          queue.push([x, y + 1, sum + 1]);
        }
        if (x - 1 >= 0 && maps[x - 1][y] === 1) {
          queue.push([x - 1, y, sum + 1]);
        }
        if (y - 1 >= 0 && maps[x][y - 1] === 1) {
          queue.push([x, y - 1, sum + 1]);
        }
        visited[x][y] = true;
      }
    }
  };
  bfs(0, 0, visited, 1);

  return flag ? min : -1;
};
