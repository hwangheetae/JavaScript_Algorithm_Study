const solution = (strlist) => {
  const arr = [];
  strlist.forEach((item) => {
    arr.push(item.length);
  });
  return arr;
};
