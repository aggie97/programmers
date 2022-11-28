function solution(food) {
  let answer = "";
  for (let i = food.length - 1; i > 0; i--) {
    let foodCnt = Math.floor(food[i] / 2);
    for (let j = 0; j < foodCnt; j++) {
      answer = i + answer;
    }
  }
  return answer + "0" + answer.split("").reverse().join("");
}

// 이중 for문 대신 String.repeat() 메서드도 활용 가능하다...!
