function solution(array, height) {
    let count = 0;
    array.map((item) => {
        if(item > height) count++;
    })
    return count
}