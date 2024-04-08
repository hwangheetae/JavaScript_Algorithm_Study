const solution = (prices) => {
  const time = [];
  let flag;
  Outer: for (let i = 0; i < prices.length; i++) {
    flag = true;
    Inner: for (j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        time.push(j - i);
        flag = false;
        continue Outer;
      }
    }
    time.push(prices.length - i - 1);
  }

  return time;
};
