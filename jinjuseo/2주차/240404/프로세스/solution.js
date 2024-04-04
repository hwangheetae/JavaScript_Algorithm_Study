/*
1. queue에서 대기중인 프로세스 하나 꺼내기
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 
방금 꺼낸 프로세스 다시 큐에넣기
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스 실행
    - 한번 실행한 프로세스는 다시 큐에 넣지 않고 종료
    
return : 특정 프로세스가 몇 번째로 실행되는지 
location : 특정프로세스의 위치
*/
const solution = (priorities, location) => {
  //location === no인 아이템찾기
  let runCount = 0;
  const queue = priorities.map((priority, i) => {
    const obj = {};
    obj["prior"] = priority;
    obj["no"] = i;
    return obj;
  });
  while (queue.length > 0) {
    const process = queue.shift();
    const filtered = queue.filter((obj) => obj["prior"] > process.prior);
    if (filtered.length > 0) {
      queue.push(process);
      continue;
    }
    runCount++;
    if (process.no === location) {
      return runCount;
    }
  }
  // console.log(queue);
};
