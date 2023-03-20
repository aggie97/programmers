function solution(n) {
  let answer = n;
  const binaryN = n.toString(2);

  let cnt1 = 0;
  for (let i = 0; i < binaryN; i++) {
    if (binaryN[i] === "1") cnt1++;
  }
  let cnt2;
  while (cnt1 !== cnt2) {
    answer++;
    cnt2 = 0;
    const binary = answer.toString(2);
    for (let i = 0; i < binary; i++) {
      if (binary[i] === "1") cnt2++;
    }
  }
  return answer;
}

// 채점 결과 (전부 시간 초과...)
// 정확성: 30.0
// 효율성: 0.0
// 합계: 30.0 / 100.0

function solution(n) {
  let answer = n;
  let cnt1 = n.toString(2).split("0").join("").length;

  let cnt2;
  while (cnt1 !== cnt2) {
    answer++;
    cnt2 = answer.toString(2).split("0").join("").length;
  }
  return answer;
}

// 채점 결과
// 정확성: 70.0
// 효율성: 30.0
// 합계: 100.0 / 100.0
