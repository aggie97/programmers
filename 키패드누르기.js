function getDistance(pos1, pos2) {
  return Math.ceil(
    Math.sqrt(
      Math.abs(pos1[0] - pos2[0]) ** 2 + Math.abs(pos1[1] - pos2[1]) ** 2
    )
  );
}

function solution(numbers, hand) {
  var answer = "";

  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let center = [2, 5, 8, 0];

  let LHpos = [3, 0];
  let RHpos = [3, 2];

  numbers.forEach((numKey) => {
    if (left.includes(numKey)) {
      LHpos = [left.indexOf(numKey), 0];
      answer += "L";
    } else if (right.includes(numKey)) {
      RHpos = [right.indexOf(numKey), 2];
      answer += "R";
    } else {
      const curr = [center.indexOf(numKey), 1];
      const leftToCurr = getDistance(LHpos, curr);
      const rightToCurr = getDistance(RHpos, curr);

      if (leftToCurr < rightToCurr) {
        LHpos = curr;
        answer += "L";
      } else if (rightToCurr < leftToCurr) {
        RHpos = curr;
        answer += "R";
      } else {
        if (hand === "left") {
          LHpos = curr;
          answer += "L";
        }
        if (hand === "right") {
          RHpos = curr;
          answer += "R";
        }
      }
    }
  });

  return answer;
}

// 첫 풀이 ( 60.0 / 100.0 )

// 두 번째 풀이 Math.ceil() 추가 ( 100.0 / 100.0 )
