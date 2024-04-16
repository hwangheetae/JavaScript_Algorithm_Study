//무인도 갇힌 사람들은 구명보트 이용하여 구출
//한번에 최대2명씩밖에 탈수없음, 무게제한있음
//구명보트를 최대한 적게 사용하여 모든 사람 구출하려고함
//people:몸무게 배열
//limit:무게제한
//return 필요한 구명보트개수

//첫풀이 -> 정렬순만바꾸니 반복문이 조건문하나로해결돼서 시간복잡도가 줄었다!!! 당연한걸,,너무오래생각했음./
const solution = (people, limit) => {
  const weight = [...people].sort((a, b) => a - b); //오름차순정렬
  let count = 0;
  let sum = 0;

  while (weight.length > 0) {
    count += 1;
    sum = weight.pop();
    if (weight[0] + sum <= limit) {
      weight.splice(0, 1);
    }
  }
  return count;
};

//첫풀이 :
////     const weight = [...people].sort((a,b)=>b-a); //내림차순 정렬
//     let count =0;
//     let sum=0;

//     while(weight.length>0){
//         count+=1;
//         sum = weight.pop();
//         for(let i=0;i<weight.length;i++){
//             if(weight[i]+sum<=limit){
//                 weight.splice(i,1);
//                 break;
//             }
//         }
//     }
//     return count;
