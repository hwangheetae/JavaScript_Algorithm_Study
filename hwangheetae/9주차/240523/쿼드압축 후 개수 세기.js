function solution(arr) {
  let result = [0, 0];
  function compress(x, y, n) {
    if (n === 1) {
      result[arr[x][y]]++;
      return;
    }
    let total = 0;

    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        total += arr[i][j];
      }
    }
    if (total === 0) {
      result[0]++;
    } else if (total === n * n) {
      result[1]++;
    } else {
      const half = n / 2;
      compress(x, y, half);
      compress(x, y + half, half);
      compress(x + half, y, half);
      compress(x + half, y + half, half);
    }
  }

  compress(0, 0, arr.length);
  return result;
}
