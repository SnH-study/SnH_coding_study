function solution(s, n) {
    let answer = []
    for(let i = 0; i<s.length; i++){
        if((s[i].charCodeAt(0) + n > 64 &&
            s[i].charCodeAt(0) + n < 91 &&
            s[i].charCodeAt(0) !== 32) ||
          (s[i].charCodeAt(0) + n >96
           && s[i].charCodeAt(0) + n <123
          && s[i].charCodeAt(0) !== 32)){
            answer.push(s[i].charCodeAt(0) + n)
        }else if((s[i].charCodeAt(0) + n > 90 && s[i].charCodeAt(0) + n < 97) ||
                (s[i].charCodeAt(0) + n > 122)) {
            answer.push(s[i].charCodeAt(0) + n - 26)
        }else {
            answer.push(32)
        }
    }
    return answer.map(i => String.fromCharCode(i)).join('')
}