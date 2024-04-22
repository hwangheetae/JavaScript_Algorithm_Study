/*
프로그래머스
Lv.2 조이스틱

조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.

ABCDEFGHIJKLMNOPQRSTUVWXYZ / unicode:  65 ~ 90
*/

function solution(name) {
    let count = 0;
    // 유니코드 배열 저장 0 ~ 25로 매핑
    let unicode = [...name].map(element => element.charCodeAt(0) - 65);
    // A가 아닌 문자의 index 저장 (index 0 제외)
    let exceptA = new Set(unicode.reduce((acc, element, index) => {
        if (element !== 0 && index !== 0) acc.push(index);
        return acc;
    }, []));

    // A가 아닌 값 중 가장 큰 index와 작은 index 찾기
    let max = 0;
    let min = name.length;
    exceptA.forEach(function(element) {
        if(element > max) max = element;
        if(element < min) min = element;
    });
    // 방향 정하기 true: right - false: left
    let direction = Math.abs(min) <= (name.length - max) ? true : false;
    // index 0이 A가 아니면 exceptA에 넣어주기
    if(unicode[0] !== 0) exceptA.add(0);

    // 현재 커서의 위치 index
    let cursor = 0;
    
    while(exceptA.size > 0) {
        if(exceptA.has(cursor)){ // A가 아니면
            exceptA.delete(cursor);
            count += ((26 - unicode[cursor]) <= unicode[cursor] ? (26 - unicode[cursor]) : unicode[cursor]);
        }
        count++;
        
        if(direction){  // 오른쪽으로 이동
            cursor++;
        }
        else{           // 왼쪽으로 이동
            cursor--;
            if(cursor == -1) cursor = name.length - 1;
        };
    }
    count--; // 마지막 요소에서는 이동하지 않으므로 다시 빼주기

    return count;
}

console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
console.log(solution("JAZ")); // 11
console.log(solution("BAABBAAA")); // 7
console.log(solution("ABABAAAAABA")); // 10 => 실패 => 오른쪽의 B가 더 가깝지만 왼쪽으로 갔다가 오는게 최소 경로
// 최종 실패