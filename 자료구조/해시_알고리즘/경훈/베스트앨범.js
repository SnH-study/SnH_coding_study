function solution(genres, plays) {
  let answer = [];
  let genrePlayCnt = [];
  let arr = genres.map((c, i) => {
    return {
      index: i,
      genre: c,
      play: plays[i],
    };
  });

  arr.forEach((song) => {
    let thisGenre = genrePlayCnt.find((i) => i.genre === song.genre);

    if (thisGenre) {
      thisGenre.play += song.play;
    } else {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });

  arr.sort((a, b) => b.play - a.play);
  genrePlayCnt.sort((a, b) => b.play - a.play);

  genrePlayCnt.forEach((value) => {
    let length = 0;
    arr.forEach((song) => {
      if (value.genre === song.genre && length < 2) {
        length++;
        answer.push(song.index);
      }
    });
  });

  return answer;
}
