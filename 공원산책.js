function solution(park, routes) {
  const answer = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      answer[0] = i;
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j] === "S") answer[1] = j;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const [direction, distance] = [routes[i][0], routes[i][2]];
    let cnt = 0,
      isMetX = false;

    for (let j = 0; j < distance; j++) {
      if (isMetX) break;
      switch (direction) {
        case "E":
          if (park[answer[0]][answer[1] + 1] === "O") {
            answer[1] += 1;
            cnt++;
          } else {
            answer[1] -= cnt;
            isMetX = true;
          }
          break;
        case "W":
          if (park[answer[0]][answer[1] - 1] === "O") {
            answer[1] -= 1;
            cnt++;
          } else {
            answer[1] += cnt;
            isMetX = true;
          }
          break;
        case "S":
          if (park[answer[0] + 1][answer[1]] === "O") {
            answer[0] += 1;
            cnt++;
          } else {
            isMetX = true;
            answer[0] -= cnt;
          }
          break;
        case "N":
          if (park[answer[0] - 1][answer[1]] === "O") {
            answer[0] -= 1;
            cnt++;
          } else {
            isMetX = true;
            answer[0] += cnt;
          }
          break;
      }
    }
  }
  return answer;
}

// 오답은 전부 런타임 에러.. 런타임 에러 오랜만에 보네
// 채점 결과
// 정확성: 40.0
// 합계: 40.0 / 100.0

function solution(park, routes) {
  const answer = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      answer[0] = i;
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j] === "S") answer[1] = j;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const [direction, distance] = routes[i].split(" ");
    let cnt = 0;
    let isBlocked = false;

    for (let j = 0; j < distance; j++) {
      if (isBlocked) break;
      switch (direction) {
        case "E":
          if (
            park[answer[0]][answer[1] + 1]
              ? park[answer[0]][answer[1] + 1] === "O"
              : false
          ) {
            answer[1] += 1;
            cnt++;
          } else {
            answer[1] -= cnt;
            isBlocked = true;
          }
          break;
        case "W":
          if (
            park[answer[0]][answer[1] - 1]
              ? park[answer[0]][answer[1] - 1] === "O"
              : false
          ) {
            answer[1] -= 1;
            cnt++;
          } else {
            answer[1] += cnt;
            isBlocked = true;
          }
          break;
        case "S":
          if (
            park[answer[0] + 1] ? park[answer[0] + 1][answer[1]] === "O" : false
          ) {
            answer[0] += 1;
            cnt++;
          } else {
            isBlocked = true;
            answer[0] -= cnt;
          }
          break;
        case "N":
          if (
            park[answer[0] - 1] ? park[answer[0] - 1][answer[1]] === "O" : false
          ) {
            answer[0] -= 1;
            cnt++;
          } else {
            isBlocked = true;
            answer[0] += cnt;
          }
          break;
      }
    }
  }
  return answer;
}

// 검색해보니까 이런 알고리즘 문제에서 런타임 에러는 보통 없는 인덱스 요소에 접근하려고 해서
// indexOut이 발생해 런타임 에러를 띄우는 거라고 한다. 고쳐줬더니 런타임 에러는 해결했지만
// 오답이 튀어나오네..
// 채점 결과
// 정확성: 90.0
// 합계: 90.0 / 100.0

function solution(park, routes) {
  const answer = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      answer[0] = i;
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j] === "S") answer[1] = j;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const [direction, distance] = routes[i].split(" ");
    let cnt = 0;
    let isBlocked = false;

    for (let j = 0; j < distance; j++) {
      if (isBlocked) break;
      switch (direction) {
        case "E":
          if (park[answer[0]]?.[answer[1] + 1] === "O") {
            answer[1] += 1;
            cnt++;
          } else {
            answer[1] -= cnt;
            isBlocked = true;
          }
          break;
        case "W":
          if (park[answer[0]]?.[answer[1] - 1] === "O") {
            answer[1] -= 1;
            cnt++;
          } else {
            answer[1] += cnt;
            isBlocked = true;
          }
          break;
        case "S":
          if (park[answer[0] + 1]?.[answer[1]] === "O") {
            answer[0] += 1;
            cnt++;
          } else {
            isBlocked = true;
            answer[0] -= cnt;
          }
          break;
        case "N":
          if (park[answer[0] - 1]?.[answer[1]] === "O") {
            answer[0] -= 1;
            cnt++;
          } else {
            isBlocked = true;
            answer[0] += cnt;
          }
          break;
      }
    }
  }
  return answer;
}

// 너무 길어서 옵셔널 체이닝을 사용해서 코드를 줄여봤다.

function solution(park, routes) {
  let answer = new Array(2);
  const [MAX_X, MAX_Y] = [park[0].length, park.length];
  outer: for (let i = 0; i < MAX_Y; i++) {
    for (let j = 0; j < MAX_X; j++) {
      if (park[i][j] === "S") {
        answer = [i, j];
        break outer;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const [direction, distance] = routes[i].split(" ");

    let [h, w] = answer;
    let temp = [];

    switch (direction) {
      case "E":
        w += parseInt(distance);
        if (w >= MAX_X) break;
        temp = park[h].slice(answer[1], w + 1);
        if (!temp.includes("X")) answer = [h, w];
        break;
      case "W":
        w -= parseInt(distance);
        if (w < 0) break;
        temp = park[h].slice(w, answer[1] + 1);
        if (!temp.includes("X")) answer = [h, w];
        break;
      case "S":
        h += parseInt(distance);
        if (h >= MAX_Y) break;
        for (let i = answer[0]; i <= h; i++) {
          temp.push(park[i][w]);
        }
        if (!temp.includes("X")) answer = [h, w];
        break;
      case "N":
        h -= parseInt(distance);
        if (h < 0) break;
        for (let i = h; i <= answer[0]; i++) {
          temp.push(park[i][w]);
        }
        if (!temp.includes("X")) answer = [h, w];
        break;
    }
  }
  return answer;
}

// 결구 다른 풀이 참조해서 풀어버림.. 하아 테케 2개 때문에 거의 다 갈아엎었네
