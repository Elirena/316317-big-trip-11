import {render, RenderPosition} from "./utils/render.js";

import MenuComponent from './components/menu';
import TripPriceComponent from "./components/trip-price";
import TripInfoComponent from './components/trip-info';
import FilterComponent from './components/filter';
import DayListComponent from './components/day-list';

import TripController from "./controllers/trip-controller";

import {generateFilters} from './data/filter-values';
const filters = generateFilters();

import {generateEvents} from './data/events';

const price = 1200;

const EVENT_COUNT = 20;
const events = generateEvents(EVENT_COUNT);


onload = function () {
  const tripMain = document.getElementsByClassName(`trip-main`)[0];
  render(tripMain, new TripPriceComponent(price), RenderPosition.AFTERBEGIN);
  render(tripMain, new TripInfoComponent(), RenderPosition.AFTERBEGIN);

  const tripControls = document.getElementsByClassName(`trip-controls`)[0];
  render(tripControls, new MenuComponent(), RenderPosition.BEFOREEND);
  render(tripControls, new FilterComponent(filters), RenderPosition.BEFOREEND);

  const tripEvents = document.getElementsByClassName(`trip-events`)[0];

  const dayListComponent = new DayListComponent();
  const tripController = new TripController(dayListComponent);

  render(tripEvents, dayListComponent, RenderPosition.BEFOREEND);
  tripController.render(events);
};
