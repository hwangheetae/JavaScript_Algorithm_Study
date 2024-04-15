const factorial = (n) => {
  //factorial도 처음엔 재귀로 짜려는데 시간초과가나왔는데 다른사람은 재귀로짰네?? 코드가 이상했던건가..
  let count = n;
  let result = 1;
  while (count > 0) {
    result *= count--;
  }
  return result;
};
const solution = (balls, share) => {
  //조합
  if (balls === share) return 1;
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
  // 첫풀이 nCm -> nC(n-m)
  // let n = balls;
  // const k = balls - share;
  // let son = 1;
  // let count = k;
  // while(count>0){
  //     son *= n--;
  //     count--;
  // }
  // son = son / factorial(k);
  // return son;
};
