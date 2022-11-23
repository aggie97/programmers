function solution(ingredient, count = 0) {
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      if (stack.slice(-4).join("") === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }
  return count;
}

// 진짜... 시간 초과의 늪에서 1시간 반 동안 해매다가 결국 풀이를 보고 풀었다..
