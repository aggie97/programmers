function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0, len = A.length; i < len; i++) {
    answer = answer + Math.max(...A) * Math.min(...B);
    A.pop();
    B.pop();
  }

  return answer;
}

// 채점 결과
// 정확성: 69.6 (100)
// 효율성: 0.0 (시간초과)
// 합계: 69.6 / 100.0

function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);

  for (let i = 0, len = A.length; i < len; i++) {
    answer += A[A.length - 1 - i] * B[i];
  }
  return answer;
}

// 생각해보니 sort를 써서 정렬된 상태라면
// 굳이 Math를 사용해서 매번 연산하여 최대 최소를 거를 필요가 없고,
// pop() 메서드를 사용해 빼지 않고 순서대로 참조만 하면 된다..

// 채점 결과
// 정확성: 69.6
// 효율성: 30.4
// 합계: 100.0 / 100.0
