const solution = (numbers, direction) => {
  const arr = [...numbers];
  if (direction === "right") {
    const item = arr.pop();
    arr.unshift(item);
    return arr;
  } else {
    const item = arr.shift();
    arr.push(item);
    return arr;
  }
};
