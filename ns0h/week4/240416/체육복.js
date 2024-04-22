/*
프로그래머스
Lv.1 체육복

점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

function solution(n, lost, reserve) {

    // 여벌을 가져왔지만 도난 당한 학생을 배열에서 제거
    // 배열을 Set으로 바꿈으로서 시간 복잡도 개선
    let setLost = new Set(lost);
    let setReserve = new Set(reserve);
    let setReserveLost = new Set(reserve.filter(x => setLost.has(x)));
    setReserveLost.forEach(element => {
        setReserve.delete(element);
        setLost.delete(element);
    });

    // lost 배열에 항상 정렬되어있다는 가정이 없기때문에, 오름차순으로 정렬
    lost = [...setLost].sort((a, b) => a - b);
    // 수업에 참가할 수 있는 학생의 수 저장
    let answer = n - lost.length;

    // 체육복을 빌릴 수 있는 학생 계산
    for(let i = 0; i < lost.length; i++){
        let num1 = lost[i] - 1 ? lost[i] - 1 : 0;
        let num2 = lost[i] + 1 <= n ? lost[i] + 1 : 0;
        if(setReserve.has(num1)){
            answer++;
            setReserve.delete(num1);
        }
        else if(setReserve.has(num2)){
            answer++;
            setReserve.delete(num2);
        }
    }

    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(4, [2, 3], [3, 4])); // 3

/*
시간 복잡도를 줄이는데에 Set이 효율적입니다.
아래는 Set 사용을 최소화한 코드입니다.
실제로 두 코드 실행 결과 위의 코드의 시간 복잡도가 덜하게 나왔습니다. (평균적으로 시간을 0.5배 정도 줄임)

function solution(n, lost, reserve) {

    // 여벌을 가져왔지만 도난 당한 학생을 배열에서 제거
    const setLost = new Set(lost);          // 배열을 Set으로 바꿈으로서 시간 복잡도 개선
    let setReserveLost = new Set();
    reserve.forEach(element => setLost.has(element) && setReserveLost.add(element));
    reserve = reserve.filter(element => !setReserveLost.has(element));
    lost = lost.filter(element => !setReserveLost.has(element));

    // 수업에 참가할 수 있는 학생의 수 저장
    let answer = n - lost.length;
    // lost 배열에 항상 정렬되어있다는 가정이 없기때문에, 오름차순으로 정렬
    lost = lost.sort((a, b) => a - b);

    // 체육복을 빌릴 수 있는 학생 계산
    for(let i = 0; i < lost.length; i++){
        let num1 = lost[i] - 1 ? lost[i] - 1 : 0;
        let num2 = lost[i] + 1 <= n ? lost[i] + 1 : 0;
        if(reserve.includes(num1)){
            answer++;
            let index = reserve.indexOf(num1);
            reserve.splice(index, 1);
        }
        else if(reserve.includes(num2)){
            answer++;
            let index = reserve.indexOf(num2);
            reserve.splice(index, 1);
        }
    }

    return answer;
}
*/