function solution(name, yearning, photo) {
  const score = {};
  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  return photo.map((aPhoto) => {
    return aPhoto.reduce((acc, curr) => acc + (score[curr] || 0), 0);
  });
}
