const fs = require("fs");
const input = fs.readFileSync(0).toString().split(" ");
const [a, b] = input.map((s) => parseInt(s, 10));
console.log(a + b);
