function solution(n, a, b) {
  [a, b] = [Math.min(a, b), Math.max(a, b)];

  let std = n / 2;
  for (let i = Math.log2(n); i > 0; i--) {
    if (a <= std && b > std) return i;
    if (a > std) std += 2 ** (i - 2);
    if (b <= std) std -= 2 ** (i - 2);
  }
}

// 2레벨 답지 안 보고 푼 게 얼마만이냐... 시간은 오래걸렸지만 뿌듯하다
