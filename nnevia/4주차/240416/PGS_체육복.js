function solution(n, lost, reserve) {
  const setLost = new Set(lost.sort((a,b) => a - b).filter(x => !reserve.includes(x)));
  const setReserve = new Set(reserve.sort((a,b) => a - b).filter(x => !lost.includes(x)));

  for (let i of setReserve) {
      if (setLost.has(i - 1)) {
          setLost.delete(i - 1);
      } else if (setLost.has(i + 1)) {
          setLost.delete(i + 1);
      }
  }
  
  return n - setLost.size;
}