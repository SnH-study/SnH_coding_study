function solution(s) {
    return s.split(' ').map((i) => {
        return i.split('').map((c, i) => {
            return i%2 == 0 ? c.toUpperCase() : c.toLowerCase()
        }).join('')
    }).join(' ')
}