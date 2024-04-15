const solution = (my_string, letter) => {
  return [...my_string].filter((char) => char !== letter).join("");

  //다른풀이
  //return my_string.replaceAll(letter, "");
  //신박한풀이
  //return my_string.split(letter).join('')
};
