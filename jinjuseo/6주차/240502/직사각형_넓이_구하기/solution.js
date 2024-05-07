const solution = (dots) => {
  let arrX = dots.map(([x, y]) => x);
  let arrY = dots.map(([x, y]) => y);
  let minX = Math.min(...arrX);
  let maxX = Math.max(...arrX);
  let minY = Math.min(...arrY);
  let maxY = Math.max(...arrY);
  return (maxX - minX) * (maxY - minY);
};
