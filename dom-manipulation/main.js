var count = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function handleClick(event) {
  count++;
  clickCount.textContent = 'Clicks: ' + count;
  hotButton.className = 'hot-button nuclear';
  if (count < 16) {
    hotButton.className = 'hot-button hot';
  }
  if (count < 13) {
    hotButton.className = 'hot-button warm';
  }
  if (count < 10) {
    hotButton.className = 'hot-button tepid';
  }
  if (count < 7) {
    hotButton.className = 'hot-button cool';
  }
  if (count < 4 && count) {
    hotButton.className = 'hot-button cold';
  }
}

hotButton.addEventListener('click', handleClick);
