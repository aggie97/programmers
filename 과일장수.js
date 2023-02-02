function solution(m, score) {
  const boxCnt = Math.floor(score.length / m);
  const sortedScore = score.sort();
  let answer = 0;

  for (let i = 0; i < boxCnt; i++) {
    const temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(sortedScore.pop());
    }
    answer += Math.min(...temp) * m;
  }
  return answer;
}
