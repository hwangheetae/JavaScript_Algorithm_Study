/*
백준
2750번 수 정렬하기

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

+
삽입 정렬과 버블 정렬 알고리즘 구현해보기
*/

const fs = require('fs');
let array = fs.readFileSync('ns0h/week3/240411/input.txt').toString().trim().split('\n');
// 코드 제출 시 let array = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function InsertionSort(array){
    for(let i = 1; i < array.length; i++){
        let key = array[i];                 // 두번째 인덱스부터 key로 설정
        let j = i - 1;                      // key의 바로 앞 인덱스
        while(j >= 0 && array[j] > key){    // key와 같거나 key보다 작은 값이 나올 때 까지 이동
            array[j + 1] = array[j];        // 앞의 값이 뒤의 값보다 크면, 앞의 값을 뒤로 이동
            j--;                            // 더 앞의 인덱스로 이동
        }
        array[j + 1] = key;                 // key와 같거나 key보다 작은 값 바로 뒤에 key 위치
    }
    return array;
}

function BubbleSort(array){
    length = array.length;
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < length; i++){
            if(array[i] > array[i + 1]){    // 바로 앞 요소가 더 크면 바꾼다
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                swapped = true;             // 바꾼게 있으면 swapped = true
            }                               // 한번도 바꾼게 없으면 swapped = false
        }
        length--;                           // 맨 뒤에 가장 큰 요소가 배치되므로 총 길이 --
    }

    return array;
}

function solution(array) {
    array.splice(0, 1);
    // array.sort((a, b) => a - b);         // 간단한 방법
    array = array.map(str => parseInt(str, 10));

    // return InsertionSort(array);
    return BubbleSort(array);
}

console.log(solution(array).join('\n'));

// 처음에 데이터 받아올 때 .trim() 없으면 오답 처리 됨