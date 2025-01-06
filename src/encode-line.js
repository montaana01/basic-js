const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let current = '';
  let count = 0;

  str.split('').forEach((char, i) => {
    if (char === current) {
      count += 1;
    } else {
      if (count > 0) {
        if (count >1){
          result += count + current;
        } else {
          result += current;
        }
      }
      current = char;
      count = 1;
    }

    if (i === str.length - 1) {
      if (count >1){
        result += count + current;
      } else {
        result += current;
      }
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
