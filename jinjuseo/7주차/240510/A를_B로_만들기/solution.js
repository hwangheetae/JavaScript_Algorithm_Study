const solution = (before, after) => {
  const dictBef = {};
  const dictAft = {};
  let result = 1;
  before.split("").forEach((char) => {
    if (char in dictBef) {
      dictBef[char] += 1;
    } else {
      dictBef[char] = 1;
    }
  });
  after.split("").forEach((char) => {
    if (char in dictAft) {
      dictAft[char] += 1;
    } else {
      dictAft[char] = 1;
    }
  });
  Object.entries(dictBef).forEach(([key, value]) => {
    if (Object.keys(dictAft).includes(key) === -1) {
      result = 0;
    }
    if (dictAft[key] !== value) {
      result = 0;
    }
  });
  return result;
};

//다른 사람 풀이 : 이런방법이 있었군,,
// function solution(before, after) {
//   return before.split("").sort().join("") === after.split("").sort().join("")
//     ? 1
//     : 0;
// }
