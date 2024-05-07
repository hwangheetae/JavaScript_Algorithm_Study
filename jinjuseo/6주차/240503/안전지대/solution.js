const solution = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        if (j - 1 >= 0 && i - 1 >= 0 && board[i - 1][j - 1] !== 1)
          board[i - 1][j - 1] = "x";
        if (j - 1 >= 0 && board[i][j - 1] !== 1) board[i][j - 1] = "x";
        if (j - 1 >= 0 && i + 1 < board.length && board[i + 1][j - 1] !== 1)
          board[i + 1][j - 1] = "x";

        if (i - 1 >= 0 && board[i - 1][j] !== 1) board[i - 1][j] = "x";
        if (i + 1 < board.length && board[i + 1][j] !== 1)
          board[i + 1][j] = "x";

        if (j + 1 < board.length && i - 1 >= 0 && board[i - 1][j + 1] !== 1)
          board[i - 1][j + 1] = "x";
        if (j + 1 < board.length && board[i][j + 1] !== 1)
          board[i][j + 1] = "x";
        if (
          j + 1 < board.length &&
          i + 1 < board.length &&
          board[i + 1][j + 1] !== 1
        )
          board[i + 1][j + 1] = "x";
      }
    }
  }
  let sum = 0;
  board.forEach((arr) => {
    sum += arr.filter((x) => x === 0).length;
  });
  return sum;
};
