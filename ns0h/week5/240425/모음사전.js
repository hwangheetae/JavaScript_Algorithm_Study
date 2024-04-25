/*
프로그래머스
Lv.2 모음 사전

사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다.
사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.
단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

제한사항
word의 길이는 1 이상 5 이하입니다.
word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.
*/

// GPT 코드
function solution(word) {
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;

    // 각 글자의 위치에 따라 사전에서의 순서를 계산
    for (let i = 0; i < word.length; i++) {
        let index = alphabet.indexOf(word[i]);
        count += index * getWordCount(5 - i);
    }

    // 입력된 단어의 길이만큼 추가하기
    return count + word.length;
}

// 길이별로 시작하는 단어의 개수를 누적해서 계산하는 함수
function getWordCount(length) {
    let wordCount = 0;
    for (let i = 0; i < length; i++) {
        wordCount += Math.pow(5, i);
    }
    return wordCount;
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189