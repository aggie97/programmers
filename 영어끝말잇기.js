function solution(n, words) {
  const temp = [];
  let count = 1;
  for (let i = 1; i <= words.length; i++) {
    if (
      temp.includes(words[i - 1]) ||
      (i > 1 && temp.at(-1).at(-1) !== words[i - 1][0])
    ) {
      return [((i - 1) % n) + 1, count];
    } else temp.push(words[i - 1]);

    if (i % n === 0) count++;
  }

  return [0, 0];
}
