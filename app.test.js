const sum = require('./app.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


console.log(expect(sum(1, 2)));