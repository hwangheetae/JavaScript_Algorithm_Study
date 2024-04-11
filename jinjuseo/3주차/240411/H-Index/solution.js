const solution = (citations) => {
  let hIndex = 0;
  const sorted = [...citations].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= hIndex && sorted.length - i >= hIndex) {
      hIndex = sorted[i] >= sorted.length - i ? sorted.length - i : sorted[i];
    }
  }

  return hIndex;
};
