function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  let left = 0;
  let right = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    // ())(() 의 예외처리가 필요
    if (left < right) return false;
    s[i] === "(" ? left++ : right++;
  }
  return left - right === 0 ? true : false;
}
