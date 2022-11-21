/* exported compact */
function compact(array) {
  var compactedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactedArray.push(array[i]);
    }
  }
  return compactedArray;
}
