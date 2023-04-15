switchPlayer(called, players.indexOf(called), players.indexOf(called) - 1);
function solution(players, callings) {
  let answer = [...players];

  const switchPlayer = (guys, calledIndex, switchedIndex) => {
    [guys[calledIndex], guys[switchedIndex]] = [
      guys[switchedIndex],
      guys[calledIndex],
    ];
    return guys;
  };

  callings.forEach((called) => {
    if (players.indexOf(called) !== 0) {
      answer = switchPlayer(
        answer,
        answer.indexOf(called),
        answer.indexOf(called) - 1
      );
    }
  });

  return answer;
}
// 시간 초과가 나올 것 같긴 했는데.. 오답이 나올 거라곤 생각 못 했다..
// 채점 결과
// 정확성: 25.0
// 합계: 25.0 / 100.0

switchPlayer(called, players.indexOf(called), players.indexOf(called) - 1);
function solution(players, callings) {
  let answer = [...players];

  const switchPlayer = (guys, calledIndex, switchedIndex) => {
    [guys[calledIndex], guys[switchedIndex]] = [
      guys[switchedIndex],
      guys[calledIndex],
    ];
    return guys;
  };

  callings.forEach((called) => {
    if (answer.indexOf(called) !== 0) {
      answer = switchPlayer(
        answer,
        answer.indexOf(called),
        answer.indexOf(called) - 1
      );
    }
  });

  return answer;
}

// 는 players를 쓰면 안되는데 한 군데에서 쓰고 있어서 그런 거였다. 하지만 시간 초과 때문에 여전히 ㅠㅠ
// 채점 결과
// 정확성: 68.8
// 합계: 68.8 / 100.0

function solution(players, callings) {
  let answer = [...players];

  const switchPlayer = (guys, calledIndex, switchedIndex) => {
    [guys[calledIndex], guys[switchedIndex]] = [
      guys[switchedIndex],
      guys[calledIndex],
    ];
    return guys;
  };

  callings.forEach((called) => {
    let calledIndex = answer.indexOf(called);
    if (calledIndex !== 0) {
      answer = switchPlayer(answer, calledIndex, calledIndex - 1);
    }
  });

  return answer;
}
// indexOf 메서드가 너무 많이 돌아가는 것 같아 한 번으로 줄여봤지만, 4개의 테스트 케이스에서 아직 시간초과가 나온다..
// 채점 결과
// 정확성: 75.0
// 합계: 75.0 / 100.0

function solution(players, callings) {
  const map = new Map();

  players.forEach((name, index) => {
    map.set(name, index);
  });

  callings.forEach((name) => {
    const current = map.get(name);
    const before = players[current - 1];

    [players[current], players[current - 1]] = [
      players[current - 1],
      players[current],
    ];

    map.set(name, map.get(name) - 1);
    map.set(before, map.get(name) + 1);
  });

  return players;
}

// 빡쳐서 답지 보니까 전부 객체 사용했길래 맵을 써봤다.. 매우 빠르다..
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
