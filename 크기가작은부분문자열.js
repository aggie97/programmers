function solution(t, p) {
  let count = 0;
  let tmp = [];
  [...t].forEach((_, index) => {
    for (let i = index; i < index + p.length; i++) {
      tmp.push(t[i]);
    }
    if (tmp.includes(undefined)) return;
    if (Number(tmp.join("")) <= Number(p)) count++;
    tmp = [];
  });
  return count;
}

// 원트 만에 성공!
