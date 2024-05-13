const solution = (triangle) => {
  const dp = [];
  triangle.forEach((arr, index) => {
    if (index === 0) {
      dp.push(arr);
    } else {
      const curr = [];
      for (let i = 0; i < arr.length; i++) {
        if (i > 0 && i < arr.length - 1) {
          const left = dp[index - 1][i - 1] + arr[i];
          const right = dp[index - 1][i] + arr[i];
          curr.push(Math.max(left, right));
          continue;
        } else if (i === 0) {
          curr.push(dp[index - 1][0] + arr[0]);
        } else {
          curr.push(dp[index - 1].at(-1) + arr.at(-1));
        }
      }
      dp.push(curr);
    }
  });
  const max = Math.max(...dp.at(-1));
  return max;
};
