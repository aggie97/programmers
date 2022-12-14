function solution(price, money, count) {
  let myPocket = money;
  for (let i = 1; i <= count; i++) {
    myPocket -= price * i;
  }
  return myPocket < 0 ? -myPocket : 0;
}
