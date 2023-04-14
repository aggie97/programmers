function solution(n, m, section) {
  // 미터 당 구역 한 곳 총 n구역
  // 롤러 길이 m
  // 칠해야 하는 구역이 담긴 배열 section
  // 롤러로 페인트칠해야 하는 최소 횟수를 구하라
  // 칠해야 하는 구역이 롤러의 길이 이내로 붙어있는 경우 한 번의 칠로 두 구역 모두 칠할 수 있음.
  let answer = 1;
  let std = section[0] + m - 1;
  while (section.length > 0) {
    if (section[0] <= std) {
      section.shift();
    } else {
      answer++;
      std = section[0] + m - 1;
    }
  }

  return answer;
}
