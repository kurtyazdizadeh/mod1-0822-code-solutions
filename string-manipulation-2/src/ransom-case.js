/* exported ransomCase */
function ransomCase(word) {
  var ransomWord = '';

  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      ransomWord += word[i].toLowerCase();
    } else {
      ransomWord += word[i].toUpperCase();
    }
  }

  return ransomWord;
}
