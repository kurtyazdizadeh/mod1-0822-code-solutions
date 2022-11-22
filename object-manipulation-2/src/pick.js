/* exported pick */
function pick(source, keys) {
  var returnObj = {};

  for (var key of keys) {
    if (source[key] !== undefined) {
      returnObj[key] = source[key];
    }
  }

  return returnObj;
}
