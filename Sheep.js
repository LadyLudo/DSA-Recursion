function countSheep(numberOfSheep) {
    if(numberOfSheep === 0) {
        return "All sheep jumped over the fence"
    }
    return numberOfSheep + ': Another sheep jumps over the fence' + "\n" + countSheep(numberOfSheep - 1)
    
}

console.log(countSheep(3));