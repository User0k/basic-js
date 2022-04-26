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
  const nToStr = String(n).split('');
  const reg = new RegExp(nToStr.slice().sort((a, b) => a - b)[0]);
  return Number(nToStr.join('').replace(reg, ''));
}

module.exports = {
  deleteDigit
};
