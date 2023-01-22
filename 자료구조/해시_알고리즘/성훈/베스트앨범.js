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
    // 의문점 : thisGenre에 합산된 재생 횟수 총합을 어떻게 genrePlayCnt에 반환 했는지?

    if (thisGenre) {
      thisGenre.play += song.play;
    } else {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });

  // 재생 횟수가 높은 순으로 정렬
  songs.sort((a, b) => b.play - a.play);
  genrePlayCnt.sort((a, b) => b.play - a.play);

  genrePlayCnt.forEach((value) => {
    let length = 0;
    songs.forEach((song) => {
      if (value.genre === song.genre && length < 2) {
        length++;
        answer.push(song.idx);
      }
    });
  });

  return answer;
};

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
