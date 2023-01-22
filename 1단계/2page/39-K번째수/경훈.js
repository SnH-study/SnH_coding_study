function solution(array, commands) {
    const result = []
    commands.map((i) => {
        result.push(array.slice(i[0]-1, i[1]).sort((a,b) => a-b)[i[2]-1])
    })
    return result
}