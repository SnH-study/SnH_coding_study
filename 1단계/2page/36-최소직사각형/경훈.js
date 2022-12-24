function solution(sizes) {
    
    const sortArr = sizes.map(i => i.sort((a,b) => b-a))

    let maxArr = [];
    let minArr = [];
    
    sortArr.map(i => maxArr.push(i[0]))
    sortArr.map(i => minArr.push(i[1]))
    
    const maxSort = maxArr.sort((a,b) => b-a)[0]
    const minSort = minArr.sort((a,b) => b-a)[0]
    
    return maxSort * minSort
}