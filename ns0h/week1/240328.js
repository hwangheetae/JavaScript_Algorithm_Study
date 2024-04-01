/*
프로그래머스
Lv.1 [카카오 인턴] 키패드 누르기

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.       1   2   3   [0][0]  [0][1]  [0][2]
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.               4   5   6   [1][0]  [1][1]  [1][2]
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,           7   8   9   [2][0]  [2][1]  [2][2]
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.   *   0   #   [3][0]  [3][1]  [3][2]

numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.

hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.

왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
*/

function solution(numbers, hand) {
    var answer = '';
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [99, 0, 99]];
    let left = [3, 0]; // 왼손 시작 위치
    let right = [3, 2]; // 오른손 시작 위치

    let location = []; // 번호의 위치

    let leftDistance = 0; // 왼손과 번호의 거리
    let rightDistance = 0; // 오른손과 번호의 거리

    while(numbers.length > 0){
        // 번호 위치 파악
        var num = numbers.shift(); // 입력해야 할 번호
        for(var i = 0; i < 4; i++) {
            for(var j = 0; j < 3; j++) {
                if(array[i][j] == num) {
                    location = [i, j]; // 번호 위치 입력
                }
            }
        }

        // 왼손과 오른손 중 선택
        if(location[1] == 0){ // 숫자가 1, 4, 7
            left = location;
            answer += 'L';
        }
        else if(location[1] ==  2){ // 숫자가 3, 6, 9
            right = location;
            answer += 'R';
        }
        else { // 숫자가 2, 5, 8, 0
            leftDistance = Math.abs(left[0] - location[0]) + Math.abs(left[1] - location[1]);
            rightDistance = Math.abs(right[0] - location[0]) + Math.abs(right[1] - location[1]);

            if(leftDistance < rightDistance) { // 왼손이 더 가까우면
                left = location;
                answer += 'L';
            }
            else if(rightDistance < leftDistance){ // 오른손이 더 가까우면
                right = location;
                answer += 'R';
            }
            else { // 두 손의 거리가 같으면
                if(hand == "left"){
                    left = location;
                    answer += 'L';
                }
                else if(hand == "right"){
                    right = location;
                    answer += 'R';
                }
            }
        }
    }

    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"