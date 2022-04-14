function solution(board, moves) {
  var answer = 0;

  const bowl = [];

  moves.forEach((move) => {
    for (let row of board) {
      if (row[move - 1]) {
        const pickedDoll = row.splice(move - 1, 1, 0);
        bowl.push(pickedDoll[0]);
        if (bowl[bowl.length - 1] === bowl[bowl.length - 2]) {
          bowl.splice(bowl.length - 2, 2);
          answer += 2;
        }
        return;
      }
    }
  });
  return answer;
}

// 첫 트만에 깔끔하게 ( 100.0 / 100.0 )
