function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);

}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var mouseoverButton = document.querySelector('.hover-button');
mouseoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var doubleClickButton = document.querySelector('.double-click-button');
doubleClickButton.addEventListener('dblclick', handleDoubleClick);
