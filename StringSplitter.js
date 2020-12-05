const result = []
let checked = ''
function stringSplitter(string, separator) {
 
    if(string.length === 0){
        result.push(checked)
        checked = ''
    }
    else if(string[0] === separator){
        result.push(checked)
        checked = ''
        stringSplitter(string.substring(1, string.length), separator)
    }
    else {
        checked += string[0]
        stringSplitter(string.substring(1, string.length), separator)
    }
    
}

stringSplitter('10/20/2020', '/')
console.log(result)
