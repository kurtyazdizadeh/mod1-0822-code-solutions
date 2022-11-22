/* exported take */
function take(array, count) {
  var takeArr = [];

  for (var i = 0; i < count && i < array.length; i++) {
    takeArr.push(array[i]);
  }

  return takeArr;
}
