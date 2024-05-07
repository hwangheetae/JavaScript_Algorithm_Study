/*
1.주어진 길이중 제일 긴변이 있는경우
- 나머지 두변의 길이의 합이 > max값보다 커야함, 
- 나머지 두변의길이 <= max

2.주어진 두변의 합보다 작은 긴변
- 두변의 길이의 합 > max(구해야하는값)
- 두변중 긴변의 길이<=max(구해야 하는값)
*/
const solution = (sides) => {
  // let count=0;
  let set = new Set();
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  for (let i = 1; i <= max; i++) {
    if (min + i > max) {
      set.add(i);
    }
  }

  i = max;
  while (min + max > i) {
    if (i >= max && min + max > i) {
      set.add(i);
    }
    i++;
  }

  return set.size;
};

//다른사람 코드 - 아니,, 어떻게 이렇게 하냐구,,,ㅠ
// function solution(sides) {
//     return Math.min(...sides)*2-1
// }
