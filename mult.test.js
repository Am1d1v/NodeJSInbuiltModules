const mult = require('./mult');

describe('mult()', () => {

    test('Should return arg1 * arg2', () => {
        expect(mult(1, 2)).toBe(2);
    });

});