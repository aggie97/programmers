function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
  }
  return answer;
}

// 문제 이해하기가 왜 이리 어렵냐..
