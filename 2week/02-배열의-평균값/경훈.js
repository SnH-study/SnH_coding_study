function solution(numbers) {
    let sum = 0;
    numbers.map(item => sum += item)
    return sum / numbers.length;
}