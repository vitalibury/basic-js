const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw 'Error: passing parameter is not array'
  }

  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i === arr.length - 1) {
          break
        }
        if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
          i += 2
          break;
        }
        i++
        break;

      case '--discard-prev':
        if (i === 0) {
          break
        }
        newArr.pop()
        break;

      case '--double-next':
        if (i === arr.length - 1) {
          break
        }
        newArr.push(arr[i + 1])
        break;

      case '--double-prev':
        if (i === 0) {
          break
        }
        newArr.push(arr[i - 1])
        break;

      default:
        newArr.push(arr[i])
        break;
    }
  }
  return newArr
};
