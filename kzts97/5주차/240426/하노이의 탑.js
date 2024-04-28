function solution(n) {
    
    var answer = [];
    
    function Hanoi(num, from, other, to){
    if(num === 0) {
        return;
    }else{
        
        Hanoi(num - 1 , from, to, other);
        answer.push([from, to]);
        Hanoi(num - 1, other, from, to);
    }
}
    Hanoi(n,1,2,3);
    return answer;
}