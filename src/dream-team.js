const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)) {
    return false
  }
  let str = ''
  for (let i = 0; i < members.length; i++) {
    if(typeof members[i] !== 'string') {
      continue
    } else {
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][j].toUpperCase() !== members[i][j].toLowerCase())  {
          str += members[i][j].toUpperCase()
          break;
        } else {
          continue
        }
      }
    }
  }
  return str.split('').sort().join('')   
};
