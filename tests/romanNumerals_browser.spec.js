/** The tests we run in the browser using Chai assert */
describe('Roman Numerals', () => {
    it('should convert 3 to III', () => {
        chai.assert.equal(romanNumeralGenerator(3), 'III');
    });

    it('should convert 4 to IV', () => {
        chai.assert.equal(romanNumeralGenerator(4), 'IV');
    });

    it('should convert 9 to IX', () => {
        chai.assert.equal(romanNumeralGenerator(9), 'IX');
    });

    it('should convert 58 to LVIII', () => {
        chai.assert.equal(romanNumeralGenerator(58), 'LVIII');
    });

    it('should convert 1994 to MCMXCIV', () => {
        chai.assert.equal(romanNumeralGenerator(1994), 'MCMXCIV');
    });

    it('should convert 3549 to MMMDXLIX', () => {
        chai.assert.equal(romanNumeralGenerator(3549), 'MMMDXLIX');
    });

    it('should handle large numbers like 3999', () => {
        chai.assert.equal(romanNumeralGenerator(3999), 'MMMCMXCIX');
    });
});