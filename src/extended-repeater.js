const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} opt opt object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,opt) {
  var repeatTimes = 1
  if (opt.hasOwnProperty('repeatTimes')) repeatTimes = opt.repeatTimes
  var separator = '+'
  if (opt.hasOwnProperty('separator')) separator = opt.separator
  var addition = ''
  if (opt.hasOwnProperty('addition')) addition = opt.addition
  var additionRepeatTimes = 1
  if (opt.hasOwnProperty('additionRepeatTimes')) additionRepeatTimes = opt.additionRepeatTimes
  var additionSeparator = '|'
  if (opt.hasOwnProperty('additionSeparator')) additionSeparator = opt.additionSeparator
  var fin = ''
  
  for (let i = 0; i<repeatTimes;i++){
    fin+=str 
    for (let j = 0; j<additionRepeatTimes; j++) {
      fin+=addition
      if (j != additionRepeatTimes-1) fin+=additionSeparator
    }
    if (i != repeatTimes-1) fin+=separator
  }
  return fin
}


module.exports = {
  repeater
};
