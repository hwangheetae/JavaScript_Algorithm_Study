const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  const answer = `!@#$%^&*(\\'"<>?:;`;
  console.log(answer);
});
