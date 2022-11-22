/* exported titleCase */
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function checkForArticle(string) {
  switch (string.toLowerCase()) {
    case 'the':
    case 'for':
    case 'and':
    case 'but':
    case 'as':
    case 'by':
    case 'per':
    case 'to':
    case 'on':
    case 'in':
    case 'at':
    case 'of':
      return true;
    default:
      return false;
  }
}

function titleCase(title) {
  var words = title.split(' ');
  var apaTitle = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    if (word.includes('javascript')) {
      apaTitle.push(word.replace('javascript', 'JavaScript'));
      continue;
    }
    if (word === 'api') {
      apaTitle.push(word.toUpperCase());
      continue;
    }
    if (word.includes('-')) {
      var [partOne, partTwo] = word.split('-');
      apaTitle.push(`${capitalize(partOne)}-${capitalize(partTwo)}`);
      continue;
    }
    if (i === 0 || word.length > 3) {
      apaTitle.push(capitalize(word));
    } else {
      if (
        checkForArticle(word) &&
        words[i - 1][words[i - 1].length - 1] !== ':'
      ) {
        apaTitle.push(word);
      } else {
        apaTitle.push(capitalize(word));
      }
    }
  }

  return apaTitle.join(' ');
}
