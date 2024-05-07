/*
프로그래머스
Lv.2 타겟 넘버

n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.
예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
    -1+1+1+1+1 = 3
    +1-1+1+1+1 = 3
    +1+1-1+1+1 = 3
    +1+1+1-1+1 = 3
    +1+1+1+1-1 = 3
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
각 숫자는 1 이상 50 이하인 자연수입니다.
타겟 넘버는 1 이상 1000 이하인 자연수입니다.
*/

// ChatGPT 코드

// DFS 풀이
// 재귀를 이용하여 모든 원소를 더하거나 뺐을 때 값 계산
function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                count++;
            }
            return;
        }
        dfs(index + 1, sum + numbers[index]); // 다음 숫자를 더하는 경우
        dfs(index + 1, sum - numbers[index]); // 다음 숫자를 빼는 경우
    }

    dfs(0, 0); // 처음 시작할 때 인덱스는 0, 합계는 0
    return count;
}

// BFS 풀이
// 큐를 이용하여 순차적으로 값을 Push, Shift하여 다음 인덱스를 더하거나 뺀다
function solution(numbers, target) {
    let queue = [[0, 0]]; // [현재 합계, 인덱스]
    let count = 0;

    while (queue.length > 0) {
        let [currentSum, idx] = queue.shift(); // 큐에서 하나의 원소를 빼서 현재 합계와 인덱스를 얻는다

        if (idx === numbers.length) {
            if (currentSum === target) {
                count++;
            }
        } else {
            queue.push([currentSum + numbers[idx], idx + 1]); // 다음 숫자를 더하는 경우
            queue.push([currentSum - numbers[idx], idx + 1]); // 다음 숫자를 빼는 경우
        }
    }

    return count;
}

// 결과
// DFS 코드가 더 빠르게 실행되고, BFS는 shift 때문인지 시간 초과되는 테스트 케이스가 있었다

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2