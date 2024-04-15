//틀린 코드
function solution(code) {
  var arr = code.split("");
  var mode = 0;
  var ret = "";
  console.log(arr.indexOf("1"));
  for (item of arr) {
    if (mode === 0) {
      if (item !== "1") {
        if (arr.indexOf(item) % 2 === 0) {
          ret += item;
        }
      } else {
        mode = 1;
      }
    } else {
      if (item !== "1") {
        if (arr.indexOf(item) % 2 !== 0) {
          ret += item;
        }
      } else {
        mode = 0;
      }
    }
  }

  if (ret.length === 0) {
    return "Empty";
  } else {
    return ret;
  }
}

//정답

function solution(code) {
  var arr = code.split("");
  var mode = 0;
  var ret = "";
  for (let i = 0; i < arr.length; i++) {
    if (mode === 0) {
      if (arr[i] !== "1") {
        if (i % 2 === 0) {
          ret += arr[i];
        }
      } else {
        mode = 1;
      }
    } else {
      if (arr[i] !== "1") {
        if (i % 2 !== 0) {
          ret += arr[i];
        }
      } else {
        mode = 0;
      }
    }
  }
  if (ret.length === 0) {
    return "EMPTY";
  } else {
    return ret;
  }
}
