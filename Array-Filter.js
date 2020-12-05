function overFive(array){
    let newArray = []
    array.forEach(number => {
        if(number >= 5){
            newArray.push(number)
        }
    })
    return newArray
}

console.log(overFive([1,2,4,43,3,3,3,3,4,5,688,7,8]))