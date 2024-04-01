function solution(str1, str2) {
  var str1 = str1.split("");
  var str2 = str2.split("");
  var temp = "";
  for (let i = 0; i < str1.length; i++) {
    temp = temp + str1[i] + str2[i];
  }
  return temp;
}
