// 답안지 참조
function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}

//greedy를 이용한 풀이(gpt)
function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 자기 자신에게 여분이 있는 경우 제거
  lost = lost.filter((lostStudent) => {
    const index = reserve.indexOf(lostStudent);
    if (index !== -1) {
      reserve.splice(index, 1);
      return false;
    }
    return true;
  });

  // 이웃한 학생에게 빌리기

  const remainingLost = lost.filter((lostStudent) => {
    const prevStudent = reserve.indexOf(lostStudent - 1);
    if (prevStudent !== -1) {
      reserve.splice(prevStudent, 1);
      return false;
    }
    const nextStudent = reserve.indexOf(lostStudent + 1);
    if (nextStudent !== -1) {
      reserve.splice(nextStudent, 1);
      return false;
    }
    return true;
  });
  console.log(n - remainingLost.length);
  return n - remainingLost.length;
}
