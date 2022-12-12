function solution(n) {
    let str = n+'';
    let sum = 0;
    str.split('').map(item => sum+= parseInt(item))
    
    return sum;
}