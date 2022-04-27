const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 const TABULA_RECTA = [
  [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z'
  ],
  [
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A'
  ],
  [
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B'
  ],
  [
    'D', 'E', 'F', 'G', 'H', 'I',
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C'
  ],
  [
    'E', 'F', 'G', 'H', 'I', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D'
  ],
  [
    'F', 'G', 'H', 'I', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E'
  ],
  [
    'G', 'H', 'I', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F'
  ],
  [
    'H', 'I', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G'
  ],
  [
    'I', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G',
    'H'
  ],
  [
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H',
    'I'
  ],
  [
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I',
    'K'
  ],
  [
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'K',
    'L'
  ],
  [
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'K', 'L',
    'M'
  ],
  [
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'K', 'L', 'M',
    'N'
  ],
  [
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'K', 'L', 'M', 'N',
    'O'
  ],
  [
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'K', 'L', 'M', 'N', 'O',
    'P'
  ],
  [
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I',
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q'
  ],
  [
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R'
  ],
  [
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S'
  ],
  [
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T'
  ],
  [
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U'
  ],
  [
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V'
  ],
  [
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I',
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W'
  ],
  [
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X'
  ],
  [
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y'
  ]
]

class VigenereCipheringMachine {
  constructor () {
    this.direct = true;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine
};
