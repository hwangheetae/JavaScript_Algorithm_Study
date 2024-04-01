/*
 *  "aya" , "ye", "woo" ,"ma" 네 가지 발음
 * - 최대 한 번씩 사용
 * - babbling : 문자열 배열
 * - return ; 조카가 발음할 수 있는 단어의 개수
 */

function solution(babbling) {
  var answer = 0;
  const possible = ["aya", "ye", "woo", "ma"];
  let count = 0;
  for (let word of babbling) {
    let wordItem = word;
    possible.forEach((item) => {
      if (wordItem.indexOf(item) !== -1) {
        wordItem = wordItem.replace(item, " ");
      }
    });
    wordItem = wordItem.trim();
    if (wordItem.length === 0) {
      count += 1;
    }
  }
  answer = count;
  return answer;
}
