//https://velog.io/@bigsaigon333/Javascript%EB%A1%9C-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A4%80%EB%B9%84%ED%95%98%EA%B8%B01-%EC%9E%85%EC%B6%9C%EB%A0%A5

"use strict";

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);

//줄이기
const fs = require("fs");
const { parse } = require("path");
const input = fs.readFileSync(0).toString().split(" ");
const [a, b] = input.map((s) => parseInt(s, 10));
console.log(a + b);

//1줄로
const [a, b] = require("fs").readFileSync(0, "utf8").split(" ").map(Number);
console.log(a + b);
