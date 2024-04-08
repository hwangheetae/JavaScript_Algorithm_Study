function solution(priorities, location) {
    
  let cnt = 0
  
  while(1) {
      const v = priorities.shift()
      
      if (priorities.some(el => v < el)){
          priorities.push(v)
          location = location-1 < 0 ? priorities.length - 1 : location - 1 
          continue
      }
      
      cnt++
      if (location===0) return cnt
      location = location-1 < 0 ? priorities.length - 1 : location - 1 
      
  }
  
  
}