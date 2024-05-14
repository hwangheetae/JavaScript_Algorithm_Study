const solution = (common) => {
  if (common[2] / common[1] === common[1] / common[0]) {
    const multiple = common[2] / common[1];
    return common.at(-1) * multiple;
  } else {
    const diff = common[2] - common[1];
    return common.at(-1) + diff;
  }
};
