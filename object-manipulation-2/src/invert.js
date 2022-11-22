/* exported invert */
function invert(source) {
  var invertedObj = {};

  for (var key in source) {
    invertedObj[source[key]] = key;
  }

  return invertedObj;
}
