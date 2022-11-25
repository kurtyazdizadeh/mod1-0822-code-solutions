function generatePhrase(phrase) {
  var container = document.querySelector('.container');
  var phraseContainer = document.querySelector('.phrase');
  var charArray = phrase.split('');

  charArray.forEach(char => {
    var charSpan = document.createElement('span');
    if (char === ' ') {
      charSpan.className = 'space';
    }
    charSpan.textContent = char;
    phraseContainer.appendChild(charSpan);
  });
  container.appendChild(phraseContainer);

  return charArray.length;
}

function handleKeydown(event) {
  var currentChar = document.querySelector('.current');
  if (currentChar) {
    var nextChar = document.querySelector('.current + span');
    if (currentChar.textContent === event.key) {
      currentChar.className = 'correct';
      if (currentChar.textContent === ' ') {
        currentChar.className += ' space';
      }
      if (nextChar) {
        nextChar.className += ' current';
      } else {
        var resultsContainer = document.createElement('div');
        var results = document.createElement('span');
        results.textContent = `Errors: ${errors} // Accuracy: ${100 - (errors / phraseLength).toFixed(2) * 100}%`;
        resultsContainer.appendChild(results);
        var container = document.querySelector('.container');
        container.appendChild(resultsContainer);

      }
    } else {
      errors++;
      currentChar.className = 'current incorrect';
      if (currentChar.textContent === ' ') {
        currentChar.className += ' space';
      }
    }
  }
}

var errors = 0;
var phraseLength = generatePhrase('grumpy wizards make toxic brew');

var firstChar = document.querySelector('span:first-child');
firstChar.className = 'current';

document.body.addEventListener('keydown', handleKeydown);
