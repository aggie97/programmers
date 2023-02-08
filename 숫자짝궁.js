function solution(X, Y) {
  const arrayX = [...X];
  const arrayY = [...Y];
  const temp = [];
  let answer = "";
  if (arrayX.some((el) => arrayY.includes(el))) {
    for (let i = arrayX.length - 1; i >= 0; i--) {
      for (let j = arrayY.length - 1; j >= 0; j--) {
        if (arrayX[i] === arrayY[j]) {
          temp.push(arrayX[i]);
          arrayX.splice(i, 1);
          arrayY.splice(j, 1);
        }
      }
    }
    answer += temp.sort((a, b) => Number(b) - Number(a)).join("");
    return Number(answer[0]) ? answer : "0";
  } else return "-1";
}

// 첫 번째 풀이 채점 결과 (시간 복잡도 불통과)
// 정확성: 73.7
// 합계: 73.7 / 100.0

function solution(X, Y) {
  const temp = [];
  let str = "";

  const objX = [...X].reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  const objY = [...Y].reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  for (let i = 0; i < Y.length; i++) {
    if ([...X].includes(Y[i])) temp.push(Y[i]);
  }

  const overlap = [...new Set([...temp])];

  for (let i = 0; i < overlap.length; i++) {
    if (objX[overlap[i]] >= objY[overlap[i]]) {
      for (let j = 0; j < objY[overlap[i]]; j++) {
        str += overlap[i];
      }
    }
  }
  const answer = [...str].sort((a, b) => Number(b) - Number(a)).join("");
  return Number(answer[0]) ? answer : answer ? "0" : "-1";
}
// 두 번째 풀이 채점 결과 (오답 + 시간복잡도 불통과)
// 정확성: 52.6
// 합계: 52.6 / 100.0

function solution(X, Y) {
  let answer = "";
  const xArr = [...X];
  const yArr = [...Y];
  for (let i = 9; i >= 0; i--) {
    const x = xArr.filter((str) => Number(str) === i);
    const y = yArr.filter((str) => Number(str) === i);
    answer += String(i).repeat(Math.min(x.length, y.length));
  }
  if (answer[0] === "0") return "0";
  return answer ? answer : "-1";
}

// 세 번째 풀이 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

// 풀이를 결국 보고야 말았다...
