let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, ...numList] = input.map((e) => Number(e));
    const result = numList.sort((a, b) => a - b);
    console.log(result.join("\n"));
  });
