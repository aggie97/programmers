function solution(brown, yellow) {
  // 가로 >= 세로
  const carpetSize = brown + yellow;
  const answer = [];
  for (let i = 0; i <= Math.sqrt(carpetSize); i++) {
    if (carpetSize % i === 0) answer.push([carpetSize / i, i]);
  }
  return answer.filter((el) => (el[0] - 2) * (el[1] - 2) >= yellow).flat();
}

// 채점 결과
// 정확성: 76.9
// 합계: 76.9 / 100.0

function solution(brown, yellow) {
  // 가로 >= 세로
  const carpetSize = brown + yellow;
  const answer = [];
  for (let i = 0; i <= Math.sqrt(carpetSize); i++) {
    if (carpetSize % i === 0) answer.push([carpetSize / i, i]);
  }

  return answer.filter((el) => (el[0] - 2) * (el[1] - 2) === yellow).flat();
}

// 범위로 잡아두면 여러 가지 답이 나오기 때문에 오답이었던 듯 하다.
// >= 에서 === 으로 바꾸면서 단 하나의 답을 도출시키니까 해결.
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
