/**
개인정보 n개 :1~n번
약관에따라 유효기간 전까지만 보관 가능, 지나면 반드시파기
ex) A라는 약관의 유효기간 12달, 2021/01/05수집 - 2022/01/04까지 보관가능 1/5부터 파기
모든달은 28일까지 있다고 가정
today: YYYY.MM.DD 오늘날짜
terms:약관종류 유효기간 문자열
privacies: 번호 개인정보 수집일자 약관종류
return: 파기해야할 개인정보 번호 오름차순으로 1차원배열에 담기

*/
function solution(today, terms, privacies) {
  var answer = [];
  let today_arr = today.split(".").map(Number);
  const terms_obj = {};
  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    terms_obj[type] = Number(month);
  });

  privacies.forEach((privacy, num) => {
    const [date, type] = privacy.split(" ");
    let date_arr = date.split(".").map(Number);
    const possible_date = getPossibleDate(date_arr, terms_obj[type]);
    if (isExpired(possible_date, today_arr)) {
      answer.push(num + 1);
    }
  });
  answer.sort((a, b) => a - b);
  return answer;
}
function getPossibleDate(date_arr, month) {
  const possible_date = [...date_arr];
  // console.log(possible_date);
  if (possible_date[1] + month > 12) {
    if ((possible_date[1] + month) % 12 === 0) {
      const year = (possible_date[1] + month) / 12 - 1;
      possible_date[0] += year;
      possible_date[1] = 12;
    } else {
      const year = Math.floor((possible_date[1] + month) / 12);
      possible_date[0] += year;
      possible_date[1] = possible_date[1] + month - 12 * year;
    }
  } else {
    possible_date[1] += month;
  }

  console.log(possible_date);

  return possible_date;
}
function isExpired(possible_date, today_date) {
  if (possible_date[0] > today_date[0]) {
    return false;
  }
  if (possible_date[0] < today_date[0]) {
    return true;
  }
  if (possible_date[1] > today_date[1]) {
    return false;
  }
  if (possible_date[1] < today_date[1]) {
    return true;
  }

  if (possible_date[2] > today_date[2]) {
    return false;
  }
  if (possible_date[2] <= today_date[2]) {
    return true;
  }
}
