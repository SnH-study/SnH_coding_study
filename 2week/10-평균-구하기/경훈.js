function solution(arr) {
    let sum = 0;
    arr.map(item => sum+=item)
    return sum/arr.length
}