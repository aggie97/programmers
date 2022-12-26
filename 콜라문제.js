function solution(a, b, n) {
  let answer = 0;
  while (true) {
    let newCoke = Math.floor(n / a) * b;
    answer += newCoke;
    if (newCoke < 1) break;
    let rest = n % a;
    n = newCoke + rest;
  }
  return answer;
}

// 푸는 데 조금 오래 걸리긴 했지만.. 나만의 풀이로 풀었다는 거에 만족!
