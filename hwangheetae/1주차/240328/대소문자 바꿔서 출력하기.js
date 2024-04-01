const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str[i] = arr.push(str[i].toLowerCase());
    } else {
      str[i] = arr.push(str[i].toUpperCase());
    }
  }
  console.log(arr.join(""));
});

//////다른풀이2

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0].split(""); // 문자열을 각각 나눈다.
  str.forEach((value, index) => {
    // 주어진 콜백을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행한다.
    if (value === value.toUpperCase()) {
      str[index] = value.toLowerCase();
    } else {
      str[index] = value.toUpperCase();
    }
  });
  console.log(str.join(""));
});
