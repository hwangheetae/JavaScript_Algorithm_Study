const solution = (num_list, n) => {
  const answer = [];
  for (let i = 0; i < num_list.length / n; i++) {
    const arr = num_list.slice(i * n, i * n + n);
    answer.push(arr);
  }
  return answer;
};
