function solution(num_list) {
  var result1 = num_list.reduce((acc, cur) => acc + cur) ** 2;
  var result2 = num_list.reduce((acc, cur) => acc * cur);

  return result2 < result1 ? 1 : 0;
}
