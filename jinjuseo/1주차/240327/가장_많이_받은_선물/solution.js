/**
카카오톡 선물하기 기능 - 축하선물보내기 
선물받은 기록 바탕으로 다음달에 누가 선물을 많이 받을지 예측

- 두 사람이 선물 주고받은 기록O -> 이번달까지 두사람사이에 더많은 선물 준사람이 다음달에 선물하나받음
    ex) A->B 5, B->A 3, => 다음달엔 A가 B에게 선물하나받음
- 주고받은 기록X or 수가 같다면 -> 선물 지수가 더 큰 사람이 작은사람에게 선물 받음
- 선물 지수: 이번달까지 자신이 친구들에게 준 선물의 수 - 받은 선물의 수
    - 선물 지수까지도 같다면 다음달에 선물 주고받지 X

friends : 친구들의 이름을 담은 문자열배열
gifts: 선물 기록을 담은 1차원 문자열배열
return : 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수 
*/

function solution(friends, gifts) {
  var answer = 0;
  const gifted = {};
  const given = {};
  const giftValues = {};
  const willBeGifted = {};
  friends.forEach((name) => {
    gifted[name] = {}; // gifted -receiver/ giver
    given[name] = {}; //given -giver/receiver
    giftValues[name] = 0;
    const filtered = friends.filter((n) => n !== name);
    filtered.forEach((friend) => {
      gifted[name][friend] = 0;
      given[name][friend] = 0;
    });
  });

  gifts.forEach((gift) => {
    let [giver, receiver] = gift.split(" ");
    given[giver][receiver] += 1;
    gifted[receiver][giver] += 1;
    giftValues[giver] += 1;
    giftValues[receiver] -= 1;
  });

  friends.forEach((name) => {
    willBeGifted[name] = getGift(friends, gifted, given, name, giftValues);
  });

  const willBeGiftedArr = Object.values(willBeGifted);
  return Math.max(...willBeGiftedArr);
}

const getGift = (friends, gifted, given, name, giftValues) => {
  const filteredFriends = friends.filter((n) => n !== name);
  let sum = 0;
  filteredFriends.forEach((friend) => {
    let givenSum = given[name][friend];
    let giftedSum = gifted[name][friend];
    if (givenSum > giftedSum) {
      sum += 1;
    } else if (
      givenSum === giftedSum &&
      giftValues[name] > giftValues[friend]
    ) {
      sum += 1;
    }
  });
  return sum;
};
