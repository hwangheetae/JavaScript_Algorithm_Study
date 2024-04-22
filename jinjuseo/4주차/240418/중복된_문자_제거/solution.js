const solution = (my_string) => {
  const arr = [];
  my_string.split("").forEach((item) => {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  });

  return arr.join("");
};

//set사용하면 간단
