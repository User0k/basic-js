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
  const nToStr = String(n);
  const arrToCompare = [];
  for (let i = 0; i < nToStr.length; i++) {
    arrToCompare.push(nToStr.slice(0, i) + nToStr.slice(i + 1));
  }

  return Math.max(...arrToCompare);
}

module.exports = {
  deleteDigit
};