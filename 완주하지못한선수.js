function solution(participant, completion) {
  var answer = "";
  participant = participant.sort();
  completion = completion.sort();

  while (completion.length > 0) {
    if (
      participant[participant.length - 1] === completion[completion.length - 1]
    ) {
      participant.pop();
      completion.pop();
    } else {
      answer += participant.pop();
    }
  }
  return answer;
}

// 첫 트 ( 90.0 / 100.0 ) 까비... 정확성에서 하나 틀렸다..

// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ뭐냐 이건... 허무하네 진짜

function solution(participant, completion) {
  var answer = "";
  participant = participant.sort();
  completion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
