const solution = (id_pw, db) => {
  const result = db.filter(([id, pw]) => id === id_pw[0]);
  if (result.length === 0) {
    return "fail";
  }
  const [id, pw] = result[0];
  if (pw === id_pw[1]) {
    return "login";
  }
  return "wrong pw";
};
