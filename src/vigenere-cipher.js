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
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction; //true - direct machine //false - reverse machine
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    return this.process(encryptedMessage, key, 'decrypt');
  }

  process(sentence, passphrase, method) {
    const sentenceToUpperCase = sentence.toUpperCase();
    const passphraseToUpperCase = passphrase.toUpperCase();

    let result = '';
    let index = 0;

    for (let char of sentenceToUpperCase) {
      if (this.alphabet.includes(char)) {
        const shift = this.alphabet.indexOf(passphraseToUpperCase[index % passphraseToUpperCase.length]);
        const alphabetIndex = this.alphabet.indexOf(char);
        let newIndex;
        switch (method) {
          case "encrypt":
            newIndex = (alphabetIndex + shift) % 26;
            break;
          case "decrypt":const { NotImplementedError } = require('../extensions/index.js');
            newIndex = (alphabetIndex - shift + 26) % 26;
            break;
        }

        result += this.alphabet[newIndex];
        index += 1;
      } else {
        result += char;
      }
    }
    return this.direction ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
