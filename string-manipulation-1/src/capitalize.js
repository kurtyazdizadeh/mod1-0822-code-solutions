/* exported capitalize */
function capitalize(string) {
  var capitalizedWord = '';

  capitalizedWord = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    capitalizedWord += string[i].toLowerCase();
  }

  return capitalizedWord;
}
