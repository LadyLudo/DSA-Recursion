function calcTriangularNumber (number) {
    if (number === 1){
        return 1
    }
    return calcTriangularNumber(number-1) + number
}

console.log(calcTriangularNumber(6))