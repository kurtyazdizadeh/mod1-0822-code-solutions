/* exported reverseWords */
function reverseWords(string) {
  var words = string.split(' ');
  var reversedWords = [];

  for (var i = 0; i < words.length; i++) {
    var reversedWord = '';
    for (var j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
}
