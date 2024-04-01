/*
프로그래머스
Lv.0 특정 문자 제거하기
문자열 my_string과 문자 letter이 매개변수로 주어집니다.
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

1 ≤ my_string의 길이 ≤ 100
letter은 길이가 1인 영문자입니다.
my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
대문자와 소문자를 구분합니다.
*/

function solution(my_string, letter) {
    var answer = '';
    
    var resultArr = my_string.split(letter); // letter 기준으로 문자열 배열화
    answer = resultArr.join("") // 배열을 다시 문자열화
    return answer;
}

console.log(solution("abcdef","f"));
console.log(solution("BCBdbe","B"));
