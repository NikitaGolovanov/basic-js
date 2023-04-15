const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  var arr1 = s1.split("")
  var arr2 = s2.split("")

  var n=0
  var i=0
 
  while (i<arr1.length) {
    var j=0
    while (j<arr2.length) {
      if (arr1[i] == arr2[j]) {
        arr1.splice(i,1)
        arr2.splice(j,1)
        n++
        i--
      }
      j++
    }
    i++
  }
  
  return n
}

module.exports = {
  getCommonCharacterCount
};
