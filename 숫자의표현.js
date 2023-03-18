function solution(n) {
  // 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 약수의 홀수의 갯수와 같다.
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1 && n % i === 0) answer++;
  }

  return answer;
}
