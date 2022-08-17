function solution(numbers) {
  var answer = [];
  for (let i = 0, j = numbers.length; i < j; i++) {
    let stdNum = numbers.pop();
    numbers.forEach((num) => {
      if (answer.includes(num + stdNum)) return;
      answer.push(num + stdNum);
    });
  }
  return answer.sort((a, b) => a - b);
}

// Set 객체를 이용하는 방법도 있으니 나중에 한 번 풀어보자..!
