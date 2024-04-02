/*
기능 개선 작업
- 각 기능은 진도가 100%일때 서비스에 반영가능
- 각 기능의 개발속도 모두 다름 
    -> 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
    -> 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됨
- progresses :먼저 배포돼야 하는 순서대로 작업의 진도가 적힌 정수 배열 < 100
- speeds: 각 작업의 개발 속도가 적힌 정수 배열  <= 100
- return: 각 배포마다 몇 개의 기능이 배포되는지
- 배포는 하루에 한 번만 간으, 하루의 끝에 이루어짐
    ex) 진도율이 95%인 작업의 개발속도가 하루에 4% => 배포는 2일뒤에 

*/
const solution = (progresses, speeds) => {
  const n = progresses.length;
  let sum = 0;
  const deployment = []; //result
  let queue = [...progresses];
  let speedsQueue = [...speeds];
  while (sum < n) {
    queue = queue.map((job, i) => job + speedsQueue[i]);
    let count = 0;
    for (let job of queue) {
      if (job < 100) break;
      if (job >= 100) count += 1;
    }
    if (count > 0) {
      queue = queue.filter((job, i) => i >= count);
      speedsQueue = speedsQueue.filter((job, i) => i >= count);
      deployment.push(count);
      sum += count;
    }
  }
  return deployment;
};
