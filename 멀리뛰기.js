function solution(n) {
  const temp = [1, 1];
  for (let i = 2; i <= n; i++) {
    temp[i] = (temp[i - 1] + temp[i - 2]) % 1234567;
  }

  return temp[n];
}

// DP로 피보나치 풀기
