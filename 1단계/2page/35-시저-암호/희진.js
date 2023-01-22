// function solution(s, n) {
//     let arr = []
//     for (let i = 0 ; i < s.length ; i++){
//         if ((65 <= s.charCodeAt(i)+n && s.charCodeAt(i)+n <=90) || (97 <= s.charCodeAt(i)+n && s.charCodeAt(i)+n <= 122)){
//             // console.log(s.charCodeAt(i)+n)
//             arr.push(s.charCodeAt(i) + n)
//             // console.log('arr1',arr)
//         } if(s.charCodeAt(i) == 32){
//             arr.push(s.charCodeAt(i))
//             // console.log('arr2',arr)
//         } if ( (s.charCodeAt(i)+n > 90 && s.charCodeAt(i)+n < 97) || s.charCodeAt(i)+n > 122 ){
//             // console.log('3 i?',s.charCodeAt(i))
//             arr.push(s.charCodeAt(i) + n -26)
//             // console.log('if3 +n -26',s.charCodeAt(i)+n - 26)
//             // console.log('arr3',arr)
//         }
//     }
            
//         let answer = String.fromCodePoint(...arr)
//     return answer
// }

// 테스트코드에서 n이 20 이상 엄청 커졌을때 에러발생 => 대소문자 따로 돌려야한다... ! 


function solution(s, n) {
    let arr = []
    for (let i = 0 ; i < s.length ; i++){
        // 빈문자인경우
        if(s.charCodeAt(i) == 32){
            arr.push(s.charCodeAt(i))
        }
        //대문자일경우
        if (s.charCodeAt(i)>=64 && s.charCodeAt(i)<=90) {
        (65 <= s.charCodeAt(i)+n && s.charCodeAt(i)+n <=90) ? arr.push(s.charCodeAt(i) + n) : arr.push(s.charCodeAt(i) + n -26)  
        }
        
        //소문자일경우
        if (s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
        (97 <= s.charCodeAt(i)+n && s.charCodeAt(i)+n <= 122) ? arr.push(s.charCodeAt(i) + n) : arr.push(s.charCodeAt(i) + n -26)
        }
    }
    let answer = String.fromCodePoint(...arr)
    return answer
}