function solution(arr) {
  var answer = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    let num = arr[i];
    if (arr[i - 1] === num) continue;
    answer.push(arr[i]);
  }
  return answer;
}

// filter 메서드를 사용하면 한 줄 코드 가능... 해보자!
