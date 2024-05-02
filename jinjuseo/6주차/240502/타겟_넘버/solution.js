const solution = (numbers, target) => {
  let count = 0;
  const dfs = (sum, i) => {
    if (i === numbers.length) {
      if (sum === target) count++;
    } else {
      dfs(sum + numbers[i], i + 1);
      dfs(sum - numbers[i], i + 1);
    }
  };
  dfs(0, 0);
  return count;
};
