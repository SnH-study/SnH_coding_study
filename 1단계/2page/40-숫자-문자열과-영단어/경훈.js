function solution(s) {
    s = s.replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9)
    return parseInt(s);
}

function solution(s) {
    const data = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let answer = s
    
    for(let i = 0; i< data.length; i++){
        let arr = answer.split(data[i])
        answer = arr.join(i);
    }
    return parseInt(answer)
}