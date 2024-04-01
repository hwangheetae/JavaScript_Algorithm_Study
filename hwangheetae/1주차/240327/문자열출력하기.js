//풀이 1
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
  console.log(str);
});
//풀이 2
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", console.log);

//.on('line', console.log)는
// Node.js의 EventEmitter에서 제공하는 메서드인 on을 사용하여
// 'line' 이벤트에 대한 이벤트 핸들러를 등록하는 코드입니다.
