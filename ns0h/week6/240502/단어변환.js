/*
프로그래머스
Lv.3 단어 변환

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
    1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
    2. words에 있는 단어로만 변환할 수 있습니다.
    예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면
    "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

제한사항
각 단어는 알파벳 소문자로만 이루어져 있습니다.
각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
begin과 target은 같지 않습니다.
변환할 수 없는 경우에는 0를 return 합니다.
*/

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    let wordLength = begin.length;
    let visited = new Set();
    let minimumSteps = Infinity;

    function dfs(word, cnt) {
        if (word === target) {
            minimumSteps = Math.min(minimumSteps, cnt);  // 최소 단계 갱신 -> ChatGPT 팁
            return;
        }

        words.forEach(item => {
            if (!visited.has(item)) {  // 아직 방문하지 않은 단어인 경우
                let same = 0;
                for (let i = 0; i < wordLength; i++) {
                    if (word[i] === item[i]) {
                        same++;
                    }
                }
                if (same === wordLength - 1) {  // 한 글자만 다른 경우
                    visited.add(item);  // 방문 처리
                    dfs(item, cnt + 1);
                    visited.delete(item);  // 방문 해제 (다른 경로에서의 재사용을 위해)
                }
            }
        });
    }

    dfs(begin, 0);

    return minimumSteps === Infinity ? 0 : minimumSteps;  // 변환 가능한 경로가 없는 경우 0 반환
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0