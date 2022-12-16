const isPrime = (num) => {
  for (let j = 2; j * j <= num; j++) {
    if (num % j === 0) return false;
  }
  return true;
};

function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

// 소수 문제는 공식처럼 외우는 게 더 편할 것 같다...
