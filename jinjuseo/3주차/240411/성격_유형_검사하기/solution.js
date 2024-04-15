/*
나만의 카카오 성격 유형 검사지 만들기
1번: 라이언형(R), 튜브형(T)
2번: 콘형(C), 프로도형(F)
3번: 제이지형(J), 무지형(M)
4번: 어피치형(A), 네오형(N)

ex) RT : 
- R: 비동의 관련 선택지 선택하면 받는 성격유형 
- T: 동의 관련 선택지 선택하면 받는 성격유형 

*/
const solution = (survey, choices) => {
  const type = ["R", "T", "C", "F", "J", "M", "A", "N"];
  const score = [3, 2, 1, 0, 1, 2, 3];
  const my_score = {};
  type.forEach((t) => {
    my_score[t] = 0;
  });
  for (let i = 0; i < survey.length; i++) {
    const response = choices[i];
    if (response === 4) continue;
    const [disagree, agree] = survey[i].split("");
    response <= 3
      ? (my_score[disagree] += score[response - 1])
      : (my_score[agree] += score[response - 1]);
  }

  let result = "";
  for (let i = 0; i < type.length / 2; i++) {
    const a = type[i * 2];
    const b = type[i * 2 + 1];
    result += my_score[a] >= my_score[b] ? a : b;
  }
  return result;
};
