function solution(s) {
  let answer = 0;
  let firstLetter = s[0];
  let firstCnt = 1;
  let otherCnt = 0;

  for (let i = 1; i <= s.length - 1; i++) {
    if (firstLetter === s[i]) firstCnt++;
    else otherCnt++;

    if (firstCnt === otherCnt) {
      answer++;
      firstLetter = s[i + 1];

      firstCnt = 0;
      otherCnt = 0;
    }
    if (s[i + 2] === undefined) return answer + 1;
  }

  return answer;
}

// 채점 결과
// 정확성: 97.6
// 합계: 97.6 / 100.0

function solution(s) {
  if (s.length === 1) return 1;
  let answer = 0;
  let firstLetter = s[0];
  let firstCnt = 1;
  let otherCnt = 0;

  for (let i = 1; i <= s.length - 1; i++) {
    if (firstLetter === s[i]) firstCnt++;
    else otherCnt++;

    if (firstCnt === otherCnt) {
      answer++;
      firstLetter = s[i + 1];

      firstCnt = 0;
      otherCnt = 0;
    }
    if (s[i + 2] === undefined && s.length > 2) return answer + 1;
  }

  return answer;
}

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
