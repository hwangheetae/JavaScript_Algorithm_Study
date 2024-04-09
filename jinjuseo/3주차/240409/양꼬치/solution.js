const solution = (n, k) => {
  const prices = 12000 * n + k * 2000;
  const discount = n >= 10 ? 2000 * Math.floor(n / 10) : 0;
  return prices - discount;
};
