/*
프로그래머스
Lv.1 소수 만들기

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

// GPT 풀이
function solution(nums) {
    let count = 0;

    // 주어진 수가 소수인지 판별하는 함수
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 조합을 재귀적으로 생성하고, 그 합이 소수인 경우를 계산하는 함수
    function findCombinations(index, selected, sum) {
        if (selected.length === 3) {
            if (isPrime(sum)) count++;
            return;
        }

        // 현재 전달 받은 index + 1, 현재 전달받은 배열에 현재 인덱스 값 추가해서 함수 호출
        // 전달한 배열의 길이가 3이면 return 되어 i가 더해짐
        for (let i = index; i < nums.length; i++) {
            findCombinations(i + 1, [...selected, nums[i]], sum + nums[i]);
        }
    }

    // 첫 번째 인덱스부터 조합 생성 시작
    findCombinations(0, [], 0);

    return count;
}

console.log(solution([1,2,3,4])); // 1
console.log(solution([1,2,7,6,4])); // 4