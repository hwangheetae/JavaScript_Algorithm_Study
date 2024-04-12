function solution(citations) {
  let answer = 0;
  
  citations
  .sort((a, b) => (b - a))
  .forEach((citation, index) => 
      answer = citation >= index + 1 ? answer + 1 : answer
  );
  return answer;
}