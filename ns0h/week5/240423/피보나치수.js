/*
프로그래머스
Lv.2 피보나치 수

피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어
F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
n은 2 이상 100,000 이하인 자연수입니다.
*/

function solution(n) {
    let array = [0, 1, 1];

    for(let i = 3; i < n + 1; i++){
        array[i] = (array[i - 1] + array[i - 2]) % 1234567;
    }

    return array[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5

/*
function solution(n) {
    if(n == 0) return 0;
    else if(n == 1) return 1;

    return solution(n - 1) + solution(n - 2);
}

재귀 이용 시 테스트 7 ~ 12 시간 초과 및 테스트 13 ~ 14 런타임 에러 발생
*/