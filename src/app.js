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

module.exports = { calculator, reverseString, capitalize };