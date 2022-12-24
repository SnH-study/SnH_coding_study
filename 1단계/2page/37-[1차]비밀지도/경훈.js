function solution(n, arr1, arr2) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
        let str1 = arr1[i].toString(2)
        let str2 = arr2[i].toString(2)
        
        if(str1.length < n){
            str1 = "0".repeat(n-str1.length) + str1
        }
        
        if(str2.length < n){
            str2 = "0".repeat(n-str2.length) + str2
        }
        
        let strArr1 = str1.split('')
        let strArr2 = str2.split('')
        
        for(let j = 0; j<n; j++){
            if(strArr1[j] !== strArr2[j]){
                strArr1[j] = '1'            
            }
        }

        result.push(strArr1)
    }
    return result.map(i => i.join('').replace(/0/g,' ').replace(/1/g,'#'));
}