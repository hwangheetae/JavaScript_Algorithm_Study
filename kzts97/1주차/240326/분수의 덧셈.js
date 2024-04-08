function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    
    //작은수 구하기
    let minNumber; 
    if(denum < num){ //분모< 분자 작을때 
        minNumber = denum;
    }else{
        minNumber = num;
    }
    //나누어 떨어지는것 ->나머지가 0 
    while (true) {
        if(denum % minNumber === 0 ){ //분자를 나누어떨어지게
            if(num % minNumber === 0){ //분모를~~
        //min number 은 최대공약수
            return [denum / minNumber, num / minNumber] //기약분수 
            }
        }
        // 1줄이면 최종적으로 1이나올때까지
minNumber = minNumber -1;
    }
}
    //1.분모를 덧셈

    //2.분자,분모의 최대공약수로 나누기.
    //2-1.분자,분모 중 작은 수 찾기.
    //2-2.작은수를 분자,분모로 나누어보기.
    //2-2-1. 둘다 나누어 떨어지면 그 나눈수가 최대공약수
    //2-2-2.안 나누어떨어지면 작은수를 1줄이고 2-2로돌아가기.





