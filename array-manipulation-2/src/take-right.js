/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) return array;

  var takeRightArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    takeRightArr.push(array[i]);
  }

  return takeRightArr;
}
