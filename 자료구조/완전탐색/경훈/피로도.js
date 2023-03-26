function solution(k, dungeons) {
  let answer = 0;
  let visit = new Array(dungeons.length).fill(0);

  const dfsFunc = (hp, result) => {
    answer = Math.max(answer, result);
    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= hp && !visit[i]) {
        visit[i] = 1;
        dfsFunc(hp - dungeons[i][1], result + 1);
        visit[i] = 0;
      }
    }
  };

  dfsFunc(k, 0);

  return answer;
}
