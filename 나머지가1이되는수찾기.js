function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}

// 쉬운 문제..! 나머지가 1이 되는 가장 작은 수니까 가장 작은 수인 1부터 for문을 돌렸다.
