const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date == '' || date == null) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('THROWN')
  }
  let month = date.getMonth()
  if (month <= 1 || month >= 11) {
    return 'winter'
  } else if (month >= 2 && month <= 4) {
    return 'spring'
  } else if (month >= 5 && month <= 7) {
    return 'summer'
  } else if (month >= 8 && month <= 10) {
    return 'fall'
  } else {
    throw 'Error'
  }
};
