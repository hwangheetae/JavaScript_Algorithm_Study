/*
프로그래머스
Lv.0 종이 자르기

머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

  --------------------
|           |          |
|           |          |
|           |          |
|           1          |
|           |          |
 -----2----- -----3-----
|           |          |
|           |          |
|           |          |
|           |          |
|           |          |
  --------------------

정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < M, N < 100
종이를 겹쳐서 자를 수 없습니다.
*/


// 가장 간단한 정답 코드
function solution1(M, N) {
    return M * N - 1;
}
//정답의 패턴을 보고 혹시나 하여 제출해보았는데 성공적으로 풀어진다..!


// 재귀 이용 코드
function solution2(M, N) {
    if(M == 1) return N - 1;
    else if(N == 1) return M - 1;
    else return (solution2(1, N) * M) + (M - 1);
    // 가로가 1이 되도록 모두 자른다 -> M - 1 번
    // 가로가 1이고 세로가 N인 종이의 개수 -> M개
    // 가로가 1이고 세로가 N인 종이를 자른다 -> N - 1 번
}

console.log(solution1(2, 2)); // 3
console.log(solution1(2, 5)); // 9
console.log(solution1(1, 1)); // 0

console.log(solution2(2, 2)); // 3
console.log(solution2(2, 5)); // 9
console.log(solution2(1, 1)); // 0