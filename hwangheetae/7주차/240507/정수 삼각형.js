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
