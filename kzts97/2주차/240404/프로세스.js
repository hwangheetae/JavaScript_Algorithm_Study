function solution(priorities, location) {
    let answer = 0;
    let arr = []
    let max_value = Math.max(...priorities);

    //위치 배열 만들기
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }

   //priorities 배열이 비어있을 때까지 반복
    while(priorities.length != 0){
         max_value = Math.max(...priorities);
        
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }else {
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}