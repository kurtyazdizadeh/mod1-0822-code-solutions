/* exported dropRight */
function dropRight(array, count) {
  var droppedArr = [];

  for (var i = 0; i < array.length - count; i++) {
    droppedArr.push(array[i]);
  }

  return droppedArr;
}
