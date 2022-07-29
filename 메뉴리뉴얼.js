function solution(orders, course) {
  var answer = [];

  console.log("orders:", orders, "\ncourse:", course);
  let count = orders.length;
  for (let i = 0; i < count; i++) {
    let std = orders.shift();
    console.log("기준 메뉴:", std);
    orders.forEach((order) => {
      console.log("--비교 메뉴:", order);
      let menuCount = 0; // 같은 메뉴 카운트
      let menuStack = []; // 메뉴 저장소
      for (let j = 0; j < order.length; j++) {
        // 메뉴의 글자 하나씩 std와 대조
        if (std.includes(order[j])) {
          console.log("--겹치는 것:", order[j]);
          menuCount++;
          menuStack.push(order[j]);
        }
      }
      if (menuCount > 1) {
        console.log("--메뉴 스택:", menuStack);
        answer.push(menuStack.sort().join(""));
      }
      console.log("----------------");
    });
    orders.push(std);
  }
  answer = [...new Set(answer)];
  console.log("answer:", answer);
  return answer.sort();
}

// 테케는 2개 중 1개만 오답인 상태로 일단 채점해봤지만... 결과는 참혹.. ( 0.0 / 100.0 )
// 이틀을 걸려 풀이를 해석하려 했지만 실패.. 다음에 다시 풀어보자
