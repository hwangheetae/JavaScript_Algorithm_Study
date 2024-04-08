//분수의 덧셈
//numer1,denom1 , numer2,denom2 두 분수를 더한 값을 기약분수로 (배열)return

const solution = (numer1, denom1, numer2, denom2) => {
  const result = [];
  let sameDenom = 0;
  let sumNumer = 0;
  if (denom1 === denom2) {
    sameDenom = denom1;
  } else if (denom1 > denom2) {
    sameDenom = denom1 % denom2 === 0 ? denom1 : denom1 * denom2;
  } else {
    sameDenom = denom2 % denom1 === 0 ? denom2 : denom1 * denom2;
  }
  sumNumer = numer1 * (sameDenom / denom1) + numer2 * (sameDenom / denom2);
  const [numer, denom] = getDivision(sumNumer, sameDenom);
  result.push(numer);
  result.push(denom);
  return result;
};
const getDivision = (numer, denom) => {
  let num = numer,
    denm = denom;
  let divide = denom;
  while (divide > 1) {
    if (num % divide === 0 && denm % divide === 0) {
      num = num / divide;
      denm = denm / divide;
      divide = denm;
    } else {
      divide--;
    }
  }
  return [num, denm];
};
