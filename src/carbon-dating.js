const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(...args) {
    if (args.length == 0) return false
    var sample = args[0] 
    if (typeof sample != 'string') return false
    if (isNaN(parseFloat(sample))) return false
    if (parseFloat(sample) > 15) return false
    if (parseFloat(sample) <= 0) return false

    return Math.ceil(Math.log(15/sample)/Math.log(2)*5730)



  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
