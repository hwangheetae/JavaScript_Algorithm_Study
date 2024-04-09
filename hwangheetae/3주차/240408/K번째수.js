function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    var temp = array.slice(commands[i][0] - 1, commands[i][1]);
    temp.sort((x, y) => x - y);
    answer.push(temp[commands[i][2] - 1]);
  }

  return answer;
}

//신박한 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array.filter(
      (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
    );
    console.log(newArray);
    return newArray[position - 1];
  });
}
