function solution(arr, divisor) {
  var answer = arr.filter((e) => e % divisor === 0);
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

// 첫 트 ( 100.0 / 100.0 ) !
