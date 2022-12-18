// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
const solution = (phone_number) => {
  const phoneNumArr = phone_number.split("");
  let blindPhoneNum = [];

  for (let i = -1; i >= -phone_number.length; i--) {
    if (i >= -4) {
      blindPhoneNum.unshift(phoneNumArr.at(i));
    } else {
      blindPhoneNum.unshift("*");
    }
  }

  return blindPhoneNum.join("");
};
solution("01033334444");
solution("027778888");
solution("01012345678");

const solution2 = (phone_number) => {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
};

solution2("01033334444");
solution2("027778888");
solution2("01012345678");
