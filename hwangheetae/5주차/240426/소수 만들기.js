// 파이썬 첫 시도(통과, isPrime 참고)
// from itertools import combinations

// def findrprime(num):
//     for i in range(2,num):
//         if (num %i ==0):
//            return False
//     return True

// def solution(nums):
//     count =0
//     answer= list(combinations(nums,3))
//     for item in answer:
//         if findrprime(sum(item)):
//             count+=1
//     return count

//js 구현(조합,참고 )
const getCombinations = function (arr, selectedNumber) {
  const result = [];
  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, selectedNumber - 1);

    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
};
// 기능 설명
// 기본 경우 (Base Case):
// if (selectedNumber === 1) return arr.map((el) => [el]);
// 선택해야 할 숫자의 개수(selectedNumber)가 1이면, 배열 arr의 각 요소를 하나의 배열로 만들어서 반환합니다. 예를 들어, arr가 [1, 2, 3]이고 selectedNumber가 1이면, [[1], [2], [3]]을 반환합니다.
// 재귀적 경우 (Recursive Case):
// 배열의 각 요소를 고정점(fixed)으로 설정하고, 고정점 이후의 요소들(rest)로부터 나머지 조합을 생성합니다.
// const rest = origin.slice(index + 1);
// slice(index + 1)를 통해 현재 요소의 인덱스 다음 요소부터 배열의 끝까지를 새 배열로 만듭니다.
// const combinations = getCombinations(rest, selectedNumber - 1);
// 재귀 호출을 통해 나머지 요소들로부터 필요한 개수(selectedNumber - 1)만큼의 조합을 생성합니다.
// const attached = combinations.map((el) => [fixed, ...el]);
// 생성된 조합에 현재의 고정점을 추가하여 새로운 조합을 형성합니다.
// result.push(...attached);
// 이렇게 형성된 모든 조합을 결과 배열에 추가합니다.
// 결과 반환
// 함수의 마지막에서 result 배열, 즉 모든 가능한 조합이 저장된 배열을 반환합니다.

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  let count = 0;
  const arr = getCombinations(nums, 3);
  arr.forEach((v) => {
    const sum = v.reduce((acc, cur) => {
      return acc + cur;
    });
    if (isPrime(sum)) {
      count += 1;
    }
  });
  return count;
}

//다른사람 풀이(완전탐색)
function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if (primecheck(nums[i] + nums[j] + nums[w])) {
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}

//https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
