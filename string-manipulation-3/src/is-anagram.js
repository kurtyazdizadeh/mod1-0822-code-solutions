/* exported isAnagram */
function makeHash(string) {
  var hash = {};
  for (var i = 0; i < string.length; i++) {
    if (hash[string[i]]) {
      hash[string[i]] += 1;
    } else {
      hash[string[i]] = 1;
    }
  }
  return hash;
}

function isAnagram(firstString, secondString) {
  var firstHash = makeHash(firstString.replaceAll(' ', ''));
  var secondHash = makeHash(secondString.replaceAll(' ', ''));

  for (var key in firstHash) {
    if (firstHash[key] !== secondHash[key]) return false;
  }
  return true;
}
