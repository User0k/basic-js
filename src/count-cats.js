import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(arr) {
  let counter = 0;
  for (let box of arr) {
    for (let item of box) {
      if (item == "^^") {
        counter++;
      }
    }
  }

  return counter;
}

  // npm run test --test/count-cats.js запустить тест 1 файла