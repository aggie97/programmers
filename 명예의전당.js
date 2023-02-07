function solution(k, score) {
  const rankArray = [];
  return score.map((el, index) => {
    const day = index + 1;

    if (day > k) {
      if (el > rankArray.at(-1)) {
        rankArray.pop();
        rankArray.push(el);
      }
    } else rankArray.push(el);

    return rankArray.sort((a, b) => b - a).at(-1);
  });
}
