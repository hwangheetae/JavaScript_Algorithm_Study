/*
프로그래머스
Lv.1 [PCCP 기출문제] 1번 / 붕대 감기

어떤 게임에는 붕대 감기라는 기술이 있습니다.
붕대 감기는 t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복합니다.
t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복합니다. 게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능합니다.
기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없습니다.
몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 연속 성공 시간이 0으로 초기화됩니다.
몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어듭니다. 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없습니다.
당신은 붕대감기 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 궁금합니다.
붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 bandage와 최대 체력을 의미하는 정수 health, 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 주어집니다.
모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해 주세요. 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요.

bandage는 [시전 시간, 초당 회복량, 추가 회복량] 형태의 길이가 3인 정수 배열입니다.
1 ≤ 시전 시간 = t ≤ 50
1 ≤ 초당 회복량 = x ≤ 100
1 ≤ 추가 회복량 = y ≤ 100

1 ≤ health ≤ 1,000

1 ≤ attacks의 길이 ≤ 100
attacks[i]는 [공격 시간, 피해량] 형태의 길이가 2인 정수 배열입니다.
attacks는 공격 시간을 기준으로 오름차순 정렬된 상태입니다.
attacks의 공격 시간은 모두 다릅니다.
1 ≤ 공격 시간 ≤ 1,000
1 ≤ 피해량 ≤ 100
*/

function solution(bandage, health, attacks) {
    let success = 0;
    let time = 0;
    let hp = health;
    let attack = attacks.shift(); 
    
    // bandage[0] == 시전 시간
    // bandage[1] == 초당 회복량
    // bandage[2] == 추가 회복량
    // health == 현재 체력 == 최대 체력
    // attacks[i] == 공격 패턴[공격 시간, 피해량]
    // attack[0] == 공격 시간
    // attack[1] == 피해량

    while(true) {
        if(hp <= 0){
            return -1;
        }

        time++;

        if(time == attack[0]){ // 공격 시간일 때
            hp -= attack[1];
            success = 0;

            if(attacks.length === 0){ // 남아있는 공격이 없으면
                if(hp <= 0){
                    return -1;
                }
                else {
                    return hp;
                }
            }
            else{ // 남아있는 공격이 있으면
                attack = attacks.shift();
            }
        }
        else { // 공격 시간이 아닐 때
            success++;
            hp += bandage[1];
            if(success == bandage[0]){ // 시전 시간을 모두 채우면
                hp += bandage[2];
                success = 0;
            }
            if(hp > health){ // 최댓값을 넘지 않게
                hp = health;
            }
        }
    }
}

console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]));
console.log(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]));
console.log(solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]));
console.log(solution([1, 1, 1], 5, [[1, 2], [3, 2]]));