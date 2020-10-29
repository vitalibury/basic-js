const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let obj = {}
  obj.turns = 1
  
  const secInHour = 3600
  for(let i = 0; i < disksNumber - 1; i++) {
    obj.turns = (obj.turns *= (1*2)) + 1
  }
  let secStep = (secInHour / turnsSpeed)
  obj.seconds = Math.floor(secStep * obj.turns)
  return obj
};
