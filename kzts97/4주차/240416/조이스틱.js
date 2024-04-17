function solution(name) {
    let answer = 0;
    let minMove = name.length - 1; // 최소 좌우 이동

    for (let i = 0; i < name.length; i++) {
        // 상하 조작 계산
        answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);

        // 다음 문자가 A가 아닌 가장 가까운 위치 찾기
        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }

        // 좌우 이동 최소화 계산
        minMove = Math.min(minMove, i + i + name.length - next);
    }

    answer += minMove;
    return answer;
}