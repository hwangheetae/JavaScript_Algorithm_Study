const solution = (n) => {
  let pizza = 1;
  while ((pizza * 6) % n !== 0) {
    pizza++;
  }
  return pizza;
};

//다른풀이 : 최소 공배수
// const solution = (n)=>{
//      return ((n * 6) / gcd(n,6))/6
// }
// function gcd(a, b) {
//   let r;
//   while (b != 0) {
//     r = a % b
//     a = b
//     b = r
//   }
//   return a
// }
