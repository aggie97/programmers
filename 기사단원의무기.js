function solution(number, limit, power) {
  const temp = new Array(number);
  for (let i = 1; i <= number; i++) {
    temp[i - 1] = i;
  }

  return temp
    .map((num) => {
      const arr = [];
      const isCenterInt = Number.isInteger(Math.sqrt(num));
      if (num === 1) return 1;
      for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) arr.push(i);
      }

      if (isCenterInt) arr.pop();

      const divisor = isCenterInt ? arr.length * 2 + 1 : arr.length * 2;

      if (divisor > limit) return power;
      return divisor;
    })
    .reduce((a, b) => a + b);
}

// 첫 트만에 성공! (오래걸린 테스트: 16, 98.02ms)
