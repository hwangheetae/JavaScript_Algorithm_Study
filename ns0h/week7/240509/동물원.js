/*
백준
1309번 동물원

어떤 동물원에 가로로 두칸 세로로 N칸인 아래와 같은 우리가 있다.
이 동물원에는 사자들이 살고 있는데 사자들을 우리에 가둘 때, 가로로도 세로로도 붙어 있게 배치할 수는 없다. 이 동물원 조련사는 사자들의 배치 문제 때문에 골머리를 앓고 있다.
동물원 조련사의 머리가 아프지 않도록 우리가 2*N 배열에 사자를 배치하는 경우의 수가 몇 가지인지를 알아내는 프로그램을 작성해 주도록 하자.
사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 친다고 가정한다.

입력
첫째 줄에 우리의 크기 N(1≤N≤100,000)이 주어진다.

출력
첫째 줄에 사자를 배치하는 경우의 수를 9901로 나눈 나머지를 출력하여라.
*/

const fs = require('fs');
let N = +(fs.readFileSync('ns0h/week7/240509/input.txt').toString());
// 코드 제출 시 let input = +(fs.readFileSync('/dev/stdin').toString());  

// ChatGPT 코드
function solution(N) {
    const mod = 9901;
    const dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));
    
    // 초기값 설정
    dp[1][0] = 1;
    dp[1][1] = 1;
    dp[1][2] = 1;
    
    for (let i = 2; i <= N; i++) {
        dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2]) % mod;
        dp[i][1] = (dp[i-1][0] + dp[i-1][2]) % mod;
        dp[i][2] = (dp[i-1][0] + dp[i-1][1]) % mod;
    }
    
    const result = (dp[N][0] + dp[N][1] + dp[N][2]) % mod;
    console.log(result);
}

solution(N);

// 최초 작성 코드 : 사자가 i마리일 때를 순차로 계산하려했으나 알고리즘이 떠오르지 않음
// function solution(N) {
//     console.log(N);

//     let count = 1; // 사자가 0마리
//     count += N*2 % 9901; // 사자가 1마리
//     count += 2; // 사자가 N마리

//     // 사자가 2마리
//     for(let i = 1; i < (N-1)*2; i += 2){
//         count += i*2;
//     }


//     for(let i = 2; i < N; i++){

//     }

//    console.log(cage); 
// }