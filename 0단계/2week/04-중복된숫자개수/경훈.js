function solution(array, n) {
    let count = 0;
    array.map((item) => {
        if(item == n) count++; 
    })
    return count;
}