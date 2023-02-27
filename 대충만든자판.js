function solution(keymap, targets) {
  const answer = [];

  let count = 0;

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      const newArr = [];
      for (let k = 0; k < keymap.length; k++) {
        if (keymap[k].indexOf(targets[i][j]) + 1) {
          newArr.push(keymap[k].indexOf(targets[i][j]) + 1);
        }
      }
      count += Math.min(...newArr);
    }
    answer.push(count);
    count = 0;
  }

  return answer[0] === Infinity ? [-1] : answer;
}

// 테스트 케이스는 다 맞췄지만..
// 채점 결과
// 정확성: 47.8
// 합계: 47.8 / 100.0

function solution(keymap, targets) {
  const answer = [];
  const myObj = {};

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      if (myObj[keymap[i][j]] === undefined || j + 1 < myObj[keymap[i][j]]) {
        myObj[keymap[i][j]] = j + 1;
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      count += myObj[targets[i][j]];
    }
    answer.push(count || -1);
  }

  return answer;
}

// 결국 Map을 사용한 다른 사람의 풀이를 보고 객체 사용하여 풀긴 풀었다.
// 객체를 사용하니까 시간 복잡도도 훨씬 완화되었다.
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
