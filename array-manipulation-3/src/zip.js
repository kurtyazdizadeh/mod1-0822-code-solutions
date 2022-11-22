/* exported zip */
function zip(first, second) {
  var shorterLength = first.length > second.length ? second.length : first.length;
  var result = [];

  for (var i = 0; i < shorterLength; i++) {
    result.push([first[i], second[i]]);
  }

  return result;
}
