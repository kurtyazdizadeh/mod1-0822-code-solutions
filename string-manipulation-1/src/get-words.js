/* exported getWords */
function getWords(string) {
  var words = [];
  var currentWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      words.push(currentWord);
      currentWord = '';
    }
  }
  if (currentWord.length) {
    words.push(currentWord);
  }
  return words;
}
