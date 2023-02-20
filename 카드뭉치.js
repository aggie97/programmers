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
  // 인덱스가 "123...91011"과 같이 문자열로 나열되어있는 str1과 str2에 sort 사용 시,
  // 10의 자리 이상부터는 제대로 정렬이 되지 않을 뿐더러, 스프레드 연산자를 사용하면 10의 자리 구분없이 전부 1의 자리로 나뉘어진다.
  // 만약 sort를 사용할 거라면 처음부터 문자열이 아닌 배열로 각 인덱스를 담아 10의 자리를 보존시키고, sort((a, b) => a - b)와 같이 오름차순으로 정렬해줘야함.
  // 해줬는데도.. 오답이네...
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
