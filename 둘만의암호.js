function solution(s, skip, index) {
  var answer = "";
  const skipUTF = [...skip].map((str) => str.charCodeAt());

  const sUTF = [...s].map((str) => {
    let increasedIndex = index;
    for (let i = 1; i <= index; i++) {
      if (skipUTF.includes(str.charCodeAt() + i)) increasedIndex++;
    }

    const utf = str.charCodeAt() + increasedIndex;

    return String.fromCharCode(utf > 122 ? (utf % 122) + 96 : utf);
  });

  answer += sUTF.join("");

  return answer;
}

// 첫 번째 풀이... 처참하다
// 채점 결과
// 정확성: 5.3
// 합계: 5.3 / 100.0

function solution(s, skip, index) {
  var answer = "";
  const lastUTF = "z".charCodeAt();

  const skipUTF = [...skip].map((str) => str.charCodeAt());

  const sUTF = [...s].map((str) => {
    let increasedIndex = index;
    let v = str.charCodeAt();
    for (let i = 1; i <= increasedIndex; i++) {
      if (v === lastUTF) v -= 26;
      v++;
      if (skipUTF.includes(v)) increasedIndex++;
    }
    return String.fromCharCode(v);
  });

  answer += sUTF.join("");

  return answer;
}

// 다른 사람의 풀이를 보고 다시 푼 것.. 접근 방법은 거의 비슷했는데 z -> a 로 가는 부분과 반복문 반복 횟수 증가 시키는 부분이 다르다..
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
