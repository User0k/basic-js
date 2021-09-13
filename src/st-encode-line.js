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
 export default function encodeLine(str) {
  let res = '';
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      temp++;
    } else {
      if (temp === 1) {
        res += str[i];
      } else {
        res += `${temp}${str[i]}`;
        temp = 1;
      }
    }
  }

  return res;
}
