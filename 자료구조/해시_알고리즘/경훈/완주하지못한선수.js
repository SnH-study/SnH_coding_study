function solution(participant, completion) {
  const set = new Set(participant);
  const isDuplicate = set.size < participant.length;

  if (isDuplicate) {
    let answer;
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i]) {
        answer = participant[i];
        return answer;
      }
    }
  }

  completion.map((i) => set.delete(i));
  const arr = [...set];
  return arr[0];
}
