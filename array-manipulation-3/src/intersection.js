/* exported intersection */
function intersection(first, second) {
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

  var mergedSet = new Set(merged);
  var uniqueMerge = Array.from(mergedSet);
  for (var j = 0; j < uniqueMerge.length; j++) {
    if (hash[uniqueMerge[j]] === 2) {
      result.push(uniqueMerge[j]);
    }
  }

  return result;
}
