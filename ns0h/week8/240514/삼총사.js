/*
프로그래머스
Lv.1 삼총사

한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

제한사항
3 ≤ number의 길이 ≤ 13
-1,000 ≤ number의 각 원소 ≤ 1,000
서로 다른 학생의 정수 번호가 같을 수 있습니다.
*/

function solution1(number) { // 내가 작성한 코드 (백트래킹X)
    var answer = 0;

    for(let i = 0; i < number.length-2; i++){
        for(let j = i+1; j < number.length-1; j++){
            for(let k = j+1; k < number.length; k++){
                if(number[i] + number[j] + number[k] == 0) answer++;
            }
        }
    }

    return answer;
}

console.log(solution1([-2, 3, 0, 2, -5])); // 2
console.log(solution1([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution1([-1, 1, -1, 1])); // 0


function solution2(number) { // GPT 코드 (백트래킹)
    let answer = 0;
    number.sort((a, b) => a - b);

    function backtrack(start, count, sum) {
        if (count === 3) {
            if (sum === 0) answer++;
            return;
        }
        for (let i = start; i < number.length; i++) {
            // 가지치기
            if (sum + number[i] * (3 - count) > 0) break;
            backtrack(i + 1, count + 1, sum + number[i]);
        }
    }

    backtrack(0, 0, 0);
    return answer;
}
// 키포인트 : 정렬

console.log(solution2([-2, 3, 0, 2, -5])); // 2
console.log(solution2([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution2([-1, 1, -1, 1])); // 0