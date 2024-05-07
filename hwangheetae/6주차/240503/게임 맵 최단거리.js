function solution(maps) {
  let answer = 0;
  //좌 우 하 상
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[0, 0]];
  maps[0][0] = 1;
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) {
        continue;
      }
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  answer = maps[maps.length - 1][maps[0].length - 1];
  return answer === 1 ? -1 : answer;
}
