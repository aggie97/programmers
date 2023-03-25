function solution(people, limit) {
  let answer = 0;
  const sorted = people.sort((a, b) => a - b);

  while (sorted.length) {
    if (sorted[0] + sorted.at(-1) <= limit) {
      sorted.shift();
      sorted.pop();
      answer++;
    } else {
      sorted.pop();
      answer++;
    }
  }
  return answer;
}
// 답지 본 풀이

// 채점 결과
// 정확성: 75.0
// 효율성: 25.0
// 합계: 100.0 / 100.0
