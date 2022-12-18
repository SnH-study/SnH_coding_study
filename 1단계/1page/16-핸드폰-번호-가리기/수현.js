const solution = (phone_number) => {
  let length = phone_number.length;
  let answer = phone_number.split('').reverse().slice(0, 4).join();

  console.log(answer);
};

// 다시 풀기..
