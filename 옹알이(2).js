function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    for (let j = 0; j < words.length; j++) {
      if (word.includes(words[j].repeat(2))) break;

      word = word.split(words[j]).join(" ");
    }
    if (word.split(" ").join("").length === 0) answer++;
  }

  return answer;
}
