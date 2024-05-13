const solution = (bin1, bin2) => {
  return getBin(getDec(bin1) + getDec(bin2));
};
const getDec = (bin) => {
  const arr = bin.split("");
  let num = 0;
  let multiple = 1;
  while (arr.length > 0) {
    const curr = arr.pop() * 1;
    num += curr * multiple;
    multiple *= 2;
  }
  return num;
};
const getBin = (dec) => {
  return (dec >>> 0).toString(2);
};
