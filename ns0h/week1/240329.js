/*
프로그래머스
Lv.1 가장 많이 받은 선물

선물을 직접 전하기 힘들 때 카카오톡 선물하기 기능을 이용해 축하 선물을 보낼 수 있습니다.
당신의 친구들이 이번 달까지 선물을 주고받은 기록을 바탕으로 다음 달에 누가 선물을 많이 받을지 예측하려고 합니다.

두 사람이 선물을 주고받은 기록이 있다면, 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다.
예를 들어 A가 B에게 선물을 5번 줬고, B가 A에게 선물을 3번 줬다면 다음 달엔 A가 B에게 선물을 하나 받습니다.
두 사람이 선물을 주고받은 기록이 하나도 없거나 주고받은 수가 같다면, 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.
선물 지수는 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값입니다.
예를 들어 A가 친구들에게 준 선물이 3개고 받은 선물이 10개라면 A의 선물 지수는 -7입니다.
B가 친구들에게 준 선물이 3개고 받은 선물이 2개라면 B의 선물 지수는 1입니다. 만약 A와 B가 선물을 주고받은 적이 없거나 정확히 같은 수로 선물을 주고받았다면, 다음 달엔 B가 A에게 선물을 하나 받습니다.
만약 두 사람의 선물 지수도 같다면 다음 달에 선물을 주고받지 않습니다.
위에서 설명한 규칙대로 다음 달에 선물을 주고받을 때, 당신은 선물을 가장 많이 받을 친구가 받을 선물의 수를 알고 싶습니다.

친구들의 이름을 담은 1차원 문자열 배열 friends 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts가 매개변수로 주어집니다.
이때, 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수를 return 하도록 solution 함수를 완성해 주세요.

2 ≤ friends의 길이 = 친구들의 수 ≤ 50
friends의 원소는 친구의 이름을 의미하는 알파벳 소문자로 이루어진 길이가 10 이하인 문자열입니다.
이름이 같은 친구는 없습니다.

1 ≤ gifts의 길이 ≤ 10,000
gifts의 원소는 "A B"형태의 문자열입니다. A는 선물을 준 친구의 이름을 B는 선물을 받은 친구의 이름을 의미하며 공백 하나로 구분됩니다.
A와 B는 friends의 원소이며 A와 B가 같은 이름인 경우는 존재하지 않습니다.
*/

function solution(friends, gifts) {
    let answer = 0;
    let giveGift = {}; // key: name value: 선물 지수
    let countGifts = {}; // gifts에서 겹치는 횟수 key, value
    let acceptGift = {}; // key: name value: 다음달에 받는 선물의 수
    
    // giveGift, acceptGift 초기화
    for(let item of friends) {
        giveGift[item] = 0;
        acceptGift[item] = 0;
    }

    // countGifts 초기화
    for(let i = 0; i < friends.length; i++) {
        for(let j = i + 1; j < friends.length; j++){
            countGifts[friends[i] + " " + friends[j]] = 0;
            countGifts[friends[j] + " " + friends[i]] = 0;
        }
    }

    // 선물 지수 계산 key, value 이용
    for(let item of gifts) {
        let array = item.split(' ');
        giveGift[array[0]] += 1;
        giveGift[array[1]] -= 1;
    }

    // gifts에서 겹치는 횟수 countGifts 계산
    for(let item of gifts){
        countGifts[item] += 1;
    }

    // 다음달에 받는 선물의 수 acceptGift 계산 key, value 이용
    for(let i = 0; i < friends.length; i++){
        for(let j = i + 1; j < friends.length; j++){
            let count1 = countGifts[friends[i] + " " + friends[j]]; // i가 j에게 선물 준 횟수
            let count2 = countGifts[friends[j] + " " + friends[i]]; // j가 i에게 선물 준 횟수

            if(count1 > count2){ // i가 선물을 더 많이 줬으면
                acceptGift[friends[i]] += 1;
            }
            else if(count2 > count1){ // j가 선물을 더 많이 줬으먄
                acceptGift[friends[j]] += 1;
            }
            else { // 둘이 주고받은 횟수가 같다면
                if(giveGift[friends[i]] > giveGift[friends[j]]){ // i의 선물 지수가 더 크면
                    acceptGift[friends[i]] += 1;
                }
                else if(giveGift[friends[j]] > giveGift[friends[i]]){ // j의 선물 지수가 더 크면
                    acceptGift[friends[j]] += 1;
                }
            }
        }
    }

    for(let key in acceptGift) {
        if (acceptGift[key] > answer) {
          answer = acceptGift[key];
        }
    }

    return answer;
}

console.log(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"])); // 2
console.log(solution(["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"])); // 4
console.log(solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])); // 0