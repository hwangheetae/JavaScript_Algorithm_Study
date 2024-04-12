//장군개미:5, 병정개미 :3, 일개미:1
const solution = (hp) => {
  let count = 0;
  let hp_num = hp;
  [5, 3, 1].forEach((attack) => {
    count += Math.floor(hp_num / attack);
    hp_num %= attack;
  });
  return count;
};
