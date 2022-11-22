/* exported difference */
function difference(first, second) {
  var hash = {};
  var merged = [...first, ...second];
  var result = [];

  for (var i = 0; i < merged.length; i++) {
    if (hash[merged[i]] === undefined) {
      hash[merged[i]] = 1;
    } else {
      hash[merged[i]] += 1;
    }
  }

  for (var j = 0; j < merged.length; j++) {
    if (hash[merged[j]] === 1) {
      result.push(merged[j]);
    }
  }

  return result;
}
