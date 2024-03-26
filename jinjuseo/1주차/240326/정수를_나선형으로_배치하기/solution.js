/*
인자: 양의 정수 n
n * n 배열에 1~n제곱까지 정수 인덱스 [0][0] ~ 시계방향 나선형으로 배치한
이차원 배열을 return

*/
function solution(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  arr.forEach((array, index) => {
    array.fill(0);
  });
  let x = 0,
    y = 0;
  let num = 2;
  arr[x][y] = 1;
  while (num <= n * n) {
    [x, y, num] = toRight(arr, x, y + 1, n, num);
    [x, y, num] = toBottom(arr, x + 1, y, n, num);
    [x, y, num] = toLeft(arr, x, y - 1, n, num);
    [x, y, num] = toUp(arr, x - 1, y, n, num);
  }

  return arr;
}
const toRight = (arr, x, y, n, num) => {
  let i,
    number = num;
  for (i = y; i < n; i++) {
    if (arr[x][i] !== 0) {
      break;
    }
    arr[x][i] = number++;
  }
  return [x, i - 1, number];
};

const toBottom = (arr, x, y, n, num) => {
  let i,
    number = num;
  for (i = x; i < n; i++) {
    if (arr[i][y] !== 0) {
      break;
    }
    arr[i][y] = number++;
  }
  return [i - 1, y, number];
};

const toLeft = (arr, x, y, n, num) => {
  let i,
    number = num;
  for (i = y; i >= 0; i--) {
    if (arr[x][i] !== 0) {
      break;
    }
    arr[x][i] = number++;
  }
  return [x, i + 1, number];
};

const toUp = (arr, x, y, n, num) => {
  let i,
    number = num;
  for (i = x; i >= 0; i--) {
    if (arr[i][y] !== 0) {
      break;
    }
    arr[i][y] = number++;
  }

  return [i + 1, y, number];
};
