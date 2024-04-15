function solution(files) { 
  const pattern = /(\D+)(\d{1,5})/;
  return files.sort((a, b) => {
      let [aHead, aNumber] = a.match(pattern).slice(1, 3);
      let [bHead, bNumber] = b.match(pattern).slice(1, 3);
      aHead = aHead.toLowerCase();
      bHead = bHead.toLowerCase();
      
      if (aHead === bHead && aNumber === bNumber) 
          return 0;
      
      if (aHead === bHead) 
          return aNumber - bNumber;
      
      if (aHead > bHead) 
          return 1;
      else 
          return -1;
  });
}