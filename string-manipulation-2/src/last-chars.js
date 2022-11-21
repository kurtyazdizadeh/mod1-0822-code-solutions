/* exported lastChars */
function lastChars(length, string) {
  var lastChars = '';

  for (let i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      lastChars += string[i];
    }
  }

  return lastChars;
}
