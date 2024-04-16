const solution = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    const arr = new Array(i).fill(1).map((_, k) => k + 1);
    for (let num of arr) {
      if (i % num === 0) count++;
      if (count >= 3) {
        result++;
        break;
      }
    }
  }
  return result;
};

///첫풀이
// const solution = (n) => {
//     let count =0;
//     if(n<=3){
//         return 0;
//     }
//     for(let i=4;i<=n;i++){
//         if(isComposite(i)) count++;
//     }
//     return count;
// }

// const isComposite = (n)=>{
//     if(n%2===0 || n%3===0 ){
//         return true;
//     }
//     if(n>7 && (n%5 ===0 || n%7 ===0)){
//         return true;
//     }
//     if(Math.sqrt(n)%1 ===0) {
//         return true;
//     }
//     return false;
// }
