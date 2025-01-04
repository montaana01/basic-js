const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const ARR = n.toString().split('');
  const LENGTH = ARR.length;
  let result = 0;

  for (let i = 0; i < LENGTH; i += 1) {
    const temp = ARR.slice(0, i).concat(ARR.slice(i + 1));
    const number = Number(temp.join(''));
    result = Math.max(result, number);
  }

  return result;
}

module.exports = {
  deleteDigit
};
