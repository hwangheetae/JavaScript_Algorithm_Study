const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  input % 2 === 0
    ? console.log(`${input} is even`)
    : console.log(`${input} is odd`);
});
