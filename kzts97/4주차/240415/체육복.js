function solution(n, lost, reserve) {
    // 각 학생별 체육복 수량 초기화
    const arr = Array(n).fill(1);
    lost.forEach((e) => (arr[e - 1] -= 1));
    reserve.forEach((e) => (arr[e - 1] += 1));

    // 현재 학생이 채육복이 없다면 앞,뒤 여벌 남는 학생에게 하나 빌리기.
    arr.forEach((e, i) => {
        if (arr[i] === 0 && arr[i - 1] === 2) { // 바뀐 부분
            arr[i] += 1;
            arr[i - 1] -= 1;
        }
        if (arr[i] === 0 && arr[i + 1] === 2) { // 바뀐 부분
            arr[i] += 1;
            arr[i + 1] -= 1;
        }
    });

    return arr.filter((e) => e > 0).length;
}