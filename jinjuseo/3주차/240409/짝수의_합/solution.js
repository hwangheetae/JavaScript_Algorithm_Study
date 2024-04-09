const solution = (n) => {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
  // const arr = new Array(n/2).fill(0).map((x,i)=> (i+1)*2);
  // return arr.reduce((cur,acc)=>cur+acc);

  //신박한풀이
  //var half = Math.floor(n/2);
  //return half*(half+1);
};
