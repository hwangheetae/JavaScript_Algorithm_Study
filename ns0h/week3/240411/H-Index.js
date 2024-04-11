/*
프로그래머스
Lv.2 H-Index

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

+
어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상일 때의 h값과 그 때, h번 이상 인용된 논문의 개수 중 최대값을 리턴한다.
그리고 해당하는 값을 못 찾으면 논문 전체 개수를 리턴해야함.
*/

function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순 정렬

    let sValue = citations[0];

    while(true){
        let cnt = 0;
        
        for (let i = 0; i < citations.length; i++) {
            if (citations[i] >= sValue) {
                cnt = cnt + 1;
            }
        }
        if(cnt >= sValue){
            return sValue;
        }
        else{
            sValue--;
            if(sValue < 0){
                return citations.length;
            }
        }
        
    }
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([1, 10, 11])); // 2
console.log(solution([10, 11])); // 2
console.log(solution([0, 0, 0, 0, 0])); // 0

// 사실 문제 이해는 제대로 못했는데.. "h번 이하"는 신경쓰지 않아도 된다는 힌트만 보고 했습니다