function solution(s) {
  const obj = {};
  return [...s].map((el, index) => {
    if (obj[el] === undefined) {
      obj[el] = [index];
      return -1;
    } else {
      obj[el].push(index);
      return obj[el].at(-1) - obj[el].at(-2);
    }
  });
}
