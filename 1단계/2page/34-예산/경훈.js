function solution(d, budget) {
    let count = 0;
    d.sort((a,b) => a-b).map((c,i) => {
        budget -= c
        if(budget >= 0) return count++;
    })
    return count
}