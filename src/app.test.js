const { calculator, capitalize, reverseString, caesarCipher } = require('./app.js')


//capitalize
test('Capitalize 1', () => {
    expect(capitalize('amit')).toBe('AMIT');
});

test('Capitalize 2', () => {
    expect(capitalize('jo3E')).toBe('JO3E');
});

//reverseString
test('Reverse String 1 (Numbers)', () => {
    expect(reverseString('321')).toBe('123');
});

test('Reverse String 2 (words)', () => {
    expect(reverseString('mice')).toBe('ecim');
});

test('Reverse String 3 (numbers and words)', () => {
    expect(reverseString('PZa3')).toBe('3aZP');
});

//calculator.add
test('calculator add 1 ', () => {
    expect(calculator.add(1, 5)).toBe(6);
})

test('calculator add 2', () => {
    expect(calculator.add(-10, 9)).toBe(-1);
})

test('calculator add 3', () => {
    expect(calculator.add(0.5, 1.5)).toBe(2);
})

//calculator.subtract
test('calculator subtract 1', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
})

test('calculator subtract 2', () => {
    expect(calculator.subtract(-5, -5)).toBe(0);
})

test('calculator subtract 3', () => {
    expect(calculator.subtract(100, 200)).toBe(-100);
})

//calculator.dvide
test('calculator divide 1', () => {
    expect(calculator.divide(20, 4)).toBe(5);
})

//calculator.dvide
test('calculator divide 2', () => {
    expect(calculator.divide(100, 4)).toBe(25);
})

//calculator.dvide
test('calculator divide 3', () => {
    expect(calculator.divide(-5, -2)).toBe(2.5);
})

//calculator.multiply
test('calculator multiply 1', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
})

test('calculator multiply 2', () => {
    expect(calculator.multiply(3, 33)).toBe(99);
})
test('calculator multiply 3', () => {
    expect(calculator.multiply(-5, -2)).toBe(10);
})

//caesarCipher 
test('caesarCipher 1', () => {
    expect(caesarCipher('face').toBe('gbdf'))
})

test('caesarCipher 2 ', () => {
    expect(caesarCipher('the biggest hat in the world').toBe('uif cjhhftu ibu jo uif xpsme'))
})

test('caesarCipher 3 ', () => {
    expect(caesarCipher('i live in a big zoo 3').toBe('j mjwf jo b cjh app 3'))
})


test('caesarCipher 4 ', () => {
    expect(caesarCipher('zzz').toBe('aaa'))
})







