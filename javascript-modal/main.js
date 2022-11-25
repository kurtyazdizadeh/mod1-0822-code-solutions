function handleClick(event) {
  var modalContainer = document.querySelector('.modal-container');
  if (modalContainer.classList.contains('hidden')) {
    modalContainer.className = 'modal-container';
  } else {
    modalContainer.className = 'modal-container hidden';
  }
}

var openButton = document.querySelector('#open');
var closeButton = document.querySelector('#close');

openButton.addEventListener('click', handleClick);
closeButton.addEventListener('click', handleClick);
