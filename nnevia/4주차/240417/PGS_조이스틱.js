// function stick(init, name) {
//     let cnt = 0;
//     for (let i = 0; i < init.length; i++) {
//         if (name.charCodeAt(i) > 77) {
//             var flag = -1;
//         } else {
//             var flag = 1;
//         }
//         while (init[i] !== name[i]) {
//             if (flag === -1) {
//                 if (init[i] === 'A') {
//                     init[i] = 'Z';
//                 } else {
//                     init[i] = String.fromCharCode(init[i].charCodeAt(0) - 1);
//                 }
//             } else {
//                 init[i] = String.fromCharCode(init[i].charCodeAt(0) + 1);
//             }
//             cnt++;
//         }
//         if (init.join('') === name) {
//             return cnt;
//         }
//         cnt++;
//     }
//     return cnt;
// }

function solution(name) {
    const right = Array(name.length).fill('A');
    const left = Array(name.length).fill('A');

    const answer = Math.min(stick(right, name), stick(left, 'A' + name.split('').reverse().join('').slice(1)));
    return answer;
}


//  2차 풀이 (구글)
function solution(name) {
    let answer = 0;
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        answer += Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
        
        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        
        minMove = Math.min(minMove, 2 * i + name.length - next, i + 2 * (name.length - next));
    }
    
    answer += minMove;
    return answer;
}