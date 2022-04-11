function solution(answers) {
  var answer = [];

  let a = [1, 2, 3, 4, 5].join("");
  a = a
    .padEnd(answers.length, a)
    .split("")
    .map((v) => parseInt(v));
  let b = [2, 1, 2, 3, 2, 4, 2, 5].join("");
  b = b
    .padEnd(answers.length, b)
    .split("")
    .map((v) => parseInt(v));
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5].join("");
  c = c
    .padEnd(answers.length, c)
    .split("")
    .map((v) => parseInt(v));

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  for (let i = 0; i < answers.length; i++) {
    if (a[i] === answers[i]) aCount++;

    if (b[i] === answers[i]) bCount++;

    if (c[i] === answers[i]) cCount++;
  }

  const topScore = Math.max(aCount, bCount, cCount);

  const mathForgiver = {
    1: aCount,
    2: bCount,
    3: cCount,
  };

  for (let i = 1; i < 4; i++) {
    if (mathForgiver[i] === topScore) answer.push(i);
  }

  return answer;
}
