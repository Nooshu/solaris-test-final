/**
 * Convert a given number into Roman Numerals (node version)
 * @param {number} number The number you wish to convert to Roman Numerals.
 
 * @returns {string}; 
 */
module.exports = function romanNumeral(number){
  // Store the roman numeral symbols in a single array from 1 (I) to 1000 (M) 
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  // create an empty string to store the result
  let roman = "";

  // Use a for loop to extract the symbol and value from the array above using a single loop
  for (const [symbol, value] of romanNumerals) {
    // loop over the number that the user inputted
    // while the number inputted is greater than the higest value in our romanNumerals array
    while (number >= value) {
      // add the numeral to the results sting
      roman += symbol;
      // take away the value from the original number and loop again NOTE: the scope of 'number' is limited to the romanNumeralGenerator function (i.e. not global).
      number -= value;
    }
  }
  // return the string from the function
  return roman;
}