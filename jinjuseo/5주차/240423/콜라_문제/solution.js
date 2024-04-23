const solution = (a, b, n) => {
  //a : 가져가야할 최소 빈병개수, b: 되돌려받는 콜라개수
  let emptyBottle = n;
  let received = 0;
  while (emptyBottle >= a) {
    const count = Math.floor(emptyBottle / a);
    emptyBottle -= count * a;
    received += b * count;
    emptyBottle += b * count;
  }
  return received;
};

//첫번째코드 중첩반복문이 필요없을 것같아서 없앴음
// const solution = (a, b, n) => {
//   //a : 가져가야할 최소 빈병개수, b: 되돌려받는 콜라개수
//   let emptyBottle = n;
//   let fullBottle = 0;
//   let received = 0;
//   while (emptyBottle + fullBottle >= a) {
//     while (emptyBottle >= a) {
//       emptyBottle -= a;
//       received += b;
//       fullBottle += b;
//     }
//     emptyBottle += fullBottle;
//     fullBottle = 0;
//   }
//   return received;
// };
