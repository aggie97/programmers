function solution(nums) {
  const maxCnt = nums.length / 2;
  const filtered = [...new Set(nums)];
  return filtered.length < maxCnt ? filtered.length : maxCnt;
}
