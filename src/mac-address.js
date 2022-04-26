const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const last2Chars = n.slice(15).match(/[0-9A-F][0-9A-F]/);
  if (!last2Chars) return false;
  return n.match(/[0-9A-F][0-9A-F]-/g).length + last2Chars.length === 6;
}
module.exports = {
  isMAC48Address
};
