const solution = (a, b) => {
  let divide = 2;
  let m = b;
  let s = a;
  while (divide <= a) {
    if (m % divide === 0 && s % divide === 0) {
      m = m / divide;
      s = s / divide;
    } else {
      divide++;
    }
  }
  while (m > 1) {
    if (m % 2 === 0) {
      m = m / 2;
    } else if (m % 5 === 0) {
      m = m / 5;
    } else {
      return 2;
    }
  }
  return 1;
};

//다른사람 풀이

// function solution(a, b) {
//     let n = 1;
//     for (let i = 1; i <= Math.min(a,b); i++) {
//         if (a%i===0 && b%i===0) n = i;
//     }

//     b/=n;
//     while (b%2===0) b/=2;
//     while (b%5===0) b/=5;

//     return b === 1 ? 1 : 2;
// }

// function solution(a, b) {
//     return Number((a/b).toFixed(10)) == a/b ? 1 : 2
// }
