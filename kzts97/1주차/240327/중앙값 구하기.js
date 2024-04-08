// 입력은 [9,-1,0]
function solution(array) {
    //minNumer
    let arrayCnt =0;
    let newArray = [];
    while(arrayCnt < array.length) {
        let minNumber =1000;
    
    //배열에서 최소값을 찾는것.
    let cnt =0;
    while (cnt < array.length) {
        if( minNumber > array[cnt]) {
            minNumber = array[cnt];
        }
        cnt = cnt + 1;
    }

    //minNumber <- 최소값
    newArray.push(minNumber);

    //기존배열에서 꺼내고, 기존배열에서 삭제.
    let cnt2 =0;
    while(cnt2 < array.length) {
        if(minNumber === array[cnt2]) {
            array[cnt2] = 1000;
            break;
        }
        cnt2 = cnt2 + 1;       
    }
        arrayCnt = arrayCnt + 1;
    }
    // 3.가운데 숫자꺼내기.
    return newArray[Math.floor(array.length / 2)];
}


//return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];



// let arrayCnt =0;
// while(arrayCnt < array.length) {

//     arrayCnt = arrayCnt + 1;
// }
// return answer;



    var answer = 0;
    // 제일작은숫자를 저장할 번수 생성.
    let minNumber = -1000; //배열가능한숫자보다 더작은숫자넣어야 -1000
    if(true) { 
        minNumber = 9; 
    
}
    if(false) { 
        minNumber = array[1]; 

}
    if(minNumber < array[2]) { //최소값보다 배열원소가 크면
        minNumber = array[2]; //얘가 최소값

}
// minNumber

// "minNumber < array[0]" = "-1000 < 9" , "true" | minNumber = 9;
if(minNumber < array[0]) { //최소값보다 배열원소가 크면
    minNumber = array[0]; //얘가 최소값

}


return answer;

// 1.배열

// 2.정렬
//2-1. 배열중 제일 작은값 찾기
//2-2. 찾으면 새배열넣기
//2-3. 기존배열에서 꺼내고, 기존배열에서 삭제.
//2-4. 원래배열 길이만큼 반복했으면 끝낸다. 아니면 2-1로 돌아간다.

// 3.가운데 숫자꺼내기.
//배열길이가 5 , array [2]
//배열길이 n, array[Math.floor(n/2}}]
// 절반 나누고,소수점 없애기.