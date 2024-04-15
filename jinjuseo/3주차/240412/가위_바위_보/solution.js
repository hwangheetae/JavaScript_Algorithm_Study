const solution = (rsp) => {
  return rsp.split("").reduce((acc, cur) => {
    const curr = cur === "2" ? "0" : cur === "0" ? "5" : "2";
    return acc + curr;
  }, "");

  //다른풀이 : 객체사용
  // const obj ={
  //     "2" :0,
  //     "0":5,
  //     "5":2,
  // }
};
