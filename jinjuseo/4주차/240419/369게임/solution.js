const solution = (order) => {
  const filtered = String(order)
    .split("")
    .filter((x) => x !== "0" && Number(x) % 3 === 0);
  console.log(filtered);
  return filtered.length;
};
