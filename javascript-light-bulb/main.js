function handleToggleLights(event) {
  var container = document.querySelector('.container');
  var bulb = document.querySelector('.light-bulb');

  if (container.className.includes('dark')) {
    container.className = 'container';
    bulb.className = 'light-bulb';
  } else {
    container.className = 'container dark';
    bulb.className = 'light-bulb dark';
  }

}

var lightBulb = document.querySelector('.light-bulb');
lightBulb.addEventListener('click', handleToggleLights);
