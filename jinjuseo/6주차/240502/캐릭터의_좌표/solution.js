const solution = (keyinput, board) => {
  let minX = ((board[0] - 1) / 2) * -1;
  let maxX = (board[0] - 1) / 2;
  let minY = ((board[1] - 1) / 2) * -1;
  let maxY = (board[1] - 1) / 2;
  let curr = [0, 0];
  keyinput.forEach((input) => {
    switch (input) {
      case "left":
        curr[0] = curr[0] - 1 >= minX ? curr[0] - 1 : curr[0];
        break;
      case "right":
        curr[0] = curr[0] + 1 <= maxX ? curr[0] + 1 : curr[0];
        break;
      case "up":
        curr[1] = curr[1] + 1 <= maxY ? curr[1] + 1 : curr[1];
        break;
      case "down":
        curr[1] = curr[1] - 1 >= minY ? curr[1] - 1 : curr[1];
        break;
    }
  });
  return curr;
};
