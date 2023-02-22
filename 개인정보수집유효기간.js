function solution(today, terms, privacies) {
  // today와 terms를 조합해서 약관 종류별로 오늘을 기준으로 만료 시기를 구한다.
  // privacies와 비교해서 답을 도출한다.

  const month = 28;

  today = today
    .split(".")
    .map(Number)
    .reduce((acc, curr, index) => {
      if (index === 0) return acc + curr * month * 12;
      else if (index === 1) return acc + curr * month;
      else return acc + curr;
    }, 0);

  terms = Object.fromEntries(terms.map((term) => term.split(" ")));

  const result = privacies
    .map((info, index) => {
      const [expPeriod, term] = info.split(" ");
      const termMonth = Number(terms[term]);

      const totalExpDays = expPeriod.split(".").map(Number);

      const sum =
        totalExpDays[0] * month * 12 +
        (totalExpDays[1] + termMonth) * month +
        totalExpDays[2];

      if (sum <= today) return index + 1;
    })
    .filter((v) => v);

  return result;
}

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
