function max(array){
    let max = array[0]
    array.forEach(number => {
        if(number > max){
            max = number
        }
    })
    return max
}

console.log(max([1,2,3]))
