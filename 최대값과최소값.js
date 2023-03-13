function solution(s) {
  const numArray = s.split(" ").map(Number);
  const [min, max] = [Math.min(...numArray), Math.max(...numArray)];
  return `${min} ${max}`;
}

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
