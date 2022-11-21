/* exported numVowels */
function numVowels(string) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'A':
      case 'a':
      case 'E':
      case 'e':
      case 'I':
      case 'i':
      case 'O':
      case 'o':
      case 'U':
      case 'u':
        count++;
        break;
      default:
        break;
    }
  }

  return count;
}
