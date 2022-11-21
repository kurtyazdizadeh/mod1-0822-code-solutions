/* exported isLowerCased */
function isLowerCased(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase() && string[i] !== '-') return false;
  }
  return true;
}
