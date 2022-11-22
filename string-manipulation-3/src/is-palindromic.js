/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaces = string.replaceAll(' ', '');
  return noSpaces === noSpaces.split('').reverse().join('');
}
