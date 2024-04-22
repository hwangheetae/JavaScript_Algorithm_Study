/*
체육복 빌려주기 
- 학생들번호 : 체격순 => 바로 앞 번호의 학생이나 뒷번호의학생에게만 빌려줄수있음
- 전체 학생수 : n
- 체육복 도난당한 학생들 번호 배열 :lost
- 여벌 체육복을 가져온 학생들 번호reverse : reverse
- return : 체육수업을 들을 수 있는 학생수 최댓값 
- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있음! => 이 학생은 체육복을 하나만 도난당했다고 가정,
남은 체육복이 하나이기에 다른학생에게 빌려줄수없음
*/
const solution = (n, lost, reserve) => {
  let borrow = 0;
  let rest = reserve
    .filter((x) => lost.indexOf(x) === -1)
    .sort((a, b) => a - b);
  let filteredLost = lost
    .filter((x) => reserve.indexOf(x) === -1)
    .sort((a, b) => a - b);
  for (let num of filteredLost) {
    if (rest.indexOf(num - 1) !== -1) {
      borrow += 1;
      rest.splice(rest.indexOf(num - 1), 1);
      continue;
    }
    if (rest.indexOf(num + 1) !== -1) {
      borrow += 1;
      rest.splice(rest.indexOf(num + 1), 1);
    }
  }
  return n - filteredLost.length + borrow;
};
