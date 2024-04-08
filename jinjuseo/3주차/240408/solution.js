const solution = (array, commands) => {
  const result = [];
  commands.forEach((arr) => {
    const i = arr[0] - 1;
    const j = arr[1];
    const k = arr[2] - 1;
    const sorted = array.slice(i, j).sort((a, b) => a - b);
    result.push(sorted[k]);
  });
  return result;
};
