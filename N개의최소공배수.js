function solution(arr) {
  let num = 1;
  let loop = true;
  while (loop) {
    num++;
    for (let i = 1; i < arr.length; i++) {
      if ((arr[0] * num) % arr[i] === 0) loop = false;
      else {
        loop = true;
        break;
      }
    }
  }
  return arr[0] * num;
}
