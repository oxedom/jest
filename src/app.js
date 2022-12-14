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

    return { arr, wordCount }
}



function charCode(text, shift = 0) {
    let code = undefined
    let arrCode = []
    for (let index = 0; index < text.length; index++) {
        //Z CASE
        if (text.charCodeAt(index) == 122) {
            code = 97
            arrCode.push(code)

        }
        else {
            code = text.charCodeAt(index)
            arrCode.push(code + shift)
        }



    }

    return arrCode
}

function arrCodeStringfy(arr) {
    var str = String.fromCharCode.apply(null, arr);
    return str
}



function caesarCipher(text, shift) {
    //Final Anseer
    let cipherWords = []
    //String to Arr returns an Array with the words split up + the amount of words
    let stingArrObj = stringstoArr(text)
    //A for loop runs with with the lenght of the amount of words and converts each word into a CHAR code
    for (let index = 0; index < stingArrObj.wordCount; index++) {
        let wordCoded = charCode(stingArrObj.arr[index], shift)
        let wordCipher = arrCodeStringfy(wordCoded)
        cipherWords.push(wordCipher)
    }
    let cipherOutput = cipherWords.join(' ')
    return cipherOutput


}

function analyzeArray(arr) {
    let answerObj = { length: undefined, min: undefined, max: undefined, avg: undefined }
    answerObj.length = arr.length
    answerObj.min = Math.min(...arr)
    answerObj.max = Math.max(...arr)
    answerObj.avg = arr.reduce((a, b) => a + b, 0) / arr.length
    answerObj.avg = Math.round(answerObj.avg)

    return { ...answerObj }

}
console.log(analyzeArray([4, 2, 1, 319, 1]))

module.exports = { calculator, reverseString, capitalize, caesarCipher, analyzeArray };