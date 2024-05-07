function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // 하, 우, 상, 좌 이동
    const queue = [[0, 0]]; // BFS를 위한 큐, 시작점 (0, 0)

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1; // 방문한 셀에 현재까지의 이동 횟수 +1 저장
                queue.push([nx, ny]);
            }
        }
    }

    return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}

// 예제 사용법
const maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
];
console.log(solution(maps)); // 출력 예상: 11
a