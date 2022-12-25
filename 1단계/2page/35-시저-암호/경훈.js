function solution(s, n) {
    let arr = s.split('').map(i => i.charCodeAt(0))
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 32){
            arr[i] = 32
        }else if(arr[i] > 64 && arr[i] < 91){
            if(arr[i] + n > 64 && arr[i] + n < 91){
                arr[i] = arr[i] + n
            }else{
                arr[i] = arr[i] + n - 26
            }
        }else if(arr[i] > 96 && arr[i] < 123){
            if(arr[i] + n > 96 && arr[i] + n < 123){
                arr[i] = arr[i] + n
            }else {
                arr[i] = arr[i] + n - 26
            }
        }
    }
    
    return arr.map(i => String.fromCharCode(i)).join('')
}