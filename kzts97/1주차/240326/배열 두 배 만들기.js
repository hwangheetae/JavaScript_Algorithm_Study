function solution(numbers) {
    var answer = [];

    //"push"는 "배열의 길이"만큼 해야한다
    let cnt = 0;
for(let cnt=0; cnt < numbers.length; cnt = cnt+1){
    answer.push(numbers[cnt] * 2);
}
    
    return answer;
}


// 1. numbers에서 원소를 꺼내기
// 1-1.배열에서 원소꺼내기
//  numbers [1,2,3,4,5] | numbers[0] : 첫번째 원소 꺼내기

//2.원소를 꺼내서 2배를 한 후, 새 배열에 넣어줘야한다.

//배열 5개.
// answer.push(numbers[0] * 2);
// answer.push(numbers[1] * 2);
// answer.push(numbers[2] * 2);
// answer.push(numbers[3] * 2);
// answer.push(numbers[4] * 2);

// 2-1.새로운값을 배열에 넣기
//answer.push(1); push메소드 사용.
//answer.push(numbers[0] * 2);

//배열->반복문
// // 위 배열 들어가는 숫자 만들기위해 반복문 생성.
// let cnt = 0; //처음에 숫자가 0이어야한다. cnt 변수생성.
// while(cnt < numbers.length){
//      answer.push(numbers[cnt] * 2); //배열->반복, 
//     cnt =cnt +1;
// }
// return answer;





