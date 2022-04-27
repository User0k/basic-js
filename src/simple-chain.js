const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )~~`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finishedStr = this.chain.join('');
    this.chain = [];
    return finishedStr.slice(0, finishedStr.length - 2);
  }
};

module.exports = {
  chainMaker
};
