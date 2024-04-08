function solution(bridge_length, weight, truck_weights) {
  let queue = new Array(bridge_length).fill(0);
  let seconds = 0;
  
  while (queue.length) {
      queue.shift();
      seconds++;
      
      let queueSum = queue.reduce((acc,cur) => acc + cur, 0);
      
      if (truck_weights.length) { 
          if (queueSum + truck_weights[0] <= weight) {
              let temp = truck_weights.shift();
              queue.push(temp); 
          } else {
              queue.push(0);
          }
      }
  }
  
  return seconds;
}