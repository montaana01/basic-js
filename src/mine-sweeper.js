const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {

      if (matrix[row][col] === true) {
        result[row][col] = 1;
      } else {
        let count = 0;

        if (row > 0 && col > 0 && matrix[row - 1][col - 1] === true) count += 1;
        if (row > 0 && matrix[row - 1][col] === true) count += 1;
        if (row > 0 && col < cols - 1 && matrix[row - 1][col + 1] === true) count += 1;
        if (col > 0 && matrix[row][col - 1] === true) count += 1;
        if (col < cols - 1 && matrix[row][col + 1] === true) count += 1;
        if (row < rows - 1 && col > 0 && matrix[row + 1][col - 1] === true) count += 1;
        if (row < rows - 1 && matrix[row + 1][col] === true) count += 1;
        if (row < rows - 1 && col < cols - 1 && matrix[row + 1][col + 1] === true) count += 1;

        result[row][col] = count;
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
