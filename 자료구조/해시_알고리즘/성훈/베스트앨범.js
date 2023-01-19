const solution = (genres, plays) => {
  const answer = [];
  let genrePlayCnt = [];

  // 노래 정보들을 담은 객체를 배열로 반환
  let songs = genres.map((value, idx) => {
    return {
      idx: idx,
      genre: value,
      play: plays[idx],
    };
  });

  // 노래 장르별 재생된 횟수 총합을 genrePlayCnt에 저장
  songs.forEach((song) => {
    let thisGenre = genrePlayCnt.find((_) => _.genre === song.genre);

    if (thisGenre) {
      thisGenre.play += song.play;
    } else {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });

  console.log(genrePlayCnt);
};
solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
