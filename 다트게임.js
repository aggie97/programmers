function solution(dartResult) {
  var answer = 0;
  let scores = [];
  dartResult.match(/1?[0-9][SDT][*#]?/gi).map((shot, curr) => {
    const score = parseInt(shot);
    const [bonus, option] = shot.split(score)[1].split("");
    switch (bonus) {
      case "S":
        scores.push(score);
        break;
      case "D":
        scores.push(score ** 2);
        break;
      case "T":
        scores.push(score ** 3);
        break;
    }

    switch (option) {
      case "*":
        scores[curr] *= 2;
        if (curr > 0) scores[curr - 1] *= 2;
        break;
      case "#":
        scores[curr] *= -1;
        break;
    }
  });
  answer = scores.reduce((a, b) => a + b);

  return answer;
}
