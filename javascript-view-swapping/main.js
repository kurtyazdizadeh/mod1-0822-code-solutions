function clickHandler(event) {
  var tabs = document.querySelectorAll('.tab');
  var views = document.querySelectorAll('.view');
  if (event.target.matches('.tab')) {
    tabs.forEach(tab => {
      if (tab === event.target) {
        tab.className += ' active';
      } else {
        tab.className = 'tab';
      }
    });
    var eventTargetDataView = event.target.getAttribute('data-view');
    views.forEach(view => {
      var currentDataView = view.getAttribute('data-view');
      if (currentDataView !== eventTargetDataView) {
        view.className += ' hidden';
      } else {
        view.className = 'view';
      }
    });
  }
}

var tabContainer = document.querySelector('.tab-container');
tabContainer.addEventListener('click', clickHandler);
