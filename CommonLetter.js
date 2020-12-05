//You are given a sentence and have to find the most commonly occurring character.

function mostCommon(string){
    //start with first character = 1
    //look at the next character, if it is the same, increase the first char value, else create new variabe and set to 1
    //check every character in the string and increment count or create new value for each
    //return the letter that has the highest value at the end

    let counts = {}
    for(let i=0; i < string.length; i++){
        let currentChar = string.charAt(i)
        //if currentChar is a key in counts, increase value
        if(Object.keys(counts).includes(currentChar)){
            counts[currentChar] += 1
        } else //if currentChar is not a key in counts, add it and set value to 1
        {
            counts[currentChar] = 1
        } 
    }
    console.log(counts)
    let maxLetter = string.charAt(0)
    let keys = Object.keys(counts)
    keys.forEach(letter => {
        if(counts[letter] > counts[maxLetter]){
           maxLetter = letter
        } 
    })
    
    return maxLetter
}

console.log(mostCommon('aaaaaaaaaa bbbc cccc d'))

