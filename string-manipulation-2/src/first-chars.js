/* exported firstChars */
function firstChars(length, string) {
  var shortenedStr = '';

  for (let i = 0; i < length; i++) {
    if (string[i]) {
      shortenedStr += string[i];
    }
  }

  return shortenedStr;
}
