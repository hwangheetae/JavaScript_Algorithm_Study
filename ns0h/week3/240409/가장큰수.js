/*
프로그래머스
Lv.2 가장 큰 수

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

function solution(numbers) {
    var answer = '';

    numbers.sort((a, b) => {
        let strA = a.toString() + a.toString() + a.toString() + a.toString();
        let strB = b.toString() + b.toString() + b.toString() + b.toString();
        
        return strA > strB? -1 : strA < strB? 1 : 0;
    });
    // 비교 함수는 불리언 값을 반환
    // JavaScript의 .sort() 메서드는 비교 함수로부터 -1, 0, 또는 1과 같은 숫자 값을 기대한다 
    
    while(true){
        if(numbers[0] == 0 && numbers.length > 1) {
            numbers.splice(0, 1);
        }
        else {
            break;
        }
    }
    answer = numbers.join('');
    // 문자열 상태로 join 후 숫자로 바꾸면 안된다 -> 아주 큰 수의 경우 자연로그로 변환됨
    
    return answer;
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
console.log(solution([0, 0, 0])); // "0"