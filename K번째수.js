function solution(array, commands) {
  var answer = [];

  commands.forEach((com) => {
    answer.push(
      array.slice(com[0] - 1, com[1]).sort((a, b) => a - b)[com[2] - 1]
    );
  });

  return answer;
}
