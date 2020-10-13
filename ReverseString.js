function reverseString(string){
    if (string.length === 1){
        return string
    }
    return reverseString(string.substr(1)) + string.charAt(0)
}

console.log(reverseString("hello"))