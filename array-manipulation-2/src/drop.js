/* exported drop */
function drop(array, count) {
  var dropArr = [];

  for (var i = count; i < array.length; i++) {
    dropArr.push(array[i]);
  }

  return dropArr;
}
