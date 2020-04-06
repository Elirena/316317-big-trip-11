import {price, tripInfo, menu, filter, sort, eventForm, event} from './components/index.js';

function renderElements(container, position, element) {
  container.insertAdjacentHTML(position, element);
}

window.onload = function () {
  const tripMain = window.document.getElementsByClassName(`trip-main`)[0];
  renderElements(tripMain, `afterbegin`, price());
  renderElements(tripMain, `afterbegin`, tripInfo());

  const tripControls = window.document.getElementsByClassName(`trip-controls`)[0];
  renderElements(tripControls, `beforeend`, menu());
  renderElements(tripControls, `beforeend`, filter());

  const tripEvents = window.document.getElementsByClassName(`trip-events`)[0];
  renderElements(tripEvents, `beforeend`, sort());
  renderElements(tripEvents, `beforeend`, eventForm());
  for (let i = 0; i <= 2; i++) {
    renderElements(tripEvents, `beforeend`, event());
  }

};
