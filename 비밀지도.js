function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    answer.push([]);
  }

  arr1 = arr1.map((num) => {
    num = num.toString(2);
    return num.padStart(n, "0");
  });
  arr2 = arr2.map((num) => {
    num = num.toString(2);
    return num.padStart(n, "0");
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === arr2[i][j]) {
        arr1[i][j] === "1" ? (answer[i][j] = "#") : (answer[i][j] = " ");
      } else {
        answer[i][j] = "#";
      }
    }
    answer[i] = answer[i].join("");
  }
  return answer;
}

// 첫 트에 깔끔하게 ( 100.0 / 100.0 )
