function solution(number) {
  const nums = [...number];
  let count = 0;

  for (let i = 0, len = nums.length - 2; i < len; i++) {
    let tmp1 = nums.pop();

    for (let j = 0; j < nums.length; j++) {
      let tmp2 = nums[nums.length - 1 - j];

      for (let k = 0; k < nums.length - 1 - j; k++) {
        if (tmp1 + tmp2 + nums[k]) continue;
        count++;
      }
    }
  }
  return count;
}
