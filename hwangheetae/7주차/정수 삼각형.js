//gpt(bottom-up, tabulation)
function solution(triangle) {
  const height = triangle.length;
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
}
// 동적 프로그래밍 접근법:
// 알고리즘은 삼각형 배열을 아래에서부터 위로 수정합니다. 마지막에서 두 번째 줄부터 시작하여, 두 가능한 하향 경로(바로 아래와 오른쪽 아래)를 고려하여 각 요소까지의 최대 가능 합을 계산합니다.
// 제자리에서 업데이트:
// (i, j) 위치에 있는 삼각형의 각 요소에 대해, 알고리즘은 그 값과 그 아래 두 이웃 중 더 큰 값을 더하여 그 값을 업데이트합니다. 이는 각 요소가 알고리즘으로 다음 줄로 이동할 때 그 지점부터 아래로 가능한 최대 합을 나타내도록 보장합니다.
// 순회 및 업데이트:
// 외부 루프는 마지막에서 두 번째 줄에서 시작하여 최상단 줄로 감소합니다. 각 줄에 대해, 모든 요소는 바로 아래 줄의 값에 기반하여 업데이트됩니다.
// 결과 추출:
// 전체 삼각형을 업데이트 한 후에, 삼각형의 최상단 요소 triangle[0][0]은 최상단에서 바닥까지의 최대 합 경로를 가지고 있습니다. 이는 모든 하단 경로로부터 최대 합을 축적하기 때문입니다.
// 성능:
// 이 방법은 각 요소를 한 번씩만 처리하기 때문에
// 𝑂
// (
// 𝑛
// 2
// )
// O(n
// 2
//  )의 시간 복잡도를 가집니다. 여기서
// 𝑛
// n은 삼각형의 행 수입니다.
// 공간 복잡도는 추가 공간
// 𝑂
// (
// 1
// )
// O(1)입니다. 솔루션이 삼각형을 제자리에서 수정하고 입력 크기에 비례하는 추가 공간을 사용하지 않기 때문입니다.
// 이 접근 방식은 주어진 문제 제약 조건 내에서 최적이며 "표" 또는 "하향식 동적 프로그래밍"이라는 고전적인 동적 프로그래밍 기술을 사용하여 효율적으로 해결합니다.

//memoizaion
function solution(triangle) {
  const memo = [];

  function maxPathSum(row, col) {
    if (row == triangle.length) return 0;
    if (memo[row] && memo[row][col] !== undefined) return memo[row][col];
    const leftSum = maxPathSum(row + 1, col);
    const rightSum = maxPathSum(row + 1, col + 1);
    const current = triangle[row][col] + Math.max(leftSum, rightSum);

    if (!memo[row]) memo[row] = [];
    memo[row][col] = current;
    return current;
  }
  return maxPathSum(0, 0);
}
// 재귀 함수 maxPathSum: 이 함수는 주어진 위치에서 시작하여 삼각형의 바닥까지 가능한 최대 합을 계산합니다. 현재 위치의 값을 선택하고, 가능한 두 경로(왼쪽 아래, 오른쪽 아래) 중 더 큰 합을 선택합니다.
// 메모이제이션:
// memo 배열은 계산된 결과를 저장하여 중복 계산을 방지합니다.
// 만약 memo[row][col]에 값이 이미 저장되어 있다면, 그 값을 반환하여 불필요한 재귀 호출을 줄입니다.
// 최종 결과 반환: maxPathSum(0, 0) 호출로 전체 삼각형에서 가능한 최대 경로 합을 계산합니다.
