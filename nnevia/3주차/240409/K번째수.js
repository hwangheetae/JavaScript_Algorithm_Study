function solution(array, commands) {
  const answer = [];
  for (let l = 0; l < commands.length; l++) {
      const i = commands[l][0];
      const j = commands[l][1];
      const k = commands[l][2];
      answer.push(array.slice(i-1, j).sort((a, b) => a - b)[k-1]);
  }
  return answer;
}