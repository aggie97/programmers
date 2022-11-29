function solution(sizes) {
  const widthArr = [];
  const heightArr = [];
  for (let i = 0; i < sizes.length; i++) {
    let [width, height] = sizes[i];
    widthArr.push(width);
    heightArr.push(height);
  }
  // console.log(widthArr, heightArr);

  const WalletSize = [];
  WalletSize.push(Math.max(...widthArr) * Math.max(...heightArr));
  for (let j = 0; j < widthArr.length; j++) {
    for (let k = j; k < heightArr.length; k++) {
      [widthArr[k], heightArr[k]] = [heightArr[k], widthArr[k]];
      const newSize = Math.max(...widthArr) * Math.max(...heightArr);
      if (newSize < WalletSize[WalletSize.length - 1]) {
        WalletSize.push(newSize);
      }
    }
    for (let l = j; l < widthArr.length; l++) {
      [widthArr[l], heightArr[l]] = [heightArr[l], widthArr[l]];
    }
  }
  console.log(WalletSize);
  return Math.min(...WalletSize);
}

// 테스트 케이스는 다 맞췄으나... 나머지는 오답 + 시간초과로 40.0 / 100.0

function solution(sizes) {
  const width = [];
  const height = [];
  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    width.push(max);
    height.push(min);
  }
  return Math.max(...width) * Math.max(...height);
}

// 진짜.. 너무 쉽게 풀리는 문제였다... 가로 세로 중 큰 값을 가로로, 작은 값을 세로로
// 임의로 설정해준 뒤에, 가로의 최대값 * 세로의 최대값 해주면 끝..
