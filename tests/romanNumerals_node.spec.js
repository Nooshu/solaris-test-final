/** The tests we run in node using node's native assert */
const assert = require('assert');

// Pull in the unit of code we wish to test
var romanNumerals = require("../romanNumerals_node");

describe('Roman Numerals', () => {
  it('should convert 3 to III', () => {
    assert.equal(romanNumerals(3), 'III');
  });

  it('should convert 4 to IV', () => {
    assert.equal(romanNumerals(4), 'IV');
  });

  it('should convert 9 to IX', () => {
    assert.equal(romanNumerals(9), 'IX');
  });

  it('should convert 58 to LVIII', () => {
    assert.equal(romanNumerals(58), 'LVIII');
  });

  it('should convert 1994 to MCMXCIV', () => {
    assert.equal(romanNumerals(1994), 'MCMXCIV');
  });

  it('should convert 3549 to MMMDXLIX', () => {
    assert.equal(romanNumerals(3549), 'MMMDXLIX');
  });

  it('should handle large numbers like 3999', () => {
    assert.equal(romanNumerals(3999), 'MMMCMXCIX');
  });
});