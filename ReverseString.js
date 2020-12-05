let result = ''
function reverseString(string){
    if(string.length === 1){
        result += string
    } else {
        reverseString(string.substring(1, string.length ))
        result += string.substring(1, 0)
    }
}



reverseString("hello")
console.log(result)