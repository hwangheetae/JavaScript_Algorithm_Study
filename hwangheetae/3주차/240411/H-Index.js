//틀린코드1
function solution(citations) {
  var count = 0;
  var h_index = 0;
  for (let i = 0; i < Math.max.apply(null, citations) + 1; i++) {
    var over = 0;
    var under = 0;
    for (item of citations) {
      if (item >= i) {
        over += 1;
      }
      if (item <= i) {
        under += 1;
      }
    }
    if (under === over) {
      h_index = under;
    }
  }
  return h_index;
}
//틀린 코드2
function solution(citations) {
  var count = 0;
  var h_index = 0;
  for (let i = 0; i < Math.max.apply(null, citations) + 1; i++) {
    var over = 0;
    var under = 0;
    for (item of citations) {
      if (item >= i) {
        over += 1;
      }
      if (item <= i) {
        under += 1;
      }
    }
    if (under >= i && over <= i) {
      h_index = i;
    }
  }
  return h_index;
}

//정답코드
function solution(citations) {
  var count = 0;
  var h_index = 0;
  for (let i = 0; i < Math.max.apply(null, citations) + 1; i++) {
    var over = 0;
    var under = 0;
    for (item of citations) {
      if (item >= i) {
        over += 1;
      }
      if (item <= i) {
        under += 1;
      }
    }
    if (under >= i || over >= i) {
      h_index = i;
    }
  }
  return h_index;
}

//다른사람 풀이
const solution = (citations) =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
