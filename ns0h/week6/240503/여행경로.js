/*
프로그래머스
Lv.3 여행경로

주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
모든 공항은 알파벳 대문자 3글자로 이루어집니다.
주어진 공항 수는 3개 이상 10,000개 이하입니다.
tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
주어진 항공권은 모두 사용해야 합니다.
만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
*/

function solution(tickets) {
    let answer = [];
    let visited = new Set();

    tickets.sort((a, b) => a[1].localeCompare(b[1]));

    function dfs(array){
        // 모든 티켓을 사용했으면
        if(visited.size === tickets.length) answer = array;

        let start = array[array.length - 1];
        for(let i = 0; i < tickets.length; i++) {
            if(visited.has(i)) continue;

            let ticket = tickets[i];
            if(ticket[0] === start) {
                visited.add(i);
                array.push(ticket[1])
                dfs(array);
                if(answer.length > 0) return answer;
                visited.delete(i);
                array.pop();
            }
        }
    }

    for(let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        if(ticket[0] === "ICN") {
            visited.add(i);
            dfs([ticket[0], ticket[1]]);
            if(answer.length > 0) return answer;
            visited.delete(i);
        }
    }
}

// console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])); // ["ICN", "JFK", "HND", "IAD"]
// console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
console.log(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]));
                    // ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]