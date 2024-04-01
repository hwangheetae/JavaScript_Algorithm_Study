function solution(my_string, overwrite_string, s) {
  n = overwrite_string.length;
  my_string =
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + n, my_string.length);
  return my_string;
}
