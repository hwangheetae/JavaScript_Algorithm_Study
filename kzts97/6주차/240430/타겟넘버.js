
//gpt 풀이
function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                count++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0); // 초기 인덱스와 합계
    return count;
}

// 예제 사용법
const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target));  // 출력: 5