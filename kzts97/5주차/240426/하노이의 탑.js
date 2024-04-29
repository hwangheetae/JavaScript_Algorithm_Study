function solution(n) {
    const answer = [];
    
    function move(n, start, end, mid) {
        if (n === 1) {
            answer.push([start, end]);
        } else {
            move(n - 1, start, mid, end);
            answer.push([start, end]);
            move(n - 1, mid, end, start);
        }
    }
    
    move(n, 1, 3, 2);  // 1번 기둥에서 3번 기둥으로 n개의 원반을 2번 기둥을 경유하여 옮긴다.
    return answer;
}