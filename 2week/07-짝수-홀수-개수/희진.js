function solution(num_list) {
    let even = 0;
    let odd = 0;
    var answer = [];

    num_list.map((item) => item % 2 === 0 ? even++ : odd++)
    answer.push(even, odd)
    return answer;
}