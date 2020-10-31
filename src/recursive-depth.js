const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {  
    if (Array.isArray(arr)) {
      let depthCount = 0
      arr.forEach(element => {
        let deepStepArr = this.calculateDepth(element)
        if (deepStepArr > depthCount) {
          depthCount = deepStepArr
        }
      })
      return 1 + depthCount
    } else {
      return 0
    }
  }

};

