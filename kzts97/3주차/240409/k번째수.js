
function solution(array, commands) {
  var answer = [];

  for(let i = 0; i < commands.length; i++){
      let Arr = array.slice(commands[i][0] - 1, commands[i][1]);
       Arr.sort((a, b) => a - b);
      answer.push(Arr[commands[i][2] - 1]);
  }
  return answer;
}

