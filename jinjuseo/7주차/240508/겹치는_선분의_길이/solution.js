const solution = (lines) => {
  let arr = [];
  lines.sort(([a1, a2], [b1, b2]) => a1 - b1);
  arr.push(getSection(lines[0], lines[1]));
  arr.push(getSection(lines[1], lines[2]));
  arr.push(getSection(lines[0], lines[2]));
  arr = arr.filter((x) => x.length > 0);
  arr.sort(([a1, a2], [b1, b2]) => b2 - b1 - (a2 - a1));

  const result = union(arr);
  const sum = result.reduce((acc, cur) => {
    let diff = 0;
    if (cur.length !== 0) {
      [a, b] = cur;
      diff = b - a;
    }
    return acc + diff;
  }, 0);
  return sum;
};

const getSection = ([x1, x2], [y1, y2]) => {
  if (y1 >= x2) return [];
  if (y2 <= x2) return [y1, y2];
  if (y1 < x2 && y2 > x2) return [y1, x2];
};

const union = (arr) => {
  const result = [];
  for (let [a, b] of arr) {
    if (result.length === 0) {
      result.push([a, b]);
      continue;
    }
    let flag = 0;
    let include = 0;
    for (let [x, y] of result) {
      if (x <= a && b <= y) {
        include = 1;
        break;
      }
      if (a < x && b > x && b < y) {
        result.push([a, x]);
        flag = 1;
        break;
      }
      if (x < a && a < y && b > y) {
        result.push([y, b]);
        flag = 1;
        break;
      }
    }
    if (include) continue;
    if (!flag) result.push([a, b]);
  }
  return result;
};

//다른 사람 풀이 : ,,
// function solution(lines) {
//     let line = new Array(200).fill(0);

//     lines.forEach(([a, b]) => {
//         for(; a < b; a++) line[a+100]++;
//     });

//     return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
// }
