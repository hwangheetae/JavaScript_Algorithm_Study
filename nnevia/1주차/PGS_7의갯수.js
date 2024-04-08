// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 100,000

function solution(array) {
    const arr = array.join('').match(/7/g);  // 입력받은 배열을 문자열로 변경 후 7과 매칭되는 문자열만 반환
    return arr == null ? 0 : arr.length;  // 7의 갯수 return
}