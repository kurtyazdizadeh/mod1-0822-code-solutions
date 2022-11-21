/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstLetter = string[firstIndex];
  var secondLetter = string[secondIndex];

  var strArr = string.split('');
  strArr[secondIndex] = firstLetter;
  strArr[firstIndex] = secondLetter;

  return strArr.join('');
}
