const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let string = `${str}`
  let addition
  if (options.addition === undefined) {
    addition = ''
  } else {
    addition = `${options.addition}`
  }
  let separator = ''
  let sepArr = []
  let optSep
  if (options.separator === '' || options.separator === undefined) {
    optSep = '+'
  }
  else {
    optSep = options.separator
  }
  let optAddSep
  if (options.additionSeparator == '') {
    optAddSep = '|'
  } else if (options.additionSeparator === undefined) {
    optAddSep = ''
  } else {
    optAddSep = options.additionSeparator
  }
  if (options.additionRepeatTimes === undefined) {
    sepArr.push(addition)
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      sepArr.push(addition)
    }
  }
  separator = sepArr.join(`${optAddSep}`)

  let finishStr = ''
  let stepArr = []

  if (options.repeatTimes === undefined) {
    stepArr.push(`${string}${separator}`)
    finishStr = stepArr.join('')
  } else {
    for (let j = 0; j < options.repeatTimes; j++) {
      stepArr.push(`${string}${separator}`)
    }
    finishStr = stepArr.join(`${optSep}`)
  }
  return finishStr
};
  
