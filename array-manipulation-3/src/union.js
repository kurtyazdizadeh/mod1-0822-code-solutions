/* exported union */
function union(first, second) {
  var hash = {};
  var merged = [...first, ...second];
  var result = [];

  for (var i = 0; i < merged.length; i++) {
    if (hash[merged[i]] === undefined) {
      hash[merged[i]] = 1;
      result.push(merged[i]);
    }
  }

  return result;
}
