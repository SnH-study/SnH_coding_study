function solution(num_list) {
    let i = 0;
    let j = 0;
    num_list.map((item) => {
        if(item % 2 == 0) i++;
        if(item % 2 == 1) j++;
    })
    
    let answer = [];
    answer.push(i, j);
    return answer;
}