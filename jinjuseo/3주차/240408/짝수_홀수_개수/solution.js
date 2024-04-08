const solution = (num_list) => {
  let odd = 0;
  let even = 0;
  for (let num of num_list) {
    if (num % 2 === 0) {
      even++;
      continue;
    }
    odd++;
  }
  return [even, odd];
};
