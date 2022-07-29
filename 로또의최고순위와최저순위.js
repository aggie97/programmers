function solution(lottos, win_nums) {
  var answer = [];
  var rank = 6;
  var minCount = 0;
  var maxCount = 0;

  lottos.map((num) => {
    if (win_nums.includes(num)) {
      minCount++;
    } else {
      if (!num) maxCount++;
    }
  });

  if (minCount > 1) {
    let lowest = rank - minCount + 1;
    let highest = lowest - maxCount;

    answer.push(highest < 1 ? 1 : highest);
    answer.push(lowest);
  } else {
    let lowest = rank;
    let highest = rank - maxCount;

    answer.push(highest < 1 ? 1 : highest);
    answer.push(lowest);
  }

  return answer;
}

// 첫 트 ( 100.0 / 100.0 )
// 이긴 한데... 3주 쉬니까 감이 너무 떨어졌다..ㅋㅋ 이렇게 길게 쓸 문제가 아닌데 ㅠ
