function solution(cards1, cards2, goal) {
  if (goal.length === 2) return "Yes";
  let str1 = "";
  let str2 = "";
  for (let i = 0, len = goal.length; i < len; i++) {
    if (cards1.includes(goal[i])) {
      str1 += cards1.indexOf(goal[i]);
    } else if (cards2.includes(goal[i])) {
      str2 += cards2.indexOf(goal[i]);
    }
  }
  if (str1 !== [...str1].sort().join("")) return "No";
  else if (str2 !== [...str2].sort().join("")) return "No";
  else return "Yes";
}

// 30분 소요 채점 결과
// 정확성: 96.0
// 합계: 96.0 / 100.0
// 마지막 테스트 케이스 한 개 오답.

function solution(cards1, cards2, goal) {
  let cards1Index = 0;
  let cards2Index = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[cards1Index]) {
      cards1Index++;
    } else if (goal[i] === cards2[cards2Index]) {
      cards2Index++;
    } else return "No";
  }
  return "Yes";
}

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
