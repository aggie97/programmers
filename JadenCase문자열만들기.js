function solution(s) {
  let answer = "";

  // return s.split(/\s*\s/)
  //         .map((str) => str.toLowerCase())
  //         .map((str) =>
  //              Number.isNaN(Number(str[0])) ?
  //                 str[0].toUpperCase() + str.slice(1) :
  //                 str
  //             )
  //         .join(" ")
  // 첫 트
  answer += s[0].toUpperCase();
  for (let i = 1; i < s.length; i++) {
    if (s[i] === " ") answer += s[i];
    else {
      if (s[i - 1] === " ") answer += s[i].toUpperCase();
      else answer += s[i].toLowerCase();
    }
  }
  return answer;
}
