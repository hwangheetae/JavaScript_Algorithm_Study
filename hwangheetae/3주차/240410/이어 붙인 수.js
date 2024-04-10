//1번 풀이
function solution(num_list) {
  var result1 = "";
  var result2 = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      result1 += String(num_list[i]);
    } else {
      result2 += String(num_list[i]);
    }
  }
  return Number(result1) + Number(result2);
}

//2번풀이
function solution(num_list) {
  var result1 = "";
  var result2 = "";
  for (num of num_list) {
    num % 2 === 0 ? (result1 += String(num)) : (result2 += String(num));
  }
  return Number(result1) + Number(result2);
}

//다른사람 풀이
function solution(num_list) {
  const odd = [...(num_list + "")]
    .map((x) => (Number(x) % 2 === 1 ? x : ""))
    .join("");
  const even = [...(num_list + "")]
    .map((x) => (Number(x) % 2 === 0 ? x : ""))
    .join("");
  return Number(odd) + Number(even);
}
