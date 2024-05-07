function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let count = 0;

    function dfs(current) {
        visited[current] = true;
        for (let next = 0; next < n; next++) {
            if (!visited[next] && computers[current][next] === 1) {
                dfs(next);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    return count;
}

// 예제 사용법
const n = 3;
const computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];
console.log(solution(n, computers));  // 출력: 2
