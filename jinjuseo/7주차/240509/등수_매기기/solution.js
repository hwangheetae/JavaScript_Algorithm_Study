const solution = (score) => {
  const scores = score.map(([a, b]) => a + b).sort((a, b) => b - a);
  const grade = [];
  let g = 1;
  let count = 0;
  scores.forEach((x, i) => {
    if (count === 0) {
      const filtered = scores.filter((k, j) => j !== i && k === x);
      count = filtered.length + 1;
    }
    grade[i] = g;
    count--;
    if (count === 0) {
      const filtered = grade.filter((k) => k === g);
      g += filtered.length;
    }
  });

  const result = score.map(([a, b], i) => {
    const index = scores.indexOf(a + b);
    return grade[index];
  });
  return result;
};

//신박한 풀이 ㄷㄷㄷㄷㄷ
// function solution(score) {
//   return score.map((el) => {
//     return (
//       score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//     );
//   });
// }
