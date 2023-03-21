function solution(s) {
  let answer = s;
  let limitCount = s.length / 2 + 1;

  while (limitCount !== 0) {
    if (answer.length === 0) return 1;

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) {
        answer = answer.replace(answer[i] + answer[i], "");
        break;
      }
    }
    limitCount--;
  }
  return 0;
}

// 시간 복잡도는 전혀 고려하지 않은 풀이... 오답은 전부 시간 초과

// 정확성: 35.3
// 효율성: 5.0
// 합계: 40.3 / 100.0

function solution(s) {
  let answer = s;
  let limitCount = s.length / 2;

  for (let i = 0; i < limitCount; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] === answer[j + 1]) {
        answer = answer.replace(answer[j] + answer[j], "");
        break;
      }
    }
  }
  return answer.length > 0 ? 0 : 1;
}

// while 문을 없애봤지만 이중 for문 + replace 때문에 시간 초과

// 정확성: 55.2
// 효율성: 5.0
// 합계: 60.2 / 100.0

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) === s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? 0 : 1;
}

// 결국 풀이를 보고 풀었다.. 스택을 이용한 풀이
