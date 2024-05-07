/*
프로그래머스
Lv.3 네트워크

네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

제한사항
컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
computer[i][i]는 항상 1입니다.
*/

/*
첫번째 시도 : 런타임 에러 남 -> 재귀가 깊어져서
function solution(n, computers) {
    var answer = 0;

    let nodes = new Set();
    for(let i = 0; i < n; i++) nodes.add(i);

    let visited = new Set();

    function bfs(idx) {
        let array = computers[idx];
        visited.add(idx);
        for(let i = 0; i < array.length; i++){
            if(array[i] == 1 && i != idx){
                computers[i][idx] = 0;
                bfs(i);
            }
        }
    }

    answer++;
    bfs(0);
    
    for (let node of nodes) {
        if(visited.has(node)) continue;
        else {
            answer++;
            bfs(node);
        }
    }

    return answer;
}
*/

function solution(n, computers) {
    let answer = 0;
    let visited = new Array(n).fill(false);

    function bfs(start) {
        let queue = [start];
        visited[start] = true;
        
        while (queue.length > 0) {
            let node = queue.shift();
            for (let i = 0; i < n; i++) {
                if (computers[node][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            bfs(i);
        }
    }

    return answer;
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])); // 1
console.log(solution(4, [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])); // 4
console.log(solution(5, [[1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 1], [1, 0, 0, 1, 1], [0, 0, 1, 1, 1]])); // 1