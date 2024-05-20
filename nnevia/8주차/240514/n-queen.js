// gpt 사용
function check(queen, row) {
  for (let i = 0; i < row; i += 1){}
  function isSafe(row, col) {
      // 동일 행의 상단 열을 확인합니다.
      for (let i = 0; i < col; i++) {
          if (board[row][i] === 'Q') return false;
      }

      // 좌상단 대각선을 확인합니다.
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
          if (board[i][j] === 'Q') return false;
      }

      // 좌하단 대각선을 확인합니다.
      for (let i = row, j = col; i < n && j >= 0; i++, j--) {
          if (board[i][j] === 'Q') return false;
      }

      return true;
  }

  function backtrack(col) {
      if (col === n) {
          // 모든 퀸이 성공적으로 배치되면
          const solution = board.map(row => row.join(''));
          result.push(solution);
          return;
      }

      for (let i = 0; i < n; i++) {
          if (isSafe(i, col)) {
              board[i][col] = 'Q'; // 퀸을 배치합니다.
              backtrack(col + 1); // 다음 열로 이동합니다.
              board[i][col] = '.'; // 백트래킹합니다.
          }
      }
  }

function solution(n) {
  return search(Array.from({length: n}, () => 0), 0);
}
}