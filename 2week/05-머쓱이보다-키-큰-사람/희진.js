function solution(array, height) {
    let Array = array.filter(item => item > height)
    return Array.length;
}