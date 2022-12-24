function solution(sizes) {
    let widthArr = [];
    let heightArr = [];
    
    sizes.map((c) => {
        widthArr.push(c[0])
        heightArr.push(c[1])
    })
    
    const widthMax = widthArr.sort((a,b) => b-a)[0]
    const heightMax = heightArr.sort((a,b) => b-a)[0]
    const maxArr = [widthMax,heightMax]
    let arr2 = []
    
    sizes.map((i) => {
        arr2.push(Math.min.apply(null, i));
    })
    
    return Math.max.apply(null, maxArr) * Math.max.apply(null,arr2)
}