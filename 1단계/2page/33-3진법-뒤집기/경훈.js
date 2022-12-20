function solution(n) {
    let sum = 0
    n.toString(3).split('').map((c, i) => {
        sum += parseInt(c)*(3**i)
    })
    
    return sum
}