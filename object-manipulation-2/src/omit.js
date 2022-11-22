/* exported omit */
function omit(source, keys) {
  var returnObj = {};

  for (var key in source) {
    if (!keys.includes(key)) {
      returnObj[key] = source[key];
    }
  }

  return returnObj;
}
