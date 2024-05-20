const solution = (A, B) => {
  let arr = A.split("");
  let count = 0;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr.join("") === B) {
      flag = true;
      break;
    }
    let curr = arr.pop();
    arr.unshift(curr);
    count++;
  }
  return flag ? count : -1;
};

//신박한 풀이
// let solution=(a,b)=>(b+b).indexOf(a)
