const solution = (money) => {
  const maxAme = Math.floor(money / 5500);
  const left = money - maxAme * 5500;
  return [maxAme, left];
};
