/* exported unique */
function unique(array) {
  var hash = {};
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (hash[array[i]]) continue;
    hash[array[i]] = 1;
    result.push(array[i]);
  }

  return result;
}
