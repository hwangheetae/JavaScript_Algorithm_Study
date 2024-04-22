function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let i = 0;
  j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    answer++;
  }
  return answer;
}

// 이 알고리즘은 O(n log n)의 시간 복잡도를 가집니다 (정렬 때문에), 그리고 사람들의 몸무게 배열을 한 번 순회하므로 매우 효율적으로 문제를 해결할 수 있습니다.
