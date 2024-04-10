function solution(a, d, included) {
  var sum = a;
  temp = 0;
  arr = [];
  for (let i = 0; i < included.length; i++) {
    if (i) {
      sum += d;
    }
    arr.push(sum);
  }
  for (let i = 0; i < included.length; i++) {
    if (included[i] === true) {
      temp += arr[i];
    }
  }
  return temp;
}
