const solution = (n) => {
  const oddArr = [];
  for (let i = 1; i <= n; i += 2) {
    oddArr.push(i);
  }
  return oddArr;

  /*
      다른풀이: 시간복잡도의 차이
      const arr = [...new Array(n)].map((_,i)=> i+1);
      const oddArr = arr.filter((num)=>num %2 > 0).sort((a,b)=>a-b);
      return oddArr;
      */
};
