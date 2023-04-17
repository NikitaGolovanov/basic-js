const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  var i = 0
  while (i<members.length) {
    if (typeof members[i] != 'string') {
      members.splice(i,1)
      --i
    }
    ++i 
  }
  for (let i in members) {
    members[i]=members[i].toUpperCase().replace(/\s/g, '')
  }
  members=members.sort()
  var result = ''
  for (let i in members) result+=members[i][0]
  return result
}

module.exports = {
  createDreamTeam
};
