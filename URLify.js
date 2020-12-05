function URLify(string){
    let array = string.split(" ")
    return array.join("%20")

}

console.log(URLify('hello mom'))