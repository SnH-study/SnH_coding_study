// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

const solution = (s, n) => {
  return s
    .split("") // 띄어쓰기 포함 구분지어 배열로 반환
    .map((value) => {
      if (value === " ") return value; // 공백일 경우 그대로 반환
      return value.toUpperCase().charCodeAt() + n > 90 // 케이스들을 줄이기 위해서 문자를 대문자로 변환 후 아스키코드 값과 n을 더했을 때 90을 초과하는지 확인. 아스키코드에서 90은 "Z", 91은 "["에 해당하기 때문.
        ? String.fromCharCode(value.charCodeAt() + n - 26) // 90을 초과한다면 알파벳 갯수 26만큼 빼기
        : String.fromCharCode(value.charCodeAt() + n); // 90을 초과하지 않는다면 그대로 반환
    })
    .join("");
};
solution("AB", 1);
solution("z", 1);
solution("a B z", 4);
