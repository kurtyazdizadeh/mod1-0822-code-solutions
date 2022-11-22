/* exported chunk */
function chunk(array, size) {
  var containerArr = [];
  var subArr = [];

  for (var i = 0; i < array.length; i++) {
    if (subArr.length < size) {
      subArr.push(array[i]);
    } else {
      // shallow copy sub array into container array
      containerArr.push([...subArr]);
      // reset sub array
      subArr.length = 0;
      // if there are still more values in param array
      // start populating sub array with next value
      if (i < array.length) {
        subArr.push(array[i]);
      }
    }
  }

  // if there are leftover values in sub array
  // push the remainder into container array as last value
  if (subArr.length) {
    containerArr.push(subArr);
  }

  return containerArr;
}
