function solution(ineq, eq, n, m) {
  if (ineq === "<") {
    if (eq === "=") {
      return n <= m ? 1 : 0;
    } else {
      return n < m ? 1 : 0;
    }
  } else {
    if (eq === "=") {
      return n >= m ? 1 : 0;
    } else {
      return n > m ? 1 : 0;
    }
  }
}

//다른 풀이
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
