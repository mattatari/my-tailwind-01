const sum = require('./sum');

it('should return the sum of two positive integers', () => {
    expect(sum(2, 3)).toBe(5);
});