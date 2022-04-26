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
  const DIRECTIONS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [0, -1],
  ];

  const mineMatrix  = [];
  //fills the field with zeroes;
  matrix.forEach(arr => mineMatrix.push(Array(arr.length).fill(0)));

  //defines if we are still in the matrix;
  function withinMatrix(x, y, arr) {
    return x >= 0 && y >= 0 && x < arr.length && y < arr[0].length;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      DIRECTIONS.forEach(move => {
        const dX = i + move[0];
        const dY= j + move[1];
        if (withinMatrix(dX, dY, matrix) && matrix[dX][dY]) {
          mineMatrix[i][j]++;
        };

      })
    }
  }

  return mineMatrix;
}

module.exports = {
  minesweeper
};
