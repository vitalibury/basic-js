const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: '',
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.value.split('').length
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let val = ''
    if (value === '') {
      val = '()'
    } else {
      val = `${value}`
    }
    if (this.value === '') {
      this.value = `( ${val} )`
    } else {
      this.value += `~~( ${val} )`
    }
    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Number.isInteger(position)) {
      this.value = ''
      throw new Error('THROWN')
    }
    if (position < 0 || position >= this.getLength()) {return}
    const stepArr = []
    let valueArr = this.value.split('~~')
    for (let i = 0; i < valueArr.length; i++) {
      if (i !== position - 1) {
        stepArr.push(valueArr[i])
      }
    }
    this.value = stepArr.join('~~')
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.value = this.value.split('~~').reverse().join('~~')
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let res = this.value
    this.value = ''
    return res
  }
};

module.exports = chainMaker;
