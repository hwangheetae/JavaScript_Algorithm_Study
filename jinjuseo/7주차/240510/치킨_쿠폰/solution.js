const solution = (chicken) => {
  let service = 0;
  let order = 0;
  while (chicken > 0) {
    chicken--;
    order++;
    if (order === 10) {
      service += 1;
      order = 1;
    }
  }
  return service;
};
