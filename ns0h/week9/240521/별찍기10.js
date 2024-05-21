/*
백준
2447번 별 찍기 - 10

문제
재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.
크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.

***
* *
***

N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.

입력
첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.

출력
첫째 줄부터 N번째 줄까지 별을 출력한다.
*/

const fs = require('fs');
let N = fs.readFileSync('ns0h/week9/240521/input.txt').toString().split('\n').map(Number);
// 코드 제출 시 let N = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

function solution(N) {
    // 2차원 배열 생성 후 각 자리의 문자 저장 -> 마지막에 join
    let pattern = Array.from({ length: N }, () => Array(N).fill(' '));

    function fillPattern(x, y, size) {
        if (size === 1) {
            pattern[x][y] = '*';
            return;
        }

        let newSize = size / 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === 1 && j === 1) continue; // 가운데 비우기
                fillPattern(x + i * newSize, y + j * newSize, newSize);
            }
        }
    }

    fillPattern(0, 0, N);

    for (let i = 0; i < N; i++) {
        console.log(pattern[i].join(''));
    }
}

solution(N[0]);