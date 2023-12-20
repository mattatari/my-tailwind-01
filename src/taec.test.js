const taec = require('./taec');

it ('should return the sum of two positive integers', () => {
    expect(taec.sum(2, 3)).toBe(5);
});

it ('should return the difference of two positive integers', () => {
    expect(taec.subtract(2, 3)).toBe(-1);
});