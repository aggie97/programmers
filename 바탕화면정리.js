function solution(wallpaper) {
  let minX = wallpaper[0].length;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;
  wallpaper.forEach((line, index) => {
    if (!line.includes("#")) {
      minY++;
      maxY++;
      return;
    }
    maxY++;
    let minXTemp = line.indexOf("#");
    let maxXTemp = line.lastIndexOf("#");
    if (minXTemp < minX) minX = minXTemp;
    if (maxXTemp > maxX) maxX = maxXTemp;
  });
  return [minY, minX, maxY, maxX + 1];
}
// 첫 트.. 틀릴 거 알면서 제출했다. maxY 계산법이 틀렸다.
// 채점 결과
// 정확성: 67.7
// 합계: 67.7 / 100.0

function solution(wallpaper) {
  let minX = wallpaper[0].length;
  let minY = wallpaper.length;
  let maxX = 0;
  let maxY = 0;
  wallpaper.forEach((line, index) => {
    if (!line.includes("#")) return;

    if (maxY < index) maxY = index;
    if (minY > index) minY = index;

    let minXTemp = line.indexOf("#");
    let maxXTemp = line.lastIndexOf("#");
    if (minXTemp < minX) minX = minXTemp;
    if (maxXTemp > maxX) maxX = maxXTemp;
  });
  return [minY, minX, maxY + 1, maxX + 1];
}
