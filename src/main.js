import {price, tripInfo, menu} from './components/index.js';

import {sort} from './components/sort.js';
import {generateSorts} from './data/sort-values';
const sorts = generateSorts();

import {filter} from './components/filter.js';
import {generateFilters} from './data/filter-values';
const filters = generateFilters();

import {eventForm} from './components/event-form';
import {generateEvents, groupByDay, generateAllDays} from './data/events';
const EVENT_COUNT = 15;
const events = generateEvents(EVENT_COUNT);

import {eventEdit} from './components/event-edit';
const eventEdition = generateEvents(1);

function renderElements(container, position, element) {
  container.insertAdjacentHTML(position, element);
}


window.onload = function () {
  const tripMain = window.document.getElementsByClassName(`trip-main`)[0];
  renderElements(tripMain, `afterbegin`, price());
  renderElements(tripMain, `afterbegin`, tripInfo());

  const tripControls = window.document.getElementsByClassName(`trip-controls`)[0];
  renderElements(tripControls, `beforeend`, menu());
  renderElements(tripControls, `beforeend`, filter(filters));

  const tripEvents = window.document.getElementsByClassName(`trip-events`)[0];
  renderElements(tripEvents, `beforeend`, sort(sorts));

  renderElements(tripEvents, `beforeend`, eventEdit(eventEdition));
 // renderElements(tripEvents, `beforeend`, eventForm(events));
  renderElements(tripEvents, `beforeend`, generateAllDays(groupByDay(events)));
};
