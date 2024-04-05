/*
프로그래머스
Lv.2 주식가격

초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

제한사항
prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
prices의 길이는 2 이상 100,000 이하입니다.
*/
function solution(prices) {
    var answer = [];
    for(let i = 0; i < prices.length - 1; i++) {
        let time = 0;

        if(prices[i] > prices[i + 1]){
            answer.push(1); // 다음 값이 본인보다 작으면 1초간 가격 유지
            continue;
        }
        else {
            for(let j = i + 1; j < prices.length; j++) {
                if((prices[i] <= prices[j])) { // 다음 값이 본인값보다 작으면 시간 ++
                    time++;
                }
                else { 
                    time++; // 다음 값이 존재하면 시간++
                    break;
                }
            }
        }
        answer.push(time);
    }
    answer.push(0);

    return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([4, 5, 1, 2, 6, 1, 1])); // [2,1,4,2,1,1,0]