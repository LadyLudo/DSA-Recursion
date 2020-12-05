function mergeSort(array1, array2){
    let result = []
    while (array1.length > 0 && array2.length > 0){
        if (array1[0] <= array2[0]){
        result.push(array1.shift())
    }
    else {
        result.push(array2.shift())
    }
    }
    
    if(array1.length === 0){
        array2.forEach(item => {
            result.push(item)
        })
    }
    else if(array2.length === 0){
        array1.forEach(item => {
            result.push(item)
        })
    }
    return result
}

console.log(mergeSort([1,2,3], [2,3,4,5]))
