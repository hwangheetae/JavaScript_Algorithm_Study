const solution = (dots) => {
  const dot = dots.shift();
  for (let i = 0; i < dots.length; i++) {
    const curr = dots.slice(i, i + 1);
    const rest = dots.slice(0, i).concat(dots.slice(i + 1));
    if (isParallel([dot, ...curr], rest)) return 1;
  }
  return 0;
};
const isParallel = (a, b) => {
  const [dot1, dot2] = [...a];
  const [dot3, dot4] = [...b];
  const line1Width = Math.abs(dot1[0] - dot2[0]);
  const line1Height = Math.abs(dot1[1] - dot2[1]);
  const line2Width = Math.abs(dot3[0] - dot4[0]);
  const line2Height = Math.abs(dot3[1] - dot4[1]);
  return line1Width * line2Height === line1Height * line2Width;
};
