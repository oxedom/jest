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
        let code = text.charCodeAt(index + shift)
        arrCode.push(code)
    }

    return arrCode
}

function arrCodeStringfy(arr) {
    var str = String.fromCharCode.apply(...arr);
    return str
}



function caesarCipher(text, shift) {
    //Final Anseer
    let answer = undefined
    //String to Arr returns an Array with the words split up + the amount of words
    let stingArrObj = stringstoArr(text)
    //A for loop runs with with the lenght of the amount of words and converts each word into a CHAR code
    for (let index = 0; index < stingArrObj.wordCount; index++) {
        let a = charCode(stingArrObj.arr[index], shift)
        let b = arrCodeStringfy(a)
        console.log(b);
    }

}

caesarCipher("big ass in newyork", 0)

module.exports = { calculator, reverseString, capitalize, caesarCipher };