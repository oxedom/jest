function capitalize(a) {

    return a.toUpperCase();
}

function reverseString(a) {
    return a.split("").reverse().join("");

}

const calculator = {

    add(a, b) {
        return a + b
    },


    subtract(a, b) {
        return a - b
    },


    divide(a, b) {
        return a / b
    },

    multiply(a, b) {
        return a * b
    }


}

function stringstoArr(text) {
    let arr = undefined
    let wordCount = undefined
    arr = text.split(" ");
    wordCount = arr.length
    // arr = text.split('')

    return { arr, wordCount }
}



function charCode(text, shift = 0) {
    let arrCode = []
    for (let index = 0; index < text.length; index++) {
        let code = text.charCodeAt(index)
        arrCode.push(code + shift)
    }

    return arrCode
}

function arrCodeStringfy(arr) {
    var str = String.fromCharCode.apply(null, arr);
    return str
}



function caesarCipher(text, shift) {
    //Final Anseer
    let answer = undefined
    let cipherWords = []
    //String to Arr returns an Array with the words split up + the amount of words
    let stingArrObj = stringstoArr(text)
    //A for loop runs with with the lenght of the amount of words and converts each word into a CHAR code
    for (let index = 0; index < stingArrObj.wordCount; index++) {
        let wordCoded = charCode(stingArrObj.arr[index], shift)
        let wordCipher = arrCodeStringfy(wordCoded)
        cipherWords.push(wordCipher)
    }
    console.log(cipherWords.split(' '))


}

caesarCipher("big ass in newyork", 1)

module.exports = { calculator, reverseString, capitalize, caesarCipher };